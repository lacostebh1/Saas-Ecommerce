# SmartRobotMo — Boutique en ligne

Boutique D2C du robot éducatif de dessin pour enfants (3-8 ans).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (design pastel)
- **Stripe** + **PayPal** pour le paiement
- **Meta Pixel / Conversions API**, **TikTok Pixel / Events API**, **GA4**
- **PostgreSQL** (via `DATABASE_URL`) pour produits / commandes / utilisateurs
- **Resend** pour l'email transactionnel & marketing

## Démarrage

```bash
cp .env.example .env.local   # remplis les clés que tu as
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/              # routes Next.js (App Router)
  components/       # composants UI partagés
  lib/              # utilitaires (site, format, analytics, stripe...)
  server/           # logique serveur (DB, services, webhooks)
```

## Scripts

- `npm run dev` — dev server
- `npm run build` — build prod
- `npm run start` — start prod
- `npm run typecheck` — vérifie les types
- `npm run lint` — lint

## Roadmap

Voir les phases dans les commits (Phase 0 → 20).
