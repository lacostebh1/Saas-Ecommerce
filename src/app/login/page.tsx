import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata = { title: "Connexion" };

export default function LoginPage() {
  return (
    <Container className="max-w-md py-16">
      <h1 className="text-3xl font-bold">Connexion</h1>
      <p className="mt-2 text-sm text-brand-ink/70">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="underline">Crée-en un</Link>
      </p>
      <div className="mt-6">
        <AuthForm mode="login" />
      </div>
    </Container>
  );
}
