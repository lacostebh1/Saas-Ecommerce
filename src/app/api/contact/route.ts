import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(5).max(2000)
});

export async function POST(req: Request) {
  const body = Object.fromEntries((await req.formData()).entries());
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  // TODO: relier à Resend / CRM — pour l'instant on se contente de logger.
  console.info("[contact]", parsed.data);
  return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
}
