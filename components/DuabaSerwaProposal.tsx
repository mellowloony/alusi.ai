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

        <section className={`${styles.splitSection} ${styles.creativeSection}`} aria-labelledby="direction-title">
          <figure className={`${styles.sectionVisual} ${styles.creativeVisual}`}>
            <img src="/duaba-serwa/duaba-portrait.webp" alt="Duaba Serwa sculptural womenswear with pleated sleeves and triangular folded details" width={2000} height={3000} loading="lazy" decoding="async" />
          </figure>
          <div className={styles.sectionStatement}>
            <div className={styles.sectionLabel}>02 / CREATIVE DIRECTION</div>
            <h2 id="direction-title">CREATIVE DIRECTION</h2>
            <div className={styles.sectionCopy}>
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
          </div>
        </section>

        <section className={styles.splitSection} aria-labelledby="archetype-title">
          <figure className={styles.sectionVisual}>
            <img src="/duaba-serwa/fashion-editorial-dusk.webp" alt="Woman in a sculptural copper dress walking through a glass atrium at dusk" width={2112} height={1168} loading="lazy" decoding="async" />
          </figure>
          <div className={styles.sectionStatement}>
            <div className={styles.sectionLabel}>03 / PARTNERSHIPS</div>
            <h2 id="archetype-title">ARCHETYPES</h2>
            <div className={styles.sectionCopy}>
              <p>The people associated with Duaba Serwa should feel like natural extensions of the brand’s world. We will define the right archetypes - founders, cultural figures, and women doing exceptional things, whose identity, taste, and ambition reinforce what the brand represents.</p>
              <p>The right partnerships shape perception. By consistently placing Duaba Serwa around the right people, communities, and cultural moments, we expand the brand’s universe and build stronger associations around it.</p>
            </div>
          </div>
        </section>

        <section className={styles.splitSection} aria-labelledby="tapestry-title">
          <figure className={styles.sectionVisual}>
            <img src="/duaba-serwa/tapestry-case-study.webp" alt="Woman in a sculptural copper dress seated in an artist’s studio surrounded by painted portraits" width={1677} height={938} loading="lazy" decoding="async" />
          </figure>
          <div className={styles.sectionStatement}>
            <div className={styles.sectionLabel}>04 / CASE STUDY</div>
            <h2 id="tapestry-title">CASE STUDY — TAPESTRY</h2>
            <div className={styles.sectionCopy}>
              <p>Tapestry can become a platform for spotlighting women through their craft, stories, and influence. Rather than chasing celebrity, partnerships become a way to deepen the collection’s narrative — using each collaborator to expand Duaba Serwa’s world, lore, and cultural relevance.</p>
            </div>
          </div>
        </section>

        <section className={styles.mediaSection} aria-labelledby="media-title">
          <div className={styles.sectionLabel}>05 / MEDIA BUYING</div>
          <div className={styles.mediaGrid}>
            <h2 id="media-title">MEDIA BUYING</h2>
            <div className={styles.sectionCopy}>
              <p>The best product in the world means little if the world never sees it.</p>
              <p>Media buying becomes a key growth lever — putting Duaba Serwa in front of people who may never have discovered the brand organically, and turning strong creative into measurable reach, demand, and conversion.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
