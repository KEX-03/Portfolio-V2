import { AboutSection } from "@/sections/AboutSection";
import { FeaturedProjectsSection } from "@/sections/FeaturedProjectsSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { Section } from "@/components/layout/Section";

const placeholderSectionClass = "paper-panel rounded-[var(--radius-panel)] p-6 sm:p-8";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <TechStackSection />
      <ProcessSection />

      <Section id="connect" aria-label="Contact section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
    </>
  );
}
