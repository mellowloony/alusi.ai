import DuabaSerwaFilm from "./DuabaSerwaFilm";
import home from "./HomeLanding.module.css";
import styles from "./DuabaSerwaProposal.module.css";

export default function DuabaSerwaProposal() {
  return (
    <div className={home.page}>
      <a className={home.skipLink} href="#proposal-content">Skip to content</a>
      <header className={styles.header}>
        <a href="/" aria-label="Alusi home" className={home.logoLink}>
          <img src="/alusi-wordmark.png" alt="Alusi" width={800} height={320} />
        </a>
      </header>

      <main id="proposal-content">
        <section className={`${home.hero} ${styles.hero}`} aria-labelledby="duaba-title">
          <div className={`${home.heroStage} ${styles.heroStage}`}>
            <div className={`${home.heroVisual} ${styles.heroVisual}`}>
              <DuabaSerwaFilm />
            </div>
            <div className={`${home.heroStatement} ${styles.heroStatement}`}>
              <h1 id="duaba-title" className={home.heroTitle}>Duaba Serwa</h1>
              <div className={home.heroCopy}>
                <p>Duaba Serwa sits at the intersection of African luxury, feminine power, and artisanal craft.</p>
                <p>Our task is to sharpen the brand position, define the audience archetype, and build a message the market can immediately recognize.</p>
              </div>
              <p className={styles.pillars}>
                <strong>African Luxury</strong><span aria-hidden="true"> | </span>
                <strong>Noble Femininity</strong><span aria-hidden="true"> | </span>
                <strong>Sculptural Craft</strong>
              </p>
            </div>
            <div className={`${home.heroWordmark} ${styles.heroWordmark}`}>
              <img src="/alusi-wordmark.png" alt="" aria-hidden="true" width={800} height={320} />
            </div>
          </div>
        </section>

        <section className={styles.positioning} aria-labelledby="direction-title">
          <figure className={styles.portrait}>
            <img src="/duaba-serwa/duaba-portrait.webp" alt="Duaba Serwa sculptural womenswear with pleated sleeves and triangular folded details" width={2000} height={3000} loading="lazy" decoding="async" />
          </figure>
          <div className={styles.positioningCopy}>
            <h2 id="direction-title">CREATIVE DIRECTION</h2>
            <p>We will define and oversee how Duaba Serwa looks, feels, and expresses itself creatively across every brand touchpoint.</p>
            <ul className={styles.deliverables}>
              {[
                "Visual identity + aesthetic direction",
                "Art direction playbook",
                "Campaign concepts + visual storytelling",
                "Shoot + content direction",
                "Ongoing creative oversight",
              ].map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12m-5-5 5 5-5 5" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.creative} aria-labelledby="creative-title">
          <div className={styles.creativeLead}>
            <h2 id="creative-title">The house in motion.</h2>
            <p>Show the fold, the silhouette and the making. Let movement and detail carry the same recognisable house language across every image.</p>
          </div>
          <div className={styles.imagePair}>
            <img src="/duaba-serwa/color-fold.webp" alt="Duaba Serwa sculptural pleats in orange, blue and gold" width={2000} height={3000} loading="lazy" decoding="async" />
            <img src="/duaba-serwa/gold-fold.webp" alt="Gold Duaba Serwa look with hand-folded triangular details and a sculptural shoulder" width={2000} height={3000} loading="lazy" decoding="async" />
          </div>
        </section>
      </main>
    </div>
  );
}
