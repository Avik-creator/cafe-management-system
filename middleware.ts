import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  try {
    let loggedin = req.cookies.get("access");

    const { pathname } = req.nextUrl;

    if (loggedin && pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (!loggedin && pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch (error) {
    console.error("Error in middleware:", error);
  }
}

export const config = { matcher: ["/dashboard/:path*"] };
