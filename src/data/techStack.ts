export type TechItem = {
  name: string;
  label: string;
  bg: string;
  fg?: string;
};

export const TECH_STACK: TechItem[] = [
  { name: "HTML", label: "H5", bg: "#e44d26" },
  { name: "CSS", label: "3", bg: "#264de4" },
  { name: "JavaScript", label: "JS", bg: "#f7df1e", fg: "#1d1a14" },
  { name: "TypeScript", label: "TS", bg: "#2f74c0" },
  { name: "React", label: "R", bg: "#1c1a16", fg: "#61dafb" },
  { name: "Next.js", label: "N", bg: "#1d1a14" },
  { name: "Node.js", label: "N", bg: "#5fa04e" },
  { name: "Framer Motion", label: "FM", bg: "#0055ff" },
  { name: "GraphQL", label: "G", bg: "#e535ab" },
  { name: "Tailwind", label: "TW", bg: "#38bdf8", fg: "#1d1a14" },
  { name: "Figma", label: "F", bg: "#1d1a14", fg: "#ff7262" },
  { name: "Storybook", label: "SB", bg: "#ff4785" },
];
