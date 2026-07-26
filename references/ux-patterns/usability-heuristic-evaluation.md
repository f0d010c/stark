# Usability heuristic evaluation

Use this when a UI looks polished but may still be hard to understand, recover from, navigate by keyboard/touch, or repeat efficiently. It belongs after `task-ergonomics.md` and `usability-pattern-matrix.md`, and before final scenario/task-flow acceptance.

This is an inspection layer, not a replacement for user testing. Use it to find likely problems, rank them, and decide what to repair first.

## Use when

- The user says usable, not only good looking, cheap, confusing, hard to use, high friction, or presentation-like.
- The surface is a form, checkout, editor, dashboard, command surface, settings area, agent run, permission flow, or any repeated/risky workflow.
- The design uses a new pattern, custom interaction, dense data, motion, or hidden controls that could hurt learnability.
- You need to decide whether visual polish is masking a task failure.

## Do not use when

- There is no concrete user task, mode, or surface to evaluate.
- The work is purely a decorative asset with no interaction.
- A full usability test is already planned and this would only duplicate the protocol. Use it to prepare test focus areas instead.

## Evaluation contract

```md
Usability heuristic evaluation
- Surface:
- User mode:
- Core task:
- Evaluation method: heuristic review / cognitive walkthrough / mixed
- Scope: task, section, user group, device
- Heuristics checked:
- Walkthrough steps:
- Findings:
- Severity:
- Evidence:
- First repair:
- Re-check:
- Remaining risk:
```

## Heuristic set

Check these against the actual task, not against abstract taste:

- System status: feedback, progress, busy states, queued work, saved/unsaved state, sync/stale state.
- Real-world match: labels, units, domain vocabulary, object names, visual metaphors, ordering.
- User control: undo, cancel, back, escape, exit, retry, stop, edit, clear recovery routes.
- Consistency: internal patterns, platform conventions, component behavior, terminology, icon meaning.
- Error prevention: constraints, defaults, previews, destructive separation, confirmation when risk justifies it.
- Recognition over recall: visible options, preserved context, inline hints, searchable settings, persistent summaries.
- Efficiency: shortcuts, saved views, bulk actions, repeat paths, keyboard paths, low-latency feedback.
- Minimalist support for the task: remove distracting proof, duplicate CTAs, ornamental controls, weak cards, and copy that competes with the next action.
- Error recovery: plain-language error, exact failed object, next action, retained input, retry/rollback.
- Help in context: inline assistance, examples, docs entry points, empty-state teaching, progressive disclosure.
- Accessibility interaction basics: focus visibility, semantic labels, touch targets, reduced motion, live status, keyboard order.

## Cognitive walkthrough prompts

For each important step, ask:

1. Will the user know this step helps their larger goal?
2. Is the correct control visible or findable?
3. Does the control label/icon communicate the result?
4. After action, is progress or failure visible?
5. If the user is wrong, can they recover without losing work?

Mark a step as failed if any answer is no for the selected user mode. Do not average away a failed recovery path because the happy path looks good.

## Severity scale

Use this 0-4 scale:

- 0: not a usability issue.
- 1: cosmetic or polish issue; fix only when time allows.
- 2: minor friction; low priority unless frequent.
- 3: major issue; high priority before public or serious delivery.
- 4: blocker; do not accept or release until repaired.

Rank severity by:

- Frequency: how often the user will hit it.
- Impact: how hard it is to continue or recover.
- Persistence: whether it keeps recurring after the user learns the UI.
- Risk: money, data, security, trust, irreversible work, public embarrassment.
- Confidence: screenshot-only suspicion, code/runtime evidence, or observed task failure.

## Repair order

1. Fix severity 4 and repeated severity 3 issues before visual polish.
2. Preserve the strongest product/design decision unless it causes the failure.
3. Prefer the smallest repair that makes the same task pass: label, placement, state, recovery path, default, confirmation, or disclosure.
4. Re-check the same walkthrough step and scenario after the repair.
5. Only then continue to typography, material, animation, or screenshot polish.

## Hard fails

- No concrete task or user mode.
- Only visual critique with no heuristic, walkthrough step, or severity.
- Severity assigned without evidence or risk rationale.
- Decorative fixes for control, state, recovery, or comprehension problems.
- Hiding critical actions behind hover, gesture, motion, or unexplained icons.
- Ignoring keyboard, touch, reduced motion, error recovery, or retained input on serious product UI.

## Source anchors

- NN/g 10 usability heuristics: system status, real-world match, control, consistency, error prevention, recognition, efficiency, minimalist design, error recovery, and help.
- NN/g heuristic evaluation process: narrow scope, evaluate task/device/user group, record independent issues, consolidate findings.
- NN/g severity ratings: frequency, impact, persistence, and 0-4 priority scale.
- NN/g cognitive walkthroughs: evaluate task steps with goal, visibility, label/result association, and progress feedback.
