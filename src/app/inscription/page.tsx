import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata = { title: "Inscription" };

export default function RegisterPage() {
  return (
    <Container className="max-w-md py-16">
      <h1 className="text-3xl font-bold">Créer mon compte</h1>
      <p className="mt-2 text-sm text-brand-ink/70">
        Déjà client ?{" "}
        <Link href="/login" className="underline">Connecte-toi</Link>
      </p>
      <div className="mt-6">
        <AuthForm mode="register" />
      </div>
    </Container>
  );
}
