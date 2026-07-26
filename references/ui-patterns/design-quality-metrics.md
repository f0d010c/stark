# Design quality metrics

Use this before final delivery for serious UI generation, redesign, audit, high-craft web work, animation-heavy pages, product apps, dashboards, editors, checkout/trust flows, and public screenshots.

Use `qa-evidence-contract.md` first when deciding what evidence is required, then `browser-qa-matrix.md` when a rendered web target can be probed. Use `visual-repair-playbook.md` when a score, screenshot, or probe reveals a failure. Missing evidence makes a score uncertain.

Use `generated-output-scorecard.md` when scoring generated artifacts, dogfood batches, screenshot candidates, or before/after comparisons. It adds weighted scoring, confidence caps, publish decisions, and feedback-memory triggers on top of this qualitative metric set.

Use `ux-measurement-instrumentation-contract.md` when the design must prove product success beyond screenshots. It defines task success, leading indicators, friction, failure/recovery, event taxonomy, privacy boundaries, accessibility/performance signals, and the learning loop.

Use `benchmark-repair-loop.md` when the score is relative to a reference or shipped-product benchmark. It prevents copying by requiring an originality boundary and before/after evidence for the repair.

Use `design-acceptance-gate.md` after scoring to decide whether Stark can stop. A scorecard can say what is weak; the gate decides whether that weakness is acceptable for the requested level.

Use `quality-calibration-ladder.md` after scoring when Stark needs to choose the one repair most likely to move the design from broken/passable/good/polished to the requested level without random polish.

Use `visual-finish-system.md` before rendered quality when a design has the right structure but weak optical craft, surface detail, value contrast, depth, motion still frames, or screenshot finish.

Use `rendered-quality-gate.md` when screenshot, browser, DOM, or visual inspection evidence exists. It evaluates the actual rendered first read, composition, typography, proof, state visibility, asset/material quality, motion still frames, responsive dignity, default-library residue, and screenshot-worthiness before the acceptance gate.

Use `design-critique-panel.md` when the score or rendered gate finds multiple possible weaknesses and Stark needs to choose the next repair through product, UX, visual, type/copy, motion/media, accessibility, and implementation lenses.

Use `design-taste-diagnostics.md` when the critique is subjective but actionable: cheap, bland, messy, copied, childish, overdesigned, underdesigned, generic, presentation-like, or same-looking. It maps wording to likely cause, taste dimension, preserved decision, first repair, and re-check evidence.

The goal is to score whether the UI got better in product terms, not whether it accumulated more visual effects.

## Scorecard

Score relevant dimensions from 1 to 5.

| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| Product specificity | Generic after logo swap | Some domain language | Layout, states, assets, and controls express the product job |
| User mode fit | Wrong surface density | Mostly fits mode | Browsing/evaluating/operating/editing/buying/recovering needs are protected |
| State coverage | Happy path only | Common states | Empty/loading/error/permission/success/long-running/recovery where relevant |
| Task ergonomics | Pretty screen with unclear repeated use | Main path works | Frequency, risk, controls, speed path, prevention, recovery, and evidence tasks are explicit |
| Hierarchy and scan speed | Everything competes | Main areas readable | Status, risk, owner/source, time, next action scan quickly |
| Originality | Palette-only change | Some distinct direction | Concept changes composition, anatomy, states, and interaction |
| Pattern fit | Default skeleton | Some product pattern | Structural pattern matches object, action, mobile replacement, and state coverage |
| Copy quality | Placeholder/hype | Mostly clear labels | Headline, CTA, proof labels, states, risk, and recovery copy are concrete |
| Typography | Default/arbitrary | Chosen roles | Strategy, roles, scale, data rules, accessibility, and loading are justified |
| Motion/choreography | Decorative or absent fallback | Useful transitions | Motion proves, orients, gives feedback, includes reduced-motion/mobile fallback |
| Asset/material realism | Placeholder/filler | Relevant assets | Assets/materials prove, explain, build trust, or operate in the product |
| Visual tokens | Default palette/spacing/radius | Some token roles | Color, spacing, radius, state, border, shadow, and density roles fit the surface |
| Accessibility | Unchecked | Basic contrast/semantics | Keyboard, focus, labels, contrast, text scaling, reduced motion planned/tested |
| Responsive containment | Breaks/clips | Common widths OK | Dense regions, hero objects, media, nav, code, and labels adapt without page overflow |
| Implementation ownership | One giant mockup | Some structure | Stack, features, primitives, state, assets, motion, and QA ownership are clear |
| Dependency restraint | Packages for vibes | Loosely justified | Libraries chosen for behavior with rejected alternatives and QA |

## Passing bars

- Any public UI: average 3.5+ across relevant dimensions.
- High-craft/original work: 4+ in originality, typography, hierarchy, asset/material realism, and responsive containment.
- Public landing/product proof work: 4+ in copy quality, product specificity, originality, typography, and proof labels.
- Product app work: 4+ in user mode fit, state coverage, accessibility, implementation ownership, and dependency restraint.
- Repeated-use or risky workflow: 4+ in task ergonomics, state coverage, accessibility, hierarchy, and recovery.
- Animation-led work: 4+ in motion/choreography, product specificity, accessibility, performance risk, and reduced-motion fallback.
- Checkout/trust/recovery: 4+ in state coverage, accessibility, hierarchy, copy clarity, and risk visibility.

## Hard fail gates

Do not ship if any apply:

- primary action unclear
- product object unclear
- mobile/tablet page-level horizontal overflow
- clipped/overlapped text
- missing error/permission/recovery for a real workflow
- essential information hidden inside an image/video/canvas/Rive/Lottie
- reduced motion removes important information
- copied reference trade dress
- placeholder/random stock media
- inaccessible icon-only controls
- dependency added only for decoration

## Evidence requirements

Use evidence that matches the risk:

- Decision brief: proves intent, not implementation.
- Component anatomy/state table: proves product state planning.
- Desktop/mobile screenshots: prove visual hierarchy, framing, and overflow.
- Console check: proves no obvious runtime errors.
- Interaction smoke: proves controls are not decorative.
- Reduced-motion check: proves accessibility fallback.
- Canvas/video/image nonblank check: proves media exists.
- Build/lint/test: proves implementation health.

If evidence is missing, mark the score uncertain and keep working.

## Quality report

Keep the final report compact:

```md
Design quality report
- Surface/user mode:
- Scores: product specificity _, state coverage _, hierarchy _, originality _, typography _, motion _, assets _, accessibility _, responsive _, implementation _
- Hard fails: none / ...
- Evidence: ...
- Fix applied after critique: ...
- Remaining risk: ...
```

## Repair priority

When score is weak, fix in this order:

1. Hard fail gates.
2. Product object and primary action.
3. State/recovery coverage.
4. Responsive containment.
5. Typography readability and hierarchy.
6. Motion/accessibility fallback.
7. Asset/material proof.
8. Fine polish.

Do not raise a score by adding decoration. Raise it by making the product job clearer, more usable, more stateful, more accessible, or better verified.

For symptom-specific repairs, use `visual-repair-playbook.md` and re-check the same evidence that failed.
