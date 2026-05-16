export type ProjectItem = {
  title: string;
  tag: string;
  variant: "dark" | "warm" | "green" | "mid";
  headline: string;
  subline: string;
  cta: string;
  description: string;
  stack: string[];
  url: string;
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "BloomLife",
    tag: "Next.js",
    variant: "dark",
    headline: "BloomLife\nTherapist Website Homepage",
    subline: "BloomLife is a thoughtfully designed homepage for a fictional therapy practice.",
    cta: "Check it out",
    description: "The project focuses on calm, accessible design paired with intentional motion to create a sense of safety, clarity, and professionalism.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://bloomlife.vercel.app/ ",
  },
  {
    title: "DeutschWelt",
    tag: "JavaScript",
    variant: "warm",
    headline: "Frontend Showcase\nLanguage School Website",
    subline: "A responsive static landing page built as a frontend showcase project.",
    cta: "Start Learning",
    description: "This project was built as a showcase to demonstrate frontend fundamentals, UI polish, and scroll-based interaction handling.",
    stack: ["HTML5", "Tailwind CSS", "Vanilla JavaScript"],
    url: "https://language-school-showcase.vercel.app/",
  },
  {
     title: "FinLens",
    tag: "React",
    variant: "mid",
    headline: "FinLens\nFinance Dashboard.",
    subline: "A responsive, mobile-first finance dashboard.",
    cta: "Get Started",
    description: "A clean, minimal, and fully interactive personal finance dashboard built with React 18, Vite, and vanilla CSS",
    stack: ["React 18", "Vite", "Vanilla CSS"],
    url: "https://finlens-seven.vercel.app/",
  },
  {
    title: "TaskFlow",
    tag: "Node.js",
    variant: "green",
    headline: "TaskFlow\nAuth + Dashboard App",
    subline: "A full-stack web application featuring authentication.",
    cta: "Start Tracking",
    description: "A full-stack web application featuring authentication, a task-management dashboard, and full CRUD — built with React + Node.js + MongoDB.",
    stack: ["React","Tailwind CSS", "Node.js",  "MongoDB" ],
    url: "https://taskflow-plum-one.vercel.app/",
  },
  {
    title: "Expense Tracker",
    tag: "JavaScript",
    variant: "warm",
    headline: "Expense\nTracker",
    subline: "This is a frontend expense tracking application inspired by Splitwise.",
    cta: "Try it free",
    description: "It is built to showcase frontend logic, state management, and clean user interaction rather than backend complexity.",
    stack: ["HTML5", "Tailwind CSS", "Vanilla JavaScript"],
    url: "https://expensetracker-kex03.netlify.app/",
  },
  {
    title: "WireWise",
    tag: "Next.js",
    variant: "mid",
    headline: "A Fintech\nBank Application",
    subline: "Access and manage your account and transactions efficiently.",
    cta: "Start Here",
    description: "Built with Next.js, WireWise is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    stack: ["React Native", "Expo", "SQLite", "Mapbox"],
    url: "#",
  },
];
