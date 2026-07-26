# Type recipes

Use this after `typography-systems.md`, `font-selection-matrix.md`, and `../web-fonts.md` when Stark needs a concrete font choice. This file turns the type strategy into a usable recipe with roles, scale, numeric behavior, loading, and traps.

The goal is not to always use unusual fonts. The goal is to make type feel selected, not defaulted.

## Required output

```md
Type recipe
- Surface:
- Type recipe:
- Display:
- Body/UI:
- Mono/data:
- Import/loading:
- Scale:
- Number rule:
- Where the personality lives:
- Where type must stay quiet:
- Banned fallback:
- QA checks:
```

## Free web recipes

Use these when the project does not already have licensed fonts.

| Recipe | Display | Body/UI | Mono/Data | Best for | Avoid |
|---|---|---|---|---|---|
| Editorial proof | Newsreader | Geist | Geist Mono | editorial product pages, docs with narrative, technical essays | dense dashboards, playful consumer |
| Cinematic product | Bricolage Grotesque | Manrope | JetBrains Mono | AI/video/media launches, creative tools, product proof | legal/pricing-heavy pages as the main voice |
| Luxury trust | Fraunces | Manrope | JetBrains Mono | pricing, premium product, portfolio, launch pages | dense tables, tiny labels, long uppercase captions |
| Industrial operations | IBM Plex Sans | IBM Plex Sans | IBM Plex Mono | ops dashboards, internal tools, devops, queues | consumer lifestyle, luxury editorial |
| Technical product | Geist | Geist | Geist Mono | SDKs, developer tools, docs/product hybrid | as the only personality on every landing page |
| Warm creator SaaS | Bricolage Grotesque | Nunito Sans | JetBrains Mono | creator tools, education, friendly onboarding | enterprise admin, high-trust payment |
| Type-as-hero | Fraunces or Bricolage Grotesque | Geist | Geist Mono | posters, brand systems, variable type moments | body copy, warnings, checkout |
| Calm enterprise | Source Sans 3 or IBM Plex Sans | Source Sans 3 or IBM Plex Sans | IBM Plex Mono | readable B2B apps, settings, account screens | high-craft campaign pages needing identity |
| Editorial app | Instrument Serif | Geist | Geist Mono | branded app homes, content products, gallery pages | forms, data rows, log-heavy screens |

## Licensed recipe targets

Only use these when the license exists or the user approves.

| Recipe | Display | Body/UI | Mono/Data | Why |
|---|---|---|---|---|
| Swiss product | PP Editorial New | PP Neue Montreal | PP Neue Montreal Mono | strong editorial display with modern UI calm |
| Premium system | GT Sectra | GT America | GT America Mono | expensive editorial tone plus practical interface |
| Dev craft | Sohne | Sohne | Sohne Mono | precise, polished product UI |
| Industrial studio | ABC Diatype | ABC Diatype | ABC Diatype Mono | confident technical/studio voice |
| Humanist raw | Authentic Sans | Authentic Sans | Authentic Mono | less polished, more handmade/web-native |

## Role rules

### Display

Use display type for:

- hero headline
- section title
- campaign object labels
- brand moments
- large editorial pull lines

Do not use display type for:

- dense table cells
- form labels
- warnings
- legal copy
- long paragraphs
- tiny captions

### Body/UI

Use the body/UI face for:

- paragraphs
- buttons
- nav
- field labels
- menu items
- cards
- toolbars
- repeated controls

The body/UI face is where the product earns trust. It should be quieter than the display face and more readable than the mono face.

### Mono/data

Use mono or tabular figures for:

- code
- logs
- IDs
- timestamps
- prices
- counters
- coordinates
- model/version labels
- short technical metadata

Do not use mono for long body copy unless the product concept is explicitly terminal/editor/industrial and the readability tradeoff is accepted.

## Surface-specific picks

### Developer tool landing

Pick one:

- `Geist + Geist Mono` when the product itself is detailed and the visual system carries identity.
- `Bricolage Grotesque + Manrope + JetBrains Mono` when the landing page needs a warmer, less Vercel-like face.
- `IBM Plex Sans + IBM Plex Mono` when it is infrastructure, observability, CI, security, or ops.

Rule: proof labels and code can be mono; explanatory copy should not be all mono.

### Dashboard / admin / CRM

Pick one:

- `IBM Plex Sans + IBM Plex Mono` for dense operational work.
- `Source Sans 3 + IBM Plex Mono` for neutral enterprise readability.
- Native platform UI fonts for native desktop/mobile.

