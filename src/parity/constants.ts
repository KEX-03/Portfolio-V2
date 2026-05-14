export const PARITY_SECTION_IDS = ["home", "skills", "projects", "about", "process", "connect"] as const;

export type ParitySectionId = (typeof PARITY_SECTION_IDS)[number];
