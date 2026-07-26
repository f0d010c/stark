# Asset realism matrix

Use this after `asset-selection.md` and before `asset-production-pipeline.md` when a page or app needs hero media, product proof, generated images, screenshots, videos, diagrams, charts, Rive/Lottie, Three/WebGL, or visual references.

This matrix separates proof assets from mood assets. Stark should not make a design feel premium by hiding weak product proof behind atmospheric imagery.

## Output Contract

```md
Asset realism brief
- Product job:
- Main proof object:
- Asset category:
- Realism level:
- Source:
- Why this asset proves or clarifies:
- Code-native text/controls:
- Responsive framing:
- Performance plan:
- Accessibility plan:
- Rejected asset types:
- QA probes:
```

## Asset Categories

| Category | Use For | Prefer | Avoid |
|---|---|---|---|
| Product proof | showing the product works | real screenshot with permission, code-rendered mock, chart, artifact frame | stock photos, unreadable fake UI, blurred dashboards |
| Workflow proof | showing steps, states, handoff, recovery | HTML/SVG diagram, timeline, state panel | decorative flow arrows with no states |
| Trust proof | permissions, billing, security, healthcare, compliance | matrices, ledgers, audit records, scope panels | cheerful illustrations hiding risk |
| Cinematic proof | media/AI/video/spatial output | video, generated bitmap, poster frame, code-native overlays | random dark atmosphere with no output |
| Brand mood | identity, campaign atmosphere | generated bitmap, texture, custom SVG, key art | mood asset replacing product detail |
| Navigation aid | icons, labels, diagrams | platform icons, lucide, consistent custom SVG | mixed icon packs, ambiguous icon-only controls |
| Empty/onboarding state | guide next action | SVG/Rive/generated illustration + real CTA | mascot-only art, feature-tour paragraphs |
| Data proof | answer a question | native SVG, Chart.js, ECharts, D3/visx, Plot, table fallback | decorative chart wallpaper |

## Realism Levels

| Level | Use When | Requirements |
|---|---|---|
| Real | product exists and media is allowed | permission, public-safe crop, readable state, attribution if needed |
| Code-rendered | product is fictional or needs readable UI | real DOM text, realistic data, states, responsive constraints |
| Generated bitmap | product needs scene, texture, concept art, cutout, or campaign image | no essential UI text, product-specific prompt, desktop/mobile crop plan |
| Diagrammatic | workflow/architecture/state is more important than realism | SVG/HTML labels, responsive layout, accessible summary |
| Abstract/material | texture, mood, atmosphere | supports hierarchy or product world, never replaces proof |

## Product Proof Rules

For fictional products, default to code-rendered proof when labels/states matter:

- product UI text remains real DOM
- controls are semantic/focusable when interactive
- data looks plausible: names, statuses, timestamps, errors, owners, prices, versions
- include at least one non-happy state when the product is serious
- crop is readable on desktop and mobile

Generated bitmap proof is acceptable only when the asset job is scene, texture, object, editorial art, or realistic context. Do not ask an image model to generate readable app UI, pricing, legal text, warnings, or dense dashboard copy.

## Hero Asset Decision

| Hero Job | Best Asset | Why |
|---|---|---|
| Sell a working SaaS workflow | code-rendered product mock | readable proof and states |
| Sell AI/video/media quality | video/poster/generated frame + native overlays | output is the proof |
| Sell trust/security/permissions | matrix, audit ledger, evidence pane | consequences are visible |
| Sell a physical/product object | real/generative product frame or Three if inspectable | object is the value |
| Sell docs/dev platform | code block, command trace, docs search surface | developer proof is concrete |
| Sell an editor/tool | canvas/workbench mock | controls and artifact relationship matter |
| Sell a campaign/event | generated key art + real page rhythm | mood matters, but CTA stays native |

## Responsive Framing

Every major asset needs a framing plan:

- `aspect-ratio` or explicit width/height to prevent layout shift.
- `object-fit` and focal point for raster media.
- Separate mobile crop, simplified mock, or alternate composition when desktop detail is too dense.
- `<picture>`/`srcset`/`sizes` for responsive raster images when multiple sizes exist.
- Avoid lazy-loading first-viewport/LCP hero assets unless there is a deliberate poster/fallback.
- Lazy-load below-fold heavy media.

## Accessibility Plan

- Functional images need alt text that states the information or action.
- Decorative texture/mood assets should be hidden from assistive tech.
- Product screenshots with important information need nearby real text summaries.
- Charts need accessible summaries and table/list fallbacks when critical.
- Video needs poster, controls or pause affordance when motion persists, and a static equivalent for reduced motion.
- Rive/Lottie/Three/canvas must not be the only place important text or controls exist.

## Performance Plan

- Prefer SVG/HTML for diagrams and UI mocks.
- Use WOFF2/fonts and compressed modern image formats when self-hosting is practical.
- Use responsive images for different viewport sizes and DPRs.
- Set dimensions to prevent CLS.
- Use native `loading="lazy"` for below-fold images and iframes.
- Cap WebGL/canvas DPR and object counts.
- Pause offscreen loops/canvases where possible.
- Keep hero asset weight proportional to the product value it proves.

## Rejection Rules

Reject an asset when:

- it could belong to any product after swapping the logo
- it hides the actual product job
- it contains fake unreadable UI text as proof
- it is private/copyrighted/unattributed
- it duplicates an existing asset role
- it adds visual busyness without proof, trust, comprehension, state, navigation, or brand value
- it breaks mobile framing or causes layout shift

## QA Probes

- Asset loads and has nonzero dimensions.
- Image/video/canvas/Rive/Lottie is nonblank.
- Desktop and mobile crops preserve the meaningful region.
- Important text is code-native or summarized nearby.
- First-viewport media does not cause visible layout shift.
- Below-fold heavy assets are lazy or deferred.
- External assets are public-safe and attributed where needed.
- The asset directly supports proof, trust, comprehension, state, navigation, or brand.

## Source Anchors

- web.dev and MDN document responsive image techniques such as `srcset`, `sizes`, and `<picture>` for different viewport sizes and pixel densities.
- MDN documents `HTMLImageElement` properties such as `complete`, `naturalWidth`, `loading`, `decoding`, and `alt` that can be used for QA and implementation decisions.
- web.dev CLS guidance emphasizes reserving space for images/media to prevent layout shifts.
- MDN and web.dev lazy-loading guidance recommend loading non-critical assets only when needed while keeping critical/hero content available promptly.
