import { jwtVerify, SignJWT } from "jose";

export const getJwtSecretKey = () => {
    const secret = process.env.NEXT_SECRET_JWT;

    if (!secret || secret.length === 0) {
        throw new Error("secret key is not set");
    }
    return secret;
};

export const verifyAuth = async (token) => {
    try {
        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(getJwtSecretKey())
        );
        return verified.payload;
    } catch (error) {
        throw new Error("Your token has expired.");
    }
};
