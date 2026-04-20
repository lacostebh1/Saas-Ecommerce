import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FinalCta } from "@/components/sections/cta";

export const metadata = {
  title: "Bénéfices éducatifs",
  description:
    "Créativité, coordination, concentration : ce que SmartRobot apporte aux enfants de 3 à 8 ans."
};

const benefits = [
  {
    emoji: "🎨",
    title: "Créativité",
    body: "L'enfant s'approprie des tracés, puis les détourne. Il apprend à créer avant de copier."
  },
  {
    emoji: "✋",
    title: "Motricité fine",
    body: "Tenir le crayon, suivre une ligne, appuyer juste ce qu'il faut. Les bases du geste."
  },
  {
    emoji: "👀",
    title: "Coordination main-œil",
    body: "Observer puis reproduire — un entraînement ludique validé par les orthophonistes."
  },
  {
    emoji: "🧠",
    title: "Concentration",
    body: "Sessions de 5 à 15 min qui apprennent à l'enfant à aller au bout d'un projet."
  },
  {
    emoji: "🔤",
    title: "Pré-écriture",
    body: "Les cartes lettres préparent en douceur à l'apprentissage de l'écriture."
  },
  {
    emoji: "🎯",
    title: "Confiance en soi",
    body: "Chaque dessin terminé est une victoire. La progression est visible, immédiate."
  }
];

export default function BenefitsPage() {
  return (
    <>
      <Container className="py-16 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Bien plus qu'un jouet</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-ink/80">
          SmartRobot a été pensé avec des éducatrices de maternelle pour accompagner
          les grandes étapes du développement de l'enfant.
        </p>
      </Container>
      <Section tone="sky">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-blob bg-white p-6 shadow-soft">
              <div className="text-3xl">{b.emoji}</div>
              <h2 className="mt-3 text-xl font-semibold">{b.title}</h2>
              <p className="mt-2 text-sm text-brand-ink/70">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
