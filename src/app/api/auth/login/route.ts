import { NextResponse } from "next/server";
import { z } from "zod";
import { authenticate, startSession } from "@/server/auth";
import { getClientIp, rateLimit } from "@/server/rate-limit";

const schema = z.object({ email: z.string().email(), password: z.string() });

export async function POST(req: Request) {
  const limit = rateLimit(`login:${getClientIp(req)}`, 5, 60);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessaie dans une minute." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } }
    );
  }
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
