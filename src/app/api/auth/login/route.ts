import { NextResponse } from "next/server";
import { z } from "zod";
import { authenticate, startSession } from "@/server/auth";

const schema = z.object({ email: z.string().email(), password: z.string() });

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const user = authenticate(parsed.data.email, parsed.data.password);
  if (!user) {
    return NextResponse.json({ error: "Identifiants incorrects." }, { status: 401 });
  }
  await startSession(user.id);
  return NextResponse.json({ user: { id: user.id, email: user.email, role: user.role } });
}
