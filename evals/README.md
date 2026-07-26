# Evals — stark

Trigger and quality evals for the plugin's skills.

## Files

- `evals.json` — 20 train + 20 validation prompts. Each is `{prompt, expected_skill, should_trigger}`.

- `design-quality-prompts.json` - static coverage prompts for Stark design-quality guidance.
- `design-goal-coverage.json` - maps the original broad design-quality objective to required tags and reference files.
- `dogfood-batches.json` - standard generated-design batch prompts with required evidence, pass bars, failure stress tests, and gallery rules.

## Methodology

Use these prompts to test whether Codex routes to the intended `stark` skill.
The method mirrors skill-trigger evals from other agent ecosystems:

1. **Run each prompt 5x** in a fresh Codex session with this plugin installed.
2. For each run, record which skill (if any) triggered.
3. Calculate per-prompt **trigger rate** = (correct triggers) / 5.
4. Calculate per-prompt **stddev** across runs.
5. **Train pass rate** = mean trigger rate on train set.
6. **Validation pass rate** = mean trigger rate on validation set.

## Optimization loop

1. Run train evals → identify failures.
2. Revise the failing skill's `description:` field — **do NOT just add the failed prompt's keywords**. Generalize the concept.
3. Re-run train evals.
4. Once train pass rate is good (>90%), run validation.
5. If validation drops sharply, you overfit — revise more abstractly.

## Negative controls

The 10 `should_trigger: false` prompts (5 train + 5 validation) are critical. They check that the plugin doesn't over-trigger on unrelated tasks. If any of these fire a skill, the description is too broad.

## What "good" looks like

- Train: ≥90% correct trigger
- Validation: ≥85% correct trigger
- Negative controls: 0% spurious triggers
- Variance (stddev) per prompt: <0.2

If validation < train by more than 10 points, suspect overfitting on description keywords.

For a quick static check, run:

```bash
npm run smoke
```

Static smoke checks measure routing coverage, not design quality. For changes to output guidance, run a representative dogfood batch from `dogfood-batches.json`, save the decision brief and rendered evidence, score it with `docs/design-quality-measurement.md`, repair the highest-impact failure, and record the re-check. Do not treat phrase-presence tests as proof that generated UI improved.
