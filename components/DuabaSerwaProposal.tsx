import DuabaSerwaFilm from "./DuabaSerwaFilm";
import home from "./HomeLanding.module.css";
import styles from "./DuabaSerwaProposal.module.css";

const deliverables = [
  {
    title: "Visual Identity + Aesthetic Direction",
    description: "Define the brand’s visual world, codes, and creative language.",
  },
  {
    title: "Art Direction Playbook",
    description: "Create clear guidelines for how the brand should consistently look and feel.",
  },
  {
    title: "Campaign Concepts + Visual Storytelling",
    description: "Develop campaign ideas rooted in strong narratives and brand storytelling.",
  },
  {
    title: "Shoot + Content Direction",
    description: "Direct the creative approach for shoots, social content, and campaign assets.",
  },
  {
    title: "Ongoing Creative Oversight",
    description: "Review and guide creative output to maintain consistency and quality.",
  },
];

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
            <div className={styles.deliverables}>
              {deliverables.map((item) => (
                <details key={item.title}>
                  <summary>
                    <span>{item.title}</span>
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4 7l5 5 5-5" /></svg>
                  </summary>
                  <p>{item.description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.strategySection} ${styles.archetype}`} aria-labelledby="archetype-title">
          <div className={styles.sectionLabel}>03 / ARCHETYPE</div>
          <div className={styles.archetypeGrid}>
            <div className={styles.strategyLead}>
              <p>THE IDEAL PARTNERSHIP</p>
              <h2 id="archetype-title">Expand the Duaba world through aligned influence.</h2>
            </div>
            <div className={styles.strategyCopy}>
              <p>The right partnership does more than place Duaba Serwa in front of an audience. It brings the house into a world of aligned taste, cultural relevance, and credible influence.</p>
              <p>We will identify collaborators whose point of view reflects the brand, then shape campaigns that feel like a natural extension of Duaba’s visual language. New audiences discover the house through people they already trust.</p>
            </div>
          </div>
          <figure className={styles.archetypeImage}>
            <img src="/duaba-serwa/color-fold.webp" alt="Duaba Serwa portrait with sculptural pleats in orange, blue and gold" width={2000} height={3000} loading="lazy" decoding="async" />
          </figure>
        </section>

        <section className={`${styles.strategySection} ${styles.mediaBuying}`} aria-labelledby="media-title">
          <div className={styles.sectionLabel}>04 / MEDIA BUYING</div>
          <div className={styles.mediaGrid}>
            <h2 id="media-title">Imagine having the best product in the world. You do the world a disservice if nobody knows about it.</h2>
            <div className={styles.strategyCopy}>
              <p>Media buying is one of our biggest growth levers. It ensures the right creative reaches the right audience with enough consistency to build recognition, generate demand, and turn attention into measurable growth.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
