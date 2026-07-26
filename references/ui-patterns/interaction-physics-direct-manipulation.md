# Interaction physics and direct manipulation

Use this when a UI includes drag, resize, scrub, pan, zoom, reorder, split panes, canvas handles, carousels, sliders, timelines, inspectors, direct object editing, or gesture-heavy mobile interactions.

This file complements `input-interaction-model-contract.md`, `transition-continuity-contract.md`, `microinteraction-affordance-system.md`, `component-anatomy.md`, `interactive-prototype-contract.md`, `accessibility-interaction-contract.md`, `performance-budget-contract.md`, and `task-ergonomics.md`.

The goal is tactile quality plus control. Direct manipulation should feel immediate, bounded, reversible, and understandable. It should not require precise dexterity, hidden gestures, or guesswork.

## Required output

```md
Interaction physics and direct manipulation brief
- Surface:
- Manipulated object:
- Interaction type:
- Input owners:
- Affordance/handle:
- Bounds and constraints:
- Snap points:
- Feedback states:
- Cancel/undo/recovery:
- Keyboard alternative:
- Touch/mobile alternative:
- Motion physics:
- Performance boundary:
- Accessibility boundary:
- Rejected behavior:
- QA evidence:
```

## Direct manipulation quality model

| Quality | Meaning | Evidence |
|---|---|---|
| Visible affordance | user can see what can be moved, resized, scrubbed, or edited | handle, cursor, label, active region, selected state |
| Immediate response | object follows input without lag or delayed surprise | pointer/touch smoke, no layout thrash, stable frame rate |
| Bounded movement | valid range and invalid targets are obvious | min/max, drop zones, grid, collision, limit feedback |
| Reversible action | user can cancel, undo, reset, or restore default | escape, undo, reset, confirmation, history |
| Alternate path | important drag/gesture action has non-drag operation | buttons, stepper, menu action, keyboard reorder, text input |
| State continuity | selected object and target remain identifiable | focus, selected state, persistent object, transition continuity |
| Touch parity | mobile has usable targets and no hover requirement | touch target check, no tiny handles, gesture conflicts resolved |
| Reduced motion parity | movement can be minimized without losing state | direct state change, highlight, numeric/value update |

## Interaction recipes

### Drag/reorder

- Use when order, grouping, or assignment is the product task.
- Show handle or clear draggable region.
- Show grabbed state, ghost/preview, valid targets, invalid targets, and insertion point.
- Provide non-drag controls: move up/down, assign menu, keyboard reorder, or destination picker.
- Use undo when order/assignment changes data.
- Reject: invisible drag zones, auto-scroll that runs away, reordering without a clear final state.

### Resize and split panes

- Use when workspace layout or object dimensions matter to the task.
- Provide visible handle, min/max bounds, fit/default reset, and snap points when useful.
- Keep primary controls reachable while resizing.
- Store layout only when it improves repeated use; offer reset.
- Reject: tiny hit areas, panes that can collapse important controls with no recovery.

### Scrub/timeline/slider

- Use when time, progress, value, or before/after position is the object.
- Show current value, range, ticks/labels where needed, and keyboard step behavior.
- Provide direct jump or step buttons when precision matters.
- Preserve readable proof outside the moving handle.
- Reject: scrub-only product proof with no static summary.

### Canvas pan/zoom/object manipulation

- Use when spatial inspection, design, media editing, map, diagram, or data field is central.
- Provide select, pan, zoom, fit-to-screen, reset, undo/redo, and keyboard path where important.
- Show selected object, handles, constraints, locked/hidden/invalid states, and inspector sync.
- Avoid moving chrome or controls during manipulation.
- Reject: canvas that traps focus, touch gestures with no visible controls, hidden selection.

### Carousel/swipe

- Use only for bounded browsing, not essential hidden content.
- Provide next/previous, position label, keyboard operation, and touch swipe.
- Stop autoplay on interaction and provide pause when motion persists.
- Reject: critical pricing, legal, recovery, or docs content hidden in slides.

