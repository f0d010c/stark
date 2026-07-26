# Component state gallery

Use this after `component-anatomy.md`, `component-api-variant-contract.md`, `interaction-state-matrix.md`, `interactive-prototype-contract.md`, and `frontend-component-standards.md` when generated UI includes reusable components, product workflows, stateful controls, forms, tables, command palettes, dashboards, editors, or high-craft public components.

This file turns "state coverage" into a visible production artifact. A good frontend team does not only inspect the happy-path page; it checks isolated component states, long labels, themes, responsive widths, keyboard behavior, and interaction stories before shipping.

## Output contract

```md
Component state gallery
- Surface:
- Components to gallery:
- Story/state list:
- Props/args:
- Fixture variants:
- Interaction stories:
- Visual states:
- Responsive widths:
- Theme/density modes:
- Accessibility probes:
- Visual regression target:
- Hard fails:
```

## When to require it

Require a component state gallery when any of these are true:

- A component has more than one meaningful state.
- The surface includes forms, tables, filters, command/search, dialogs, inspectors, drawers, carousels, tabs, charts, media controls, or long-running work.
- The user asks for high-quality, reusable, production-grade, design-system-like, dashboard, app, or component work.
- A page looks good as one screenshot but could break under empty/error/loading/long-label/mobile/theme states.
- The implementation uses product libraries such as Radix, React Aria, shadcn/ui, TanStack, React Hook Form, Zod, Floating UI, cmdk, or Embla.

## Story/state list

For each important component, define stories or state snapshots.

| Component type | Required states |
|---|---|
| Button/action | default, hover/focus-visible, pressed, disabled with reason, loading, destructive |
| Input/form field | empty, focused, dirty, valid, invalid, async validating, server error, disabled |
| Dialog/sheet/popover | closed, open, keyboard focus, long content, mobile, escape/close path |
| Command palette/search | empty query, results, loading, no results, permission blocked, keyboard selection |
| Table/list | loading, empty, populated, sorted, filtered, selected rows, bulk action, error, mobile replacement |
| Card/proof panel | normal, selected, stale, warning, long title, missing data, narrow width |
| Timeline/run UI | queued, running, waiting, blocked, failed, retrying, cancelled, succeeded |
| Chart/data proof | loading, empty, dense data, filtered, selected point, source/table fallback, mobile |
| Pricing/checkout | selected plan, validation error, processing, failure, success, cancellation/risk copy |
| Media/canvas/3D | poster, loading, ready, failed, reduced motion, mobile crop, nonblank proof |

If a state cannot occur, name why. Do not silently omit it.

## Storybook and test ownership

Use Storybook when the project already has it, the component system is large, or the user asked for reusable components.

- Stories should represent discrete component states, not only marketing examples.
- Args/controls should expose meaningful props such as density, selected state, disabled reason, validation state, variant, size, and mode.
- Interaction stories should use play functions for flows like search, validation, selection, opening dialogs, and retry.
- Visual tests should compare representative stories, not every tiny permutation.

Use lightweight in-app galleries or test routes when Storybook would be too heavy:

- `/dev/states`, `StateGallery`, or static HTML sections are enough for small generated apps.
- Keep the gallery out of public navigation unless the user wants a docs/design-system page.
- Reuse the same fixtures as the real screen so stories do not drift.

## Responsive and content stress

Every state gallery should include at least three stress dimensions:

- Narrow width: 320-390px mobile or a narrow component container.
- Long labels: one translated-length title, CTA, status, or account name.
- Density/theme: compact vs comfortable, light/dark, high contrast, or forced-colors when relevant.

For data-heavy UI, also include:

- zero records
- one record
- many records
- stale/error data
- selected item with missing optional fields

## Visual regression targets

Choose a small set of stable targets:

- One full primary screen.
- One dense component in normal and error/empty state.
- One responsive mobile replacement.
- One theme/density variant if the design supports modes.
- One animation/media poster or reduced-motion frame.

Avoid visual snapshots of highly dynamic timestamps, random data, animated frames, cursor position, or uncontrolled media unless the unstable parts are frozen or masked.

## Accessibility probes

Each gallery should name the probes:

- role/name for primary controls.
- focus order and focus-visible state.
- keyboard path for menus, dialogs, palettes, tabs, carousels, and forms.
- disabled reason or recovery text.
- error announcement/status copy when relevant.
- reduced-motion or pause behavior for moving components.

## QA evidence

Before accepting serious UI:

- List the story/state targets inspected.
- Capture desktop and mobile evidence for at least the riskiest state.
- Run or describe interaction probes for primary controls.
- Re-check one failed state after repair.
- Mark missing gallery evidence as remaining risk.

## Source anchors

- Storybook describes stories as discrete component states and provides docs/controls for exploring component props: https://storybook.js.org/docs/get-started/browse-stories
- Storybook Controls exposes args and argTypes for changing component inputs in the UI: https://storybook.js.org/docs/essentials/controls
- Storybook interaction tests use play functions to verify rendered component behavior: https://storybook.js.org/docs/9/writing-tests/interaction-testing
- Storybook visual tests compare component stories against baselines: https://storybook.js.org/docs/9.0/writing-tests/visual-testing
- Playwright supports screenshot visual comparisons with `toHaveScreenshot()`: https://playwright.dev/docs/test-snapshots
- Testing Library recommends user-facing queries such as role/name to match how users perceive UI: https://testing-library.com/docs/queries/byrole

## Hard fails

- The page has visible controls but no inspected state where they change something.
- A reusable component only has the happy-path/default state.
- Error/loading/empty/disabled states are only described in a brief, not visible in code or rendered evidence.
- Mobile replacement is not represented in any story, fixture, screenshot, or test target.
- Product library components keep default docs-demo states and styling.
- Visual regression targets snapshot only the polished hero and miss forms, tables, errors, or dense states.
