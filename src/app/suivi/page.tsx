"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function TrackingIndex() {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <Container className="max-w-md py-16">
      <h1 className="text-3xl font-bold">Suivre mon colis</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) router.push(`/suivi/${value.trim()}`);
        }}
        className="mt-6 flex gap-2"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="N° de suivi (ex: SR12AB34CD56)"
          className="flex-1 rounded-xl border border-brand-ink/15 px-4 py-3"
        />
        <Button>Suivre</Button>
      </form>
    </Container>
  );
}
