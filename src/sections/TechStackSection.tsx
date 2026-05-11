import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { TECH_STACK } from "@/data/techStack";

export function TechStackSection() {
  const loopStack = [...TECH_STACK, ...TECH_STACK];
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let frame = 0;
    let last = performance.now();
    let x = 0;
    let speed = 0.07;
    let targetSpeed = 0.07;
    let halfWidth = track.scrollWidth / 2;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };

    const loop = (now: number) => {
      const dt = now - last;
      last = now;

      speed += (targetSpeed - speed) * 0.08;
      x -= speed * dt;

      if (-x >= halfWidth) {
        x += halfWidth;
      }

      track.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(loop);
    };

    const enter = () => {
      targetSpeed = 0.015;
    };

    const leave = () => {
      targetSpeed = 0.07;
    };

    measure();
    frame = requestAnimationFrame(loop);

    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      wrap.removeEventListener("mouseenter", enter);
      wrap.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <Section id="skills" aria-label="Tech stack">
      <div className="section-card relative">
        <span className="section-braces">{"<stack />"}</span>
        <div className="section-label">
          <h2>Tech I Work With</h2>
          <small>CORE STACK</small>
        </div>

        <div ref={wrapRef} className="tech-marquee">
          <div ref={trackRef} className="tech-marquee-track">
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
