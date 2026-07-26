# Web Motion - Library + Technique Inventory (2026)

The model has wide motion vocabulary. Pick 2-4 signature moments per project, not all at once.

## Library Landscape

| Library | Use For | Notes |
|---|---|---|
| **Motion** (motion.dev) | React component motion, variants, gestures, layout continuity, `useScroll`, `useTransform` | Default for React UI motion. Strong for component trees, modals, sheets, command palettes, route/detail continuity, and scroll-linked values. |
| **GSAP** | Authored timelines, complex sequencing, SVG/path choreography, ScrollTrigger, SplitText-style text motion | Best for cinematic scroll stories and sequences that need precise timing. Avoid using it for basic card fades. |
| **Three.js / R3F** | Spatial hero objects, camera paths, shader-like scenes, product objects, post-processing | Use only when depth is the main object. Cap DPR, lazy-load, and verify nonblank canvas on desktop/mobile. |
| **Rive** | Designer-authored interactive illustrations, state machines, character/logo/product artboards | Good when animation states should be controlled by runtime inputs without hand-coding every vector path. |
| **Lottie** | Lightweight exported vector loops, brand marks, loaders, small explainers | Good for small authored loops. Avoid for editable UI, heavy hero scenes, or product state that must be semantic. |
| **Video** | Cinematic proof, generated-media demos, realistic product clips | Often the correct hero asset for AI/video products. Pair with code-native UI overlays and fallback poster frames. |
| **Lenis** | Smooth scroll texture | Use sparingly on brand/campaign pages. Avoid in dashboards, docs, checkout, editors, and admin. |
| **View Transitions API** | Native route/detail shared transitions | Use for gallery/detail, docs, catalogs, and SPA continuity when support/fallback is acceptable. |
| **Native CSS scroll-driven** | `animation-timeline: view()` / `scroll()` | Zero-JS progressive enhancement for reveals and progress. Keep fallback for unsupported browsers and critical flows. |
| **Chart.js** | Simple product charts | Use for familiar small charts when custom interaction is light. |
| **Apache ECharts** | Dense dashboards and rich chart interaction | Use for larger data, linked views, zooming, brushing, maps, and operational analytics. |
| **D3 / visx** | Bespoke data visualization | Use when the chart is a product object and custom marks/interactions matter. |
| **Vega-Lite / Observable Plot** | Declarative exploratory charts | Use when semantic chart specification and fast analysis matter more than bespoke art direction. |

## Technique Inventory

Each has dedicated reference at `web-patterns/<name>.md`. Do not deploy all on one project.

| Technique | Direction Fit | Reference |
|---|---|---|
| Page-load curtain reveal | editorial, type-as-hero, glow-grain | `web-patterns/page-load-curtain.md` |
| Custom cursor | editorial, type-as-hero, glow-grain, active-bento | `web-patterns/custom-cursor.md` |
| Magnetic CTA | editorial, glow-grain, type-as-hero | `web-patterns/magnetic-button.md` |
| Scroll-pinned section | all, 1 per page max | `web-patterns/scroll-pinned-section.md` |
| View Transitions route | all with multi-page surfaces | `web-patterns/view-transitions.md` |
| Letter / word stagger | editorial, type-as-hero, glow-grain | `web-patterns/letter-stagger.md` |
| Variable-font hover | editorial subtle, type-as-hero signature | `web-patterns/variable-font-hover.md` |
| Marquee band | editorial, brutalist, type-as-hero, industrial-mono | `web-patterns/marquee.md` |
| Layered parallax | editorial, type-as-hero, glow-grain | `web-patterns/parallax-layers.md` |
| 3D tilt card | editorial interactive, active-bento, glow-grain | `web-patterns/3d-tilt-card.md` |
| Sticky section markers | editorial, type-as-hero, industrial-mono | `web-patterns/sticky-section-markers.md` |
| Native scroll-driven CSS | editorial, all | `web-patterns/scroll-driven-css.md` |
| Lenis smooth scroll | editorial, type-as-hero, glow-grain | `web-patterns/lenis-smooth-scroll.md` |
| Asymmetric grid | editorial, type-as-hero, glow-grain | `web-patterns/asymmetric-grid.md` |
| Symbol / glyph cycling | editorial, industrial-mono | `web-patterns/symbol-cycling-hover.md` |
| Connected animation (`layoutId`) | active-bento, editorial gallery to detail | `web-patterns/connected-animation.md` |
| Mesh gradient atmosphere | glow-grain signature, type-as-hero, active-bento | `web-patterns/mesh-gradient.md` |
| Command palette | app shells, docs, devtools | `web-patterns/command-palette.md` |
| Inspector split pane | devtools, editors, audit tools | `web-patterns/inspector-split-pane.md` |
| Annotated product proof | SaaS, AI tools, security products | `web-patterns/annotated-product-proof.md` |
| Before/after slider | migrations, optimization, design systems | `web-patterns/before-after-slider.md` |
| Timeline / run replay | agents, CI, deploys, automations | `web-patterns/timeline-run-replay.md` |
| Permission / trust matrix | security, admin, enterprise settings | `web-patterns/permission-trust-matrix.md` |
| Empty state gallery | dashboards, onboarding, data apps | `web-patterns/empty-state-gallery.md` |
| Pricing comparison table | SaaS, developer tools, marketplaces | `web-patterns/pricing-comparison-table.md` |
| Docs / API reference layout | SDKs, CLIs, platform products | `web-patterns/docs-api-reference-layout.md` |
| Keyboard shortcut overlay | editors, command surfaces, power tools | `web-patterns/keyboard-shortcut-overlay.md` |

