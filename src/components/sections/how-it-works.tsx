import { Section } from "@/components/ui/section";

const steps = [
  { n: 1, title: "Insère la carte", body: "Choisis un motif (chat, maison, lettre...)." },
  { n: 2, title: "Observe", body: "Le robot trace étape par étape devant l'enfant." },
  { n: 3, title: "Reproduis", body: "L'enfant suit le guide sur sa propre feuille." },
  { n: 4, title: "Progresse", body: "60 cartes incluses pour des heures d'apprentissage." }
];

export function HowItWorks() {
  return (
    <Section tone="mint">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Comment ça marche ?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-brand-ink/70">
          4 étapes simples pour transformer n'importe quel moment en atelier créatif.
        </p>
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-blob bg-white p-6 text-center shadow-soft"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-lavender text-lg font-bold text-white">
              {s.n}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-brand-ink/70">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
