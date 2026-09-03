import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Cta() {
  return (
    <section id="contact" className="on-dark px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[linear-gradient(165deg,#0A317E_0%,#082D78_45%,#062A70_100%)] px-6 py-20 md:rounded-[40px] md:px-10 md:py-28 lg:py-36">
        {/* Soft blue climax glow. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[46%] h-[620px] w-[900px] max-w-[135vw] -translate-x-1/2 -translate-y-1/2 animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(108,125,255,0.95),rgba(76,111,255,0.45),transparent)] blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/60 to-transparent"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="dark" className="justify-center">
              Let&apos;s Work Together
            </Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="display mt-7 text-[clamp(2.25rem,7vw,4.75rem)] font-extrabold text-white">
              Ready To Start
              <br />
              Something Great?
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Have a product, brand or digital experience in mind? Let&apos;s
              build something meaningful together.
            </p>
          </Reveal>

          <Reveal
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            delay={200}
          >
            <Button href={`mailto:${site.email}`} variant="light">
              Start a Project
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              {site.email}
            </a>
          </Reveal>

          <Reveal
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-white/65"
            delay={260}
          >
            <span>Replies within one working day</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
            <span>{site.availability}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
            <span>{site.location}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
