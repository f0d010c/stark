# Story-Driven QA Harness

Use this after `component-state-gallery.md`, `interactive-prototype-contract.md`, `accessibility-interaction-contract.md`, and `runtime-evidence-regression-contract.md` when a serious generated app, product page, dashboard, component system, or library-heavy UI needs proof beyond one rendered screenshot.

This harness borrows the working model of modern frontend teams: isolate components and page sections as stories, cover meaningful states, simulate interactions, capture visual baselines, and make accessibility failures visible before accepting the design.

## Source Anchors

- Storybook treats stories as render tests and supports `play` functions for setup, mocking, user interaction, and assertions.
- Storybook accessibility testing can run automated checks per story and can be configured to fail tests when violations are found.
- Chromatic uses Storybook stories for visual testing across components, viewports, and themes, and can run those checks in CI.
- Playwright can compare screenshots with `toHaveScreenshot()`, but visual baselines must be generated and reviewed in a consistent environment.

## Use When

- The UI uses reusable components, product libraries, custom controls, forms, tables, charts, overlays, command palettes, carousels, editors, or animation states.
- A generated design looks good in a single happy-path screenshot but lacks state, interaction, responsive, or accessibility proof.
- The user wants higher quality, real frontend-dev polish, library use, QA, or public/demo reliability.
- README/gallery/release screenshots need confidence that the chosen design is not a fragile mock.

## What It Prevents

- Components that only look right in the default state.
- Disabled, selected, invalid, loading, empty, long-label, reduced-motion, and mobile states that were never rendered.
- Library components that pass visual review but fail keyboard, focus, or accessibility behavior.
- Visual regression baselines that capture random data, animation frames, clocks, cursors, or loading jitter.
- Story/demo pages that become another product surface instead of a focused inspection harness.

## Required Output Contract

```md
Story-driven QA harness
- Target surface/components:
- Story format: Storybook / local gallery / Playwright route / existing test harness
- State stories:
- Interaction stories:
- Visual baseline stories:
- Accessibility stories:
- Responsive/theme/density stories:
- Fixture/mocking plan:
- Dynamic regions to stabilize:
- Selectors/test hooks:
- Commands/checks to run:
- Hard fails:
- Required repair:
- Re-check evidence:
- Baseline/update decision:
```

## Story Set

Create only stories that prove a user-visible risk. Do not create a vanity gallery of every component.

### State Stories

Cover the states users actually hit:

- default/resting
- loading/skeleton
- empty/no-results
- stale/background-refreshing
- selected/current
- disabled with reason
- invalid/error
- permission denied
- optimistic/pending
- success/complete
- destructive confirmation
- long-label/localized text
- dense and comfortable modes

### Interaction Stories

Use interaction stories for controls that should visibly change state:

- open/close overlay, menu, combobox, popover, command palette, or drawer
- submit form with valid, invalid, server-error, and retry paths
- select rows/items and perform a bulk action
- sort/filter/search with an empty state and reset path
- scrub, drag, resize, carousel, or direct-manipulation control with keyboard/touch alternative
- run a short animation sequence and reduced-motion substitution

### Visual Baseline Stories

Snapshot the states most likely to regress:

- first viewport or hero proof frame
- primary product object/workbench
- dense table/list/chart/dashboard section
- modal/sheet/popover/command surface
- error/recovery state
- mobile replacement
- dark/light/high-contrast or compact/comfortable density variant

### Accessibility Stories

Require stories that expose:

- visible focus and focus return
- accessible names/descriptions
- form labels, helper text, and error relationships
- live/status updates for async work
- keyboard paths for custom widgets
- target size/touch behavior
- reduced-motion behavior
- hidden/inert background content for overlays

## Fixture And Baseline Rules

- Use deterministic records, timestamps, names, counts, and media dimensions.
- Freeze clocks, random IDs, cursor positions, and animation progress when visual comparison matters.
- Mask or stabilize volatile content such as generated images, charts with live data, avatars, clocks, video frames, and network status.
- Use the same browser/project/environment for baseline generation and comparison.
- Commit or store baselines only after human review of the first generated snapshots.
- When updating baselines, state which product/design decision changed and why the diff is intentional.

## Harness Choices

### Storybook

Use when the repo already has Storybook or when reusable components and state galleries are central. Prefer stories for isolated components, section-level proof, visual state coverage, and interaction play functions.

### Local Gallery Route

Use when Storybook is not installed and adding it would be excessive. Build a hidden/local route or static page that renders the same story set with deterministic fixtures, QA selectors, and viewport labels.

### Playwright Route Tests

Use when task completion, navigation, screenshots, focus behavior, or end-to-end flow matters. Pair screenshot assertions with action assertions and stable state setup.

### Chromatic Or Visual Cloud

Use when the project already uses visual review in CI or when public component quality needs cross-browser, viewport, and theme review. Do not introduce a paid/cloud dependency without project approval.

## Hard Fails

- Only the default happy path has a story or screenshot.
- A visible enabled control has no interaction story, route test, or intentionally-static note.
- Accessibility checks are disabled or warnings-only for new serious components without an explicit baseline plan.
- Visual snapshots include uncontrolled animation, random data, clocks, live network content, or unstable generated media.
- Mobile, error, empty, and keyboard states are represented only in prose.
- A baseline is updated without naming the intentional design/product change.

## Repair Loop

When a story or baseline fails, repair the component or token once, not every story separately. Re-run the smallest story set that proves the failure is gone, then re-run the broader affected surface if shared tokens, layout, typography, or library styling changed.

## Ship Decision

- Blocked: hard fail remains or no evidence exists for a required story family.
- Passable: required story families exist but evidence is manual or partial.
- Good: state, interaction, accessibility, responsive/theme, and visual baseline evidence are present for the main surface.
- High-craft: shared components are story-covered, baselines are stable, and repair diffs are explainable.
- Portfolio: high-craft plus screenshots are curated enough for README/gallery/release proof.
