# Interaction state matrix

Use this when a UI must behave like a real product instead of a polished static mockup.

This file defines the states, controls, feedback, recovery paths, focus behavior, and QA evidence Stark should require for product UI. Use it after `task-ergonomics.md`, `product-intent-matrix.md`, or `component-anatomy.md` when the screen has actions, data, forms, permissions, async work, dashboards, editors, checkout, command palettes, or long-running agent runs.

When the screen contains custom dialogs, menus, tabs, comboboxes, command palettes, data grids, carousels, status messages, or custom disabled controls, also use `accessibility-interaction-contract.md` to define exact keyboard, focus, live-region, hidden-content, reduced-motion, and touch behavior.

## Required output

```md
Interaction state matrix
- Surface:
- Primary object:
- Core action:
- State set:
- Available controls per state:
- Disabled reasons:
- Recovery path:
- Keyboard/focus behavior:
- Mobile/touch behavior:
- Evidence task:
```

## State Principles

- Every state should answer: what happened, what is still safe, what can I do next?
- Disabled controls need a reason when the user expects to use them.
- Loading should preserve layout stability and show what is being loaded.
- Error states should preserve user input and provide a specific next action.
- Permission states should explain scope, owner, and escalation path.
- Stale states should show age and refresh/retry behavior.
- Long-running states should expose progress, stop/pause, retry/resume, artifacts, and blocked reasons.
- Success should point to the next useful action, not only celebrate.

## Core State Matrix

| State | Must Show | User Control | Focus/Keyboard | Evidence |
|---|---|---|---|---|
| Empty | how content arrives, sample/import/create action, value of first item | create/import/connect/clear filter | primary action first in focus order | empty screenshot or DOM state |
| Loading | stable skeleton/poster, what is loading, cancellable if long | cancel/stop only when meaningful | do not trap focus in skeletons | loading state or fixture |
| Partial | what loaded, what is missing, what still works | retry missing, continue with partial | focus remains on usable controls | partial data example |
| Stale | age/source of data, refresh status | refresh/retry/keep working | status announced or visible near data | stale timestamp or badge |
| Permission | blocked object, required scope, owner/admin, safe visible info | request access, switch account, copy details | focusable request/recovery action | permission state screenshot |
| Disabled | reason, unmet condition, path to enable | edit prerequisite, choose item, wait, upgrade | disabled native control or `aria-disabled` with custom handling | disabled reason visible |
| Validation error | exact field/problem, constraint, preserved value | fix field, clear, retry submit | focus/error relation near field | invalid input task |
| Server error | what failed, whether input/data was preserved, retry/escalation | retry, edit, copy error, contact/support | focus moves to meaningful error summary when needed | failed request state |
| Success | what changed, where it exists, next action | view, undo, share, continue, close | return focus to trigger or next action | success state |
| Selected | selected object, count, available actions, clear selection | inspect, bulk action, clear, compare | keyboard selection visible | selected row/card state |
| Busy/submitting | pending action, duplicate prevention, expected wait | cancel only if safe | keep target stable; announce busy when relevant | submitting fixture |
| Long-running | plan, current step, elapsed time, artifacts, blocked/error path | stop, pause, retry, resume, inspect, export | current step reachable; logs bounded | run timeline task |
| Offline/unavailable | unavailable capability, cached/stale data, reconnection path | retry, work offline, copy diagnostics | no focus dead end | offline/unavailable state |
| Destructive confirm | consequence, object name, recovery/undo, confirmation action | cancel, confirm, export backup if relevant | focus starts on safe action unless platform convention differs | destructive flow task |

## Component State Requirements

### Forms

Required:

- pristine, dirty, validating, field error, server error, submitting, success
- preserved values after validation/server errors
- field-level errors near fields, not only toast
- disabled submit reason when conditions are unmet
- focus path to first meaningful error

Avoid:

- clearing data after errors
- validating noisily while the user is still typing
- vague "invalid" messages

### Tables / Queues

