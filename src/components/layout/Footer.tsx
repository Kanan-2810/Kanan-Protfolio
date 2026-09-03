import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { footerLinks, site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark px-3 pb-3 md:px-5 md:pb-5">
      <div className="overflow-hidden rounded-[28px] bg-navy-950 px-6 py-10 md:rounded-[40px] md:px-10 md:py-12">
        <nav aria-label="Footer" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-white/40 transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                strokeWidth={1.8}
              />
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid gap-8 border-t border-white/[0.12] pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="#home"
              className="inline-flex items-center gap-2.5 text-lg font-extrabold tracking-[-0.04em] text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-white text-base text-navy-950">
                {site.initials}
              </span>
              {site.name}
            </Link>
            <p className="mt-5 max-w-xs text-[0.875rem] leading-relaxed text-white/70">
              {site.intro}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.875rem]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-white/70">{site.location}</li>
              <li>
                <a
                  href={site.resumeUrl}
                  className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />
                  Download résumé
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
              Elsewhere
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-4 py-2.5 text-[0.8125rem] font-medium text-white/75 transition-all duration-300 hover:border-white/40 hover:text-white"
                  >
                    <span aria-hidden="true" className="text-[10px] font-bold text-white/65">
                      {social.short}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.12] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Designed &amp; built in Next.js, TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
