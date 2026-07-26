# Capability maximization matrix

Use this after `design-mode-router.md`, `surface-playbook-matrix.md`, `frontend-technique-matrix.md`, and any motion/product-library playbooks when the user asks to "use everything real designers/devs use," mentions libraries, or wants a page/app to feel next-level. After a capability is accepted, use `frontend-library-production-presets.md` to turn it into a concrete implementation posture with owners, fixtures, fallbacks, budgets, QA probes, and removal triggers.

The goal is not to maximize dependency count. The goal is to maximize the result per capability: native browser primitives, product libraries, motion libraries, authored assets, data, typography, accessibility, and QA should each own a different part of quality.

## Output contract

```md
Capability maximization
- Output mode:
- Product proof:
- Quality target:
- Capability stack:
- Primary capability:
- Supporting capabilities:
- Explicitly rejected capabilities:
- Ownership boundaries:
- Best-result combination:
- Removal rule:
- QA evidence:
```

## Capability jobs

| Capability | Maximizes | Use when | Do not use for |
|---|---|---|---|
| CSS Grid/subgrid/container queries | authored structure and responsive dignity | nested proof rails, aligned product sections, adaptive components | app state, authored timelines, or decorative complexity |
| CSS variables/typed tokens | coherent materials, density, state themes | local theme systems, semantic states, mode/density variants | random per-element colors or one-off gradients |
| View Transitions API | route/detail continuity with platform fallback | docs, galleries, app detail transitions, product proof switching | masking loading/error/focus problems |
| Motion for React | React state continuity and component feel | dialogs, sheets, tabs, active cards, layout changes, gestures, small scroll-linked values | long authored scroll films or 3D/canvas scenes |
| GSAP/ScrollTrigger | authored choreography | pinned product stories, scrubbed proof, SVG/path/text staging, multi-object sequences | routine card fades, dense apps, docs reading |
| Three/R3F | spatial proof | inspectable product object, camera path, material/shader proof, data sculpture | generic background spectacle |
| Rive | designer-authored stateful art | state icons, onboarding diagrams, interactive brand/product illustrations | essential UI text, routing, forms, or dense controls |
| Lottie/dotLottie | compact authored loops | loader, empty-state accent, brand mark, small explanation | primary product UI or long-running ambience |
| Video/generated bitmap | cinematic proof and asset quality | real output, product examples, campaign key art, photoreal moments | fake interactivity or unreadable UI screenshots |
| Product libraries | accessible behavior and state mechanics | dialogs, menus, tables, forms, command palettes, data fetching | visual identity, product concept, or copy |
| Data-viz libraries | decision proof | named chart question, drilldown, source view, accessible summary | decorative metrics |
| Typography systems | voice, readability, scan speed | brand/product tone, dense data, editorial/campaign pages | hiding weak structure behind unusual fonts |
| QA/tooling | confidence | serious/public/high-craft work, animation, libraries, responsive risk | post-hoc justification for untested spectacle |

## Best-result combinations

Choose one primary combination by surface. A high-craft result usually has one signature capability and several quiet supporting capabilities.

### Product proof landing

- Primary: product proof composition, generated/code-rendered asset, or video proof.
- Supporting: Grid/container queries, typography, copy system, Motion for small state continuity.
- Optional: GSAP only if the proof is a real sequence with 3-5 beats.
- Reject: dashboards as decoration, generic feature cards, particle layers, library demo sections.

### Cinematic animation page

- Primary: GSAP timeline, Three/R3F object, video composite, or Rive state machine.
- Supporting: HTML proof labels, accessible controls, reduced-motion static frames, performance budget.
- Optional: Motion for local UI entrances only.
- Reject: multiple hero objects with unrelated motion, text hidden inside media, no proof state.

### Stateful product app

- Primary: product libraries and state model.
- Supporting: CSS layout/density, accessibility interaction contract, Motion for local continuity, data/content fixtures.
- Optional: charts/forms/command menu only when the task requires them.
- Reject: pinned scroll, cinematic hero framing, animation that moves targets during repeated use.

