# Capability Recipe Cookbook

Use this after `capability-maximization-matrix.md`, `library-capability-fit-contract.md`, and `frontend-library-production-presets.md` when Stark needs to turn "use the best libraries/tools" into a surface-specific stack that can actually produce a better design.

This cookbook is the practical layer: pick one recipe, assign one owner per behavior, and delete any capability that does not improve product proof, task speed, asset quality, interaction clarity, accessibility, responsive behavior, or QA evidence.

## Source Anchors

- Motion layout animation is strongest when React state changes size, position, or shared elements.
- GSAP `matchMedia()` supports responsive and reduced-motion animation setup with automatic cleanup/revert for matching contexts.
- Rive web runtimes expose state machines and inputs so authored art can respond to product state.
- React Three Fiber keeps Three.js scenes inside a `<Canvas>` owner; spatial scenes need explicit framing, performance, and fallback decisions.
- Storybook, Chromatic, and Playwright-style evidence should prove the selected capability, not merely show that the page loaded.

## Required Output Contract

```md
Capability recipe
- Surface:
- User mode/frequency:
- Primary product object:
- Selected recipe:
- Signature capability:
- Quiet supporting capabilities:
- Rejected capabilities:
- Library owners:
- Native/browser owners:
- Data/state owners:
- Asset/media owners:
- Typography/token owners:
- Accessibility owners:
- Performance/removal rule:
- QA proof:
```

## Recipes

### AI Generation Launch

Use for AI video, image, audio, design, code, or model-output products where the first impression must show generated output quality.

- Signature capability: cinematic proof object through video, generated bitmap/key art, Rive state illustration, or one GSAP/Three proof sequence.
- Quiet support: product-proof composition, prompt/output data fixtures, concrete copy, expressive display type with quiet UI labels, reduced-motion static proof frames.
- Product libraries: only for a real prompt box, gallery filter, upload flow, or waitlist form.
- Motion: GSAP for a 3-5 beat prompt-to-output story; Motion for local state continuity; Three/R3F only if the output is spatial or inspectable.
- Reject: floating AI orbs, phone-prop copies, generic "create anything" copy, multiple unrelated animated objects, text baked into media.
- QA proof: output visible above the fold, failed-generation state, mobile proof frame, nonblank media/canvas/Rive, reduced-motion equivalence.

### Developer Tool Product Proof

Use for CLIs, SDKs, agents, APIs, observability, deployment, and infrastructure tools.

- Signature capability: code/log/console proof workbench with a real object such as run, request, trace, branch, artifact, diff, or key.
- Quiet support: strong mono role, copy system, docs/search architecture, responsive containment, Motion or View Transitions for route/detail continuity.
- Product libraries: cmdk/search, Radix/React Aria overlays, TanStack Query for live run/data state.
- Motion: subtle state continuity, artifact arrival, command palette transitions; avoid scroll theater unless it is a launch page.
- Reject: fake terminal wallpaper, unreadable code, feature cards with icons, decorative dashboards, huge gradients hiding weak proof.
- QA proof: code readability, copy action, error/log state, keyboard command path, mobile docs/proof replacement, console clean.

### Operational Dashboard Or CRM

Use for queues, admin tools, support, CRM, sales, billing ops, audit, scheduling, and repeated daily work.

- Signature capability: data/task mechanics: table/list, saved view, queue priority, bulk action, detail inspector, stale/error/retry state.
- Quiet support: TanStack Table/Query when real mechanics exist, Radix/React Aria for menus/dialogs, dense tokens, tabular figures, task-flow acceptance.
- Motion: Motion only for panel continuity, optimistic feedback, status arrival, or drawer/sheet transitions.
- Data-viz: only for a named decision; include source/table fallback.
- Reject: cinematic heroes, marketing spacing, animated metrics, hover-only controls, decorative charts, generic CRM rows.
- QA proof: table overflow, keyboard row/action path, stale/error state, bulk action recovery, saved filters, mobile detail sheet.

### Editor Or Creative Canvas

Use for design tools, media editors, document/canvas apps, map editors, whiteboards, timeline tools, and creative instruments.

- Signature capability: stable canvas/work surface with inspector, layers/timeline, direct manipulation, undo/export/save conflict.
- Quiet support: Radix/React Aria primitives, cmdk shortcuts, Motion for inspector/sheet continuity, Pixi/Canvas/R3F only when it is the actual creative surface.
- Product libraries: forms/settings only when configuration can fail; table/list libraries only for asset/layer libraries.
- Motion: direct manipulation feedback, selection continuity, tool switching; no moving primary controls during editing.
- Reject: decorative panels, chrome competing with the canvas, generic empty canvas, animations that change hit targets.
- QA proof: canvas framing, selection/drag keyboard alternative, undo path, save/export state, inspector mobile replacement.

### Docs Or Developer Platform

Use for documentation, plugin pages, SDK references, API docs, install flows, changelogs, examples, and knowledge bases.

- Signature capability: information architecture, search/command, code examples, version/platform switching, install proof.
- Quiet support: readable type, real mono, code copy buttons, local navigation, Radix/React Aria disclosure/tabs, View Transitions only with focus restoration.
- Motion: route/detail continuity, disclosure feedback, copy success; no reading-hostile scroll effects.
- Reject: Lenis/scroll hijacking, heavy 3D, tiny code, hidden navigation, generic "beautiful docs" marketing pages without task proof.
- QA proof: headings, search empty state, code overflow/copy, mobile nav, 404/offline/version mismatch.

