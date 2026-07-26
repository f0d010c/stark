# Design execution protocol

Use this when Stark is building or auditing a serious UI and the prompt asks for high quality, originality, animation, libraries, usability, or production-level frontend craft.

This protocol is the order of operations. It prevents agents from reading good guidance but implementing the first attractive idea too early.

Before using this protocol on serious work, read `design-preflight.md` to choose the smallest effective guidance set, skipped references, library/effect cap, evidence requirements, and stop conditions.

For broad "go all out" requests that require research, typography, copy, assets, motion libraries, product libraries, usability, responsive strategy, and QA together, read `design-director-runbook.md` first. This file remains the step-by-step build protocol after the design director runbook defines the required decisions.

## Required sequence

### 1. Classify the surface

Choose one primary surface:

- campaign / cinematic launch
- product proof landing page
- docs / platform site
- dashboard / operations tool
- editor / canvas
- agent run UI
- checkout / trust flow
- native app screen
- mobile task flow

Then name the user mode: browsing, evaluating, comparing, operating, editing, buying, or recovering.

If research, inspiration, benchmarking, or "like X but original" is part of the prompt, create the reference board from `reference-board-workflow.md` before choosing the final concept.

### 2. Define the product object

Write this before visual style:

```md
Product object
- Main object:
- User action:
- Proof surface:
- Required states:
- Risk if unclear:
```

If the object is vague, the design will become generic. Replace "dashboard", "AI", "analytics", "workflow", and "platform" with the thing the user actually handles: run, artifact, policy, ticket, quote, clip, account, layer, branch, payment, file, scene, or permission.

### 3. Choose the structural pattern

Read `pattern-selection.md` and choose one pattern family. Name one rejected pattern.

Do not start with colors, type, or animation. First decide whether the page is a proof workbench, command center, editor canvas, timeline, trust matrix, comparison surface, docs manual, or cinematic object stage.

For full pages or app shells, also read `composition-system.md` and choose first viewport pattern, focal path, grid, section rhythm, proof placement, repeated motif, and responsive replacement before visual styling.

### 4. Select the visual system

Write:

```md
Visual system
- Creative direction:
- Typography system:
- Material system:
- Color role:
- Asset plan:
- Icon/illustration system:
- One tasteful risk:
- Restraints:
```

Typography must match the surface and density. Marketing pages may use display character; repeated-use tools need readable UI type, tabular figures, and stable labels.

For original, branded, dense, native, or cross-platform UI, read `typography-systems.md` before choosing concrete fonts.

If materials, icons, illustrations, generated images, video, Rive, Lottie, Three, or charts matter, read `material-systems.md`, `asset-production-pipeline.md`, and `icon-illustration-systems.md` before implementation.

### 5. Decide choreography and libraries

Read `animation-creation.md`, `interaction-techniques.md`, and `motion-library-playbooks.md` only when motion is relevant.

Write:

```md
Choreography
- Motion thesis:
- Beats:
- Focal point per beat:
- Trigger:
- Library/API:
- Rejected libraries:
- Reduced-motion fallback:
- Mobile simplification:
```

Library rule:

- CSS first for simple feedback.
- Motion for React component continuity.
- GSAP for authored timelines and pinned proof.
- Three/R3F for inspectable spatial objects.
- Rive for designer-authored state machines.
- Lottie for small authored loops.
- Video for cinematic proof.
- Lenis only for brand/editorial scroll feel.
- View Transitions for route/detail continuity.
- Data-viz libraries only when the product object is data.

If the choreography matches a common pattern, choose a recipe from `../motion-recipes/` and include its accessibility, performance, and removal criteria.

If the choreography uses expensive motion, media, WebGL/canvas, Rive, Lottie, video, data-viz, or multiple libraries, read `performance-budget-contract.md` before implementation.

### 6. Plan component anatomy

If the surface has complex UI, read `component-anatomy.md` and choose at least one anatomy-backed component.

Examples: command palette, run timeline, artifact inspector, permission matrix, pricing table, collection wall, document workbench, evidence bay.

If the surface has custom dialogs, menus, tabs, comboboxes, command palettes, data grids, carousels, status messages, or custom controls, also read `accessibility-interaction-contract.md` before implementation.

### 7. Implement with containment

Before code, decide:

- app shell ownership
- component boundaries
- data/state model
- generation blueprint files/components
- library and choreography ownership hooks
- responsive replacement for dense regions
- keyboard/focus model
- empty/loading/error/permission/success states

For web work, read `web-implementation-tracks.md`, then `stack-blueprints.md` after the stack is chosen. For complex frontends, read `frontend-component-standards.md`. For serious, library-heavy, animation-led, app-like, or high-craft web work, finish pre-code planning with `generation-blueprint-contract.md` so the chosen surface, stack, components, data, states, libraries, choreography, tokens, responsive replacements, accessibility, performance, and QA hooks are concrete before implementation.

Avoid one giant component for complex apps. Avoid page-level horizontal overflow from tables, nav, inspectors, code blocks, and hero objects.

### 8. Browser QA and repair

Read `visual-qa-protocol.md` and `visual-qa-workflow.md` before final answer.

Minimum evidence for high-craft web work:

- desktop screenshot or visual inspection
- mobile or narrow viewport check
- horizontal overflow check
- console error check
- reduced-motion behavior
- interaction smoke for the primary action
- canvas/video/image nonblank check when relevant

Repair rule: if the screenshot reveals a problem a user would call out, fix it before delivery.

## Stop conditions

Do not ship when:

- the page could become another product after changing only the logo
- motion does not prove, explain, orient, or give feedback
- the main object is unclear
- the copy is generic hype
- fonts are default or arbitrary
- a dense app has only happy-path cards
- mobile clips, overlaps, or scrolls sideways
- reduced motion removes information
- a library was added because it is fashionable

## Final design report

Keep it short:

```md
Design report
- Surface/user mode:
- Main object:
- Pattern:
- Typography:
- Motion/library choice:
- States covered:
- QA evidence:
- Remaining risk:
```
