export type Stat = {
  value: string;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: "5+",
    label: "Years Experience",
    note: "Designing and shipping products end to end.",
  },
  {
    value: "20+",
    label: "Projects Delivered",
    note: "From first sketch to production release.",
  },
  {
    value: "10+",
    label: "Brands Worked With",
    note: "Startups, studios and scaling teams.",
  },
  {
    value: "3",
    label: "Design Disciplines",
    note: "Brand, product and frontend engineering.",
  },
];

export type Discipline = {
  title: string;
  detail: string;
};

export const disciplines: Discipline[] = [
  { title: "Strategy", detail: "Positioning, product framing, design audits" },
  { title: "Design", detail: "Interfaces, identity, motion, design systems" },
  { title: "Build", detail: "React, TypeScript, accessible frontend delivery" },
];
