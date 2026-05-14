import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FEATURED_PROJECTS } from "@/data/projects";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className="projects-swiper"
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={18}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 20 },
          1600: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {FEATURED_PROJECTS.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
