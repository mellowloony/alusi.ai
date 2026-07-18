import { DIACRITIC_LINE } from "./Name";

export default function Footer() {
  return (
    <footer className="border-ivory/10 border-t">
      <div className="text-ivory/60 mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between md:px-10">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span>© 2026 Alusi.ai</span>
          <span aria-hidden="true" className="text-bronze">
            ·
          </span>
          <span>Lagos</span>
          <span aria-hidden="true" className="text-bronze">
            ·
          </span>
          {/* Placeholder link — swap for the live Instagram profile */}
          <a
            href="https://instagram.com/alusi.ai"
            className="hover:text-ivory underline decoration-ivory/30 underline-offset-4 transition-colors"
          >
            Instagram
          </a>
        </p>
        <p className="font-display text-ivory/70">
          AI is the loom. Culture is the thread.
        </p>
      </div>
      {/* The motif, small — same diacritics must hold at caption size */}
      <p
        aria-hidden="true"
        className="text-ivory/55 mx-auto max-w-6xl px-6 pb-8 text-xs tracking-[0.2em] select-none md:px-10"
      >
        {DIACRITIC_LINE}
      </p>
    </footer>
  );
}
