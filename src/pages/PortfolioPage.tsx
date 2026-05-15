import { lazy, Suspense } from "react";
import { HeroSection } from "@/sections/HeroSection";
import { ContactProcessSection } from "@/sections/ContactProcessSection";
import { usePortfolioInteractions } from "@/hooks/usePortfolioInteractions";

const TechStackSection = lazy(() => import("@/sections/TechStackSection").then((module) => ({ default: module.TechStackSection })));
const ProjectsSection = lazy(() => import("@/sections/ProjectsSection").then((module) => ({ default: module.ProjectsSection })));

function SectionFallback() {
  return <section className="section-fallback" aria-hidden="true" />;
}

export function PortfolioPage() {
  usePortfolioInteractions();

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />

      <main className="page">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <TechStackSection />
          <ProjectsSection />
        </Suspense>
        <ContactProcessSection />
      </main>
    </>
  );
}
