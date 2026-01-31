import Image from "next/image";

export function About() {
  return (
    <section id="section-about" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden max-w-md w-full min-h-[280px] aspect-[4/5]">
              <Image
                src="/images/image_1.jpg"
                alt="Kanan Dave"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I focus on <span className="text-sky-400 font-medium">AI</span>—building
              intelligent chatbots and conversational systems with Generative AI,
              LangChain, and cutting-edge LLMs. I blend AI with clean, user-friendly
              interfaces to create smart human–AI experiences.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From voice-driven assistants to workflow-streamlining bots, I enjoy
              turning ideas into impactful AI solutions. Full stack by foundation—
              React, Node.js—with a strong emphasis on making AI practical and
              engaging for real users.
            </p>
            <a
              href="/pdf/Kanan_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
