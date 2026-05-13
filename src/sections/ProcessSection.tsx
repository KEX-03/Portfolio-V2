import { ArrowRight, Search, PenTool, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PROCESS_STEPS } from "@/data/process";

export function ProcessSection() {
  const stepIcons = [Search, PenTool, Code2, Rocket];

  return (
    <Section id="process" aria-label="Process">
      <div className="section-card relative">
        <span className="section-braces">{'// process'}</span>
        <div className="section-label">
          <h2>Creative Process</h2>
          <small>WORKFLOW</small>
        </div>

        <p className="mb-6 mt-[-6px] font-hand text-[26px] text-ink-2 3xl:text-[30px]">from idea to launch</p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:gap-5 3xl:gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const StepIcon = stepIcons[index] ?? Search;
            return (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-line bg-paper px-4 py-5 3xl:px-5 3xl:py-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{step.number}</span>
                {index < PROCESS_STEPS.length - 1 ? <ArrowRight className="size-4 text-ink-2" aria-hidden="true" /> : null}
              </div>
              <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-line bg-paper-3 text-ink">
                <StepIcon className="size-4" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-[28px] leading-none tracking-[-0.02em] 3xl:text-[32px]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-2 3xl:text-[15px]">{step.description}</p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
