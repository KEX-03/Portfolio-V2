import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1700px] px-[clamp(20px,3.4vw,64px)] 2xl:px-[clamp(56px,4.2vw,96px)]", className)}
      {...props}
    />
  );
}
