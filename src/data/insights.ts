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
    title: "The brief is the design",
    category: "Design Principles",
    readingTime: "6 min read",
    date: "Aug 2026",
    excerpt:
      "Most projects that go wrong were mis-framed, not mis-designed. A note on writing the one sentence everything else hangs from.",
    image: "/images/insight-design-principles.jpg",
    imageAlt: "Hands holding a folded sheet of peach paper against a warm backdrop",
    href: "#contact",
  },
  {
    title: "Designing for interruption",
    category: "UX Insights",
    readingTime: "8 min read",
    date: "Jul 2026",
    excerpt:
      "Real users rarely finish a task in one pass. What changes when you treat abandonment as the default state rather than the failure case.",
    image: "/images/insight-ux.jpg",
    imageAlt: "Translucent blue glass shapes floating in a royal blue environment",
    href: "#contact",
  },
  {
    title: "Quiet brands win shelves",
    category: "Brand Strategy",
    readingTime: "5 min read",
    date: "Jun 2026",
    excerpt:
      "Restraint reads as confidence. Why the loudest identity in the category is almost never the one buyers trust with a premium price.",
    image: "/images/insight-brand.jpg",
    imageAlt: "A designer reviewing printed brand boards at a light wooden desk",
    href: "#contact",
  },
];
