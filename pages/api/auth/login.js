/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.NEXT_SECRET;

export default async function (req, res) {
    const { email, password } = req.body;
    if (email === "O.liGo.Rr@ya.ru" && password === "123morgen123") {
        const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
                email: email,
            },
            secret
        );

        const serialised = serialize("JWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30, //30 days
            path: "/",
        });

        res.setHeader("Set-Cookie", serialised);

        res.status(200).json({ message: "Success!" });
    } else {
        res.json({ message: "Invalid credentials!" });
    }
}
