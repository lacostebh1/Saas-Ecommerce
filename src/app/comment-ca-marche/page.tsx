import { Container } from "@/components/ui/container";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCta } from "@/components/sections/cta";

export const metadata = {
  title: "Comment ça marche",
  description: "4 étapes simples pour apprendre à dessiner avec SmartRobot."
};

export default function HowPage() {
  return (
    <>
      <Container className="py-16 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Comment ça marche</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-ink/80">
          Installer, insérer, observer, reproduire. En moins de deux minutes, ton
          enfant trace son premier chef-d'œuvre.
        </p>
        <div className="mx-auto mt-10 aspect-video max-w-3xl overflow-hidden rounded-blob bg-brand-ink/5">
          <div className="flex h-full items-center justify-center text-brand-ink/40">
            Vidéo de démonstration (à intégrer)
          </div>
        </div>
      </Container>
      <HowItWorks />
      <FinalCta />
    </>
  );
}
