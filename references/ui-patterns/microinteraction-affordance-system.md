# Microinteraction and affordance system

Use this after `interaction-state-matrix.md` and before implementation when a UI has hover, focus, press, selection, drag/drop, disclosure, optimistic actions, command surfaces, direct manipulation, or component transitions.

Microinteractions are not decorative animation. They are small, fast feedback loops that tell the user what can be touched, what just changed, what is selected, what is safe, and what can be undone.

Source anchors:

- Material Design interaction states define hover, focus, pressed, dragged, selected, disabled, and state-layer behavior for components: https://m3.material.io/foundations/interaction/states/state-layers
- Apple HIG motion guidance emphasizes realistic feedback motion that follows gestures and expectations: https://developer.apple.com/design/human-interface-guidelines/motion
- W3C WCAG focus appearance guidance defines visible focus requirements: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- W3C WCAG target-size guidance documents minimum target-size considerations: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- SAP Fiori interaction states guidance warns that hover-only information is lost on touch devices: https://www.sap.com/design-system/fiori-design-web/foundations/interaction/states/interaction-foundations-interaction-states

## Microinteraction brief

```md
Microinteraction system
- Surface:
- User input modes:
- Core controls:
- State vocabulary:
- Feedback job:
- Motion budget:
- Timing/easing:
- Pointer/touch parity:
- Selection and drag affordances:
- Optimistic/async feedback:
- Reduced-motion behavior:
- QA checks:
```

If a control exists, it needs a state vocabulary. If a state exists, it needs visible feedback.

## State vocabulary

| State | Purpose | Visual cue | Motion cue | Avoid |
|---|---|---|---|---|
| Default | communicates affordance | shape, label, icon, contrast | none | making controls look like static text |
| Hover | previews interactivity on pointer devices | subtle fill/border/elevation/cursor | under 120ms | revealing essential info only on hover |
| Focus | keyboard/assistive tech location | strong ring/outline/contrast | optional, instant/short | styling focus like hover only |
| Pressed/active | confirms activation | depressed fill, scale, shadow, state layer | 60-120ms down/up | moving target away from pointer |
| Selected | shows chosen object or mode | persistent fill/border/check/count | short continuity | selected state that looks like hover |
| Dragged | shows object is being moved | lift, shadow, handle, ghost, drop target | follows pointer | drag with no drop affordance |
| Disabled | shows unavailable action | muted with reason nearby | none | disabled controls with no explanation |
| Busy | shows action is processing | spinner/progress on stable target | short loop | replacing label so layout jumps |
| Success | confirms completed change | check, toast, inline state, next action | brief | celebration before result exists |
| Error | shows failed change and recovery | inline error, preserved data | shake only if restrained | motion-only error feedback |

Hover, focus, active, selected, disabled, busy, error, and success must be distinguishable in theme modes.

## Feedback jobs

Pick one job per microinteraction:

- Affordance: "this is interactive"
- Confirmation: "your action landed"
- Continuity: "this object became that object"
- Constraint: "this cannot happen yet"
- Progress: "the system is working"
- Recovery: "here is the next safe action"
- Teaching: "there is a faster path next time"

If the feedback has no job, remove it.

## Timing and easing

Use fast, boring timing for product controls:

- hover/focus: 80-140ms
- press/release: 60-120ms
- disclosure/sheet/panel: 160-260ms
- route/detail continuity: 180-320ms
- toast/status arrival: 120-200ms
- drag feedback: immediate, follows the pointer

Use CSS `ease-out` or a small spring for entry, `ease-in` for exit, and linear only for progress. Do not use bouncy springs for risk, checkout, permission, legal, or dense data controls.

## Pointer, keyboard, and touch parity

- Hover can enhance; it cannot be the only way to discover or operate.
- Focus must be visible without relying on hover.
- Pressed state must work for pointer, keyboard activation, and touch.
- Touch needs larger targets and visible tap feedback.
- Drag/drop needs a non-drag alternative for keyboard/touch where the action is important.
- Long press should not hide a critical action unless there is another visible path.

## Selection and direct manipulation

Selection needs persistence:

- selected object identity
- selected count when multi-select
- available actions
- clear selection path
- keyboard equivalent
- mobile/touch equivalent

Drag needs:

- handle or clear draggable region
- grabbed state
- valid/invalid drop targets
- preview/ghost
- cancel path
- final confirmation or undo when risky

## Async and optimistic feedback

For actions that mutate data:

- Preserve the target's position and label while pending.
- Prevent duplicate submission without making the UI feel dead.
- Show optimistic state only when rollback is possible or low-risk.
- On failure, restore the prior state and explain the recovery.
- Put progress near the action or object, not only in a global toast.
- Success should name the changed object or next action.

## Library ownership

| Need | Default owner | Use library when | Reject |
|---|---|---|---|
| hover/focus/press | CSS state tokens | rare | JS hover handlers for simple feedback |
| tooltip/popover affordance | native/Floating UI/Radix/React Aria | positioning, collision, focus behavior matter | custom absolute popovers without escape/focus rules |
| command/list selection | React state + cmdk/React Aria where useful | keyboard model is non-trivial | hover-only active rows |
| drag/drop | native pointer events or a proven DnD library | reordering, collision, keyboard support matter | hand-rolled drag for risky workflows |
| layout continuity | Motion for React | shared layout/state transition helps orientation | Motion for every hover |
| scroll/pinned storytelling | GSAP/native scroll CSS | authored narrative proof needs it | scroll effects for routine controls |

Microinteractions should usually be CSS plus tokens. Reach for Motion or a product library only when state continuity, positioning, keyboard behavior, or direct manipulation gets complex.

## QA checks

- Hover, focus, pressed, selected, disabled, busy, success, and error are visually distinct.
- Focus is visible in light, dark, high contrast, and forced-colors modes when supported.
- Essential information is not hover-only.
- Touch target size and spacing are usable on mobile.
- Pressed feedback does not move the target away from the pointer.
- Loading/busy feedback preserves layout and prevents duplicate action.
- Optimistic failure rolls back and gives a recovery path.
- Drag/drop has valid targets, cancel path, and keyboard/touch alternative when important.
- Reduced motion keeps feedback meaning without relying on movement.