Rule: no expressive display face inside rows, filters, totals, or bulk-action bars. Use weight, alignment, status color, and tabular figures.

### AI / cinematic product page

Pick one:

- `Bricolage Grotesque + Manrope + JetBrains Mono` for warm creative AI.
- `Newsreader + Geist + Geist Mono` for editorial intelligence.
- `Fraunces + Manrope + JetBrains Mono` for premium or expressive AI.

Rule: let the media/object be dramatic; keep UI labels real and restrained.

### Checkout / pricing / trust

Pick one:

- `Manrope + JetBrains Mono` for clean SaaS pricing.
- `Fraunces + Manrope` only for brand headings, with pricing/legal in Manrope.
- Native platform fonts for app-store/payment-like native flows.

Rule: prices use tabular figures. Error, cancellation, renewal, and risk copy must stay boring and legible.

### Docs / API / platform site

Pick one:

- `Newsreader + Geist + Geist Mono` for editorial docs.
- `Geist + Geist Mono` for technical platform docs.
- `IBM Plex Sans + IBM Plex Mono` for enterprise/devops docs.

Rule: code blocks, copy buttons, anchors, and table text matter more than hero personality.

### Creative editor / canvas app

Pick one:

- `Geist + Geist Mono` for crisp tools.
- `IBM Plex Sans + IBM Plex Mono` for serious pro tools.
- A custom display face only in welcome/project gallery surfaces.

Rule: the canvas wins. Inspectors, layers, dimensions, shortcuts, and toolbars must be stable and quiet.

### Playful consumer / creator onboarding

Pick one:

- `Bricolage Grotesque + Nunito Sans + JetBrains Mono`
- `Fraunces + Manrope` if the playfulness is editorial instead of cute

Rule: playful display type can sell the moment; body copy and controls must not become childish.

## Numeric rules

- Comparable numbers: `font-variant-numeric: tabular-nums;`
- Prices: tabular lining figures; align decimals when comparing.
- Long IDs/hashes: mono, short line height, copy affordance.
- Dates/times: tabular or mono when scanning lists.
- Percentages/metrics: tabular, clear unit, stable width.
- Editorial text: proportional/oldstyle numbers can be fine if not compared.

## Loading/import rules

- Prefer self-hosting and subsetting when the project supports it.
- For Google Fonts CSS API, use `display=swap` and request only needed families/weights.
- Prefer variable fonts when one file replaces many weights and axes are useful.
- Do not load italics, display cuts, or many weights unless they appear in the design.
- Define fallbacks with similar proportions to reduce layout shift.

Example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700&family=Manrope:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
  --font-ui: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

.metric,
.timestamp,
.price {
  font-variant-numeric: tabular-nums;
}
```

## Variable type rules

Variable fonts can raise craft when the axis is part of the concept:

- weight or grade hover on a hero word
- optical size for display vs text
- width axis for compressed technical labels
- scroll-tied headline only when type is the main object

Avoid:

- animating body copy, legal copy, prices, warnings, logs, or table cells
- using variable axes without checking the actual font supports them
- making layout depend on a font axis that can shift text width unpredictably

## Cheap-type red flags

- Generic all-Inter or all-system-ui on a high-craft page.
- Space Grotesk headline plus purple gradient with no stronger idea.
- Display font applied to everything.
- All-mono body copy for a non-terminal product.
- Browser-default buttons and form controls.
- Tiny uppercase labels with poor contrast.
- Hero line breaks left to chance.
- Pricing, legal, warning, or error text in an experimental display face.
- Too many weights and families for a page that needed better hierarchy.

## QA checks

- Hero line breaks look intentional at desktop, tablet, and mobile.
- Buttons fit longest realistic label.
- Captions/labels remain readable on mobile.
- Dense rows do not clip numbers, statuses, or timestamps.
- Data uses tabular figures where comparison matters.
- Focus rings and icons are not hidden by font metrics.
- Fallback fonts do not cause severe layout shift.
- Text in generated images/video/Rive/Lottie is not essential UI.

## Source anchors

- Google Fonts CSS2 API documents family/axis requests and `display=swap`: https://developers.google.com/fonts/docs/css2
- MDN `font-variant-numeric` documents tabular numbers, lining numbers, oldstyle numbers, fractions, and related OpenType numeric features: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-numeric
- Google Fonts variable-font docs and catalog should be checked before using axis behavior: https://fonts.google.com/variablefonts
