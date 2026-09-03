import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[80vh] place-items-center px-5 pt-24">
      <div className="w-full max-w-lg text-center">
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <h1 className="display mt-6 text-[clamp(3rem,12vw,6rem)] font-extrabold text-ink">
          Lost the thread
        </h1>
        <p className="mx-auto mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
          This page does not exist - or it moved while the product was
          shipping, which is entirely plausible around here.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/">Back to the portfolio</Button>
        </div>
      </div>
    </main>
  );
}
