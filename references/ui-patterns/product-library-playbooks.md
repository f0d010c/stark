# Product library playbooks

Use this after `web-implementation-tracks.md`, `stack-blueprints.md`, and `frontend-component-standards.md` when a web app needs interaction/product libraries beyond motion.

After selecting libraries, read `product-library-composition.md` before implementation. It turns the selection into behavior/styling/state ownership, token mapping, anti-default checks, and QA probes so the result does not look like pasted library examples.

For charts, analytics, maps, timelines, metric panels, or data proof, read `data-visualization-library-selection.md` before this file's chart row. Chart libraries should be chosen by user question, dataset shape, interaction, accessible summary, responsive replacement, and QA, not by whichever demo looks best.

The goal is not to install a popular stack. The goal is to assign product behavior to the smallest reliable library set while preserving accessibility, ownership, visual originality, and QA.

When the product category is clear, read `product-intent-matrix.md` first. It gives intent-specific defaults for which libraries are likely to own real behavior and which ones should be rejected.

## Library brief

```md
Product library brief
- Surface:
- Required behaviors:
- Libraries used:
- Libraries rejected:
- Ownership:
- Styling/originality plan:
- Accessibility contract:
- State/data contract:
- QA:
```

## Decision matrix

| Need | Strong fit | Use when | Avoid when |
|---|---|---|---|
| Accessible primitives | Radix UI or React Aria | dialogs, menus, popovers, tabs, select, combobox, tooltips, overlays | static marketing sections, simple native elements are enough |
| Styled React primitives | shadcn/ui | fast product prototypes with owned component code and Tailwind styling | default theme would make the UI look like every AI dashboard |
| Complex tables/data grids | TanStack Table | sorting, filtering, column visibility, selection, pagination, virtualized/dense tables | tiny static tables, pricing comparison, simple lists |
| Server/async state | TanStack Query | fetching, cache, stale/retry/loading/error, mutations | local UI state, selected tabs, modal open state |
| Forms | React Hook Form | multi-field forms, validation, dirty/submitting state, dynamic fields | one tiny email input or plain static contact form |
| Runtime schemas | Zod | validating form/API/AI/tool boundaries, deriving types | pure display-only UI with no data boundary |
| Floating positioning | Floating UI | custom tooltip/popover/menu/combobox positioning and collision handling | Radix/React Aria already owns the overlay |
| Command menu | cmdk or Radix/React Aria combobox pattern | command palettes, searchable actions, docs/app navigation | marketing nav, small action sets |
| Carousel/slider | Embla | galleries, proof walls, mobile swipers, media rails | core content that needs linear reading or table comparison |
| Charts/data viz | native SVG/Chart.js/Recharts/ECharts/D3/visx/Vega-Lite/Observable Plot | chart is the product object and the user question is named | decorative metrics; read `data-visualization-library-selection.md` first |
| Motion/state continuity | Motion/GSAP/View Transitions | layout/route/timeline motion | see `motion-library-playbooks.md` |

## Ownership rules

- UI primitives own behavior and accessibility, not the product's visual identity.
- Feature modules own product state, API calls, validation schemas, and recovery paths.
- Styling/tokens own the visual system. Do not leave library default tokens unchanged for public demos.
- Table/form/query libraries own mechanics; Stark still owns hierarchy, state coverage, responsive containment, copy, and QA.
- Do not let two libraries own the same behavior. Example: Radix Popover plus Floating UI for the same popover is usually redundant.

## Library recipes

### Radix UI primitives

Use for accessible low-level primitives when the design needs custom visuals but reliable behavior.

Best for:

- Dialog, AlertDialog, DropdownMenu, Popover, Tooltip, Tabs, Select, Checkbox, Switch, Slider.
- Product apps where custom styling matters.
- Teams that want to build their own design system on primitive parts.

Rules:

- Provide labels, descriptions, and real content.
- Preserve focus handling and keyboard behavior.
- Theme parts through tokens; do not accept default-looking primitive demos.
- Use native HTML controls when a primitive adds no behavior.

### React Aria

Use when accessibility, internationalization, complex interaction behavior, or custom rendering need stronger coverage.

Best for:

- Comboboxes, listboxes, date fields, grids, menus, overlays, and design systems needing i18n-aware behavior.
- Teams comfortable composing unstyled hooks/components.

Rules:

- Keep DOM semantics from the returned props.
- Test keyboard and screen-reader names because styling is fully yours.
- Prefer React Aria when you need lower-level control than a styled component kit.

### shadcn/ui

Use for fast React product UI when the project already uses Tailwind and wants owned component source.

Best for:

- Internal tools, dashboards, docs platforms, settings, command palettes, forms.
- Shipping a coherent starting component set quickly.

Rules:

- Treat generated components as source code to customize.
- Replace default radius, border, card, muted text, and neutral theme when the product needs identity.
- Add only needed components.
- Preserve accessible labels and states.
- Do not build a public demo from untouched shadcn cards, tables, and tabs.

### TanStack Table

Use when table behavior is real product behavior.

Best for:

