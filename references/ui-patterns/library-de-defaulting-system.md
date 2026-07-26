# Library de-defaulting system

Use this after `product-library-playbooks.md` and `product-library-composition.md` when a web implementation uses recognizable product libraries such as shadcn/ui, Radix, React Aria, TanStack Table, TanStack Query, React Hook Form, Zod, Floating UI, cmdk, Embla, or chart libraries.

The goal is to keep the behavior value of libraries while removing the demo-site visual smell.

Source anchors:

- Radix documents primitives as unstyled and state-addressable through attributes such as `data-state`.
- React Aria exposes styling hooks/data attributes for interaction and selection states while preserving accessible behavior.
- shadcn/ui uses project-owned component source and CSS variables/tokens, so default identity must be replaced in the local codebase.
- TanStack Table leaves rendering and sizing/visibility UI to the implementer, so table design must come from product decisions, not examples.

## Use when

- A generated UI uses shadcn/ui, Radix, React Aria, TanStack, RHF/Zod, Floating UI, cmdk, Embla, Recharts, Chart.js, ECharts, D3/visx, or similar libraries.
- A page/app looks like a component docs page, starter kit, template, admin dashboard, or shadcn clone.
- The design relies on default cards, muted text, rounded boxes, neutral borders, default table density, generic empty states, or untouched chart colors.
- Public demos, launch pages, product screenshots, or portfolio work need higher craft.

## Output contract

```md
Library de-defaulting
- Libraries/components affected:
- Default fingerprints found:
- Product-specific replacement:
- Token changes:
- Anatomy changes:
- State/style changes:
- Copy/data changes:
- Responsive changes:
- Removed components:
- Docs-example comparison:
- QA checks:
```

## Default fingerprints

Actively search for these:

- shadcn neutral `card + muted text + rounded-xl/2xl + border + grid` repeated across the page.
- Default button variants with unchanged radius, color, shadow, and hover.
- Radix primitives styled like docs examples instead of local product primitives.
- Tabs, dialogs, dropdowns, popovers, and tooltips with generic spacing and copy.
- TanStack tables with every demo feature enabled but no named user decision.
- RHF/Zod forms with errors far from fields, generic messages, or no server/recovery state.
- cmdk palette with generic groups such as "Suggestions" and no disabled/permission states.
- Embla carousel used for essential information without controls/fallback.
- Chart colors copied from starter palettes with no semantic mapping.
- Empty/loading/error states that say "No results" / "Something went wrong" without recovery.

## De-defaulting pipeline

1. **Name the product object** the component should expose: run, artifact, account, clip, branch, table row, permission, quote, event, payment, model output.
2. **Identify the library part**: trigger, viewport, row, cell, field, label, overlay, chart mark, command item, carousel slide, mutation state.
3. **Replace the visual token layer**: type, radius, border, surface, elevation, accent, focus, selection, invalid, destructive, warning, success, density, chart palette.
4. **Rewrite component anatomy** around the product object: title, metadata, state, action, evidence, recovery, owner, timestamp, scope, or cost.
5. **Style state attributes intentionally**: open, closed, selected, highlighted, checked, invalid, disabled, loading, stale, dirty, submitting, failed, succeeded.
6. **Replace generic copy and fixtures** with domain-specific actions, records, units, dates, owners, risks, and recovery paths.
7. **Add responsive replacements** for dense tables, palettes, drawers, carousels, charts, and inspector panes.
8. **Compare against docs/starter examples** and name what changed.

## Token replacement minimum

Before final polish, define replacements for:

- `surface/default`, `surface/raised`, `surface/overlay`, `surface/selected`
- `text/primary`, `text/secondary`, `text/muted`, `text/danger`
- `accent/action`, `accent/selected`, `accent/subtle`
- `state/success`, `state/warning`, `state/danger`, `state/info`
- `focus/ring`, `border/default`, `border/strong`, `shadow/elevation`
- `radius/control`, `radius/panel`, `radius/media`
- `density/compact`, `density/comfortable`
- `motion/feedback`, `motion/overlay`, `motion/layout`
- chart categorical/sequential/diverging tokens when charts are present

