import { useEffect, useMemo, useRef } from "react";

type Project = {
  title: string;
  tag: string;
  variant: "dark" | "warm" | "mid" | "green";
  head: string;
  sub: string;
  cta: string;
  blurb: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Roamely",
    tag: "Next.js",
    variant: "dark",
    head: "Plan better\ntravel more",
    sub: "Curated guides, maps and tips for mindful travellers.",
    cta: "Explore Guides",
    blurb: "Travel platform with destination guides, itineraries, and a custom map experience.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
  },
  {
    title: "Maison d'Artisans",
    tag: "React",
    variant: "warm",
    head: "Local artisans,\nglobal stories.",
    sub: "Handmade products from independent makers.",
    cta: "Shop Collection",
    blurb: "E-commerce site for handmade products with a focus on storytelling.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "DeepFocus",
    tag: "Next.js",
    variant: "mid",
    head: "Focus deeper.\nDo more.",
    sub: "Ambient sounds to help you stay in the zone.",
    cta: "Start Listening",
    blurb: "Ambient productivity app with playlists, timer, and progress tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Howler.js"],
  },
  {
    title: "Larkspur",
    tag: "SvelteKit",
    variant: "green",
    head: "Garden journal\nfor green thumbs.",
    sub: "Track watering, growth, and bloom cycles.",
    cta: "Plant Something",
    blurb: "A calm journaling app for hobbyist gardeners with reminders and notes.",
    stack: ["SvelteKit", "Supabase", "Drizzle", "Vercel"],
  },
  {
    title: "Brevity",
    tag: "Next.js",
    variant: "warm",
    head: "Notes that\nthink with you.",
    sub: "AI-assisted notes with structure that emerges.",
    cta: "Try it free",
    blurb: "AI notes app that organizes itself as you write - search across everything.",
    stack: ["Next.js", "tRPC", "Prisma", "OpenAI"],
  },
  {
    title: "Cadence",
    tag: "React Native",
    variant: "mid",
    head: "Run your own\nrhythm.",
    sub: "Adaptive workout tracker for runners.",
    cta: "Start Training",
    blurb: "Mobile-first running coach that adapts plans to your weekly pace.",
    stack: ["React Native", "Expo", "SQLite", "Mapbox"],
  },
];

function MidWave() {
  const bars = Array.from({ length: 18 }).map((_, k) => {
    const x = 4 + k * 8;
    const h = 8 + Math.abs(Math.sin(k * 0.9)) * 38 + (k % 3) * 4;
    return <path key={k} d={`M${x} ${30 - h / 2} V ${30 + h / 2}`} />;
  });

  return (
    <svg className="wave" viewBox="0 0 140 60" fill="none" stroke="#b5a8ff" strokeWidth="2" strokeLinecap="round">
      {bars}
    </svg>
  );
}

