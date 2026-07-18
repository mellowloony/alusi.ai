import Reveal from "./Reveal";
import { SectionHeader } from "./Mark";

const services = [
  {
    number: "1",
    title: "Brand Experiences",
    body: "Identity systems. Brand worlds. Launch narratives that carry weight.",
  },
  {
    number: "2",
    title: "Campaigns",
    body: "Cinematic, AI-assisted production. From prompt to picture-lock.",
  },
  {
    number: "3",
    title: "Content Systems",
    body: "Always-on engines. Scripts, series, formats that compound.",
  },
];

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="border-ivory/10 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <div id="services-title">
            <SectionHeader index="02" title="What We Build" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-3 md:gap-10">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 110}>
              <article className="border-ivory/10 border-t pt-8">
                <p aria-hidden="true" className="text-bronze font-body text-sm">
                  {service.number}
                </p>
                <h3 className="font-display mt-5 text-2xl md:text-3xl">
                  {service.title}
                </h3>
                <p className="text-ivory/70 mt-5 leading-relaxed">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
