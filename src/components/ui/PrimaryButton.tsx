import { useState, type ButtonHTMLAttributes, type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showArrow?: boolean;
};

export function PrimaryButton({ className, children, showArrow = true, ...props }: PrimaryButtonProps) {
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setMagnet({ x: x * 0.12, y: y * 0.18 });
  };

  const resetMagnet = () => setMagnet({ x: 0, y: 0 });

  return (
    <button
      className={cn(
        "btn-magnetic inline-flex items-center gap-2 rounded-[var(--radius-control)] bg-ink px-6 py-3 font-sans text-[15px] font-semibold text-paper shadow-[0_6px_0_-2px_rgba(29,26,20,0.7),0_14px_30px_-18px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep",
        className,
      )}
      style={{ transform: `translate(${magnet.x}px, ${magnet.y}px)` }}
      onMouseMove={handleMove}
      onMouseLeave={resetMagnet}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="size-4 btn-arrow" aria-hidden="true" /> : null}
    </button>
  );
}
