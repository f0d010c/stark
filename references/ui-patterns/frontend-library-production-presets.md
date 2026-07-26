# Frontend library production presets

Use this after `capability-maximization-matrix.md`, `library-capability-fit-contract.md`, and `library-orchestration-system.md` when Stark has chosen advanced frontend capabilities and needs to turn them into a production-ready implementation posture. Follow with `library-implementation-blueprints.md` before code when the accepted library needs import boundaries, cleanup, performance guards, fallbacks, and QA selectors.

This file answers: "Now that the right library is chosen, how should it be used so the result feels designed, maintainable, accessible, and verifiable?"

The goal is not more dependencies. The goal is a preset with one library job, source-backed behavior, exact ownership, fixtures, fallbacks, and QA evidence.

## Output contract

```md
Frontend library production preset
- Product surface:
- Primary product object:
- Selected preset:
- Source-backed capability:
- Library owner:
- Native owner:
- Product-library owner:
- Data/fixture owner:
- Text/control owner:
- Motion/media owner:
- State model:
- Reduced-motion/fallback:
- Performance budget:
- QA probes:
- Rejected preset:
- Removal trigger:
```

## Preset selection

| Preset | Use when | Primary owner | Quiet support | Reject when |
|---|---|---|---|---|
| React state continuity | UI changes because app state changes | Motion | CSS tokens, React state, accessibility contract | the motion is a long authored scroll film |
| Authored scroll proof | scroll tells a 3-5 beat product story | GSAP ScrollTrigger | static proof frames, HTML labels, reduced motion | the surface is a dashboard, docs page, checkout, or form |
| Route/detail continuity | the user moves between views or objects | View Transitions API or Motion | focus/scroll restoration, loading/error states | transition hides route state, loading, or permission changes |
| Spatial product object | the product object benefits from depth/inspection | Three/R3F or Spline | poster fallback, HTML overlays, performance budget | 3D is wallpaper behind generic copy |
| Stateful authored illustration | an illustration has runtime states | Rive | HTML labels/controls, named inputs, static poster | dense UI, forms, tables, or important text live inside the asset |
| Small authored loop | a compact brand/empty/loading accent is needed | Lottie/dotLottie | pause/offscreen policy, static SVG/poster | loop carries main proof or repeats forever near reading content |
| Compact DOM/SVG sequence | a small static page needs timeline/path/type motion | Anime.js or WAAPI | CSS fallback, named timeline, reduced motion | React layout continuity or pinned scroll is required |
| Studio-authored keyframes | designers will tune a cinematic sequence | Theatre.js | exported sequence docs, poster frames, HTML UI | nobody will maintain the authored timeline |
| High-volume 2D field | many marks/sprites/traces need GPU-backed 2D | PixiJS/canvas | HTML labels, object caps, pause/offscreen | a static SVG/bitmap communicates the same proof |
| Data decision surface | the product object is data and decisions | Chart.js, ECharts, D3/visx, Observable Plot | accessible summary, source/table fallback | charts are decorative metric cards |

## Preset details

### React state continuity

Use Motion when component state, layout changes, gestures, shared elements, or local scroll-linked values need continuity.

Production posture:

- Use React state as the source of truth.
- Use `layout`, `layoutId`, variants, gestures, or `useAnimate` only where they clarify state.
- Keep focusable controls stable; do not move targets during repeated-use tasks.
- Use `useReducedMotion` and keep the same information visible when motion is disabled.
- Keep CSS responsible for layout, tokens, container queries, and static responsive behavior.

QA probes:

- State change animates without losing focus.
- Keyboard and touch paths work without hover.
- Reduced motion preserves the same state change.
- Layout animation does not cause overflow or table/list instability.

### Authored scroll proof

Use GSAP ScrollTrigger when the page has a real authored sequence: pinned product proof, scrubbed transformation, SVG path staging, text sequence, or multi-object reveal.

Production posture:

- Name 3-5 timeline beats before coding.
- Use one master timeline for the proof moment.
- Use responsive setup and cleanup for desktop/mobile differences.
- Give reduced-motion users static stacked proof frames, not an empty section.
- Keep important text, CTA, labels, and state in HTML.

QA probes:

- Start, beat, proof, and end frames are capturable.
- Scroll range is not longer than the story earns.
- Mobile has either a shorter choreography or a different stacked composition.
- Reduced motion still proves the product.

