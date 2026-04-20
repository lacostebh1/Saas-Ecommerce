/**
 * Client Prisma singleton (activation optionnelle).
 *
 * Renvoie `null` si DATABASE_URL n'est pas défini ou si le client n'a pas
 * encore été généré, pour que le code puisse retomber sur le store in-memory
 * (`src/server/db.ts`).
 *
 * Pour activer Prisma en prod :
 *   1. Remplis DATABASE_URL dans .env.local
 *   2. `npm run db:migrate` (crée la base + applique le schéma)
 *   3. `npm run db:generate` (génère le client typé)
 */

type PrismaLike = { $connect?: () => Promise<void> } & Record<string, unknown>;

const globalForPrisma = globalThis as unknown as { __prisma?: PrismaLike | null };

export function getPrisma(): PrismaLike | null {
  if (globalForPrisma.__prisma !== undefined) return globalForPrisma.__prisma;
  if (!process.env.DATABASE_URL) {
    globalForPrisma.__prisma = null;
    return null;
  }
  try {
    // Import dynamique : évite de faire échouer le build tant que le client
    // n'a pas été généré (`npm run db:generate`).
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("@prisma/client") as {
      PrismaClient?: new () => PrismaLike;
    };
    if (!mod.PrismaClient) {
      globalForPrisma.__prisma = null;
      return null;
    }
    globalForPrisma.__prisma = new mod.PrismaClient();
  } catch (err) {
    console.warn("[prisma] client non généré — exécute `npm run db:generate`", err);
    globalForPrisma.__prisma = null;
  }
  return globalForPrisma.__prisma;
}
