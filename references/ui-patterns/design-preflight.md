# Design preflight

Use this before reading many design references or implementing a serious UI. The goal is to choose the smallest effective guidance set, keep user needs above visual capability, and prevent "everything at once" pages.

This is a routing and restraint layer, not another design artifact to show off.

After this brief, use `design-mode-router.md` when the request could become multiple output modes such as targeted repair, product app, product proof landing, cinematic animation, trust/risk flow, docs platform, visual system, or gallery proof.

## Preflight brief

```md
Design preflight
- Prompt type:
- Surface:
- User mode:
- Primary object:
- Risk level:
- Must-read references:
- Optional references:
- Explicitly skipped references:
- Max libraries/effects:
- Evidence required:
- Stop conditions:
```

## Prompt types

| Prompt type | Use when | Must read | Usually skip |
|---|---|---|---|
| Quick visual polish | Small targeted improvement, no broad redesign | `visual-repair-playbook.md`, relevant typography/copy file | full design director, library matrices |
| Serious redesign | User says bland, generic, messy, presentation-like, copied, cheap | `design-execution-protocol.md`, `visual-repair-playbook.md`, `design-quality-metrics.md` | new libraries until product object is clear |
| Go all out | User asks next level, real designer/frontend dev, all dimensions | `design-director-runbook.md`, `design-orchestration.md` | none by default, but cap effects |
| Reference-led | User provides or names a reference | `reference-board-workflow.md`, `benchmark-repair-loop.md` | copying exact art direction |
| Animation-led | Luma-style, cinematic, cool animation, choreography | `animation-creation.md`, `premium-animation-direction.md`, `choreography-state-machine.md`, `motion-pattern-atlas.md` | product libraries unless there is real app behavior |
| App/workflow-led | Dashboard, CRM, editor, agent run, checkout, docs, settings | `product-intent-matrix.md`, `component-anatomy.md`, `interaction-state-matrix.md`, UX references | cinematic scroll unless it supports the task |
| Library-led | User asks Motion, GSAP, Radix, shadcn, TanStack, etc. | relevant library playbooks and composition refs | extra libraries without ownership |
| Typography/copy-led | Fonts feel generic or text feels cheap | type/copy references | motion libraries and asset production |
| QA/audit-led | User asks test, audit, score, review | `qa-evidence-contract.md`, `browser-qa-matrix.md`, `design-quality-metrics.md` | new visual direction before evidence |

## Guidance budget

Choose guidance by risk:

- Low risk: 1-3 references, one evidence check.
- Medium risk: 4-7 references, focused QA.
- High risk/public/high-craft: director runbook plus targeted references, browser evidence, repair loop.

Hard cap unless justified:

- One primary structural pattern.
- One main object.
- One style lane.
- One display type direction.
- One motion pattern.
- Two to four supporting techniques.
- One product-library owner per behavior.
- One high-impact repair before final delivery when evidence fails.

If the design needs more, explain the job each added piece owns.

## Must-skip rules

Skip a reference or library when:

- it does not change the product object, user action, hierarchy, state, or evidence
- it only adds decoration
- it duplicates another library's behavior owner
- it creates a more expensive implementation with no quality proof
- it makes mobile/responsive containment harder without a replacement
- it serves the reference's trade dress more than the new product
- it slows repeated-use tasks

## Preflight routing

### For product pages and landing pages

Must decide:

- offer or product proof
- first viewport pattern
- main object or proof media
- copy job
- type recipe
- motion pattern only if it proves or orients
- asset realism
- desktop/mobile evidence

Skip:

- command palettes, tables, heavy product libraries, and dense app chrome unless the page is an interactive demo.

### For dashboards and tools

Must decide:

- primary decision/action
- saved views, filters, selected detail, and state coverage
- density and scan path
- keyboard/focus behavior
- table/list/card ownership
- mobile replacement

Skip:

- cinematic scroll, slow hero reveals, autoplay mood media, and marketing spacing.

### For editors and creative tools

Must decide:

- canvas object
- inspector anatomy
- selected state
- undo/recovery
- tool/command model
- performance risk

Skip:

- page-section storytelling and motion that moves editing targets unexpectedly.

### For animation-led pages

Must decide:

- product truth
- main object
- signature transformation
- motif
- storyboard beats
- library owner
- reduced-motion and mobile equivalents
- asset/proof quality

Skip:

- unrelated floating props, multiple hero objects, and scroll hijacking without proof.

### For checkout/trust/recovery

Must decide:

- consequence
- cost/scope/risk
- preserved input
- error and retry path
- confirmation language
- focus path

Skip:

- playful motion around payment, permissions, irreversible actions, or risk.

## Evidence selection

Map evidence to the risk:

| Risk | Evidence |
|---|---|
| Visual polish | screenshot/visual inspection and DOM text |
| Responsive risk | desktop/mobile screenshot or overflow probe |
| Motion risk | reduced-motion check, performance-sensitive properties, nonblank media |
| Product workflow | primary interaction, state evidence, focus path |
| Library composition | keyboard/focus, state coverage, token/default check |
| Reference risk | benchmark repair report and originality boundary |
| Public screenshot | scorecard, hard-fail gates, before/after repair |

Missing evidence means uncertain, not done.

## Stop conditions

Stop and simplify before implementation if:

- the preflight names more libraries than behaviors
- the main object is still a category word
- the reference list is only mood and no state/recovery lesson
- typography, motion, and assets all try to be the memorable element
- the responsive replacement is "shrink everything"
- the user mode conflicts with the visual direction
- the QA evidence is weaker than the risk of the surface

## Source anchors

- W3C Web Platform Design Principles emphasize designing from user needs rather than underlying capability: https://www.w3.org/TR/design-principles/
- NN/g critique guidance emphasizes defining scope, keeping critique focused, and following up with action: https://media.nngroup.com/media/articles/attachments/NNg_UXCritiqueCheatsheet.pdf
- NN/g usability heuristics keep status, control, prevention, recognition, and recovery central: https://www.nngroup.com/articles/ten-usability-heuristics/
- WCAG 2.2 makes accessibility evidence part of quality, not late polish: https://www.w3.org/TR/WCAG22/
