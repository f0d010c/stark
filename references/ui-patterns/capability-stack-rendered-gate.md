# Capability stack rendered gate

Use this after `capability-maximization-matrix.md`, `library-capability-fit-contract.md`, `frontend-library-production-presets.md`, `library-implementation-blueprints.md`, `library-source-verification-gate.md`, and `library-orchestration-system.md` once rendered/browser evidence exists.

This gate accepts, repairs, or blocks an advanced frontend stack based on the actual output. A page does not pass because it imports Motion, GSAP, Three/R3F, Rive, Lottie, View Transitions, data-viz, or product libraries. It passes when the rendered product is clearer, more usable, more specific, more accessible, or more verifiable because of the selected capability.

## Source anchors

- Motion React documents layout animation, gestures, scroll hooks, and `useReducedMotion` for React-owned motion: https://motion.dev/react
- GSAP ScrollTrigger documents scroll-linked timelines, pinning, scrub, refresh behavior, and responsive setup through `gsap.matchMedia()`: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ and https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29
- React Three Fiber documents `Canvas`, `dpr`, `frameloop`, and render-loop ownership for Three scenes: https://r3f.docs.pmnd.rs/api/canvas
- Rive documents web runtime state machines and inputs for authored interactive animation: https://rive.app/docs/runtimes/web/state-machines
- MDN documents `prefers-reduced-motion` as a user preference that interfaces should honor: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- web.dev animation guidance recommends compositor-friendly properties such as transform and opacity for smoother animation: https://web.dev/articles/animations-guide

## Output contract

```md
Capability stack rendered gate
- Surface:
- Product object:
- Rendered evidence inspected:
- Intended capability stack:
- Actual rendered capabilities:
- Signature capability:
- Supporting capabilities:
- Product proof gained:
- Usability gained:
- Visual quality gained:
- Accessibility/fallback result:
- Mobile/reduced-motion result:
- Performance/runtime result:
- Library/default residue:
- Unused or low-value dependency:
- Capability conflict:
- Removal/repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Acceptance Questions

Judge the rendered page/app, not the plan:

- Can a viewer identify the product object before naming the libraries?
- Which one capability owns the signature moment?
- Which supporting capabilities are quiet enough to improve the product without competing?
- What can the user do or understand now that they could not without the capability?
- Does the mobile or reduced-motion version preserve the same proof?
- Does the stack improve task speed, clarity, state continuity, data proof, asset quality, or verification?
- Would the design look basically the same if the most expensive capability were removed?

Hard fail: the library stack is more memorable than the product.

## Rendered Evidence

Inspect enough evidence for the stack risk:

- desktop and mobile screenshots
- reduced-motion screenshot or static proof path
- primary interaction/state-change recording or screenshots
- console/runtime health
- nonblank canvas/media/Rive/Lottie/video probe
- keyboard/focus check through overlays and animated exits
- performance check when WebGL, pinned scroll, video, large charts, or persistent animation is core
- source or DOM check proving imported libraries are actually used

If the evidence is missing, the gate result is at most acceptable with risk and usually repair required.

## Product Proof Test

The stack passes only when at least one selected capability materially improves product proof:

- Motion clarifies a React state or layout change.
- GSAP tells a named 3-5 beat product story.
- Three/R3F makes an object inspectable or spatially understandable.
- Rive maps authored states to real product state.
- Lottie/dotLottie makes a small state or brand moment clearer without carrying UI.
- View Transitions preserve object continuity across views.
- Product libraries add accessible behavior and state coverage.
- Data-viz answers a named user question with units, source, and fallback.

Repair if the capability only adds ambience, entrance animation, decorative particles, demo styling, or scroll spectacle.

## Capability Conflict Test

Block or repair when:

- Motion, GSAP, CSS, and View Transitions animate the same element property.
- Three/R3F, video, and generated bitmap all compete as the hero object.
- Rive/Lottie/video owns essential text, labels, CTAs, controls, or errors.
- Product libraries own visual identity through untouched default tokens.
- TanStack/server state, local state, form state, animation state, and scene state blur inside one component.
- Smooth scrolling or pinned sections break keyboard, focus, reading, or URL/scroll restoration.

The repair is deletion or ownership simplification, not more polish.

## Fallback And Removal Test

Every advanced capability needs:

- a reduced-motion substitute
- unsupported/failed-load behavior where relevant
- mobile replacement or recomposition
- cleanup/disposal/pause policy when it owns timelines, media, render loops, or scroll triggers
- a removal trigger if clarity, accessibility, performance, or mobile fails

If removing the capability does not damage product proof, remove it.

## Gate Results

- **Blocked**: the stack hides the product, breaks reading/focus/mobile/reduced motion, lacks fallback, or cannot be proven from rendered evidence.
- **Repair required**: one capability earns its place but conflicts, low-value dependencies, default residue, or missing evidence reduce quality.
- **Acceptable with risk**: the stack improves proof, but one non-critical fallback/performance/detail risk remains and is documented.
- **Pass**: one signature capability and quiet supports visibly improve product proof, usability, visual quality, accessibility, mobile/reduced-motion behavior, and verification without default or demo residue.

## Hard Fails

- Imported library is not visible in product behavior or rendered evidence.
- Product proof disappears when motion is disabled.
- Mobile is a squeezed version of the desktop effect.
- Essential text/control/status/recovery is trapped inside canvas, video, Rive, Lottie, or generated bitmap.
- Console/runtime errors appear after the primary interaction.
- Canvas/media/runtime asset is blank, cropped beyond usefulness, unpausable, or has no fallback.
- Product-library starter defaults remain the most recognizable visual language.
- The chosen stack makes the page feel more impressive but less usable.
