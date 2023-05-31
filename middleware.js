import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";
// import { verifyAuth } from "./lib/auth";

export async function middleware(req = NextRequest) {
    const token = req.cookies.get("222222222myspot_jwt")?.value;
    // console.log(token);
    // const verifiedToken =
    //     token &&
    //     (await verifyAuth(token).catch((err) => {
    //         console.log(err);
    //     }));
    // console.log(verifiedToken);
    if (req.nextUrl.pathname.startsWith("/login") && !token) {
        return;
    }
    if (req.nextUrl.pathname.startsWith("/signup") && !token) {
        return;
    }

    if (req.url.includes("/signup") && token) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (req.url.includes("/login") && token) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (!token) {
        return NextResponse.redirect(new URL("/signup", req.url));
    }
}

export const config = {
    matcher: ["/login", "/signup"],
};
