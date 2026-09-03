import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/Eyebrow";
import { mockups } from "@/components/visuals/Mockups";
import type { Project, ProjectVisual } from "@/data/projects";
import { cn } from "@/lib/cn";

function Visual({
  visual,
  className,
  sizes,
  priority,
}: {
  visual: ProjectVisual;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  if (visual.kind === "mockup") {
    const Mockup = mockups[visual.mockup];
    return (
      <div className={cn("grid place-items-center p-6 sm:p-8", className)}>
        <Mockup className="w-full max-w-[420px]" />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
      />
    </div>
  );
}

function Meta({ project, dark }: { project: Project; dark?: boolean }) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <dl
      className={cn(
        "grid grid-cols-3 gap-4 border-t pt-5",
        dark ? "border-white/15" : "border-black/[0.08]",
      )}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.14em]",
              dark ? "text-white/65" : "text-muted",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "mt-1.5 text-[0.8125rem] font-medium leading-snug",
              dark ? "text-white" : "text-ink",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CaseStudyLink({ project, dark }: { project: Project; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-sm font-semibold tracking-[-0.01em]",
        dark ? "text-white" : "text-ink",
      )}
    >
      View Case Study
      <span
        aria-hidden="true"
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full transition-all duration-300 ease-premium group-hover:rotate-45",
          dark ? "bg-white text-navy-900" : "bg-ink text-white group-hover:bg-accent-500",
        )}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span className="sr-only">for {project.title}</span>
    </span>
  );
}

function Index({ value, dark }: { value: string; dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "text-[3.5rem] font-extrabold leading-none tracking-[-0.06em] md:text-[4.5rem]",
        dark ? "text-white/15" : "text-ink/[0.08]",
      )}
    >
      {value}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const dark = project.theme === "dark";
  const href = `/work/${project.slug}`;

  const shell = cn(
    "group relative block overflow-hidden rounded-[24px] border transition-all duration-500 ease-premium hover:-translate-y-1.5",
    dark
      ? "border-white/10 bg-navy-900 hover:shadow-glow"
      : "border-black/[0.07] bg-white hover:border-black/[0.12] hover:shadow-lift",
  );

  const header = (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {project.categories.map((category) => (
          <Pill key={category} tone={dark ? "dark" : "light"}>
            {category}
          </Pill>
        ))}
      </div>
      <Index value={project.index} dark={dark} />
    </div>
  );

  const body = (
    <>
      <h3
        className={cn(
          "heading mt-6 text-[clamp(1.5rem,2.6vw,2.25rem)] font-extrabold",
          dark ? "text-white" : "text-ink",
        )}
      >
        {project.title}
      </h3>
      <p
        className={cn(
          "mt-3 text-[0.9375rem] font-medium",
          dark ? "text-accent-200" : "text-accent-700",
        )}
      >
        {project.tagline}
      </p>
      <p
        className={cn(
          "mt-4 max-w-xl text-[0.9375rem] leading-relaxed",
          dark ? "text-white/65" : "text-muted",
        )}
      >
        {project.summary}
      </p>
    </>
  );

  const outcome = (
    <div
      className={cn(
        "inline-flex items-baseline gap-2.5 rounded-full px-4 py-2.5",
        dark ? "bg-white/[0.08] text-white" : "bg-canvas text-ink",
      )}
    >
      <span className="text-lg font-extrabold tracking-[-0.03em]">
        {project.outcome.value}
      </span>
      <span className={cn("text-xs font-medium", dark ? "text-white/60" : "text-muted")}>
        {project.outcome.label}
      </span>
    </div>
  );

  /* ---------------------------------------------------------- full-bleed */
  if (project.layout === "full") {
    return (
      <Link href={href} className={shell}>
        <div className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-between p-7 md:p-12 lg:col-span-5">
            {header}
            {body}
            <div className="mt-8 space-y-6">
              <Meta project={project} dark />
              <div className="flex flex-wrap items-center gap-4">
                {outcome}
                <CaseStudyLink project={project} dark />
              </div>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:col-span-7 lg:min-h-[520px]">
            <Visual
              visual={project.visual}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="relative h-full w-full"
            />
          </div>
        </div>
      </Link>
    );
  }

  /* --------------------------------------------------------------- bento */
  if (project.layout === "bento") {
    return (
      <Link href={href} className={shell}>
        <div className="grid gap-4 p-4 lg:grid-cols-12 lg:gap-5 lg:p-5">
          <div className="flex flex-col justify-between rounded-[16px] bg-canvas/60 p-5 md:p-7 lg:col-span-5">
            <div>
              {header}
              {body}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {outcome}
              <CaseStudyLink project={project} />
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-7 lg:grid-rows-[1.25fr_1fr] lg:gap-5">
            <div className="overflow-hidden rounded-[16px] bg-[linear-gradient(145deg,#EEF1F7_0%,#DDE4FF_100%)]">
              <Visual
                visual={project.visual}
                sizes="(max-width: 1024px) 90vw, 640px"
                className="h-full"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              <div className="overflow-hidden rounded-[16px] bg-canvas/60">
                {project.support?.[0] ? (
                  <Visual
                    visual={project.support[0]}
                    sizes="(max-width: 1024px) 45vw, 320px"
                    className="h-full"
                  />
                ) : null}
              </div>
              <div className="flex flex-col justify-between rounded-[16px] border border-black/[0.06] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Toolkit
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <Pill key={tool} tone="accent">
                      {tool}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  /* -------------------------------------------------- split (two columns) */
  const imageFirst = project.layout === "image-left";

  return (
    <Link href={href} className={shell}>
      <div className="grid lg:grid-cols-12">
        <div
          className={cn(
            "flex flex-col justify-between p-7 md:p-10 lg:col-span-5",
            imageFirst && "lg:order-2",
          )}
        >
          <div>
            {header}
            {body}
          </div>
          <div className="mt-8 space-y-6">
            <Meta project={project} />
            <div className="flex flex-wrap items-center gap-4">
              {outcome}
              <CaseStudyLink project={project} />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative min-h-[280px] overflow-hidden bg-[linear-gradient(145deg,#EEF1F7_0%,#DDE4FF_100%)] sm:min-h-[380px] lg:col-span-7 lg:min-h-[520px]",
            imageFirst && "lg:order-1",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/25 blur-3xl transition-opacity duration-700 group-hover:opacity-100 lg:opacity-60"
          />
          <Visual
            visual={project.visual}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="relative h-full w-full"
          />
        </div>
      </div>
    </Link>
  );
}
