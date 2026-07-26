# Library source verification gate

Use this after `library-capability-fit-contract.md`, `frontend-library-production-presets.md`, and `library-implementation-blueprints.md` when a design depends on a frontend library, browser API, visual runtime, chart package, or authored media runtime.

This gate prevents Stark from treating library names as style adjectives. Before code, verify the current source docs, the exact API surface, the integration boundary, the fallback, and the evidence that will prove the library did useful work.

## Source anchors

- Motion React documents `motion` components, layout animation, gestures, scroll hooks, and `useReducedMotion`: https://motion.dev/react and https://motion.dev/docs/react-use-reduced-motion
- GSAP documents ScrollTrigger, `scrub`, `pin`, refresh behavior, and `gsap.matchMedia()` responsive/reduced-motion setup: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ and https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29
- React Three Fiber documents `Canvas`, `dpr`, `frameloop`, and render-loop ownership: https://r3f.docs.pmnd.rs/api/canvas
- Rive documents web runtimes, state machines, and runtime state-machine inputs: https://rive.app/docs/runtimes/web and https://rive.app/docs/runtimes/web/state-machines
- Lottie-web documentation covers authored vector animation runtime usage: https://airbnb.io/projects/lottie-docs/
- MDN documents View Transitions API behavior and CSS scroll-driven animation progressive enhancement: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API and https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations

## Output contract

```md
Library source verification gate
- Surface:
- Product object:
- Accepted library/API:
- Current source inspected:
- Version/import assumption:
- Capability used:
- Native/browser alternative:
- Why the library earns its cost:
- Integration boundary:
- State owner:
- DOM/canvas/media owner:
- Text/control owner:
- Cleanup/disposal rule:
- Reduced-motion branch:
- Unsupported/failed-load fallback:
- Performance guard:
- Accessibility guard:
- QA selector/probe:
- Rejected stale/default pattern:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## What To Verify

### Source freshness

- Use official docs for the exact library/API, not memory or old blog snippets.
- Record the docs URL or local package documentation inspected.
- Verify the import path, framework boundary, and browser-support assumption.
- If the current project already has a version installed, inspect `package.json`, lockfile, and existing usage before adding or changing imports.
- If docs and installed version disagree, prefer the installed version or update intentionally.

### Capability Fit

- Name the exact capability being used: layout continuity, scroll timeline, 3D inspection, state-machine illustration, authored loop, route transition, chart decision, command menu, form validation, table behavior, or overlay accessibility.
- Name the native/browser alternative and why it is not enough.
- Reject the library when CSS, native HTML, SVG, browser APIs, or existing product-library behavior can do the job with less risk.
- Reject any library that only changes atmosphere while the product proof, usability, or state model remains generic.

### Integration Boundary

- Browser-only libraries need client/runtime boundaries in Next, Remix, Astro islands, Electron/Tauri renderers, or SSR-capable apps.
- React state remains the owner for product state; animation timelines may reflect state but should not invent hidden state.
- HTML owns semantic text, CTAs, labels, forms, errors, status, prices, and recovery copy.
- Canvas, video, Rive, Lottie, Spline, and WebGL may own visuals, but not essential interface content.
- Product-library primitives own behavior only when their accessibility and state models are preserved.

### Lifecycle And Cleanup

- Motion: avoid layout animation on unstable dense lists/tables; prove focus survives state changes.
- GSAP: register plugins once, create timelines inside an owned scope, use responsive/reduced-motion setup, and clean up timelines/triggers on unmount or remount.
- Three/R3F/Pixi/canvas: cap DPR/object count, pause or reduce offscreen work, dispose owned resources where applicable, and provide a nonblank fallback.
- Rive: name state machines/inputs and drive them from product state, not guessed frame numbers.
- Lottie: keep loops small, pausable/offscreen-aware, and backed by a static poster/SVG.
- View Transitions: feature-detect and preserve focus, scroll, loading, error, and permission states.
- Data-viz: verify the chart library answers a named question and has accessible summary/table fallback.

### Fallbacks

- Reduced motion must preserve the same product information, not remove the proof.
- Unsupported browsers get a static or no-op path that keeps the task usable.
- Failed media/runtime loads get reserved geometry, text/status recovery, and useful fallback imagery or content.
- Mobile may need a different composition, shorter motion, or static proof stack rather than a squeezed desktop effect.

## Library-Specific Acceptance

| Library/API | Pass When | Block When |
|---|---|---|
| Motion | React state, layout, gesture, or shared-object continuity is clearer and accessible | Decorative fades/staggers are the only job |
| GSAP ScrollTrigger | A named 3-5 beat authored timeline proves the product | Basic reveals, trapped scroll, no reduced-motion/static frames |
| Three/R3F | Spatial depth is the proof and HTML owns controls/text | 3D is wallpaper behind generic copy |
| Rive | Named state-machine inputs map to product states | Dense UI/text is trapped in the asset |
| Lottie | Small accent loop has pause/offscreen/static fallback | Main proof or important reading depends on the loop |
| View Transitions | Same object changes view and focus/scroll are preserved | Transition masks loading/error/permission state |
| Native scroll CSS/WAAPI | Progressive enhancement has readable static fallback | Essential content is hidden until animation completes |
| Data-viz | Chart answers a named user question with source/units/fallback | Decorative metric art has no decision or accessible data |

## Hard Fails

- No official/current source inspected for the selected library/API.
- Import path, framework boundary, or browser support is guessed.
- Library owns essential semantic text, controls, errors, recovery, prices, or labels.
- Reduced-motion, unsupported-browser, failed-load, or mobile fallback is missing.
- Cleanup/disposal is omitted for timelines, scroll triggers, canvases, media, or runtime assets.
- QA cannot prove that the library rendered, changed state, stayed accessible, and survived responsive/reduced-motion paths.
- The rendered product would look and behave essentially the same if the library were removed.
