export function FooterSection() {
  return (
    <footer className="mt-3 border-t border-line/80 py-5">
      <div className="flex flex-col gap-2 text-xs text-ink-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono">Copyright 2026 Vivek Rao. Crafted with care.</span>
        <span className="font-mono">Now building something with Framer Motion</span>
        <a
          href="#home"
          className="self-start font-mono underline underline-offset-4 transition-colors hover:text-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep sm:self-auto"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
