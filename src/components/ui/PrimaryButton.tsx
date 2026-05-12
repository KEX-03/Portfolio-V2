import { useEffect, useRef, type ButtonHTMLAttributes, type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showArrow?: boolean;
};

export function PrimaryButton({ className, children, showArrow = true, ...props }: PrimaryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const magnetRef = useRef({ x: 0, y: 0 });

  const applyMagnet = () => {
    const button = buttonRef.current;
    if (!button) return;

    button.style.transform = `translate(${magnetRef.current.x}px, ${magnetRef.current.y}px)`;
    frameRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    magnetRef.current = { x: x * 0.12, y: y * 0.18 };

    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(applyMagnet);
    }
  };

  const resetMagnet = () => {
    const button = buttonRef.current;
    magnetRef.current = { x: 0, y: 0 };
    if (!button) return;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    button.style.transform = "";
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "btn-magnetic inline-flex items-center gap-2 rounded-[var(--radius-control)] bg-ink px-6 py-3 font-sans text-[15px] font-semibold text-paper shadow-[0_6px_0_-2px_rgba(29,26,20,0.7),0_14px_30px_-18px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep",
        className,
      )}
      onMouseMove={handleMove}
      onMouseLeave={resetMagnet}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="size-4 btn-arrow" aria-hidden="true" /> : null}
    </button>
  );
}
