# Quality calibration ladder

Use this after `rendered-quality-gate.md`, `design-quality-metrics.md`, and before `design-acceptance-gate.md` when Stark needs to decide what single repair moves a design to the next quality tier.

The purpose is calibration. A score says what is weak; an acceptance gate says whether Stark can stop. This ladder chooses the next high-leverage move.

## Required output

```md
Quality calibration
- Requested level:
- Current tier:
- Evidence inspected:
- Weakest dimension:
- Surface-specific ceiling:
- One-level-up repair:
- What not to change:
- Evidence to re-check:
- Stop condition:
```

## Tier ladder

| Current tier | Symptom | Next repair | Do not |
| --- | --- | --- | --- |
| Broken | layout, runtime, mobile, focus, or hard fail blocks use | repair hard fail and re-check same evidence | add polish |
| Passable | content appears but product job is generic | rebuild around product object, state, and primary action | recolor cards |
| Good | product job works but lacks distinction | improve composition, type roles, proof surface, or material motif | add unrelated effects |
| Polished | details are solid but not memorable | add one original structural or motion idea tied to proof | change everything |
| High-craft | strong but not public-proof | benchmark against reference, repair the largest delta, prove mobile/proof section | hide flaws in crop |
| Portfolio | public-ready | stop after evidence is recorded | keep tinkering |

## Surface-specific ceilings

Not every surface should chase the same expression:

| Surface | Quality ceiling | Calibration focus |
| --- | --- | --- |
| Dashboard / CRM / operations | polished or high-craft, rarely portfolio | density, scan speed, states, owner/time/action, mobile replacement |
| Agent run UI | high-craft product app | timeline clarity, artifact inspection, blocked/retry states, log readability |
| Editor/canvas | high-craft workbench | canvas dominance, inspector stability, keyboard path, selected/invalid states |
| Checkout / permissions / trust | polished or high-craft | consequence clarity, validation/recovery, focus, calm motion |
| Docs / developer platform | polished or high-craft | navigation, search, code readability, copyable examples, route/focus state |
| Product proof landing | high-craft or portfolio | proof above fold, section rhythm, type/copy, CTA, mobile proof sequence |
| Cinematic / animation-led | high-craft or portfolio | main object, signature transformation, still-frame quality, fallback, originality |
| Data/analytics | polished or high-craft | chart question, source/units, accessible summary, table fallback |

If a utilitarian surface reaches polished with strong usability, do not force portfolio-level spectacle.

## Calibration moves by weak dimension

| Weak dimension | One-level-up repair |
| --- | --- |
| Product specificity | replace generic cards with artifact, queue, timeline, inspector, permission matrix, proof workbench, or data object |
| First read | make one focal object dominate; move proof and primary action into the first viewport |
| Composition | choose a stronger grid/focal path and delete sections that only explain features |
| Typography | apply font-selection/type recipe, fix measure, hierarchy, numeric behavior, and mobile line breaks |
| Copy | rewrite around artifact, action, owner, state, risk, time, proof, and recovery |
| State coverage | add one meaningful non-happy state with visible recovery |
| Usability | add speed path, disabled reasons, keyboard/touch path, and task evidence |
| Motion | remove decoration; assign one choreography pattern to proof, feedback, continuity, or inspection |
| Assets/materials | replace mood asset with product proof, code-rendered UI, real/generative output, chart, or diagram |
| Library/default residue | change tokens, anatomy, state styles, copy/data, and compare against docs examples |
| Mobile | replace desktop region with priority stack, selected item, drawer/sheet, static proof frame, or bounded table |
| Accessibility | add labels, focus order, focus appearance, reduced motion, contrast, and non-color status |
| Performance | add poster/static fallback, lazy load, pause offscreen, cap DPR/object count, or remove library |

## One-level-up rule

When below the requested level, choose exactly one primary repair:

1. Pick the weakest required dimension for the requested level.
2. Choose the surface-specific calibration move.
3. Preserve the strongest existing decision.
4. Re-check the same evidence.
5. Repeat only if the acceptance gate is still below target.

This prevents collage repair: do not change type, palette, motion, layout, and assets all at once unless a hard fail requires it.

## Calibration report

```md
Calibration report
- Before tier:
- Target tier:
- Repair chosen:
- Reason:
- Evidence before:
- Evidence after:
- New tier:
- Remaining delta:
```

## Hard fails

- The repair is decorative and does not affect the weakest dimension.
- The repair changes a strong product decision because a visual trend looks nicer.
- The design chases portfolio spectacle on a repeated-use workflow.
- The design claims high-craft without desktop/mobile evidence.
- The design hides weak state, type, or mobile evidence behind a small screenshot.
