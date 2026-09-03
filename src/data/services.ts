export type ServiceVisual =
  | "identity"
  | "interface"
  | "photo-mobile"
  | "layers"
  | "code"
  | "none";

export type Service = {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  /** Grid placement on the desktop bento. Mobile always stacks. */
  span: string;
  visual: ServiceVisual;
  tone: "glass" | "solid" | "accent";
};

export const services: Service[] = [
  {
    index: "01",
    title: "AI Product Strategy",
    description:
      "Decide what the model is for before you pick one. Framing, scope, and a build path a founder can fund.",
    deliverables: ["Problem framing", "AI vs rules", "Architecture sketch", "MVP cut"],
    span: "lg:col-span-4 lg:row-span-2",
    visual: "identity",
    tone: "glass",
  },
  {
    index: "02",
    title: "RAG & Agents",
    description:
      "Retrieval, tools, and workflows that answer real questions - grounded in your data, not a demo script.",
    deliverables: ["pgvector / RAG", "LangChain", "Tool use", "Eval loops"],
    span: "lg:col-span-5 lg:row-span-2",
    visual: "interface",
    tone: "glass",
  },
  {
    index: "03",
    title: "SaaS Architecture",
    description:
      "Multi-tenant products that survive the second customer: auth, billing hooks, APIs, and a schema that can grow.",
    deliverables: ["Next.js", "Prisma / Postgres", "Redis", "API design"],
    span: "lg:col-span-3 lg:row-span-3",
    visual: "photo-mobile",
    tone: "accent",
  },
  {
    index: "04",
    title: "Full-Stack Build",
    description:
      "React, Node, TypeScript - the interface, the API, and the data layer as one system, not three tickets.",
    deliverables: ["React / Next.js", "Node.js", "TypeScript", "MongoDB"],
    span: "lg:col-span-4",
    visual: "layers",
    tone: "glass",
  },
  {
    index: "05",
    title: "Ship to Production",
    description:
      "Deploy, observe, and iterate. A product is not done until someone who is not you can use it.",
    deliverables: ["CI / deploy", "Logging", "Latency budgets", "Handoff"],
    span: "lg:col-span-5",
    visual: "code",
    tone: "solid",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    detail:
      "The job to be done, the data you actually have, and what should never be automated.",
  },
  {
    step: "02",
    title: "Frame",
    detail:
      "One sentence for the product. Architecture that can ship in weeks, not a platform fantasy.",
  },
  {
    step: "03",
    title: "Build",
    detail:
      "Interface, API, model, and database in the same loop - so nothing dies in a handoff.",
  },
  {
    step: "04",
    title: "Deploy",
    detail:
      "Production, evals, and a path to change it next month without a rewrite.",
  },
];
