export type Stat = {
  value: string;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: "3+",
    label: "Years Shipping",
    note: "AI products and full-stack systems in production.",
  },
  {
    value: "10+",
    label: "Products Delivered",
    note: "From first commit to deploy, not just a prototype.",
  },
  {
    value: "5+",
    label: "Startups Worked With",
    note: "Founders who needed a builder, not a handoff.",
  },
  {
    value: "4",
    label: "Layers I Own",
    note: "Product, AI, full-stack, and production ops.",
  },
];

export type Discipline = {
  title: string;
  detail: string;
};

/** Shown on the About card. Left as product/AI/build - About copy is owned separately. */
export const disciplines: Discipline[] = [
  { title: "Strategy", detail: "Positioning, product framing, design audits" },
  { title: "Design", detail: "Interfaces, identity, motion, design systems" },
  { title: "Build", detail: "React, TypeScript, accessible frontend delivery" },
];
