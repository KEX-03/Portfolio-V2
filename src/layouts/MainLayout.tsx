import { type PropsWithChildren } from "react";
import { Container } from "@/components/layout/Container";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative isolate pb-16">
      <Container>{children}</Container>
    </div>
  );
}
