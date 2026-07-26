# Typography pairing lab

Use this after `style-diversity-matrix.md`, `typography-systems.md`, and `font-selection-matrix.md`, before `type-recipes.md`.

This file connects style lane to concrete type pairing behavior. It prevents Stark from reusing the same pleasant display/body/mono trio across unrelated products.

## Output Contract

```md
Typography pairing brief
- Style lane:
- Product job:
- Density:
- Display role:
- Body/UI role:
- Mono/data role:
- Pairing archetype:
- Concrete free stack:
- Licensed target if available:
- Numeric/data behavior:
- Loading/subset plan:
- Variable/motion rule:
- Rejected pairing:
- QA checks:
```

## Pairing Archetypes

| Archetype | Use For | Shape | Avoid |
|---|---|---|---|
| Editorial contrast | editorial archive, campaign, premium reports | expressive serif display + quiet sans + sparse mono | dense tables and form-heavy flows |
| Technical precision | devtools, docs, infra, agents | precise sans + real mono | all-mono paragraphs |
| Operational clarity | dashboards, CRM, admin, support | compact UI sans + tabular/mono figures | display faces in rows |
| Trust-readable | checkout, security, finance, healthcare | calm sans or warm restrained serif + stable numbers | novelty near risk |
| Studio utility | editors, builders, canvas tools | quiet UI face + mono labels/measurements | branded chrome competing with canvas |
| Warm creator | consumer, education, creator tools | expressive friendly display + highly readable body | cute body text and weak contrast |
| Luxury restraint | portfolio, premium product, object showroom | refined serif/display + warm quiet body | fake luxury spacing or tiny caps |
| Civic/system | public service, mobile tasks, forms | native/system or sturdy sans | custom type that harms scaling |
| Kinetic display | type-as-hero, experimental poster | variable/display face as object + quiet UI | animated body, pricing, warnings |

## Style-Lane Pairing Matrix

| Style Lane | Pairing Archetype | Free Stack | Licensed Target | Numeric/Data Rule | Motion Rule |
|---|---|---|---|---|---|
| Operational ink | Operational clarity | IBM Plex Sans + IBM Plex Mono | ABC Diatype + Diatype Mono | tabular figures for metrics, mono IDs/times | no type motion in rows |
| Trust ledger | Trust-readable | Source Sans 3 + IBM Plex Mono, Manrope + JetBrains Mono | GT America + GT America Mono | tabular prices, aligned decimals, visible units | no motion in legal/risk text |
| Studio workbench | Studio utility | Geist + Geist Mono, IBM Plex Sans + IBM Plex Mono | Sohne + Sohne Mono | mono dimensions, shortcuts, coordinates | only selection/tool feedback |
| Cinematic proof | Editorial/technical contrast | Bricolage Grotesque + Manrope + JetBrains Mono, Newsreader + Geist + Geist Mono | PP Editorial New + PP Neue Montreal + mono | mono proof labels/timecode, tabular counters | display reveal only |
| Editorial archive | Editorial contrast | Newsreader + Geist + Geist Mono, Instrument Serif + Geist | PP Editorial New + PP Neue Montreal | mono metadata, oldstyle only in prose | light section/title reveal |
| Industrial command | Technical precision | IBM Plex Sans + IBM Plex Mono, Geist + Geist Mono | ABC Diatype + Diatype Mono, Sohne Mono | mono logs, tabular durations/status | snappy terminal/status motion only |
| Product showroom | Luxury restraint | Fraunces + Manrope + JetBrains Mono, Instrument Serif + Geist | GT Sectra + GT America | tabular specs, sparse mono labels | inspect/compare labels only |
| Playful instrument | Warm creator | Bricolage Grotesque + Nunito Sans + JetBrains Mono | Satoshi + playful display if licensed | tabular progress/points only when compared | soft display/label feedback |
| Civic utility | Civic/system | system UI, Source Sans 3, IBM Plex Sans | platform/system first | tabular dates/case numbers | minimal, preserve focus |
| Experimental poster | Kinetic display | Fraunces + Geist, Bricolage Grotesque + Manrope | NaN Holo/Reckless/Migra + neutral sans | mono metadata only | display/type-as-object only |