## Library Choice By Surface

| Surface | Recommended Stack |
|---|---|
| Campaign / launch page | CSS baseline + GSAP for one pinned sequence + optional video/Three hero if the object earns it |
| Product proof landing page | CSS + Motion for UI overlays + GSAP only for the proof timeline |
| Interactive SaaS / dashboard | CSS + Motion for component state, layout, command palette, sheets; no Lenis/scroll hijack |
| Docs / developer tool | CSS + View Transitions or Motion for route/detail continuity; optional command palette |
| AI video/media page | Video/poster asset + code-native controls + GSAP or Motion for choreography |
| Creative editor | Motion for component/layout continuity; canvas/WebGL only for the actual workspace or artifact |
| 3D product page | Three/R3F + CSS UI + reduced-motion poster/static object fallback |
| Data product / analytics | ECharts for dense operations, Chart.js for simple charts, D3/visx/Plot for bespoke visual objects |

## When To Deploy How Many

- **1-2 motion moments** - minimum for polished marketing pages.
- **2-4 motion moments** - sweet spot for high-craft expressive pages.
- **5+ motion moments** - usually over-motion. Becomes its own AI tell.

## Signature Moments Per Direction

- **Editorial**: letter stagger + reveal-on-scroll + variable-font hover + optional Lenis.
- **Brutalist**: instant render + cursor snap + marquee + mix-blend-difference.
- **Type-as-hero**: page-load curtain + scroll-pinned headline morph + variable-axis cursor-Y + mesh atmosphere.
- **Glow + grain**: page-load curtain + mesh drift + scroll-driven glow shift + magnetic CTAs.
- **Industrial mono**: typewriter intro + log marquee + monospace tickers + glyph cycle hover.
- **Active bento**: connected layout animation + tile-expand hover + scroll-snap + custom cursor label.
- **Product proof**: annotated product preview + command palette + timeline/run replay + trust matrix.

## Choreography Output

When motion is a signature part of the design, state:

```md
Motion stack
- Focal object: ...
- Beats: 1 / 2 / 3 / 4
- Library stack: ...
- Why not: libraries rejected and why
- Reduced motion: ...
- QA: desktop/mobile screenshot, console, performance, nonblank canvas/video, state coverage
```

## Default Page-Load Reveal Sequence

1. Initial mask/curtain animates off, 200-400ms.
2. Background grain/glow fades in, 300ms, eased.
3. Hero type reveals line-by-line, 40-80ms stagger.
4. Above-fold visual object settles, 400-700ms.

Total should usually stay under 1.2s. Longer feels self-important unless the motion is the product.

## Spring Physics Defaults

```ts
// Restrained editorial
{ type: "spring", stiffness: 130, damping: 20 }

// Snappy active-bento
{ type: "spring", stiffness: 300, damping: 25 }

// Slow cinematic
{ type: "spring", stiffness: 80, damping: 22 }

// Bouncy fun
{ type: "spring", stiffness: 200, damping: 12 }
```

## Easing Defaults

- Snappy mechanical: `cubic-bezier(0.85, 0, 0.15, 1)` for brutalist or industrial.
- Soft considered: `cubic-bezier(0.2, 0, 0, 1)` for editorial or glow.
- Custom flourish: `cubic-bezier(0.65, 0.05, 0.36, 1)` for type-as-hero.

## Reduced Motion

Always honor `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

In Motion:

```tsx
import { useReducedMotion } from "motion/react";

const reduce = useReducedMotion();

<motion.div
  animate={{ y: reduce ? 0 : -8 }}
  transition={reduce ? { duration: 0 } : { type: "spring" }}
/>
```

Failing this is an accessibility issue, not a stylistic choice.

## Sources

- Motion docs: https://motion.dev/docs
- GSAP docs: https://gsap.com/docs
- Three.js manual: https://threejs.org/manual
- Rive web runtime docs: https://rive.app/docs/runtimes/web
- Chart.js docs: https://www.chartjs.org/docs/latest/
- Apache ECharts docs: https://echarts.apache.org/handbook/en/get-started/
- D3 docs: https://d3js.org/
- visx docs: https://airbnb.io/visx/
- Observable Plot docs: https://observablehq.com/plot/
- View Transitions: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- Native scroll-driven CSS: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations
- Animation performance: https://web.dev/articles/animations-guide
- Lenis: https://lenis.darkroom.engineering
