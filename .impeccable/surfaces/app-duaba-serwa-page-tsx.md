---
version: 1
slug: "app-duaba-serwa-page-tsx"
primary_target: "app/duaba-serwa/page.tsx"
related_targets: ["components/DuabaSerwaProposal.tsx","components/DuabaSerwaProposal.module.css","components/DuabaSerwaFilm.tsx"]
---

Scope and mode
- Existing-world refinement of app/duaba-serwa/page.tsx with exactly five sections.
- Persuade mode: a private client proposal for Duaba Serwa's founder and senior brand/marketing decision-makers.
- PRODUCT.md and DESIGN.md remain the global authorities. This route preserves their incumbent world and does not change global tokens.

Composition and content
1. Hero: reuse HomeLanding.module.css for the film-left/text-right composition. Keep the supplied positioning copy and bold “African Luxury | Noble Femininity | Sculptural Craft” pillars.
2. Creative Direction: use the shared editorial section structure. Present the supplied overview and five keyboard-accessible disclosure rows with their supplied one-sentence descriptions. Place the Duaba portrait below the text grid in a restrained landscape crop.
3. Archetypes: use the shared editorial section structure with the supplied `ARCHETYPES` heading and two supplied paragraphs about founders, cultural figures, exceptional women, and perception-shaping partnerships. Preserve the user-provided fashion-editorial-dusk.webp landscape visual below the text grid.
4. Case Study — Tapestry: place this section immediately before Media Buying. Use the supplied heading and paragraph exactly, followed by the user-provided artist-studio visual served as tapestry-case-study.webp.
5. Media Buying: use the shared editorial section structure. Keep `MEDIA BUYING` as the section heading, the supplied best-product statement as the lead, and the growth-lever explanation below it.

Shared layout and responsive rules
- All content sections after the hero use the same structure: small numbered label, left-hand title, right-hand copy, and a full-width visual below when one is supplied.
- Retain the homepage's black ground, warm ivory, Eczar statements, Space Grotesk copy, fine rules, approved Alusi wordmark, and 12px media radii.
- Keep no navigation region, chapter index, appended footer, or extra proposal interface. The small Alusi home link and skip-to-content link remain.
- At 900px and below, stack the homepage hero at full width. At 767px and below, stack every editorial grid into a single reading column while preserving the same label-title-copy-media order.

Film behavior and provenance
- Use public/duaba-serwa/opening-film.mp4: the full approximately 20-second, 1920×1080 H.264/AAC film with original audio.
- Attempt audible playback while visible. If browser policy rejects sound before interaction, continue muted and enable original audio at full volume on the first pointer or keyboard interaction while the film is visible.
- Loop inline, preload automatically, pause offscreen, and respect reduced-motion preferences. Render no play, pause, sound buttons, or native controls.
- Preserve the poster, load-error link, noscript fallback, descriptive image alternatives, lazy loading, and provenance sidecars.

Completion evidence
- Desktop, tablet, and mobile checks confirmed five sections, consistent editorial structure, five working disclosures, automatic playback, audible playback when permitted, no controls, no navigation, loaded imagery, no horizontal overflow, and no page errors.
