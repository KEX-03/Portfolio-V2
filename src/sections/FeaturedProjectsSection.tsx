import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FEATURED_PROJECTS } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <Section id="projects" aria-label="Featured projects">
      <div className="section-head mb-5 3xl:mb-7">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.01em] 3xl:text-[clamp(2.6rem,3vw,3.8rem)]">Featured Projects</h2>
        <a
          href="#"
          className="font-hand text-[22px] text-accent-deep transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep sm:text-[24px]"
        >
          View all
        </a>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
