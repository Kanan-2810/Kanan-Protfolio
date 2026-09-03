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
    name: "Design Sprint",
    price: "$1,800+",
    priceNote: "fixed scope",
    summary:
      "A focused two-week engagement to pressure-test an idea and leave you with something real to show.",
    timeline: "2 weeks",
    idealFor: "Founders validating a concept before committing budget.",
    includes: [
      "Discovery workshop",
      "Competitive audit",
      "Core user flows",
      "Key screens in high fidelity",
      "Clickable prototype",
    ],
    cta: "Start a Sprint",
  },
  {
    name: "Product Design",
    price: "$3,200+",
    priceNote: "per month",
    summary:
      "End-to-end design partnership for teams building or rebuilding a product that has to last.",
    timeline: "6–16 weeks",
    idealFor: "Teams shipping a product and needing design to keep pace.",
    includes: [
      "UX strategy & research",
      "Wireframes and IA",
      "Full UI design",
      "Interactive prototype",
      "Design system",
      "Developer handoff & QA",
    ],
    cta: "Start a Project",
    featured: true,
  },
  {
    name: "Custom Project",
    price: "Let's Discuss",
    priceNote: "scoped together",
    summary:
      "Brand systems, rebrands, design-system builds or an embedded designer inside your team.",
    timeline: "Flexible",
    idealFor: "Organisations with a brief that does not fit a box.",
    includes: [
      "Brand identity & guidelines",
      "Design system architecture",
      "Frontend implementation",
      "Team enablement",
      "Ongoing retainer options",
    ],
    cta: "Let's Talk",
  },
];
