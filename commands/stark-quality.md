# /stark-quality

Score a UI, design brief, or generated implementation against Stark's design quality metrics.

Use `references/ui-patterns/design-quality-metrics.md`, `references/ui-patterns/quality-calibration-ladder.md`, `references/ui-patterns/qa-evidence-contract.md`, `references/ui-patterns/rendered-quality-gate.md` when rendered or screenshot evidence exists, `references/ui-patterns/visual-repair-playbook.md`, and `references/ui-patterns/design-acceptance-gate.md`.

Output:

```md
Design quality report
- Surface/user mode:
- Scores: product specificity _, state coverage _, hierarchy _, originality _, typography _, motion _, assets _, accessibility _, responsive _, implementation _
- Hard fails:
- Evidence:
- Rendered quality:
- First repair:
- Fix applied after critique:
- Acceptance gate:
- Remaining risk:
```

Rules:

- Treat missing evidence as uncertain, not passing.
- Fix hard fail gates before polish.
- Do not stop below the requested level: functional, good, polished, high-craft, or portfolio.
- Do not improve a score by adding decoration.
