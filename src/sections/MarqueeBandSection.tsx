import { useEffect, useRef } from "react";
import { Section } from "@/components/layout/Section";

const items = [
  "Frontend Engineer",
  "Editorial UI Systems",
  "React + TypeScript",
  "Motion + Interaction",
  "Accessible Interfaces",
];

export function MarqueeBandSection() {
  const loopItems = [...items, ...items];
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let frame = 0;
    let last = performance.now();
    let x = 0;
    let speed = 0.09;
    let targetSpeed = 0.09;
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
      targetSpeed = 0.018;
    };

    const leave = () => {
      targetSpeed = 0.09;
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
