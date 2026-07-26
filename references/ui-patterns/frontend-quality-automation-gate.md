# Frontend quality automation gate

Use this when a generated page/app should survive beyond one manual screenshot: public demos, README/gallery proof, serious React/Vite/Next work, component libraries, animation-led pages, dashboards, checkout/trust flows, docs platforms, and design dogfood batches.

This contract turns Stark's QA guidance into a repeatable local or CI gate. It complements `qa-evidence-contract.md`, `browser-qa-matrix.md`, `story-driven-qa-harness.md`, `runtime-evidence-regression-contract.md`, `performance-budget-contract.md`, `accessibility-interaction-contract.md`, and `task-flow-acceptance-harness.md`.

## Source anchors

- Playwright projects can run the same tests across browsers, devices, auth states, or environments.
- Playwright visual comparisons use `toHaveScreenshot()` and require stable baseline environments.
- Storybook interaction tests use story `play` functions for user behavior and assertions, and can run in terminal/CI.
- Storybook accessibility tests can fail CI when `parameters.a11y.test` is set to `error`.
- Playwright accessibility guidance uses `@axe-core/playwright` for automated accessibility scans.
- Lighthouse CI supports assertions and budgets for performance regression checks.
- Testing Library role queries match elements through accessible roles and names, making tests closer to user perception.
- Core Web Vitals focus on LCP, INP, and CLS; lab checks are risk signals, not field-data proof.

## Required output

```md
Frontend quality automation gate
- Target surface:
- Quality target:
- Gate mode: advisory / blocking / release-blocking
- Local command:
- CI command:
- Playwright projects/viewports:
- Story/component harness:
- Visual baselines:
- Interaction flows:
- Accessibility checks:
- Performance/vitals checks:
- Usability/task checks:
- Fixtures and mocks:
- Stabilization/masks:
- Artifact output:
- Failure triage owner:
- Baseline update rule:
- Skipped checks and why:
- Ship decision:
```

## Gate levels

| Level | Use when | Required checks |
|---|---|---|
| Advisory | exploration, internal sketch, fast prototype | build/lint if present, browser smoke, one desktop/mobile probe |
| Blocking | serious UI, user-facing demo, generated app | build/lint/test, Playwright smoke, desktop/mobile screenshots, role-based interactions, axe or equivalent when available |
| Release-blocking | README/gallery, public demo, plugin page, checkout/trust, component library | blocking checks plus visual baselines, story/state coverage, reduced-motion/mobile proof, performance budget, artifact archive |

Do not mark a public or portfolio result as high-craft if the gate is only advisory unless missing evidence is named as risk.

## Check families

### Build and static health

Require the existing project command first:

- `npm run build`, `pnpm build`, `vite build`, `next build`, or repo equivalent
- lint/typecheck/unit tests when present
- no new console/hydration/asset/runtime errors in the target route

Skip only when the repo has no installable stack or the current task is a static artifact.

### Playwright route and viewport projects

Create projects for the actual risk:

- desktop Chromium for baseline proof
- mobile Chrome/Safari emulation for responsive replacement
- reduced-motion project for animation-heavy surfaces
- dark/high-contrast/density project when modes are part of the design
- authenticated or fixture state project when the UI depends on app state

Prefer role, label, placeholder, alt text, and visible text locators. Add test IDs only for stable product states, not for hiding inaccessible controls.

### Story/component coverage

Use Storybook when component reuse, library wrapping, design-system APIs, or state coverage matters. Use a local gallery route when Storybook would be too much.

Required story families:

- default/resting
- loading, empty, error, permission, disabled with reason
- selected/current/busy/optimistic/success
- long-label, localized, compact/comfortable, dark/light
- mobile replacement
- keyboard/focus, reduced motion, and primary interaction

### Visual regression

Snapshot only stable proof:

- first viewport or hero proof frame
- primary object/workbench
- dense table/list/chart state
- modal/sheet/popover/command surface
- error/recovery state
- mobile replacement
- animation poster/proof frame

Freeze or mask clocks, random data, animated cursors, live media, generated avatars, network status, and seeded art only when they are not the product proof. Review first baselines manually before treating them as truth.

### Accessibility automation

Automated a11y checks are a gate, not a full audit. Pair them with keyboard/focus proof:

- role/name checks for buttons, links, inputs, dialogs, menus, tabs, comboboxes, and status regions
- visible focus and focus return
- form label/helper/error relationships
- reduced-motion content parity
- no hidden interactive background behind modals

### Performance and vitals

Use performance evidence when motion, media, 3D/canvas, charts, large lists, or many libraries are present:

- reserve geometry for LCP media and dynamic sections
- avoid layout animation for key interactions
- check CLS risk after media/font/chart load
- check INP risk for heavy input, drag, filters, command menus, and animation scrubbing
- use Lighthouse CI assertions or an equivalent local budget when available
- pause or reduce offscreen animation/media/canvas work

Do not claim field Web Vitals from local checks; call them lab risk evidence.

### Usability/task automation

For product UI, automate at least the primary path or define why it remains manual:

- first-run or empty-to-first-value path
- returning-user speed path
- error/recovery or retry path
- keyboard-only path
- mobile/touch path
- state-stress path with long labels, empty data, permissions, and failed network fixture

## Fixture and stability rules

- Use deterministic data, names, counts, dates, IDs, chart values, and media dimensions.
- Mock network for stateful proof; do not depend on live APIs for baseline screenshots.
- Seed generated visuals or archive the exact asset used.
- Load fonts deterministically or document fallback variance.
- Use the same OS/browser/project for baseline generation and comparison.
- Store artifacts with surface, viewport, state, date, command, and commit/run identifier.

## Failure triage

| Failure | First repair |
|---|---|
| Build/hydration error | fix runtime correctness before visual polish |
| Visual diff in primary object | inspect design drift; update baseline only for intended change |
| Mobile overflow | repair adaptive composition, not only `overflow-x: hidden` |
| Axe/role/name failure | repair semantics and labels before accepting screenshot |
| Keyboard/focus failure | repair interaction contract before styling |
| Performance budget breach | remove, lazy-load, pause, or replace heavy feature |
| Flaky screenshot | stabilize fixture/time/animation/mask before raising threshold |
| Story missing critical state | add the state or lower confidence |

## Hard fails

- Public screenshot has no reproducible command, viewport, or state.
- Visual baselines are updated only to silence a diff.
- Controls are tested by CSS selectors while accessible names are missing.
- Storybook a11y is warnings-only for new release-blocking component work without an explicit reason.
- Animation screenshots capture uncontrolled random frames.
- Performance checks are skipped while heavy media/canvas/animation remains always active.
- A beautiful screenshot overrides failed build, accessibility, interaction, or mobile evidence.
