# Performance budget contract

Use this before implementing animation-heavy pages, React apps, dashboards, Three/R3F scenes, video/Rive/Lottie heroes, data-heavy UI, or any design that adds libraries for visual quality.

The goal is to preserve craft under real device constraints. A design is not high quality if it only looks good on a fast desktop with the animation still warm in memory.

## Required output

```md
Performance budget contract
- Surface:
- Critical path:
- Heavy features:
- Budgets:
- Library cost:
- Rendering risk:
- Media/asset risk:
- Data/interaction risk:
- Fallbacks:
- Pause/offscreen policy:
- QA evidence:
- Rejected effects:
```

## Budget dimensions

| Dimension | Budget decision | Hard fail |
|---|---|---|
| Critical content | what must render/read first | hero waits on nonessential animation |
| JavaScript | which libraries hydrate/execute early | package added for decoration only |
| Animation | which properties animate continuously | layout/paint-heavy animation drives core experience |
| Media | image/video/Rive/Lottie/3D size and fallback | blank or huge asset blocks proof |
| WebGL/canvas | DPR, object count, post-processing, offscreen pause | unbounded renderer or no fallback |
| Data UI | virtualization, pagination, filtering, query state | huge table/list renders all rows eagerly |
| Layout stability | reserved dimensions, aspect ratios, font loading | layout jumps when assets/fonts/data load |
| Interaction latency | first click/type/filter cost | primary action waits for decorative work |
| Accessibility fallback | reduced motion, static frames, native text | reduced motion removes content |

## Default budget posture

Choose by surface:

| Surface | Budget posture |
|---|---|
| Static/product page | Static content first, progressive animation, lazy below-fold media |
| Cinematic launch | One expensive hero/proof object, poster fallback, compressed media, reduced-motion static sequence |
| Dashboard/admin | No decorative heavy motion, fast filters/tables, stable rows, virtualize only when data volume earns it |
| Editor/canvas | Interaction latency beats visual flourish; pause background effects while editing |
| Docs/platform | Text/code/nav/search first; route transitions are progressive and never hide content |
| Checkout/trust | Performance and predictability over spectacle; no nonessential animation near risk |
| 3D/product object | Lazy canvas, capped DPR, poster fallback, offscreen pause, HTML text/controls |

## Library cost rules

- CSS owns simple feedback and reveal before Motion/GSAP.
- Motion owns React state continuity, not bulk decorative entrances.
- GSAP owns one authored timeline, not generic cards.
- Three/R3F owns an inspectable spatial object, not a background vibe.
- Rive/Lottie/video own authored media proof, not core UI text or controls.
- Lenis is forbidden for dashboards, docs, checkout, editors, admin, and dense tools unless explicitly justified.
- Data-viz libraries need a chart question, dataset size, interaction need, accessible summary, and mobile fallback.
- Product libraries need behavior ownership; do not pay dependency cost for default-looking components.

If two libraries own the same visual behavior, remove one.

## Rendering rules

- Prefer `transform` and `opacity` for continuous animation.
- Treat `width`, `height`, `top`, `left`, `margin`, `filter`, heavy `box-shadow`, `clip-path`, and large backdrop blurs as performance risks when animated.
- Use `will-change` sparingly and remove it when not needed.
- Reserve dimensions with `aspect-ratio`, width/height attributes, stable grid tracks, and media boxes.
- Use `content-visibility`, `contain`, lazy loading, and route/component splitting only when they do not hide important accessibility or find-in-page content.
- Avoid scroll handlers that read and write layout every frame.
- Avoid animating large text blocks, dense tables, prices, warnings, legal text, logs, and code.

## Media and asset rules

- Product proof media needs poster/static fallback and dimensions before load.
- Important text and controls stay HTML/code-native, not baked into video/canvas/Rive/Lottie.
- Generated bitmap hero assets should be compressed and sized for the rendered frame, not shipped at arbitrary huge dimensions.
- Carousels/media rails need lazy loading and stable slide dimensions.
- Video autoplay needs pause/stop/hide behavior when motion persists and is not essential.
- Lottie/Rive loops pause offscreen and include a static frame.

## Three/R3F and canvas rules

- Cap DPR and quality for mobile/low-end devices.
- Lazy-load the scene or render a poster first.
- Pause or reduce render loops when offscreen or static.
- Keep UI labels, CTAs, captions, and forms outside the canvas.
- Verify nonblank canvas and mobile framing.
- Avoid post-processing unless it visibly improves the product object.
- Provide a low-performance fallback when the scene is proof-critical.

## Data and interaction rules

- Virtualize only when list size or interaction cost justifies it; otherwise keep semantics simple.
- Keep filter/search/sort state fast and visible.
- Preserve state during loading and errors.
- Avoid rendering huge logs into page scroll; bound logs and provide copy/export.
- Primary interaction must stay responsive when animation/media is running.
- Long-running agent timelines need bounded event rendering, not unlimited DOM growth.

## Evidence probes

Use the strongest practical evidence:

- Build/lint/test for implementation health.
- Browser console for runtime errors, missing assets, hydration errors, WebGL/media warnings.
- Desktop/mobile screenshots for layout stability and framing.
- Runtime overflow and nonblank media/canvas checks.
- Reduced-motion check.
- Primary interaction smoke while visual effects are active.
- DevTools/Lighthouse/performance trace when heavy animation, WebGL, media, or large data is the core risk.
- Bundle/build output when dependencies are part of the risk.

If performance evidence cannot be gathered, state the risk as unverified.

## Repair triggers

Repair before polish when:

- first viewport waits on a heavy script or media asset
- page shifts when media/font/data loads
- scroll or animation feels choppy
- mobile canvas/video/object is cropped or blank
- primary click/filter/type interaction lags
- reduced motion loses proof or navigation
- console shows media/WebGL/hydration errors
- dependency stack is larger than the behavior it owns

## Required report

```md
Performance report
- Budget risk:
- Heavy features kept:
- Heavy features rejected:
- Fallbacks:
- Evidence captured:
- Missing evidence:
- Remaining risk:
```

## Source anchors

- web.dev performance budgets: https://web.dev/articles/performance-budgets-101
- web.dev animation performance guidance: https://web.dev/articles/animations-guide
- web.dev animations and performance: https://web.dev/animations-and-performance/
- Chrome DevTools rendering performance: https://developer.chrome.com/docs/devtools/rendering/performance
- MDN CSS containment: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Using
- MDN `content-visibility`: https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
