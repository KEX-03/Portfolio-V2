import { useRef, type MouseEvent } from "react";
import { ExternalLink } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
};

const variantClassMap: Record<ProjectItem["variant"], string> = {
  dark: "bg-[#14110d] text-[#e7e1cf]",
  warm: "bg-[#efe6d5] text-[#1d1a14]",
  green: "bg-[#1f2a22] text-[#e7e1cf]",
  mid: "bg-[#2a253b] text-[#e7e1cf]",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const tiltTransform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-py * 9);
    rotateY.set(px * 9);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      className="h-full"
    >
      <motion.div
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", transform: tiltTransform }}
        className="group flex h-full flex-col rounded-[18px] border border-line bg-paper-3 p-3.5 shadow-[0_1px_0_rgba(60,50,30,0.04),0_20px_30px_-28px_rgba(40,30,10,0.4)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_1px_0_rgba(60,50,30,0.04),0_30px_44px_-28px_rgba(40,30,10,0.6)] 3xl:p-4"
      >
        <div className={`relative h-[200px] overflow-hidden rounded-xl p-4 3xl:h-[230px] ${variantClassMap[project.variant]}`}>
          <div className="absolute left-3 top-2.5 flex gap-1.5" aria-hidden="true">
            <i className="block size-2.5 rounded-full bg-[#ff5f57]" />
            <i className="block size-2.5 rounded-full bg-[#febc2e]" />
            <i className="block size-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="absolute inset-0 opacity-20 [background-size:20px_20px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)]" />

          <div className="relative mt-9 transition-transform duration-300 group-hover:scale-[1.03] [transform:translateZ(20px)]">
            <h3 className="max-w-[78%] font-serif text-[30px] leading-[1.02] tracking-[-0.02em] 3xl:text-[34px]">{project.headline}</h3>
            <p className="mt-1 max-w-[75%] font-mono text-[11.5px] opacity-85">{project.subline}</p>
            <span className="mt-3 inline-flex rounded-md border border-white/25 bg-white/12 px-2.5 py-1 font-mono text-[11px]">
              {project.cta}
            </span>
          </div>
        </div>

        <div className="flex grow flex-col px-1.5 pb-1 pt-4">
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-serif text-[24px] leading-tight tracking-[-0.01em]">{project.title}</h4>
            <span className="rounded-full border border-line bg-paper-2 px-2.5 py-0.5 font-mono text-[11px] text-ink-2">
              {project.tag}
            </span>
          </div>
          <p className="mt-2 text-sm text-ink-2 3xl:text-[15px]">{project.description}</p>
          <div className="mt-auto pt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-ink-2">
            {project.stack.map((item) => (
              <span key={`${project.title}-${item}`} className="font-mono">
                {item}
              </span>
            ))}
            <a
              href={project.url}
              className="ml-auto inline-flex items-center gap-1 rounded-md px-1 py-0.5 text-ink transition-colors hover:text-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep"
              aria-label={`Open ${project.title}`}
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              <span className="font-mono">Open</span>
            </a>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
