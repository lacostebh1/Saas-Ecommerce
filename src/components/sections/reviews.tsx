import { Rating } from "@/components/ui/rating";
import { Section } from "@/components/ui/section";
import { reviews } from "@/lib/catalog";

export function Reviews() {
  return (
    <Section tone="pink">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Ce que disent les parents</h2>
          <p className="mt-2 text-brand-ink/70">
            Des milliers d'enfants dessinent déjà avec SmartRobot.
          </p>
        </div>
        <Rating value={4.8} count={212} />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <article key={r.id} className="rounded-blob bg-white p-6 shadow-soft">
            <Rating value={r.rating} size="sm" />
            <h3 className="mt-3 font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-brand-ink/80">{r.body}</p>
            <p className="mt-4 text-xs text-brand-ink/60">
              — {r.author}
              {r.city && `, ${r.city}`}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
