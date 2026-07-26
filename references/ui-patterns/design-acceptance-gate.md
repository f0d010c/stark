# Design acceptance gate

Use this after `qa-evidence-contract.md`, `visual-qa-workflow.md`, `rendered-quality-gate.md`, `design-quality-metrics.md`, `quality-calibration-ladder.md`, and any relevant repair loop. It decides whether Stark is allowed to stop or must keep improving.

This file exists because "works" and "looks fine" are too low a bar for high-craft UI. A serious design should only ship at the level the prompt implies: functional, good, polished, high-craft, or portfolio-grade.

## Required gate

```md
Design acceptance gate
- Requested level: functional / good / polished / high-craft / portfolio
- Current evidence: decision brief / code / tests / browser probe / screenshots / rendered quality / interaction / reduced motion / scorecard
- Gate result: blocked / passable / good / high-craft / portfolio
- Scores below target:
- Hard fails:
- One required repair before stopping:
- Evidence to re-check:
- Stop or continue:
```

If the requested level is high-craft, cinematic, "go all out", "next level", public gallery, launch page, or portfolio-grade, Stark cannot stop at passable.

When the gate is below target, use `quality-calibration-ladder.md` to choose the next one-level-up repair before making broad polish changes.

## Acceptance ladder

| Level | Evidence required | Must be true | Stop? |
|---|---|---|---|
| Blocked | evidence missing or hard fail present | reason is named and repair path is known | no, unless external blocker |
| Passable | build/code health plus basic visible result | primary content/action is present, no obvious breakage | only for low-risk utility work |
| Good | browser/runtime evidence plus scorecard | product object, hierarchy, states, responsive containment, and copy are solid | yes for normal app work |
| High-craft | screenshots, interaction, reduced-motion/media evidence, scorecard, repair loop | concept, typography, assets, motion, and usability all support the product job | yes for serious design work |
| Portfolio | benchmark comparison, originality boundary, before/after repair evidence, polished responsive screenshots | could sit in public README/gallery without apology | yes for showcase work |

## Minimum bars by requested level

### Functional

Use for internal throwaway utilities or quick sketches.

Required:

- no hard fails
- primary action exists
- code/build health where relevant

Do not accept if the task asked for original, beautiful, high-craft, polished, animation-led, or public-facing design.

### Good

Use for normal product screens.

Required:

- average design-quality score 3.5+
- no score under 3 in relevant dimensions
- desktop/mobile containment checked or explicitly unavailable
- primary interaction or state path checked
- concrete copy labels the product job

### Polished

Use for user-facing product UI.

Required:

- average score 4+
- typography, hierarchy, responsive containment, accessibility, and state coverage are 4+
- at least one screenshot or visual inspection pass
- at least one critique-and-repair loop if a screenshot/render exists
- no default library styling exposed as the visual identity

### High-craft

Use for "go all out", cinematic, next-level, public demo, animation-led, or premium UI.

Required:

- 4+ in originality, typography, hierarchy, asset/material realism, responsive containment, accessibility, and motion if relevant
- design has a main object, proof surface, structural pattern, style lane, type recipe, copy voice, and rejected defaults
- browser/runtime evidence includes desktop and mobile, or missing evidence is named as risk
- motion/media has reduced-motion or static fallback
- no pasted reference identity, random spectacle, or generic SaaS skeleton
- at least one repair applied after critique unless evidence proves no meaningful issue

### Portfolio

Use for README screenshots, marketing proof, public gallery, launch examples, or work meant to attract stars/clones.

Required:

- high-craft requirements pass
- benchmark repair loop against at least one relevant high-quality reference or existing gallery standard
- originality boundary names what was borrowed and what was changed
- first viewport, mobile, and proof section screenshots/inspection pass
- copy and assets feel product-specific, not placeholder
- remaining delta is small enough to name honestly

## Hard stop triggers

Keep repairing before final delivery if any are true:

- The user explicitly says it feels bland, generic, cheap, messy, copied, or like a presentation.
- The visual result is mostly default cards/sidebar/table/centered hero.
- The first viewport lacks a clear product object or proof surface.
- Typography still looks default or arbitrary.
- Motion is decorative and not tied to a product state, proof, feedback, or relationship.
- Mobile is unverified for a public-facing design.
- Essential UI text lives inside generated media, video, canvas, Rive, Lottie, or Spline.
- A scorecard has uncertain or missing evidence in a dimension central to the prompt.

## Repair escalation

When the gate fails, do not make random polish. Escalate by the weakest evidence:

| Weak evidence | Read next | Repair direction |
|---|---|---|
| Product object unclear | `product-intent-matrix.md`, `composition-system.md` | replace generic sections with artifact, workflow, proof, or inspector |
| Visual same-looking | `style-diversity-matrix.md`, `creative-direction.md` | choose a different lane, motif, material, and composition grammar |
| Typography weak | `font-selection-matrix.md`, `typography-pairing-lab.md`, `type-recipes.md` | fix roles, pair, scale, numeric behavior, and line breaks |
| Copy cheap | `copy-system.md`, `../web-copy-voice.md` | rewrite around concrete object, action, state, proof, risk, and recovery |
| Motion random | `choreography-state-machine.md`, `motion-pattern-atlas.md`, `advanced-visual-systems.md` | remove effects without ownership; keep one mechanic |
| Usability thin | `task-ergonomics.md`, `usability-pattern-matrix.md`, `interaction-state-matrix.md` | add speed path, prevention, recovery, keyboard/touch, and states |
| Evidence weak | `qa-evidence-contract.md`, `browser-qa-matrix.md`, `visual-qa-workflow.md` | gather stronger runtime/screenshot/interaction evidence |
| Benchmark gap | `reference-board-workflow.md`, `benchmark-repair-loop.md` | use one structural lesson without copying identity |

## Final report rule

For serious design work, final delivery should include a compact gate result:

```md
Gate: high-craft / good / passable / blocked
Evidence: ...
Repair applied: ...
Remaining risk: ...
```

Do not use enthusiastic language as a substitute for gate evidence.

## Source anchors

- NN/g usability heuristics define broad interaction principles such as system status, user control, error prevention, recognition over recall, efficiency, and recovery: https://www.nngroup.com/articles/ten-usability-heuristics/
- WCAG 2.2 is the current W3C accessibility recommendation and includes focus, input, target, contrast, and motion-related accessibility requirements: https://www.w3.org/TR/WCAG22/
- Material motion choreography frames motion as focus guidance and relationship clarity, not decoration: https://m1.material.io/motion/choreography.html
- Apple HIG motion guidance ties animation to status, feedback, instruction, and platform fit: https://developer.apple.com/design/human-interface-guidelines/motion
