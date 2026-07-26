# Motion library playbooks

Use this after `design-orchestration.md`, `animation-creation.md`, `premium-animation-direction.md`, `choreography-state-machine.md`, or `interaction-techniques.md` when a project needs concrete implementation guidance for animation libraries. When the selected motion depends on authored timelines, keyframes, Rive state machines, Lottie/dotLottie loops, video composites, Spline scenes, Pixi/canvas fields, or SVG path films, follow with `designer-authored-motion-handoff.md` before implementation. When the library is accepted for production code, follow with `frontend-library-production-presets.md` so the chosen tool gets owners, fixtures, fallbacks, budgets, QA probes, and removal triggers.

The goal is not to use every library. The goal is to choose the smallest stack that can execute the choreography with quality, performance, accessibility, and maintainability.

Before implementing expensive animation, WebGL/canvas, video, Rive, Lottie, data-viz, or stacked motion libraries, read `performance-budget-contract.md` and name the budget, fallback, pause/offscreen policy, and evidence.

Before selecting libraries, use `motion-pattern-atlas.md` to choose the primary choreography pattern. This file implements that pattern; it should not turn the page into a sampler of unrelated effects.

For common implementation patterns, use `../motion-recipes/` after this file. Recipes cover layout transitions, command palette motion, run timeline arrival, route/view transitions, pinned product stories, native scroll reveal, R3F product objects, and Rive state icons.

When shader-like visuals, canvas fields, WebGL, Spline-style embeds, Rive state machines, Lottie loops, video composites, or generated key art become the signature visual system, read `advanced-visual-systems.md` after this file. It chooses the main mechanic, visual owner, motif, fallback, and rejected spectacle so the page does not become an effects sampler.

If the work is a cinematic hero, scroll story, 3D product object, interactive demo, stateful illustration, or anything that could become a collage of effects, write the choreography state machine first. This file decides how to implement the already-defined scenes and states; it should not invent extra motion.

## Stack brief

```md
Motion library playbook
- Surface: campaign / product proof / app / dashboard / docs / editor / 3D page
- Choreography: 3-5 beats
- State machine: scenes, triggers, system states, controls, reduced-motion substitutions
- Libraries used: ...
- Libraries rejected: ...
- Ownership: CSS / component state / timeline / canvas / media
- Fallback: reduced motion, unsupported browser, low-end device
- QA: console, desktop/mobile, interaction, nonblank canvas/video, performance risk
```

## CSS first

Use CSS for:

- Hover/focus/tap feedback.
- Simple entrances and fades.
- Small ambience, masks, curtains, and shimmer.
- Reduced-motion fallbacks.
- Native scroll-driven progress/reveal when progressive enhancement is acceptable.

Rules:

- Prefer `transform` and `opacity` for continuous motion.
- Use `animation-timeline: view()` or `scroll()` only with fallback.
- Keep looping ambience subtle and pausable if it competes with content.
- Do not build complex state machines from CSS selectors when component state would be clearer.

## Motion

Use Motion when React state and component continuity matter.

Best for:

- Modal/sheet/menu transitions.
- Command palettes.
- Route/detail continuity and shared elements.
- Layout changes, expanding cards, active bento, tabs.
- Drag, hover, tap, focus, and in-view gestures.
- Scroll-linked component values with `useScroll` and transforms.

Pattern:

```tsx
import { motion, useReducedMotion } from "motion/react";

const reduce = useReducedMotion();

const panel = {
  hidden: { opacity: 0, y: reduce ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduce ? { duration: 0 } : { type: "spring", stiffness: 180, damping: 24 }
  }
};

<motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={panel} />
```

Avoid:

- Using Motion for long authored scroll films better handled by GSAP.
- Animating layout in dense tables where stability matters.
- Hover-only interactions without keyboard/tap alternatives.

## GSAP / ScrollTrigger

Use GSAP when the choreography is authored as a timeline.

Best for:

- Pinned scroll stories.
- SVG path drawing.
- Masked reveals.
- Split text and headline staging.
- Multi-object hero sequences.
- Scroll-scrubbed product proof.

Pattern:

```js
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".story",
      start: "top top",
      end: "+=180%",
      scrub: true,
      pin: true
    }
  });

  tl.from(".object", { yPercent: 18, opacity: 0 })
    .to(".path", { strokeDashoffset: 0 })
    .from(".proof", { opacity: 0, y: 24 });
}
```

Rules:

