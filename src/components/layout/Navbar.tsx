import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-3 z-50 pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "paper-panel relative flex items-center gap-5 rounded-[18px] border px-4 py-3 transition-all duration-300",
          isScrolled && "bg-[color-mix(in_oklab,var(--paper-3)_78%,transparent)] backdrop-blur-md",
        )}
      >
        <a href="#home" className="inline-flex items-baseline gap-1 text-[30px] leading-none tracking-[-0.01em]">
          <span className="font-handwriting italic">VS</span>
          <span className="inline-block size-1.5 translate-y-[-2px] rounded-full bg-accent-deep" aria-hidden="true" />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "nav-link relative rounded-[10px] px-3.5 py-2 font-sans text-sm font-medium text-ink-2 transition-colors duration-150 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep",
                    active && "is-active text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span className="nav-link-underline" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <span className="ml-auto hidden items-center gap-2 rounded-full border border-line bg-[color-mix(in_oklab,var(--paper)_60%,transparent)] px-3 py-1.5 font-mono text-[11px] text-ink-2 md:inline-flex">
          <span className="relative size-2 rounded-full bg-[#2bb673] before:absolute before:inset-[-4px] before:animate-ping before:rounded-full before:border before:border-[#2bb673]" />
          Available for work
        </span>

        <a
          href="#connect"
          className="hidden items-center rounded-[12px] bg-ink px-4 py-2 text-sm font-semibold text-paper shadow-[0_6px_0_-2px_rgba(29,26,20,0.7),0_14px_24px_-18px_rgba(0,0,0,0.6)] transition-transform duration-150 hover:-translate-y-0.5 lg:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="ml-auto inline-flex size-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-paper-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "paper-panel mt-2 overflow-hidden rounded-[18px] border px-4 transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-80 py-3 opacity-100" : "max-h-0 py-0 opacity-0",
        )}
      >
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <li key={`mobile-${item.id}`}>
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 font-sans text-sm font-medium text-ink-2 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep",
                    active && "bg-paper-2 text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="pt-1">
            <a
              href="#connect"
              className="inline-flex w-full items-center justify-center rounded-[12px] bg-ink px-4 py-2 text-sm font-semibold text-paper"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
