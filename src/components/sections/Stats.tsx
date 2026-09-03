import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { clientLogos } from "@/data/site";
import { stats } from "@/data/stats";
import { cn } from "@/lib/cn";

const avatarInitials = ["EM", "PR", "DO", "TW"];

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="pb-8 md:pb-12">
      <div className="shell">
        <h2 id="stats-heading" className="sr-only">
          Experience in numbers
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 70}
              className={cn(
                "group flex h-full flex-col justify-between rounded-[20px] border p-6 transition-all duration-500 ease-premium hover:-translate-y-1",
                index === 0
                  ? "border-transparent bg-navy-800 text-white hover:shadow-glow"
                  : "border-black/[0.07] bg-white hover:border-black/15 hover:shadow-card",
              )}
            >
              <div>
                <p
                  className={cn(
                    "text-[2.75rem] font-extrabold leading-none tracking-[-0.05em]",
                    index === 0 ? "text-white" : "text-ink",
                  )}
                >
                  {stat.value}
                </p>
                <p
                  className={cn(
                    "mt-3 text-sm font-semibold tracking-[-0.01em]",
                    index === 0 ? "text-accent-100" : "text-ink",
                  )}
                >
                  {stat.label}
                </p>
              </div>
              <p
                className={cn(
                  "mt-6 text-[0.8125rem] leading-relaxed",
                  index === 0 ? "text-white/65" : "text-muted",
                )}
              >
                {stat.note}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="mt-3 flex flex-col gap-6 rounded-[20px] border border-black/[0.07] bg-white p-6 sm:flex-row sm:items-center sm:justify-between lg:mt-4"
          delay={120}
        >
          <div className="flex items-center gap-4">
            <ul className="flex -space-x-2.5">
              {avatarInitials.map((initials, index) => (
                <li
                  key={initials}
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full border-2 border-white text-[11px] font-bold",
                    index % 2 === 0
                      ? "bg-navy-800 text-white"
                      : "bg-accent-100 text-accent-700",
                  )}
                >
                  {initials}
                </li>
              ))}
            </ul>
            <div>
              <div className="flex items-center gap-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-accent-500 text-accent-500"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-[0.8125rem] font-medium text-muted">
                <span className="font-bold text-ink">5.0 average</span> across
                10+ product builds
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="mask-fade-x relative w-full overflow-hidden sm:max-w-[52%]"
          >
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="whitespace-nowrap text-base font-bold tracking-[-0.03em] text-ink/60"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
