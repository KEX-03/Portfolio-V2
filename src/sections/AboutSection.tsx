import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="about" aria-label="About">
      <div className="section-card relative">
        <span className="section-braces">{'{ craft }'}</span>
        <div className="section-label">
          <h2>About</h2>
          <small>PROFILE</small>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center 2xl:grid-cols-[0.85fr_1.15fr] 2xl:gap-8 3xl:gap-12">
          <motion.article
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[18px] border border-line bg-paper p-5 sm:p-6 3xl:p-7"
          >
            <span className="absolute -left-2 top-[-10px] h-[20px] w-[84px] -rotate-[7deg] bg-tape/85" />
            <div className="relative h-[280px] rounded-[14px] border border-line bg-[linear-gradient(135deg,rgba(25,21,17,0.85),rgba(25,21,17,0.55)),repeating-linear-gradient(45deg,#4a4a4a_0_6px,#2c2c2c_6px_12px)] p-4 sm:h-[320px] 3xl:h-[380px]">
              <div className="absolute inset-0 opacity-20 [background-size:20px_20px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]" />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black/45 px-2 py-1 font-mono text-xs text-[#e9e3d4]">
                [ profile ]
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="relative rounded-[18px] border border-line bg-paper p-6 sm:p-8 3xl:p-10"
          >
            <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.02em] 3xl:text-[clamp(2.6rem,3vw,3.7rem)]">Designing with Code and Craft</h3>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-ink-2 3xl:max-w-[65ch] 3xl:text-[16px]">
              I blend visual storytelling with production-grade frontend engineering. My work focuses on
              meaningful interactions, legible systems, and editorial compositions that feel tactile rather than
              generic.
            </p>

            <aside className="mt-6 inline-block -rotate-1 rounded-xl border border-line bg-paper px-4 py-3 shadow-[0_8px_20px_-16px_rgba(40,30,10,0.5)]">
              <p className="font-hand text-[28px] leading-[1.05] text-ink-2">
                Great design is
                <br />
                quiet confidence.
              </p>
            </aside>
          </motion.article>
        </div>
      </div>
    </Section>
  );
}
