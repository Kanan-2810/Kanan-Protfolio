"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Faq() {
  // useId() emits colons, which are legal in an id but need escaping in a CSS
  // selector - strip them so the panels stay easy to target.
  const baseId = useId().replace(/:/g, "");
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );

  return (
    <section id="faq" className="section-y">
      <div className="shell">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-[24px] bg-[linear-gradient(150deg,#4F6FFF_0%,#5B6FFF_45%,#8290FF_100%)] p-7 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"
              />

              {/* Puts a face on the ask. Sits in the corner the copy leaves
                  empty once the card stretches to the accordion's height. */}
              <Image
                src={site.avatarCutout}
                alt={site.name}
                width={560}
                height={521}
                loading="lazy"
                sizes="240px"
                className="pointer-events-none absolute -right-6 bottom-0 hidden w-[240px] max-w-none drop-shadow-[0_18px_36px_rgba(4,32,92,0.35)] lg:block"
              />

              <div className="relative flex h-full flex-col justify-between gap-12">
                <div>
                  <Eyebrow tone="dark" className="text-white/85">
                    FAQ
                  </Eyebrow>
                  <h2 className="heading mt-6 text-[clamp(1.75rem,3.6vw,2.75rem)] font-extrabold text-white">
                    Got questions about building an AI product?
                  </h2>
                  <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-white/85">
                    If the answer you need is not below, just ask. I reply to
                    every enquiry personally, usually within a day.
                  </p>
                </div>

                <div>
                  <Button href="#contact" variant="light">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={80}>
            <div className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-white">
              <ul>
                {faqs.map((faq, index) => {
                  const isOpen = open.includes(index);
                  const panelId = `${baseId}-panel-${index}`;
                  const buttonId = `${baseId}-button-${index}`;

                  return (
                    <li
                      key={faq.question}
                      className="border-b border-black/[0.07] last:border-b-0"
                    >
                      <h3>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggle(index)}
                          className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors duration-300 hover:bg-canvas/60 md:px-8 md:py-6"
                        >
                          <span
                            className={cn(
                              "flex-1 text-[0.9375rem] font-semibold tracking-[-0.01em] transition-colors md:text-base",
                              isOpen ? "text-accent-700" : "text-ink",
                            )}
                          >
                            {faq.question}
                          </span>
                          <span
                            aria-hidden="true"
                            className={cn(
                              "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ease-premium",
                              isOpen
                                ? "rotate-45 border-transparent bg-accent-500 text-white"
                                : "border-black/[0.08] bg-canvas text-ink",
                            )}
                          >
                            <Plus className="h-4 w-4" strokeWidth={2.2} />
                          </span>
                        </button>
                      </h3>

                      {/* 0fr → 1fr gives a smooth height transition without
                          measuring the panel in JavaScript. */}
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={cn(
                          "grid transition-all duration-500 ease-premium",
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 pr-16 text-[0.9375rem] leading-relaxed text-muted md:px-8 md:pb-7 md:pr-20">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
