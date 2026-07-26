# Theme, mode, and density system

Use this after `material-systems.md` and `visual-token-recipes.md` when a UI needs light/dark mode, brand themes, high contrast, forced colors, compact/comfortable density, or platform appearance adaptation.

Good themes are not alternate palettes. They preserve hierarchy, state meaning, focus visibility, chart readability, media framing, and task speed across real user modes.

## Required theme brief

```md
Theme mode brief
- Supported modes:
- Default mode:
- Token architecture:
- Surface parity:
- Semantic state parity:
- Focus/selection parity:
- Density variants:
- Brand/theming boundary:
- Media/chart adaptation:
- Platform/browser hooks:
- Persistence and first paint:
- QA checks:
```

## Mode scope

Choose modes deliberately:

| Mode | Use when | Must prove |
|---|---|---|
| light | most public sites, docs, forms, checkout, productivity | readable body text, subtle surfaces still visible |
| dark | devtools, media, editors, dashboards, user preference support | contrast without glowing every edge, muted text still readable |
| high contrast | serious product UI, accessibility-sensitive flows, admin/trust | controls, borders, focus, states, and charts remain distinguishable |
| forced colors | web apps with custom UI, enterprise/admin, public surfaces | system colors preserve semantics and focus without custom assumptions |
| compact density | dashboards, CRM, devtools, ops, editor chrome | scan speed without clipped text or tiny targets |
| comfortable density | onboarding, mobile, forms, checkout, consumer | target sizes and recovery text remain visible |
| brand theme | products with multiple brands/workspaces/customers | brand colors do not override danger, warning, focus, or disabled states |

Do not promise every mode if the build cannot QA it. Fewer verified modes are better than many broken modes.

## Token architecture

Use layers:

1. Raw tokens: color values, spacing steps, radii, shadows.
2. Semantic tokens: `bg/base`, `surface/default`, `text/primary`, `state/danger`, `focus/ring`.
3. Component tokens: `button/primary/bg`, `table/row/selected`, `chart/series/1`.
4. Mode overrides: light, dark, high-contrast, forced-colors, compact.

Rules:

- Components consume semantic/component tokens, not raw colors.
- Dark mode is not an inverted light palette.
- Brand accent cannot replace semantic danger, warning, success, focus, or disabled roles.
- Every semantic state used in light mode needs a corresponding dark/high-contrast behavior.
- Density tokens must affect spacing, row height, control size, and type scale only where safe.

## CSS hooks

Use the platform before custom script:

```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* dark semantic token values */
  }
}

[data-theme="dark"] {
  /* user-selected dark semantic token values */
}

[data-density="compact"] {
  /* compact spacing and row/control tokens */
}

@media (forced-colors: active) {
  :root {
    --focus-ring: Highlight;
    --border-strong: CanvasText;
  }
}
```

Use `<meta name="color-scheme" content="light dark">` when the app supports both modes so browser chrome and form controls can initialize correctly.

## Surface parity checks

For each mode, verify:

- background, raised surface, default surface, selected surface, and modal/sheet surface are distinct.
- primary, secondary, muted, disabled, link, and inverse text remain legible.
- focus, hover, selected, active, invalid, destructive, warning, success, and loading states are visibly different.
- borders/rules are visible enough to preserve grouping.
- charts, screenshots, videos, and generated assets are not framed by the wrong mode.
- skeletons and shimmer effects do not become low-contrast noise.

## Density system

Density should match user mode, not style taste.

| Density | Use for | Typical tokens |
|---|---|---|
| compact | daily dashboards, tables, editors, devtools | 4/8 spacing, 32-40px rows, compact toolbar, small labels with strong contrast |
| standard | product apps, docs platforms, forms | 8px spacing, 40-48px rows, balanced controls |
| comfortable | onboarding, mobile-first flows, checkout, consumer | 8/12 spacing, 44-56px controls, more recovery text |
| editorial | campaign/product pages | variable section rhythm; do not apply table density rules |

Compact density still needs:

- readable line height
- visible focus
- target sizes that fit the input model
- no clipped labels, chips, badges, or table cells
- mobile replacement instead of shrinking desktop density forever

## Brand theme boundaries

Allow brand themes to change:

- accent/primary
- accent/secondary
- decorative motif
- key art lighting or material tint
- non-critical chart series colors if accessible

Do not allow brand themes to break:

- danger/warning/success meaning
- focus rings
- disabled state
- text contrast
- payment, permission, health, or security status
- chart color differentiation

If the product supports customer/workspace themes, add a preview or QA route that shows semantic states in the selected brand theme.

## Media and chart adaptation

- Product screenshots may need separate light and dark captures; do not tint a screenshot until it becomes fake.
- Video/key art needs poster frames for each dominant mode if the surrounding page changes drastically.
- Charts need mode-specific gridline, axis, label, series, focus, and tooltip tokens.
- Maps, heatmaps, and status charts need non-color encoding in high contrast and forced colors.
- Generated bitmap art should not contain critical UI text or states that cannot adapt by mode.

## QA checks

- First paint does not flash the wrong theme when user preference or saved theme exists.
- Browser form controls, scrollbars, and built-in UI respect the declared color scheme.
- Keyboard focus is visible in light, dark, high-contrast, and forced-colors modes.
- Text and non-text contrast pass for actual foreground/background pairs.
- Semantic states remain distinguishable without color alone.
- Compact density keeps labels readable and controls operable.
- Mobile uses the right density replacement, not only smaller desktop controls.
- Brand themes cannot recolor destructive, warning, focus, disabled, or permission states into ambiguity.
- Charts/media have mode-aware frames or fallbacks.

## Source anchors

- MDN `prefers-color-scheme` documents detecting a user's light or dark color preference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme
- MDN `color-scheme` documents declaring supported color schemes so browsers can render built-in UI appropriately: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
- MDN `forced-colors` documents detecting forced colors mode and using system colors carefully: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors
- W3C WCAG 2.2 includes contrast minimum and non-text contrast requirements for text, controls, and meaningful graphics: https://www.w3.org/TR/WCAG22/
