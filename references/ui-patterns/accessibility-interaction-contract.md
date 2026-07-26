# Accessibility interaction contract

Use this before implementation when a UI contains dialogs, menus, tabs, comboboxes, command palettes, forms, data grids, carousels, status messages, long-running work, or custom controls.

This is not a generic accessibility checklist. It is the behavior contract that makes an interface usable by keyboard, screen reader, switch, touch, and reduced-motion users.

## Required output

```md
Accessibility interaction contract
- Surface:
- Interactive patterns:
- Native elements used:
- Custom ARIA patterns:
- Keyboard model:
- Focus model:
- Status/live-region model:
- Reduced-motion model:
- Touch/target model:
- Labels/descriptions:
- Hidden/inert content:
- QA probes:
- Rejected patterns:
```

## Native-first rule

Prefer native HTML when it owns the behavior:

- `button` for actions.
- `a` for navigation.
- `input`, `select`, `textarea`, `fieldset`, `legend`, and `label` for forms.
- `details`/`summary` for simple disclosure.
- semantic headings, lists, tables, and landmarks before ARIA roles.

Only use ARIA/custom patterns when native behavior cannot provide the needed interaction. ARIA changes how assistive tech perceives the UI; it does not add keyboard behavior, focus management, validation, or disabled prevention by itself.

## Pattern contracts

| Pattern | Must define | QA probe |
|---|---|---|
| Dialog / modal | accessible title, description, initial focus, focus trap, escape/outside behavior, close control, focus return | open, tab through, escape/close, focus returns to trigger |
| Non-modal popover | trigger label, open state, dismissal, outside press, focus policy, collision/mobile fallback | trigger by keyboard, dismiss, no hidden focus |
| Menu button | trigger name, open/closed state, arrow/enter/space behavior, item roles, disabled items, escape return | open menu, arrow items, choose item, escape returns |
| Tabs | tablist, tab labels, selected tab, panel relation, arrow behavior, activation mode, hidden panels | arrow between tabs, activate, focus does not enter hidden panel |
| Combobox / autocomplete | editable or select-only, popup type, input/trigger labels, expanded state, active option, selection behavior, escape/enter | type/search, arrow options, select, escape, no focus loss |
| Command palette | dialog or combobox ownership, shortcut, result groups, active item, disabled reasons, empty/loading/error, execution feedback | open shortcut, type, arrow, execute, escape/focus return |
| Data grid / table | whether native table or interactive grid, row/column headers, roving focus if grid, sort/filter labels, selected state | tab sequence, arrow navigation if grid, sort/select states |
| Carousel / media rail | whether carousel is needed, pause/stop, previous/next, slide labels/status, tab order, autoplay policy | pause, next/previous, focus visible, essential content available elsewhere |
| Form | labels, descriptions, constraints, errors, preserved values, error summary, first-error focus, submitting state | submit invalid, read error, preserve value, recover |
| Toast / alert / status | urgency, visible location, live-region role, timing, dismissal, action availability | trigger update, message is visible, focus is not stolen unless required |
| Long-running progress | current step, elapsed/remaining, stop/retry/resume, artifact/status updates, bounded logs, live-region policy | start, stop/retry, inspect artifact, status is reachable |
| Custom disabled control | native disabled or `aria-disabled`, visible reason, activation prevention, path forward | tab/click/enter cannot activate and reason is visible |

## Keyboard model

Define keyboard behavior before styling:

- `Tab` reaches the next meaningful control and does not visit hidden/inert content.
- `Shift+Tab` works backward through the same path.
- `Enter` and `Space` activate buttons or selected options according to pattern expectations.
- `Escape` closes transient UI such as dialogs, menus, palettes, popovers, and select popups.
- Arrow keys move inside menus, tabs, grids, listboxes, combobox popups, sliders, and carousels only when the pattern requires it.
- Keyboard shortcuts are discoverable, optional, and do not replace visible controls.
- Focus never disappears during animation, async loading, route transition, filtering, or validation.

