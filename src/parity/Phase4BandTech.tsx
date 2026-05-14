const TECHS = [
  { name: "HTML", label: "H5", bg: "#e44d26" },
  { name: "CSS", label: "3", bg: "#264de4" },
  { name: "JavaScript", label: "JS", bg: "#f7df1e", fg: "#1d1a14" },
  { name: "TypeScript", label: "TS", bg: "#2f74c0" },
  { name: "React", label: "⚛", bg: "#1c1a16", fg: "#61dafb" },
  { name: "Next.js", label: "N", bg: "#1d1a14" },
  { name: "Node.js", label: "⬢", bg: "#5fa04e" },
  { name: "Framer Motion", label: "FM", bg: "#0055ff" },
  { name: "GraphQL", label: "◆", bg: "#e535ab" },
  { name: "Tailwind", label: "~", bg: "#38bdf8" },
  { name: "Figma", label: "F", bg: "#1d1a14", fg: "#ff7262" },
  { name: "Storybook", label: "SB", bg: "#ff4785" },
];

export function Phase4BandTech() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <>
      <div className="band" aria-hidden="true">
        <div className="mq">
          <span>
            Available for work <span className="star">✦</span> Frontend Engineer <span className="star">✦</span> React · TypeScript · Motion <span className="star">✦</span> Currently in Bangalore{" "}
            <span className="star">✦</span> Let&apos;s build something <span className="star">✦</span>
          </span>
          <span>
            Available for work <span className="star">✦</span> Frontend Engineer <span className="star">✦</span> React · TypeScript · Motion <span className="star">✦</span> Currently in Bangalore{" "}
            <span className="star">✦</span> Let&apos;s build something <span className="star">✦</span>
          </span>
        </div>
      </div>

      <section className="section-card" id="skills">
        <span className="braces">{"{ }"}</span>
        <div className="label">
          <span>Tech I Work With</span>
          <small>infinite · pause on hover</small>
        </div>
        <div className="marquee" aria-label="Technology stack">
          <div className="marquee-track" id="techTrack">
            {doubled.map((tech, index) => (
              <div className="tech-pill" key={`${tech.name}-${index}`}>
                <div className="glyph" style={{ background: tech.bg, color: tech.fg ?? "#ffffff" }}>
                  {tech.label}
                </div>
                <div className="name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
