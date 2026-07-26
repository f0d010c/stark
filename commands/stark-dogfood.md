# /stark-dogfood

Use this command when testing whether Stark actually generates better designs, refreshing proof screenshots, creating showcase examples, or turning generated-output failures into guidance changes.

Read, in order:

- `references/ui-patterns/dogfood-generation-loop.md`
- `references/ui-patterns/dogfood-batch-matrix.md`
- `references/ui-patterns/design-preflight.md`
- `references/ui-patterns/surface-playbook-matrix.md`
- `references/ui-patterns/generation-blueprint-contract.md`
- `references/ui-patterns/implementation-pattern-library.md`
- `references/ui-patterns/browser-qa-matrix.md`
- `references/ui-patterns/rendered-quality-gate.md`
- `references/ui-patterns/design-quality-metrics.md`
- `references/ui-patterns/quality-calibration-ladder.md`
- `references/ui-patterns/visual-repair-playbook.md`
- `references/ui-patterns/feedback-memory-loop.md`
- `references/ui-patterns/design-acceptance-gate.md`

Return before generating or testing:

```md
Dogfood plan
- Batch purpose:
- Batch ids:
- Target surfaces:
- Prompts:
- Guidance under test:
- Evidence required:
- Pass bar:
- Gallery rule:
```

Return after generating/testing:

```md
Dogfood report
- Artifacts:
- Evidence captured:
- Rendered quality gates:
- Scores:
- Repairs applied:
- Feedback memory entries:
- Guidance changes required:
- Gallery-ready screenshots:
- Remaining risk:
```

Rules:

- Test at least one usable product surface, not only cinematic pages.
- Do not call a screenshot gallery-ready unless desktop and mobile evidence exist and the rendered quality gate is `public` or `portfolio`.
- Treat missing evidence as risk.
- If two generated artifacts repeat the same failure, create a feedback memory entry or update the relevant guidance.
- If the dogfood batch finds no issues, name what evidence makes that credible.
