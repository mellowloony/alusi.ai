import Reveal from "./Reveal";
import { SectionHeader } from "./Mark";

/* Ụ̀wà · Àṣẹ · Ọ̀nà — set with explicit code points so the combining
   grave (U+0300) above the dotted-below vowels survives any re-encoding */
export const DIACRITIC_LINE =
  "\u1EE4\u0300w\u00E0 \u00B7 \u00C0\u1E63\u1EB9 \u00B7 \u1ECC\u0300n\u00E0";

const lines = [
  "In Igbo cosmology, alusi are forces.",
  "Spirit intelligences, each with a domain — rivers, markets, boundaries, harvests.",
  "Held in respect. Held to function.",
];

const creed = ["That is how we treat AI.", "Not magic. Not a mascot."];

export default function Name() {
  return (
    <section aria-labelledby="name-title" className="border-ivory/10 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <div id="name-title">
            <SectionHeader index="04" title="The Name" />
          </div>
        </Reveal>

        <div className="font-display mt-16 max-w-4xl text-2xl leading-snug md:mt-20 md:text-4xl">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 80}>
              <p className="mt-4 first:mt-0 md:mt-5">{line}</p>
            </Reveal>
          ))}

          <Reveal>
            <hr className="border-ivory/10 my-12 max-w-24 md:my-16" />
          </Reveal>

          {creed.map((line, i) => (
            <Reveal key={line} delay={i * 80}>
              <p className="mt-4 first:mt-0 md:mt-5">{line}</p>
            </Reveal>
          ))}
          <Reveal delay={creed.length * 80}>
            <p className="text-bronze mt-4 md:mt-5">
              A force. Given a domain. Governed. Put to work for culture.
            </p>
          </Reveal>
        </div>

        {/* Diacritics as graphic punctuation, full display scale */}
        <Reveal>
          <p
            aria-hidden="true"
            className="font-display text-bronze/80 mt-24 text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.25] tracking-tight select-none md:mt-32"
          >
            {DIACRITIC_LINE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
