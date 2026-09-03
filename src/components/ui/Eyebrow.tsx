import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Small uppercase section label with a leading dot, per the design system. */
export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow",
        tone === "light" ? "text-muted" : "text-accent-200",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-accent-500" : "bg-accent-300",
        )}
      />
      {children}
    </p>
  );
}

type PillProps = {
  children: string;
  tone?: "light" | "dark" | "accent";
  className?: string;
};

/** Pill-shaped metadata tag used for categories, tools and roles. */
export function Pill({ children, tone = "light", className }: PillProps) {
  const tones = {
    light: "border-black/[0.08] bg-white text-ink/70",
    dark: "border-white/15 bg-white/[0.06] text-white/75",
    accent: "border-accent-500/20 bg-accent-50 text-accent-700",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium tracking-[-0.01em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
