import Reveal from "./Reveal";
import { SectionHeader } from "./Mark";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-ivory/10 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionHeader index="05" title="Contact" />
        </Reveal>

        <Reveal delay={90}>
          <h2
            id="contact-title"
            className="font-display mt-16 max-w-4xl text-4xl leading-[1.08] tracking-tight md:mt-20 md:text-6xl"
          >
            Bring the brand. We bring the loom.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="text-ivory/75 mt-8 max-w-2xl leading-relaxed md:text-lg">
            Brand experiences, campaigns, and content systems — scoped in one
            call.
          </p>
        </Reveal>

        <Reveal delay={270}>
          {/* Placeholder address — swap for the live inbox before launch */}
          <a
            href="mailto:hello@alusi.ai"
            className="font-display text-bronze decoration-bronze/40 hover:decoration-bronze mt-14 inline-block text-3xl underline decoration-1 underline-offset-8 transition-colors md:text-5xl"
          >
            hello@alusi.ai
          </a>
        </Reveal>

        <Reveal delay={360}>
          <p className="text-ivory/60 mt-12 text-xs tracking-[0.3em] uppercase">
            Lagos, Nigeria · Working worldwide
          </p>
        </Reveal>
      </div>
    </section>
  );
}
