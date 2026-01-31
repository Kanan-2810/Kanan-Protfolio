const expertiseItems = [
  {
    quote:
      "Expertise in creating responsive frontends using React, TailwindCSS, and React Native. Delivered immersive experiences including a 3D avatar live-chat interface using Three.js and speech synthesis.",
    title: "Frontend UI/UX",
    tags: "React · Next.js",
  },
  {
    quote:
      "Proficient in building AI-driven platforms using OpenAI, Langchain, and speech synthesis. Created intelligent chatbot systems with lifelike responses integrated into real-time messaging apps.",
    title: "AI Projects",
    tags: "Langchain · OpenAI",
  },
  {
    quote:
      "Hands-on experience in full-stack development with React, Node.js, REST APIs, GraphQL, and WebSockets. Built scalable platforms with real-time functionality and modern frontend designs.",
    title: "Full Stack",
    tags: "React · Node.js",
  },
  {
    quote:
      "Skilled in using tools like GitHub for version control and collaboration. Comfortable with MongoDB, PostgreSQL, Postman, and other developer tools for full lifecycle project delivery.",
    title: "Tools & Deployment",
    tags: "GitHub · Databases",
  },
];

export function Expertise() {
  return (
    <section id="section-expertise" className="section-padding bg-slate-900/50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          My <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Core skills and technologies I work with.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 md:p-8 hover:border-sky-500/30 hover:bg-slate-800/60 transition-all duration-300"
            >
              <blockquote className="text-slate-300 leading-relaxed mb-4">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-between flex-wrap gap-2">
                <cite className="not-italic text-sm font-medium text-sky-400">
                  — {item.title}
                </cite>
                <span className="text-xs text-slate-500 font-mono">
                  {item.tags}
                </span>
              </footer>
              <div className="absolute top-4 right-4 text-6xl text-slate-700/50 font-serif select-none group-hover:text-sky-500/20 transition-colors">
                &ldquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
