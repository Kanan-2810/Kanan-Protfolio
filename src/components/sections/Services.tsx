const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "Web & SaaS Products",
    description:
      "End-to-end features for web apps and multi-tenant SaaS-React/Next on the front, Node/Express on the back. Things like dynamic admin workflows, clinic onboarding, and solid day-to-day product work.",
    skills: "React.js · Next.js · Node.js · Express.js · TypeScript",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "AI Chatbots & RAG",
    description:
      "Customer-facing chatbots with OpenAI and LangChain. I tune prompts and retrieval so responses are accurate, not fluffy-work that cut handling time and improved answer quality in production.",
    skills: "OpenAI · LangChain · Prompt Engineering · RAG",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "APIs & Integrations",
    description:
      "REST and GraphQL APIs, plus wiring in services like WhatsApp (Meta), MSG91, and AWS S3. Focus on integrations that save setup time and keep products talking to each other cleanly.",
    skills: "REST · GraphQL · Meta APIs · AWS S3 · MSG91",
  },
];

export function Services() {
  return (
    <section id="section-services" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Product engineering for web apps, SaaS, and AI features-the same
          work I do day to day at Technofuzn and previously at eDelta.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-700/60 bg-slate-800/40 p-8 text-center hover:border-sky-500/30 hover:bg-slate-800/60 transition-all duration-300 flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/15 text-sky-400 mb-6 group-hover:bg-sky-500/25 group-hover:text-sky-300 transition-colors mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>
              <p className="text-xs font-medium text-sky-400/90 tracking-wide">
                {service.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
