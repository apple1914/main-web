import { NextResponse } from "next/server";
// import { encodeOptions } from "./utils/pathShenanigans";

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  console.log("MIIIDDDLEEEEWARE LAUNCH FOR SIGN_UP");
  // if (request.nextUrl.pathname.includes("/sign-up") === "/sign-up") {
  const searchParams = request.nextUrl.searchParams;
  const kaido = searchParams.get("kaido") || "BANLPOR";
  const group = searchParams.get("group") || "middleware-default";
  const utm_campaign = searchParams.get("utm_campaign") || "middleware-default";
  const from = searchParams.get("from") || "USD";
  const amount = searchParams.get("amount") || "100";
  console.log("MIIIDDDLEEEEWARE TRIIIIG");

  return NextResponse.rewrite(
    new URL(
      `/sign-up/${kaido}/${utm_campaign}/${group}/${from}/${amount}`,
      request.nextUrl
    )
  );
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/sign-up/:path*",
};
