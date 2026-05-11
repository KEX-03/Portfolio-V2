import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { FeaturedProjectsSection } from "@/sections/FeaturedProjectsSection";
import { FooterSection } from "@/sections/FooterSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { TechStackSection } from "@/sections/TechStackSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <TechStackSection />
      <ProcessSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
