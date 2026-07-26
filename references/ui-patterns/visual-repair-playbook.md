# Visual repair playbook

Use this after a screenshot, browser probe, design-quality score, user critique, or `first-draft-triage-loop.md` result reveals that a UI is bland, messy, generic, hard to use, copied, low-quality, or not production-ready.

This file turns critique into action. Do not add decoration first. Diagnose the failure, apply the smallest high-impact repair, then re-check the same evidence.

When a design is not broken but still below the requested quality tier, use `quality-calibration-ladder.md` to choose the next one-level-up repair instead of changing many visual systems at once.

When the main issue is finish rather than structure, use `visual-finish-system.md` to repair optical alignment, surface detail, value contrast, depth, deletion, motion still frames, and screenshot evidence before adding new concepts.

## Required Output

```md
Visual repair
- Symptom:
- Likely cause:
- First repair:
- Files/areas touched:
- Evidence to re-check:
- What not to do:
- Remaining risk:
```

## Repair Matrix

| Symptom | Likely Cause | First Repair | Re-check | Do Not |
|---|---|---|---|---|
| Looks like generic SaaS | no product object or proof | replace hero/cards with product-specific object, artifact, timeline, matrix, or inspector | screenshot + h1/proof labels | add gradient/card polish |
| Looks like pasted props | no main object or motif | choose one main object and one repeated motif; demote/delete unrelated props | screenshot focal clarity | add more floating objects |
| Feels like a presentation | sections explain features instead of enabling/inspecting | add interactive proof surface, controls, states, and evidence object | interaction smoke + proof visibility | add more narrative copy |
| Text feels cheap | generic hype copy | rewrite around artifact, action, risk, state, owner, proof, or time | DOM text review | add gradient words or slogans |
| Fonts feel generic | default personality or wrong type job | use `font-selection-matrix.md`; assign display/body/mono roles and rejected fonts | mobile/desktop type screenshot | pick a trendy display face only |
| Hierarchy is flat | too many equal cards/accents | make one focal object; reduce accents; use size/position/contrast deliberately | screenshot first glance | increase all shadows/weights |
| Too sparse for app | marketing spacing on repeated-use surface | increase density, add saved views/filters/table/detail, show status/owner/time/action | task scan evidence | fill with decorative cards |
| Too dense for campaign | app chrome overwhelms story | create hero object, editorial rhythm, proof moments, and calmer sections | first viewport screenshot | delete useful proof |
| Motion feels random | no motion thesis or state owner | define choreography state machine; remove effects without proof/feedback role | reduced motion + screenshot | stack Motion/GSAP/Lenis/Three |
| Animation feels low quality | weak asset/proof and no production direction | use `premium-animation-direction.md`; improve main object, asset plan, lighting/material, proof surface | nonblank media + screenshot | copy reference props |
| Mobile clips/overflows | desktop-only composition | choose responsive replacement: stacked proof, detail sheet, bounded scroll, cropped static object | mobile overflow probe | only shrink font sizes |
| State coverage is fake | happy path mock only | use `interaction-state-matrix.md`; add error/empty/permission/stale/selected/recovery states | state evidence task | hide states in docs only |
| Controls feel inert | no behavior ownership | use `interactive-prototype-contract.md`; wire state changes or clearly mark static controls | primary interaction smoke | style buttons only |
| Table/list is unreadable | wrong component for comparison or no containment | use stable columns, units, bounded scroll, priority mobile rows, selected/bulk states | table overflow + scan task | convert to decorative cards |
| Checkout/trust feels risky | missing consequence/recovery copy | show terms, cost, scope, owner, confirmation, preserved input, retry/cancel | error/permission task | use playful motion near risk |
| Accessibility feels bolted on | focus/labels/reduced motion unchecked | add visible focus, names, keyboard path, reduced-motion fallback | browser QA matrix | rely on color/icon alone |
| Asset looks placeholder | asset does not prove product job | replace with code-rendered mock, generated key art, real screenshot, chart, or media proof | asset nonblank + proof check | blur or darken stock imagery |

## Repair Order

Use this order when several issues exist:

1. Broken layout: clipping, overlap, page-level overflow.
2. Wrong product object or surface type.
3. Missing proof, state, or recovery.
4. Inert controls or missing behavior ownership.
5. Typography readability and generic type.
6. Cheap copy and vague labels.
7. Motion and reduced-motion failure.
8. Asset quality and material realism.
9. Fine polish: shadows, borders, hover states, microcopy.

If a high-severity issue remains, do not spend the turn on fine polish.

## One-Fix Rule

After a screenshot critique, apply at least one obvious high-impact fix before final delivery when editing is possible.

Good one-fix examples:

- Replace generic hero cards with an artifact inspector or run timeline.
- Add a mobile detail sheet instead of squeezed split panes.
- Add specific error and retry state to a form.
- Replace generic headline with product-proof copy.
- Move CTA/proof above the fold.
- Add visible focus and disabled reasons.
- Replace placeholder image with generated/code-rendered proof.

Bad one-fix examples:

- "Make it pop" with more gradient.
- Add hover lift to every card.
- Add animation to hide weak structure.
- Change only colors while product object remains generic.
- Add libraries without assigning ownership.

## Evidence Re-check

Re-check the evidence that failed:

- Overflow failed -> measure overflow again.
- Type clipped -> screenshot same viewport again.
- Copy was generic -> inspect h1/CTA/proof labels again.
- Interaction inert -> click/use the same control again.
- State missing -> show the state again.
- Reduced motion failed -> emulate reduced motion again.
- Canvas/media blank -> run nonblank/media probe again.
- Accessibility failed -> tab/focus/name check again.

## Pair With

- `benchmark-repair-loop.md` when a stronger reference or shipped-product benchmark shows the quality gap.
- `feedback-memory-loop.md` when the critique should change future generated variants or become a project-specific ban/preference.
- `browser-qa-matrix.md` for runtime probes.
- `design-quality-metrics.md` for scoring and hard fails.
- `product-intent-matrix.md` for intent-specific replacements.
- `composition-system.md` for first viewport, proof placement, section rhythm, and anti-presentation repairs.
- `interaction-state-matrix.md` for state/recovery behavior.
- `font-selection-matrix.md` for type repairs.
- `premium-animation-direction.md` for animation repairs.

## Source Anchors

- NN/g usability heuristics emphasize visibility of system status, user control, error prevention, recognition over recall, and recovery: https://www.nngroup.com/articles/ten-usability-heuristics/
- web.dev animation guidance recommends transform/opacity for performant motion and avoiding layout-heavy animation: https://web.dev/articles/animations-guide
- WCAG focus appearance defines requirements for visible keyboard focus: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- Baymard checkout guidance highlights preserved input and clear recovery as critical in checkout flows: https://baymard.com/learn/checkout-flow-ux-optimization
