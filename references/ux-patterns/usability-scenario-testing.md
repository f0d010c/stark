# Usability scenario testing

Use this after `task-ergonomics.md`, `usability-pattern-matrix.md`, and relevant UI QA files when a design must prove it is usable, not only attractive.

This file turns usability into scenario evidence: realistic tasks, observable friction, recovery, keyboard/touch paths, comprehension, and repeated-use speed.

## Source anchors

- Nielsen Norman Group usability testing guidance treats realistic tasks and observed behavior as the core evidence source.
- Nielsen Norman Group heuristics emphasize system status, user control/freedom, recognition over recall, error prevention, flexibility/efficiency, and error recovery.
- W3C ARIA Authoring Practices Guide documents expected keyboard and interaction patterns for widgets such as dialogs, tabs, comboboxes, grids, and disclosures.
- WCAG guidance covers visible focus, target size, labels/instructions, error identification, error suggestion, and error prevention for important inputs.

## Use when

- The user asks for usability, "not just pretty," real UX, product flow, checkout, admin, dashboard, editor, agent run, settings, docs, or repeated workflows.
- A visual draft looks good but may be confusing, slow, brittle, inaccessible, or fake.
- A design includes risky actions, forms, permissions, money, generated output, long-running work, dense data, keyboard users, mobile/touch, or recovery paths.
- Stark is preparing final QA for public, high-craft, or "go all out" work.

## Output contract

```md
Usability scenario test
- Surface:
- User persona/mode:
- Core task:
- First-run scenario:
- Returning-user scenario:
- Error/recovery scenario:
- Keyboard-only scenario:
- Mobile/touch scenario:
- Success criteria:
- Friction budget:
- Evidence captured:
- Usability failures:
- Fix applied:
- Re-check:
- Remaining risk:
```

## Scenario ladder

Use the strongest level practical in the environment.

| Level | Evidence | Use for |
|---|---|---|
| 0 | Scenario brief only | planning, not proof |
| 1 | Static inspection against scenarios | early designs, no runtime |
| 2 | Browser/DOM probe of scenario path | rendered UI, basic controls |
| 3 | Interaction smoke with role/label selectors | menus, forms, dialogs, command, filters |
| 4 | Desktop + mobile scenario screenshots | hierarchy, touch, containment |
| 5 | Error/recovery, keyboard, reduced-motion, and state probes | serious product UI |
| 6 | Re-check after repair | final high-craft/public delivery |

Do not claim a UI is usable from a pretty screenshot alone.

## Required scenarios by surface

### Dashboard, CRM, admin, queue

- First-run: user understands what changed and what needs action.
- Returning: user finds the highest-priority item, filters/sorts, selects it, and acts.
- Error/recovery: data fails, permission blocks an action, or stale data refreshes.
- Keyboard: user reaches filters, list/table, detail, and primary action without a trap.
- Mobile: dense table becomes priority list, contained scroll, or detail sheet.

Hard fail: the user cannot tell what to do next within the first viewport.

### Checkout, pricing, permissions, trust

- First-run: user knows cost/scope, consequence, and primary next action.
- Returning: user edits details or changes plan/scope without restarting.
- Error/recovery: validation preserves input and names the exact fix.
- Keyboard: user can complete fields, review, submit/cancel, and see focus.
- Mobile: CTA does not obscure price/risk/error text.

Hard fail: money, renewal, permission, destructive scope, or cancellation risk is hidden away from the action.

### Editor, workbench, creative tool

- First-run: user identifies canvas/object, tools, inspector, and export/share path.
- Returning: user selects an object, changes a property, undoes it, and exports.
- Error/recovery: unsupported file, permission issue, or failed export has next actions.
- Keyboard: focus can move between canvas, toolbar, inspector, command/search, and dialogs.
- Mobile/tablet: focused replacement preserves the main task rather than crushing desktop chrome.

Hard fail: visual polish competes with canvas dominance or stable controls.

