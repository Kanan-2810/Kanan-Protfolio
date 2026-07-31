const expertiseItems = [
  {
    title: "Frontend",
    description:
      "I build UIs in React and Next.js with TypeScript and Tailwind-clear layouts, reusable components, and Redux Toolkit when state gets messy.",
    tags: "React.js · Next.js · TypeScript · Tailwind CSS · Redux Toolkit",
  },
  {
    title: "Backend",
    description:
      "Node and Express for APIs that teams can actually plug into. REST and GraphQL when the product needs it-kept simple, documented, and reliable.",
    tags: "Node.js · Express.js · REST · GraphQL",
  },
  {
    title: "AI & LLM",
    description:
      "Chatbot workflows with OpenAI and LangChain-prompt tuning, RAG, and retrieval so answers stay useful instead of generic. Shipped this in real customer-facing products.",
    tags: "OpenAI · LangChain · Prompt Engineering · RAG",
  },
  {
    title: "Data & Deploy",
    description:
      "PostgreSQL, MongoDB, and Redis day to day. Deploys on Cloudflare and Hostinger VPS with PM2, SSL, and AWS S3 for file storage-plus GitHub for the usual collaboration.",
    tags: "PostgreSQL · MongoDB · Redis · AWS S3 · PM2 · Cloudflare",
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
          What I use on the job-same stack as on my resume.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 md:p-8 hover:border-sky-500/30 hover:bg-slate-800/60 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-5">
                {item.description}
              </p>
              <p className="text-xs text-slate-500 font-mono leading-relaxed">
                {item.tags}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
