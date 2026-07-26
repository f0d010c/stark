# Component API and variant contract

Use this when Stark creates reusable UI components, design-system primitives, product-library wrappers, app-shell parts, dashboards, editors, forms, command surfaces, pricing/trust components, charts, media controls, or anything expected to survive beyond one screenshot.

This file complements `component-anatomy.md`, `component-visual-composition-contract.md`, `interaction-state-matrix.md`, `interactive-prototype-contract.md`, `component-state-gallery.md`, `story-driven-qa-harness.md`, `token-implementation-contract.md`, `product-library-composition.md`, and `library-de-defaulting-system.md`.

The goal is a component that has a designed public API, not just attractive markup. The API should encode product intent, states, accessibility, tokens, slots, variants, responsive behavior, and QA hooks so later changes do not drift back to generic library defaults.

## Required output

```md
Component API and variant contract
- Component:
- Product job:
- Behavior owner:
- Public props:
- Controlled/uncontrolled state:
- Slots/anatomy:
- Variants:
- Sizes/density:
- State props/data attributes:
- Token hooks:
- Accessibility contract:
- Responsive contract:
- Library wrapping rule:
- Story args:
- Test selectors:
- Rejected API:
- Deprecation/removal rule:
```

## API shape model

| API area | Define | Avoid |
|---|---|---|
| Product job | what task the component helps complete | generic component without product reason |
| Behavior owner | native, Radix, React Aria, custom state, chart lib, Motion | two libraries controlling the same behavior |
| Props | small set of meaningful inputs and events | style-only props for every CSS detail |
| Variants | product-facing roles and risk levels | `primary/secondary` with unclear meaning |
| Slots | header, body, action, metadata, media, status, empty/error | one giant children blob with hidden structure |
| State hooks | `data-state`, `data-invalid`, `aria-*`, render props | private CSS classes that cannot be tested |
| Tokens | semantic/component tokens consumed by slots/states | raw colors/radii in component files |
| Stories | args that exercise states and content stress | one polished default story |

## Required decisions

### Public props

- Props should describe product meaning, not internal styling.
- Prefer `status="blocked"` or `intent="danger"` over `red`.
- Events should name user intent: `onRetry`, `onAssign`, `onApprove`, `onSelectPlan`, `onDismiss`, `onValueCommit`.
- Keep arbitrary class/style escape hatches narrow and documented.
- For forms, define how value, validation, dirty/submitting/server error, and recovery are owned.

### Controlled and uncontrolled state

- Use controlled state when parent workflow, URL, server state, or analytics needs ownership.
- Use uncontrolled state for local disclosure, simple tabs, or low-risk temporary UI.
- Name default props and change handlers when both are supported.
- Do not mix internal and parent state without deciding which one wins.

### Slots and anatomy

- Name visible regions before implementation: root, trigger, label, description, status, media, action row, secondary action, meta, error, empty, footer.
- Keep semantic text and controls in slots the DOM can inspect.
- Preserve focus order across slots.
- Avoid slot APIs that let users build inaccessible combinations without guardrails.

### Variants and density

- Variants should map to product intent, not decoration: `neutral`, `selected`, `warning`, `danger`, `success`, `proof`, `quiet`, `premium`, `system`, `destructive`.
- Sizes and density should map to use frequency and viewport, not arbitrary scale names.
- State variants need hover, focus-visible, pressed, selected, disabled, loading, invalid, busy, and reduced-motion rules where relevant.
- If a variant is only a color swap, fold it into tokens or delete it.

### Library wrapping

- If wrapping Radix, React Aria, shadcn/ui, TanStack, Floating UI, cmdk, Embla, or chart components, preserve their behavior contract and replace only anatomy, tokens, copy/data, and state visuals.
- Expose accessible labels, selected state, disabled reason, error/status, and keyboard behavior through the wrapper API.
- Do not hide required library props behind styling shortcuts that break accessibility or composition.
- Compare the wrapper against the official docs example and name what is intentionally changed.

### Story args and test hooks

- Story args should mirror public props and meaningful states.
- Add arg controls for variant, size/density, status, disabled reason, loading, long label, empty/error data, selected item, theme/mode, and mobile/narrow width.
- Use stable `data-testid` or semantic selectors for flows that need automated proof.
- Keep selectors tied to product roles, not styling classes.

## API quality checks

- Can another developer use the component from props alone without reading its internal CSS?
- Can design changes happen through tokens/variants instead of editing every instance?
- Can Storybook or a local state gallery expose every important state through args/fixtures?
- Can Playwright or Testing Library find primary controls by role/name and stable selectors?
- Does the API prevent impossible or unsafe combinations?
- Does the mobile version use the same API, or is it a separate hidden implementation with different behavior?

## Hard fails

- Component API is mostly `className`, `children`, and visual flags.
- Variants are vague color names that do not express product role or risk.
- Wrapper breaks keyboard, focus, label, disabled, or selected behavior from the underlying library.
- Essential state appears only through CSS class names with no ARIA/data/state owner.
- Stories cannot reproduce error, loading, empty, disabled, long-label, theme, or mobile states.
- Tokens exist, but component variants still use raw values or library defaults.
- Public API allows combinations the product should never render.

## Source anchors

- Storybook Controls uses args and argTypes to make component inputs inspectable and interactive: https://storybook.js.org/docs/essentials/controls
- Storybook testing guidance treats stories as reusable UI test targets across interaction, accessibility, and visual checks: https://storybook.js.org/docs/writing-tests
- React Aria Components provide accessible behavior, interactions, internationalization, and state-based styling hooks while leaving design and styling to the product: https://react-spectrum.adobe.com/react-aria/react-aria-components.html
- WAI-ARIA Authoring Practices define expected roles, states, properties, and keyboard behavior for rich widgets: https://www.w3.org/WAI/ARIA/apg/patterns/
- Class Variance Authority documents variants and compound variants as a way to encode component styling decisions in a typed API: https://cva.style/docs/getting-started/variants
