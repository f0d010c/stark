# Benchmark repair loop

Use this after `reference-board-workflow.md` and before final `visual-qa-workflow.md` when a design should feel as strong as a real shipped product, a high-craft reference, or a category benchmark.

The goal is not to copy the reference. The goal is to identify the quality gap, translate it into product-specific repairs, then verify that the generated design improved on evidence.

## Benchmark brief

```md
Benchmark repair loop
- Target surface:
- User mode:
- Current evidence:
- Benchmark references:
- Quality gap:
- Originality boundary:
- Repair hypothesis:
- Files/areas touched:
- Re-check evidence:
- Remaining delta:
```

## Benchmark dimensions

Compare the current design against 2-4 relevant references on dimensions that matter to the product job:

| Dimension | Look for in references | Repair when Stark is weaker |
|---|---|---|
| Product object | the thing the user came to inspect, edit, buy, trust, operate, or create | replace generic cards with the product object, artifact, canvas, timeline, table, receipt, proof media, or inspector |
| First-viewport job | what the first screen lets the user understand or do within seconds | move proof, controls, owner/status/risk/time, or generated output into the first viewport |
| Hierarchy | what gets attention first, second, third | increase contrast through scale, position, density, grouping, whitespace, and text specificity |
| Interaction truth | which controls clearly do real work | wire a primary state change, command, filter, reveal, edit, retry, or review path |
| Motion purpose | how motion explains relationship, status, feedback, or transformation | remove decorative motion and add one choreographed proof/feedback transition |
| Typography posture | how type supports tone, scan speed, data, and trust | choose display/body/mono roles; fix cheap copy; avoid trend fonts without a job |
| Asset proof | whether images/media prove the product or only decorate it | replace mood media with product proof, generated key art, code-rendered UI, chart, video, or diagram |
| State coverage | how the reference handles empty, loading, error, permission, success, and recovery | add visible states and recovery actions, not just a happy-path mock |
| Responsive behavior | whether dense regions transform intelligently | create mobile replacement patterns: priority stack, sheet, bounded scroller, simplified proof, or stepper |
| Craft details | focus, spacing, tokens, materials, labels, affordances | repair the one detail family that makes the screen feel most amateur |

## Originality boundary

Before repairing, state what must not be copied:

- brand colors, gradients, logos, mascot, icon style, product names
- same hero object silhouette, same floating prop cluster, same phone/device staging
- same section order and marketing rhythm
- same sentence structure or CTA language
- same motion timing if it creates recognizable trade dress

Then state what can be borrowed:

- structural lesson
- density lesson
- control/state lesson
- responsive replacement
- motion principle
- accessibility behavior
- proof placement

If the repair still looks like one reference after changing logo and copy, it fails the originality boundary.

## Repair workflow

1. Capture current evidence: screenshot, DOM text, interaction state, mobile overflow, console, or QA probe.
2. Choose references that match the user mode. Do not benchmark an editor against a cinematic campaign page unless the prompt asks for that tension.
3. Score only relevant dimensions from `design-quality-metrics.md`.
4. Write a quality gap in one sentence: "The reference feels stronger because ___; Stark is weaker because ___."
5. Choose one high-impact repair from `visual-repair-playbook.md`.
6. Apply the repair in the product's own visual language.
7. Re-check the same evidence that exposed the gap.
8. Record remaining delta instead of pretending the first fix solved every dimension.

## Quality gap examples

### Animation page feels pasted

Gap:

- Reference uses one hero object and surrounding props all serve that object.
- Current design has multiple unrelated floating elements with no shared transformation.

Repair:

- Define one main object, one motif, and one signature transformation.
- Remove props that do not participate in the transformation.
- Re-check first-viewport screenshot and motion/reduced-motion evidence.

### Dashboard looks like default components

Gap:

- Reference makes the primary decision obvious through status, owner, time, risk, and next action.
- Current dashboard uses generic stat cards and an unreadable table.

Repair:

- Replace generic metrics with an operational queue, saved views, state filters, selected detail, and bulk action path.
- Re-check scan task and mobile containment.

### Copy feels cheap

Gap:

- Reference labels concrete proof, artifact, risk, or result.
- Current copy uses hype phrases that could fit any product.

Repair:

- Rewrite H1, CTA, proof labels, empty/error text, and recovery copy using `copy-system.md`.
- Re-check DOM text and screenshot hierarchy.

### Library UI looks pasted

Gap:

- Reference components feel native to the product's visual system.
- Current UI exposes untouched shadcn/Radix defaults, generic labels, and no non-happy states.

Repair:

- Use `product-library-composition.md` to map behavior/styling/state ownership, token replacement, component anatomy, and rejected defaults.
- Re-check keyboard/focus/state evidence and visual originality against library docs.

## Evidence levels

| Evidence | Proves | Does not prove |
|---|---|---|
| Reference board | lessons and originality boundary | implementation quality |
| Screenshot comparison | hierarchy, framing, asset quality, typography, visible state | keyboard behavior or real state |
| DOM text review | copy specificity and labels | visual fit |
| Interaction smoke | primary controls change state | full usability |
| Mobile overflow probe | page containment | mobile usefulness |
| Reduced-motion probe | accessibility fallback exists | motion quality |
| Scorecard delta | measured improvement in named dimensions | complete design maturity |

## Required output after repair

```md
Benchmark repair report
- Reference lesson used:
- What was not copied:
- Gap fixed:
- Evidence before:
- Evidence after:
- Remaining delta:
```

## Anti-patterns

- Copying a high-craft page's floating props without its product object.
- Benchmarking only mood, gradients, and screenshot polish.
- Saying "inspired by" without naming what was changed.
- Adding more libraries when the gap is hierarchy, copy, or product proof.
- Changing colors while the same generic skeleton remains.
- Scoring the design higher without new evidence.
- Comparing a first viewport reference to a full product workflow without state/usability checks.

## Source anchors

- NN/g usability heuristics emphasize visibility of system status, user control, recognition over recall, error prevention, and recovery: https://www.nngroup.com/articles/ten-usability-heuristics/
- Material motion guidance frames choreography as a way to guide focus and show relationships across transitions: https://m1.material.io/motion/choreography.html
- Apple HIG motion guidance ties animation to status, feedback, instruction, and platform fit: https://developer.apple.com/design/human-interface-guidelines/motion
- web.dev animation performance guidance recommends limiting expensive animation properties and favoring `transform`/`opacity`: https://web.dev/articles/animations-guide
- WCAG 2.2 includes focus appearance and accessibility requirements that should be part of benchmark QA, not late polish: https://www.w3.org/TR/WCAG22/
