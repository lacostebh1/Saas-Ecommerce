"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    const res = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      setError((await res.json()).error ?? "Erreur");
      setLoading(false);
      return;
    }
    router.push("/compte");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-blob bg-white p-6 shadow-soft">
      {mode === "register" && (
        <label className="block text-sm">
          <span className="font-semibold">Nom</span>
          <input
            name="name"
            className="mt-1 w-full rounded-xl border border-brand-ink/15 px-4 py-3"
          />
        </label>
      )}
      <label className="block text-sm">
        <span className="font-semibold">Email</span>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-brand-ink/15 px-4 py-3"
        />
      </label>
      <label className="block text-sm">
        <span className="font-semibold">Mot de passe</span>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          className="mt-1 w-full rounded-xl border border-brand-ink/15 px-4 py-3"
        />
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button className="w-full" disabled={loading}>
        {loading ? "..." : mode === "login" ? "Se connecter" : "Créer mon compte"}
      </Button>
    </form>
  );
}
