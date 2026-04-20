import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "white" | "pink" | "mint" | "peach" | "sky" | "lavender" | "yellow";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white",
  pink: "bg-brand-pink/30",
  mint: "bg-brand-mint/40",
  peach: "bg-brand-peach/40",
  sky: "bg-brand-sky/30",
  lavender: "bg-brand-lavender/30",
  yellow: "bg-brand-yellow/50"
};

export function Section({
  tone = "white",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={clsx("py-16 sm:py-24", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
