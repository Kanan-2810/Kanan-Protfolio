import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroPortrait } from "@/components/sections/HeroPortrait";

const skills = ["UI/UX", "Product Design", "Branding", "Developer"];

export function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28 lg:pt-32">
      <div className="shell">
        {/* Stage: oversized editorial word, gradient arch, cut-out portrait and
            the headline sharing one panel. */}
        <Reveal className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-b from-[#D7DEEC] via-[#E2E7F3] to-[#EDF1F8] md:rounded-[40px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[62%] top-[54%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/20 blur-[120px]"
          />

          {/* Oversized background word. Centred on the panel so it bleeds off
              both edges evenly, and anchored from the bottom — the arch is
              always flush with the panel floor, so this keeps the word sitting
              behind the head at every breakpoint. */}
          <p
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[15rem] left-1/2 w-[132%] -translate-x-1/2 select-none whitespace-nowrap text-center text-[clamp(3.25rem,17.5vw,15.5rem)] font-extrabold leading-[0.78] tracking-[-0.06em] text-white/75 sm:bottom-[19rem] md:bottom-[22rem] lg:bottom-[20.5rem] xl:bottom-[19.5rem]"
          >
            ENGINEER
          </p>

          <div className="relative px-5 pt-10 md:px-10 md:pt-12">
            <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
              {/* Headline: above the arch when stacked, bottom-left beside it
                  on desktop. */}
              <Reveal className="relative z-10 lg:col-span-6 lg:pb-14" delay={120}>
                <p className="text-[0.9375rem] font-medium text-ink/70">
                  Hey, I&apos;m Kanan.
                </p>
                <h1 className="display mt-3 text-[clamp(2rem,4.8vw,3.5rem)] font-extrabold text-ink">
                  Product, AI &amp;
                  {/* Below sm the line is too narrow for a forced break — let
                      text-wrap: balance choose instead. */}
                  <br className="hidden sm:inline" /> Engineer
                </h1>
              </Reveal>

              {/* Cut-out portrait, flush with the panel floor. */}
              <div className="flex justify-center lg:col-span-6">
                <div className="relative h-[300px] w-[264px] sm:h-[400px] sm:w-[352px] md:h-[470px] md:w-[414px] lg:h-[470px] lg:w-[400px] xl:h-[520px] xl:w-[458px]">
                  <HeroPortrait />

                  {/* Floating capability tags, tucked against the portrait. */}
                  {/* <div aria-hidden="true" className="absolute inset-0 z-10 hidden sm:block">
                    {heroTags.map((tag, index) => (
                      <span
                        key={tag.label}
                        style={{
                          top: tag.top,
                          bottom: tag.bottom,
                          left: tag.left,
                          right: tag.right,
                          rotate: `${tag.rotate}deg`,
                          animationDelay: tag.delay,
                        }}
                        className={cn(
                          "absolute whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[0.8125rem] font-semibold text-ink shadow-lift",
                          index % 2 === 0 ? "animate-float" : "animate-float-slow",
                        )}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat cards, overlapping the right of the arch. Desktop
              only — the Stats section carries the same numbers on mobile. */}
          {/* <div className="absolute bottom-10 right-8 z-10 hidden w-[260px] flex-col gap-3 lg:flex xl:right-10">
            {heroStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                className="flex items-center justify-between gap-4 rounded-[16px] bg-white/95 px-5 py-4 shadow-lift backdrop-blur-sm"
                delay={260 + index * 90}
              >
                <span className="text-[0.8125rem] font-medium leading-snug text-muted [text-wrap:balance]">
                  {stat.label}
                </span>
                <span className="text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {stat.value}
                </span>
              </Reveal>
            ))}
          </div> */}
        </Reveal>

        {/* Mobile equivalent of the floating tags. */}
        <div className="mt-5 flex flex-wrap gap-2 sm:hidden">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-xs font-semibold text-ink"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Statement band. */}
        <Reveal
          className="relative mt-10 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#4F6FFF_0%,#5B6FFF_50%,#7183FF_100%)] p-7 md:mt-12 md:rounded-[32px] md:p-12"
          delay={80}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#DDE4FF]/45 blur-3xl"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="heading max-w-2xl text-[clamp(1.5rem,3.4vw,2.35rem)] font-bold text-white">
              I create thoughtful digital experiences that connect strategy,
              usability, and visual clarity.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                Let&apos;s Talk
              </Button>
              <Button href="#work" variant="outline-light" withChip={false}>
                <span className="pr-2">View Work</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
