"use client";

import { useEffect, useState } from "react";
import { Pill } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

const skills = ["UI/UX", "Product Design", "Branding", "Developer"];

/**
 * Staggered entrance for the hero title. Mount-triggered so it still plays
 * after the parent panel's own reveal.
 */
export function HeroHeading() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setEntered(true);
      return;
    }

    let timeout = 0;
    const frame = window.requestAnimationFrame(() => {
      timeout = window.setTimeout(() => setEntered(true), 120);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative z-10 max-w-[34rem] pb-6 lg:col-span-6 lg:pb-16">
      <h1 className="display text-[clamp(2.35rem,6vw,4.35rem)] font-extrabold text-ink">
        <span
          className={cn(
            "inline-block transition-[transform,opacity] duration-700 ease-premium",
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Product, AI &amp;
        </span>
        <br className="hidden sm:inline" />{" "}
        <span
          className={cn(
            "inline-block text-accent-500 transition-[transform,opacity] duration-700 ease-premium delay-100",
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Engineer
        </span>
      </h1>
      <div
        className={cn(
          "mt-6 flex flex-wrap gap-2 transition-[transform,opacity] duration-700 ease-premium delay-200",
          entered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
      >
        {skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </div>
  );
}
