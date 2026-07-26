# Component visual composition contract

Use this after `component-anatomy.md`, `visual-token-recipes.md`, and `microinteraction-affordance-system.md` when a generated UI has visible controls, cards, panes, toolbars, lists, tables, inspectors, forms, dialogs, or repeated product components. Use it before `visual-finish-system.md`.

The goal is to stop components from looking like default library examples, decorative cards, or loosely spaced mockups. Component visual composition defines how parts sit together: edge roles, padding, alignment, state treatment, surface depth, icon/type fit, and whether a component should be framed at all.

## Output contract

```md
Component visual composition
- Component set:
- Product job:
- Density mode:
- Surface roles:
- Edge/border roles:
- Padding/gap scale:
- Type/icon alignment:
- State visuals:
- Focus and target rule:
- Elevation/shadow rule:
- Repeated-item rule:
- Mobile/touch adaptation:
- Library default removed:
- QA checks:
```

## Composition rules

| Decision | Strong component | Weak generated signal | Repair |
|---|---|---|---|
| Surface role | each pane/card/control has a reason to be framed | every block is a card | remove frames; keep cards for repeated items, selected objects, dialogs, or proof |
| Edge role | borders separate, select, warn, or contain | same border on every surface | reserve strong borders for active/focus/error/drag/overlay |
| Padding | inner padding matches density and content type | giant uniform 24px padding everywhere | use compact values for controls/lists; larger only for prose/media |
| Gap rhythm | related labels/values/actions sit close | equal gaps make relationships unclear | tighten related parts; widen between groups |
| Icon alignment | icon optical center matches text x-height and control center | icons float high/low or dominate labels | size icons by role and align to label/control center |
| Type roles | label, value, helper, action, status are distinct | tiny uppercase labels everywhere | map each text role to size/weight/color/line-height |
| State visuals | hover/focus/pressed/selected/disabled/busy/error differ | hover, selected, focus all look alike | assign persistent selected and strong focus separately |
| Elevation | depth clarifies overlay, drag, selected, or media | identical shadow on all cards | use border/tonal surfaces first; shadow only for real layering |
| Repetition | repeated items scan as a system | cards become a wall of equal furniture | add row rhythm, anchors, status columns, or selection handles |
| Mobile | touch targets and priority content survive | desktop component just shrinks | convert to priority stack, sheet, drawer, or bounded scroll |

## Component families

### Buttons and actions

- Primary action should be visually unique by position, label, and state, not only accent color.
- Secondary actions should not compete with primary or destructive actions.
- Destructive/risk actions need confirmation, explanation, or distance from safe actions.
- Busy state preserves label/action width where possible.
- Icon-only actions need accessible names and tooltips when meaning is not obvious.

### Cards and repeated items

- Use cards when an item is independently selectable, movable, comparable, or previewable.
- Do not wrap page sections in decorative cards.
- Repeated cards need a stable anchor: title, status, object thumbnail, metric, owner, or date.
- If the user is comparing many items, consider rows, table, priority list, or split detail instead of cards.

### Panels, panes, and inspectors

- Panes need a clear base, header/action region, content region, and overflow owner.
- Inspectors should be compact, aligned, and stable; their controls should not reflow the canvas/work area.
- Drawer/sheet overlays need focus handling, escape/close, and visible elevation.
- Avoid nested cards inside panels unless the inner object is a repeated item.

### Lists and tables

- Row height, column alignment, sticky headers, selection, empty/error/loading states, and numeric alignment matter more than card polish.
- Use tabular figures for comparable numbers, times, prices, durations, and counters.
- Status, owner, date, and action placement should be repeatable across rows.
- Mobile can use priority rows, detail sheets, or bounded horizontal scroll; do not let the page drift sideways.

### Forms and settings

- Labels stay visible and close to controls.
- Helper/error text belongs near the field and must not shift the whole form unpredictably.
- Required/optional logic should be explicit.
- Disabled controls need a reason or recovery path when the user can do something about it.
- Sticky actions must not cover errors, hints, or focused inputs.

### Toolbars and command surfaces

- Toolbars need stable dimensions; hover/pressed/selected states cannot resize controls.
- Group related tools; separate destructive, global, and mode actions.
- Use familiar icons where possible; pair unfamiliar icons with text or tooltip.
- Command results need keyboard highlight, group labels, loading/empty/error states, and a preview/action outcome.

## State visual minimum

Every serious interactive component should define:

- default
- hover when pointer exists
- focus-visible
- pressed/active
- selected/current when applicable
- disabled/unavailable with reason when actionable
- busy/loading
- error/warning/success when state can occur

Focus must not be merely a hover color. Selected must not be merely a hover color. Disabled must not be the only explanation for why an action cannot happen.

## QA checks

- Screenshot at desktop and mobile/tablet width shows controls and repeated items aligned.
- At least one focus-visible state is obvious on each major component family.
- Hover, selected, pressed, disabled, busy, and error are visually distinct where relevant.
- Text/icons fit inside controls at 125-150% zoom or expected text expansion.
- No page section is a card merely because it is a section.
- Repeated items scan without reading every paragraph.
- Dense regions have bounded scroll or a deliberate mobile replacement.
- Library-default component anatomy is visibly owned by the product.

## Source anchors

- Material Design state layers document hover, focus, pressed, dragged, selected, and disabled state treatment for interactive components: https://m3.material.io/foundations/interaction/states/state-layers
- Atlassian elevation guidance warns that raised elevations can create visual noise and should not group content when border or whitespace is enough: https://atlassian.design/foundations/elevation/
- Atlassian spacing guidance frames spacing as a tokenized system for consistency, density, and responsive quality: https://atlassian.design/foundations/spacing/
- Fluent 2 layout guidance uses space to show relationships between components, highlight importance, and support responsive rearrangement: https://fluent2.microsoft.design/layout
- W3C WCAG focus appearance explains visible focus requirements for keyboard users: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- W3C WCAG target size minimum defines minimum target considerations for pointer interactions: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

## Hard fails

- Page sections are nested inside decorative cards.
- Focus, hover, selected, and disabled states are indistinguishable.
- Component padding/radius/shadow are identical everywhere regardless of role.
- Icon-only controls lack accessible names or recognizable symbols.
- Dense repeated data is converted into pretty cards that slow comparison.
- Mobile shrinks controls below usable target size or hides primary actions.
- A product-library component is shipped with starter/demo anatomy.
