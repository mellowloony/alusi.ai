import Reveal from "./Reveal";
import { SectionHeader } from "./Mark";

const instruments = [
  {
    name: "Circle Positioning",
    body: "Where your brand sits in the rooms that matter.",
  },
  {
    name: "The Culture Signal Test",
    body: "Does your brand transmit culture, or just wear it?",
  },
  {
    name: "The Four Positioning Types",
    body: "Cultural. Cool. Imported. Circle. Every brand is one of four. Most don’t know which.",
  },
];

export default function Instruments() {
  return (
    <section
      aria-labelledby="instruments-title"
      className="border-ivory/10 border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <div id="instruments-title">
            <SectionHeader index="03" title="The Instruments" />
          </div>
        </Reveal>

        <Reveal delay={90}>
          <p className="font-display mt-16 max-w-3xl text-2xl leading-snug md:mt-20 md:text-3xl">
            Proprietary frameworks. Built in Lagos. Tested on real brands.
          </p>
        </Reveal>

        <dl className="mt-14 md:mt-16">
          {instruments.map((instrument, i) => (
            <Reveal
              key={instrument.name}
              delay={i * 90}
              className="border-ivory/10 grid gap-3 border-t py-8 md:grid-cols-[2fr_3fr] md:gap-10 md:py-10"
            >
              <dt className="font-display text-xl md:text-2xl">
                {instrument.name}
              </dt>
              <dd className="text-ivory/70 leading-relaxed md:pt-1.5">
                {instrument.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
