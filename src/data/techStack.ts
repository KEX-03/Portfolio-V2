export type TechItem = {
  name: string;
  icon: string;
  bg: string;
  fg?: string;
};

export const TECH_STACK: TechItem[] = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/ffffff", bg: "#e44d26" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css/ffffff", bg: "#264de4" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/1d1a14", bg: "#f7df1e", fg: "#1d1a14" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/ffffff", bg: "#2f74c0" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61dafb", bg: "#1c1a16", fg: "#61dafb" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff", bg: "#1d1a14" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/ffffff", bg: "#5fa04e" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/ffffff", bg: "#0055ff" },
  { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/ffffff", bg: "#e535ab" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/1d1a14", bg: "#38bdf8", fg: "#1d1a14" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/ff7262", bg: "#1d1a14", fg: "#ff7262" },
  { name: "Storybook", icon: "https://cdn.simpleicons.org/storybook/ffffff", bg: "#ff4785" },
];
