# Design critique panel

Use this after evidence exists and before `visual-repair-playbook.md`, `quality-calibration-ladder.md`, or `design-acceptance-gate.md` when the design needs a real critique rather than a generic score.

If the critique is mainly subjective wording such as cheap, bland, messy, copied, childish, overdesigned, underdesigned, generic, presentation-like, or same-looking, run `design-taste-diagnostics.md` after this panel or instead of a full panel for narrow repairs.

The goal is to review a generated UI the way a product designer, visual designer, motion designer, frontend engineer, accessibility reviewer, and user advocate would review the same artifact. Each lens should produce one sharp observation, then the panel chooses one repair.

## Required critique

```md
Design critique panel
- Evidence inspected: screenshot / DOM / browser probe / interaction / state / mobile / code / benchmark
- Product lens:
- UX lens:
- Visual composition lens:
- Typography/copy lens:
- Motion/media lens:
- Accessibility lens:
- Implementation/library lens:
- Strongest decision to preserve:
- Highest-risk weakness:
- One repair:
- Evidence to re-check:
- Deferred notes:
```

## Lenses

| Lens | Ask | Failure signal | Repair source |
|---|---|---|---|
| Product | Is the main object, state, and proof obvious? | looks like a category, not a product | `product-intent-matrix.md`, `composition-system.md` |
| UX | Can the user complete or understand the main task faster? | pretty but inert, no recovery, no speed path | `task-ergonomics.md`, `usability-pattern-matrix.md` |
| Visual composition | Does the layout have a focal path and stable geometry? | equal cards, pasted elements, weak spacing | `layout-precision-system.md`, `visual-finish-system.md` |
| Typography/copy | Do type roles and words support the surface? | default font feel, cheap copy, weak labels | `font-selection-matrix.md`, `copy-system.md` |
| Motion/media | Does motion or media explain proof, state, or relationship? | random effects, blank media, weak still frame | `motion-pattern-atlas.md`, `motion-frame-qa-contract.md` |
| Accessibility | Can keyboard, focus, labels, contrast, and reduced motion survive? | hover-only, icon-only, low contrast, motion-only info | `accessibility-interaction-contract.md` |
| Implementation/library | Does code ownership match the design decision? | starter-kit residue, overlapping libraries, missing states | `implementation-review-loop.md`, `library-de-defaulting-system.md` |

## Critique rules

- Preserve one strong decision before naming the repair. Good critique does not flatten a design into a different generic design.
- Name the highest-risk weakness, not every minor annoyance.
- If a high-severity usability, accessibility, overflow, or product-object failure exists, it outranks taste polish.
- Do not recommend adding a library unless the implementation/library lens proves ownership and QA value.
- Do not let motion/media critique override core usability unless the surface is animation-led.
- Do not accept praise-only critique. If the design is strong, name the evidence that proves it and the smallest remaining risk.

## Repair selection

Choose exactly one repair unless a hard fail blocks use:

1. Fix hard fail: clipping, overflow, inaccessible control, broken runtime, missing primary action.
2. Fix product object/proof if the first read is generic.
3. Fix state/recovery if the surface is a workflow.
4. Fix responsive/mobile if public or repeated-use.
5. Fix typography/copy if the design feels cheap but structure is sound.
6. Fix motion/media if it is decorative, blank, copied, or weak in still frames.
7. Fix library/default residue if implementation looks like docs examples.
8. Polish finish only after the above are acceptable.

## Output examples

### App screenshot feels good but generic

- Product lens: main object reads as "dashboard" instead of "renewal rescue queue."
- UX lens: no selected row or assign/retry path is visible.
- Visual lens: cards and table have equal weight.
- Repair: replace top cards with a selected queue item, owner, deadline, blocker, and action rail; re-check first viewport and interaction smoke.

### Animation page feels impressive but messy

- Product lens: generated artifact is not the hero object.
- Motion lens: three unrelated effects compete.
- Visual lens: props do not share a motif.
- Repair: keep one main object and one signature transformation; delete unrelated effects; re-check poster, beat, and mobile frame.

### Product page type feels cheap

- Typography/copy lens: display type carries personality everywhere; proof labels are vague.
- Product lens: proof object is present, so structure should be preserved.
- Repair: assign display/body/mono roles, rewrite proof labels around artifact/action/time, and re-check desktop/mobile type screenshots.

## Final report

```md
Critique panel report
- Preserved:
- Fixed:
- Evidence before:
- Evidence after:
- Remaining risk:
```
