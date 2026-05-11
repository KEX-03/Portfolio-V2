import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PROCESS_STEPS } from "@/data/process";

export function ProcessSection() {
  return (
    <Section id="process" aria-label="Process">
      <div className="section-card relative">
        <span className="section-braces">{'// process'}</span>
        <div className="section-label">
          <h2>Creative Process</h2>
          <small>WORKFLOW</small>
        </div>

        <p className="mb-6 mt-[-6px] font-hand text-[26px] text-ink-2">from idea to launch</p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-line bg-paper px-4 py-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{step.number}</span>
                {index < PROCESS_STEPS.length - 1 ? <ArrowRight className="size-4 text-ink-2" aria-hidden="true" /> : null}
              </div>
              <h3 className="font-serif text-[28px] leading-none tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-2">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
