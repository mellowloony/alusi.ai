import Reveal from "./Reveal";
import { SectionHeader } from "./Mark";

const opening = [
  "Most AI content looks the same.",
  "Same gradients. Same voice. Same nothing.",
  "The machine has no memory of where you come from.",
];

const closing = [
  "Culture is not decoration. It is data.",
  "African cultural intelligence is a commercial asset — measurable, deployable, compounding.",
];

export default function Thesis() {
  return (
    <section aria-labelledby="thesis-title" className="border-ivory/10 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <div id="thesis-title">
            <SectionHeader index="01" title="The Thesis" />
          </div>
        </Reveal>

        <div className="font-display mt-16 max-w-4xl text-2xl leading-snug md:mt-20 md:text-4xl">
          {opening.map((line, i) => (
            <Reveal key={line} delay={i * 80}>
              <p className="mt-4 first:mt-0 md:mt-5">{line}</p>
            </Reveal>
          ))}
          <Reveal delay={opening.length * 80}>
            <p className="text-bronze mt-4 md:mt-5">We give it one.</p>
          </Reveal>

          <Reveal>
            <hr className="border-ivory/10 my-12 max-w-24 md:my-16" />
          </Reveal>

          {closing.map((line, i) => (
            <Reveal key={line} delay={i * 80}>
              <p className="mt-4 first:mt-0 md:mt-5">{line}</p>
            </Reveal>
          ))}
          <Reveal delay={closing.length * 80}>
            <p className="text-bronze mt-4 md:mt-5">We build with it.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
