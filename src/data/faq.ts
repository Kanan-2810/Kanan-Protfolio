export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What kind of work do you take on?",
    answer:
      "AI-powered SaaS, RAG systems, agent workflows, and the full-stack product around them. If the brief is a landing page or a brand-only engagement, I will say so and point you elsewhere. I am most useful when the product has to ship.",
  },
  {
    question: "Do you only write AI code?",
    answer:
      "No. I design the product, build the frontend and backend, wire the model, and deploy it. React, Next.js, Node, TypeScript, Postgres, Prisma, Redis, OpenAI, LangChain. The model is one layer - not the whole job.",
  },
  {
    question: "How do you decide if something should be AI?",
    answer:
      "If a rule, a search index, or a better form does the job, we ship that. I use RAG and agents when the product has to reason over private data or a long-running workflow. The test is production: latency, cost, and whether a stranger can trust the answer.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "A sprint to prove a slice is two weeks. A product build is usually eight to sixteen weeks. I quote a timeline I can hit. A demo in a weekend is not a product.",
  },
  {
    question: "Do you work with international founders?",
    answer:
      "Yes. I am based in Ahmedabad and work with teams in the US, UK, and Europe. Async by default, overlap when the decision actually needs a call.",
  },
  {
    question: "How do we start?",
    answer:
      "Send what you are building and where it is stuck. A 30-minute call - no deck. If it fits, you get a written scope, timeline, and cost within a few days.",
  },
];