Hard fail if only `primary` color changes while radius, density, surfaces, focus, states, and chart colors remain starter defaults.

## Component-specific moves

### shadcn/ui

- Treat installed components as editable source.
- Replace default Card anatomy with product-specific panel, workbench, proof frame, inspector, queue row, command deck, or trust matrix.
- Replace default `muted` usage with a hierarchy rule: secondary, metadata, disabled, helper, caption, timestamp, legal.
- Create variants for the product surface instead of stacking generic `Card`, `Button`, `Badge`, `Table`, and `Tabs`.
- Audit `components.json`, global CSS variables, component classes, and repeated utility classes for starter-theme residue.

### Radix

- Style `data-state`, `data-disabled`, `data-highlighted`, `data-side`, and similar attributes through local tokens.
- Define overlay anatomy before styling: title, description, body, state, primary action, cancel/escape, recovery, focus return.
- Use animation only for orientation and feedback; do not let every dropdown/dialog share the same generic fade/slide.

### React Aria

- Preserve behavior props and accessible names while customizing rendering.
- Style interaction states from render props or data attributes: hovered, pressed, focused, focus-visible, selected, disabled, invalid, open.
- Use React Aria when custom rendering or i18n/accessibility is the reason, not as a decorative component kit.

### TanStack Table

- Start with the table question and column priority, not with demo columns.
- Define column sizing, visibility, row selection, sorting, filtering, grouping, pagination/virtualization, empty/error/stale states, and mobile replacement only when they support the decision.
- Style selected/hover/focus/stale/disabled rows with product tokens.
- Avoid tiny text and low-contrast muted cells copied from admin templates.

### TanStack Query

- Make async state visible: initial loading, background refreshing, stale data, retrying, failed fetch, mutation pending, optimistic update, rollback.
- Name query keys and invalidation points in the architecture brief.
- Do not use a spinner as the only server-state UI.

### RHF/Zod

- Keep errors near fields, preserve entered values, and show submit/server recovery.
- Replace generic schema error text with task-specific, human-readable messages.
- Add dirty, submitting, disabled, success, server-error, and review states.

### Floating UI

- Use only when positioning/collision is the product problem.
- Define viewport edge, scroll container, anchor, role, focus, outside press, escape, mobile, and zoom behavior.
- Do not layer it on top of Radix/React Aria for the same ordinary popover.

### cmdk

- Commands need product verbs, scopes, permissions, disabled reasons, empty/loading/error states, and execution feedback.
- Replace default palette visuals with product-specific density, grouping, metadata, shortcut styling, and selected state.

### Embla

- Add visible controls, keyboard support, pagination/status, and non-carousel fallback for essential content.
- Style slide frames as proof objects, not generic image cards.

## Docs-example comparison

Before delivery, answer:

- Which official docs/example would this resemble if viewed quickly?
- Which tokens changed?
- Which anatomy changed?
- Which state visuals changed?
- Which product-specific copy/data replaced placeholders?
- Which default component was removed or rewritten?

If the answer is "it still resembles the docs example," de-default one more layer before shipping.

## QA checks

- No visible starter-theme identity remains in public or high-craft work.
- Library behavior still works after styling changes.
- Focus rings, selected states, invalid states, disabled states, and destructive states are visible in all modes.
- Tables, forms, overlays, palettes, charts, and carousels have non-happy states.
- Responsive behavior replaces dense components instead of shrinking them.
- Component copy uses product verbs and objects.
- Screenshots can name what changed from library defaults.

## Hard fails

- Untouched shadcn cards/tables/buttons form the visual identity.
- Radix/React Aria behavior is used but state styling is invisible.
- TanStack Table appears without a table question, column priority, or mobile replacement.
- Query/server-state UI hides stale/error/retry/mutation states.
- Form libraries show generic validation or lose input after server failure.
- Chart/library colors have no semantic mapping.
- The design would be recognized as a starter template before the product category is recognized.
