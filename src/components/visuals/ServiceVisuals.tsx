import Image from "next/image";
import type { ServiceVisual } from "@/data/services";

/* Decorative accompaniments for the bento service cards. Each one is built
   from markup so it inherits the palette and stays sharp on any display. */

function IdentityVisual() {
  return (
    <div aria-hidden="true" className="grid grid-cols-4 gap-2">
      {["K", "◆", "○", "▲"].map((glyph, index) => (
        <div
          key={glyph}
          className={
            index === 0
              ? "grid aspect-square place-items-center rounded-xl bg-white text-lg font-extrabold text-navy-900"
              : "grid aspect-square place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-base text-white/50"
          }
        >
          {glyph}
        </div>
      ))}
      <div className="col-span-4 mt-1 flex gap-1.5">
        {["bg-white", "bg-accent-300", "bg-accent-500", "bg-navy-600", "bg-white/20"].map(
          (swatch) => (
            <span key={swatch} className={`h-6 flex-1 rounded-md ${swatch}`} />
          ),
        )}
      </div>
    </div>
  );
}

function InterfaceVisual() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] p-3"
    >
      <div className="flex items-center gap-2 pb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-auto h-1.5 w-12 rounded-full bg-white/15" />
      </div>
      <div className="grid grid-cols-[1fr_1.4fr] gap-2">
        <div className="space-y-2">
          <div className="h-14 rounded-lg bg-white/10" />
          <div className="h-8 rounded-lg bg-white/[0.07]" />
        </div>
        <div className="space-y-2">
          <div className="h-5 w-2/3 rounded-full bg-white/20" />
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-5/6 rounded-full bg-white/10" />
          <div className="mt-3 h-7 w-24 rounded-full bg-accent-500" />
        </div>
      </div>
    </div>
  );
}

function LayersVisual() {
  const layers = [
    { label: "Discovery", offset: 0, tone: "bg-white/[0.06] text-white/45" },
    { label: "Flows", offset: 18, tone: "bg-white/[0.10] text-white/65" },
    { label: "Interface", offset: 36, tone: "bg-accent-500 text-white" },
  ];

  return (
    <div aria-hidden="true" className="relative h-28">
      {layers.map((layer) => (
        <div
          key={layer.label}
          style={{ top: layer.offset, left: layer.offset * 0.7 }}
          className={`absolute right-0 flex h-14 items-center justify-between rounded-xl border border-white/20 px-4 text-[11px] font-semibold backdrop-blur-sm ${layer.tone}`}
        >
          {layer.label}
          <span className="h-1.5 w-10 rounded-full bg-current opacity-40" />
        </div>
      ))}
    </div>
  );
}

function CodeVisual() {
  const lines = [
    { indent: 0, width: "w-2/5", tone: "bg-accent-300" },
    { indent: 1, width: "w-3/5", tone: "bg-white/25" },
    { indent: 1, width: "w-2/4", tone: "bg-white/15" },
    { indent: 2, width: "w-1/3", tone: "bg-accent-200/60" },
    { indent: 1, width: "w-2/5", tone: "bg-white/15" },
    { indent: 0, width: "w-1/5", tone: "bg-white/25" },
  ];

  return (
    <div
      aria-hidden="true"
      className="space-y-2 rounded-xl border border-white/15 bg-navy-950/60 p-4 font-mono"
    >
      {lines.map((line, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="text-[9px] tabular-nums text-white/20">{index + 1}</span>
          <span
            style={{ marginLeft: line.indent * 12 }}
            className={`h-2 rounded-full ${line.width} ${line.tone}`}
          />
        </div>
      ))}
    </div>
  );
}

function PhotoMobileVisual() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[3/4]">
      <Image
        src="/images/bento-mobile.jpg"
        alt="A hand holding a smartphone against a blue gradient backdrop"
        fill
        loading="lazy"
        sizes="(max-width: 1024px) 90vw, 320px"
        className="object-cover"
      />
    </div>
  );
}

export function ServiceArtwork({ visual }: { visual: ServiceVisual }) {
  switch (visual) {
    case "identity":
      return <IdentityVisual />;
    case "interface":
      return <InterfaceVisual />;
    case "layers":
      return <LayersVisual />;
    case "code":
      return <CodeVisual />;
    case "photo-mobile":
      return <PhotoMobileVisual />;
    default:
      return null;
  }
}
