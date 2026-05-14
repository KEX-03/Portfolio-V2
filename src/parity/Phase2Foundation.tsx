import { PARITY_SECTION_IDS } from "@/parity/constants";
import { Phase3NavHero } from "@/parity/Phase3NavHero";
import { Phase4BandTech } from "@/parity/Phase4BandTech";
import { Phase5Projects } from "@/parity/Phase5Projects";

function PlaceholderSection({ id }: { id: string }) {
  return (
    <section id={id} className="phase-placeholder" aria-label={`${id} placeholder`}>
      <span>{id}</span>
    </section>
  );
}

export function Phase2Foundation() {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />

      <main className="page">
        <Phase3NavHero />
        <Phase4BandTech />
        <Phase5Projects />
        {PARITY_SECTION_IDS.filter((id) => id !== "home" && id !== "skills" && id !== "projects").map((id) => (
          <PlaceholderSection key={id} id={id} />
        ))}
      </main>
    </>
  );
}
