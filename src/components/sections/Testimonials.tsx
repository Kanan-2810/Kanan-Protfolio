"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const SLIDE_COUNT = testimonials.length;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function useHorizontalPin(length: number, enabled: boolean) {
  const pinRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled || length < 2) return;

    let frame = 0;
    let lastIndex = 0;

    const apply = () => {
      frame = 0;
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      const scrollable = pin.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-pin.getBoundingClientRect().top, 0),
        Math.max(scrollable, 0),
      );
      const progress = scrollable <= 0 ? 0 : scrolled / scrollable;
      track.style.transform = `translate3d(${(-progress * (length - 1) * 100) / length}%, 0, 0)`;

      const nextIndex = Math.round(progress * (length - 1));
      if (nextIndex !== lastIndex) {
        lastIndex = nextIndex;
        setIndex(nextIndex);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled, length]);

  const goTo = (target: number) => {
    const pin = pinRef.current;
    if (!pin || length < 2) return;
    const clamped = Math.min(Math.max(target, 0), length - 1);
    const scrollable = pin.offsetHeight - window.innerHeight;
    const top =
      window.scrollY +
      pin.getBoundingClientRect().top +
      (clamped / (length - 1)) * scrollable;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return { pinRef, trackRef, index, goTo };
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="flex h-full items-center justify-center">
      <div className="flex h-[min(360px,calc(100svh-14rem))] w-full max-w-5xl items-stretch gap-3 sm:h-[min(400px,48vh)] sm:gap-5 md:gap-6 lg:gap-8">
        <div className="hidden h-full w-[min(38%,220px)] shrink-0 sm:block sm:w-auto sm:aspect-[3/4]">
          <div className="h-full overflow-hidden rounded-[22px] border border-white/15 bg-white/[0.08] p-1.5 md:rounded-[28px] md:p-2">
            <div className="relative h-full overflow-hidden rounded-[16px] bg-canvas md:rounded-[22px]">
              <Image
                src={testimonial.image}
                alt={testimonial.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 40vw, 280px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <figure className="flex min-w-0 flex-1 flex-col justify-between overflow-y-auto rounded-[22px] bg-white p-4 shadow-card sm:p-6 md:rounded-[28px] md:p-8">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-50 text-accent-500">
                <Quote aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div
                role="img"
                aria-label="Rated 5 out of 5"
                className="flex items-center gap-0.5"
              >
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    aria-hidden="true"
                    className="h-3.5 w-3.5 fill-accent-500 text-accent-500"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>

            <blockquote className="mt-3 sm:mt-5 md:mt-6">
              <p className="heading text-[clamp(0.9375rem,1.9vw,1.5rem)] font-semibold leading-snug text-ink">
                {testimonial.quote}
              </p>
            </blockquote>
          </div>

          <figcaption className="mt-4 flex items-end justify-between gap-3 border-t border-black/[0.06] pt-3 sm:mt-6 sm:gap-4 sm:pt-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-canvas sm:hidden">
                <Image
                  src={testimonial.image}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-bold tracking-[-0.02em] text-ink">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">
                  {testimonial.position}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "relative h-10 w-[7.75rem] shrink-0 sm:h-11 sm:w-[10.5rem]",
                testimonial.logoDark && "overflow-hidden rounded-lg bg-black",
              )}
            >
              <Image
                src={testimonial.logo}
                alt={testimonial.company}
                fill
                sizes="168px"
                className={cn(
                  "object-contain p-0.5",
                  testimonial.logoDark ? "object-center" : "object-right",
                )}
              />
            </div>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

function TestimonialChrome({
  index,
  onPrev,
  onNext,
  onSelect,
}: {
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex shrink-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0 max-w-xl">
        <Eyebrow tone="dark">Client Words</Eyebrow>
        <h2 className="heading mt-3 text-[clamp(1.35rem,3.6vw,2.5rem)] font-extrabold text-white">
          Trusted by the teams I have shipped with
        </h2>
      </div>

      <div className="flex flex-wrap items-center gap-3 md:justify-end">
        <div className="flex items-center gap-1.5">
          {testimonials.map((testimonial, dot) => (
            <button
              key={testimonial.image}
              type="button"
              onClick={() => onSelect(dot)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={dot === index}
              className={cn(
                "relative h-8 w-8 overflow-hidden rounded-full border-2 transition-all duration-300 ease-premium sm:h-9 sm:w-9",
                dot === index
                  ? "border-white"
                  : "border-white/20 opacity-70 hover:border-white/55 hover:opacity-100",
              )}
            >
              <Image
                src={testimonial.image}
                alt=""
                fill
                sizes="36px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>

        <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-white/65">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(SLIDE_COUNT).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous testimonial"
            aria-controls="testimonial-panel"
            className="group grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy-900"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next testimonial"
            aria-controls="testimonial-panel"
            className="group grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy-900"
          >
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const reducedMotion = usePrefersReducedMotion();
  const { pinRef, trackRef, index, goTo } = useHorizontalPin(
    SLIDE_COUNT,
    !reducedMotion,
  );

  const activeIndex = reducedMotion ? 0 : index;

  if (reducedMotion) {
    return (
      <section
        id="testimonials"
        className="border-t border-white/[0.08] py-16 md:py-24"
      >
        <div className="shell space-y-8">
          <TestimonialChrome
            index={0}
            onPrev={() => undefined}
            onNext={() => undefined}
            onSelect={() => undefined}
          />
          <div id="testimonial-panel" className="space-y-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.image} className="min-h-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={pinRef}
      id="testimonials"
      data-testimonial-index={activeIndex}
      className="relative border-t border-white/[0.08]"
      style={{ height: `${SLIDE_COUNT * 100}svh` }}
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden pb-24 pt-[calc(var(--nav-h)+0.5rem)] md:pb-10 md:pt-[calc(var(--nav-h)+1rem)]">
        <div className="shell flex min-h-0 flex-1 flex-col gap-4 md:gap-6">
          <TestimonialChrome
            index={activeIndex}
            onPrev={() => goTo(activeIndex - 1)}
            onNext={() => goTo(activeIndex + 1)}
            onSelect={goTo}
          />

          <div
            id="testimonial-panel"
            aria-live="polite"
            aria-roledescription="carousel"
            className="min-h-0 flex-1 overflow-hidden"
          >
            <div
              ref={trackRef}
              className="flex h-full will-change-transform"
              style={{ width: `${SLIDE_COUNT * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.image}
                  className="h-full shrink-0 px-0.5"
                  style={{ width: `${100 / SLIDE_COUNT}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
