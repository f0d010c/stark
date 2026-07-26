# Dogfood batch matrix

Use this with `dogfood-generation-loop.md` when Stark needs repeatable proof that generated designs are improving across different surfaces.

The matrix defines standard batches, prompts, required evidence, pass bars, and failure stress tests. Do not replace it with one-off showcase prompts unless the user asks for a narrow demo.

## Required output

```md
Dogfood batch matrix
- Batch ids:
- Surfaces covered:
- Guidance under test:
- Prompts:
- Required evidence:
- Pass bars:
- Failure stress tests:
- Gallery candidates:
- Gaps:
```

## Batch rules

- Run at least three batches for a serious Stark design-quality check.
- Include at least one repeated-use product surface: dashboard, CRM, editor, agent run UI, docs, trust, checkout, or settings.
- Include at most one cinematic-only page unless the user explicitly asks only for animation/campaign work.
- Every batch must name the product object, user mode, required state, responsive replacement, and one avoided default.
- Every batch must require evidence that can contradict success: desktop, mobile, interaction, non-happy state, rendered quality, and acceptance gate.
- If a batch is intended for public screenshots, use the gallery rule from `dogfood-generation-loop.md`.

## Standard batches

| Batch id | Surface | What it stresses | Minimum evidence |
| --- | --- | --- | --- |
| `product_proof_landing` | product proof landing | proof above fold, copy credibility, page rhythm, motion restraint | desktop/mobile, CTA smoke, proof object visible, rendered quality, generated-output scorecard |
| `operator_workbench` | dashboard / CRM / operations | density, selection, filters, list/detail, real state distribution | filter or selection smoke, stale/empty/error state, mobile replacement, generated-output scorecard |
| `agent_run_review` | agent run UI | timeline, artifacts, logs, blocked/retry/cancel states, scan speed | state switch, artifact selection, log readability, stop/retry controls, generated-output scorecard |
| `editor_canvas` | creative/editor app | canvas dominance, inspector stability, tool state, keyboard path | selection changes inspector, locked/invalid state, mobile replacement, generated-output scorecard |
| `animated_product_story` | animation-led product page | choreography, originality, asset quality, reduced motion, still-frame strength | nonblank media/canvas, reduced motion, mobile fallback, rendered quality, generated-output scorecard |
| `trust_flow` | checkout / permissions / docs | risk visibility, form/nav/code behavior, copy, accessibility | validation/permission/search/copy state, focus path, no distracting motion, generated-output scorecard |

## Prompt pack

Use these as starting prompts. Adjust nouns to the user's product, but preserve the evidence requirements.

### product_proof_landing

```text
Use Stark director to generate a high-craft product proof landing page for a developer tool that turns failing CI logs into a reviewed pull request. The first viewport must show the proof object above the fold, avoid generic SaaS cards, use one restrained motion mechanic, and include desktop/mobile evidence, CTA smoke, rendered quality gate, one non-happy proof state, and a repair if the first read is weak.
```

### operator_workbench

```text
Use Stark director to generate a production-grade operator workbench for renewal rescue. It must show a dense queue, filters, owner assignment, risk state, detail pane, stale data, empty/error behavior, and a mobile replacement. Avoid marketing spacing and decorative charts. Capture filter/selection smoke, desktop/mobile evidence, rendered quality gate, task ergonomics, and one repair.
```

### agent_run_review

```text
Use Stark director to generate an agent run review UI for generated pull requests. It must include a run timeline, artifact inspector, readable logs, blocked/retry/cancel states, owner notes, and mobile replacement. Avoid generic dashboard cards. Capture state switching, artifact selection, desktop/mobile evidence, rendered quality gate, accessibility interaction evidence, and one repair.
```

### editor_canvas

```text
Use Stark director to generate a creative editor for campaign scene assembly. The canvas must dominate, the inspector must update from selection, the toolbar must expose states, and locked/invalid edits must be visible. Avoid making the app a card gallery. Capture selection smoke, keyboard/focus path, locked or invalid state, desktop/mobile evidence, rendered quality gate, and one repair.
```

### animated_product_story

```text
Use Stark animation direction to generate an original animated product story for an AI media tool. Borrow only abstract qualities from premium references: depth, pacing, lighting, and proof timing. Invent a new main object, repeated motif, and motion mechanic. Capture nonblank media/canvas evidence, reduced-motion replacement, mobile fallback, rendered quality gate, originality delta, and one repair.
```

### trust_flow

```text
Use Stark director to generate a trust-heavy install or checkout flow for a plugin marketplace. It must show permissions, scope, risk, denied/recovery states, validation or copy behavior, accessible focus, and calm motion. Avoid hiding risk behind pretty cards. Capture interaction smoke, focus path, desktop/mobile evidence, rendered quality gate, copy credibility, and one repair.
```

## Pass bars

For a batch to count as improving Stark:

- every generated artifact has desktop and mobile evidence, or explicitly names why evidence is missing and marks the score uncertain.
- every artifact has at least one meaningful state besides the happy path.
- average weighted dogfood score is at least 4 for high-craft batches and at least 3.5 for product-app batches.
- no public/gallery candidate is below `public` in `rendered-quality-gate.md`.
- every public/gallery candidate has a `generated-output-scorecard.md` publish decision of `gallery candidate`.
- the weakest artifact receives one repair and re-check, even if the average score is acceptable.
- repeated failures create feedback memory entries or a guidance update.

## Failure stress tests

Apply these after the first pass:

| Failure | Stress test |
| --- | --- |
| same Stark skeleton | swap product domain and require a different implementation pattern |
| cheap text | rewrite hero, labels, empty/error states, and CTA around concrete artifact nouns |
| pasted animation props | remove all props that are not main object, proof, control, label, atmosphere, or transition |
| weak mobile | replace dense desktop region with priority stack, selected item, sheet, or task-first flow |
| default library look | compare against library docs/examples and name tokens/anatomy/state styles changed |
| missing state proof | add empty, loading, error, blocked, denied, cancelled, stale, or retry state before visual polish |
| decorative chart/media | name the chart question, output proof, source, or user decision it supports |

## Machine-readable batches

`evals/dogfood-batches.json` mirrors this matrix for tests and external harnesses. Keep both files aligned when adding a standard batch.
