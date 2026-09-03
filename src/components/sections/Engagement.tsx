import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { engagements } from "@/data/engagement";
import { cn } from "@/lib/cn";

export function Engagement() {
  return (
    <section
      id="engagement"
      className="border-t border-white/[0.08] py-20 md:py-28 lg:py-32"
    >
      <div className="shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="dark" className="justify-center">
            Ways To Work Together
          </Eyebrow>
          <h2 className="heading mt-6 text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold text-white">
            Design, develop, deploy
            <br className="hidden sm:block" /> for teams that ship
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/60">
            Three ways in, priced honestly. Every engagement starts with a call
            and a written scope - then I own the product until it is live.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
          {engagements.map((engagement, index) => (
            <Reveal
              key={engagement.name}
              delay={index * 80}
              className={cn(
                "flex h-full flex-col rounded-[24px] border p-7 transition-all duration-500 ease-premium hover:-translate-y-1 md:p-8",
                engagement.featured
                  ? "border-white/25 bg-white text-ink shadow-glow lg:-mt-4 lg:mb-4"
                  : "border-white/[0.14] bg-white/[0.05] text-white hover:bg-white/[0.08]",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3
                  className={cn(
                    "text-lg font-bold tracking-[-0.02em]",
                    engagement.featured ? "text-ink" : "text-white",
                  )}
                >
                  {engagement.name}
                </h3>
                {engagement.featured ? (
                  <span className="rounded-full bg-accent-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Most chosen
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className={cn(
                    "font-extrabold leading-none tracking-[-0.045em]",
                    // Word-based prices need a smaller size to stay on one line.
                    engagement.price.startsWith("$")
                      ? "text-[2.5rem]"
                      : "text-[1.75rem]",
                    engagement.featured ? "text-ink" : "text-white",
                  )}
                >
                  {engagement.price}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium",
                    engagement.featured ? "text-muted" : "text-white/65",
                  )}
                >
                  {engagement.priceNote}
                </span>
              </div>

              <p
                className={cn(
                  "mt-5 text-[0.9375rem] leading-relaxed",
                  engagement.featured ? "text-muted" : "text-white/60",
                )}
              >
                {engagement.summary}
              </p>

              <dl
                className={cn(
                  "mt-6 grid grid-cols-2 gap-4 border-y py-5",
                  engagement.featured ? "border-black/[0.08]" : "border-white/15",
                )}
              >
                <div>
                  <dt
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-[0.14em]",
                      engagement.featured ? "text-muted" : "text-white/65",
                    )}
                  >
                    Timeline
                  </dt>
                  <dd
                    className={cn(
                      "mt-1.5 text-[0.8125rem] font-semibold",
                      engagement.featured ? "text-ink" : "text-white",
                    )}
                  >
                    {engagement.timeline}
                  </dd>
                </div>
                <div>
                  <dt
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-[0.14em]",
                      engagement.featured ? "text-muted" : "text-white/65",
                    )}
                  >
                    Ideal for
                  </dt>
                  <dd
                    className={cn(
                      "mt-1.5 text-[0.8125rem] leading-snug",
                      engagement.featured ? "text-ink" : "text-white/80",
                    )}
                  >
                    {engagement.idealFor}
                  </dd>
                </div>
              </dl>

              <p
                className={cn(
                  "mt-6 text-[10px] font-semibold uppercase tracking-[0.14em]",
                  engagement.featured ? "text-muted" : "text-white/65",
                )}
              >
                What&apos;s included
              </p>
              <ul className="mt-4 space-y-2.5">
                {engagement.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                        engagement.featured
                          ? "bg-accent-100 text-accent-700"
                          : "bg-white/10 text-accent-200",
                      )}
                    >
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span
                      className={cn(
                        "text-[0.8125rem] leading-snug",
                        engagement.featured ? "text-ink/80" : "text-white/70",
                      )}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  href="#contact"
                  variant={engagement.featured ? "primary" : "outline-light"}
                  className="w-full justify-between"
                >
                  {engagement.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
