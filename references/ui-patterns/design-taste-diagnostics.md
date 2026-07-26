# Design taste diagnostics

Use this after rendered evidence, user critique, or a design-director draft suggests the work feels cheap, bland, messy, copied, childish, overdesigned, underdesigned, generic, or beautiful but not usable. Use it before `visual-repair-playbook.md`, `quality-calibration-ladder.md`, or another generation attempt.

This is not a taste popularity list. It turns subjective critique into a concrete design cause, repair target, and re-check.

## Required Output

```md
Design taste diagnosis
- Evidence inspected:
- User wording or symptom:
- Surface/user mode:
- Severity:
- Likely cause:
- Taste dimension:
- Product risk:
- Strongest decision to preserve:
- First repair:
- What not to change:
- Evidence to re-check:
- Future ban/preference if recurring:
```

If the diagnosis only says "make it more premium", it is too vague. Name the broken dimension and the smallest repair that will change the evidence.

## Source Anchors

- NN/g's aesthetic-usability effect explains why visual polish can change perceived usability, but it does not replace task fit or accessibility.
- Laws of UX patterns such as aesthetic-usability effect and Hick's Law are useful warnings: apparent simplicity and perceived quality can reduce friction, but too many competing choices or signals increase cognitive load.
- WCAG 2.2 requires testable accessibility evidence such as contrast, reflow, non-text contrast, keyboard operation, focus visibility, and motion controls. Taste cannot override these.
- Professional design systems separate expressive surfaces from productive/product surfaces; the same visual move can be tasteful in a campaign and wrong in a daily tool.

## Symptom Matrix

| Symptom | Likely Cause | First Repair | Do Not |
|---|---|---|---|
| Looks cheap | weak type roles, low-value contrast, generic copy, equal card frames | fix type hierarchy, copy specificity, value contrast, and one surface detail | add glow or a display font first |
| Looks bland | no product object, no motif, no visual language, safe default layout | choose main object, visual language, motif, and one tasteful risk | recolor the same hero/cards |
| Looks messy | too many focal points, multiple materials, unrelated props/effects | preserve one showpiece, delete competing props, unify material/motion grammar | add more polish elements |
| Looks copied | reference trade dress preserved: layout, palette, props, copy rhythm, motion mechanic | change subject, object, composition, copy voice, and motion mechanic while keeping abstract lesson | hide the copy with minor styling |
| Looks like a presentation | slide-like sections, huge whitespace, weak page proof, no task flow | add page proof ladder, section jobs, product workflow, and CTA rhythm | make each section bigger |
| Looks like the same Stark design | reused lane, same radius/shadow/type/accent/card anatomy | run style diversity and visual-language decision, reject previous language, change anatomy | swap only the palette |
| Text feels cheap | hype copy, vague proof labels, display face overused, weak line breaks | rewrite around artifact/action/state/risk/time and assign display/body/mono roles | use fancier words |
| Font feels generic | font has no job, same family everywhere, no numeric/data plan | choose type recipe by surface, density, tone, and data needs | pick a trendy display font blindly |
| Premium but unusable | polish hides affordances, states, focus, recovery, or primary action | restore task ergonomics, labels, focus, state coverage, and clear next action | keep beauty by hiding controls |
| High-energy but childish | roundness, color, copy, motion, and icons all signal toy | keep one playful axis; mature type/copy/states and reduce novelty | remove all personality |
| Dense but tiring | weak scan rails, low contrast, no grouping, all text same weight | add hierarchy rails, tabular data, status contrast, grouping, and saved views | make the page sparse like marketing |
| Minimal but empty | too much whitespace, little proof, no product object or state | add proof object, concrete data, annotated detail, and comparison | fill with generic feature cards |
| Cinematic but fake | media/key art is mood, not product proof; text sits on glow; no still frame | make product output/proof the hero, design useful poster frame, move text to stable surfaces | add more floating props |
| Dashboard looks generic | equal KPI cards, fake metrics, no decision/action, no selected detail | define insight hierarchy, realistic fixtures, exception logic, drill path | change chart colors only |
| App looks like a website | hero spacing inside tool, marketing cards, unstable work surface | choose app/workbench pattern, compact density, states, command path | add nav chrome only |
| Website looks like an app mock | too much dashboard chrome, weak offer, no proof ladder | expose offer, proof, objections, CTA rhythm, and product screenshots | add more fake panels |
| Library default residue | docs-example component anatomy, starter radius, copied tokens, generic empty states | run de-defaulting: tokens, anatomy, state styling, copy/data, responsive changes | wrap defaults in custom colors |
| Motion feels random | no focal path, no state relationship, too many triggers | choose one motion job and pattern, define beats, remove idle effects | add a new animation library |
| Motion feels slow | cinematic timing used for repeated action, delayed controls, scroll trap | shorten feedback, make interruption clear, keep controls available | speed up every animation equally |
| Visual language feels incoherent | palette, type, asset, shape, and motion come from different worlds | rerun visual language decision, pick one material and one motion grammar | average all references together |