### Route/detail continuity

Use View Transitions API or Motion when continuity helps users understand that a card, row, route, gallery item, or object became a detail view.

Production posture:

- Transition only stable elements that represent the same object.
- Restore focus and scroll deliberately after navigation.
- Keep loading, error, permission, and empty states visible rather than hiding them inside transition blur.
- Provide a no-op fallback when the browser does not support view transitions.

QA probes:

- Back/forward navigation preserves context.
- Focus returns to a useful element.
- Unsupported-browser fallback is usable.
- Transition does not freeze critical controls or mask route errors.

### Spatial product object

Use Three/R3F when depth is the proof: inspection, material, exploded layers, spatial data, camera path, or product object.

Production posture:

- Use one canvas/scene as the visual owner.
- Cap DPR, object count, post-processing, shadows, and texture sizes.
- Lazy-load with a poster frame when the scene is not critical for LCP.
- Dispose scene resources on unmount when the implementation owns them directly.
- Keep UI, copy, labels, controls, and recovery states in HTML overlays.

QA probes:

- Desktop and mobile canvas are nonblank and framed.
- Resize does not crop the product object into meaninglessness.
- Low-performance or reduced-motion path shows a useful poster/static proof.
- Console has no WebGL or asset errors.

### Stateful authored illustration

Use Rive when a design-authored visual needs runtime state machine inputs: onboarding steps, status marks, diagrams, brand interactions, or small product state illustrations.

Production posture:

- Name state machines and inputs in the implementation brief.
- Drive inputs from product state, not guessed frame positions.
- Keep text and controls in HTML.
- Provide static poster or first-frame fallback.

QA probes:

- Each named input changes the illustration.
- Keyboard/touch controls change the same state.
- Static fallback explains the same idea.
- Asset load failure does not break layout.

### Compact DOM/SVG sequence

Use Anime.js or WAAPI when the sequence is compact: SVG line/path motion, kinetic type, small stagger with meaning, or JS-controlled playback without a full animation stack.

Production posture:

- Name the timeline and its job.
- Keep durations short and interactions interruptible.
- Prefer CSS for baseline states and no-JS fallback.
- Do not use random stagger as proof.

QA probes:

- Timeline can be skipped or reduced.
- SVG/path motion has a useful final state.
- No essential content is hidden before animation completes.
- Unsupported/no-JS fallback still reads.

## Fixture and state requirements

Every selected preset needs realistic inputs:

- Product object fixture: item, run, file, event, account, chart, scene, or artifact.
- State fixture: empty, loading, active, selected, error/recovery, success, reduced motion.
- Responsive fixture: desktop, tablet, mobile replacement.
- Accessibility fixture: keyboard path, focus target, label/description, live status when state changes.
- Performance fixture: media size, object count, data count, lazy/pause/offscreen rule.

## Source-backed capability notes

- Motion documents React component animation, variants, gestures, layout animation, scroll-linked values, and imperative controls for sequences.
- GSAP ScrollTrigger documents scroll-linked timelines with scrub, pinning, snapping, responsive setup, and refresh behavior.
- GSAP `matchMedia()` is the preferred pattern for responsive animation setup and reduced-motion branches with cleanup.
- MDN documents the View Transitions API as a mechanism for transitions between website views and exposes lifecycle states and skipping.
- MDN documents CSS scroll-driven timelines for native scroll-linked progress when progressive enhancement is acceptable.
- Rive web runtimes expose state machines and runtime inputs, but runtime code should not depend on brittle frame assumptions.
- React Three Fiber keeps Three state inside `<Canvas>` context and exposes render-loop/performance controls such as `frameloop`.
- Theatre.js exposes projects, sheets, and sequences for authored keyframes; use it only when the sequence will be maintained.
- Anime.js documents timelines, SVG/path motion, text utilities, and WAAPI-oriented animation controls.
- PixiJS is for high-performance 2D WebGL/WebGPU rendering; performance still depends on object count, texture strategy, and update frequency.

## Hard fails

- Preset selected without a product object or state fixture.
- Library owns text, CTAs, form controls, critical labels, prices, errors, or recovery.
- Two libraries animate the same element/property/state.
- Reduced motion removes the product proof.
- Mobile uses the desktop choreography unchanged when it should get a replacement.
- QA checks only that the page loaded, not that the library rendered, changed state, and stayed accessible.
- The result would look the same if the selected library were removed.
