export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "Digital products, brand identities and the websites that carry them. In practice that usually means a SaaS platform that has outgrown its first interface, a brand that no longer matches the quality of the product, or a team that needs a design system before it can scale. If a project sits outside that, I will tell you and point you at someone better suited.",
  },
  {
    question: "How does your design process work?",
    answer:
      "Four phases: understand, frame, design, ship. Understanding means interviews, audits and looking at your data. Framing means agreeing one sentence about the problem before design starts. Design moves fast and low-fidelity first, then slows down for craft. Shipping means I stay involved through build, because that is where good design usually gets lost.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "A design sprint runs two weeks. A full product engagement is usually six to sixteen weeks depending on scope. Brand identity work lands around eight to ten weeks. I would rather quote a realistic timeline and hit it than win the project on a date I cannot meet.",
  },
  {
    question: "Do you also handle development?",
    answer:
      "Yes — frontend. I build in React and TypeScript, which means I can hand off to your team with components rather than screenshots, or implement the work myself. Backend, infrastructure and native mobile I leave to specialists, and I am happy to work alongside yours.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Regularly. I am based in India and currently work with teams across Europe, the UK and North America. I keep a four-hour overlap with your working day, run async updates by default, and reserve synchronous time for the conversations that genuinely need it.",
  },
  {
    question: "How can we start a project?",
    answer:
      "Send a short note about what you are building and where it is stuck. We will do a 30-minute call to see whether I am the right fit — no pitch deck. If it makes sense, you get a written proposal with scope, timeline and cost within a few days.",
  },
];
