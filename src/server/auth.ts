import { cookies } from "next/headers";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { store, type User } from "./db";

const SESSION_COOKIE = "smrm_session";
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
}

function newId(prefix: string): string {
  return `${prefix}_${randomBytes(12).toString("hex")}`;
}

export function createUser(email: string, password: string, name?: string): User {
  const existing = [...store.users.values()].find((u) => u.email === email);
  if (existing) throw new Error("Un compte existe déjà pour cet email.");
  const isFirstAdmin =
    process.env.ADMIN_EMAIL && email.toLowerCase() === process.env.ADMIN_EMAIL.toLowerCase();
  const user: User = {
    id: newId("usr"),
    email: email.toLowerCase(),
    name,
    passwordHash: hashPassword(password),
    role: isFirstAdmin ? "admin" : "customer",
    createdAt: new Date().toISOString()
  };
  store.users.set(user.id, user);
  return user;
}

export function authenticate(email: string, password: string): User | null {
  const user = [...store.users.values()].find((u) => u.email === email.toLowerCase());
  if (!user) return null;
  if (!verifyPassword(password, user.passwordHash)) return null;
  return user;
}

export async function startSession(userId: string) {
  const token = randomBytes(32).toString("hex");
  store.sessions.set(token, { userId, expiresAt: Date.now() + SESSION_TTL_MS });
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_TTL_MS / 1000,
    path: "/"
  });
}

export async function endSession() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) store.sessions.delete(token);
  jar.delete(SESSION_COOKIE);
}

export async function getCurrentUser(): Promise<User | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const session = store.sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (session) store.sessions.delete(token);
    return null;
  }
  return store.users.get(session.userId) ?? null;
}

export async function requireAdmin(): Promise<User> {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") {
    throw new Error("Accès refusé.");
  }
  return user;
}
