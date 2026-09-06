import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroHeading } from "@/components/sections/HeroHeading";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { HeroWordmark } from "@/components/sections/HeroWordmark";
import { heroStats } from "@/data/site";

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

          <HeroWordmark />

          <div className="relative px-5 pt-10 md:px-10 md:pt-12">
            <div className="relative grid items-end lg:min-h-[520px]">
              <HeroHeading />

              {/* Cut-out portrait, overlapping the heading so the middle isn’t empty. */}
              <div className="flex justify-start sm:justify-center lg:absolute lg:bottom-0 lg:left-[28%] lg:right-[-4%] lg:justify-start">
                <div className="relative h-[400px] w-full sm:h-[400px] sm:w-[352px] md:h-[470px] md:w-[414px] lg:h-[520px] lg:w-[460px] xl:h-[560px] xl:w-[500px]">
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

          <div className="absolute bottom-10 right-5 z-10 hidden w-[232px] flex-col gap-3 lg:flex xl:right-8 xl:w-[252px]">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between gap-4 rounded-[16px] bg-white/95 px-5 py-4 shadow-lift backdrop-blur-sm"
              >
                <span className="text-[0.8125rem] font-medium leading-snug text-muted [text-wrap:balance]">
                  {stat.label}
                </span>
                <span className="text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

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
              <Button href="#work" variant="outline-light">
                View Work
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
