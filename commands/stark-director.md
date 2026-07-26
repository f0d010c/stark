# /stark-director

Use this command when the user asks Stark to go all out, raise design quality broadly, use libraries well, make a UI feel actually designed, or coordinate research, typography, motion, usability, implementation, and QA in one pass.

Read, in order:

- `references/ui-patterns/design-director-runbook.md`
- `references/ui-patterns/design-execution-protocol.md`
- `references/ui-patterns/design-orchestration.md`
- `references/ui-patterns/feedback-memory-loop.md` when user critique or repeated QA failure should affect this pass
- `references/ui-patterns/variant-selection-loop.md` for original, high-craft, repeated-generation, or multi-direction work
- `references/ui-patterns/reference-board-workflow.md` when references/research are involved
- `references/ui-patterns/research-synthesis-contract.md` when references/research/libraries/fonts/choreography choices should become binding build decisions
- `references/ui-patterns/product-intent-matrix.md`
- `references/ui-patterns/surface-playbook-matrix.md`
- `references/ui-patterns/generation-blueprint-contract.md` before implementation for serious web UI
- `references/ui-patterns/prompt-to-build-compiler.md` immediately before serious code generation
- `references/ui-patterns/implementation-pattern-library.md` when a known product surface matches
- `references/ui-patterns/pattern-selection.md`
- `references/ui-patterns/composition-system.md`
- `references/ui-patterns/component-anatomy.md`
- `references/ui-patterns/interaction-state-matrix.md`
- `references/ui-patterns/typography-systems.md`
- `references/ui-patterns/font-selection-matrix.md`
- `references/ui-patterns/type-recipes.md`
- `references/ui-patterns/copy-system.md`
- `references/ui-patterns/motion-library-playbooks.md` when motion or libraries matter
- `references/ui-patterns/advanced-visual-systems.md` when shader/canvas/WebGL/Spline/Rive/Lottie/video/generated key art is central
- `references/ui-patterns/performance-budget-contract.md` when expensive media, WebGL/canvas, stacked libraries, or large assets are central
- `references/ux-patterns/task-ergonomics.md` when usability or repeated work matters
- `references/ui-patterns/qa-evidence-contract.md`
- `references/ui-patterns/browser-qa-matrix.md`
- `references/ui-patterns/implementation-review-loop.md`
- `references/ui-patterns/rendered-quality-gate.md` when rendered or screenshot evidence exists
- `references/ui-patterns/visual-repair-playbook.md`
- `references/ui-patterns/design-quality-metrics.md`
- `references/ui-patterns/design-acceptance-gate.md`

Return before implementation:

```md
Design director runbook
- Product job:
- Surface/user mode:
- Primary user task:
- Main object:
- Proof surface:
- Reference board:
- Feedback memory:
- Variant selection:
- Originality move:
- Product intent:
- Surface playbook:
- Generation blueprint:
- Prompt-to-build compiler:
- Implementation pattern:
- Structural pattern:
- Composition:
- Component anatomy:
- Interaction states:
- Typography recipe:
- Font selection:
- Copy voice:
- Visual/material system:
- Asset plan:
- Motion/choreography:
- Advanced visual system:
- Library stack:
- Rejected defaults:
- Usability/state contract:
- Responsive strategy:
- QA evidence plan:
```

After implementation or audit, return:

```md
Design director report
- What changed:
- Evidence captured:
- Design-to-code drift:
- Rendered quality:
- Hard fails fixed:
- Acceptance gate:
- Remaining risks:
- Next best improvement:
```

Hard fail if the response jumps straight to code without product job, main object, proof surface, typography, rejected defaults/libraries, usability states, and QA evidence.

For a second attempt after critique, prefer `/stark-regenerate` so feedback memory, variants, selected direction, implementation review, and acceptance are all explicit.
