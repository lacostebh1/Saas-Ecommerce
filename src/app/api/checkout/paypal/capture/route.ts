import { NextResponse } from "next/server";
import { captureOrder } from "@/server/paypal";
import { site } from "@/lib/site";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return NextResponse.redirect(`${site.url}/panier`);
  }
  try {
    await captureOrder(token);
  } catch (err) {
    console.error("[paypal] capture failed", err);
    return NextResponse.redirect(`${site.url}/panier?error=paypal`);
  }
  return NextResponse.redirect(`${site.url}/checkout/merci?paypal=${token}`);
}
