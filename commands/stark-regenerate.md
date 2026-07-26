# /stark-regenerate

Use this command when the user wants another attempt at a design after critique, or asks Stark to generate better/original alternatives instead of repeating the same visual pattern.

Read, in order:

- `references/ui-patterns/feedback-memory-loop.md`
- `references/ui-patterns/design-preflight.md`
- `references/ui-patterns/taste-calibration-system.md`
- `references/ui-patterns/variant-selection-loop.md`
- `references/ui-patterns/style-diversity-matrix.md`
- `references/ui-patterns/product-intent-matrix.md`
- `references/ui-patterns/surface-playbook-matrix.md`
- `references/ui-patterns/generation-blueprint-contract.md` before implementation for serious web UI
- `references/ui-patterns/prompt-to-build-compiler.md` immediately before serious code generation
- `references/ui-patterns/implementation-pattern-library.md` when a known product surface matches
- `references/ui-patterns/pattern-selection.md`
- `references/ui-patterns/composition-system.md`
- `references/ui-patterns/layout-precision-system.md`
- `references/ui-patterns/typography-systems.md`
- `references/ui-patterns/font-selection-matrix.md`
- `references/ui-patterns/copy-system.md`
- `references/ui-patterns/asset-realism-matrix.md` when media/proof assets matter
- `references/ui-patterns/motion-pattern-atlas.md` and `references/ui-patterns/motion-library-playbooks.md` when motion matters
- `references/ui-patterns/library-orchestration-system.md` when multiple libraries or capabilities are involved
- `references/ux-patterns/usability-scenario-testing.md` for serious product UI
- `references/ui-patterns/implementation-review-loop.md`
- `references/ui-patterns/rendered-quality-gate.md` when rendered or screenshot evidence exists
- `references/ui-patterns/qa-evidence-contract.md`
- `references/ui-patterns/browser-qa-matrix.md`
- `references/ui-patterns/visual-repair-playbook.md`
- `references/ui-patterns/design-acceptance-gate.md`

Return before implementation:

```md
Regeneration brief
- User critique remembered:
- Future ban:
- Future preference:
- Stress test:
- Surface/user mode:
- Product job:
- Quality target:
- Variant A:
- Variant B:
- Variant C:
- Scorecard:
- Selected variant:
- Rejected variants:
- Borrowed details:
- Product object:
- Surface playbook:
- Generation blueprint:
- Prompt-to-build compiler:
- Implementation pattern:
- Structural pattern:
- Typography/copy:
- Motion/library ownership:
- Usability/state contract:
- Responsive/adaptive strategy:
- QA probes:
```

After implementation or audit, return:

```md
Regeneration report
- What changed:
- Feedback memory applied:
- Selected variant preserved:
- Design-to-code drift:
- Rendered quality:
- Evidence captured:
- Hard fails fixed:
- Acceptance gate:
- Remaining risk:
```

Rules:

- Preserve the user's exact critique wording before normalizing it.
- Do not generate variants that only swap color/font/theme.
- Do not merge variants into a collage.
- Do not repeat an active feedback-memory ban unless the report explains why it no longer applies.
- Treat missing rendered evidence as uncertain, not passing.
- Apply at least one high-impact repair when evidence shows a repeat failure.
