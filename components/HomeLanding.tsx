import Reveal from "./Reveal";
import HeroFilm from "./HeroFilm";
import WorkFilm from "./WorkFilm";
import VisitLogger from "./VisitLogger";
import ContactForm from "./ContactForm";
import styles from "./HomeLanding.module.css";

const UWA = "\u00D9w\u00E0";
const MEDIA_VERSION = "0901";

type WorkFilmEntry = {
  src: string;
  poster: string;
  title: string;
  speculative?: boolean;
};

const workFilms: WorkFilmEntry[] = [
  {
    src: "/work-film-01.mp4",
    poster: "/work-film-01-poster.webp",
    title: "Ashluxe",
    speculative: true,
  },
  {
    src: "/work-film-02.mp4",
    poster: "/work-film-02-poster.webp",
    title: "UWA",
  },
  {
    src: "/work-film-03.mp4",
    poster: "/work-film-03-poster.webp",
    title: "Mekallia",
    speculative: true,
  },
  {
    src: "/work-film-04.mp4",
    poster: "/work-film-04-poster.webp",
    title: "Shinzo Brand",
    speculative: true,
  },
  {
    src: "/work-film-05.mp4",
    poster: "/work-film-05-poster.webp",
    title: "Kilentar",
    speculative: true,
  },
  {
    src: "/work-film-06.mp4",
    poster: "/work-film-06-poster.webp",
    title: "Murals.ng",
  },
  {
    src: "/work-film-07.mp4",
    poster: "/work-film-07-poster.webp",
    title: "The Vibe Abuja",
  },
  {
    src: "/work-film-08.mp4",
    poster: "/work-film-08-poster.webp",
    title: "The Vibe Abuja",
  },
  {
    src: "/work-film-09.mp4",
    poster: "/work-film-09-poster.webp",
    title: "Murals.ng",
  },
  {
    src: "/work-film-10.mp4",
    poster: "/work-film-10-poster.webp",
    title: "Edala Development",
    speculative: true,
  },
  {
    src: "/work-film-11.mp4",
    poster: "/work-film-11-poster.webp",
    title: "Spaces.Murals.ng",
  },
  {
    src: "/work-film-12.mp4",
    poster: "/work-film-12-poster.webp",
    title: "Murals.ng",
  },
  {
    src: "/work-film-13.mp4",
    poster: "/work-film-13-poster.webp",
    title: "UWA",
  },
  {
    src: "/work-film-16.mp4",
    poster: "/work-film-16-poster.webp",
    title: "Murals.ng",
  },
  {
    src: "/work-film-17.mp4",
    poster: "/work-film-17-poster.webp",
    title: "The Vibe Abuja",
  },
  {
    src: "/work-film-19.mp4",
    poster: "/work-film-19-poster.webp",
    title: "Skah Lagos",
  },
];

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      className={styles.arrow}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

