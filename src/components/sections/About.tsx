import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/about";
import { disciplines } from "@/data/stats";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow>About Me</Eyebrow>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-black/[0.07] bg-white p-3 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px]">
                <Image
                  src={site.portraitStudio}
                  alt={`${site.name}, ${site.role.toLowerCase()}, in a studio portrait`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-2 pb-1 pt-4">
                <div>
                  <p className="text-base font-bold tracking-[-0.02em] text-ink">
                    {about.signature}
                  </p>
                  <p className="text-xs text-muted">{site.role}</p>
                </div>
                <span className="rounded-full bg-canvas px-3 py-1.5 text-[11px] font-semibold text-muted">
                  Est. 2021
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="heading text-[clamp(1.75rem,4.2vw,3.1rem)] font-extrabold text-ink">
                {about.statement}
              </h2>
            </Reveal>

            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2" delay={120}>
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={
                    index === 0
                      ? "text-[1.0625rem] leading-relaxed text-ink/80 sm:col-span-2"
                      : "text-[0.9375rem] leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-10 border-t border-black/[0.08] pt-8" delay={180}>
              <dl className="grid gap-6 sm:grid-cols-3">
                {about.principles.map((principle) => (
                  <div key={principle.title}>
                    <dt className="text-sm font-bold tracking-[-0.01em] text-ink">
                      {principle.title}
                    </dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                      {principle.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap items-center gap-3" delay={220}>
              <Button href="#work" variant="primary">
                See selected work
              </Button>
              <div className="flex flex-wrap gap-2">
                {disciplines.map((discipline) => (
                  <span
                    key={discipline.title}
                    title={discipline.detail}
                    className="rounded-full border border-black/[0.08] bg-white px-3.5 py-2 text-xs font-medium text-muted"
                  >
                    {discipline.title}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
