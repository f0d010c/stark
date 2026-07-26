# First draft triage loop

Use this immediately after a first generated draft renders, and before `visual-repair-playbook.md`, `quality-calibration-ladder.md`, or broad polish. It decides whether the draft should be kept, repaired, rebuilt from a better recipe, or rejected before more work is spent.

This file exists because many generated UIs look plausible enough to continue, but their product object, proof surface, typography, state model, mobile structure, or motion idea is too weak to reach high-craft through decoration.

## Required output

```md
First draft triage
- Draft evidence:
- Requested quality level:
- Product object present:
- Strongest decision to preserve:
- Weakest blocking decision:
- Triage result: keep / repair / rebuild / reject
- Recipe or pattern to preserve:
- Recipe or pattern to switch to:
- One next action:
- Evidence to re-check:
- What not to polish:
```

## Triage results

| Result | Use when | Next action |
|---|---|---|
| Keep | the draft already has the right product object, structure, proof, and states | run rendered quality, acceptance, and fine repair |
| Repair | the draft has one strong product idea but one weak dimension blocks quality | apply one repair through the repair playbook or calibration ladder |
| Rebuild | the draft uses the wrong surface recipe, pattern, or proof object | switch recipe/pattern before tuning visuals |
| Reject | the draft is generic, copied, inaccessible, or cannot reach target without becoming another design | discard and generate/select another direction |

## Evidence to inspect

Use actual evidence where available:

- Desktop first viewport screenshot or DOM inspection.
- Mobile screenshot or responsive structure inspection.
- Primary interaction or state-switching smoke path.
- Reduced-motion/media fallback when motion or media exists.
- Source files/components for product object, fixtures, library owners, and states.
- User critique wording when present.

If evidence is missing, mark the triage uncertain and gather the missing evidence before claiming high-craft.

## Decision checks

### Product object

Ask:

- Could the first viewport belong to only this product?
- Is there an artifact, workflow, object, case, run, command, output, data point, permission, scene, or editor target?
- Does the object appear in code/data/components, not only in copy?

If no, rebuild around `signature-surface-recipes.md`, `implementation-pattern-library.md`, or `product-intent-matrix.md`.

### Proof surface

Ask:

- Does the page/app prove a workflow, decision, output, state, or transformation?
- Is the proof visible early enough?
- Is proof accessible as HTML/data/state, not only baked into a decorative asset?

If no, repair or rebuild before changing colors, shadows, or fonts.

### Structure and recipe

Ask:

- Is the chosen signature recipe visible in the layout?
- Does the structure match the user's mode: browsing, deciding, operating, editing, approving, inspecting, learning, or generating?
- Are downstream sections or panels doing distinct jobs?

If no, switch recipe rather than polishing the existing layout.

### Typography and copy

Ask:

- Does type have roles: display, UI/body, data/mono?
- Does copy name concrete nouns, actions, risk, time, state, owner, or proof?
- Is the first read clear at desktop and mobile sizes?

If no, repair type/copy before adding motion.

### Interaction and states

Ask:

- Does at least one primary control change visible state?
- Are empty/loading/error/blocked/disabled/selected/success states represented where relevant?
- Is there a keyboard/touch path for the primary task?

If no, use `interactive-prototype-contract.md`, `interaction-state-matrix.md`, and `usability-scenario-testing.md`.

### Motion and media

Ask:

- Does motion clarify proof, relationship, continuity, feedback, or inspection?
- Is there one main mechanic rather than pasted effects?
- Does reduced motion preserve the same proof?

If no, remove decorative motion and use `choreography-state-machine.md`, `motion-pattern-atlas.md`, or `premium-animation-direction.md`.

## Preserve-before-repair rule

Every triage must name one strong decision to preserve before naming the weakness. Examples:

- Preserve the operational density, repair the missing selected-detail state.
- Preserve the cinematic hero object, rebuild the second section into proof.
- Preserve the typography direction, replace the generic card grid with a proof workbench.
- Preserve the main motion mechanic, delete unrelated floating props.

Do not erase the strongest decision because one dimension failed.

## Rebuild triggers

Rebuild instead of repair when:

- The first viewport has no product object.
- The draft is a centered hero plus feature cards for a product-proof request.
- A dashboard/ops app uses marketing spacing and no repeated-use controls.
- An editor hides the canvas behind generic panels.
- An animation page uses unrelated props instead of one object/transformation.
- The library stack is visible as demo components rather than product behavior.
- Mobile cannot preserve the task without a different structure.

## What not to polish

Do not spend the next pass on:

- Gradients, glows, shadows, or hover lift while the recipe is wrong.
- Font swaps while copy and hierarchy are vague.
- More animation while the product object is unclear.
- Decorative charts while no chart question exists.
- Library additions while no owner/QA probe exists.
- Cropped screenshots that hide mobile, state, or overflow problems.

## Pair with

- `signature-surface-recipes.md` when the draft needs a different starting shape.
- `visual-repair-playbook.md` when the draft is structurally viable but has a named symptom.
- `quality-calibration-ladder.md` when the draft is below target but not broken.
- `design-critique-panel.md` when multiple weaknesses compete and the repair is unclear.
- `implementation-review-loop.md` when the brief/code/rendered output drift from each other.
- `feedback-memory-loop.md` when the user critique should affect future generations.

## Hard fails

- Triage result is "keep" while product object or proof surface is missing.
- The next action is cosmetic while a structural or state hard fail remains.
- Rebuild is avoided only because the current draft looks polished.
- The strong decision to preserve is not named.
- No evidence is identified for the re-check.
