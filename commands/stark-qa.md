# /stark-qa

Use this command to require proof before calling a UI "good."

Read:

- `references/ui-patterns/qa-evidence-contract.md`
- `references/ui-patterns/browser-qa-matrix.md`
- `references/ui-patterns/visual-qa-protocol.md`
- `references/ui-patterns/visual-qa-workflow.md`
- `references/ui-patterns/rendered-quality-gate.md` when rendered or screenshot evidence exists
- `references/ui-patterns/visual-repair-playbook.md`
- `references/ui-patterns/design-quality-metrics.md`
- `references/ui-patterns/design-acceptance-gate.md`

Output:

```md
QA evidence contract
- Surface:
- Risk level:
- Evidence required:
- Evidence captured:
- Browser probes:
- Hard fails:
- Fix applied:
- Re-check:
- Rendered quality:
- Acceptance gate:
- Missing evidence:
- Remaining risk:
```

Rules:

- Treat missing evidence as uncertain, not passing.
- Use desktop/mobile, console, interaction, reduced-motion, nonblank media/canvas, and state evidence according to surface risk.
- If a hard fail appears, fix it and re-check the same evidence before final delivery.
- If the acceptance gate is below the requested design level, continue with one required repair.
- Do not claim "looks good" without browser/runtime/screenshot evidence when such evidence is available.
