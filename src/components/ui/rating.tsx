import { clsx } from "clsx";

export function Rating({
  value,
  count,
  size = "md",
  className
}: {
  value: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const full = Math.round(value);
  const starSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className={clsx("inline-flex items-center gap-2", className)}>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < full} className={starSize} />
        ))}
      </div>
      <span className="text-sm font-medium text-brand-ink/80">
        {value.toFixed(1)}
        {count !== undefined && <span className="text-brand-ink/60"> ({count})</span>}
      </span>
    </div>
  );
}

function Star({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "#F59E0B" : "none"}
      stroke={filled ? "#F59E0B" : "#CBD5E1"}
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6L12 2z" />
    </svg>
  );
}
