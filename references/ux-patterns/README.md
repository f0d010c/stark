# UX pattern briefs

These are not generic templates. Use them as decision aids when a brief matches the context, user mode, risk, and frequency.

Use `task-ergonomics.md` for any serious product surface, repeated workflow, risky action, form, checkout, dashboard, editor, agent run, or usability audit. It defines frequency/risk fit, control model, speed paths, error prevention, recovery, state matrix, and evidence tasks before visual design.

After task ergonomics, use `usability-pattern-matrix.md` to choose the workflow structure: guided setup, wizard with review, command surface, priority queue, master/detail, monitoring board, workbench, settings, permission matrix, checkout path, docs/search, agent progress, collaboration thread, or mobile priority stack. Use `../ui-patterns/interaction-state-matrix.md` when those states need concrete controls, disabled reasons, focus behavior, recovery paths, and evidence tasks.

For onboarding, activation, empty dashboards, no-results screens, setup/import flows, permission gates, trial starts, workspace creation, or first project creation, use `first-run-empty-state-system.md` before visual styling. It defines first value, minimum/deferrable setup, sample/demo content, empty-state type, CTAs, permission timing, progress/resume, recovery states, contextual teaching, success handoff, and QA evidence.

After the pattern is chosen, use `usability-heuristic-evaluation.md` when a polished UI may still be confusing, hard to recover from, or weak for first-time learnability. It defines heuristics, cognitive walkthrough prompts, 0-4 severity, evidence, first repair, and re-check.

Use `usability-scenario-testing.md` when the design needs proof that it is actually usable. It defines first-run, returning-user, error/recovery, keyboard-only, and mobile/touch scenario tests, plus friction budget, evidence, repair, and re-check.

Before accepting a serious generated app or product UI, use `task-flow-acceptance-harness.md` to turn those scenarios into runnable task proof. It requires first-run, returning-user, error/recovery, keyboard-only, mobile/touch, and state-stress tasks with fixtures, success criteria, friction budget, selectors/test hooks, evidence, failed task, required fix, re-check, and ship decision.

After rendered evidence exists, use `rendered-usability-acceptance-gate.md` to accept, repair, or block the actual UI by primary task clarity, first-run success, returning-user speed, error recovery, keyboard/focus behavior, mobile/touch behavior, state stress, risk clarity, severity, repair, and re-check evidence.

Each brief should answer:

- When this pattern applies
- When it is the wrong pattern
- What shipped products commonly do
- What failure it prevents
- What Stark should put in the UX decision brief

Do not copy a referenced product screen. Extract the decision behind it, then adapt it to the user's product, platform, and constraints.

When live references are available through tools such as Mobbin MCP or Figma, use them to enrich these briefs with current shipped examples. Treat those examples as evidence of real usage, not proof that the pattern always converts better. Use `../ui-patterns/reference-analysis.md` to extract structure instead of copying visuals.
