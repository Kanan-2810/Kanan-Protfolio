import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow, Pill } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { mockups } from "@/components/visuals/Mockups";
import { getAdjacentProject, getProject, projects } from "@/data/projects";
import type { ProjectVisual } from "@/data/projects";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Case study not found" };

  return {
    title: `${project.title} - Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.tagline,
      images:
        project.visual.kind === "image" ? [{ url: project.visual.src }] : undefined,
    },
  };
}

function HeroVisual({ visual }: { visual: ProjectVisual }) {
  if (visual.kind === "mockup") {
    const Mockup = mockups[visual.mockup];
    return (
      <div className="grid place-items-center p-6 md:p-12">
        <Mockup className="w-full max-w-[760px]" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full md:aspect-[2/1]">
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getAdjacentProject(project.slug);
  const meta = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <main id="main">
      <article>
        <header className="pt-28 md:pt-32">
          <div className="shell">
            <Reveal>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                All work
              </Link>
            </Reveal>

            <Reveal className="mt-10" delay={60}>
              <div className="flex items-center gap-4">
                <Eyebrow>{`Case Study ${project.index}`}</Eyebrow>
                <span aria-hidden="true" className="h-px flex-1 bg-black/10" />
              </div>

              <h1 className="display mt-7 text-[clamp(2.25rem,7vw,4.5rem)] font-extrabold text-ink">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[clamp(1.0625rem,2.2vw,1.375rem)] font-medium leading-snug text-accent-700">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <Pill key={category}>{category}</Pill>
                ))}
              </div>
            </Reveal>

            <Reveal
              className="mt-12 overflow-hidden rounded-[24px] border border-black/[0.07] bg-[linear-gradient(145deg,#EEF1F7_0%,#DDE4FF_100%)] md:rounded-[32px]"
              delay={120}
            >
              <HeroVisual visual={project.visual} />
            </Reveal>

            <Reveal className="mt-10 grid gap-8 border-y border-black/[0.08] py-8 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[0.9375rem] font-semibold text-ink">
                    {item.value}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </header>

        <section className="section-y pb-0 md:pb-0 lg:pb-0">
          <div className="shell">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <Eyebrow>Overview</Eyebrow>
              </Reveal>
              <Reveal className="lg:col-span-8" delay={60}>
                <p className="heading text-[clamp(1.25rem,2.8vw,1.875rem)] font-bold text-ink">
                  {project.caseStudy.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Pill key={tool} tone="accent">
                      {tool}
                    </Pill>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section className="section-y">
          <div className="shell">
            <ol className="space-y-4 md:space-y-6">
              {project.caseStudy.chapters.map((chapter, index) => {
                // Alternating treatment keeps a long case study from reading
                // as one uniform stack of cards.
                const inverted = index % 2 === 1;

                return (
                  <Reveal key={chapter.label} as="li" delay={index === 0 ? 0 : 40}>
                    <div
                      className={`grid gap-8 rounded-[24px] border p-7 md:p-10 lg:grid-cols-12 lg:gap-12 ${
                        inverted
                          ? "border-black/[0.06] bg-white/60"
                          : "border-black/[0.07] bg-white"
                      }`}
                    >
                      <div className={`lg:col-span-4 ${inverted ? "lg:order-2" : ""}`}>
                        <div className="flex items-baseline gap-4">
                          <span
                            aria-hidden="true"
                            className="text-[2.5rem] font-extrabold leading-none tracking-[-0.06em] text-ink/[0.08]"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <Eyebrow>{chapter.label}</Eyebrow>
                        </div>
                        <h2 className="heading mt-5 text-[clamp(1.375rem,2.6vw,1.875rem)] font-extrabold text-ink">
                          {chapter.title}
                        </h2>
                        <span
                          aria-hidden="true"
                          className="mt-6 block h-px w-16 bg-accent-500"
                        />
                      </div>

                      <div className={`lg:col-span-8 ${inverted ? "lg:order-1" : ""}`}>
                        <p className="text-[1.0625rem] leading-relaxed text-ink/75">
                          {chapter.body}
                        </p>

                        {chapter.bullets ? (
                          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                            {chapter.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="rounded-[16px] border border-black/[0.05] bg-canvas/70 p-4 text-[0.8125rem] font-medium leading-snug text-ink/80"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {project.support?.length ? (
          <section className="pb-20 md:pb-28">
            <div className="shell">
              <Reveal className="grid gap-4 md:grid-cols-2 md:gap-6">
                {project.support.map((support, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-[linear-gradient(145deg,#EEF1F7_0%,#DDE4FF_100%)]"
                  >
                    <HeroVisual visual={support} />
                  </div>
                ))}
                <div className="flex flex-col justify-center rounded-[24px] border border-black/[0.07] bg-white p-8 md:p-10">
                  <Eyebrow>In one line</Eyebrow>
                  <p className="heading mt-5 text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold text-ink">
                    {project.tagline}
                  </p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* Results */}
        <section className="on-dark px-3 md:px-5">
          <div className="relative overflow-hidden rounded-[28px] bg-navy-800 px-6 py-16 md:rounded-[40px] md:px-10 md:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full bg-accent-500/30 blur-[130px]"
            />
            <div className="relative shell">
              <Reveal className="max-w-2xl">
                <Eyebrow tone="dark">Results</Eyebrow>
                <h2 className="heading mt-6 text-[clamp(1.75rem,4.2vw,2.75rem)] font-extrabold text-white">
                  What changed after launch
                </h2>
              </Reveal>

              <dl className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {project.caseStudy.results.map((result, index) => (
                  <Reveal
                    key={result.label}
                    delay={index * 70}
                    className="rounded-[20px] border border-white/[0.14] bg-white/[0.05] p-6"
                  >
                    <dt className="sr-only">{result.label}</dt>
                    <dd>
                      <p className="text-[2.5rem] font-extrabold leading-none tracking-[-0.05em] text-white">
                        {result.value}
                      </p>
                      <p className="mt-3 text-[0.8125rem] font-medium text-white/60">
                        {result.label}
                      </p>
                    </dd>
                  </Reveal>
                ))}
              </dl>

              <Reveal className="mt-12 rounded-[20px] border border-white/[0.14] bg-white/[0.04] p-7 md:p-10">
                <Eyebrow tone="dark">Lessons learned</Eyebrow>
                <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-white/75">
                  {project.caseStudy.lessons}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="section-y">
          <div className="shell">
            <Reveal>
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col gap-6 rounded-[24px] border border-black/[0.07] bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift md:flex-row md:items-center md:justify-between md:p-10"
              >
                <div>
                  <Eyebrow>Next Case Study</Eyebrow>
                  <p className="heading mt-4 text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold text-ink">
                    {next.title}
                  </p>
                  <p className="mt-2 text-[0.9375rem] text-muted">{next.tagline}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-white transition-all duration-300 ease-premium group-hover:rotate-45 group-hover:bg-accent-500"
                >
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </article>

      <Cta />
      <Footer />
    </main>
  );
}
