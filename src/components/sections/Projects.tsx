import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="section-y">
      <div className="shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Selected Work</Eyebrow>
          <h2 className="heading mt-6 text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold text-ink">
            Projects That Delivered
            <br className="hidden sm:block" /> Real Impact
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
            Four engagements, each with a measurable outcome. Every card opens a
            full case study — process, decisions and what I would do differently.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4 md:mt-16 md:space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index === 0 ? 0 : 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            Curious about something that is not shown here?
          </p>
          <Button href="#contact" variant="light">
            Ask about the archive
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
