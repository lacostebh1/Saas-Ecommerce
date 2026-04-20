import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export const metadata = { title: "Merci pour ta commande" };

export default function ThankYouPage() {
  return (
    <Container className="py-20 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-mint text-4xl">
        🎉
      </div>
      <h1 className="mt-6 text-4xl font-bold">Merci pour ta commande !</h1>
      <p className="mx-auto mt-4 max-w-xl text-brand-ink/70">
        Tu reçois un email de confirmation dans quelques minutes. On te tient informé·e
        de chaque étape de la livraison.
      </p>
      <LinkButton href="/" size="lg" className="mt-8">
        Retour à l'accueil
      </LinkButton>
    </Container>
  );
}
