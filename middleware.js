import { NextResponse } from "next/server";
// import { encodeOptions } from "./utils/pathShenanigans";

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  // if (request.nextUrl.pathname.includes("/sign-up") === "/sign-up") {
  const searchParams = request.nextUrl.searchParams;
  const kaida = searchParams.get("kaida") || "BANLPOR";
  const from = searchParams.get("from") || "USD";
  const amount = searchParams.get("amount") || "100";
  const newPath = `/sign-up/${kaida}/${utm_campaign}/${group}/${from}/${amount}`;
  console.log("MIIIDDDLEEEEWARE TRIIIIG", searchParams, newPath);

  return NextResponse.rewrite(new URL(newPath, request.nextUrl));
  // // }
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-up", "/sign-in", "/withdrawal"],
};
