# /stark-quality-gate

Use this command when a web UI should be maintained, released, compared across runs, or used as public proof. It turns visual QA into a repeatable local/CI gate instead of a one-off screenshot check.

Read, in order:

- `references/ui-patterns/qa-evidence-contract.md`
- `references/ui-patterns/browser-qa-matrix.md`
- `references/ui-patterns/story-driven-qa-harness.md`
- `references/ui-patterns/runtime-evidence-regression-contract.md`
- `references/ui-patterns/frontend-quality-automation-gate.md`
- `references/ui-patterns/performance-budget-contract.md` when motion, media, 3D/canvas, charts, large lists, or multiple libraries are present
- `references/ui-patterns/accessibility-interaction-contract.md` when custom controls, forms, overlays, keyboard paths, focus, or reduced motion are present
- `references/ux-patterns/task-flow-acceptance-harness.md` when the surface is a product workflow
- `references/ui-patterns/design-acceptance-gate.md`

Output:

```md
Frontend quality automation gate
- Target surface:
- Quality target:
- Gate mode:
- Local command:
- CI command:
- Playwright projects/viewports:
- Story/component harness:
- Visual baselines:
- Interaction flows:
- Accessibility checks:
- Performance/vitals checks:
- Usability/task checks:
- Fixtures and mocks:
- Stabilization/masks:
- Artifact output:
- Failure triage owner:
- Baseline update rule:
- Skipped checks and why:
- Ship decision:
```

Rules:

- Use advisory gates only for sketches; use blocking or release-blocking gates for public demos, README/gallery screenshots, checkout/trust, and component-library work.
- Prefer role/label/text locators before test IDs; missing accessible names are failures, not selector problems.
- Stabilize clocks, random data, media, animation frames, and generated assets before accepting visual baselines.
- Do not update baselines unless the design changed intentionally or a verified repair changed the evidence.
- Treat lab performance and Web Vitals checks as risk evidence, not field-data proof.
- If a blocking check fails, repair the source issue and re-run the smallest gate that proves the fix.
