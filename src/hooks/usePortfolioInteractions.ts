import { useEffect } from "react";

const KONAMI_SEQUENCE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const SCROLL_SECTIONS = ["home", "about", "projects", "skills", "process"];
const IST_FORMATTER = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });

export function usePortfolioInteractions() {
  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isMobileViewport = window.matchMedia("(max-width: 980px)").matches;
    const cursor = document.querySelector(".cursor") as HTMLElement | null;
    const dot = document.querySelector(".cursor-dot") as HTMLElement | null;
    const progress = document.querySelector(".progress") as HTMLElement | null;
    const themeBtn = document.getElementById("themeBtn");
    const clock = document.getElementById("clock");
    const stepsParent = document.getElementById("steps");
    const toast = document.getElementById("toast");
    const navLinks = [...document.querySelectorAll(".nav .link")] as HTMLAnchorElement[];
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let rafId = 0;
    let konamiIndex = 0;
    let clockTimer = 0;
    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot) dot.style.transform = `translate(${tx - 2.5}px, ${ty - 2.5}px)`;
      document.documentElement.style.setProperty("--spot-x", `${(tx / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--spot-y", `${(ty / window.innerHeight) * 100}%`);
    };
    const cursorLoop = () => {
      if (cursor) {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      }
      rafId = window.requestAnimationFrame(cursorLoop);
    };
    const hoverTargets = [...document.querySelectorAll('[data-cursor="hover"], a, button')] as HTMLElement[];
    const onMouseEnterHover = () => cursor?.classList.add("hover");
    const onMouseLeaveHover = () => cursor?.classList.remove("hover");
    const onMouseDown = () => cursor?.classList.add("click");
    const onMouseUp = () => cursor?.classList.remove("click");
    const magneticTargets = [...document.querySelectorAll("[data-magnet]")] as HTMLElement[];
    const magneticMoveHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();
    const magneticLeaveHandlers = new Map<HTMLElement, () => void>();
    if (!isCoarsePointer) {
      magneticTargets.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      magneticMoveHandlers.set(el, onMove);
      magneticLeaveHandlers.set(el, onLeave);
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      });
    }
    const onScrollProgress = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      progress?.style.setProperty("--p", Number.isFinite(p) ? `${p}` : "0");
    };
    const tick = () => {
      if (clock) clock.textContent = IST_FORMATTER.format(new Date());
    };
    const onThemeToggle = () => {
      const curTheme = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", curTheme === "paper" ? "night" : "paper");
    };
    const onScrollSpy = () => {
      const sections = SCROLL_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 120;
      let active = "home";
      sections.forEach((section) => {
        if (section.offsetTop <= y) active = section.id;
      });
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${active}`));
    };
    const placeArrows = () => {
      document.querySelectorAll(".arrow-svg").forEach((el) => el.remove());
      if (!stepsParent) return;
      if (isMobileViewport || isCoarsePointer) return;
      const steps = [...stepsParent.querySelectorAll(".step")] as HTMLElement[];
      if (steps.length < 2) return;
      const pr = stepsParent.getBoundingClientRect();
      for (let i = 0; i < steps.length - 1; i += 1) {
        const a = steps[i].getBoundingClientRect();
        const b = steps[i + 1].getBoundingClientRect();
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add("arrow-svg");
        svg.setAttribute("viewBox", "0 0 60 24");
        svg.innerHTML = '<path d="M2 12 C 18 4, 42 20, 56 12 M50 8 l 6 4 -6 4"/>';
        svg.style.left = `${(a.right - pr.left + (b.left - pr.left)) / 2 - 30}px`;
        svg.style.position = "absolute";
        stepsParent.appendChild(svg);
      }
    };
    let io: IntersectionObserver | null = null;
    const processSection = document.getElementById("process");
    if (processSection && !isMobileViewport && !isCoarsePointer) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll(".arrow-svg").forEach((arrow, i) => window.setTimeout(() => arrow.classList.add("show"), i * 180));
            io?.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io.observe(processSection);
    }
    const triggerKonami = () => {
      if (!toast) return;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3200);
      for (let i = 0; i < 40; i += 1) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = `${Math.random() * window.innerWidth}px`;
        sparkle.style.top = `${window.innerHeight - 40 - Math.random() * 40}px`;
        sparkle.style.background = ["#b5a8ff", "#f7e69a", "#ff6b3d", "#2bb673"][Math.floor(Math.random() * 4)];
        document.body.appendChild(sparkle);
        window.setTimeout(() => sparkle.remove(), 1200);
      }
    };
    const onKeyDownKonami = (e: KeyboardEvent) => {
      const want = KONAMI_SEQUENCE[konamiIndex];
      if (e.key.toLowerCase() === want.toLowerCase()) {
        konamiIndex += 1;
        if (konamiIndex === KONAMI_SEQUENCE.length) {
          konamiIndex = 0;
          triggerKonami();
        }
      } else konamiIndex = 0;
    };
    if (!isCoarsePointer) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    }
    document.addEventListener("scroll", onScrollProgress, { passive: true });
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    window.addEventListener("resize", placeArrows);
    document.addEventListener("keydown", onKeyDownKonami);
    themeBtn?.addEventListener("click", onThemeToggle);
    if (!isCoarsePointer) {
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterHover);
        el.addEventListener("mouseleave", onMouseLeaveHover);
      });
      cursorLoop();
    }
    onScrollProgress();
    onScrollSpy();
    placeArrows();
    tick();
    clockTimer = window.setInterval(tick, 30000);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearInterval(clockTimer);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("scroll", onScrollProgress);
      window.removeEventListener("scroll", onScrollSpy);
      window.removeEventListener("resize", placeArrows);
      document.removeEventListener("keydown", onKeyDownKonami);
      themeBtn?.removeEventListener("click", onThemeToggle);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterHover);
        el.removeEventListener("mouseleave", onMouseLeaveHover);
      });
      magneticTargets.forEach((el) => {
        const onMove = magneticMoveHandlers.get(el);
        const onLeave = magneticLeaveHandlers.get(el);
        if (onMove) el.removeEventListener("mousemove", onMove);
        if (onLeave) el.removeEventListener("mouseleave", onLeave);
      });
      io?.disconnect();
    };
  }, []);
}
