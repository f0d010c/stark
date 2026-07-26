# Token implementation contract

Use this after `visual-token-recipes.md` and `theme-mode-density-system.md`, and before serious code generation, when Stark will implement CSS, Tailwind, design-system primitives, product libraries, charts, or mode/density themes.

Good tokens are not a color list. They are the contract that keeps visual direction, accessibility, components, product-library overrides, and future edits from drifting apart.

## Required output

```md
Token implementation contract
- Token source:
- Primitive tokens:
- Semantic tokens:
- Component tokens:
- State tokens:
- Mode/density aliases:
- CSS custom property map:
- Tailwind/theme map:
- Product-library override map:
- Chart/media token map:
- Contrast/non-text contrast checks:
- Drift/dead-token checks:
- QA evidence:
```

## Token layers

| Layer | Owns | Example |
|---|---|---|
| primitive | raw values that may be exported or transformed | `color.ink.900`, `space.3`, `radius.2` |
| semantic | product meaning consumed by layout and primitives | `bg.base`, `surface.default`, `text.primary`, `state.danger` |
| component | reusable UI anatomy and variants | `button.primary.bg`, `table.row.selected`, `dialog.scrim` |
| state | hover, focus, selected, invalid, busy, disabled, destructive | `focus.ring`, `field.invalid.border`, `row.hover.bg` |
| mode/density | overrides for appearance and task speed | `dark.surface.default`, `compact.row.height` |
| chart/media | data, proof objects, screenshots, and generated media frames | `chart.series.1`, `media.frame.border` |

Components should consume semantic, component, or state tokens. Raw primitives can exist, but they should not appear throughout feature files.

## Implementation targets

### CSS custom properties

- Put semantic and component tokens on `:root`, `[data-theme]`, `[data-density]`, and relevant theme scopes.
- Use custom properties for values that need runtime theming, media adaptation, or product-library overrides.
- Keep raw primitives private when possible; public variables should describe meaning.
- Use fallback values deliberately, not as a way to hide missing tokens.

### Tailwind theme variables

- Map Stark tokens into Tailwind theme namespaces only when they should produce utilities.
- Keep semantic aliases readable in code, such as `bg-surface-default` or `text-text-secondary` only if the local Tailwind setup supports that naming cleanly.
- Do not scatter arbitrary hex values in utility strings when the same role appears more than once.
- Keep density, radius, shadow, and motion tokens as visible as color tokens.

### DTCG / Style Dictionary export

- Use DTCG-style `$value`, `$type`, aliases, and groups when tokens need to move between design tools and code.
- Use transform tooling such as Style Dictionary when the project needs CSS, JS, native, or documentation outputs from the same source.
- Keep alias chains understandable: primitive to semantic to component, not component back to primitive by accident.
- Include token descriptions where the name alone will not prevent misuse.

### Product-library overrides

When using Radix, React Aria, shadcn/ui, TanStack, React Hook Form, Zod, Floating UI, cmdk, Embla, chart libraries, or similar tools:

- Name which tokens replace library defaults for focus, selected, invalid, destructive, disabled, hover, active, density, radius, border, and shadow.
- Style library states through data attributes, render props, slot classes, or local primitives instead of copying docs theme defaults.
- Verify dark/high-contrast/forced-colors behavior for library parts, not only custom components.
- Remove token names that mirror the library's starter theme but do not express the product.

## Naming rules

- Prefer semantic names for consumed tokens: `surface.inspector`, `row.selected`, `action.primary`.
- Allow visual primitive names only at the primitive layer: `orange.600`, `neutral.950`.
- Avoid vague tokens like `primary`, `secondary`, `card`, `muted`, and `accent` unless their scope is clear.
- Do not let brand names replace state meaning. `brand.red` is not `state.danger`.
- Token names should survive a palette change without lying.

## Hard fails

- Raw hex, rgb, hsl, or oklch values are repeated through component files.
- Components use raw primitives where semantic/component tokens should exist.
- Light mode is tokenized but dark/high-contrast/forced-colors states are ad hoc.
- Focus, selected, invalid, warning, danger, success, disabled, and busy states share ambiguous colors or shadows.
- Product-library defaults are visible because tokens only cover page background and buttons.
- Chart series colors have no accessible summary or non-color encoding when meaning matters.
- Density changes only padding, while row height, control size, typography, and hit targets drift.
- Token names are visual-only in places where product meaning is needed.
- Dead tokens remain after a visual-direction change and keep old palettes alive.

## QA checks

- Search source for repeated raw color values and one-off shadows/radii outside token files.
- Inspect light, dark, high contrast, forced-colors, compact, and comfortable density where supported.
- Verify text contrast and non-text contrast for real foreground/background pairs, including borders, icons, focus rings, chart marks, and selected rows.
- Run the component state gallery through token modes and density variants.
- Compare product-library components against their docs defaults and reject recognizable starter styling.
- Verify token changes do not break first paint, SSR/hydration, persisted theme, or user preference handling.
- Check for unused/dead tokens after major visual repairs.

## Source anchors

- W3C Design Tokens Community Group Format Module defines an interoperable token data format: https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/
- Style Dictionary documents design tokens and transforms for generated platform outputs: https://styledictionary.com/info/tokens/
- Tailwind CSS theme variables are CSS variables that map to utility namespaces: https://tailwindcss.com/docs/theme
- MDN documents CSS custom properties and `var()` for reusable CSS values: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- WCAG Understanding docs cover text contrast and non-text contrast for controls and meaningful graphics: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html and https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
