import { Section } from "@/components/layout/Section";

const items = [
  "Frontend Engineer",
  "Editorial UI Systems",
  "React + TypeScript",
  "Motion + Interaction",
  "Accessible Interfaces",
];

export function MarqueeBandSection() {
  const loopItems = [...items, ...items];

  return (
    <Section aria-label="Marquee highlights" className="!py-7 sm:!py-9">
      <div className="marquee-band">
        <div className="marquee-track" aria-hidden="true">
          {loopItems.map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
              <span className="marquee-star">*</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
