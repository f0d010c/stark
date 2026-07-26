# Rendered usability acceptance gate

Use this after `usability-heuristic-evaluation.md`, `usability-scenario-testing.md`, `task-flow-acceptance-harness.md`, `../ui-patterns/qa-evidence-contract.md`, and `../ui-patterns/browser-qa-matrix.md` when rendered evidence exists for serious product UI, generated app previews, dashboards, editors, checkout/trust flows, onboarding, agent runs, forms, docs, command surfaces, or user-critiqued screens that are attractive but confusing.

This gate blocks beautiful UI when people cannot complete, recover, repeat, or understand the task.

## Source anchors

- NN/g usability metrics: task success, time on task, errors, satisfaction.
  https://www.nngroup.com/articles/usability-metrics/
- NN/g usability heuristics: status, control, error prevention, recognition, efficiency, recovery.
  https://www.nngroup.com/articles/ten-usability-heuristics/
- NN/g severity ratings: prioritize by frequency, impact, and persistence.
  https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/
- NN/g cognitive walkthroughs: check goal knowledge, visible controls, control meaning, and feedback.
  https://www.nngroup.com/articles/cognitive-walkthroughs/
- WCAG 2.2: focus visibility/appearance, target size, dragging alternatives, redundant entry, and error guidance.
  https://www.w3.org/TR/WCAG22/
- WAI-ARIA APG: keyboard and semantic expectations for custom widgets.
  https://www.w3.org/WAI/ARIA/apg/

## Output contract

```md
Rendered usability acceptance gate
- Surface:
- Rendered evidence inspected:
- User mode:
- Primary task:
- Primary object/action first-read:
- First-run result:
- Returning-user speed path:
- Error/recovery result:
- Keyboard/focus result:
- Mobile/touch result:
- State-stress result:
- Risk/consequence clarity:
- Cognitive walkthrough failure:
- Severity:
- Friction budget:
- Failed task/evidence:
- Required repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Evidence threshold

Do not pass this gate from a static screenshot alone unless the surface is intentionally non-interactive.

Inspect enough rendered evidence to prove:

- Desktop and mobile viewport behavior.
- DOM or accessibility tree for labels, roles, focusable controls, disabled reasons, and live/status regions.
- Primary task interaction, including the actual control path.
- Error, empty, loading, disabled, permission, success, and long-running states where relevant.
- Keyboard-only path for critical actions.
- Touch path for mobile-critical actions.
- Console/runtime health when scripts, forms, routing, charts, media, or libraries are involved.

## Primary task gate

Name one primary task in user language. Pass only if the rendered UI makes the object, next action, expected result, and completion state obvious without reading explanatory marketing copy.

Check:

- The primary object is visible before secondary decoration.
- The primary action is reachable without hunting through repeated card/button patterns.
- The first-run user knows where to start.
- The completion/success state confirms what changed.
- Secondary actions do not compete with the main task.

Block when the first visible action is vague, decorative, inert, offscreen, or disconnected from the user's job.

## Returning-user speed gate

Repeated-use product UI must get faster after the first run.

Check:

- The common path has fewer steps than the teaching path.
- Keyboard shortcuts, command surfaces, filters, saved settings, recent items, or defaults are visible when useful.
- Dense information is scannable without expanding every item.
- Repeated confirmation or setup is not required after the user has already made a safe choice.

Repair if the UI teaches well once but stays slow forever.

## Error and recovery gate

Force at least one realistic failure: invalid input, network failure, permission issue, empty result, destructive-action cancel, stale data, or blocked automation.

Pass only if:

- The error names the exact problem and next action.
- User input and context are preserved.
- Retry, undo, edit, cancel, contact/support, or fallback is available according to risk.
- Focus moves to the problem or status without trapping the user.
- Risky actions have consequence clarity before commit and recovery after commit where possible.

Block if a failure loses user work, hides the cause, only says "Something went wrong", or offers no next step.

## Keyboard and focus gate

Keyboard-only use must complete the primary task for serious product UI.

Check:

- Tab order follows the visual/task order.
- Focus is visible, not obscured, and returns sensibly after dialogs, drawers, menus, and route changes.
- Enter, Space, Escape, arrows, and typeahead match native or APG expectations for custom widgets.
- Disabled controls expose why they are unavailable.
- There are no focus traps except intentional modal containment.

Block if pointer-only controls are required for the primary task.

## Mobile and touch gate

Mobile must be a task-specific adaptation, not a squeezed desktop.

Check:

- Critical targets are comfortably tappable and separated.
- Dense tables, inspectors, timelines, and canvases have a mobile replacement or bounded scroll.
- Hover, precision drag, scroll-jacking, tiny hit areas, and hidden tooltips are not required.
- Drag operations have a non-drag pointer alternative unless dragging is essential.
- Long labels, dynamic values, keyboard overlap, and zoom/reflow do not clip controls.

Block if the task depends on hover, tiny targets, page-level horizontal scroll, or clipped controls.

## State-stress gate

Run at least one state that makes the UI less pretty: long labels, empty data, many records, no permission, slow loading, stale data, server error, partial success, selected/busy rows, or reduced motion.

Pass only if the task remains understandable and recoverable in the stressed state.

## Risk and trust gate

For payment, permission, deletion, data export, publishing, model generation, account, legal, or admin actions, prove:

- The consequence is visible before commit.
- The user can review or edit critical details.
- Sensitive data boundaries are clear.
- Undo, rollback, cancel, or explicit irreversible copy is present according to risk.
- Confirmation is reserved for real risk, not routine safe actions.

## Severity and repair

Rate the worst issue:

- `0`: no usability issue found in checked scope.
- `1`: cosmetic or minor friction; task still succeeds easily.
- `2`: moderate issue; user hesitates, detours, or risks a recoverable error.
- `3`: major issue; primary task, recovery, or repeat speed is likely to fail for many users.
- `4`: blocker; task cannot be completed, work can be lost, or risky action is unclear.

Choose one repair by highest severity first, then by primary-task proximity. Re-check the same failed task after repair.

## Gate results

- `blocked`: severity 4, failed primary task, failed keyboard primary path, lost input, unrecoverable risky action, or mobile-critical task impossible.
- `repair required`: severity 3 or repeated severity 2 issues around primary task, recovery, or repeat speed.
- `acceptable with risk`: minor known issue remains, documented with scope and reason.
- `pass`: primary, repeat, recovery, keyboard, mobile, state-stress, and risk checks pass for the chosen scope.

Hard fails:

- Primary task cannot be completed.
- Visible controls are inert unless explicitly marked static.
- Keyboard cannot complete the primary action.
- Mobile relies on hover, precision drag, tiny targets, clipped controls, or page-level horizontal scroll.
- Input or context is lost after an error.
- Error copy lacks exact problem and next action.
- Risky action lacks consequence, review, undo/rollback, or irreversible warning.
- Workflow UI has no first-run path or returning-user speed path.
- Only the happy path was tested.
- Acceptance is based only on visual attractiveness.
