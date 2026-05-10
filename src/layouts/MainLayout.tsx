import { type PropsWithChildren } from "react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative isolate pb-16">
      <Container>
        <Navbar />
        <main>{children}</main>
      </Container>
    </div>
  );
}
