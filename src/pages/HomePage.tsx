import { Section } from "@/components/layout/Section";
import { HeroSection } from "@/sections/HeroSection";
import { TechStackSection } from "@/sections/TechStackSection";

const placeholderSectionClass = "paper-panel rounded-[var(--radius-panel)] p-6 sm:p-8";

export function HomePage() {
  return (
    <>
      <HeroSection />

      <Section id="about" aria-label="About section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
      <Section id="projects" aria-label="Projects section placeholder">
        <div className={placeholderSectionClass} />
      </Section>

      <TechStackSection />

      <Section id="process" aria-label="Process section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
      <Section id="connect" aria-label="Contact section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
    </>
  );
}