## Taste Dimensions

Diagnose one primary dimension first:

- **Product specificity**: Does the surface show the actual object, action, state, and proof?
- **Visual language**: Do material, type, shape, motion, assets, and copy feel like one world?
- **Composition**: Is there a clear focal path, grid, and section rhythm?
- **Typography/copy**: Do the words and type roles fit the surface and density?
- **Material/value**: Do surfaces, contrast, depth, and accents communicate hierarchy?
- **Motion/media**: Does movement or media prove, orient, or provide feedback?
- **Usability**: Are task, recovery, focus, labels, and state visibility protected?
- **Implementation residue**: Does code or component choice reveal starter-kit defaults?

Only diagnose two dimensions when they are coupled, such as cheap copy plus weak typography, or random motion plus incoherent visual language.

## Repair Selection Rules

Choose the repair by severity:

1. Accessibility, overflow, runtime, unreadable text, and blocked task failures outrank taste.
2. Product object and primary action outrank visual novelty.
3. State/recovery failures outrank finish polish for product surfaces.
4. Copied reference trade dress outranks minor type or color issues.
5. Messy collage requires deletion before addition.
6. Blandness requires a new structural, motif, or proof decision, not surface decoration.
7. Cheapness usually requires type/copy/value/detail repair, not a bigger concept.
8. Same-looking output requires changing language/anatomy, not only tokens.

## Surface-Specific Taste

### Product Proof Landing

Good taste means proof arrives early, copy names a concrete object, the first viewport has one memorable anchor, and downstream sections advance the decision. Bad taste is a gorgeous hero followed by generic feature cards.

### Dashboard / CRM / Operations

Good taste means density, hierarchy, state, owner/time/action, and scan speed. Bad taste is marketing polish, equal cards, fake metrics, and decorative charts.

### Editor / Canvas

Good taste means canvas dominance, stable controls, clear selection, undo/recovery, and compact chrome. Bad taste is campaign spectacle inside the tool.

### Animated / Cinematic Page

Good taste means one product truth, one signature transformation, one motion grammar, strong still frames, and reduced-motion proof. Bad taste is pasted props, copied reference scenes, and random effects.

### Trust / Checkout / Permissions

Good taste means consequence clarity, calm hierarchy, visible recovery, precise copy, and restrained motion. Bad taste is hiding risk under brand drama.

### Docs / Developer Platform

Good taste means quick orientation, code/readability, copyable examples, version/state clarity, and route/search behavior. Bad taste is hero-first marketing without command proof.

## Evidence Re-Checks

Match the re-check to the symptom:

- Cheap text: desktop and mobile type screenshots, long-label stress, proof labels, CTA/state copy.
- Messy composition: screenshot first viewport and proof section, grayscale hierarchy check, deleted elements list.
- Copied reference: before/after originality delta across subject, object, composition, copy, palette role, and motion.
- Same-looking output: rejected previous language, changed anatomy, changed motif, changed material/type posture.
- Premium but unusable: keyboard/focus path, primary action, state/recovery, touch/mobile path.
- Motion problem: poster frame, beat frame, reduced-motion frame, mobile frame, console cleanup.
- Library residue: compare against docs-example defaults, inspect tokens/anatomy/copy/data/state changes.

## Future Memory Triggers

Send recurring severe critique into `feedback-memory-loop.md` when:

- the user repeats a phrase such as "cheap", "generic", "same", "messy", "copied", or "presentation";
- a screenshot fails the same taste dimension twice;
- a public gallery candidate is rejected for the same issue;
- a repair worked and should become a future preference or stress test.

## Hard Fails

- A subjective critique is answered with only "I made it more modern."
- The repair changes the strongest product decision instead of preserving it.
- The diagnosis suggests adding a library for taste without ownership and QA.
- A high-risk workflow is made prettier while state, focus, recovery, or consequence clarity remains weak.
- A copied reference is defended because the colors or fonts changed.
- The re-check does not inspect the evidence that originally failed.