export default function HomeLanding() {
  return (
    <div className={styles.page}>
      <VisitLogger />

      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <a href="#top" aria-label="Alusi home" className={styles.logoLink}>
          <img src="/alusi-wordmark.png" alt="Alusi" width={800} height={320} />
        </a>

        <nav aria-label="Primary" className={styles.navLinks}>
          <a href="#solutions">Solutions</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className={styles.hero} aria-labelledby="home-title">
          <div className={styles.heroStage}>
            <div className={styles.heroVisual}>
              <HeroFilm />
            </div>

            <div className={styles.heroStatement}>
              <div className="rise" style={{ animationDelay: "80ms" }}>
                <h1 id="home-title" className={styles.heroTitle}>
                  We make ideas impossible to ignore.
                </h1>
              </div>

              <div className={`${styles.heroCopy} rise`} style={{ animationDelay: "150ms" }}>
                <p>
                  Alusi is a creative company for brands with something bigger to say.
                  <br />
                  We shape the idea, build the world, and take it to market.
                </p>
                <div className={styles.heroActions}>
                  <a href="#contact" className={styles.textLink}>
                    Start a project <Arrow />
                  </a>
                  <a href="#work" className={styles.textLink}>
                    View our work
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.heroWordmark} rise`} style={{ animationDelay: "220ms" }}>
              <img
                src="/alusi-wordmark.png"
                alt=""
                aria-hidden="true"
                width={800}
                height={320}
              />
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className={`${styles.section} ${styles.solutionsSection}`}
          aria-labelledby="solutions-title"
        >
          <div className={styles.sectionLead}>
            <Reveal>
              <h2 id="solutions-title">Solutions.</h2>
            </Reveal>
          </div>

          <div className={styles.solutionFeature}>
            <Reveal className={styles.solutionVisual}>
              <a href="/uwa/" aria-label={`Explore ${UWA}`}>
                <img
                  src="/uwa-world-01.webp"
                  alt="A red craft crosses a reflective world towards a monumental passage"
                  width={1672}
                  height={941}
                  loading="lazy"
                />
                <div className={styles.imageShade} />
                <div className={styles.solutionMark}>
                  <img src="/uwa-wordmark.png" alt={UWA} width={1337} height={612} />
                </div>
                <div className={styles.imageMeta}>
                  <span>Alusi solution / {UWA}</span>
                  <span>Creator partnerships</span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={90} className={styles.solutionCopy}>
              <h3>{UWA} extends creator partnerships into new worlds.</h3>
              <p>
                A technology layer for brands and creators to build cinematic
                narratives beyond the limits of traditional production.
              </p>
              <a href="/uwa/" className={styles.buttonLink}>
                Explore {UWA} <Arrow />
              </a>
            </Reveal>
          </div>
        </section>

        <section
          id="strategy"
          className={`${styles.section} ${styles.strategySection}`}
          aria-labelledby="strategy-title"
        >
          <div className={styles.sectionLead}>
            <Reveal>
              <h2 id="strategy-title">Creative strategy</h2>
            </Reveal>
          </div>

          <div className={styles.strategyFeature}>
            <Reveal className={styles.strategyVisual}>
              <a href="/obiageri" aria-label="View the Obiageri strategy case study">
                <img
                  src="/obiageri/hero.webp"
                  alt="Two Obiageri figures outside a heritage home with a vintage car"
                  width={1672}
                  height={941}
                  loading="lazy"
                />
                <div className={styles.imageShade} />
                <div className={styles.imageMeta}>
                  <span>Obiageri / Creative strategy</span>
                  <span>Case study / 001</span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={90} className={styles.strategyCopy}>
              <h3>Inherited taste.</h3>
              <p>For Obiageri, lineage became a positioning system and visual world.</p>
              <a href="/obiageri" className={styles.buttonLink}>
                View the strategy <Arrow />
              </a>
            </Reveal>
          </div>
        </section>

        <section
          id="work"
          className={`${styles.section} ${styles.workSection}`}
          aria-labelledby="work-title"
        >
          <div className={styles.sectionLead}>
            <Reveal>
              <h2 id="work-title">Work made to move people.</h2>
            </Reveal>
            <Reveal delay={80} className={styles.sectionIntro}>
              <p>Strategy, brands, technology and moving image—selected from recent work.</p>
            </Reveal>
          </div>

          <div
            className={styles.workGallery}
            role="region"
            aria-label="Sixteen selected cinematic films"
          >
            {workFilms.map((film, index) => (
              <Reveal key={film.src} delay={(index % 4) * 45} className={styles.workSlide}>
                <article className={styles.workCard}>
                  <figure className={styles.workMedia}>
                    <WorkFilm
                      src={`${film.src}?v=${MEDIA_VERSION}`}
                      poster={`${film.poster}?v=${MEDIA_VERSION}`}
                      className={styles.workFilm}
                    />
                  </figure>
                  <div className={styles.workCaption}>
                    <div>
                      <h3>{film.title}</h3>
                      <p>Direction / Cinematic production</p>
                      {film.speculative ? (
                        <p className={styles.workDisclosure}>Speculative</p>
                      ) : null}
                    </div>
                    <span>{String(index + 1).padStart(2, "0")} / 16</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.contactGrid}>
            <Reveal>
              <h2 id="contact-title">Tell us where to reach you.</h2>
            </Reveal>
            <Reveal delay={80} className={styles.contactCopy}>
              <p>Leave your name and email. We’ll be in touch.</p>
              <ContactForm />
              <p className={styles.contactAlternative}>
                Or reach us directly at{" "}
                <a href="mailto:hello@alusiai.com">hello@alusiai.com</a>.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer id="site-footer" className={styles.footer}>
        <a href="#top" aria-label="Back to top" className={styles.footerLogo}>
          <img src="/alusi-wordmark.png" alt="Alusi" width={800} height={320} />
        </a>
        <div className={styles.footerMeta}>
          <span>&copy; 2026</span>
          <a
            href="https://instagram.com/alusi.ai"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram (opens in a new tab)"
            className={styles.instagramLink}
          >
            Instagram <Arrow />
          </a>
        </div>
      </footer>
    </div>
  );
}
