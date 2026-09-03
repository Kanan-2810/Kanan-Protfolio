import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ServiceArtwork } from "@/components/visuals/ServiceVisuals";
import { processSteps, services } from "@/data/services";
import { cn } from "@/lib/cn";

const tones = {
  glass: "border-white/[0.14] bg-white/[0.05] hover:bg-white/[0.09]",
  solid: "border-white/[0.10] bg-navy-950/60 hover:bg-navy-950/80",
  accent:
    "border-transparent bg-[linear-gradient(160deg,#4F6FFF_0%,#3352E8_60%,#0A317E_100%)] hover:brightness-110",
} as const;

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32">
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="dark" className="justify-center">
            Expertise
          </Eyebrow>
          <h2 className="heading mt-6 text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold text-white">
            Products Built To
            <br className="hidden sm:block" /> Ship In Production
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/60">
            Five capabilities that usually arrive together. Most engagements
            start with a product question and pull in AI, stack, and deploy as
            the work reveals what is actually needed.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 md:mt-16 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(3,minmax(180px,auto))] lg:gap-4">
          {services.map((service, index) => (
            <Reveal
              key={service.index}
              delay={index * 60}
              className={cn(
                "group flex flex-col rounded-[20px] border p-6 transition-all duration-500 ease-premium hover:-translate-y-1 md:p-7",
                tones[service.tone],
                service.span,
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-white/65">
                  {service.index}
                </span>
                <ArrowButton
                  href="#contact"
                  label={`Enquire about ${service.title}`}
                  tone="ghost-light"
                  size="sm"
                  direction="diagonal"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white/60"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>

              {service.visual !== "none" ? (
                <div className="mt-auto pt-7">
                  <ServiceArtwork visual={service.visual} />
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-[20px] border border-white/[0.14] bg-white/[0.04] p-6 md:mt-16 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h3 className="text-lg font-bold tracking-[-0.02em] text-white">
              How the work runs
            </h3>
            <p className="max-w-md text-[0.8125rem] leading-relaxed text-white/70">
              Same four phases whether it is a two-week sprint or a six-month
              product build. Only the depth changes.
            </p>
          </div>

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step} className="border-t border-white/15 pt-4">
                <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-accent-200">
                  {step.step}
                </span>
                <h4 className="mt-2 text-base font-bold tracking-[-0.01em] text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/70">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
