import Reveal from "./Reveal";
import styles from "./ObiageriLanding.module.css";

const codes = [
  {
    src: "/obiageri/fitting.webp",
    alt: "A stylist adjusts the hand-finished cuff of an ivory Obiageri jacket",
    title: "Private fitting",
    note: "Lineage",
    width: 1122,
    height: 1402,
  },
  {
    src: "/obiageri/wardrobe.webp",
    alt: "A dark mahogany wardrobe holding a coordinated collection of Obiageri looks",
    title: "Inherited wardrobe",
    note: "Discretion",
    width: 1122,
    height: 1402,
  },
  {
    src: "/obiageri/interior.webp",
    alt: "Obiageri tailoring photographed in an intimate heritage interior",
    title: "After dark",
    note: "Access",
    width: 1672,
    height: 941,
  },
  {
    src: "/obiageri/ceremony.webp",
    alt: "Obiageri figures gathered in a ceremonial tableau",
    title: "Ceremonial tableau",
    note: "Belonging",
    width: 1672,
    height: 941,
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

export default function ObiageriLanding() {
  return (
    <div className={styles.page}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <a href="/" aria-label="Alusi home" className={styles.logoLink}>
          <img src="/alusi-wordmark.png" alt="Alusi" width={800} height={320} />
        </a>

        <nav aria-label="Obiageri case study" className={styles.navLinks}>
          <a href="#strategy">Strategy</a>
          <a href="#world">Visual world</a>
          <a href="#codes">The codes</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className={styles.hero} aria-labelledby="obiageri-title">
          <div className={styles.heroStage}>
            <div className={`${styles.heroVisual} rise`}>
              <img
                src="/obiageri/hero.webp"
                alt="Two Obiageri figures outside a heritage home with a vintage car"
                width={1672}
                height={941}
              />
              <div className={styles.imageShade} />
              <div className={styles.imageMeta}>
                <span>Obiageri</span>
                <span>Creative strategy</span>
              </div>
            </div>

            <div className={styles.heroStatement}>
              <div className="rise" style={{ animationDelay: "80ms" }}>
                <h1 id="obiageri-title" className={styles.heroTitle}>
                  Taste is inherited.
                </h1>
              </div>

              <div className={`${styles.heroCopy} rise`} style={{ animationDelay: "150ms" }}>
                <p>
                  Creative strategy for a Nigerian fashion house shaped by lineage,
                  ceremony and quiet authority.
                </p>
                <div className={styles.heroActions}>
                  <a href="#strategy" className={styles.textLink}>
                    View the strategy <Arrow />
                  </a>
                  <a href="#world" className={styles.textLink}>
                    View the world
                  </a>
                </div>
              </div>
            </div>

            <p
              className={`${styles.heroWordmark} rise`}
              style={{ animationDelay: "220ms" }}
              aria-hidden="true"
            >
              Obiageri
            </p>
          </div>
        </section>

        <section
          id="strategy"
          className={styles.section}
          aria-labelledby="strategy-title"
        >
          <div className={styles.sectionLead}>
            <Reveal>
              <h2 id="strategy-title">Strategy.</h2>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal className={styles.featureVisual}>
              <img
                src="/obiageri/private-room.webp"
                alt="A man in ivory Obiageri tailoring seated in a heritage interior"
                width={1673}
                height={940}
                loading="lazy"
              />
              <div className={styles.imageShade} />
              <div className={styles.imageMeta}>
                <span>Positioning</span>
                <span>Lineage in contemporary form</span>
              </div>
            </Reveal>

            <Reveal delay={90} className={styles.featureCopy}>
              <h3>Inherited, not acquired.</h3>
              <p>
                We positioned Obiageri around habitus: taste carried through lineage,
                familiarity and belonging—not performed for attention.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="world"
          className={styles.section}
          aria-labelledby="world-title"
        >
          <div className={styles.sectionLead}>
            <Reveal>
              <h2 id="world-title">Visual world.</h2>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal className={styles.featureVisual}>
              <img
                src="/obiageri/garden.webp"
                alt="Obiageri figures in a garden beside a heritage home"
                width={1672}
                height={941}
                loading="lazy"
              />
              <div className={styles.imageShade} />
              <div className={styles.imageMeta}>
                <span>Art direction</span>
                <span>Memory, made present</span>
              </div>
            </Reveal>

            <Reveal delay={90} className={styles.featureCopy}>
              <h3>Nostalgia, without reproduction.</h3>
              <p>
                Heritage architecture, amber light and contemporary tailoring create
                a world that feels remembered rather than recreated.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="codes"
          className={`${styles.section} ${styles.codesSection}`}
          aria-labelledby="codes-title"
        >
          <div className={styles.sectionLead}>
            <Reveal>
              <h2 id="codes-title">The codes.</h2>
            </Reveal>
            <Reveal delay={80} className={styles.sectionIntro}>
              <p>Lineage, discretion, ceremony and access.</p>
            </Reveal>
          </div>

          <div className={styles.codeGallery}>
            {codes.map((code, index) => (
              <Reveal key={code.title} delay={index * 45}>
                <article className={styles.codeCard}>
                  <div className={styles.codeMedia}>
                    <img
                      src={code.src}
                      alt={code.alt}
                      width={code.width}
                      height={code.height}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.codeCaption}>
                    <h3>{code.title}</h3>
                    <p>{code.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <img
            className={styles.closingImage}
            src="/obiageri/house.webp"
            alt="The Obiageri house at dusk"
            width={1456}
            height={816}
            loading="lazy"
          />
          <div className={styles.closingShade} />
          <img
            className={styles.closingCrest}
            src="/obiageri/crest.png"
            alt=""
            aria-hidden="true"
            width={1254}
            height={1254}
            loading="lazy"
          />
          <Reveal className={styles.closingInner}>
            <p>Born to live a good life.</p>
            <h2 id="closing-title">Obiageri</h2>
          </Reveal>
        </section>
      </main>

      <footer id="site-footer" className={styles.footer}>
        <a href="/" aria-label="Alusi home" className={styles.footerLogo}>
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
