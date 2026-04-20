"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-brand-ink/10 rounded-blob bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold">{item.question}</span>
              <span
                className={clsx(
                  "flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-mint text-lg transition-transform",
                  isOpen && "rotate-45"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-brand-ink/80">{item.answer}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
