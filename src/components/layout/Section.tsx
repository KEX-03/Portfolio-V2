import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-[var(--space-section-y)]", className)} {...props} />;
}