### Docs/developer platform

- Primary: navigation/information architecture, search/command, code proof.
- Supporting: View Transitions or Motion for route/detail continuity, copy system, typography, responsive containment.
- Optional: light interactive demos.
- Reject: scroll hijacking, background 3D, motion that slows reading/copying.

### Dashboard/operations

- Primary: data model, table/list mechanics, state coverage.
- Supporting: TanStack/query/form primitives, density tokens, accessibility, data-viz only for named decisions.
- Optional: Motion for status arrival, panel continuity, optimistic updates.
- Reject: cinematic motion, marketing spacing, decorative charts.

### Gallery/showcase proof

- Primary: curation, comparison, high-quality media, responsive framing.
- Supporting: Embla/native carousel or CSS scroll snap, keyboard controls, captions, source/attribution.
- Optional: View Transitions for detail continuity.
- Reject: autoplay-only galleries, cropped proof, unexplained samples.

## Ownership boundaries

Before coding, write one owner per behavior:

- Layout owner: CSS.
- Interaction owner: native/Radix/React Aria/component state.
- Animation owner: CSS, Motion, GSAP, Three/R3F, Rive, Lottie, video, or View Transitions.
- Data owner: fixtures, TanStack Query, local reducer, server action.
- Form owner: native, React Hook Form, Zod.
- Visual system owner: tokens, material system, typography, assets.
- Accessibility owner: semantics, focus, labels, reduced motion, live regions.
- QA owner: screenshots, console, interaction probes, nonblank media, performance checks.

If two owners animate the same element property, keep the stronger product owner and remove the other.

## Maximization rules

- Add a capability only when it changes product proof, interaction quality, asset quality, responsive behavior, accessibility, or verification.
- Prefer one excellent signature moment over five medium effects.
- Use native primitives first for layout, containment, tokens, media boxes, scroll progress, and progressive route transitions.
- Use product libraries for behavior and accessibility; restyle anatomy, tokens, copy, density, and states so defaults disappear.
- Use motion libraries for state/choreography, not for every element entering the viewport.
- Keep important UI text, CTAs, labels, errors, prices, and controls code-native.
- Every visual/media capability needs a fallback and a nonblank rendered check.
- Every advanced dependency needs a removal rule: what to cut first if performance, clarity, mobile, or accessibility fails.

## QA evidence

For serious work, prove the chosen stack:

- Desktop and mobile screenshots show the product object and proof clearly.
- Primary interaction works and changes state.
- Reduced motion preserves proof and navigation.
- Keyboard/focus path works through overlays, galleries, route changes, and animated exits.
- Console is clean after route/detail changes and primary interactions.
- Media/canvas/Rive/Lottie/video is nonblank, framed, pausable/offscreen-safe, and has fallback.
- Performance budget names lazy loading, DPR/media caps, pause policy, and removal candidates.
- The product remains recognizable if all decorative motion is disabled.

## Source anchors

- Motion for React documents component animation, layout, gesture, and scroll-linked APIs: https://motion.dev/docs/react
- GSAP ScrollTrigger documents timeline-driven scroll, scrub, pinning, and scroll progress control: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Rive web runtimes expose state machines and inputs for designer-authored runtime states: https://rive.app/docs/runtimes/web/state-machines
- MDN documents the View Transitions API for animated transitions between website views with fallback-friendly feature detection: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- MDN documents container queries for component layout based on container size rather than viewport size: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- web.dev recommends transform and opacity for high-performance animations where possible: https://web.dev/articles/animations-guide

## Hard fails

- Capability list is longer than the product proof.
- More than one library owns the same animation behavior.
- The design looks like a library demo with custom colors.
- Advanced media carries essential text or controls.
- Reduced motion removes the main proof.
- Mobile is a scaled-down desktop composition with tiny controls.
- QA cannot prove that the chosen capability actually rendered or changed state.
