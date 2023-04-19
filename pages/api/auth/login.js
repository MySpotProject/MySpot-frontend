/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import axios from "axios";

const secret = process.env.NEXT_PUBLIC_SECRET;

export default async function (req, res) {
    const { email, password } = req.body;
    await axios
        .post(process.env.NEXT_PUBLIC_API + "/auth/sign_in", {
            email,
            password,
        })
        .then(function (response) {
            const token = sign(
                {
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
                    email: email,
                },
                secret
            );
            const serialised = serialize("MySpot_JWT", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: "/",
            });
            res.setHeader("Set-Cookie", serialised);
            res.json({ response });
        })
        .catch(function (error) {
            res.json({ error });
        });
}
