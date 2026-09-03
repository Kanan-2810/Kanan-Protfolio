"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const total = testimonials.length;

  const go = (direction: -1 | 1) =>
    setIndex((current) => (current + direction + total) % total);

  return (
    <section
      id="testimonials"
      className="border-t border-white/[0.08] py-20 md:py-28 lg:py-32"
    >
      <div className="shell">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">Client Words</Eyebrow>
            <h2 className="heading mt-6 text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white">
              Trusted by ambitious
              <br className="hidden sm:block" /> teams worldwide
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-white/65">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              aria-controls="testimonial-panel"
              className="group grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy-900"
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-[18px] w-[18px] transition-transform duration-300 ease-premium group-hover:-translate-x-0.5"
                strokeWidth={2}
              />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              aria-controls="testimonial-panel"
              className="group grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy-900"
            >
              <ArrowRight
                aria-hidden="true"
                className="h-[18px] w-[18px] transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-10 md:mt-14" delay={80}>
          <div
            id="testimonial-panel"
            aria-live="polite"
            aria-roledescription="carousel"
            className="grid overflow-hidden rounded-[24px] bg-white lg:grid-cols-12"
          >
            <figure
              key={active.name}
              className="flex animate-fade-up flex-col justify-between p-7 md:p-10 lg:col-span-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote
                    aria-hidden="true"
                    className="h-8 w-8 text-accent-500"
                    strokeWidth={1.5}
                  />
                  <div
                    role="img"
                    aria-label="Rated 5 out of 5"
                    className="flex items-center gap-1"
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

                <blockquote className="mt-7">
                  <p className="heading text-[clamp(1.125rem,2.2vw,1.625rem)] font-semibold text-ink">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                </blockquote>
              </div>

              <figcaption className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-black/[0.08] pt-6">
                <div>
                  <p className="text-base font-bold tracking-[-0.02em] text-ink">
                    {active.name}
                  </p>
                  <p className="mt-0.5 text-[0.8125rem] text-muted">
                    {active.position}, {active.company}
                  </p>
                </div>
                <div className="rounded-2xl bg-canvas px-4 py-3">
                  <p className="text-xl font-extrabold tracking-[-0.03em] text-ink">
                    {active.metric.value}
                  </p>
                  <p className="text-[11px] font-medium text-muted">
                    {active.metric.label}
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="relative min-h-[280px] lg:col-span-5">
              <Image
                key={active.image + active.name}
                src={active.image}
                alt={active.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 flex justify-center gap-2" delay={120}>
          {testimonials.map((testimonial, dot) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(dot)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={dot === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 ease-premium",
                dot === index ? "w-8 bg-white" : "w-3 bg-white/25 hover:bg-white/50",
              )}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
