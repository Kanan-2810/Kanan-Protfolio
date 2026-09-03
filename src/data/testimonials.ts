export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  imageAlt: string;
  metric: { value: string; label: string };
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kanan did not hand us a prototype and leave. He framed the product, built the RAG layer, and had it in production with citations our team could trust. That is a rare loop.",
    name: "Elena Marsh",
    position: "VP Product",
    company: "Northwind Health",
    image: "/images/testimonial-portrait.jpg",
    imageAlt: "Elena Marsh, VP Product at Northwind Health, in her office",
    metric: { value: "−41%", label: "Time to first answer" },
  },
  {
    quote:
      "We needed a builder who could own the SaaS, not a specialist for each layer. Frontend, API, agents, deploy - one person, one timeline. We shipped.",
    name: "Priya Raghunathan",
    position: "Founder",
    company: "Lumora",
    image: "/images/testimonial-portrait.jpg",
    imageAlt: "Portrait of a founder in a bright modern office",
    metric: { value: "8 wks", label: "Idea to production" },
  },
  {
    quote:
      "He sat in architecture and in the UI without dropping either. Our agent workflows actually run in prod - latency, evals, and a UI someone can operate.",
    name: "Daniel Okonjo",
    position: "Head of Engineering",
    company: "Orbit Labs",
    image: "/images/testimonial-portrait.jpg",
    imageAlt: "Portrait of an engineering lead in a modern workspace",
    metric: { value: "2×", label: "Delivery speed" },
  },
];
