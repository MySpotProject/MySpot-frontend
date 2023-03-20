import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyAuth } from "./app/lib/auth";

export async function middleware(req = NextRequest) {
    const token = req.cookies.get("JWT")?.value;
    const verifiedToken =
        token &&
        (await verifyAuth(token).catch((err) => {
            console.log(err);
        }));
    if (req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
        return;
    }
    if (req.nextUrl.pathname.startsWith("/signup") && !verifiedToken) {
        return;
    }
    if (req.url.includes("/signup") && verifiedToken) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (req.url.includes("/login") && verifiedToken) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (!verifiedToken) {
        return NextResponse.redirect(new URL("/signup", req.url));
    }
}

export const config = {
    matcher: ["/map", "/login", "/signup"],
};
