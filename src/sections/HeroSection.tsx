import { motion, useReducedMotion } from "framer-motion";
import { Code2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { fadeInUp, staggerSoft } from "@/utils/motion";

const codeLines = [
  "const engineer = {",
  "  name: 'Vivek Sharma',",
  "  role: 'Frontend Engineer',",
  "  stack: ['React', 'TypeScript', 'Motion'],",
  "  craft: 'clean / fast / accessible'",
  "};",
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative grid gap-10 overflow-x-clip pb-8 pt-10 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12 lg:pt-14"
    >
      <motion.div variants={staggerSoft} initial="initial" animate="animate" className="relative">
        <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 font-hand text-[26px] text-ink-2 sm:text-[32px]">
          Hi, I am Vivek Sharma
          <span aria-hidden="true" className="inline-block origin-[70%_70%] animate-[wave_2.6s_ease-in-out_infinite]">
            o/
          </span>
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-2 max-w-[13ch] font-serif text-[clamp(3rem,10vw,7.75rem)] leading-[0.92] tracking-[-0.025em]"
        >
          Crafting <span className="hero-highlight">cinematic</span> digital <span className="hero-highlight">stories</span>
        </motion.h1>

        <motion.svg
          variants={fadeInUp}
          viewBox="0 0 160 60"
          className="pointer-events-none absolute -right-4 top-[44%] hidden h-[60px] w-[120px] lg:block xl:-right-8 xl:w-[160px]"
          aria-hidden="true"
        >
          <path className="hero-scribble" d="M4 24 C 30 10, 54 45, 80 26 S 126 12, 156 30" />
        </motion.svg>

        <motion.p variants={fadeInUp} className="mt-5 max-w-xl font-mono text-sm leading-7 text-ink-2">
          Frontend engineer focused on handcrafted interfaces, strong visual hierarchy, and thoughtful
          micro-interactions that feel calm, tactile, and memorable.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
          <PrimaryButton type="button">See Projects</PrimaryButton>
          <SecondaryButton type="button">About My Process</SecondaryButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="relative mx-auto h-[430px] w-full max-w-[420px] sm:h-[520px]"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [2, 1.2, 2] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-4 h-[380px] w-[min(100%,340px)] rotate-[2deg] border border-line bg-white p-3.5 pb-14 shadow-[0_1px_0_rgba(60,50,30,0.05),0_30px_50px_-30px_rgba(40,30,10,0.45),0_80px_100px_-60px_rgba(40,30,10,0.3)] sm:h-[430px] sm:w-[min(100%,380px)]"
        >
          <span className="absolute -left-3 -top-6 grid size-[64px] place-content-center rounded-full bg-accent-deep font-mono text-base font-bold text-white shadow-[0_14px_24px_-10px_color-mix(in_oklab,var(--accent-deep)_70%,transparent)] sm:-left-4 sm:-top-7 sm:size-[78px] sm:text-lg">
            01
          </span>
          <span className="absolute -right-1 -top-6 font-serif text-3xl text-ink animate-[twinkle_2.2s_ease-in-out_infinite]">
            *
          </span>
          <span className="absolute -left-1 top-[-10px] h-[22px] w-[74px] -rotate-[6deg] bg-tape/85 sm:w-[88px]" />
          <span className="absolute right-8 top-[-8px] h-[22px] w-[74px] rotate-[8deg] bg-[#e8c7d4]/85 sm:right-12 sm:w-[88px]" />

          <div className="relative h-full bg-[linear-gradient(135deg,rgba(0,0,0,0.55),rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.5)),repeating-linear-gradient(45deg,#4a4a4a_0_6px,#2c2c2c_6px_12px)] p-4">
            <div className="absolute inset-0 opacity-25 [background-size:18px_18px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]" />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black/45 px-2 py-1 font-mono text-xs text-[#e9e3d4]">
              [ portrait ]
            </p>
          </div>
        </motion.div>

        <motion.article
          animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-3, -2.2, -3] }}
          transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-16 left-0 w-[min(92%,320px)] -rotate-2 rounded-[10px] bg-[#1c1a16] px-4 pb-4 pt-7 font-mono text-[12px] leading-6 text-[#e8e1cb] shadow-[0_18px_28px_-14px_rgba(0,0,0,0.6)] sm:bottom-20 sm:w-[min(90%,360px)] sm:-rotate-3 sm:text-[12.5px] sm:leading-7"
        >
          <div className="absolute left-3 top-2 text-[9px] tracking-[0.25em] text-[#888]">o o o</div>
          <div className="mb-2 inline-flex items-center gap-2 text-[#8ab4ff]">
            <Code2 className="size-3.5" />
            <span>hero.tsx</span>
          </div>
          <pre className="m-0 whitespace-pre-wrap font-mono text-inherit leading-inherit">{codeLines.join("\n")}</pre>
        </motion.article>

        <motion.p
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-3 -rotate-3 font-hand text-[22px] text-ink-2 sm:right-6 sm:text-[26px]"
        >
          it is me <span className="font-serif">v</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
