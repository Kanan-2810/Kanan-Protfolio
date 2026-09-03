export type Engagement = {
  name: string;
  price: string;
  priceNote: string;
  summary: string;
  timeline: string;
  idealFor: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

export const engagements: Engagement[] = [
  {
    name: "Product Sprint",
    price: "$2,400+",
    priceNote: "fixed scope",
    summary:
      "Two weeks to prove the AI feature is worth building - a working slice, not a slide.",
    timeline: "2 weeks",
    idealFor: "Founders validating an AI workflow before a full build.",
    includes: [
      "Problem framing",
      "Data & architecture pass",
      "Thin vertical slice",
      "Eval of the risky path",
      "Go / no-go write-up",
    ],
    cta: "Start a Sprint",
  },
  {
    name: "Build Partnership",
    price: "$4,800+",
    priceNote: "per month",
    summary:
      "I own the product loop: design, develop, deploy. RAG, agents, and the SaaS around them.",
    timeline: "8–16 weeks",
    idealFor: "Teams shipping an AI product who need one builder, not a committee.",
    includes: [
      "Product + AI architecture",
      "Full-stack implementation",
      "RAG / agent workflows",
      "Postgres, APIs, auth",
      "Production deploy & iterate",
    ],
    cta: "Start a Build",
    featured: true,
  },
  {
    name: "Custom Project",
    price: "Let's Discuss",
    priceNote: "scoped together",
    summary:
      "A RAG system, an internal agent, or a SaaS rebuild that does not fit a monthly box.",
    timeline: "Flexible",
    idealFor: "A brief that is already specific - and needs to land in production.",
    includes: [
      "Scoped architecture",
      "Build + integration",
      "Eval and observability",
      "Handoff to your team",
      "Retainer if you want it",
    ],
    cta: "Let's Talk",
  },
];
