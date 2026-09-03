export type Insight = {
  title: string;
  category: string;
  readingTime: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const insights: Insight[] = [
  {
    title: "RAG that survives production",
    category: "Applied AI",
    readingTime: "6 min read",
    date: "Aug 2026",
    excerpt:
      "Chunking, citations, and evals - the unglamorous work that decides whether retrieval is a product or a toy.",
    image: "/images/insight-design-principles.jpg",
    imageAlt: "Hands holding a folded sheet of peach paper against a warm backdrop",
    href: "#contact",
  },
  {
    title: "When not to use a model",
    category: "Product",
    readingTime: "5 min read",
    date: "Jul 2026",
    excerpt:
      "Most 'AI features' are a search box, a workflow, or a rule. Shipping the simpler thing is the senior move.",
    image: "/images/insight-ux.jpg",
    imageAlt: "Translucent blue glass shapes floating in a royal blue environment",
    href: "#contact",
  },
  {
    title: "SaaS architecture for a two-person team",
    category: "Engineering",
    readingTime: "7 min read",
    date: "Jun 2026",
    excerpt:
      "Auth, tenancy, and a schema you will not hate in six months. What I actually put in v1.",
    image: "/images/insight-brand.jpg",
    imageAlt: "Printed boards laid out on a light wooden desk",
    href: "#contact",
  },
];