## Density Rules

| Density | Display Rule | Body/UI Rule | Mono/Data Rule |
|---|---|---|---|
| Campaign | display can carry identity | body still quiet and readable | metadata/proof only |
| Product page | display anchors first viewport/sections | UI labels stay stable | proof labels, IDs, timecode |
| Dashboard | display mostly absent | compact UI face owns hierarchy | tabular figures and IDs |
| Editor | display limited to welcome/gallery | chrome uses one quiet UI family | dimensions, shortcuts, coordinates |
| Checkout/form | restrained headings | readable labels/errors/help text | prices, invoice/order IDs |
| Mobile task | native or sturdy sans | platform scale and touch readability | minimal, avoid tiny caps |

## Concrete Selection Heuristic

1. Start with the style lane.
2. Choose the pairing archetype.
3. Decide whether the UI is dense, narrative, risky, or object-led.
4. Pick the smallest stack that gives display/body/data roles.
5. Reject the obvious generic pair for this lane.
6. Define numeric behavior before implementation.
7. Define loading/subsetting before importing.

## Loading And Performance

- Use native/system fonts for civic, native, mobile, high-trust, and performance-first UI unless custom type earns its cost.
- Use one variable family when it can cover several weights or optical sizes without adding multiple files.
- Use two families for most high-craft pages: display + body/UI.
- Add mono only when the UI contains code, logs, IDs, timestamps, prices, coordinates, model/version labels, or data.
- Use `font-display: swap`.
- Use WOFF2 where self-hosting is practical.
- Use `text=` or subsetting for hero-only display words when using provider APIs that support it.
- Avoid preloading every font; preload only critical above-the-fold text if it improves the experience.

## Numeric And OpenType Rules

- Comparable numbers, prices, dates, times, metrics, and percentages: `font-variant-numeric: tabular-nums;`
- Editorial prose can use proportional or oldstyle numbers if numbers are not compared.
- Dense operational UI should keep units visible and aligned.
- IDs, hashes, coordinates, logs, CLI commands, and timecodes can use mono.
- Do not use mono for paragraph prose unless the product is explicitly terminal/editor/industrial.

## Variable Font And Motion Rules

Use variable axes when they serve the concept:

- weight/grade hover for a hero word
- optical size for display vs text
- width axis for type-as-hero or compact technical labels
- slight grade/weight change for selected nav only if it does not shift layout

Avoid:

- animating body copy, tables, prices, legal, warnings, errors, logs
- scroll-tied type unless type is the main object
- axes that change width in dense controls unless dimensions are fixed
- variable files that are larger than two static cuts for the actual design

## Rejection Examples

- Operational ink rejected `Fraunces + Manrope` because it slows row scanning.
- Trust ledger rejected playful display because money/security copy needs boring confidence.
- Studio workbench rejected cinematic display because canvas and controls must stay dominant.
- Cinematic proof rejected all-mono because it makes proof feel technical but not premium.
- Editorial archive rejected generic Geist-only because the content needs a stronger reading voice.
- Civic utility rejected custom display because platform scaling and clarity matter more.

## QA Checks

- The type pairing matches the chosen style lane.
- Display/body/mono roles are distinct and not overused.
- Long labels, buttons, filenames, IDs, and localized strings fit.
- Dense rows compare quickly with tabular figures.
- Risk, price, legal, warning, and error copy stays readable.
- Fallback fonts do not produce severe layout shift.
- Font loading never hides critical text.
- Important text is real HTML, not baked into media/Rive/Lottie.
- The rejected pairing is named.

## Source Anchors

- Apple HIG typography guidance emphasizes legibility, hierarchy, brand/style expression, Dynamic Type, and testing custom choices in context.
- web.dev font guidance recommends WOFF2, limiting font usage, `font-display`, subsetting, and variable fonts when they replace multiple files.
- MDN documents `font-display`, variable fonts, and `font-variant-numeric` including tabular figures.
- Google Fonts CSS2 API supports multiple families, variable axes, `text=` subsets, and `display=swap`.
