# Motion recipe - command palette motion

- Product job: make command search feel immediate, searchable, and recoverable.
- Library/API: CSS or Motion for React.
- Trigger: keyboard shortcut, button, typing, result selection.
- State owner: palette open state, query, active index, result list.
- Accessibility: focus trap, escape close, arrow navigation, active descendant or roving focus, return focus to trigger.
- Performance traps: animating every result on every keystroke, delayed open, low-contrast shortcuts.
- When to remove: if the palette is decorative and not a real navigation/action surface.

Choreography:

1. Backdrop appears in 80-120ms.
2. Palette scales/fades from trigger or center in 120-180ms.
3. Results update without large motion; active row moves with subtle highlight.
4. Execute action gives fast confirmation or route/detail transition.

QA:

- opens by keyboard
- focus lands in input
- no results and loading states exist
- escape returns focus
- mobile becomes full-screen sheet
