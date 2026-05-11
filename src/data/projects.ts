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
    title: "Roamely",
    tag: "Next.js",
    variant: "dark",
    headline: "Plan better travel more",
    subline: "Curated guides, maps, and tips for mindful travellers.",
    cta: "Explore Guides",
    description: "Travel platform with destination guides, itineraries, and map-first discovery.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
    url: "#",
  },
  {
    title: "Maison d'Artisans",
    tag: "React",
    variant: "warm",
    headline: "Local artisans, global stories",
    subline: "Handmade products from independent makers.",
    cta: "Shop Collection",
    description: "Editorial commerce experience balancing storytelling with conversion clarity.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    url: "#",
  },
  {
    title: "DeepFocus",
    tag: "Next.js",
    variant: "mid",
    headline: "Focus deeper, do more",
    subline: "Ambient soundscapes for sustained concentration.",
    cta: "Start Listening",
    description: "Productivity app with curated ambient sessions, timers, and progress tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Howler"],
    url: "#",
  },
  {
    title: "Larkspur",
    tag: "SvelteKit",
    variant: "green",
    headline: "Garden journals for green thumbs",
    subline: "Track watering, growth, and bloom cycles.",
    cta: "Plant Something",
    description: "Calm journaling experience for gardeners with reminders and seasonal insights.",
    stack: ["SvelteKit", "Supabase", "Drizzle", "Vercel"],
    url: "#",
  },
  {
    title: "Brevity",
    tag: "Next.js",
    variant: "warm",
    headline: "Notes that think with you",
    subline: "AI-assisted notes with emergent structure.",
    cta: "Try it Free",
    description: "Writing workspace that organizes knowledge as you type and connect ideas.",
    stack: ["Next.js", "tRPC", "Prisma", "OpenAI"],
    url: "#",
  },
  {
    title: "Cadence",
    tag: "React Native",
    variant: "mid",
    headline: "Run your own rhythm",
    subline: "Adaptive workout plans for real schedules.",
    cta: "Start Training",
    description: "Mobile-first running coach with adaptive plans and route-aware performance tracking.",
    stack: ["React Native", "Expo", "SQLite", "Mapbox"],
    url: "#",
  },
];
