import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/data/insights";

export function Insights() {
  return (
    <section id="insights" className="section-y pt-0 md:pt-0 lg:pt-0">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="heading mt-6 text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-ink">
              Notes from shipping
              <br className="hidden sm:block" /> AI products
            </h2>
          </div>
          <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted">
            Occasional notes on RAG, SaaS architecture, and the parts of
            shipping that never make a demo.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {insights.map((insight, index) => (
            <Reveal key={insight.title} delay={index * 80}>
              <Link
                href={insight.href}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.07] bg-white transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-lift"
              >
                <div className="relative m-2 aspect-[4/3] overflow-hidden rounded-[14px]">
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 400px"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-ink backdrop-blur-sm">
                    {insight.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-3 md:p-6 md:pt-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    {insight.date} · {insight.readingTime}
                  </p>
                  <h3 className="mt-3 text-lg font-bold tracking-[-0.02em] text-ink md:text-xl">
                    {insight.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">
                    {insight.excerpt}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Read note
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.2}
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
