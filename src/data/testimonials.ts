import { clients } from "@/data/clients";

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  company: string;
  logo: string;
  logoDark?: boolean;
  image: string;
  imageAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Prospecting, sequences, and billing used to live in separate tools. Kanan built the control plane - one portal for operators and clients, and he shipped it to production.",
    name: "Aman Kaya",
    position: "Founder",
    company: "LeadGPT",
    logo: "/images/logos/leadgpt.png",
    image: clients[0].image,
    imageAlt: "Aman Kaya, Founder of LeadGPT",
  },
  {
    quote:
      "We needed a desk-speed ERP client, not another admin theme. He shipped the keyboard workflows, GST entries, and branch views the team actually uses every day.",
    name: "Sandeep Gajjar",
    position: "Business Solutionist",
    company: "Sandeep Gajjar",
    logo: "/images/logos/sandeep-gajjar.png",
    image: clients[1].image,
    imageAlt: "Sandeep Gajjar, Business Solutionist",
  },
  {
    quote:
      "A law firm site cannot behave like ads. Kanan built a site that is searchable, Bar-Council-safe, and one tap from WhatsApp - with all three offices on the map.",
    name: "Kaushal Dave",
    position: "Advocate, Gujarat High Court",
    company: "Kaushal Dave & Associates",
    logo: "/images/logos/kaushal-dave.png",
    image: clients[2].image,
    imageAlt: "Kaushal Dave, Advocate, Gujarat High Court",
  },
  {
    quote:
      "Our reps work in villages where the network drops. He shipped the field app, live GPS, and ERP sync so HQ can see the day without waiting on notebooks.",
    name: "Dharmaraj Bhatti",
    position: "CEO & Co-Founder at InfoDrill AI Solutions",
    company: "InfoDrill AI Solutions",
    logo: "/images/logos/infodrill.png",
    logoDark: true,
    image: clients[3].image,
    imageAlt: "Dharmaraj Bhatti, CEO and Co-Founder at Infodrill AI Solutions",
  },
  {
    quote:
      "Training video cannot sit behind a public URL. He built the LMS so the catalog is public and the stream is not - tokens, seats, and expiry included.",
    name: "Rohan Kabariya",
    position: "Founder & CEO at Sauron",
    company: "Sauron",
    logo: "/images/logos/sauron.png",
    image: clients[4].image,
    imageAlt: "Rohan Kabariya, Founder and CEO of Sauron",
  },
];
