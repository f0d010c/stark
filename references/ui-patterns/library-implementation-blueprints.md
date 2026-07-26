# Library implementation blueprints

Use this after `frontend-library-production-presets.md` and before code when an accepted library must produce real production behavior, not just a named dependency.

This file turns source-backed capability choices into implementation blueprints: import boundary, state owner, cleanup, fallback, performance guard, and proof selectors.

## Output contract

```md
Library implementation blueprint
- Surface and product object:
- Accepted libraries:
- Primary library job:
- Import/client boundary:
- State owner:
- DOM/canvas/media owner:
- Accessibility owner:
- Reduced-motion branch:
- Unsupported/failed-load fallback:
- Cleanup/disposal:
- Performance guard:
- QA selectors:
- Evidence to capture:
- Library-specific hard fail:
```

## Universal rules

- Use a library only after it has a scored job, preset, fixture, fallback, and removal trigger.
- Keep semantic text, CTAs, labels, form controls, errors, prices, status, and recovery in HTML or app state.
- Pick one animation owner for each property or state. Do not let Motion, GSAP, CSS, and View Transitions fight over the same element.
- Put browser-only libraries behind the framework's client/runtime boundary.
- Name selectors or test ids before implementation so QA can prove that the library rendered, changed state, and remained accessible.
- Every advanced visual path needs a no-JS, reduced-motion, unsupported-browser, or failed-asset fallback that preserves product proof.

## Motion for React blueprint

Use for React state continuity, shared elements, layout changes, command palettes, tabs, drawers, small gestures, and local scroll-linked values.

Implementation:

- Import from `motion/react`.
- Use React state as source of truth; variants describe visual state.
- Use `layout` or `layoutId` only for the same product object across states/routes.
- Use `useReducedMotion()` to remove travel while keeping the same state change visible.
- Keep CSS/container queries responsible for static layout.

QA evidence:

- Trigger the state change by click, keyboard, and touch-size viewport.
- Verify focus remains usable after animation.
- Verify reduced motion still shows the state difference.
- Capture before, during/after, mobile, and no-overflow evidence.

Hard fail: Motion animates decorative entrance cards but no product state, route, gesture, or continuity job.

## GSAP ScrollTrigger blueprint

Use for one authored product-story timeline: pinned proof, scrubbed transformation, SVG/path staging, headline sequence, or multi-object reveal.

Implementation:

- Register plugins once in the client boundary.
- In React, prefer `@gsap/react` `useGSAP()` or `gsap.context()`-style cleanup so timelines and ScrollTriggers revert on unmount.
- Use `gsap.matchMedia()` for responsive setup and reduced-motion/static branches.
- Label 3-5 beats in the timeline before coding.
- Keep scroll range proportional to story value; avoid trapping the user in a long pin.

QA evidence:

- Capture start, beat, proof, end, reduced-motion, and mobile frames.
- Verify cleanup by navigating away/back or remounting without duplicated triggers.
- Verify important copy and controls are HTML, not baked into timeline imagery.

Hard fail: GSAP is added for basic fades, every-card reveals, or a dashboard/docs/checkout surface where native interaction matters more.

## Three/R3F blueprint

Use when spatial depth proves the product object: inspection, exploded layers, material proof, spatial data, or an interactive 3D hero.

Implementation:

- Put the scene inside one owned `<Canvas>`.
- Cap `dpr`, object count, texture sizes, postprocessing, shadows, and render loop cost.
- Use `frameloop="demand"` or adaptive performance only when interaction and animation allow it.
- Reuse geometries/materials and cached assets; avoid many canvases.
- Keep labels, controls, status, fallback copy, and CTAs in HTML overlays.

QA evidence:

- Desktop/mobile canvas nonblank check.
- Resize/framing check for the main object.
- Low-performance or reduced-motion poster/static proof.
- Console free of WebGL, asset, or context errors.

Hard fail: 3D is wallpaper behind generic hero copy, or essential UI text lives inside the canvas.

## Rive blueprint

Use when designer-authored vector art needs runtime state-machine inputs.

Implementation:

- Name the artboard, state machine, and inputs before coding.
- Drive inputs from product state; do not depend on guessed frame numbers.
- Keep text, controls, and labels in HTML.
- Provide a poster/first-frame fallback and failure-safe layout.

QA evidence:

- Exercise every named input.
- Verify keyboard/touch controls trigger the same states.
- Capture static fallback and failed-load layout.

Hard fail: Rive contains dense UI, essential text, form controls, prices, or recovery copy.

## Lottie/dotLottie blueprint

Use for compact authored loops: brand marks, empty-state accents, loaders, or small explainer details.

Implementation:

- Keep loops small, pausable, and offscreen-aware.
- Use static SVG/poster fallback.
- Never put critical text or controls inside the animation.

QA evidence:

- Loop can pause or stop when offscreen/reduced motion.
- Static fallback communicates the same state.
- Animation does not compete with reading or repeated-use controls.

Hard fail: Lottie carries the primary proof or loops forever beside important reading content.

## View Transitions blueprint

Use for route/detail continuity where the same object changes view.

Implementation:

- Feature-detect `document.startViewTransition`.
- Transition only stable same-object elements.
- Restore focus and scroll position deliberately.
- Do not hide loading, error, permission, or form-recovery states inside the transition.

QA evidence:

- Back/forward keeps context.
- Unsupported fallback works.
- Focus returns to a useful element.
- Route errors remain visible.

Hard fail: transition masks product state changes or makes navigation feel slower without improving orientation.

## Native scroll-driven / WAAPI blueprint

Use for lightweight progressive enhancement: view/scroll timelines, small DOM playback control, SVG path progress, or simple reveal tied to scroll.

Implementation:

- Feature-detect or write a static CSS fallback.
- Declare `animation-timeline` after animation shorthand.
- Animate transform/opacity when possible.
- Keep essential content visible without animation completion.

QA evidence:

- Unsupported browser/static fallback still reads.
- Reduced motion removes travel but preserves meaning.
- No layout shift or hidden content at rest.

Hard fail: native scroll animation is used for a critical story without fallback coverage.

## Data visualization blueprint

Use when a chart answers a named user question.

Implementation:

- Choose Chart.js for simple standard charts, ECharts for dense operational dashboards, D3/visx for bespoke design-system marks, Observable Plot/Vega-Lite for declarative analytical views.
- Define data shape, units, source, scale, empty/loading/error states, accessible summary, and table/source fallback before coding.
- Keep chart animation functional: reveal, filter, compare, or focus.

QA evidence:

- Chart answers the named question with labels, units, legend, source, and keyboard/touch path.
- Screen-reader/table fallback exposes the same decision data.
- Mobile replacement preserves the decision, not the exact desktop chart.

Hard fail: decorative chart grid with no question, source, fallback, or decision/action.

## Source anchors

- Motion for React documents component animation, gestures, layout animation, shared elements, and reduced-motion hooks: https://motion.dev/react
- GSAP documents timelines, plugins, React cleanup helpers, ScrollTrigger, and `matchMedia()` responsive/reduced-motion setup: https://gsap.com/docs/v3
- React Three Fiber documents `Canvas` options such as `frameloop` and `dpr`, plus scaling-performance guidance for invalidation, caching, instancing, LOD, adaptive DPR, and regression: https://r3f.docs.pmnd.rs/api/canvas
- Rive web runtimes expose state machines and named inputs for runtime control: https://rive.app/docs/runtimes/web/state-machines
- MDN documents View Transitions API feature usage and CSS scroll-driven timelines/progressive enhancement concerns: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
