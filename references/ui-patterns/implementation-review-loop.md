# Implementation review loop

Use this after the design brief, orchestration, library ownership, typography, responsive, usability, QA plans, and `prompt-to-build-compiler.md` output exist, and before claiming the implementation is high quality. The job is to catch design-to-code drift: the moment where the brief sounds premium but the rendered UI still feels generic, messy, copied, inaccessible, or like unrelated elements were pasted together.

This loop reviews rendered behavior and code together. Code can prove ownership and state coverage; screenshots and browser probes prove the user actually receives the intended design.

## Output contract

```md
Design-to-code review loop
- Source decisions:
- Files/components inspected:
- Render/runtime evidence:
- Preserved decisions:
- Drift found:
- Missing states:
- Library ownership mismatch:
- Typography/token mismatch:
- Motion/choreography mismatch:
- Responsive/adaptive mismatch:
- Usability scenario mismatch:
- Accessibility/focus mismatch:
- Performance/fallback mismatch:
- Highest-impact fix:
- Re-check evidence:
- Remaining risk:
```

## When to run it

Run this loop when any of these are true:

- The user asked for high-craft, public, next-level, portfolio, animation-led, or design-director work.
- The design used multiple references, libraries, motion systems, custom typography, generated assets, 3D/canvas/video, product libraries, charts, forms, or complex responsive structures.
- The user critiques the result as bland, cheap, messy, generic, copied, presentation-like, or pasted together.
- A decision brief exists but the rendered result has not been compared against it.
- A screenshot looks decent at a glance but the task, states, mobile, copy, or choreography feel weak.

## Evidence order

1. Read the source decisions: UI decision brief, design director runbook, research synthesis, generation blueprint, prompt-to-build compiler, product intent, composition, typography, copy, asset, library orchestration, motion/choreography, adaptive composition, usability scenarios, QA evidence contract, and acceptance gate.
2. Inspect the implementation: key components, styles/tokens, data fixtures, states, motion owners, assets, and library imports.
3. Inspect rendered evidence: desktop and mobile screenshots, console, interaction probes, focus/keyboard path, reduced motion, overflow, nonblank media/canvas/video/Rive/Lottie, and state screens.
4. Compare intended decisions to actual output. Mark missing evidence as uncertain, not passing.
5. Apply the highest-impact fix. Re-check the same evidence that failed.

Rendered evidence matters most for visual claims. If a browser or screenshot is unavailable, state that the visual result is uncertain and do not claim high-craft quality.

## Drift matrix

| Area | Intended decision | Drift symptoms | First repair |
|---|---|---|---|
| Product object | One object/action anchors the surface | Hero is mood only; screen could fit any product | Rebuild first viewport around the product object and proof |
| Structural pattern | Pattern chosen by user mode and task | Generic hero/cards/table shell returns | Replace with the chosen pattern and delete incompatible sections |
| Copy | Concrete proof, labels, recovery text | Vague hype, cheap CTAs, placeholder labels | Rewrite hero, proof labels, actions, and states from domain nouns |
| Typography | Chosen roles, scale, numeric behavior | Default face, weak hierarchy, bad measure | Reapply type recipe, measure, weight, and data settings |
| Tokens/materials | Product-specific palette, surfaces, density | Default shadcn/Tailwind colors, uniform radius, trend glow | Replace default tokens and align material to product world |
| Layout/composition | Focal path, grid, rhythm, proof placement | Looks like a slide, poster, or scattered collage | Rebuild grid/focal path and remove decorative extras |
| Adaptive composition | Desktop/tablet/mobile structures named | Mobile is squeezed desktop or source-order stack | Implement breakpoint-specific structures and containment |
| Library ownership | One owner per behavior | Motion/GSAP/CSS fight; product libs keep demo UI | Remove overlap, keep behavior owner, de-default visible UI |
| Motion/choreography | Scenes, triggers, fallback, proof job | Random floating props, timeline with no product meaning | Tie one motion pattern to proof and delete unsupported effects |
| States | Empty/loading/error/permission/success planned | Only happy path exists | Implement missing states with controls, copy, and recovery |
| Prototype behavior | Working controls and state transitions planned | Enabled controls are inert or only visually change | Implement the primary interaction and mark/remove static controls |
| Accessibility | Keyboard, focus, labels, reduced motion planned | Focus lost, custom controls unlabeled, motion forced | Fix native semantics, focus order, labels, and reduced motion |
| Performance | Budget, lazy/pause/fallback decisions | Heavy media runs offscreen, no fallback, jank | Add poster/fallback, lazy load, pause offscreen, reduce effects |
| Data/content | Realistic domain fixtures and edge cases | Fake metrics, generic names, no long text | Replace fixtures and stress test long/localized data |
| Assets | Asset proves product or visual system | Decorative image, pasted props, text baked into image | Use proof asset, code-native text, consistent motif |

## Repair priority

Fix in this order:

1. Hard failures that block use, accessibility, loading, or mobile.
2. Product object, primary action, and proof surface drift.
3. Missing scenario/state coverage that makes the UI only a happy-path mock.
4. Adaptive/responsive failures, including overflow and squeezed desktop.
5. Typography, copy, token, and material drift that creates cheapness.
6. Library ownership/default styling drift.
7. Motion/choreography that reads as decoration instead of behavior.
8. Fine polish, spacing, easing, and visual texture.

Do not polish around structural drift. If the surface is wrong, repair the surface.

## Hard fails

- Serious or public UI has no rendered evidence and still claims high-craft quality.
- The design brief names a product object, pattern, state, library owner, typography recipe, or responsive structure that is absent in the implementation.
- The prototype contract requires a primary interaction, but the enabled control is inert or cannot change visible state.
- Library/demo/default styling is visible after the brief required originality or de-defaulting.
- The main proof or primary action is only present inside an image/video and not code-native or accessible.
- Mobile cannot complete the primary task, has page-level horizontal overflow, or is only a squeezed desktop.
- Motion has no reduced-motion equivalent, no pause/offscreen rule for heavy media, or no product meaning.
- Usability scenario evidence says a task should work, but the rendered UI has no path, state, label, focus path, or recovery.
- The final report scores quality without naming the actual files, rendered evidence, fix, and re-check.

## Research anchors

- Playwright screenshots, locators, and web-first assertions are useful for evidence because they inspect rendered output and retry user-visible conditions.
- NN/g usability testing and heuristics support observing task completion, recovery, status visibility, user control, and error prevention rather than relying on visual taste alone.
- WCAG and ARIA APG support focus, labels, keyboard interaction, status messaging, target size, reduced motion, and reflow checks as implementation requirements, not afterthoughts.
