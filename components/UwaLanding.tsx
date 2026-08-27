import Reveal from "./Reveal";
import Showreel from "./Showreel";
import VisitLogger from "./VisitLogger";
import Waitlist from "./Waitlist";

const UWA = "\u00D9w\u00E0";
const SHELL =
  "mx-auto w-full max-w-[94rem] px-5 sm:px-8 md:px-10 xl:px-14";
const OUTLINE_CTA =
  "inline-flex min-h-11 items-center justify-center border border-ivory/30 px-5 py-3 font-mono text-[0.62rem] tracking-[0.19em] uppercase transition-[border-color,background-color,color] duration-300 hover:border-ivory hover:bg-ivory hover:text-ground";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-[0.625rem] leading-none tracking-[0.22em] uppercase text-ivory/55">
      {children}
    </p>
  );
}

export default function UwaLanding() {
  return (
    <div className="relative bg-ground text-ivory">
      <VisitLogger />

      <header className="absolute inset-x-0 top-0 z-30">
        <nav
          aria-label="Ùwà navigation"
          className={`${SHELL} flex items-center justify-between py-5 md:py-6`}
        >
          <a href="/" aria-label="Alusi home" className="inline-flex items-center">
            <img
              src="/alusi-wordmark.png"
              alt="Alusi"
              width={800}
              height={320}
              className="h-9 w-auto md:h-10"
            />
          </a>
          <a href="#access" className={`${OUTLINE_CTA} px-4 md:px-5`}>
            Request access
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="uwa-title" className="min-h-svh">
          <div
            className={`${SHELL} flex min-h-svh flex-col justify-center pb-8 pt-28 sm:pb-10 sm:pt-32 lg:pb-12 lg:pt-28`}
          >
            <div className="flex flex-col gap-10 lg:gap-12">
              <div className="flex flex-col gap-9 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12 xl:gap-x-16">
                <div className="rise relative aspect-video overflow-hidden rounded-[10px] border border-ivory/10 bg-panel lg:col-span-7">
                  <Showreel />
                </div>

                <div
                  className="rise lg:col-span-4 lg:col-start-9"
                  style={{ animationDelay: "120ms" }}
                >
                  <h1
                    id="uwa-title"
                    className="max-w-[19ch] font-display text-[clamp(1.7rem,2.4vw,2.55rem)] leading-[1.2] tracking-[-0.015em]"
                  >
                    {UWA} — the technology layer for creator partnerships.
                  </h1>
                  <p className="mt-6 font-mono text-[0.72rem] leading-[1.75] text-ivory/75 sm:text-xs">
                    In Igbo, <em>ùwà</em> means world.
                  </p>
                  <p className="mt-4 max-w-[66ch] font-mono text-[0.72rem] leading-[1.75] text-ivory/75 sm:text-xs">
                    {UWA} brings creators and brands into new worlds — expanding
                    how stories can be imagined, experienced and brought to life.
                  </p>
                  <a href="#world" className={`${OUTLINE_CTA} mt-8`}>
                    Enter the world
                  </a>
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
                <h2
                  className="rise lg:col-span-7"
                  style={{ animationDelay: "240ms" }}
                >
                  <img
                    src="/uwa-wordmark.png"
                    alt={UWA}
                    width={1337}
                    height={612}
                    className="h-auto w-[clamp(10.5rem,24vw,24rem)] select-none"
                  />
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section
          id="world"
          aria-labelledby="world-title"
          className="border-t border-ivory/10 py-20 sm:py-24 lg:py-28 xl:py-32"
        >
          <div
            className={`${SHELL} grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-12 xl:gap-x-16`}
          >
            <Reveal className="lg:col-span-7">
              <Eyebrow>01 / World study</Eyebrow>
              <h2
                id="world-title"
                className="mt-6 max-w-[19ch] font-display text-[clamp(1.8rem,2.4vw,2.75rem)] leading-[1.2] tracking-[-0.015em]"
              >
                A world built for Alusi.
              </h2>

              <figure className="relative mt-8 aspect-video overflow-hidden rounded-[10px] border border-ivory/10 sm:mt-10">
                <img
                  src="/uwa-world-01.webp"
                  alt="A red craft approaches a monumental passage in the Alusi world"
                  width={1672}
                  height={941}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_64%,rgba(0,0,0,0.68)_100%)]" />
                <figcaption className="absolute inset-x-4 bottom-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.55rem] leading-tight tracking-[0.14em] uppercase text-ivory/65 sm:inset-x-5 sm:bottom-4 sm:justify-between">
                  <span>The crossing</span>
                  <span className="ml-auto text-right">World fragment / 01</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-[68ch] font-mono text-[0.72rem] leading-[1.8] text-ivory/70 sm:text-xs">
                The Alusi narrative is an unfolding story. For this chapter, we
                began with “Ụwa bụ ahịa”—the world is a marketplace—and imagined
                a fifth passage between ụwà and ala mmụọ. The crossing is one
                fragment from that universe.
              </p>
              <a
                href="https://www.instagram.com/p/Dbql1tEiiAz/"
                target="_blank"
                rel="noreferrer"
                className={`${OUTLINE_CTA} mt-7`}
              >
                Watch the film ↗
              </a>
            </Reveal>
          </div>
        </section>

        <section
          id="access"
          aria-labelledby="access-title"
          className="flex min-h-[92svh] flex-col border-t border-ivory/10 py-20 sm:py-24 lg:py-28 xl:py-32"
        >
          <div
            className={`${SHELL} grid gap-y-9 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10 xl:gap-x-16`}
          >
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <Eyebrow>02 / Access</Eyebrow>
              <h2
                id="access-title"
                className="mt-6 max-w-[19ch] font-display text-[clamp(1.8rem,2.4vw,2.75rem)] leading-[1.2] tracking-[-0.015em]"
              >
                The Future Awaits
              </h2>
            </Reveal>

            <Reveal
              delay={40}
              className="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center"
            >
              <figure className="relative aspect-video overflow-hidden rounded-[10px] border border-ivory/10">
                <img
                  src="/uwa-world-03.webp"
                  alt="The chosen traveller inside the Alusi world"
                  width={1672}
                  height={941}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_64%,rgba(0,0,0,0.65)_100%)]" />
                <figcaption className="absolute inset-x-4 bottom-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.55rem] leading-tight tracking-[0.14em] uppercase text-ivory/65 sm:inset-x-5 sm:bottom-4 sm:justify-between">
                  <span>The chosen</span>
                  <span className="ml-auto text-right">World fragment / 03</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal
              delay={80}
              className="lg:col-span-4 lg:col-start-9 lg:row-start-2"
            >
              <p className="max-w-[68ch] font-mono text-[0.72rem] leading-[1.8] text-ivory/70 sm:text-xs">
                {UWA} brings brands and creators together to make ambitious
                cultural stories possible — expanding what brands can imagine and
                where creators can exist.
              </p>
              <p className="mt-5 max-w-[68ch] font-mono text-[0.72rem] leading-[1.8] text-ivory/90 sm:text-xs">
                Real creators. Bigger brand worlds. Built with permission.
              </p>
              <p className="mt-9 font-mono text-[0.625rem] tracking-[0.2em] uppercase text-ivory/60">
                Request access
              </p>
              <Waitlist
                placeholder="Enter your email"
                submitLabel="Request access"
                successMessage="Received. We’ll be in touch with the next step."
                layout="split"
                className="max-w-none"
              />
            </Reveal>
          </div>

          <Reveal className={`${SHELL} mt-auto pt-24 lg:pt-32`}>
            <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
              <img
                src="/uwa-wordmark.png"
                alt={UWA}
                width={1337}
                height={612}
                className="h-auto w-[clamp(10.5rem,24vw,24rem)] select-none lg:col-span-7"
              />
              <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-ivory/12 pt-4 font-mono text-[0.58rem] tracking-[0.13em] uppercase text-ivory/45 lg:col-span-4 lg:col-start-9">
                <span>Alusi.ai</span>
                <span>Lagos, Nigeria / 2026</span>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
