import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function SecondaryButton({ className, children, ...props }: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 border-0 bg-transparent px-1 py-2 font-sans text-[15px] font-medium text-ink underline decoration-1 underline-offset-[6px] transition-colors duration-200 hover:text-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
