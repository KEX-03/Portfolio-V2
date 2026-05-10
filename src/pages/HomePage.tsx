import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { fadeInUp, staggerSoft } from "@/utils/motion";

const placeholderSectionClass = "paper-panel rounded-[var(--radius-panel)] p-6 sm:p-8";

export function HomePage() {
  return (
    <>
      <Section id="home" aria-label="Portfolio foundation preview">
        <motion.div
          className={placeholderSectionClass}
          variants={staggerSoft}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={fadeInUp} className="font-hand text-3xl text-ink-2">
            Hello there
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-3 max-w-3xl font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.025em]"
          >
            Editorial Portfolio Foundation
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-5 max-w-2xl font-mono text-sm text-ink-2">
            Phase 1 sets the exact paper, serif, mono, and handcrafted token system that the full portfolio
            sections will inherit.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton type="button">View Work</PrimaryButton>
            <SecondaryButton type="button">Read Story</SecondaryButton>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="about" aria-label="About section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
      <Section id="projects" aria-label="Projects section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
      <Section id="skills" aria-label="Skills section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
      <Section id="process" aria-label="Process section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
      <Section id="connect" aria-label="Contact section placeholder">
        <div className={placeholderSectionClass} />
      </Section>
    </>
  );
}
