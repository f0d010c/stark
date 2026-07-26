# Rendered quality gate

Use this after `browser-qa-matrix.md`, `visual-qa-workflow.md`, and `design-quality-metrics.md` when a UI has been rendered or can be inspected. This gate catches the failure mode where the implementation technically follows the brief but still looks cheap, messy, generic, or unconvincing.

When the design is structurally correct but fails because the rendered finish feels cheap, flat, pasted together, or not screenshot-worthy, use `visual-finish-system.md` before re-running this gate.

When several red flags compete or the best repair is unclear, use `first-draft-triage-loop.md` and `design-critique-panel.md` before `visual-repair-playbook.md` so Stark decides whether to keep, repair, rebuild, or reject the draft, then chooses the next fix through product, UX, visual, type/copy, motion/media, accessibility, and implementation lenses.

This is a perceptual and product-quality gate. It does not replace accessibility, runtime, or build checks.

## Required output

```md
Rendered quality gate
- Target:
- Evidence:
- 3-second read:
- Product object clarity:
- Composition geometry:
- Typography texture:
- Copy/proof credibility:
- State/usefulness visibility:
- Asset/material quality:
- Motion still-frame quality:
- Responsive dignity:
- Library/default residue:
- Screenshot-worthiness: no / internal / public / portfolio
- Red flags:
- Required repair:
- Re-check evidence:
```

If no screenshot is available, use browser/DOM inspection and mark the gate uncertain. Do not call it portfolio-ready without visual evidence.

## 3-second read

In three seconds, a reviewer should understand:

- what the product object is.
- what state the object is in.
- what action the user can take.
- what proof is visible.
- what makes this design specific to this product.

Fail if the first read is only "nice SaaS page", "dashboard", "AI thing", "cards", "gradient hero", or "animation demo".

## Score dimensions

Score each relevant dimension from 1 to 5.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| First-glance object | unclear or generic | recognizable category | specific artifact, workflow, dataset, permission, run, editor object, or proof |
| Composition geometry | centered stack/default cards | basic hierarchy | deliberate grid, focal path, asymmetry/balance, stable object frame |
| Typography texture | default/generic/cheap | readable but plain | roles, contrast, line breaks, measure, numeric behavior, and tone fit surface |
| Copy/proof credibility | hype or filler | understandable | concrete nouns, actions, states, risk, proof labels, owners, time, units |
| Product state visibility | happy path only | some status | meaningful non-happy/current/selected/recovery states visible |
| Interaction affordance | static mock | obvious main controls | controls show hover/focus/disabled/busy/selected/recovery semantics |
| Asset/material quality | placeholder or decorative | relevant but ordinary | product-proof asset, strong framing, code-native text, no filler media |
| Motion still-frame quality | random or absent | useful transitions | paused frame communicates object/state/proof without needing the animation |
| Responsive dignity | squeezed desktop | acceptable reflow | layout becomes a different intentional structure with no clipped text/objects |
| Library/default residue | obvious starter kit | partially customized | product identity appears before library identity |

## Screenshot-worthiness levels

| Level | Meaning | Required evidence |
| --- | --- | --- |
| No | would hurt trust in README/gallery | screenshot/inspection shows cheap, broken, generic, or confusing result |
| Internal | usable for local testing but not public proof | primary task works; visual or product specificity still weak |
| Public | can appear in docs/README without apology | clear product object, no hard visual failures, good type/copy/state visibility |
| Portfolio | strong enough to attract attention | original composition, excellent type/asset/proof, responsive proof, tiny remaining delta |

For public or portfolio claims, inspect at least the first viewport and one proof/state section. A beautiful hero with weak downstream sections is not portfolio.

## Red flag classifier

Use this table before choosing a repair:

| Red flag | Likely cause | Required repair |
| --- | --- | --- |
| Looks expensive but generic | no product object in first viewport | replace decorative hero/card with proof object, artifact, inspector, timeline, matrix, or command surface |
| Looks like a presentation | page explains instead of demonstrates | add interactive proof surface, stateful object, controls, and visible output |
| Looks cheap despite polish | type/copy/token mismatch | fix type roles, text measure, proof labels, palette ratio, and density before effects |
| Looks messy | too many motifs/libraries/focal points | delete props/effects; keep one object, one motif, one motion owner |
| Looks like starter UI | visible shadcn/Radix/table defaults | run library de-defaulting; change anatomy, tokens, states, copy, and data |
| Looks fake | placeholder data/media | replace with realistic fixtures, code-rendered mock, real screenshot, chart, or generated proof asset |
| Looks hard to use | controls/states/recovery unclear | add state model, disabled reasons, recovery actions, focus path, and primary action hierarchy |
| Looks untrustworthy | risk/copy hidden or softened | expose permission/payment/security impact, audit trail, undo/recovery, exact terms |
| Looks over-animated | motion does not clarify object | remove decorative motion; keep state/proof/relationship motion only |
| Looks desktop-only | mobile merely shrinks | use responsive replacement from surface playbook/generation blueprint |

## Still-frame test for motion

For animation-led work, pause mentally at the first frame, mid-transition, and final state. Each still frame must communicate:

- where the main object is.
- what is changing.
- why the change matters.
- where the user can act.

Fail if the page only feels good while moving or if the still frame reads as random floating parts.

## Typography texture test

Text feels premium when:

- display type has a reason and appears in limited zones.
- body/UI type is readable at actual component density.
- mono/data type is reserved for code, logs, numbers, IDs, units, or proof labels.
- line breaks look intentional at desktop and mobile.
- labels, captions, and buttons do not sound like template filler.

Fail if a font is chosen mainly because it is trendy, if every label is tiny uppercase, or if numeric/data UI does not align.

## Product proof test

Every public product page or app screenshot needs at least one visible proof object:

- code + output.
- prompt + generated artifact.
- run timeline + artifact inspector.
- dataset + summary/action.
- permission scope + risk summary.
- queue row + detail + next action.
- editor selection + inspector.
- checkout plan + terms + recovery.

Fail if the page has claims and decorative cards but no inspectable proof.

## Repair loop

When the gate fails:

1. Pick the single highest-impact red flag.
2. Apply the required repair, not general polish.
3. Re-check the same viewport/state.
4. If still below requested level, escalate to `visual-repair-playbook.md`, `benchmark-repair-loop.md`, or `variant-selection-loop.md`.

## Final stop rule

For "go all out", "next level", public screenshots, animation-led pages, README/gallery assets, or user-critiqued work:

- Do not stop at `internal`.
- Stop at `public` only when the user asked for good/polished work.
- Aim for `portfolio` when the user explicitly wants Stark to attract stars, clones, public attention, or showcase-quality output.

## Source anchors

- NN/g usability heuristics support visibility of system status, recognition over recall, error prevention, and recovery as baseline interaction quality.
- WCAG 2.2 supports focus visibility, target size, contrast, reduced motion, and text accessibility checks.
- Material motion choreography frames motion as focus, continuity, relationship, and feedback rather than decoration.
- Apple HIG motion guidance emphasizes animation that communicates state, feedback, instruction, and continuity.
