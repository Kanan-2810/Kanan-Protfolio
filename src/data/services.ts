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
    title: "Brand Identity",
    description:
      "Building distinctive visual identities that create recognition and trust.",
    deliverables: ["Positioning", "Wordmark", "Palette & type", "Brand book"],
    span: "lg:col-span-4 lg:row-span-2",
    visual: "identity",
    tone: "glass",
  },
  {
    index: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive digital products with clarity, usability and purpose.",
    deliverables: ["Research", "Flows", "Interface design", "Prototypes"],
    span: "lg:col-span-5 lg:row-span-2",
    visual: "interface",
    tone: "glass",
  },
  {
    index: "03",
    title: "Web Experience",
    description:
      "Creating responsive websites that balance aesthetics, performance and conversion.",
    deliverables: ["Art direction", "Responsive design", "Motion", "CMS"],
    span: "lg:col-span-3 lg:row-span-3",
    visual: "photo-mobile",
    tone: "accent",
  },
  {
    index: "04",
    title: "Product Design",
    description:
      "Turning complex product ideas into simple and useful experiences.",
    deliverables: ["Discovery", "Design systems", "Testing", "Iteration"],
    span: "lg:col-span-4",
    visual: "layers",
    tone: "glass",
  },
  {
    index: "05",
    title: "Development",
    description:
      "Bringing designs to life through scalable, performant frontend development.",
    deliverables: ["React & TypeScript", "Accessibility", "Performance", "Handoff"],
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
    title: "Understand",
    detail:
      "Interviews, audits and a hard look at the numbers before a single pixel moves.",
  },
  {
    step: "02",
    title: "Frame",
    detail:
      "One sentence that defines what we are solving, agreed by everyone who can veto it.",
  },
  {
    step: "03",
    title: "Design",
    detail:
      "Fast, low-fidelity exploration, then careful craft on the direction that survives testing.",
  },
  {
    step: "04",
    title: "Ship",
    detail:
      "Built alongside engineering so the shipped product still resembles the design.",
  },
];
