# Choreography state machine

Use this after `animation-creation.md` or `premium-animation-direction.md` and before `motion-library-playbooks.md` when motion is central to the design.

The goal is to turn "cool animation" into a designed behavior system: scenes, triggers, states, ownership, accessibility fallbacks, and QA probes. This prevents pasted props, random motion, and library stacking.

After this state machine is written, use `motion-pattern-atlas.md` to choose the choreography pattern before selecting Motion, GSAP, Three/R3F, Rive, Lottie, video, Lenis, Anime.js, Theatre.js, PixiJS, View Transitions, or native scroll CSS.

## Required output

```md
Choreography state machine
- Motion thesis: ...
- Main object: ...
- Scenes: idle, reveal, inspect, transform, proof, close
- User triggers: load, scroll, pointer, tap, keyboard, route change, data change
- System states: loading, ready, busy, paused, reduced motion, error, empty
- Ownership: CSS, Motion, GSAP, Three/R3F, Rive, Lottie, video, native view/scroll API
- Persistent controls: pause/skip, inspect, next/previous, replay, reduced-motion equivalent
- Timing contract: duration, easing/spring, stagger, scroll range, interruption behavior
- Performance contract: animated properties, media weight, DPR cap, lazy loading, offscreen pause
- QA probes: desktop, mobile, keyboard, reduced motion, nonblank media/canvas, console, frame/CLS risk
```

## State model

Every meaningful animated surface needs three layers.

### 1. Scene states

Scene states describe what the viewer sees.

| State | Job | Quality bar |
|---|---|---|
| Idle | Stable first impression | main object readable without motion |
| Reveal | Establish hierarchy | one focal change, no content hidden for long |
| Inspect | Let the user examine proof | labels, controls, or details stay still enough to read |
| Transform | Show before/after or cause/effect | change is traceable, not magic decoration |
| Proof | Expose evidence | product output, data, artifact, or real UI is visible |
| Close | Return control | CTA, next section, or app action is reachable |

If the animation has no `proof` state, it is likely brand ambience rather than product design. That can be fine for a campaign, but it must be named honestly.

### 2. Interaction states

Interaction states describe how the user changes the scene.

- Hover: optional enhancement only; never the only path to content.
- Focus: must mirror hover meaning when the element is actionable.
- Tap/click: should create a visible selected, opened, paused, or progressed state.
- Keyboard: required for command palettes, carousels, tabs, dialogs, galleries, and app controls.
- Scroll: should move through a known sequence, not trigger unrelated effects.
- Drag/scrub: needs visible bounds, current value, and reset/escape.
- Route/view change: preserve continuity, focus, and loading/error visibility.
- Data update: animate arrival, removal, or status change without shifting critical controls.

### 3. System states

System states protect usability.

- Loading: show a stable placeholder or poster; avoid blank canvases and invisible videos.
- Ready: animation is available but content already makes sense.
- Busy: prevent duplicate actions and show progress without moving the target away.
- Paused: users can stop persistent motion when it lasts or loops.
- Reduced motion: replace movement with static frames, opacity, cuts, or stepped sections.
- Error: show fallback media, missing asset state, or degraded interaction.
- Empty: explain how content appears; do not fill emptiness with decorative loops.

## Trigger rules

Use the trigger that matches intent.

| Trigger | Use for | Avoid |
|---|---|---|
| Load | first impression, brand reveal, object arrival | delaying primary navigation or reading |
| Scroll enter | section reveal, progress through story | tiny text or controls that must be found quickly |
| Scroll scrub | authored product story, pinned proof, camera path | dashboards, forms, docs, checkout, long reading |
| Pointer | inspection, light/lens, direct manipulation | essential mobile behavior |
| Tap/click | mode switch, detail open, replay, compare | hidden side effects |
| Keyboard | expert workflow, command surfaces, accessibility parity | purely decorative flourishes |
| Route change | detail continuity, gallery/app navigation | masking loading/error/permission states |
| Data change | artifact arrival, status update, realtime proof | animating every row in dense data |

## Ownership rules

Assign each animated behavior to exactly one owner.