- One pinned sequence is usually enough.
- Keep start/end ranges short enough that the user does not feel trapped.
- Provide static frames or normal stacked sections for reduced motion.
- Do not add GSAP for basic card reveals.

## Three.js / React Three Fiber

Use Three/R3F when the object truly needs spatial depth.

Best for:

- Product object inspection.
- Camera path around a real 3D subject.
- Shader-like media worlds.
- Spatial data sculpture.
- Full-bleed hero scene with UI overlays.

Rules:

- The 3D object must be the main object, not decoration behind generic cards.
- Cap device pixel ratio.
- Pause or reduce work when offscreen.
- Lazy-load the scene or show a poster frame.
- Verify nonblank canvas on desktop and mobile.
- Avoid heavy post-processing unless it materially improves the scene.

QA:

- Screenshot desktop and mobile.
- Check canvas pixel/nonblank state.
- Check resize/framing.
- Check reduced-motion or low-performance fallback.

## Rive

Use Rive when a designer-authored illustration needs runtime state.

Best for:

- Brand characters.
- Logo/mascot interactions.
- Interactive onboarding art.
- Product diagrams controlled by inputs.
- Small state machines that should remain editable in a design tool.

Rules:

- Keep important UI text code-native, not inside the Rive asset.
- Drive state through named inputs, not brittle frame assumptions.
- Provide static poster or paused first frame.
- Do not use Rive for dense product UI, tables, forms, or editable app chrome.

## Spline

Use Spline when a designer-authored 3D scene or brand object is more valuable than code-level 3D control.

Best for:

- Fast 3D art-direction prototypes.
- Simple interactive hero objects.
- Brand scenes where the HTML page owns copy, CTA, labels, and proof.

Avoid:

- Product UI that needs deep state, routing, accessibility, or lightweight load.
- Scenes whose important labels or controls live inside the embed.
- Mobile-critical paths without a poster or static replacement.

Rules:

- Treat the Spline viewer as an asset, not the full page.
- Keep controls, CTAs, labels, and state in HTML.
- Provide poster/static fallback and mobile replacement when load or framing is risky.

## Lottie

Use Lottie for small authored vector loops.

Best for:

- Loaders.
- Empty-state illustrations.
- Brand marks.
- Small explainer loops.

Rules:

- Keep files small.
- Do not use Lottie as the primary UI.
- Pause when offscreen if looping.
- Provide static fallback.
- Avoid unreadable text inside the animation.

## Video

Use video when cinematic proof is the product.

Best for:

- AI/video/media products.
- Real product footage.
- Generated output examples.
- Complex photoreal motion too expensive to code.

Rules:

- Use poster frame.
- Keep controls or pause affordance when motion persists.
- Avoid huge autoplay videos without compression and fallback.
- Overlay UI/code natively; do not bake important UI controls into video.

## Lenis

Use Lenis only when scroll feel is part of the brand expression.

Use for:

- Campaign pages.
- Portfolios.
- Editorial stories.
- Immersive product launches.

Avoid for:

- Dashboards.
- Docs/API pages.
- Checkout.
- Editors/canvases.
- Admin tools.
- Any surface where native scroll predictability matters.

## View Transitions API

Use for native shared-element transitions between views.

Best for:

- Gallery to detail.
- Docs route transitions.
- Product catalog/detail.
- App shell continuity.

Rules:

- Do not hide loading/error/permission changes.
- Preserve focus and scroll position deliberately.
- Provide no-op fallback.
- Prefer simpler fades for critical flows.

## Anime.js

Use Anime.js for compact authored DOM/SVG motion when GSAP would be too much and CSS alone is awkward.

Best for:

- Small DOM/SVG timelines.
- Kinetic type details.
- SVG path and shape motion.
- Staggered micro-sequences that are genuinely meaningful.
- WAAPI-friendly animation work in lighter static pages.

Avoid:

- Large pinned scroll films better owned by GSAP.
- React component layout continuity better owned by Motion.
- App UI where state ownership belongs in components.

Rules:

- Keep timelines short and named.
- Do not use random stagger as decoration.
- Use CSS for static fallback and reduced motion.

## Theatre.js

Use Theatre.js when the sequence needs authored keyframes and studio-style timeline control.

Best for:

- 3D camera choreography.
- Product-object films.
- Exact art-directed HTML/SVG or WebGL scenes.
- Prototypes where designers will tune keyframes.

Avoid:

- Ordinary app transitions.
- Simple scroll reveal.
- Surfaces where nobody will maintain the authored sequence.

