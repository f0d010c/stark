# Task-Flow Acceptance Harness

Use this after `task-ergonomics.md`, `usability-pattern-matrix.md`, `usability-scenario-testing.md`, and the relevant interaction/accessibility contracts when a generated app or product UI needs to prove it works, not merely look good.

This harness turns usability into runnable evidence. It is especially important for dashboards, editors, checkouts, onboarding, settings, agent runs, admin tools, mobile task flows, and any surface with forms, filters, destructive actions, permissions, async work, or repeated daily use.

## What It Prevents

- Beautiful screens where the primary job cannot be completed.
- Presentation-like pages with no real product behavior.
- Hover-only controls, dead buttons, invisible focus, trapped dialogs, and squeezed desktop layouts on mobile.
- Error states that blame the user, lose data, or provide no next action.
- First-run flows that ask for too much setup before showing value.
- Repeated workflows that make experienced users re-read or reconfigure the same context.

## Sources To Respect

- WCAG 2.2: keyboard access, focus order, focus visibility/not-obscured, target size, dragging alternatives, redundant entry, error identification, labels, and status messages.
- WAI-ARIA Authoring Practices Guide: custom widgets must define semantics, accessible names/descriptions, and keyboard behavior.
- Nielsen Norman usability heuristics: visibility of system status, match to the real world, user control, consistency, error prevention, recognition over recall, flexibility, and error recovery.

## Required Task Set

Define at least six tasks before accepting the design:

- First-run task: a new user reaches first value from default, empty, or sample state.
- Returning-user task: a frequent user completes the common job faster through saved context, recents, defaults, filters, shortcuts, or bulk actions.
- Error/recovery task: the user hits validation, network, permission, conflict, timeout, or destructive-action friction and recovers without losing work.
- Keyboard-only task: the primary task can be completed with visible focus, logical focus order, escape/close behavior, and focus return.
- Mobile/touch task: the same job works on mobile, or the design provides an explicit mobile replacement with thumb-safe controls and no hover-only dependency.
- State-stress task: loading, empty, disabled, busy, optimistic, retrying, success, and blocked states have visible controls, reasons, and recovery.

Add domain-specific tasks for checkout, data review, editing, collaboration, agent runs, search, bulk action, settings, or account/security risk.

## Acceptance Bars

- The primary object and primary action are identifiable within 3 seconds in the target viewport.
- The primary task has no dead controls in the visible path.
- No required task depends on hover, pointer precision, drag-only interaction, animation timing, or hidden keyboard shortcuts.
- Focus order follows the work order; focus is visible and returns after dialogs, menus, sheets, and route/view changes.
- Touch targets and spacing meet the chosen platform bar; any drag gesture has a button/menu/keyboard alternative.
- Error copy names what happened, where it happened, and the next available action.
- User input is preserved through validation, retry, navigation interruption, and auth/permission recovery.
- Returning-user paths remove redundant entry and support faster repeat work.
- Mobile layout preserves the job, not the desktop composition.
- Evidence includes before/after screenshots or traces for failed tasks and repaired tasks.

## Required Output Contract

```md
Task-flow acceptance harness
- Product surface:
- Primary user/job:
- Primary object:
- Task set:
- Fixture/state setup:
- Success criteria:
- Friction budget:
- Keyboard path:
- Touch/mobile path:
- Error/recovery path:
- Empty/loading/offline/permission state:
- Selectors/test hooks:
- Evidence to capture:
- Failed task:
- Required fix:
- Re-check:
- Ship decision:
```

## Evidence To Capture

- Desktop screenshot for the start, main action, recovery state, and success state.
- Mobile screenshot or responsive probe for the same task or the explicit mobile replacement.
- Keyboard trace or focus probe showing order, visible focus, escape/close, and focus return.
- Interaction trace for at least one realistic state change, not only static screenshots.
- Console/runtime check for errors during the task.
- Accessibility notes for labels, status/live regions, target/touch behavior, and reduced-motion handling.
- Friction notes: extra steps, repeated entry, confusing labels, hidden controls, fragile timing, or missing recovery.

## Hard Fails

- The primary task cannot be completed in the rendered UI.
- Visible controls imply behavior but do nothing without being marked intentionally static.
- Keyboard users cannot reach or complete the primary action.
- Mobile requires a hover state, precision drag, clipped control, hidden submit, or horizontal page scroll.
- A failed submission, permission denial, network error, or conflict loses user input.
- Error states do not identify the problem or next action.
- The design ships with only the happy path represented.

## Repair Loop

When a task fails, preserve the strongest product/design decision and repair the smallest behavior or layout issue that unlocks the task. Re-run the same task with the same fixture after the fix. Do not replace the visual system unless the failure is caused by the structure itself.

## Ship Decision

Use this gate after visual QA and before final acceptance:

- Blocked: a hard fail remains.
- Passable: all tasks complete, but friction is still visible.
- Good: all tasks complete with clear recovery and responsive parity.
- High-craft: tasks complete quickly, states feel designed, repeat use is faster, and recovery is calm.
- Portfolio: high-craft plus evidence is strong enough to publish as a showcase example.
