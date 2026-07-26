# Product library composition

Use this after `product-library-playbooks.md` when implementation will use Radix, React Aria, shadcn/ui, TanStack, React Hook Form, Zod, Floating UI, cmdk, Embla, or similar product libraries.

The goal is to make libraries disappear into the product. The output should feel designed from a product truth, not assembled from recognizable demo components.

After this ownership pass, use `library-de-defaulting-system.md` whenever the library UI will be visible in a serious, public, high-craft, or user-critiqued surface. It provides the concrete token, anatomy, state, copy, data, responsive, and docs-example comparison pass that removes starter-kit identity.

## Composition brief

```md
Product library composition brief
- Surface:
- Product job:
- Libraries used:
- Behavior owner:
- Styling owner:
- State/data owner:
- Accessibility contract:
- Token/theme mapping:
- Component anatomy:
- Data/form/overlay model:
- Originality move:
- Rejected defaults:
- QA probes:
```

## Ownership model

| Library class | Library owns | Stark owns | Hard fail |
|---|---|---|---|
| Headless primitives | focus, keyboard, ARIA behavior, state attributes | visual grammar, density, product copy, composition, tokens | primitive demo styling is visible |
| Styled starter components | reusable source code and accessible baseline | token replacement, component variants, layout grammar, state coverage | untouched shadcn neutral cards/tables/buttons |
| Data/table libraries | row model, sort/filter/page/select/virtualize mechanics | table question, column hierarchy, empty/error/stale/mobile replacements | table exists without a user decision to make |
| Server-state libraries | fetch/cache/retry/stale/mutation mechanics | visible data confidence, recovery paths, optimistic copy, invalidation story | stale/error data hidden behind generic spinners |
| Form/schema libraries | registration, validation lifecycle, boundary schemas | field anatomy, helpful messages, recovery, review states | errors appear far from fields or values are lost |
| Overlay/positioning libraries | anchoring, collision, dismissal/focus primitives | why the overlay exists, density, touch/keyboard model, visual state | two libraries fight over one overlay behavior |
| Command/carousel helpers | fast interaction mechanics | command model, proof sequence, accessibility fallback, content priority | palette or carousel is decorative only |

For any selected primitive or helper, pair this file with `accessibility-interaction-contract.md` so the implementation names keyboard behavior, focus movement, live-region/status behavior, hidden/inert content, reduced motion, and touch/target behavior before styling.

When libraries are themed, also pair with `theme-mode-density-system.md`. Default component themes often fail in dark mode, compact density, high contrast, forced colors, selected rows, invalid fields, and focus rings.

When the selected libraries include React Hook Form, Zod, server actions, custom inputs, or schema-bound settings, also pair with `form-state-validation-system.md`. Form quality depends on validation timing, preserved input, submit/server states, review/confirmation, and recovery, not only component styling.

## Composition pipeline

1. Define the product job before installing anything.
2. Pick one library owner per behavior. If Radix owns a popover, Floating UI usually does not.
3. Map library parts to component anatomy: trigger, label, content, state, feedback, recovery, and mobile replacement.
4. Replace default tokens before layout polish: type, radius, border, surface, shadow, focus, destructive, success, warning, density, mode parity, and motion.
5. Add product-specific states: empty, loading, stale, permission, disabled reason, selected, dirty, submitting, failed, succeeded.
6. Verify the real interaction with keyboard, pointer, touch, reduced motion, overflow, focus return, and screen-reader names.

## Library-specific composition rules

### Radix Primitives

- Use for behavior and accessibility. Radix parts should become local product primitives, not imported-looking widgets.
- Style with local classes, tokens, and `data-state`/`data-disabled` hooks.
- Define overlay anatomy: trigger, title, description, body, action, cancellation, focus return, escape/outside behavior, and mobile sheet/fallback.
- Avoid Radix plus React Aria plus Floating UI for the same primitive unless there is a named gap.

### React Aria

- Use when complex interaction, accessibility, internationalization, or custom rendering matters more than fast visual scaffolding.
- Preserve returned props, roles, labels, and keyboard behavior.
- Use render props/data attributes to style hover, pressed, selected, focused, invalid, disabled, and open states.
- QA screen-reader names and keyboard paths because visuals are fully custom.

