# Visual finish system

Use this after `layout-precision-system.md`, `visual-token-recipes.md`, `typography-systems.md`, and before `rendered-quality-gate.md` when the design is structurally right but still feels cheap, flat, pasted together, or not screenshot-worthy.

This is the craft pass. It does not choose the product pattern, copy, library stack, or composition. It makes the selected direction feel intentional in the rendered result.

## Required output

```md
Visual finish brief
- Surface:
- Finish target: clean / tactile / cinematic / editorial / operational / native
- Strongest existing decision to preserve:
- Weak finish symptom:
- Optical alignment fix:
- Surface/material detail:
- Type/detail fix:
- Color/value adjustment:
- Depth/border/shadow adjustment:
- Motion still-frame detail:
- Mobile finish risk:
- Things to delete:
- Evidence to re-check:
```

## Finish targets

| Target | Use for | Finish priorities | Avoid |
| --- | --- | --- | --- |
| Clean | SaaS, docs, product proof, trust | crisp spacing, calm surfaces, strong proof labels, subtle borders | empty luxury spacing, all-white card soup |
| Tactile | editors, creator tools, playful products | controls with states, light texture, touchable depth, clear selected states | toy-like shadows, soft everything |
| Cinematic | launch, media, animation-led | still-frame composition, object lighting, focal glow tied to product, quiet UI text | random particles, glow blobs, illegible overlays |
| Editorial | docs, reports, portfolios, case studies | type rhythm, rules, captions, image crops, section pacing | beige monotony, decorative pull quotes |
| Operational | dashboards, CRM, queues, agent runs | row rhythm, number alignment, status contrast, scan rails, compact density | marketing cards, decorative gradients |
| Native | desktop/mobile platform UI | platform spacing/type/control affordances, restrained custom identity | web landing-page chrome inside native shells |

## Finish checklist

Apply only the rows that match the surface.

| Detail | Good finish | Cheap signal | Repair |
| --- | --- | --- | --- |
| Edge contrast | borders visible only where structure needs them | every card has same border/shadow | remove repeated frames; strengthen only active/selected/critical edges |
| Surface layering | clear base, raised, selected, modal, and media planes | panels float without hierarchy | assign each plane a role and reduce unneeded elevation |
| Shadow | one believable light model | many unrelated glows/shadows | pick one shadow family and tie it to object depth or overlay separation |
| Radius | radius matches density and object language | same rounded rectangle everywhere | vary by role: controls, panes, media, chips, modals |
| Texture/noise | subtle material support | visible noise wallpaper | reduce opacity or remove unless it clarifies product world |
| Type contrast | display/body/label/mono roles are obvious | tiny uppercase everywhere or generic big headline | increase role contrast; fix measure and line breaks before color effects |
| Value range | enough dark/light separation for hierarchy | low-contrast gray soup | adjust value first, hue second |
| Accent | accent marks action, state, or motif | accent appears on random decoration | reserve accent for primary action, selected item, proof, or semantic state |
| Data detail | units, owners, timestamps, and state labels align | fake metrics and generic labels | add domain values and align numbers/units |
| Asset frame | media has crop, safe area, and proof caption | object floats with no frame or relation | add frame, anchor, caption, or replace asset |
| Motion frame | paused animation still communicates proof | motion only works while moving | design the paused state as a useful poster frame |
| Mobile finish | hierarchy survives smaller viewport | desktop crop hides proof/action | choose a mobile proof frame, priority stack, or sheet replacement |

## Optical polish moves

- Align icons to text x-height, not bounding boxes.
- Nudge badges/chips so their visual center matches adjacent type.
- Use tabular figures for metrics, times, prices, and counters.
- Keep labels close to the value or control they describe.
- Prefer one stronger section transition over repeated equal section padding.
- Let one object break the grid only once; repeated random breaks look accidental.
- Dark themes often need quieter borders, larger internal spacing, and stronger text contrast.
- Light themes often need firmer rules or tonal surfaces instead of heavy shadows.
- Do not fix weak hierarchy by making everything larger.

## Delete before adding

Before adding any new effect, remove at least one weak finish element:

- duplicate glow
- decorative blob
- repeated card frame
- extra chip row
- weak generic icon
- ornamental line with no alignment job
- second accent color with no semantic role
- prop that does not explain product, state, or motion

## Finish QA

Use rendered evidence when possible:

- screenshot first viewport and one proof/state section.
- zoom to 125-150% and confirm type, labels, and controls still feel intentional.
- compare the screenshot in grayscale; hierarchy should survive without hue.
- inspect mobile crop for proof/action visibility.
- pause/disable motion and verify the still frame remains composed.
- check one selected/hover/focus/error state, not just resting UI.
- compare against the finish target; do not judge an operational UI by campaign polish.

## Stop rule

Stop the finish pass when the weakest visible finish symptom has been repaired and re-checked. Continue with `rendered-quality-gate.md` and `quality-calibration-ladder.md` if the result is still below target.