### Gesture shortcuts

- Use gestures as acceleration, not the only path.
- Provide visible controls, command palette action, or menu equivalent.
- Avoid conflicts with browser/OS gestures and scroll.
- Reject: custom gestures that compete with back navigation, page scroll, text selection, or assistive tech.

## Physics rules

- **Latency**: manipulated object should respond immediately. If heavy work is needed, update a lightweight preview and commit afterward.
- **Easing**: pointer-following movement should follow the pointer, not ease behind it. Use easing after release for settle/snap only.
- **Inertia**: use only for browsing or spatial canvases where momentum is expected; avoid inertia for risky data actions.
- **Spring**: use restrained spring for release/settle, not for dense tables, checkout, permissions, or legal/risk flows.
- **Snap**: snap when it clarifies grid, order, step, page, frame, or valid target; avoid surprise snap that changes user intent.
- **Magnetism**: subtle target attraction can help; strong magnetic cursor/control behavior often feels gimmicky and harms precision.
- **Constraints**: show boundary feedback before failure. Hard stops should feel intentional.
- **Commit**: distinguish preview while dragging from committed state after release.

## Input implementation boundaries

- Use Pointer Events for custom pointer/touch/pen direct manipulation.
- Use pointer capture when the interaction must continue while the pointer leaves the original target.
- Set `touch-action` intentionally so custom gestures do not accidentally block page scrolling or browser gestures.
- Avoid text selection conflicts on draggable regions, but do not disable selection globally.
- Keep state in the product model, not only in animation values.
- For React, isolate pointer state from expensive rendering; throttle or use requestAnimationFrame for heavy updates.
- For canvas/WebGL, cap work by viewport/device and provide DOM controls for essential actions.

## Accessibility boundaries

- WCAG 2.2 dragging guidance requires a single-pointer alternative for functionality that uses dragging unless dragging is essential.
- Keyboard alternatives need visible focus, step size, constraints, and current value/status.
- Screen reader users need names and state updates for selected, grabbed, dropped, resized, invalid, and committed states when relevant.
- Targets should be large enough for frequency/risk; tiny handles need alternate controls.
- Do not rely on path-based gestures, multi-finger gestures, device motion, or hover for critical actions.

## QA checks

- Mouse/trackpad: complete the manipulation and recover from a mistake.
- Touch/mobile: complete without hover, tiny handles, or accidental page scroll traps.
- Keyboard: complete the same important action or use the documented alternative.
- Screen reader/status: selected/grabbed/invalid/committed state is named when custom behavior is present.
- Bounds: min/max/invalid target/drop rejection are visible and recoverable.
- Cancel/undo: Escape, undo, reset, or recovery works where risk requires it.
- Performance: pointer movement does not jank; heavy updates are previewed or throttled.
- Reduced motion: state change remains understandable without travel or spring.
- Layout: controls do not move away during activation; no page-level overflow appears.

## Source anchors

- MDN Pointer Events documents unified mouse, pen, and touch input plus pointer capture behavior: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- W3C WCAG 2.2 Understanding 2.5.7 explains that dragging functionality needs a single-pointer alternative unless dragging is essential: https://w3c.github.io/wcag/understanding/dragging-movements.html
- Apple HIG gestures guidance recommends familiar gestures, clear feedback, and alternatives for gesture-based actions: https://developer.apple.com/design/human-interface-guidelines/gestures
- Material gesture guidance distinguishes tap, long press, swipe, drag, and alternate interactions: https://m2.material.io/design/interaction/gestures.html
- WAI-ARIA Authoring Practices define keyboard behavior expectations for rich custom widgets: https://www.w3.org/WAI/ARIA/apg/patterns/
- WCAG keyboard guidance requires functionality to be operable through a keyboard interface: https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html
