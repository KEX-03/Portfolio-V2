import { HeroSection } from "@/sections/HeroSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactProcessSection } from "@/sections/ContactProcessSection";
import { usePortfolioInteractions } from "@/hooks/usePortfolioInteractions";

export function PortfolioPage() {
  usePortfolioInteractions();

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />

      <main className="page">
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactProcessSection />
      </main>
    </>
  );
}
