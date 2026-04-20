import { NextResponse } from "next/server";
import { z } from "zod";
import { createUser, startSession } from "@/server/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(200),
  name: z.string().max(100).optional()
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  try {
    const user = createUser(parsed.data.email, parsed.data.password, parsed.data.name);
    await startSession(user.id);
    return NextResponse.json({ user: { id: user.id, email: user.email, role: user.role } });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
}
