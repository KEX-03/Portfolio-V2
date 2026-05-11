import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { TECH_STACK } from "@/data/techStack";

export function TechStackSection() {
  const loopStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <Section id="skills" aria-label="Tech stack">
      <div className="section-card relative">
        <span className="section-braces">{'<stack />'}</span>
        <div className="section-label">
          <h2>Tech I Work With</h2>
          <small>CORE STACK</small>
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
