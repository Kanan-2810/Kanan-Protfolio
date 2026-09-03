import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light" | "accent" | "ghost-light";

const tones: Record<Tone, string> = {
  dark: "bg-ink text-white hover:bg-accent-500",
  light: "bg-white text-ink border border-black/[0.07] hover:bg-ink hover:text-white",
  accent: "bg-accent-500 text-white hover:bg-white hover:text-accent-600",
  "ghost-light": "border border-white/25 text-white hover:bg-white hover:text-navy-900",
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

type ArrowButtonProps = {
  href?: string;
  label: string;
  tone?: Tone;
  size?: keyof typeof sizes;
  direction?: "right" | "diagonal";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

/** Circular arrow control used throughout the site for links and carousels. */
export function ArrowButton({
  href,
  label,
  tone = "dark",
  size = "md",
  direction = "right",
  onClick,
  disabled,
  className,
}: ArrowButtonProps) {
  const Icon = direction === "right" ? ArrowRight : ArrowUpRight;
  const classes = cn(
    "group/arrow grid shrink-0 place-items-center rounded-full transition-all duration-300 ease-premium disabled:opacity-40",
    tones[tone],
    sizes[size],
    className,
  );

  const icon = (
    <Icon
      aria-hidden="true"
      className={cn(
        "h-[18px] w-[18px] transition-transform duration-300 ease-premium",
        direction === "right"
          ? "group-hover/arrow:translate-x-1"
          : "group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5",
      )}
      strokeWidth={2}
    />
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes}>
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={classes}
    >
      {icon}
    </button>
  );
}
