import { heroWordmark } from "@/data/site";

const loop = [...heroWordmark, ...heroWordmark];

/**
 * Oversized editorial watermark. Same continuous sideways marquee as the
 * client-logo ticker in Stats - duplicated track, CSS-only.
 */
export function HeroWordmark() {
  return (
    <div
      aria-hidden="true"
      className="mask-fade-x pointer-events-none absolute inset-x-0 bottom-[13rem] overflow-hidden pt-8 sm:bottom-[17rem] sm:pt-10 md:bottom-[20rem] md:pt-12 lg:bottom-[18.5rem] xl:bottom-[17.5rem]"
    >
      <div className="flex w-max animate-marquee items-end gap-[clamp(3rem,8vw,8rem)] pb-[0.08em] pt-[0.14em] text-[clamp(3.25rem,17.5vw,15.5rem)]">
        {loop.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="select-none whitespace-nowrap font-extrabold leading-none tracking-[-0.06em] text-white/75 [text-shadow:0.045em_0.045em_0_#B7C3D8]"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
