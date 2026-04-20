import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-lavender/50";

const variants: Record<Variant, string> = {
  primary: "bg-brand-ink text-white hover:bg-brand-ink/90",
  secondary: "bg-brand-pink text-brand-ink hover:bg-brand-pink/80",
  ghost: "bg-transparent text-brand-ink hover:bg-brand-ink/5"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg"
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = CommonProps & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

type LinkButtonProps = CommonProps & ComponentPropsWithoutRef<typeof Link>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