### shadcn/ui

- Treat components as editable source, not a finished design system.
- Replace the default neutral palette, broad radius, card borders, muted text, table density, empty copy, and chart colors when public quality matters.
- Create product-specific variants before adding more components.
- Keep accessible labels and states when changing markup.

### TanStack Table

- Use only when the table behavior is part of the product job.
- Start with the table question: what should the user compare, decide, rescue, approve, or investigate?
- Define column priority, units, width, alignment, truncation, row action, bulk action, selection state, empty/error/stale state, and mobile replacement.
- Pair dense tables with filters/search that help the decision, not decorative metrics.

### TanStack Query

- Use for server state: cache, stale data, retries, background refresh, mutations, invalidation, and optimistic updates.
- Show loading, refreshing, stale, failed, retrying, and mutation-pending states in the UI.
- Keep local UI state such as active tab, open dialog, and selected inspector panel outside Query unless it is persisted server state.
- Name query keys, invalidation points, and recovery copy in the architecture brief.

### React Hook Form + Zod

- Use for forms with real validation, dynamic fields, review steps, dirty state, submitting state, or server handoff.
- Zod owns boundary schema and messages; RHF owns field lifecycle.
- Place errors near fields, keep entered values after failure, and provide review/success/recovery states.
- Avoid noisy validation while typing unless the task truly benefits from live feedback.

### Floating UI

- Use for custom anchored UI where positioning and collision are the hard part.
- Pair it with a clear interaction model: open/close, escape, outside press, focus, role, pointer intent, scroll containers, viewport edges, and zoom.
- Prefer a higher-level primitive when the product needs a normal dialog/menu/popover and no unusual positioning.

### cmdk

- Use when commands are a product feature, not just an aesthetic search box.
- Define groups, keywords, disabled reasons, permission blocks, empty/loading/error states, execution state, shortcuts, and nested pages if needed.
- Style selected/disabled/loading states clearly and keep list height stable.

### Embla

- Use for galleries, proof rails, before/after sets, testimonials, or mobile media swipers.
- Provide visible previous/next controls, pagination/status, keyboard/touch support, and a non-carousel fallback for essential content.
- Avoid autoplay unless it is pausable and the content is non-essential.

## Anti-default checklist

- Does any component still look like a documentation screenshot?
- Are all product actions written in the product's language instead of "Submit", "Learn more", "Open", or "Details" everywhere?
- Do focus rings, disabled states, errors, selection, loading, and destructive states belong to the chosen visual lane?
- Did the layout change because of the product object, or only because components were stacked?
- Is there one source of truth for overlay, form, table, command, and server state behavior?
- Does mobile replace dense regions with a usable pattern rather than shrinking the desktop UI?

## QA probes

- Keyboard: tab order, arrow navigation, escape, enter/space, command shortcut, focus return.
- Pointer/touch: hover has tap equivalent, drag does not block scroll, targets remain comfortable.
- Accessibility: names/descriptions, roles, invalid/disabled states, dialog/palette labels.
- States: loading, empty, stale, permission, disabled, dirty, submitting, success, failure, recovery.
- Responsive: table/card replacement, overlay collision, command menu height, carousel controls, form spacing.
- Visual originality: compare against library docs and reject visible default theme, radius, copy, and layout.
- Performance: avoid unnecessary client hydration, oversized component imports, re-render-heavy table/form patterns, and unbounded carousel/media work.

## Source anchors

- Radix Primitives styling guide: https://www.radix-ui.com/primitives/docs/guides/styling
- React Aria styling guide: https://react-aria.adobe.com/styling
- shadcn/ui theming guide: https://ui.shadcn.com/docs/theming
- TanStack Table overview: https://tanstack.com/table/latest/docs/overview
- TanStack Query overview: https://tanstack.com/query/latest/docs/framework/react/overview
- React Hook Form: https://www.react-hook-form.com/
- Zod: https://zod.dev/
- Floating UI getting started: https://floating-ui.com/docs/getting-started
- cmdk README/docs: https://cmdk.paco.me/
- Embla Carousel docs: https://www.embla-carousel.com/docs