Rules:

- Keep UI controls and text code-native.
- Document the sequence, sheet, object names, and exported state.
- Provide poster/static frames for reduced motion and loading.

## PixiJS

Use PixiJS for high-volume 2D rendering where DOM/SVG becomes too heavy.

Best for:

- Many sprites, marks, particles, traces, or map-like layers.
- Product-tied generative fields.
- Interactive 2D canvases that need WebGL/WebGPU acceleration.

Avoid:

- Decorative particles behind generic content.
- Text-heavy interfaces.
- Simple illustrations that SVG/CSS can handle.

Rules:

- Cap object counts and pause offscreen.
- Keep important labels and controls in HTML.
- Verify the canvas is nonblank and framed on desktop/mobile.

## Web Animations API

Use WAAPI when the browser should own keyframe playback but JavaScript needs play, pause, reverse, or dynamic timing control.

Best for:

- Lightweight DOM animations.
- Small interactions where CSS cannot easily control playback.
- Progressive enhancement without a full animation dependency.

Avoid:

- Complex React layout/state choreography.
- Long authored scroll stories.
- Browser-support-sensitive features without fallback.

Rules:

- Animate transform/opacity where possible.
- Store returned `Animation` objects only when playback control is needed.
- Provide CSS/no-op fallback for unsupported environments.

## Data visualization libraries

Use data-viz libraries when the product object is data and the interface needs a chart, graph, timeline, map, or exploratory view. A decorative chart is not a proof surface.

### Chart.js

Best for:

- Simple, standard charts.
- Small dashboards.
- Familiar line, bar, doughnut, and radar charts.

Avoid:

- Heavy custom interaction.
- Complex dashboards with many linked views.
- Charts where the default style would look generic.

### Apache ECharts

Best for:

- Dense dashboards.
- Larger datasets.
- Rich tooltips, zooming, brushing, maps, and linked chart interactions.

Avoid:

- Tiny static charts where bundle cost is not justified.
- Highly bespoke editorial chart art that needs custom marks.

### D3 / visx

Best for:

- Bespoke data visualizations.
- Custom marks, layouts, and interactions.
- React apps that need design-system-owned chart components (`visx`).

Avoid:

- Basic charts where a simpler library communicates the answer.
- Shipping complex visual encodings without accessible summaries.

### Vega-Lite / Observable Plot

Best for:

- Declarative exploratory charts.
- Fast analysis prototypes.
- Statistical plots with clear semantics.

Avoid:

- Highly branded custom dashboards where every mark must be hand-tuned.

Rules:

- Name the question the chart answers before picking the library.
- Include axes, units, source, legend, and accessible summary.
- Do not rely on color alone.
- Provide a table/list fallback for critical data on mobile or screen readers.
- Keep animation functional: reveal, filter, compare, or focus; no chart confetti.

## Stack recipes

| Goal | Stack |
|---|---|
| High-craft static landing | CSS + native scroll-driven + optional small JS |
| React product page | CSS + Motion + optional GSAP for one proof timeline |
| Cinematic campaign | CSS + GSAP + video or Three if the object earns it |
| Product app/dashboard | CSS + Motion + command palette/split pane patterns |
| 3D hero page | Three/R3F + CSS UI + poster/reduced-motion fallback |
| Designer-authored 3D brand object | Spline viewer + HTML UI + poster/mobile fallback |
| Designer-authored interactive art | Rive + CSS/React UI |
| Small brand loops | Lottie + CSS UI |
| Docs/platform site | CSS + View Transitions + command palette |
| Compact DOM/SVG choreography | Anime.js or WAAPI + CSS fallback |
| Designer-authored keyframed scene | Theatre.js + static frames |
| High-volume 2D product field | PixiJS + HTML UI labels |
| Simple dashboard charts | Chart.js or native SVG + CSS |
| Dense operational analytics | ECharts + accessible summaries |
| Bespoke editorial/data product | D3/visx/Observable Plot + component anatomy |

## Anti-stacks

- Motion + GSAP + Lenis + Three for a simple SaaS landing page.
- Lenis in dashboards, docs, checkout, or editors.
- GSAP for basic hover/fade cards.
- Three.js behind generic hero text with no inspectable object.
- Spline embed as the whole app with inaccessible labels or no fallback.
- Lottie/Rive containing important UI text or controls.
- Video replacing product proof that should be interactive.
- Data-viz library added before naming the chart question, scale, data source, and fallback.
