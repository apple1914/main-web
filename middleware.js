import { NextResponse } from "next/server";
// import { encodeOptions } from "./utils/pathShenanigans";

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  // if (request.nextUrl.pathname.includes("/sign-up") === "/sign-up") {

  const searchParams = request.nextUrl.searchParams;
  const kaida = searchParams.get("kaida") || "BANLPOR";
  const fromCurrency = searchParams.get("fromCurrency") || "USD";
  const amount = searchParams.get("amount") || "100";
  const oldPath = request.nextUrl.pathname;
  const newPath = oldPath + `${kaida}/${fromCurrency}/${amount}`;
  console.log("old path!:", oldPath);
  console.log("MIIIDDDLEEEEWARE TRIIIIG", newPath);

  return NextResponse.rewrite(new URL(newPath, request.nextUrl));
  // // }
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-up", "/sign-in", "/withdrawal"],
};
