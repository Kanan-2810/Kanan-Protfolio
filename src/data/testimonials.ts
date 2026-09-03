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
      "Working with Kanan completely changed how we approached our digital product. The process was thoughtful, collaborative and incredibly detail-oriented — and the work held up under real users, which is the only test that matters.",
    name: "Elena Marsh",
    position: "VP Product",
    company: "Northwind Health",
    image: "/images/testimonial-portrait.jpg",
    imageAlt: "Elena Marsh, VP Product at Northwind Health, in her office",
    metric: { value: "−41%", label: "Time to book" },
  },
  {
    quote:
      "We came for a website and left with a brand we actually understand. Six months on, our team still briefs agencies using the language from that first strategy session.",
    name: "Priya Raghunathan",
    position: "Founder",
    company: "Lumora",
    image: "/images/testimonial-portrait.jpg",
    imageAlt: "Portrait of a founder in a bright modern office",
    metric: { value: "+52%", label: "Order value" },
  },
  {
    quote:
      "Rare to find a designer who can sit in a code review and a brand workshop in the same afternoon and be genuinely useful in both. Our delivery speed doubled.",
    name: "Daniel Okonjo",
    position: "Head of Engineering",
    company: "Orbit Labs",
    image: "/images/testimonial-portrait.jpg",
    imageAlt: "Portrait of an engineering lead in a modern workspace",
    metric: { value: "2×", label: "Delivery speed" },
  },
];
