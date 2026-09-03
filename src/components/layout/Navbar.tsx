"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

const sectionIds = navLinks
  .filter((link) => link.href.startsWith("#"))
  .map((link) => link.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the section closest to the top of the viewport wins.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile menu and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <nav aria-label="Primary" className="shell">
        <div
          className={cn(
            "flex h-14 items-center gap-3 rounded-full border pl-5 pr-2 transition-all duration-500 ease-premium md:h-16 md:pl-6",
            scrolled
              ? "border-black/[0.07] bg-white/80 shadow-card backdrop-blur-xl"
              : "border-black/[0.05] bg-white/50 backdrop-blur-md",
          )}
        >
          <Link
            href="#home"
            onClick={close}
            className="flex items-center gap-2 text-base font-extrabold tracking-[-0.04em] text-ink"
          >
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-sm text-white">
              {site.initials}
            </span>
            <span className="hidden sm:inline">
              Kanan
              <span aria-hidden="true" className="text-accent-500">
                .
              </span>
            </span>
          </Link>

          <ul className="ml-4 hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                      isActive ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent-500 transition-transform duration-300 ease-premium",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <span className="mr-1 hidden items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 py-1.5 pl-2.5 pr-3 text-xs font-medium text-muted xl:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {site.availability}
            </span>

            <Link
              href="#contact"
              onClick={close}
              className="group hidden h-11 items-center gap-2 rounded-full bg-ink pl-5 pr-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ink-soft sm:inline-flex"
            >
              Let&apos;s Talk
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink transition-transform duration-300 ease-premium group-hover:rotate-45"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-black/[0.07] bg-white text-ink transition-colors hover:bg-canvas lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.8} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          className="mt-2 overflow-hidden rounded-3xl border border-black/[0.07] bg-white/95 p-3 shadow-lift backdrop-blur-xl lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold tracking-[-0.02em] text-ink transition-colors hover:bg-canvas"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-muted"
                    strokeWidth={1.8}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            onClick={close}
            className="mt-2 flex h-12 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