Required:

- loading, empty, filtered empty, stale, error, selected, bulk action, permission, blocked
- stable column widths and units
- row action, selected count, clear selection
- bounded scroll or mobile replacement

Avoid:

- decorative cards when comparison is the job
- color-only status
- fake filters and bulk actions

### Command Palettes

Required:

- idle, typing, loading, no results, selected result, disabled command, permission blocked, execution error
- command groups, shortcut hints, disabled reasons
- arrow/enter/escape behavior
- focus returns to trigger

Avoid:

- palette rows that do nothing
- hover-only command meaning

### Dialogs / Sheets / Popovers

Required:

- open/closed, loading content, validation/error, destructive confirmation where relevant
- clear title and description
- escape/outside-click rules
- focus trap only in true modal contexts
- focus returns to trigger

Avoid:

- focus entering hidden content
- destructive action as the default focus without reason

### Agent Runs / Timelines

Required:

- queued, running, waiting for input, blocked, failed, retrying, cancelled, succeeded
- current step, elapsed time, plan, artifacts, logs/tool calls
- stop/retry/resume/inspect/copy controls
- bounded logs and mobile current-step summary

Avoid:

- spinner-only run state
- hiding failures behind final summary
- celebration before artifacts exist

### Media / Canvas / Generated Output

Required:

- loading poster, blank/error fallback, processing, ready, failed, export/share
- nonblank evidence when media is the proof
- controls outside the asset for accessibility
- reduced-motion/static equivalent

Avoid:

- essential text baked into media
- blank canvas without fallback

## Disabled State Rules

Use native `disabled` when a control should be removed from focus order and cannot be activated.

Use `aria-disabled="true"` only when a custom control should remain perceivable or focusable, and then manually prevent activation and style it clearly.

Disabled is acceptable only when at least one is true:

- the reason is visually obvious
- the reason is stated near the control
- the user can fix the prerequisite nearby
- the action is temporarily pending and progress is visible

If none are true, replace disabled with an enabled action that explains the blocker.

## Focus And Target Rules

- Keyboard focus must be visible and survive theme/background changes.
- Focus should not disappear during loading, animation, route transition, or state change.
- Dialogs and command palettes should restore focus to their trigger.
- Focus should not enter hidden panels, offscreen carousels, collapsed menus, or inert animation layers.
- Touch targets for frequent or risky actions should be large enough for real use; avoid tiny icon-only controls without labels or tooltips.
- Hover-only affordances need tap and keyboard equivalents.

## Evidence Tasks

Use a realistic task, not a static checklist:

- Form: submit invalid data, preserve values, fix first error, submit successfully.
- Table: filter to empty, select rows, trigger bulk action, recover from stale/error.
- Permission: try denied action, request access, copy audit details.
- Agent run: start, stop, retry, inspect artifact, recover from blocked step.
- Editor: select object, change property, undo, save/export, handle conflict.
- Checkout: fail validation/payment, preserve input, recover, confirm terms.

## Hard Fails

- Happy path only for a risky or repeated workflow.
- Disabled controls with no reason or path forward.
- Loading skeleton shifts layout or traps focus.
- Error state loses user input.
- Permission state hides who can grant access.
- Long-running state has no stop/retry/resume or artifact visibility.
- Focus disappears or enters hidden UI.
- Mobile requires hover or tiny controls for essential actions.

## Source anchors

- NN/g's usability heuristics emphasize visibility of system status, user control, error prevention, recognition over recall, flexibility, and recovery from errors: https://www.nngroup.com/articles/ten-usability-heuristics/
- WCAG focus appearance defines visibility requirements for keyboard focus indicators: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- WCAG target size guidance documents touch target sizing considerations: https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
- MDN documents `aria-disabled` as perceivable but not operable, with custom controls still needing manual behavior prevention: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
- Baymard checkout guidance highlights preserved input and clear validation recovery as critical checkout behavior: https://baymard.com/learn/checkout-flow-ux-optimization