## Focus model

Name where focus starts, moves, and returns:

- Dialogs and command palettes move focus inside on open and return to the trigger on close.
- Destructive dialogs usually start focus on the safest action unless platform convention or user flow proves otherwise.
- Error summaries receive focus only when they help recovery; field-level errors remain near fields.
- Loading, skeleton, and media placeholders do not trap focus.
- Hidden panels, offscreen carousel slides, inert layers, and collapsed menus are not reachable.
- Focus indicators must be visible against the actual visual tokens and materials.
- For themed UIs, verify focus against every supported mode and density from `theme-mode-density-system.md`, including dark, high contrast, and forced colors when supported.

## Status and live-region model

Use live regions for dynamic updates users need without moving focus:

- `status` / polite updates for background success, stale data, refresh, count changes, search results, saved state.
- `alert` / assertive updates for urgent validation, destructive failure, security/permission errors, or time-sensitive interruption.
- `log`-style behavior only for bounded, reviewable streams such as agent/tool events.
- Do not announce every animation frame, decorative counter, hover reveal, or cosmetic transition.
- Keep the visible message and announced message consistent.

## Motion and reduced motion

Motion is accessible only when:

- important content is available without motion
- focus does not chase moving elements
- animation does not hide or delay the primary action
- long autoplaying motion has pause/stop/hide when required
- reduced motion swaps choreography for static frames, fades, or stacked content
- no rapid flashing or unsafe color transitions are used

## Touch and target model

- Frequent or risky controls need comfortable targets and spacing.
- Icon-only controls need accessible names and tooltips/labels where the icon is not universally clear.
- Hover-only affordances need tap and keyboard equivalents.
- Drag gestures need alternative controls when they change essential state.
- Mobile replacements must preserve the same task, not only shrink desktop controls.

## Pattern selection rules

- Use a native table for static comparison. Use an interactive grid only when arrow navigation and compact tab order genuinely improve use.
- Use a select/native control for simple option choice. Use combobox only for search, filtering, or rich option behavior.
- Use tabs when panels are peer views. Use disclosure/accordion when content is progressive or independent.
- Use a dialog when the user must complete or dismiss a contained task. Use popover/sheet when context can remain usable.
- Use a carousel only when swiping/rail behavior helps browse; never hide essential legal, pricing, or recovery information only inside slides.

## QA probes

Minimum probe set:

- Keyboard path: tab, shift-tab, enter/space, escape.
- Focus visibility: focus ring is visible on real background/material.
- Names: buttons, links, inputs, icon controls, and media controls have accessible names.
- State relation: selected/expanded/pressed/invalid/disabled/busy states are visible and semantically represented.
- Error recovery: invalid submit preserves values and points to the fix.
- Dynamic status: status/error/progress updates are visible and announced by the chosen live-region model.
- Hidden content: offscreen/hidden/collapsed content is not focusable.
- Reduced motion: information and controls remain available.
- Mobile/touch: target size, tap alternative, no hover-only essential path.

## Hard fails

- Custom control with no keyboard behavior.
- Dialog opens without moving focus inside or closes without a return target.
- Menu, combobox, tabs, grid, or carousel imitates the visual pattern but not the keyboard model.
- Icon-only button has no accessible name.
- Error is color-only, toast-only, or clears user input.
- Disabled custom control still activates.
- Status/progress changes only visually when the user needs the update.
- Hidden panels or offscreen slides remain tabbable.
- Reduced motion removes content or traps the user.

## Source anchors

- WAI-ARIA Authoring Practices Guide patterns: https://www.w3.org/WAI/ARIA/apg/patterns/
- WAI-ARIA APG dialog pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- WAI-ARIA APG combobox pattern: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
- WAI-ARIA APG tabs pattern: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- WAI-ARIA APG grid pattern: https://www.w3.org/WAI/ARIA/apg/patterns/grid/
- WAI WCAG ARIA live-region technique for errors/status: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19
- WCAG 2.2 focus appearance: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- WCAG target size: https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
