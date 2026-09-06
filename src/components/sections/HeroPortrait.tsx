"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { site, socials } from "@/data/site";
import { cn } from "@/lib/cn";

const LINKEDIN_URL =
  socials.find((item) => item.label === "LinkedIn")?.href ??
  "https://www.linkedin.com/in/kanan-dave/";

const TRUST_PATH =
  "M58 94C32 94 22 72 40 58C28 38 54 22 74 36C84 16 122 16 132 36C158 22 184 44 170 64C194 70 188 94 164 94C158 108 128 114 110 100C94 114 70 110 58 94Z";

const CONNECT_PATH =
  "M44 88C22 86 16 64 34 52C24 30 58 14 78 30C94 8 136 10 148 32C176 16 202 44 188 66C210 74 202 98 174 94C166 112 128 116 108 98C86 114 56 108 44 88Z";

const LINKEDIN_PATH =
  "M50 90C26 88 18 66 36 54C26 32 60 16 80 32C96 10 138 12 150 34C176 20 204 46 190 66C212 72 204 96 176 94C168 112 130 116 110 98C90 114 60 108 50 90Z";

const HELLO_PATH =
  "M52 92C28 90 18 68 36 56C26 34 58 18 78 34C90 12 130 14 142 34C168 20 196 46 182 66C204 72 198 96 172 94C164 112 126 116 108 98C88 114 62 110 52 92Z";

const HOLD_MS = [3000, 3000, 2000, 6000] as const;
const GAP_MS = 280;

/**
 * Portrait rises from the panel floor. Four thoughts cycle: a hello, a line,
 * a CTA, then a clickable LinkedIn cloud.
 */
export function HeroPortrait() {
  const [entered, setEntered] = useState(false);
  const [spoke, setSpoke] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setEntered(true);
      setSpoke(true);
      return;
    }

    let enterTimer = 0;
    let speakTimer = 0;
    const frame = window.requestAnimationFrame(() => {
      enterTimer = window.setTimeout(() => setEntered(true), 400);
      speakTimer = window.setTimeout(() => setSpoke(true), 1180);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(enterTimer);
      window.clearTimeout(speakTimer);
    };
  }, []);

  useEffect(() => {
    if (!spoke) return;
    const id = window.setTimeout(() => {
      setStep((current) => (current + 1) % HOLD_MS.length);
    }, HOLD_MS[step] + GAP_MS);
    return () => window.clearTimeout(id);
  }, [spoke, step]);

  return (
    <>
      <Image
        src={site.portraitCutout}
        alt="Kanan Dave, product and brand designer, in a navy blazer"
        width={685}
        height={786}
        priority
        sizes="(max-width: 640px) 420px, (max-width: 1024px) 490px, 545px"
        className={cn(
          "absolute -bottom-[20%] left-[-18%] h-[88%] w-auto max-w-none object-cover object-top drop-shadow-[0_26px_44px_rgba(8,45,120,0.32)] sm:-bottom-[28%] sm:left-1/2 sm:h-[78%]",
          "transition-[transform,opacity] duration-[1100ms] ease-premium will-change-transform",
          entered
            ? "translate-y-8 opacity-100 sm:translate-y-4 sm:-translate-x-1/2"
            : "translate-y-28 opacity-0 sm:-translate-x-1/2",
        )}
      />

      <div className="absolute right-1 top-[12%] z-20 aspect-[220/176] w-[min(13.25rem,56vw)] overflow-visible sm:left-[64%] sm:right-auto sm:top-[36%] sm:aspect-[220/148] sm:w-[228px]">
        <svg viewBox="0 0 220 148" className="invisible h-full w-full" aria-hidden="true" />

        <ThoughtCloud
          path={HELLO_PATH}
          visible={spoke && step === 0}
          textClassName="top-[36%] px-[16%] text-base"
        >
          <BubbleTypewriter
            text="Hey, I'm Kanan."
            active={spoke && step === 0}
            emphasize="Kanan"
          />
        </ThoughtCloud>

        <ThoughtCloud
          path={TRUST_PATH}
          visible={spoke && step === 1}
          textClassName="top-[34%] px-[18%] text-[0.875rem] sm:text-[0.875rem]"
        >
          <BubbleTypewriter
            text="Trust me, it'll be worth connecting."
            active={spoke && step === 1}
          />
        </ThoughtCloud>

        <ThoughtCloud
          path={CONNECT_PATH}
          visible={spoke && step === 2}
          textClassName="top-[36%] px-[16%] text-base"
        >
          <BubbleTypewriter
            text="Let's Connect."
            active={spoke && step === 2}
          />
        </ThoughtCloud>

        <ThoughtCloud
          href={LINKEDIN_URL}
          path={LINKEDIN_PATH}
          visible={spoke && step === 3}
          textClassName="top-[26%] px-[16%] text-[0.8125rem] sm:text-[0.8125rem]"
        >
          <LinkedInMark />
          <BubbleTypewriter
            text="Click here :)"
            active={spoke && step === 3}
          />
        </ThoughtCloud>
      </div>
    </>
  );
}

