import { Section } from "@/components/ui/section";

const items = [
  {
    emoji: "🎨",
    title: "Créativité guidée",
    body: "Des tracés pas à pas qui donnent confiance à l'enfant avant qu'il n'imagine les siens."
  },
  {
    emoji: "🧠",
    title: "Développement cognitif",
    body: "Reconnaissance des formes, des couleurs et coordination main-œil dès 3 ans."
  },
  {
    emoji: "🛑",
    title: "Sans écran",
    body: "100 % analogique : papier, crayon, robot. Zéro lumière bleue, zéro distraction."
  },
  {
    emoji: "🔋",
    title: "Autonome 6h",
    body: "Rechargeable USB-C. Emmène-le en vacances, chez mamie, en voiture."
  }
];

export function ValueProps() {
  return (
    <Section tone="white" className="!py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-blob bg-white p-6 shadow-soft ring-1 ring-brand-ink/5"
          >
            <div className="text-3xl">{it.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-brand-ink/70">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
