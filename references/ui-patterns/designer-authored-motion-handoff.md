# Designer-authored motion handoff

Use this when the selected direction depends on authored motion assets or authored timelines: GSAP timelines, Theatre.js sequences, Rive state machines, Lottie/dotLottie loops, video composites, Spline scenes, PixiJS/canvas fields, SVG path films, or designer-tuned keyframes.

This file sits after `animation-creation.md`, `premium-animation-direction.md`, `choreography-state-machine.md`, `motion-pattern-atlas.md`, and `motion-library-playbooks.md`. Use it before `library-implementation-blueprints.md`, `motion-frame-qa-contract.md`, and implementation.

The goal is a production handoff, not a mood note. Authored motion must have named beats, controllable states, exported assets, ownership boundaries, deterministic QA frames, and accessible fallbacks.

## Required output

```md
Designer-authored motion handoff
- Surface:
- Motion owner: GSAP / Theatre / Rive / Lottie / video / Spline / Pixi / canvas / SVG / mixed
- Product object:
- Motion thesis:
- Authored asset or timeline:
- Beat map:
- Runtime controls:
- State inputs:
- DOM-owned text and controls:
- Export/package:
- Fallback frame:
- Reduced-motion substitute:
- Mobile substitute:
- Performance budget:
- Versioning owner:
- Rejected motion:
- QA frame hooks:
```

## Handoff model

| Layer | Must define | Why it matters |
|---|---|---|
| Story beats | 3-5 named beats with proof job | prevents effect soup |
| Runtime controls | play, pause, seek, scrub, trigger, reset, or no control | lets QA and users control the sequence |
| State inputs | named Rive inputs, Theatre props, GSAP labels, video timestamps, canvas seeds | avoids brittle frame guessing |
| Code ownership | what stays HTML/app state versus inside the asset | preserves accessibility and responsive layout |
| Export | files, JSON/state, media, dimensions, compression, version | makes the asset reproducible |
| Fallback | poster, static frame, simplified section, reduced-motion path | keeps proof available when motion cannot run |
| QA hooks | labels, query params, test ids, fixed seeds, frame selectors | makes visual checks deterministic |

## Library-specific contracts

### GSAP authored timeline

- Name labels for `poster`, `beat-1`, `beat-2`, `proof`, and `end` before coding.
- Use one timeline owner for the main sequence; avoid many independent ScrollTriggers fighting for attention.
- If scroll-scrubbed, map labels to scroll positions for capture and jump controls.
- Keep important copy, buttons, and status in HTML.
- Provide reduced-motion static sections or stepped states.
- QA: seek every label, capture frames, verify cleanup/remount, and check mobile range is not a trapped pin.

### Theatre.js sequence

- Use Theatre when keyframe authoring, camera choreography, or exact art direction is the reason for the dependency.
- Name project, sheet, object, and prop groups in the handoff.
- Export the authored state and treat it as source-controlled design data.
- Keep Studio/editor-only code out of production runtime unless explicitly needed.
- Keep semantic text and controls outside the authored scene.
- QA: load exported state, seek meaningful positions, capture poster/proof/end, and verify fallback if the state fails to load.

### Rive state machine

- Name artboard, state machine, and every runtime input.
- Drive inputs from product state or controls, not frame numbers.
- Keep copy, CTA, prices, status, errors, and recovery outside the `.riv`.
- Provide first-frame poster or static SVG/PNG fallback.
- QA: trigger every input, test keyboard/touch equivalents, capture active and fallback states.

### Lottie / dotLottie

- Use for compact loops, loaders, brand marks, or empty-state accents, not the primary interface.
- Document loop policy, autoplay policy, pause/offscreen behavior, and file size budget.
- Keep important labels and controls in HTML.
- Provide static SVG/PNG fallback.
- QA: check first frame, meaningful loop frame, reduced-motion pause/static state, and offscreen pause.

### Video composite

- Use video when cinematic proof or generated media is the product artifact.
- Define poster frame, proof timestamp, captions/labels, compression, aspect ratios, and preload policy.
- Keep product controls and core claims in DOM overlays.
- Provide pause controls when motion persists beside content.
- QA: poster nonblank, proof timestamp readable, mobile crop correct, reduced-motion static equivalent present.

### Spline / designer 3D scene

- Treat Spline as an asset, not the full app.
- Define scene role, poster/mobile substitute, load failure behavior, and which interactions matter.
- Keep copy, buttons, labels, and product state in HTML.
- QA: scene loads, poster fallback works, mobile framing preserves object, controls remain accessible.

### PixiJS / canvas / SVG authored field

- Use when many marks, particles, traces, sprites, or paths are the product proof or visual system.
- Define object count, seed, viewport scaling, DPR cap, pause/offscreen behavior, and HTML labels.
- QA: fixed seed screenshot, nonblank pixels, resize/framing, reduced-motion/static substitute, no essential text in canvas.

## DOM-owned content rule

Authored assets can carry atmosphere, illustration, marks, geometry, camera, or proof imagery. They should not own:

- primary H1/body copy
- CTAs, links, forms, prices, legal text, or recovery copy
- navigation, focus order, or current-location state
- error, permission, success, loading, or destructive-action status
- data labels needed for decision making

If the asset must visually include text, duplicate the semantic source in DOM or provide an accessible HTML equivalent.

## QA handoff checklist

- Every named beat has a frame hook or seek method.
- Reduced motion preserves product proof, not only the mood.
- Mobile has a simpler substitute when the authored sequence cannot fit.
- Fallback poster/static frame is composed and useful.
- Asset load failure leaves a readable page.
- No important text/control exists only inside canvas/video/Rive/Lottie/Spline.
- Performance budget names size, DPR, offscreen pause, and lazy-loading policy.
- The sequence can be remounted or navigated away from without duplicated listeners/timelines.
- Versioned asset files or exported state are part of the implementation plan.

## Hard fails

- "Designer-authored" means a random loop pasted behind generic copy.
- The animation can only be QAed by watching it live with no labels, seek, or state hooks.
- A Rive/Lottie/video/canvas asset contains essential UI text or controls.
- Theatre/GSAP timelines have no named beats.
- Mobile shows a shrunken desktop film with hidden proof or unreachable controls.
- Reduced motion removes the only evidence that the product works.

## Source anchors

- GSAP timelines support labels, seeking, and timeline-level sequencing: https://gsap.com/docs/v3/GSAP/Timeline/
- GSAP ScrollTrigger can convert timeline labels to scroll positions for scrubbed capture/control: https://gsap.com/docs/v3/Plugins/ScrollTrigger/labelToScroll%28%29/
- Theatre.js Studio uses a sequence editor for keyframed scene authoring and supports exported animation state for production use: https://www.theatrejs.com/docs/latest/manual/studio and https://www.theatrejs.com/docs/latest/getting-started/with-html-svg
- Rive web runtimes play named state machines and expose runtime inputs for controlling authored animation state: https://rive.app/docs/runtimes/web/state-machines and https://rive.app/docs/runtimes/web/rive-parameters
- Motion frame QA, Playwright screenshots, and WCAG reduced-motion/pause requirements should verify authored motion output rather than assuming it is acceptable because it plays.
