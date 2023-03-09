import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(req = NextRequest) {
    const token = localStorage.getItem("token");
    const url = req.url;
    console.log("middle", url);
    if (url.includes("/map")) {
        if (token === undefined) {
            return NextResponse.redirect("/signup");
        }
    }
}