### Agent run, AI workflow, long-running task

- First-run: user understands plan, current step, output, stop/cancel, and risk.
- Returning: user inspects artifacts, retries a failed step, resumes or compares runs.
- Error/recovery: blocked/failed/tool-error state gives reason and next action.
- Keyboard: plan, timeline, artifacts, stop/retry, and detail panels are reachable.
- Mobile: plan/progress/artifacts become a priority stack with persistent controls.

Hard fail: "working" state hides progress, side effects, artifacts, or recovery.

### Docs, developer platform, command/search

- First-run: user finds a task, copies a runnable example, and sees version/platform context.
- Returning: user uses search/command or recents to reach the same task faster.
- Error/recovery: missing result, wrong version, or failed command has a recovery route.
- Keyboard: search/command, nav, copy buttons, tabs, and code blocks are reachable.
- Mobile: nav/search does not bury task content.

Hard fail: marketing copy blocks the task path.

### Landing/product proof

- First-run: user can state what the product does, who it is for, why it matters, and next action.
- Returning/evaluator: user finds proof, pricing/docs/demo, and trust/risk answers.
- Error/recovery: broken media/form/fallback still leaves proof and CTA understandable.
- Keyboard: nav, CTA, forms, media controls, and carousels are operable.
- Mobile: hero object, proof, and CTA remain connected.

Hard fail: the page is memorable but the product/action is not.

## Friction budget

Define acceptable friction before QA:

| Task risk/frequency | Acceptable friction | Red flags |
|---|---|---|
| Low-risk frequent | one click/shortcut, no confirmation | modal chains, moving controls |
| Reversible frequent | fast action plus undo/history | confirmation every time |
| Costly or public | review, preview, confirmation | hidden consequence |
| Security/destructive | explicit scope, consequence, owner, rollback/export | cheerful one-click danger |
| First value | helpful explanation, skip/resume | optional setup before value |
| High-volume operations | saved views, bulk actions, keyboard path | card-by-card reading |

## Scenario probes

Ask these during review:

- Can a new user name the product object and primary action without reading every section?
- Can a returning user complete the core task faster than a first-time user?
- What changed, what is blocked, who owns it, when did it happen, and what action is next?
- What happens when data is empty, loading, stale, permission-blocked, failed, or partially complete?
- Is the user's input preserved after an error?
- Is every risky action paired with consequence, undo/rollback, or recovery?
- Can a keyboard user reach and exit every interactive region?
- Does mobile preserve the job with different structure and target sizes?
- Does reduced motion preserve proof, orientation, and state?
- Does the design still work when copy/data expands?

## Browser-assisted checks

When a browser is available, combine visual QA with scenario probes:

- Use role, label, placeholder, and text selectors for primary actions.
- Tab through the first scenario and check focus visibility/order.
- Trigger one disabled, error, empty, or permission state when the UI supports it.
- Measure page-level overflow at desktop, tablet, and mobile.
- Check that controls are not inert by observing DOM/state/text changes.
- Capture before/after screenshots only for states that prove a scenario.

## Fix order

If a scenario fails, repair in this order:

1. Product object and primary action.
2. State/status visibility.
3. Error prevention and recovery.
4. Keyboard/focus/touch path.
5. Repeated-use speed path.
6. Mobile/adaptive structure.
7. Copy clarity.
8. Visual polish.

Do not fix scenario failures by adding more decoration.

## Final report format

```md
Usability scenario report
- Scenarios tested:
- Passed:
- Failed:
- Evidence:
- Fix applied:
- Re-check:
- Remaining risk:
```

## Hard fails

- No realistic task was named.
- Only happy path was tested.
- Core controls are inert or decorative.
- Error state loses user input or hides recovery.
- Keyboard path is absent for custom widgets.
- Mobile path relies on hover, tiny targets, or desktop density.
- Risky action lacks consequence, review, undo, rollback, or export.
- Repeated workflow has no faster second-run path.
