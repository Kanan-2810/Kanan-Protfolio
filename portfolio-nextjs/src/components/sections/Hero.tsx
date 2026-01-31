export function Hero() {
  return (
    <section
      id="section-home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2MmgxMnoiLz48L2g+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="container-narrow relative z-10 text-center">
        <p className="text-sky-400 font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
          Software Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]">
          Hello, I&apos;m{" "}
          <span className="gradient-text">Kanan Dave</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-xl mx-auto animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s]">
          Building impactful web apps with React, Node.js & AI. Focused on
          clean code and great UX.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:0.7s]">
          <a
            href="#section-resume"
            className="inline-flex items-center px-6 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/25"
          >
            View Resume
          </a>
          <a
            href="#section-about"
            className="inline-flex items-center px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-medium hover:border-sky-500/50 hover:text-sky-400 transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500">
        <a
          href="#section-resume"
          className="flex flex-col items-center gap-2 hover:text-sky-400 transition-colors"
          aria-label="Scroll to resume"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
