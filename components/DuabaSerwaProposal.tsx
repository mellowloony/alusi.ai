import DuabaSerwaFilm from "./DuabaSerwaFilm";
import ResponsivePicture from "./ResponsivePicture";
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

const roadmap = [
  {
    title: "Month 1 — Build & Launch",
    items: [
      "Establish the creative direction",
      "Develop campaign and social content",
      "Begin consistent content rollout",
      "Test multiple creative formats and messaging angles",
    ],
  },
  {
    title: "Month 2 — Optimize & Expand",
    items: [
      "Analyze content and audience performance",
      "Refine creative based on data",
      "Launch strategic brand and influencer partnerships",
      "Implement email marketing and retention strategy",
      "Expand into additional marketing channels",
    ],
  },
  {
    title: "Month 3 — Scale",
    items: [
      "Double down on the strongest-performing creative",
      "Increase investment in proven channels",
      "Scale partnerships, media, and retention initiatives",
      "Build repeatable systems for sustained growth",
    ],
  },
];

export default function DuabaSerwaProposal() {
  return (
    <div className={home.page}>
      <a className={home.skipLink} href="#proposal-content">Skip to content</a>
      <header className={styles.header}>
        <a href="/" aria-label="Alusi home" className={home.logoLink}>
          <ResponsivePicture
            src="/alusi-wordmark.png"
            alt="Alusi"
            width={800}
            height={320}
            widths={[160, 320, 640]}
            sizes="80px"
            loading="eager"
            avif={false}
          />
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
              <ResponsivePicture
                src="/alusi-wordmark.png"
                alt=""
                width={800}
                height={320}
                widths={[160, 320, 640]}
                sizes="(max-width: 900px) 55vw, min(40vw, 304px)"
                ariaHidden
                avif={false}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.splitSection} ${styles.creativeSection}`} aria-labelledby="direction-title">
          <figure className={`${styles.sectionVisual} ${styles.creativeVisual}`}>
            <ResponsivePicture
              src="/duaba-serwa/duaba-portrait.webp"
              alt="Duaba Serwa sculptural womenswear with pleated sleeves and triangular folded details"
              width={2000}
              height={3000}
              widths={[640, 960, 1400]}
              sizes="(max-width: 900px) calc(100vw - 40px), min(42vw, 496px)"
              loading="lazy"
              fetchPriority="low"
            />
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

        <section className={styles.partnershipsSection} aria-labelledby="partnerships-title">
          <div className={`${styles.splitSection} ${styles.partnershipsRow}`}>
            <figure className={styles.sectionVisual}>
              <ResponsivePicture
                src="/duaba-serwa/fashion-editorial-dusk.webp"
                alt="Woman in a sculptural copper dress walking through a glass atrium at dusk"
                width={2112}
                height={1168}
                widths={[640, 960, 1440, 1920]}
                sizes="(max-width: 900px) calc(100vw - 40px), min(50vw, 752px)"
                loading="lazy"
                fetchPriority="low"
              />
            </figure>
            <div className={styles.sectionStatement}>
              <div className={styles.sectionLabel}>03 / PARTNERSHIPS</div>
              <h2 id="partnerships-title">PARTNERSHIPS</h2>
              <div className={styles.sectionCopy}>
                <h3>Archetypes</h3>
                <p>The people associated with Duaba Serwa should feel like natural extensions of the brand’s world. We will define the right archetypes — founders, cultural figures, and women doing exceptional things — whose identity, taste, and ambition reinforce what the brand represents.</p>
                <p>The right partnerships shape perception. By consistently placing Duaba Serwa around the right people, communities, and cultural moments, we expand the brand’s universe and build stronger associations around it.</p>
              </div>
            </div>
          </div>

          <div className={styles.partnershipDivider} aria-hidden="true">
            <span>Partnership case study</span>
            <span>01 / Tapestry</span>
          </div>

          <div className={`${styles.splitSection} ${styles.partnershipsRow} ${styles.caseStudyRow}`}>
            <figure className={styles.sectionVisual}>
              <ResponsivePicture
                src="/duaba-serwa/tapestry-case-study.webp"
                alt="Woman in a sculptural copper dress seated in an artist’s studio surrounded by painted portraits"
                width={1677}
                height={938}
                widths={[640, 960, 1440]}
                sizes="(max-width: 900px) calc(100vw - 40px), min(50vw, 752px)"
                loading="lazy"
                fetchPriority="low"
              />
            </figure>
            <div className={styles.sectionStatement}>
              <div className={styles.sectionLabel}>PARTNERSHIP CASE STUDY</div>
              <h3 id="tapestry-title" className={styles.caseStudyTitle}>TAPESTRY</h3>
              <div className={styles.sectionCopy}>
                <p>Tapestry can become a platform for spotlighting women through their craft, stories, and influence. Rather than chasing celebrity, partnerships become a way to deepen the collection’s narrative — using each collaborator to expand Duaba Serwa’s world, lore, and cultural relevance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mediaSection} aria-labelledby="media-title">
          <div className={styles.sectionLabel}>04 / MEDIA BUYING</div>
          <div className={styles.mediaGrid}>
            <h2 id="media-title">MEDIA BUYING</h2>
            <div className={styles.sectionCopy}>
              <p>The best product in the world means little if the world never sees it.</p>
              <p>Media buying becomes a key growth lever — putting Duaba Serwa in front of people who may never have discovered the brand organically, and turning strong creative into measurable reach, demand, and conversion.</p>
            </div>
          </div>
        </section>

        <section className={styles.roadmapSection} aria-labelledby="roadmap-title">
          <div className={styles.sectionLabel}>05 / ROADMAP</div>
          <div className={styles.mediaGrid}>
            <h2 id="roadmap-title">90-DAY SCALING ROADMAP</h2>
            <div className={styles.sectionCopy}>
              <p>A structured growth plan designed to build, test, optimize, and scale.</p>
            </div>
          </div>
          <ol className={styles.roadmapMonths}>
            {roadmap.map((month, index) => (
              <li className={styles.roadmapMonth} key={month.title}>
                <div className={styles.monthHeading}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{month.title}</h3>
                </div>
                <ul>
                  {month.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </li>
            ))}
          </ol>
          <p className={styles.roadmapThroughout}>
            <strong>Throughout all 90 days:</strong>
            <span>continuous testing, iteration, and optimization to identify what the market responds to and scale what works.</span>
          </p>
        </section>
      </main>
    </div>
  );
}
