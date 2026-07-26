# Input interaction model contract

Use this after `interaction-state-matrix.md` and before `interactive-prototype-contract.md` when a UI has drag, resize, scrub, swipe, keyboard shortcuts, command palettes, split panes, canvas/editor controls, carousels, timelines, route/detail transitions, or scroll-driven proof.

This contract decides how the user actually operates the interface. It prevents Stark from making impressive-looking controls that only work by mouse, only work on desktop, or require the user to guess the hidden gesture.

Source anchors:

- MDN Pointer Events defines a unified pointer input model for mouse, pen, and touch: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- WAI-ARIA Authoring Practices define expected keyboard behavior for rich widgets and custom interaction patterns: https://www.w3.org/WAI/ARIA/apg/patterns/
- Apple HIG gestures guidance emphasizes familiar gestures, direct feedback, and caution with custom gestures: https://developer.apple.com/design/human-interface-guidelines/gestures
- Material gesture guidance distinguishes tap, long press, swipe, drag, pinch, and alternate interactions: https://m2.material.io/design/interaction/gestures.html
- WCAG keyboard accessibility requires functionality to be operable through a keyboard interface: https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html

## Required output

```md
Input interaction model
- Surface and primary task:
- Primary input modes:
- Main object being manipulated:
- Direct manipulation path:
- Keyboard/command path:
- Touch/mobile path:
- Pointer/gesture ownership:
- Scroll and focus ownership:
- State and undo model:
- Feedback and constraints:
- Library/API owner:
- Rejected interactions:
- QA probes:
```

If the interaction cannot be explained in this format, simplify it before coding.

## Technique fit

| Interaction | Use when | Required alternate path | Avoid when |
|---|---|---|---|
| Click/tap action | action is discrete and visible | keyboard `Enter`/`Space` | action depends on tiny or ambiguous hit areas |
| Command palette | expert users need speed across actions/routes | visible primary controls remain | simple one-page marketing surface |
| Drag/reorder | object position is the task | move up/down, menu action, or keyboard reorder | reorder changes risky state without undo |
| Resize/split pane | workspace layout is user-controlled | reset/default layout control | pane movement hides primary controls |
| Scrub/timeline | time/progress is the product object | step controls and static summary | it replaces readable proof |
| Swipe/carousel | browsing a bounded set benefits from touch | next/previous buttons and labeled position | essential content is hidden in slides |
| Scroll-driven reveal | reading sequence benefits from progressive proof | static content order and reduced motion | scroll hijacks a task flow |
| Pinch/zoom/canvas pan | spatial inspection is central | zoom buttons, fit-to-screen, reset | content is small because layout failed |
| Hover preview | pointer users need quick glance context | click/focus/tap disclosure | essential info is hover-only |
| Keyboard shortcut | repeated expert action needs speed | visible control and shortcut hint | shortcut is the only path |

## Ownership rules

- Pointer Events own mouse, pen, and touch input when custom direct manipulation is required.
- Native buttons, links, inputs, dialogs, and details own simple actions and disclosure.
- WAI-ARIA patterns or accessible libraries own menus, comboboxes, tabs, grids, command palettes, and carousels only when native controls are insufficient.
- Motion owns continuity after the state change; it must not be the only proof that the state changed.
- Scroll owns reading/proof sequence, not routine dashboard operation.
- Product state owns undo, selected object, dirty state, pending state, and recovery.

If two libraries compete for the same input path, assign one owner or remove the interaction.

## Direct manipulation requirements

Direct manipulation needs all of these:

- visible affordance or handle
- immediate feedback that follows the input
- valid and invalid target states
- cancel or undo path
- keyboard and touch equivalent when the action is important
- stable focus after completion
- reduced-motion behavior that preserves meaning

Do not ship invisible drag zones, custom sliders with no keyboard path, or canvas controls that trap focus.

## Scroll and gesture constraints

- Do not add custom smooth scroll to dashboards, forms, checkout, docs, editors, or admin tools unless the surface is deliberately immersive and non-routine.
- Do not use horizontal scroll as the only way to reach essential controls.
- Do not pin or scrub a section that contains required form fields, pricing, legal, permission, or recovery information.
- Long press can reveal extras, but it cannot be the only path to a critical action.
- Gesture-only interactions need visible alternatives on desktop, keyboard, and touch.

## QA probes

- Complete the primary task with mouse or trackpad.
- Complete the same task with keyboard only.
- Complete the same task on touch/mobile without hover.
- Verify focus order before, during, and after the interaction.
- Verify selected, dragging, invalid target, pending, success, error, and undo states when relevant.
- Verify reduced motion still communicates the same state change.
- Verify scroll position and focus are restored after route/detail transitions.
- Verify no target moves away during pointer/touch activation.
- Verify screen-reader names and status updates match visible state for custom controls.

## Hard fails

- A critical action is drag-only, hover-only, swipe-only, or shortcut-only.
- Custom interaction has no keyboard path.
- Focus disappears during motion, filtering, route changes, or drag completion.
- Gesture feedback is decorative but does not expose valid targets, constraints, or result.
- Scroll effects delay or hide the primary task.
- Touch target is too small for the frequency or risk of the action.
- Undo/recovery is missing for risky direct manipulation.
