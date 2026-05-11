export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Research goals, users, and constraints to define a clear direction." },
  { number: "02", title: "Design", description: "Shape editorial layouts, hierarchy, and interactive narratives." },
  { number: "03", title: "Develop", description: "Build scalable, accessible, and high-performance interfaces." },
  { number: "04", title: "Launch", description: "Ship thoughtfully, measure behavior, and iterate with purpose." },
];
