"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Portrait entrance. Triggered after mount (not a CSS animation on first
 * paint) so it still plays once the parent Reveal has faded the panel in.
 */
export function HeroPortrait() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setEntered(true);
      return;
    }

    let timeout = 0;
    const frame = window.requestAnimationFrame(() => {
      timeout = window.setTimeout(() => setEntered(true), 400);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <Image
      src={site.portraitCutout}
      alt="Kanan Dave, product and brand designer, in a navy blazer"
      width={685}
      height={786}
      priority
      sizes="(max-width: 640px) 300px, (max-width: 1024px) 490px, 545px"
      className={cn(
        "absolute -bottom-[20%] left-1/2 h-[78%] w-auto max-w-none object-cover object-top drop-shadow-[0_26px_44px_rgba(8,45,120,0.32)]",
        "transition-[transform,opacity] duration-[1100ms] ease-premium will-change-transform",
        entered
          ? "-translate-x-1/2 translate-y-0 opacity-100"
          : "-translate-x-1/2 translate-y-28 opacity-0",
      )}
    />
  );
}
