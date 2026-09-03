import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------
   Hand-built interface mockups.

   These are rendered as markup rather than screenshots so they stay crisp at
   any density, weigh nothing, and can adopt the site's own design tokens.
   All of them are decorative, so they are hidden from assistive technology
   and the surrounding component supplies the description.
   ------------------------------------------------------------------------- */

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-black/[0.06] px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
      </div>
      <div className="mx-auto rounded-full bg-black/[0.04] px-3 py-1 text-[10px] font-medium text-muted">
        {label}
      </div>
    </div>
  );
}

function AreaChart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 110"
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      role="presentation"
    >
      <defs>
        <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4C6FFF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4C6FFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 84 C 26 84 34 58 58 56 C 82 54 92 76 116 72 C 140 68 148 34 174 32 C 200 30 208 52 232 46 C 256 40 266 16 292 14 L 320 10 L 320 110 L 0 110 Z"
        fill="url(#area-fill)"
      />
      <path
        d="M0 84 C 26 84 34 58 58 56 C 82 54 92 76 116 72 C 140 68 148 34 174 32 C 200 30 208 52 232 46 C 256 40 266 16 292 14 L 320 10"
        fill="none"
        stroke="#4C6FFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Desktop product dashboard - used for the Northwind case study. */
export function AnalyticsMockup({ className }: { className?: string }) {
  const rows = [
    { name: "M. Alvarez", time: "09:15", state: "Confirmed" },
    { name: "T. Whitfield", time: "09:40", state: "Checked in" },
    { name: "S. Ibrahim", time: "10:05", state: "Waiting" },
    { name: "L. Nakamura", time: "10:30", state: "Confirmed" },
  ];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-xl border border-black/[0.07] bg-white shadow-card",
        className,
      )}
    >
      <WindowChrome label="northwind.health/schedule" />
      <div className="grid grid-cols-[68px_1fr] sm:grid-cols-[92px_1fr]">
        <aside className="space-y-4 border-r border-black/[0.06] bg-canvas/60 p-3 sm:p-4">
          <div className="h-6 w-6 rounded-lg bg-navy-800" />
          <div className="space-y-2.5">
            {[0, 1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-[3px]",
                    item === 1 ? "bg-accent-500" : "bg-black/10",
                  )}
                />
                <span
                  className={cn(
                    "h-1.5 rounded-full",
                    item === 1 ? "w-8 bg-ink/70" : "w-6 bg-black/10",
                  )}
                />
              </div>
            ))}
          </div>
        </aside>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex items-end justify-between">
            <div className="space-y-1.5">
              <div className="h-1.5 w-14 rounded-full bg-black/10" />
              <div className="text-sm font-bold tracking-tight text-ink sm:text-base">
                Today&apos;s schedule
              </div>
            </div>
            <div className="rounded-full bg-accent-500 px-2.5 py-1 text-[9px] font-semibold text-white">
              + New
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "128", label: "Booked" },
              { value: "94%", label: "Utilised" },
              { value: "6m", label: "Avg wait" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-black/[0.06] bg-canvas/50 p-2.5"
              >
                <div className="text-sm font-bold tracking-tight text-ink sm:text-base">
                  {stat.value}
                </div>
                <div className="text-[9px] font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="h-16 rounded-lg border border-black/[0.06] bg-white p-1 sm:h-20">
            <AreaChart />
          </div>

          <div className="space-y-1.5">
            {rows.map((row) => (
              <div
                key={row.name}
                className="flex items-center gap-2.5 rounded-lg border border-black/[0.05] bg-white px-2.5 py-2"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-100 text-[8px] font-bold text-accent-700">
                  {row.name.slice(0, 1)}
                </span>
                <span className="text-[10px] font-semibold text-ink">{row.name}</span>
                <span className="ml-auto text-[9px] font-medium text-muted">
                  {row.time}
                </span>
                <span className="rounded-full bg-canvas px-1.5 py-0.5 text-[8px] font-medium text-muted">
                  {row.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Phone frame with a calm investing UI - used for the Vaultline case study. */
export function MobileMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-[210px] overflow-hidden rounded-[2rem] border border-white/15 bg-navy-950 p-2 shadow-lift sm:w-[236px]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-navy-900">
        <div className="flex items-center justify-between px-4 pb-2 pt-3">
          <span className="text-[9px] font-semibold text-white/60">9:41</span>
          <span className="h-1 w-8 rounded-full bg-white/15" />
          <span className="h-1.5 w-4 rounded-[2px] border border-white/25" />
        </div>

        <div className="space-y-4 px-4 pb-4">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/45">
              You&apos;re on track
            </p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">
              $24,180
            </p>
            <p className="mt-0.5 text-[10px] font-semibold text-accent-200">
              +$412 this month
            </p>
          </div>

          <div className="h-16 rounded-xl border border-white/10 bg-white/[0.04] p-1">
            <svg viewBox="0 0 300 90" preserveAspectRatio="none" className="h-full w-full">
              <defs>
                <linearGradient id="mobile-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6378FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6378FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 70 C 30 70 44 44 76 42 C 108 40 120 62 152 54 C 184 46 194 20 226 18 L 300 8 L 300 90 L 0 90 Z"
                fill="url(#mobile-fill)"
              />
              <path
                d="M0 70 C 30 70 44 44 76 42 C 108 40 120 62 152 54 C 184 46 194 20 226 18 L 300 8"
                fill="none"
                stroke="#A9B8FF"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="space-y-1.5">
            {[
              { label: "Index fund", value: "+2.4%" },
              { label: "Bonds", value: "+0.8%" },
              { label: "Cash", value: "0.0%" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2"
              >
                <span className="h-4 w-4 rounded-full bg-accent-500/40" />
                <span className="text-[10px] font-medium text-white/80">{row.label}</span>
                <span className="ml-auto text-[10px] font-semibold text-white">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-full bg-white/[0.06] px-4 py-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  dot === 0 ? "bg-accent-200" : "bg-white/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Brand identity specimen - wordmark, palette and type ramp. */
export function BrandMockup({ className }: { className?: string }) {
  const swatches = ["#082D78", "#4C6FFF", "#A9B8FF", "#DDE4FF", "#111111"];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "space-y-5 rounded-xl border border-black/[0.07] bg-white p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            Wordmark
          </p>
          <p className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-ink sm:text-3xl">
            Orbit<span className="text-accent-500">.</span>
          </p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-800 text-base font-extrabold text-white">
          O
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          Palette
        </p>
        <div className="mt-2 flex gap-1.5">
          {swatches.map((swatch) => (
            <span
              key={swatch}
              style={{ backgroundColor: swatch }}
              className="h-8 flex-1 rounded-md border border-black/5"
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          Type scale
        </p>
        <div className="mt-2 space-y-1.5">
          {["h-2.5 w-full", "h-2 w-4/5", "h-1.5 w-3/5", "h-1.5 w-2/5"].map((bar) => (
            <span key={bar} className={cn("block rounded-full bg-black/[0.08]", bar)} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Component-library tile used as a secondary visual. */
export function CommerceMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "space-y-3 rounded-xl border border-black/[0.07] bg-white p-4 shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          Components
        </p>
        <span className="rounded-full bg-accent-50 px-2 py-0.5 text-[9px] font-semibold text-accent-700">
          v2.4
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="grid h-9 place-items-center rounded-lg bg-ink text-[10px] font-semibold text-white">
          Primary
        </div>
        <div className="grid h-9 place-items-center rounded-lg border border-black/10 text-[10px] font-semibold text-ink">
          Secondary
        </div>
      </div>

      <div className="space-y-2 rounded-lg border border-black/[0.06] bg-canvas/50 p-2.5">
        <div className="h-1.5 w-12 rounded-full bg-black/10" />
        <div className="h-7 rounded-md border border-black/[0.08] bg-white" />
        <div className="flex items-center gap-2">
          <span className="h-4 w-7 rounded-full bg-accent-500 p-0.5">
            <span className="ml-auto block h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="h-1.5 w-14 rounded-full bg-black/10" />
        </div>
      </div>
    </div>
  );
}

export const mockups = {
  analytics: AnalyticsMockup,
  mobile: MobileMockup,
  brand: BrandMockup,
  commerce: CommerceMockup,
} as const;