export function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const currentIndexRef = useRef(PROJECTS.length);
  const dragRef = useRef({ isDown: false, startX: 0, startY: 0, baseTx: 0, axisLock: null as "x" | "y" | null });
  const autoTimerRef = useRef<number | null>(null);
  const activeTiltCardRef = useRef<HTMLElement | null>(null);

  const tripledProjects = useMemo(() => [...PROJECTS, ...PROJECTS, ...PROJECTS], []);

  useEffect(() => {
    const track = trackRef.current;
    const carousel = carouselRef.current;
    if (!track || !carousel) {
      return;
    }

    const N = PROJECTS.length;

    const cardStep = () => {
      const card = track.querySelector(".project") as HTMLElement | null;
      if (!card) {
        return 0;
      }
      const rect = card.getBoundingClientRect();
      const gap = Number.parseInt(getComputedStyle(track).gap, 10) || 22;
      return rect.width + gap;
    };

    const snap = (animated = true) => {
      const step = cardStep();
      track.style.transition = animated ? "transform .55s cubic-bezier(.22,.7,.18,1)" : "none";
      track.style.transform = `translateX(${-currentIndexRef.current * step}px)`;
    };

    const normalize = () => {
      if (currentIndexRef.current >= 2 * N) {
        currentIndexRef.current -= N;
        snap(false);
      } else if (currentIndexRef.current < N) {
        currentIndexRef.current += N;
        snap(false);
      }
    };

    const next = () => {
      currentIndexRef.current += 1;
      snap();
    };

    const prev = () => {
      currentIndexRef.current -= 1;
      snap();
    };

    const onTransitionEnd = () => normalize();
    track.addEventListener("transitionend", onTransitionEnd);

    const onNextClick = () => next();
    const onPrevClick = () => prev();
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    nextBtn?.addEventListener("click", onNextClick);
    prevBtn?.addEventListener("click", onPrevClick);

    const onPointerDown = (e: PointerEvent) => {
      if (!e.isPrimary) {
        return;
      }
      dragRef.current.isDown = true;
      dragRef.current.startX = e.clientX;
      dragRef.current.startY = e.clientY;
      dragRef.current.axisLock = null;
      const t = getComputedStyle(track).transform;
      const m = t.match(/matrix.*\((.+)\)/);
      dragRef.current.baseTx = m ? Number.parseFloat(m[1].split(",")[4]) : 0;
      track.style.transition = "none";
      carousel.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.isDown) {
        return;
      }

      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;

      if (!dragRef.current.axisLock && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        dragRef.current.axisLock = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      }

      if (dragRef.current.axisLock === "y") {
        return;
      }

      e.preventDefault();
      track.style.transform = `translateX(${dragRef.current.baseTx + dx}px)`;
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragRef.current.isDown) {
        return;
      }
      dragRef.current.isDown = false;
      const wasHorizontalDrag = dragRef.current.axisLock !== "y";
      dragRef.current.axisLock = null;

      if (!wasHorizontalDrag) {
        snap();
        return;
      }

      const dx = e.clientX - dragRef.current.startX;
      const step = cardStep();
      const moved = Math.round(-dx / step);
      currentIndexRef.current = Math.max(0, currentIndexRef.current + moved);
      snap();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") {
        return;
      }
      if (e.key === "ArrowRight") {
        next();
      }
      if (e.key === "ArrowLeft") {
        prev();
      }
    };

    const onResize = () => snap(false);
    const clearAuto = () => {
      if (autoTimerRef.current) {
        window.clearInterval(autoTimerRef.current);
      }
    };
    const startAuto = () => {
      autoTimerRef.current = window.setInterval(next, 5500);
    };

    const onTiltMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest(".project") as HTMLElement | null;
      if (!card) {
        if (activeTiltCardRef.current) {
          activeTiltCardRef.current.style.setProperty("--rx", "0deg");
          activeTiltCardRef.current.style.setProperty("--ry", "0deg");
          activeTiltCardRef.current = null;
        }
        return;
      }

      if (activeTiltCardRef.current && activeTiltCardRef.current !== card) {
        activeTiltCardRef.current.style.setProperty("--rx", "0deg");
        activeTiltCardRef.current.style.setProperty("--ry", "0deg");
      }

      activeTiltCardRef.current = card;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--ry", `${px * 8}deg`);
      card.style.setProperty("--rx", `${-py * 8}deg`);
    };

    const resetTilt = () => {
      const cards = track.querySelectorAll(".project");
      cards.forEach((card) => {
        const el = card as HTMLElement;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
      activeTiltCardRef.current = null;
    };

    carousel.addEventListener("pointerdown", onPointerDown);
    carousel.addEventListener("pointermove", onPointerMove);
    carousel.addEventListener("pointerup", endDrag);
    carousel.addEventListener("pointercancel", endDrag);
    carousel.addEventListener("pointerleave", endDrag);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    carousel.addEventListener("mouseenter", clearAuto);
    carousel.addEventListener("mouseleave", startAuto);
    carousel.addEventListener("mousemove", onTiltMove);
    carousel.addEventListener("mouseleave", resetTilt);

    requestAnimationFrame(() => snap(false));
    startAuto();

    return () => {
      track.removeEventListener("transitionend", onTransitionEnd);
      nextBtn?.removeEventListener("click", onNextClick);
      prevBtn?.removeEventListener("click", onPrevClick);
      carousel.removeEventListener("pointerdown", onPointerDown);
      carousel.removeEventListener("pointermove", onPointerMove);
      carousel.removeEventListener("pointerup", endDrag);
      carousel.removeEventListener("pointercancel", endDrag);
      carousel.removeEventListener("pointerleave", endDrag);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      carousel.removeEventListener("mouseenter", clearAuto);
      carousel.removeEventListener("mouseleave", startAuto);
      carousel.removeEventListener("mousemove", onTiltMove);
      carousel.removeEventListener("mouseleave", resetTilt);
      clearAuto();
    };
  }, []);

  return (
    <>
      <div className="projects-head" id="projects">
        <div className="label">
          <span>Featured Projects</span>
        </div>
        <div className="projects-head-right">
          <a className="view-all" href="#" data-cursor="hover">
            View all projects →
          </a>
          <div className="pager">
            <button id="prevBtn" aria-label="Previous" data-cursor="hover">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button id="nextBtn" aria-label="Next" data-cursor="hover">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="carousel" id="carousel" ref={carouselRef}>
        <div className="carousel-track" id="track" ref={trackRef}>
          {tripledProjects.map((p, idx) => (
            <article className="project" aria-label={p.title} data-cursor="hover" key={`${p.title}-${idx}`}>
              <div className={`shot ${p.variant}`}>
                <div className="bar">
                  <i />
                  <i />
                  <i />
                </div>
                <h4 dangerouslySetInnerHTML={{ __html: p.head.replace("\n", "<br/>") }} />
                <p>{p.sub}</p>
                <span className="pseudo-cta">{p.cta}</span>
                {p.variant === "mid" ? <MidWave /> : null}
              </div>
              <div className="meta">
                <div className="row">
                  <h3>{p.title}</h3>
                  <span className="tag">{p.tag}</span>
                </div>
                <p>{p.blurb}</p>
                <div className="stack">
                  {p.stack.map((s, stackIndex) => (
                    <span key={`${p.title}-${s}-${stackIndex}`}>
                      {stackIndex > 0 ? <span className="dot" /> : null}
                      <span>{s}</span>
                    </span>
                  ))}
                  <a href="#" className="open" data-cursor="hover" aria-label={`Open ${p.title}`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="carousel-hint">↺ drag, scroll, or use arrow keys</div>
    </>
  );
}
