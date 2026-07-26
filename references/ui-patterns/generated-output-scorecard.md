# Generated output scorecard

Use this after `dogfood-generation-loop.md`, `rendered-quality-gate.md`, `first-draft-triage-loop.md`, and `design-quality-metrics.md` when Stark needs a repeatable score for generated designs.

This scorecard turns "it looks better" into evidence-backed scoring. It is stricter than a normal design critique: every score needs proof, missing proof lowers confidence, and hard fails override averages.

## Required output

```md
Generated output scorecard
- Artifact:
- Surface:
- Requested level:
- Evidence pack:
- Hard fails:
- Weighted scores:
- Evidence confidence: high / medium / low
- Gate result: blocked / passable / good / high-craft / portfolio
- Publish decision: reject / repair / internal / gallery candidate
- One required repair:
- Re-check evidence:
- Feedback memory needed:
```

## Evidence pack

Require the evidence that matches the surface:

| Evidence | Required for | Proves |
|---|---|---|
| Source prompt | all generated artifacts | the intended product, user, and quality target |
| Decision brief / blueprint | serious or public work | product object, pattern, library, type, state, and QA decisions |
| Desktop screenshot or DOM inspection | all visual/public work | first read, object, hierarchy, type, proof, asset quality |
| Mobile screenshot or overflow measurement | all public/product work | responsive replacement, containment, text fit |
| Primary interaction smoke | apps, dashboards, forms, proof demos | controls are not inert |
| Non-happy state evidence | product surfaces | recovery, blocked, stale, empty, error, denied, disabled, selected states |
| Reduced-motion evidence | motion/media work | accessibility fallback preserves proof |
| Nonblank media/canvas evidence | image/video/canvas/Rive/Lottie/Three | asset rendered and is framed |
| Console/runtime check | web targets | no obvious runtime/asset failures |
| Repair/re-check evidence | below-target or critiqued work | quality improved rather than shifted |

Missing evidence does not automatically fail internal sketches, but it caps public claims.

## Weighted dimensions

Score each dimension from 1 to 5. Multiply by weight.

| Dimension | Weight | 1 | 3 | 5 |
|---|---:|---|---|---|
| Product object specificity | 2 | logo-swappable | category-specific | object, data, state, and action are product-specific |
| First-glance proof | 2 | claim only | some evidence | workflow/output/decision is visible quickly |
| Surface/recipe fit | 2 | wrong skeleton | partial fit | signature recipe and user mode are obvious |
| State usefulness | 2 | happy path | one shallow state | meaningful current/non-happy/recovery states |
| Interaction reality | 2 | inert mock | one basic control | primary task changes visible state with feedback |
| Responsive dignity | 2 | squeezed/clipped | mostly adapts | mobile/tablet replacement preserves task/proof |
| Accessibility evidence | 2 | unchecked | basic semantics | focus, names, contrast, motion, touch/keyboard checked |
| Typography/copy quality | 1 | generic/cheap | readable | roles, measure, concrete labels, proof/recovery copy |
| Visual composition | 1 | default/cards/collage | organized | deliberate focal path, rhythm, alignment, restraint |
| Motion/media quality | 1 | decorative/blank | useful | product-tied, nonblank, fallback, good still frames |
| Library/default residue | 1 | obvious demo/defaults | partly owned | library behavior kept, visual identity owned |
| Performance/fallback readiness | 1 | no budget | obvious fallback | lazy/pause/caps/removal trigger documented |

## Score math

```md
Weighted average = sum(score * weight) / sum(weights scored)
Confidence penalty:
- high confidence: no penalty
- medium confidence: cap gate at good
- low confidence: cap gate at passable
```

If a dimension is irrelevant, mark it `n/a` with a reason. Do not mark weak evidence as `n/a`.

## Gate mapping

| Weighted average | With no hard fails and confidence... | Gate |
|---:|---|---|
| < 3.0 | any | blocked/passable depending on hard fails |
| 3.0-3.49 | medium+ | passable |
| 3.5-3.99 | medium+ | good |
| 4.0-4.49 | high | high-craft |
| 4.5+ | high plus benchmark/gallery evidence | portfolio |

Hard fails override average. A 4.4 design with clipped mobile text is not high-craft until re-checked.

## Publish decisions

| Decision | Criteria |
|---|---|
| Reject | wrong product object, copied identity, hard fail, or no path to target without rebuild |
| Repair | promising draft below target with one clear blocker |
| Internal | good enough for docs/testing but not public proof |
| Gallery candidate | public/portfolio gate, desktop+mobile evidence, proof object visible, no private/licensed risk |

## Hard fails

- Product object unclear.
- First viewport can be logo-swapped into another product.
- Page/app uses the wrong surface recipe.
- Primary action is unclear or inert.
- Mobile has page-level overflow, clipped text, or unusable controls.
- Important UI text is baked into generated media, video, canvas, Rive, Lottie, or Spline.
- Motion/media lacks reduced-motion or static proof.
- A product surface has no meaningful non-happy state.
- Library demo/default styling is visible after originality was required.
- Screenshot hides flaws through crop, tiny scale, blur, darkness, or unreachable state.
- Copied reference identity or trade dress remains.

## Scorecard examples

### Public product proof page

Minimum to become a gallery candidate:

- product object specificity 4+
- first-glance proof 4+
- typography/copy 4+
- responsive dignity 4+
- no hard fail
- desktop and mobile evidence
- rendered quality gate `public` or better

### Production product app

Minimum to call it production-grade:

- state usefulness 4+
- interaction reality 4+
- accessibility evidence 4+
- responsive dignity 4+
- no inert enabled controls
- one non-happy state

### Animation-led showcase

Minimum to call it high-craft:

- motion/media quality 4+
- first-glance proof 4+
- product object specificity 4+
- reduced-motion/static proof
- nonblank media/canvas evidence
- still frame works without playing the animation

## Learning rule

When two generated artifacts fail the same weighted dimension, create a `feedback-memory-loop.md` entry. When three artifacts fail the same dimension, update the smallest relevant source guidance or eval prompt.
