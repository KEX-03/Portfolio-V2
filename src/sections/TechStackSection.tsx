import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { TECH_STACK } from "@/data/techStack";

export function TechStackSection() {
  const loopStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <Section id="skills" aria-label="Tech stack">
      <div className="paper-panel rounded-[22px] px-5 py-7 sm:px-7 sm:py-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-paper-3 text-ink">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <h2 className="font-serif text-[clamp(1.75rem,3.3vw,2.25rem)] leading-none">Tech I Work With</h2>
          <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Core Stack</span>
        </div>

        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {loopStack.map((tech, index) => (
              <motion.article
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: (index % TECH_STACK.length) * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="hover-lift-card tech-pill"
              >
                <div
                  className="mx-auto flex size-12 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ backgroundColor: tech.bg, color: tech.fg ?? "#ffffff" }}
                  aria-hidden="true"
                >
                  {tech.label}
                </div>
                <p className="mt-3 text-center font-mono text-xs text-ink-2">{tech.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
