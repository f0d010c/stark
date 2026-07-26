# Font implementation contract

Use this after `font-selection-matrix.md`, `typography-pairing-lab.md`, and `type-recipes.md` before code imports fonts or writes `@font-face`.

This file turns a chosen type recipe into implementation evidence: delivery mode, fallback metrics, CSS variables, numeric features, loading policy, and rendered text QA. A good type choice still fails if it causes invisible text, layout shift, clipped labels, weak fallback, or expensive unused weights.

## Output contract

```md
Font implementation contract
- Surface and density:
- Type recipe:
- Delivery mode:
- Families/weights/styles:
- Subset or text range:
- CSS variables/classes:
- Fallback stack and metric strategy:
- Numeric/OpenType features:
- Critical/preload policy:
- Framework integration:
- License/privacy boundary:
- Text stress fixtures:
- QA evidence:
- Rejected loading choice:
```

## Delivery modes

| Mode | Use when | Implementation rule | Reject when |
|---|---|---|---|
| System/native | native apps, dense tools, mobile task flows, performance-first surfaces | use platform stack and native type scale | public high-craft page needs stronger brand memory |
| Provider CSS | quick public web prototype or static page | preconnect provider, request only needed families/weights, use `display=swap` | privacy, offline, CSP, or performance needs self-hosting |
| Self-hosted WOFF2 | serious product/site with caching, privacy, or precise fallback needs | `@font-face` with WOFF2, `font-display`, subset, metrics overrides if needed | license does not allow self-hosting |
| Framework font API | Next.js or similar app with built-in optimization | use framework font utilities, CSS variables, subsets, weights, fallback adjustment | project is static HTML or framework does not own font pipeline |
| Licensed foundry | brand work with approved license | confirm web license, formats, domains, self-host/CDN rules, fallback | license is unknown or screenshots will be public examples |

## CSS contract

Use CSS variables for roles, not raw family names scattered through components:

```css
:root {
  --font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
  --font-ui: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

.price,
.metric,
.timestamp {
  font-variant-numeric: tabular-nums;
}
```

Self-hosted example:

```css
@font-face {
  font-family: "Product Display";
  src: url("/fonts/product-display-latin.woff2") format("woff2");
  font-weight: 500 800;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF;
}
```

When fallback shift is visible, use a closer fallback stack first. If the project can support it, tune `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override` on the fallback face rather than accepting obvious headline/button jumps.

## Framework notes

### Static HTML / Vite / Astro

- Use `<link rel="preconnect">` for provider fonts.
- Use `display=swap` and request only needed axes/weights.
- Preload only critical self-hosted fonts that are used above the fold.
- Avoid `@import` for critical fonts.
- Keep a no-webfont fallback screenshot acceptable.

### Next.js

- Prefer `next/font/google` or `next/font/local` when the project is already Next.js.
- Expose fonts through CSS variables so components can use semantic roles.
- Use subsets and exact weights/styles.
- Use local fonts for licensed/self-hosted assets.
- Do not mix framework font optimization with duplicate provider `<link>` tags for the same family.

### Native desktop/mobile web shells

- Keep app chrome on platform fonts unless brand type earns a content-surface role.
- Do not import heavy web fonts for native menus, settings, forms, table rows, or logs.
- Preserve OS scaling and accessibility settings.

## Fallback and text stress

Create fixtures before accepting a font pass:

- longest CTA and button label
- long product/object name
- file path or repository name
- price with decimals and currency
- timestamp/date range
- error/recovery sentence
- localized expansion string at 130-150% length
- ID/hash/log line if mono appears
- mobile hero line breaks
- 125-150% browser zoom or platform text scaling

## QA evidence

Required evidence for serious work:

- desktop and mobile screenshots with fonts loaded
- fallback/no-webfont screenshot or throttled font-loading observation
- long-label/text-stress screenshot
- tabular-number comparison for prices, metrics, dates, or rows
- proof that critical text is visible while custom fonts load
- confirmation that unused weights/styles are not requested
- license/privacy note for provider or foundry fonts

## Hard fails

- Important text is invisible while fonts load.
- Hero or buttons shift enough on font swap to change line breaks badly.
- Dense UI uses display type in rows, errors, legal, or prices.
- More than two families plus mono without a named job.
- Provider fonts are loaded in a privacy-sensitive product without a decision.
- Next.js project uses both `next/font` and duplicate Google Fonts links for the same family.
- Font choice is tested only in the happy desktop screenshot.

## Source anchors

- web.dev font best practices recommend limiting font usage, using system/variable fonts when appropriate, subsetting, preloading carefully, and avoiding excessive preloads: https://web.dev/articles/font-best-practices
- web.dev webfont loading guidance covers preload and `font-display` to reduce invisible text and layout shifts: https://web.dev/articles/optimize-webfont-loading
- MDN documents `@font-face` descriptors including `font-display`, `ascent-override`, `descent-override`, `line-gap-override`, and `size-adjust`: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40font-face
- MDN documents variable fonts as many font variations in one file via a single `@font-face`: https://developer.mozilla.org/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
- Google Fonts CSS2 API supports variable axes, family/weight requests, `text=` subsets, and `display=swap`: https://developers.google.com/fonts/docs/css2
- Next.js font docs cover optimized Google/local fonts, CSS variables, and fallback adjustment: https://nextjs.org/docs/pages/api-reference/components/font
