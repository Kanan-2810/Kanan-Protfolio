import type { ReactNode } from "react";

/**
 * The continuous dark-blue passage of the page. Services, engagement and
 * testimonials all live inside one rounded panel so the light-to-dark
 * transition reads as a single deliberate move rather than three.
 */
export function DarkRegion({ children }: { children: ReactNode }) {
  return (
    <div className="on-dark px-3 md:px-5">
      <div className="relative overflow-hidden rounded-[28px] bg-navy-800 md:rounded-[40px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-accent-500/30 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-[38%] h-[420px] w-[420px] rounded-full bg-accent-300/20 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-[380px] w-[380px] rounded-full bg-navy-500/40 blur-[130px]"
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
