"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#section-home", label: "Home" },
  { href: "#section-resume", label: "Resume" },
  { href: "#section-about", label: "About" },
  { href: "#section-expertise", label: "Expertise" },
  { href: "#section-services", label: "Services" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex h-20 items-center justify-between">
        <Link
          href="#section-home"
          className="text-lg font-semibold text-white hover:text-sky-400 transition-colors"
        >
          KD
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors rounded-lg hover:bg-slate-800/50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/98 backdrop-blur-md">
          <ul className="container-narrow py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-4 py-3 text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