- CSS owns simple feedback, opacity/transform entrances, masks, static fallbacks, and reduced-motion overrides.
- Motion owns React state continuity: layout changes, shared elements, command palettes, sheets, tabs, route/detail transitions, gestures, and component-level springs.
- GSAP owns authored timelines: pinned stories, scrubbed proof, SVG paths, masks, multi-object sequencing, and scene labels.
- Three/R3F owns real spatial objects, camera paths, material reveals, and shader/media worlds where depth is the product object.
- Rive owns designer-authored stateful illustration with named inputs.
- Lottie owns small authored vector loops, loaders, marks, and empty-state accents.
- Video owns cinematic proof when photoreal or generated output matters more than runtime interactivity.
- Native scroll/view APIs own progressive enhancement when the fallback remains useful.

If two libraries want to own the same property on the same element, simplify. For example, do not let GSAP and Motion both animate `transform` on the hero object.

## Timing contract

Name timing before code.

- Micro feedback: 80-180ms, usually CSS.
- Component entrance: 180-360ms, spring or ease-out.
- Layout continuity: 250-600ms, interruptible.
- Hero reveal: 700-1400ms, skippable by scroll.
- Pinned story: 2-4 scenes, usually 120-220vh total.
- Looping ambience: subtle, pausable, never competing with reading.

Use stagger only when it communicates grouping or order. Random staggered cards are a common generic-AI tell.

## Reduced-motion substitutions

Reduced motion is not "delete the design." Replace the job of the motion:

- Reveal -> static composed hero frame.
- Scroll scrub -> stacked sections with the same proof frames.
- Parallax/camera -> cross-fade or direct cut.
- Object orbit -> still object plus detail callouts.
- Rive/Lottie loop -> first frame or user-triggered play.
- Video background -> poster with native controls or paused preview.
- Layout transition -> instant state change plus focus management.

## QA probes

Run these when implementing serious motion:

- Desktop screenshot: focal object, type, controls, and proof are coherent.
- Mobile screenshot: no tiny scrub targets, clipped hero text, or offscreen controls.
- Reduced motion: all information remains available.
- Keyboard: focus order does not enter hidden or invisible animated elements.
- Console: no missing assets, WebGL errors, hydration errors, or animation warnings.
- Nonblank media/canvas: video poster, image, canvas, or Rive/Lottie frame actually renders.
- Performance: continuous motion uses transform/opacity when possible; heavy media is lazy or compressed; WebGL DPR is capped.
- Layout stability: animated changes do not create surprising layout shift.

## Source anchors

- Motion documents `useReducedMotion` as a way to replace movement such as x/y, autoplay video, and parallax with safer alternatives: https://motion.dev/docs/react-use-reduced-motion
- Motion layout/view animation guidance centers discrete layout/view changes and continuity: https://motion.dev/docs/animate-view
- GSAP `ScrollTrigger.matchMedia()` documents breakpoint-scoped ScrollTriggers and automatic cleanup when media queries stop matching: https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia%28%29
- Rive web runtimes expose state machines and inputs for designer-authored runtime states: https://rive.app/docs/runtimes/web/state-machines
- Chrome documents CSS Scroll-driven Animations as scroll/view timeline APIs for declarative scroll-linked effects: https://developer.chrome.com/docs/css-ui/scroll-driven-animations
- MDN documents `prefers-reduced-motion` as the CSS media feature for users who request minimized non-essential motion: https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion
- web.dev recommends animating transform/opacity where possible to stay on the compositing stage: https://web.dev/articles/animations-guide
- web.dev CLS guidance calls out transform animations as a way to update visuals without surprising layout shifts: https://web.dev/optimize-cls
- Three.js responsive rendering guidance warns against blindly using full `devicePixelRatio` for heavy scenes: https://threejs.org/manual/en/responsive.html
- React Three Fiber performance guidance highlights DPR/performance scaling and the 60fps render-loop cost model: https://r3f.docs.pmnd.rs/advanced/scaling-performance

## Hard fails

- No named main object.
- More than one scene competes for primary attention.
- Motion hides product proof, pricing, permission, or error states.
- Essential information exists only on hover.
- No reduced-motion equivalent.
- A long pinned section has no skip, stacked fallback, or clear progress.
- Canvas/video/Rive/Lottie can render blank without fallback.
- Multiple libraries animate the same element or property without a clear owner.
- The design can only be described as a collection of effects.
