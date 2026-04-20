import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-12 text-center">
      <span className="rounded-full bg-brand-mint px-4 py-1 text-sm font-semibold text-brand-ink">
        Bientôt disponible
      </span>
      <h1 className="text-5xl font-bold">{site.name}</h1>
      <p className="max-w-xl text-lg">{site.tagline}</p>
      <p className="max-w-2xl text-brand-ink/70">{site.description}</p>
    </main>
  );
}
