# Task ergonomics contract

Use this before visual design when the product is meant to be used, not only admired: dashboards, admin tools, CRM, editors, checkout, onboarding, docs, command surfaces, AI agents, setup flows, settings, and any app with repeated tasks or meaningful risk.

This contract turns "usable" into explicit decisions about frequency, effort, recovery, scan speed, control, and evidence. For component-level states and control behavior, pair it with `../ui-patterns/interaction-state-matrix.md`.

## Source-backed heuristics

- Nielsen Norman Group's usability heuristics emphasize system status visibility, user control/freedom, error prevention, recognition over recall, flexibility/efficiency, and constructive recovery from errors: https://www.nngroup.com/articles/ten-usability-heuristics/
- NN/g usability testing guidance treats realistic tasks and realistic participants as the core evidence source, and recommends observing behavior instead of asking leading questions: https://www.nngroup.com/articles/usability-testing-101/
- NN/g error-message guidance recommends avoiding premature errors, showing constraints up front, and not overloading users with noisy error indicators: https://www.nngroup.com/articles/hostile-error-messages/
- W3C WCAG focus guidance requires visible focus indicators with sufficient size and contrast: https://w3c.github.io/wcag/understanding/focus-appearance.html
- W3C target-size guidance gives 44 by 44 CSS pixels as a sufficient target-size technique for many touch targets: https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
- Baymard checkout research repeatedly finds that checkout UX fails when forms lose data after errors, surprise users with costs, force accounts, or bury delivery/security information: https://baymard.com/learn/checkout-flow-ux-optimization

## Required output

```md
Task ergonomics contract
- Core task: ...
- User mode: first-time / returning / power / admin / buyer / operator / creator / support
- Frequency: one-time / occasional / daily / high-volume
- Risk: low / reversible / costly / security / destructive
- Success metric: first value, completion, scan speed, error recovery, conversion, throughput, confidence
- Cognitive load: what the user must remember vs what is visible
- Control model: primary action, secondary actions, cancel/undo/retry/resume/skip
- Speed path: keyboard, saved view, bulk action, recent item, template, default, command
- Error prevention: constraints, previews, validation, confirmation, safe defaults
- Recovery: where the error appears, what is preserved, next action, escalation/help
- State matrix: empty, loading, partial, stale, permission, error, success, long-running
- Evidence plan: realistic task smoke, keyboard path, mobile/touch target, error path, screenshot/console
```

## Ergonomic dimensions

### 1. Frequency fit

Design the same task differently depending on repetition.

| Frequency | Optimize for | Avoid |
|---|---|---|
| One-time | confidence, explanation, safe completion | expert shortcuts before basic clarity |
| Occasional | recognition, defaults, resumability | relying on memory from last visit |
| Daily | scan speed, stable layout, saved filters, keyboard path | tutorial copy and large decorative panels |
| High-volume | batching, command surfaces, bulk action, low pointer travel, audit trail | modal chains, moving controls, hidden status |

If the user repeats the task, make the second run faster than the first. If the UI only helps first-time users, it is not ergonomic.

### 2. Risk fit

Risk determines friction.

| Risk | UX treatment |
|---|---|
| Low | direct action, lightweight feedback |
| Reversible | inline undo or history |
| Costly | preview, confirmation, clear consequence, preserved inputs |
| Security/data | permission scope, audit trail, owner/source, rollback path |
| Destructive | separation from routine actions, confirmation by consequence, recovery or export where possible |

Do not add friction for every action. Put friction where mistakes hurt.

### 3. Recognition over recall

Make important choices visible.

- Show current filter/view/mode, not only a hidden menu state.
- Keep selected object visible when an inspector opens.
- Show constraints before data entry.
- Keep prior input after validation errors.
- Use real labels from the user's domain, not internal schema names.
- Put examples next to unfamiliar fields.
- Surface recent, saved, or recommended actions for repeated work.

### 4. User control

Every serious flow needs escape paths.

- Cancel when work has not started.
- Stop/pause when work is running.
- Retry when work failed recoverably.
- Resume when work was interrupted.
- Undo when an action is reversible.
- Export/copy details when support or audit is likely.
- Skip when setup can continue without a step.

If an action takes time, costs money, changes permissions, deletes data, sends messages, or creates public output, define the control model before styling.

### 5. Error prevention and recovery

Prevention beats clever error copy.

- Validate near the field or action, not in a distant toast.
- Preserve user input after errors.
- Show exact missing/invalid item and how to fix it.
- Keep critical constraints visible before submit.
- Show disabled-action reasons when disabled controls matter.
- Avoid premature validation while the user is still typing.
- Escalate with details/copy button when the audience is technical.

Bad: "Something went wrong."
Better: "Webhook URL timed out after 10s. Retry, edit URL, or copy error details."

### 6. Scan speed

For operating modes, a returning user should scan:

- what changed
- what is blocked
- what is risky
- who/what owns the item
- when it happened
- what action is next

Use stable columns, status language, timestamps, source/owner, and visible priority. Avoid decorative cards that force vertical reading when the job is comparison.

### 7. Touch, keyboard, and focus

- Touch targets should be large enough for real use; use the WCAG target-size guidance as a minimum reference for touch-heavy UI.
- Keyboard focus must be visible, ordered, and trapped only inside true modal/dialog contexts.
- Hover-only features need tap and keyboard equivalents.
- Command palettes, menus, comboboxes, tabs, carousels, dialogs, inspectors, and tables need keyboard behavior named before code.
- Disabled controls need explanation when the reason is not obvious.

## Usability state matrix

Before implementation, define the states that matter for the task.

| State | Must answer |
|---|---|
| Empty | How does data/content arrive? What can the user do now? |
| Loading | What is stable while work happens? Can it be cancelled? |
| Partial | What is missing and what still works? |
| Stale | How old is the data and how can it refresh? |
| Permission | What is blocked, who can grant access, and what is still visible? |
| Error | What failed, what was preserved, and what can the user do next? |
| Success | What changed and where should the user go next? |
| Long-running | What is the plan, progress, artifacts, stop/retry/resume behavior? |

## Evidence tasks

Use realistic tasks, not abstract review.

Examples:

- First-time user creates the first project and reaches a useful result.
- Returning operator finds the riskiest queue item and assigns it.
- Admin denies a plugin permission, then recovers and grants a narrower scope.
- Buyer edits payment info after a failed validation without losing form data.
- Editor selects an object, changes a property, undoes it, and exports.
- Agent user starts a run, sees tool progress, stops it, retries, and inspects artifacts.

## Handoff rule

Pass this contract into visual/platform design. Visual direction may change the layout, type, motion, and materials, but it must preserve:

- core task
- frequency/risk treatment
- primary action hierarchy
- control model
- state matrix
- recovery path
- speed path for repeated work
- evidence tasks

If visual polish weakens any of those, fix the UX before continuing.

## Hard fails

- Primary action is visually impressive but operationally unclear.
- The flow has no error, permission, empty, or interrupted state.
- Validation clears or hides user input.
- Risky action has no consequence preview, undo, or recovery.
- Repeated workflow has no speed path.
- Hover-only controls are essential.
- Focus indicator is missing or impossible to see.
- Disabled controls provide no reason when the user needs to act.
- The mobile version keeps desktop density without touch or hierarchy changes.
