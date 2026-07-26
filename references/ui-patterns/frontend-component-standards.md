# Frontend component standards

Use this before implementing complex web apps, dashboards, editors, docs platforms, agent run UIs, and stateful landing pages.

The goal is to make generated frontends feel like maintainable product work, not a single decorative mockup.

Before choosing third-party product libraries, read `frontend-technique-matrix.md`. Component architecture should name which behavior belongs to native browser primitives such as Grid/subgrid, container queries, custom properties, scroll-driven CSS, View Transitions, Popover/anchor positioning, responsive media, and performance containment.

For app shells, multi-route products, docs platforms, dashboards, settings, workspaces, or route/detail continuity, read `navigation-information-architecture.md` before this file. Component architecture should preserve the route map, navigation model, current-location model, search/command model, route states, mobile replacement, and focus/scroll restoration.

When choosing third-party product libraries, also read `product-library-playbooks.md` and `product-library-composition.md`. Component architecture should name which library owns primitives, tables, forms, data fetching, validation, overlays, command palettes, or carousels, then map that ownership to product anatomy, tokens, states, and QA.

When visible controls or workflow actions appear in a generated UI, read `interactive-prototype-contract.md` before implementation so component ownership includes working controls, state transitions, intentionally static controls, and interaction QA probes.

## Component architecture brief

```md
Component architecture
- App shell:
- Navigation/IA:
- Feature modules:
- Reusable primitives:
- Native/browser primitives:
- Data/state owner:
- Required states:
- Keyboard/focus model:
- Responsive containment:
- Test/QA hooks:
- Avoid:
```

## Ownership rules

- App shell owns navigation, global layout, route slots, theme, and global shortcuts.
- Navigation/IA owns route hierarchy, current-location cues, search/command scope, deep-link state, route states, mobile replacement, and focus/scroll restoration.
- Feature modules own product-specific behavior, state, fixtures, and empty/error/permission states.
- UI primitives own reusable buttons, fields, dialogs, tabs, tables, cards, menus, and badges.
- Data helpers own realistic fixtures, transforms, filtering, sorting, and mock APIs.
- Animation helpers own reusable transitions and reduced-motion behavior.
- Asset helpers own generated/code-rendered media, icon choices, and attribution.

If a component has more than two jobs, split it.

## State model rules

For each complex surface, define:

- source of truth
- selected item
- filters/sort/search
- loading/empty/error/permission/success
- optimistic or long-running state
- undo/retry/recover action

Do not scatter state across unrelated presentational components.

## Required state patterns

### Command palette

- `query`
- `activeIndex`
- `results`
- `loading`
- `empty`
- `permissionBlocked`
- `execute(command)`

### Run timeline

- `steps`
- `activeStepId`
- `events`
- `artifacts`
- `status`
- `blockedReason`
- `stop/retry/resume`

### Inspector

- `selectedId`
- `selectedObject`
- `dirty`
- `validation`
- `history`
- `applyChange`
- `reset/revert`

### Data panel

- `query/filter`
- `dataset`
- `viewMode`
- `selectedPoint`
- `summary`
- `loading/empty/error/stale`

### Checkout/trust flow

- `selectedPlan`
- `priceSummary`
- `paymentState`
- `validation`
- `permission/risk`
- `success/error/recovery`

## Keyboard and focus

- Every interactive workflow needs visible focus.
- Dialogs, sheets, and palettes trap focus and return it to the trigger.
- Lists and palettes support arrow navigation when expected.
- Escape closes transient UI.
- Destructive actions need confirmation or clear undo.
- Hover-only behavior needs tap/keyboard alternative.

## Responsive containment

- Tables scroll inside their own region or become priority-column lists.
- Inspectors become drawers/sheets below tablet width.
- Toolbars wrap or collapse into menus.
- Code blocks scroll inside their own container.
- Hero/media objects have max widths and aspect ratios.
- Canvas/editor areas preserve controls and selected state.

## Styling standards

- Use design tokens or CSS variables for color, type, spacing, radius, border, shadow, and motion.
- Do not hardcode one-off values everywhere.
- Do not use identical card styling for every surface.
- Text sizes must match container density.
- Buttons, inputs, tabs, menus, and tables need hover/focus/active/disabled states.

## Motion standards

- Put motion variants/helpers near the feature that owns the transition.
- Respect reduced motion.
- Avoid animating table layout, prices, legal copy, warnings, and dense logs.
- Use route/detail continuity only when it preserves orientation.
- Clean up timelines and observers.

## Test and QA hooks

Use stable hooks where useful:

- `data-testid` for critical interactions in app code when local conventions allow it.
- semantic roles and labels first.
- realistic fixture data with non-happy states.
- one visual QA target per major surface.

## Anti-patterns

- One giant `App` component for a dashboard/editor/app.
- Feature logic hidden inside visual card components.
- Happy-path-only fixtures.
- Static fake controls that appear interactive.
- Duplicated button/card classes instead of primitives.
- Inline style soup for complex layouts.
- Motion code mixed through every component with no ownership.
- No mobile replacement for dense regions.

## Delivery gate

Before final answer on complex frontend work, verify:

- app shell and feature modules are separated or intentionally simple
- required states exist
- primary controls are semantic and focusable
- dense regions are contained
- motion and asset helpers have clear ownership
- advanced native APIs and library fallbacks have QA probes
- product libraries have explicit behavior/styling/state ownership and no visible default theme residue
- QA evidence covers the riskiest surface
