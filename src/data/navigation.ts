export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "process", label: "Process", href: "#process" },
  { id: "connect", label: "Contact", href: "#connect" },
];
