import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/server/email";

const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }
  await sendEmail({
    to: parsed.data.email,
    subject: "Bienvenue dans la famille SmartRobotMo 🎨",
    html: `<p>Merci de rejoindre notre newsletter ! On t'écrit bientôt avec des idées créatives pour tes enfants.</p>`
  });
  return NextResponse.json({ ok: true });
}