- Sorting, filtering, grouping, column visibility, row selection, pagination, expandable rows, dense operational data.
- Dashboards, CRMs, audit logs, queues, analytics control planes.

Rules:

- Define the table question first: what decision does the table help the user make?
- Columns need stable width, alignment, units, empty values, and mobile behavior.
- Include loading, empty, error, stale, selected, bulk-action, and permission states where relevant.
- Use bounded horizontal scroll or a priority-column mobile replacement.
- Do not use TanStack Table for static pricing matrices or three-row feature tables.

### TanStack Query

Use for server/async state, not local UI state.

Best for:

- Fetching, caching, stale data, background refresh, mutation states, retry, optimistic updates.
- Apps where loading/error/stale/retry states need consistency.

Rules:

- Keep selected rows, open dialogs, tabs, and local form state outside Query unless they are server state.
- Show loading, error, stale, retry, and mutation-pending states in the UI.
- Name cache/query keys and invalidation behavior in the architecture brief.
- Do not hide stale or failed data behind generic spinners.

### React Hook Form + Zod

Use for serious forms with validation, dirty/submitting state, dynamic fields, or data-bound inputs.

Before selecting React Hook Form, Zod, native validation, server actions, or Query mutations for forms, read `form-state-validation-system.md`. It defines the form job, field anatomy, validation timing, preservation, recovery, review step, async/server behavior, and QA.

Best for:

- Checkout, signup, settings, onboarding, permission forms, multi-step setup, admin forms.

Rules:

- Zod owns boundary schemas; React Hook Form owns form state and validation lifecycle.
- Show errors near fields, preserve input after failures, and avoid noisy validation while typing.
- Include disabled/submitting/dirty/success/error states.
- Keep schema messages human-readable; technical details can go in expandable debug/copy areas.
- Use plain HTML forms for tiny static forms where RHF/Zod adds no meaningful behavior.

### Floating UI

Use when you are building a custom anchored overlay and need positioning/collision logic.

Best for:

- Custom tooltips, inspectors, teaching bubbles, context menus, floating toolbars, anchored popovers.

Rules:

- Define dismissal, focus, escape key, outside press, role, and collision behavior.
- Use with custom primitives only when Radix/React Aria does not already cover the overlay.
- Test scroll containers, viewport edges, mobile, zoom, and keyboard focus.

### cmdk

Use for command palettes when the command model is the product behavior.

Best for:

- Devtools, docs navigation, admin shortcuts, AI agent actions, editor commands.

Rules:

- Commands need names, groups, disabled reasons, keyboard shortcuts, empty/loading states, and permission blocks.
- Palette state should include query, active index, results, execution, and error/recovery.
- Do not add command palettes to simple marketing pages.

### Embla

Use for galleries or proof rails where swipe/drag quality matters.

Best for:

- Product screenshots, testimonials, proof walls, mobile media rails, before/after sets.

Rules:

- Provide visible previous/next, pagination, keyboard, and non-carousel fallback when content is essential.
- Avoid autoplay unless pausable and non-essential.
- Do not put critical pricing/legal/form content only in a carousel.

## Anti-stacks

- shadcn default theme + generic dashboard copy + no product-specific components.
- Radix plus React Aria for the same primitive without a reason.
- TanStack Query for local tab/modal state.
- TanStack Table for a static pricing comparison.
- Floating UI layered on top of Radix Popover just to change placement.
- React Hook Form/Zod for a one-field newsletter form.
- Embla for content that should be a table, list, or readable article.
- Installing a component kit because the design lacks a concept.

## QA probes

- Keyboard: dialog/menu/palette/table/form flow works.
- Focus: open/close returns focus to trigger; visible focus rings remain.
- Labels: controls have accessible names and descriptions.
- States: loading, empty, error, stale, permission, disabled, dirty, submitting, success where relevant.
- Responsive: tables, popovers, command menus, forms, and carousels fit mobile.
- Data: server state and local state are not confused.
- Styling: defaults are customized enough to match the product direction.
- Dependency restraint: every installed library owns a named behavior.
- Composition: selected libraries have one behavior owner, one styling owner, visible non-happy states, and no untouched demo/theme defaults.

## Source anchors

- Radix Primitives describe themselves as low-level accessible components for design systems and apps: https://www.radix-ui.com/primitives/docs
- React Aria provides unstyled components/hooks with accessibility, internationalization, interactions, and behavior built in: https://react-spectrum.adobe.com/react-aria/getting-started.html
- TanStack Table is a headless table/datagrid library: https://tanstack.com/table/latest/docs/overview
- TanStack Query is for asynchronous/server state and data fetching: https://tanstack.com/query/latest/docs/framework/react/overview
- Floating UI provides positioning and interaction primitives for anchored floating elements: https://floating-ui.com/docs/getting-started
- React Hook Form positions itself as performant, flexible, extensible form validation for React: https://www.react-hook-form.com/
- Zod is TypeScript-first schema validation with static type inference: https://zod.dev/
- Embla Carousel is lightweight, dependency-free, and framework-agnostic: https://www.embla-carousel.com/docs