function BubbleTypewriter({
  text,
  active,
  emphasize,
}: {
  text: string;
  active: boolean;
  emphasize?: string;
}) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!active) {
      setTyped(0);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(text.length);
      return;
    }

    if (typed >= text.length) return;
    const timeout = window.setTimeout(
      () => setTyped((count) => count + 1),
      typed === 0 ? 160 : 52,
    );
    return () => window.clearTimeout(timeout);
  }, [active, text.length, typed]);

  const shown = text.slice(0, typed);
  const mark = emphasize ? text.indexOf(emphasize) : -1;
  const done = typed >= text.length;
  const before = mark === -1 ? shown : shown.slice(0, mark);
  const strong = mark === -1 ? "" : shown.slice(mark);

  return (
    <>
      <span aria-hidden="true">
        {before}
        {strong ? <span className="font-extrabold">{strong}</span> : null}
        <span
          className={cn(
            "ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-accent-500 align-baseline",
            done ? "animate-blink" : "opacity-100",
          )}
        />
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

function ThoughtCloud({
  path,
  visible,
  textClassName,
  children,
  href,
}: {
  path: string;
  visible: boolean;
  textClassName: string;
  children: ReactNode;
  href?: string;
}) {
  const Tag = href ? "a" : "div";

  return (
    <Tag
      {...(href
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Open Kanan Dave on LinkedIn",
          }
        : {})}
      className={cn(
        "absolute inset-0 origin-bottom-left overflow-visible transition-[transform,opacity] duration-[380ms] ease-premium",
        href && visible && "cursor-pointer hover:scale-[1.04]",
        visible
          ? "z-10 translate-y-0 scale-100 opacity-100"
          : "pointer-events-none z-0 translate-y-2 scale-[0.72] opacity-0",
      )}
    >
      <svg
        viewBox="0 0 220 148"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="h-full w-full overflow-visible"
      >
        <g transform="translate(5 5)">
          <path
            d={path}
            fill="#111111"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="52" cy="118" r="8" fill="#111111" />
          <circle cx="32" cy="136" r="4.75" fill="#111111" />
        </g>
        <path
          d={path}
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="52" cy="118" r="8" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />
        <circle cx="32" cy="136" r="4.75" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />
      </svg>
      <div
        className={cn(
          "absolute inset-x-0 flex flex-col items-center gap-1 text-center font-semibold leading-snug text-ink",
          textClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

function LinkedInMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 shrink-0"
    >
      <path
        fill="#0A66C2"
        d="M22.223 0H1.772C.792 0 0 .774 0 1.73v20.54C0 23.227.792 24 1.772 24h20.451C23.2 24 24 23.227 24 22.271V1.73C24 .774 23.2 0 22.223 0ZM7.12 20.452H3.558V9h3.562v11.452ZM5.338 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286Z"
      />
    </svg>
  );
}
