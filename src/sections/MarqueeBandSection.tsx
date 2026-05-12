import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const items = [
  "Frontend Engineer",
  "Editorial UI Systems",
  "React + TypeScript",
  "Motion + Interaction",
  "Accessible Interfaces",
];

export function MarqueeBandSection() {
  const reduceMotion = useReducedMotion();
  const loopItems = [...items, ...items];
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let frame = 0;
    let last = performance.now();
    let x = 0;
    let speed = 0.09;
    let targetSpeed = 0.09;
    let halfWidth = track.scrollWidth / 2;
    let running = true;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };

    const loop = (now: number) => {
      if (!running) return;

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
      targetSpeed = 0.018;
    };

    const leave = () => {
      targetSpeed = 0.09;
    };

    const onVisibilityChange = () => {
      running = document.visibilityState === "visible";
      if (running) {
        last = performance.now();
        frame = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(frame);
      }
    };

    measure();

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && document.visibilityState === "visible";
        if (running) {
          last = performance.now();
          frame = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(wrap);

    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      wrap.removeEventListener("mouseenter", enter);
      wrap.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [reduceMotion]);

  return (
    <Section aria-label="Marquee highlights" className="!py-7 sm:!py-9">
      <div ref={wrapRef} className="marquee-band">
        <div ref={trackRef} className="marquee-track" aria-hidden="true">
          {loopItems.map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
              <span className="marquee-star">*</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
