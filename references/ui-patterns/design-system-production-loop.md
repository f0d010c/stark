# Design system production loop

Use this when Stark is building or improving a UI that should become more than a one-off screen: reusable React components, product libraries, design-system-like apps, multi-theme products, generated examples that should teach future generations, or work that must align design decisions with code.

This loop connects `component-api-variant-contract.md`, `component-state-gallery.md`, `story-driven-qa-harness.md`, `token-implementation-contract.md`, `product-library-composition.md`, `library-de-defaulting-system.md`, and `frontend-quality-automation-gate.md`.

## Source anchors

- Figma Dev Mode exposes component properties, variables, measurements, ready-for-dev status, version comparison, Storybook/GitHub links, and component playgrounds for variant exploration.
- Figma Code Connect maps production components to Figma components, including dynamic properties, imports, and variant restrictions.
- Storybook docs can turn component stories into design-system documentation with live examples, metadata, and MDX/doc blocks.
- Storybook Controls document component args and allow live property changes for rendered stories.
- The W3C Design Tokens Community Group format specifies a vendor-neutral exchange format for design tokens across tools.

## Required output

```md
Design system production loop
- Product surface:
- System source of truth:
- Token source:
- Component inventory:
- Component-to-code mapping:
- Variant/property model:
- State coverage:
- Story/docs coverage:
- Usage guidance:
- Accessibility contract:
- Theme/mode/density contract:
- Product-library ownership:
- Token/code export:
- Drift checks:
- QA gate:
- Versioning/change note:
- Out-of-system exceptions:
- Ship decision:
```

## Use when

- A generated UI creates components likely to be reused.
- The user asks for real frontend/dev workflow, library maturity, design-system quality, variants, tokens, or handoff.
- A product library such as Radix, React Aria, shadcn/ui, TanStack, React Hook Form, Floating UI, cmdk, or Embla is visible in the output.
- Multiple pages, modes, themes, densities, or platforms must stay coherent.
- README/gallery examples should prove Stark can create maintainable UI, not only screenshots.

## System source of truth

Name the source before implementation:

- Code-first: component source, Storybook/local gallery, token JSON, and tests are primary.
- Design-first: Figma/library file, variables, component properties, and ready-for-dev frames are primary.
- Hybrid: code owns behavior and accessibility; design owns visual language, variants, modes, and usage examples.
- Generated-only: Stark must create a temporary system source: tokens, component inventory, state gallery, and usage rules in the repo.

Do not let design files, screenshots, CSS variables, component props, and stories become separate truths.

## Token loop

Define token layers:

- primitive tokens: raw color, size, duration, font, shadow, radius
- semantic tokens: surface, text, border, accent, danger, warning, success, focus
- component tokens: button background, panel border, table row height, chart series, command item state
- mode/density tokens: light/dark/high-contrast/forced-colors, compact/comfortable, reduced motion

Use DTCG-style typed tokens or a repo-native equivalent when exporting. Every token used in code should map to a semantic job; raw one-off values are allowed only with a named exception.

## Component mapping

For each reusable component, define:

- product job and owner
- anatomy and slots
- public props and controlled/uncontrolled state
- Figma property or design variant mapping, if a design source exists
- Storybook args/controls or local-gallery equivalent
- state attributes or test selectors
- library owner for behavior, styling, state, accessibility, and animation
- deprecated or rejected variants

If one design component maps to multiple code components, name the variant restriction or routing rule. If one code component maps to multiple design components, name the semantic split.

## Story and documentation set

Document only what users and future builders need:

- default usage
- primary variants
- destructive/risky variants
- loading, empty, disabled with reason, error, selected/current, busy, success
- long label, localized text, compact/comfortable density
- light/dark/high-contrast/forced-colors when supported
- keyboard/focus behavior
- do/don't usage guidance
- migration or removal note for replaced defaults

Docs should describe when to use the component, not only what props exist.

## Product library ownership

Preserve library strengths and replace starter fingerprints:

- Radix/React Aria own accessible primitives and state semantics.
- shadcn/ui can scaffold composition, but product tokens, anatomy, copy, density, and states must be replaced.
- TanStack owns table/query behavior; product hierarchy, filters, empty/error states, and responsive replacement remain Stark's job.
- React Hook Form/Zod own form state and schema; field anatomy, recovery copy, and validation timing remain product decisions.
- Motion/GSAP/Rive/Lottie/Three own only the motion or media job named in the library contract.

## Drift checks

Before accepting, inspect:

- token names used in code versus token source
- variant names in code versus story/design source
- missing states in stories or local gallery
- raw colors, spacing, radii, shadows, durations, and font families
- library default classes, copy, density, rounded corners, shadows, and animations
- undocumented components or props
- design changes without story/test updates
- story/test updates without token/component source changes

## Hard fails

- Reusable UI ships with no state gallery or stories.
- Component props expose style flags but not product behavior.
- Tokens exist but components still use raw values for key surfaces/states.
- Figma/design variants, Storybook args, and code props disagree with no mapping note.
- Product-library defaults are treated as the design system.
- Accessibility behavior is undocumented for custom or wrapped primitives.
- A generated showcase claims design-system quality but has no usage guidance or drift checks.
- Token or component baselines are updated without a version/change note.
