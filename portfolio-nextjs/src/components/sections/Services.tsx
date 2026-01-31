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
    title: "Full Stack Development",
    description:
      "Hands-on experience building scalable web applications with React, Node.js, and Express. I focus on clean code, user-friendly interfaces, and efficient backend systems—transforming ideas into impactful digital experiences.",
    skills: "React.js · Node.js · Express.js · JavaScript · Tailwind CSS",
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
    title: "AI Chatbot & Generative AI",
    description:
      "Specialist in AI chatbot development using Generative AI, LangChain, and cutting-edge LLM technologies. I build intelligent, conversational solutions and assistant bots that streamline workflows and enhance user engagement.",
    skills: "Generative AI · LangChain · LLMs · Intelligent Assistants",
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
    title: "APIs & Modern Delivery",
    description:
      "REST and GraphQL API development with a focus on reliability and clarity. I combine robust backend design with modern frontend practices. Always eager to learn and innovate—driven by curiosity and a passion for solutions that matter.",
    skills: "REST · GraphQL · API Development · Scalable Systems",
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
          A passionate Full Stack Developer with hands-on experience in
          scalable web applications and AI-driven conversational solutions.
          I enjoy combining clean code, user-friendly interfaces, and
          efficient backend systems to create solutions that matter.
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
