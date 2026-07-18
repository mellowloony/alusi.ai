export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      {/* Oversized grave accent + dot below — the motif at hero scale */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-10 hidden select-none md:inline-flex md:flex-col md:items-center xl:right-24"
      >
        <span className="font-display block h-[0.34em] overflow-visible text-[13rem] leading-[0.62] text-bronze/30">
          &#96;
        </span>
        <span className="mt-7 block h-5 w-5 rounded-full bg-bronze/30" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4.3rem)] max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
        <div className="rise">
          <p className="text-bronze text-xs tracking-[0.35em] uppercase md:text-sm">
            Lagos · Culture-Tech
          </p>
        </div>
        <div className="rise" style={{ animationDelay: "90ms" }}>
          <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.9rem,8.5vw,6.75rem)] leading-[1.02] tracking-tight">
            AI is the loom.
            <br />
            <em>Culture is the thread.</em>
          </h1>
        </div>
        <div className="rise" style={{ animationDelay: "180ms" }}>
          <p className="text-ivory/75 mt-10 max-w-2xl text-base leading-relaxed md:text-lg">
            Alusi is an AI-augmented creative agency. We build brand
            experiences, campaigns, and content systems — engineered with
            African cultural intelligence.
          </p>
        </div>
        <div className="rise" style={{ animationDelay: "270ms" }}>
          <a
            href="#contact"
            className="border-bronze text-ivory hover:bg-bronze hover:text-ground mt-14 inline-block self-start border px-8 py-4 text-xs tracking-[0.3em] uppercase transition-colors"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
