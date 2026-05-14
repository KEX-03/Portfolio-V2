import { Phase3NavHero } from "@/parity/Phase3NavHero";
import { Phase4BandTech } from "@/parity/Phase4BandTech";
import { Phase5Projects } from "@/parity/Phase5Projects";
import { Phase6LowerSections } from "@/parity/Phase6LowerSections";
import { usePhase7Behaviors } from "@/parity/usePhase7Behaviors";

export function Phase2Foundation() {
  usePhase7Behaviors();

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />

      <main className="page">
        <Phase3NavHero />
        <Phase4BandTech />
        <Phase5Projects />
        <Phase6LowerSections />
      </main>
    </>
  );
}
