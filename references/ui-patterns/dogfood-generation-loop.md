# Dogfood generation loop

Use this when Stark is improving its own design quality, producing showcase examples, refreshing README screenshots, testing new design guidance, or checking whether generated outputs actually look better.

For repeatable batches, read `dogfood-batch-matrix.md` next. It defines standard surfaces, prompts, evidence, pass bars, failure stress tests, and the matching machine-readable `evals/dogfood-batches.json` harness. For anything that may become README, gallery, release, or public proof, read `showcase-selection-quality-contract.md` after the acceptance gate.

The goal is to create a repeatable loop: generate representative surfaces, capture evidence, score the rendered outputs, repair the highest-impact failures, and feed recurring failures back into Stark guidance. Use `generated-output-scorecard.md` after rendered evidence so every artifact has weighted scores, confidence, a publish decision, and a re-check target.

## Required output

```md
Dogfood generation loop
- Batch purpose:
- Target surfaces:
- Prompts used:
- Guidance under test:
- Generated artifacts:
- Evidence captured:
- Rendered quality gates:
- Scores:
- Repairs applied:
- Re-check evidence:
- Feedback memory entries:
- Guidance changes required:
- Gallery decision:
- Showcase selection:
- Remaining risk:
```

Do not use dogfood screenshots as public proof unless they pass the rendered quality gate at `public` or `portfolio`.

## Batch design

A useful dogfood batch includes 3-5 surfaces that stress different parts of Stark. Prefer the standard batches in `dogfood-batch-matrix.md` unless the user's request needs a narrower product-specific batch:

| Surface | What it proves | Required checks |
| --- | --- | --- |
| Product proof landing page | proof object, page rhythm, typography, copy, motion restraint | desktop/mobile, proof above fold, rendered quality, CTA smoke |
| Operational dashboard / CRM | density, table/list/detail, state coverage, task ergonomics | filter/selection smoke, empty/error/stale, mobile replacement |
| Agent run UI | timeline, artifact inspector, logs, blocked/retry states | run state switch, artifact selection, log readability, stop/retry controls |
| Editor/canvas | direct manipulation, inspector, tool state, keyboard path | selection changes inspector, locked/invalid state, mobile replacement |
| Animation-led product story | choreography, asset quality, reduced motion, originality | still-frame quality, reduced motion, nonblank media/canvas, mobile fallback |
| Trust/checkout/docs | risk visibility, copy, forms/nav/code overflow, accessibility | validation/permission/search/copy state, focus, no distracting motion |

Do not dogfood only cinematic pages. Stark must improve usable product surfaces too.

## Prompt protocol

Each dogfood prompt should include:

- product category and user mode.
- quality target: good, high-craft, or portfolio.
- one surface-specific constraint.
- one failure to avoid from prior feedback.
- expected evidence.

Example:

```text
Use Stark director to build a high-craft agent run UI for reviewing generated pull requests. It must use a run timeline, artifact inspector, blocked/retry states, readable logs, and mobile replacement. Avoid generic dashboard cards. Capture desktop/mobile evidence, rendered quality gate, interaction smoke, reduced motion if motion exists, and one repair.
```

## Evidence pack

For each generated artifact, capture or report:

- source prompt and selected surface playbook.
- generation blueprint and implementation pattern.
- desktop screenshot or visual inspection.
- mobile screenshot or overflow measurement.
- primary interaction smoke.
- state evidence for one non-happy state.
- reduced-motion evidence when motion exists.
- media/canvas/image nonblank evidence when relevant.
- console/runtime check when a browser target exists.
- rendered quality gate.
- generated-output scorecard with confidence, gate, publish decision, and required repair.
- design acceptance gate.

Missing evidence is not passing evidence. Mark it as risk.

## Scoring table

Score each artifact from 1-5:

| Dimension | Weight |
| --- | --- |
| Product specificity | 2 |
| First-glance proof | 2 |
| Composition geometry | 1 |
| Typography texture | 1 |
| Copy/proof credibility | 1 |
| State/usefulness visibility | 2 |
| Responsive dignity | 2 |
| Motion/asset quality when relevant | 1 |
| Library/default residue | 1 |
| Accessibility/interaction evidence | 2 |

Batch pass:

- no hard fails.
- no artifact below `public` screenshot-worthiness when intended for public proof.
- average weighted score 4+ for high-craft batches.
- every artifact has one non-happy state or explains why it is not relevant.
- at least one repair was applied when a rendered-quality red flag appeared.

## Repair and learning loop

For each failure:

1. Classify it with `rendered-quality-gate.md`.
2. Pick one repair from `visual-repair-playbook.md`, `benchmark-repair-loop.md`, or a surface-specific reference.
3. Re-check the exact failed evidence.
4. If the same failure appears in two artifacts, create a feedback memory entry.
5. If the same failure appears across multiple batches, update the source guidance, eval prompt, or implementation pattern.

## Feedback memory entry

```md
Dogfood feedback memory
- Exact symptom:
- Evidence:
- Surfaces affected:
- Severity:
- Repair that worked:
- Repair that failed:
- Future ban:
- Future preference:
- Stress test prompt:
- Guidance file to update:
- Expiration:
```

## Gallery decision

Before adding a screenshot to README or public docs:

- run `showcase-selection-quality-contract.md` and record selected, rejected, and repair candidates.
- rendered quality gate is `public` or `portfolio`.
- generated-output scorecard says `gallery candidate`.
- desktop and mobile are both checked.
- screenshot proves a specific product object, state, or workflow.
- no private or licensed content is included.
- alt text names the product and viewport.
- remaining risk is small and stated in the dogfood report.

Do not include screenshots that only look good because they are tiny, cropped, dark, blurred, or impossible to inspect.

## Guidance update triggers

Update Stark guidance when dogfood finds:

- two artifacts repeat the same generic skeleton.
- typography is repeatedly scored below 4.
- motion is repeatedly decorative or weak in still frames.
- mobile replacement repeatedly squeezes desktop.
- product libraries leave default residue.
- product data is fake or does not exercise states.
- screenshots are public-looking but interaction evidence is missing.
- agents skip generation blueprint or implementation patterns.

Update the smallest relevant file: surface playbook, generation blueprint, implementation pattern, rendered gate, library playbook, typography file, or eval prompt.

## Final dogfood report

```md
Dogfood report
- Batch:
- Artifacts:
- Best result:
- Weakest result:
- Common failures:
- Repairs applied:
- Guidance updated:
- Gallery-ready screenshots:
- Next batch:
```

Keep the report honest. A batch that reveals failures is useful if it changes future generation.