### Agent Run Or Automation UI

Use for long-running AI agents, build/test runners, CI assistants, workflow automations, and artifact-producing systems.

- Signature capability: run timeline plus artifact inspector and recoverable control model.
- Quiet support: Query/server state for run updates, Motion for artifact/status arrival, mono logs, task ergonomics, accessibility/status live regions.
- Product libraries: Radix dialogs/menus, cmdk actions, TanStack only for artifact/log tables.
- Motion: state-driven arrivals and continuity; no celebration before artifacts are produced.
- Reject: spinner-only loading, hidden blocked state, vague "thinking" copy, animated confetti, decorative steps with no retry/stop.
- QA proof: queued/running/waiting/blocked/failed/retrying/succeeded states, stop/retry controls, log readability, focus path, mobile artifact sheet.

### Trust, Permissions, Or Checkout

Use for payments, permissions, API scopes, install dialogs, security, privacy, compliance, admin changes, and destructive actions.

- Signature capability: risk clarity and recovery: permission matrix, review step, audit trail, preserved input, rollback/cancel path.
- Quiet support: RHF/Zod or native forms, Radix/React Aria dialogs, sober copy, high-contrast state tokens, tabular prices/timestamps.
- Motion: level 0-1 feedback only; transitions must not hide terms, errors, or destructive consequences.
- Reject: playful motion near payment/destructive action, vague permission copy, one-click trust, color-only status, hidden legal terms.
- QA proof: validation, payment/install failure, denied/revoked state, focus order, preserved input, destructive confirmation, keyboard escape/cancel.

### Analytics Or Data Product

Use for BI, analytics, monitoring, reporting, finance, observability, experimentation, and data exploration.

- Signature capability: a chart or data panel that answers a named decision.
- Quiet support: data-viz library selected by chart question, TanStack Table/Query for source/drilldown, accessible summary, tabular figures, export/share path.
- Motion: filter/reveal/focus changes only when they clarify causality; avoid animated vanity metrics.
- Libraries: ECharts for dense operational dashboards, D3/visx for bespoke interaction, Chart.js/Recharts for simpler product charts, Observable Plot/Vega-Lite for grammar-driven exploratory views.
- Reject: charts without a question, unsourced metrics, decorative KPI grids, legends that require color-only decoding.
- QA proof: source labels, accessible summary, table fallback, mobile replacement, empty/no-data/outlier states, export.

### Gallery, Portfolio, Or Showcase Proof

Use for public proof pages, README galleries, generated examples, case studies, launch portfolios, and visual comparison pages.

- Signature capability: curated proof selection with strong media framing, captions, comparison baseline, and quality gate.
- Quiet support: CSS scroll snap or Embla only with controls, View Transitions for detail continuity, asset realism, rendered quality gate, runtime evidence regression.
- Motion: one transition mechanic that improves inspection; no autoplay-only dependency.
- Reject: publishing every plausible output, cropped proof, unexplained samples, carousel-only essential content, weak examples beside strong examples.
- QA proof: selected/rejected examples, desktop/mobile crops, captions, keyboard controls, baseline screenshots, gallery gap report.

## Anti-Stacks

Cut these before implementation:

- Motion + GSAP both animating layout/position for the same object.
- Lenis + pinned GSAP + scroll snap on mobile.
- Three/R3F background plus unrelated Rive/Lottie props plus video when one proof object would do.
- Radix + React Aria + Floating UI for the same ordinary overlay.
- TanStack Table for a static three-row comparison.
- Chart library for decorative metric cards with no user question.
- Lottie/Rive carrying essential text, prices, CTAs, labels, or errors.
- A product library stack with untouched starter tokens, default cards, and generic copy.

## Escalation And Removal Rules

- Escalate from CSS to Motion only when state continuity matters.
- Escalate from Motion to GSAP only when authored timeline control matters.
- Escalate from image/video to Three/R3F only when inspection, camera, material, or spatial interaction matters.
- Escalate from static illustration to Rive only when runtime state machine inputs matter.
- Escalate from native SVG to chart libraries only when scale, interaction, axes, tooltips, or drilldown matter.
- Remove the least task-critical spectacle first when mobile, performance, accessibility, or clarity fails.

## QA Evidence

Every recipe must prove:

- The signature capability visibly renders and changes state when expected.
- The product object is recognizable before the library stack is.
- Critical text, controls, labels, errors, prices, and recovery paths are code-native.
- Desktop and mobile have intentional structures, not one squeezed composition.
- Keyboard, focus, reduced motion, and nonblank media/canvas checks pass.
- Story-driven QA or browser QA covers at least the highest-risk state.

## Hard Fails

- The selected recipe does not match the surface or user frequency.
- Capability choices are justified by trend rather than product proof.
- Multiple visual libraries compete for attention.
- The result looks like a starter template with expensive effects attached.
- The mobile/reduced-motion version loses the main proof.
- No test, story, screenshot, or browser probe proves the signature capability.
