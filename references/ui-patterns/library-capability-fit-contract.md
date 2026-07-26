# Library capability fit contract

Use this after `capability-maximization-matrix.md` and before `frontend-library-production-presets.md` and `library-orchestration-system.md` when a page/app may use advanced frontend libraries. This contract turns "use Motion/GSAP/Three/Rive/Lottie/etc." into a capability fit check: each dependency must have a job only it can do well.

The goal is to prevent interchangeable polish. A library is accepted only when it improves product proof, interaction clarity, authored choreography, asset quality, accessibility, performance, or QA evidence more than the native platform or an already-selected tool.

## Output contract

```md
Library capability fit
- Product proof:
- User frequency:
- Capability candidates:
- Chosen primary capability:
- Capability jobs:
- Native alternative:
- Fit score:
- Composition rule:
- State/animation owner:
- Text/control ownership:
- Fallback/reduced motion:
- Performance risk:
- QA probe:
- Rejected capability:
- Removal trigger:
```

## Fit score

Score each candidate before implementation.

| Score | Meaning | Action |
|---|---|---|
| 0 | decorative or redundant | reject |
| 1 | convenient but not important | use native/simple CSS instead |
| 2 | improves feel but not proof | keep only if cheap and accessible |
| 3 | materially improves product proof or task quality | allowed |
| 4 | essential to the signature interaction or authored asset | primary capability |

If every candidate scores below 3, do not add an advanced dependency.

## Capability fit table

| Capability | Best fit | Weak fit | QA proof |
|---|---|---|---|
| CSS Grid/subgrid/container queries | layout grammar, adaptive product proof, stable dense regions | state machines, authored motion, visual spectacle | desktop/tablet/mobile structure holds without overflow |
| CSS transitions/keyframes/WAAPI | lightweight transform/opacity motion, direct playback control, progressive enhancement | React layout continuity, scroll films, complex sequence authoring | reduced-motion path and no layout thrash |
| View Transitions API | route/detail continuity and same-document view swaps with fallback | masking loading/error states, form recovery, long choreography | focus/scroll restored, no-op fallback works |
| Motion for React | React state continuity, layout changes, shared elements, gestures, small scroll-linked values | long pinned stories, 3D/canvas worlds, decorative every-card reveal | state changes animate; keyboard/touch parity remains |
| GSAP ScrollTrigger | authored timelines, pinned/scrubbed product proof, SVG/path/text staging | basic fades, repeated app UI, dashboards/docs/checkout | timeline has named beats and static/reduced-motion frames |
| Three/R3F | spatial product object, camera/material proof, inspectable 3D | generic background, inaccessible UI text, low-value particles | canvas nonblank, framed, DPR capped, fallback shown |
| Rive | designer-authored stateful illustration controlled by inputs | dense UI, forms, important text, routing | state-machine inputs respond and HTML owns labels |
| Lottie/dotLottie | compact loops, loaders, empty-state accents, brand marks | primary UI, long ambience, unreadable text in asset | loop can pause/offscreen; static fallback exists |
| Video/generated bitmap | cinematic proof, real/generated output, photoreal key art | fake interactivity, baked CTAs, unreadable product UI | poster, responsive crops, captions/alt, pause policy |
| PixiJS/canvas | many 2D marks/sprites/traces tied to product data | decorative particle fields behind generic copy | pixel nonblank, object cap, pause/offscreen policy |
| Data-viz libraries | named decision, drilldown, comparison, source-backed chart | decorative metric cards | accessible summary and table/source fallback |
| Product libraries | behavior, accessibility, forms, tables, overlays, data state | visual identity, concept, copy voice | keyboard/focus, states, defaults removed |

## Composition rules

- One primary capability owns the memorable moment.
- Native CSS owns layout, containment, responsive media, and tokens unless a clear reason says otherwise.
- Product libraries own behavior, not taste.
- Motion owns React state continuity; GSAP owns authored timelines; Three/Pixi owns render loops; Rive/Lottie owns authored assets; video owns cinematic evidence.
- Important text, CTAs, labels, form controls, status, errors, and prices stay HTML/code-native.
- If two tools animate the same property or state, delete one before coding.
- A capability with no QA probe is not selected.

## Removal triggers

Remove or replace a capability when:

- Reduced motion removes proof rather than substituting it.
- Mobile framing, scroll, focus, or performance fails.
- The product still reads as generic without the effect.
- The library only provides entrance animation or demo styling.
- A static CSS/HTML implementation would communicate the same product proof.
- QA cannot prove the asset/timeline/canvas rendered, changed state, or stayed accessible.

## Source anchors

- Motion documents React layout and shared-element animation through `layout` and `layoutId`: https://motion.dev/docs/react-layout-animations
- GSAP ScrollTrigger ties timelines/tweens to scroll progress and supports scrubbed/pinned sequences: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Rive state machines define animation logic and runtime transitions: https://rive.app/docs/editor/state-machine
- MDN documents same-document view transitions with `document.startViewTransition()` and feature detection: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using
- MDN documents the Web Animations API `Animation` interface for playback control: https://developer.mozilla.org/en-US/docs/Web/API/Animation
- MDN documents `prefers-reduced-motion` as a user preference that animation must respect: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

## Hard fails

- A library is selected because it is trendy rather than because it owns a scored job.
- The chosen stack contains Motion, GSAP, Three, Rive/Lottie, video, and Lenis without one primary choreography mechanic.
- A visual/rendering asset contains essential text or controls.
- Product-library defaults remain recognizable.
- There is no native fallback or reduced-motion substitute.
- There is no removal trigger for the most expensive capability.
