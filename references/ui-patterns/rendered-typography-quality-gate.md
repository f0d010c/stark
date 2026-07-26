# Rendered typography quality gate

Use this after `typography-systems.md`, `font-selection-matrix.md`, `typography-pairing-lab.md`, `type-recipes.md`, and `font-implementation-contract.md` when rendered evidence exists for serious, public, high-craft, dense, native, cross-platform, docs, dashboard, animation-led, or user-critiqued UI.

This gate catches typography that was planned correctly but still renders as generic, cheap, cramped, fragile, inaccessible, or slow. Inspect the actual DOM/screenshot/browser behavior, not only the font recipe.

## Source anchors

- web.dev font best practices cover limiting font usage, loading fonts early enough, subsetting, variable fonts, preloads, and avoiding layout shift from font swapping: https://web.dev/articles/font-best-practices
- web.dev webfont loading guidance covers WOFF2, subsetting, preload `crossorigin`, and `font-display: swap`: https://web.dev/learn/performance/optimize-web-fonts
- MDN documents `@font-face` descriptors including `font-display`, `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override`: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40font-face
- MDN documents variable fonts as multiple type variations exposed from one font file and usable through axes: https://developer.mozilla.org/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
- Apple Human Interface Guidelines describe typography as supporting legibility, hierarchy, important content, and brand/style, and advise minimizing typefaces: https://developer.apple.com/design/human-interface-guidelines/typography
- Material typography guidance treats type scale, line length, dynamic type, and hierarchy as readability and user-experience concerns: https://m1.material.io/style/typography.html

## Output contract

```md
Rendered typography quality gate
- Surface:
- Evidence inspected:
- Type recipe/source:
- Rendered families:
- Display role:
- Body/UI role:
- Mono/data role:
- Hierarchy texture:
- Line breaks/measure:
- Density fit:
- Numeric behavior:
- Long text stress:
- Mobile/zoom behavior:
- Font loading/fallback behavior:
- Performance/license/privacy note:
- Generic/default residue:
- Failed text sample:
- Required repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## What To Inspect

### Rendered Families

- Verify the intended display, body/UI, and mono/data families actually render.
- Check computed styles or screenshot evidence; do not rely only on CSS variables.
- Verify fallback stack and no-webfont rendering remain acceptable.
- Confirm no more than two families plus mono unless each has a visible job.

Hard fail: the page claims a custom type system but renders browser/Tailwind defaults, broken provider fonts, or one generic face everywhere without a product reason.

### Role Separation

Check that each type role has a different job:

- Display: brand/section/hero personality.
- Body/UI: readable controls and repeated work.
- Mono/data: code, logs, IDs, timestamps, prices, coordinates, metrics.
- Captions/labels: proof and guidance, not decorative dust.

Hard fail: display type is used in dense tables, errors, legal, prices, long paragraphs, or repeated controls.

### Hierarchy Texture

Inspect:

- h1/h2/section labels/body/buttons/captions
- weight contrast
- line-height
- letter spacing
- uppercase treatment
- semantic heading order
- relationship spacing around text

Hard fail: everything has the same visual weight, tiny uppercase labels dominate the page, or hierarchy relies only on size with weak contrast/spacing.

### Line Breaks And Measure

Inspect desktop, tablet, mobile, and any narrow panes:

- hero line breaks
- body measure
- button text fit
- card/panel title wrapping
- table/list truncation
- copy over media/glass/canvas

Hard fail: headline breaks into awkward single words, buttons clip, proof labels overlap media, or text measure becomes too wide/too narrow for reading.

### Density Fit

Match typography to use frequency:

- Dashboards/editors/agent runs: compact, stable, scannable.
- Docs/content: comfortable line length and rhythm.
- Campaign/cinematic: expressive display with quiet supporting UI text.
- Checkout/trust/health/security: calm and highly readable.
- Mobile task flows: native-like scale, touch-safe labels, no tiny caps.

Hard fail: campaign hero type appears inside repeated product controls, or dense product UI inherits landing-page spacing and giant text.

### Numeric And Data Behavior

For metrics, prices, timestamps, IDs, logs, rows, and charts:

- Use tabular figures where numbers compare.
- Align decimals, units, currencies, and time formats.
- Keep mono/data text readable.
- Preserve source and units.

Hard fail: comparable numbers use proportional figures, misaligned decimals, or decorative chart/metric labels with no readable units.

### Loading And Fallback

Inspect:

- requested families/weights/styles
- `font-display`
- preload/subset decisions
- fallback metric shift
- text visibility before custom fonts load
- duplicate provider/framework font loading

Hard fail: important text is invisible during load, font swap causes bad line-break shifts, or unused weights/italics are loaded without a job.

## Repair Moves

Choose the smallest repair that fixes the failed evidence:

- Replace generic display face with a style-lane-appropriate face and keep body quiet.
- Return dense controls/tables to UI sans and reserve display type for headings.
- Tighten type scale and line-height around the actual container.
- Manually set hero/mobile line breaks or reduce heading scale.
- Add tabular figures and units to metrics/prices/timestamps.
- Remove unused font families/weights and fix `font-display`/preload/subset.
- Tune fallback stack or metric overrides when swap shifts layout.
- Increase contrast or size for captions, labels, and proof text.

## Gate Results

- **Blocked**: critical text is unreadable, invisible during load, clipped, generic/default, or wrongly assigned to display/mono roles.
- **Repair required**: type system is conceptually right but one viewport, role, line break, loading path, or data region fails.
- **Acceptable with risk**: minor fallback or long-label risk remains but core hierarchy and readability pass.
- **Pass**: rendered type has clear roles, readable rhythm, stable loading, mobile/zoom resilience, data behavior, and product-specific personality.

## Hard Fails

- No rendered screenshot/DOM/computed-style evidence inspected.
- Font choice is justified only by taste, trend, or popularity.
- Inter/Roboto/Arial/Space Grotesk/Poppins/system default is the main personality without a platform/performance/product reason.
- Important UI text is embedded in images, video, canvas, Rive, or Lottie.
- Mobile typography is accepted from desktop only.
- Text stress cases, fallback behavior, or numeric behavior are missing for serious UI.
