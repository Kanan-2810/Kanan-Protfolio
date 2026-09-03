import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "outline" | "outline-light" | "accent";

const base =
  "group/btn inline-flex h-12 items-center gap-3 rounded-full pl-6 pr-2 text-[0.9375rem] font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-premium hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-soft shadow-card",
  light: "bg-white text-ink border border-black/[0.07] hover:border-black/15 shadow-card",
  outline: "border border-black/15 text-ink hover:border-ink hover:bg-white",
  "outline-light":
    "border border-white/45 text-white hover:border-white hover:bg-white/10",
  accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-glow",
};

const chips: Record<Variant, string> = {
  primary: "bg-white text-ink",
  light: "bg-ink text-white",
  outline: "bg-ink text-white",
  "outline-light": "bg-white text-navy-900",
  accent: "bg-white text-accent-600",
};

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  /** Set false for text-only pills without the trailing arrow chip. */
  withChip?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  withChip = true,
}: ButtonProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const content = (
    <>
      <span>{children}</span>
      {withChip ? (
        <span
          aria-hidden="true"
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-premium group-hover/btn:rotate-45",
            chips[variant],
          )}
        >
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
      ) : (
        <span className="pr-4" />
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  );
}
