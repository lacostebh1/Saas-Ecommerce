import { clsx } from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="28" height="22" rx="8" fill="#BDB2FF" />
        <circle cx="13" cy="18" r="3" fill="#2D2A4A" />
        <circle cx="23" cy="18" r="3" fill="#2D2A4A" />
        <path
          d="M12 24c1.5 1.5 4 2 6 2s4.5-.5 6-2"
          stroke="#2D2A4A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="16" y="2" width="4" height="6" rx="2" fill="#FFB5C5" />
      </svg>
      <span className="font-display text-xl font-bold text-brand-ink">
        SmartRobotMo
      </span>
    </span>
  );
}
