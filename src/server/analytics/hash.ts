import { createHash } from "node:crypto";

export function sha256(value: string | undefined | null): string | undefined {
  if (!value) return undefined;
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}
