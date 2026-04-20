"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const KEY = "smartrobotmo-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      // no-op (SSR / private mode)
    }
  }, []);

  function accept(value: "all" | "essential") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // no-op
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-blob bg-white p-5 shadow-soft ring-1 ring-brand-ink/10">
      <h2 className="font-semibold">On respecte ta vie privée 🍪</h2>
      <p className="mt-2 text-sm text-brand-ink/70">
        On utilise des cookies pour améliorer l'expérience et mesurer nos pubs. Tu
        peux accepter ou limiter aux cookies essentiels. Détails dans la{" "}
        <Link href="/legal/confidentialite" className="underline">
          politique de confidentialité
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <Button variant="ghost" size="sm" onClick={() => accept("essential")}>
          Essentiels uniquement
        </Button>
        <Button size="sm" onClick={() => accept("all")}>
          Tout accepter
        </Button>
      </div>
    </div>
  );
}
