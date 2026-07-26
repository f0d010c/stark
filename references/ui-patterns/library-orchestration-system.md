# Library orchestration system

Use this after `frontend-technique-matrix.md`, `product-library-playbooks.md`, `motion-library-playbooks.md`, and `advanced-visual-systems.md` when a web surface may use multiple frontend capabilities.

The goal is not "use more libraries." The goal is to assign each capability one job that improves product quality: structure, behavior, state, proof, choreography, accessibility, performance, or visual authorship.

## Source anchors

- Motion's React layout API is strongest when React state changes layout and shared elements need continuity.
- GSAP ScrollTrigger is strongest when an authored timeline should be pinned, scrubbed, or tied to scroll progress.
- Three.js resources such as geometries, materials, and textures need explicit disposal when no longer used.
- Rive web runtime exposes state machine inputs, so Rive works best as an authored stateful asset controlled by code.
- Product libraries such as Radix, React Aria, TanStack, React Hook Form, Zod, Floating UI, cmdk, and Embla should own behavior, not the visual identity.

## Use when

- The prompt says use libraries, motion.dev, GSAP, Three, Rive, Lottie, Spline, charts, shadcn, Radix, React Aria, TanStack, forms, or "real frontend dev/designer tools."
- The design is high-craft, animation-led, stateful, data-heavy, or app-like.
- The stack could accidentally become Motion + GSAP + Three + Lenis + product libraries without clear boundaries.
- A generated design looks impressive but feels messy, slow, inaccessible, demo-like, or hard to maintain.

## Output contract

```md
Library orchestration
- Surface and user frequency:
- Product object:
- Core interaction:
- Native/browser owners:
- Product library owners:
- Motion/visual owners:
- Data/form/chart owners:
- Asset/media owners:
- Styling/token owner:
- State owner:
- Accessibility owner:
- Performance owner:
- QA probes:
- Rejected libraries:
- Removal rule:
```

## Ownership layers

| Layer | Owns | Strong tools | Must not own |
|---|---|---|---|
| Layout and responsiveness | grid, subgrid, container queries, media boxes, containment | CSS | app state or authored timelines |
| Primitive behavior | dialogs, menus, tabs, overlays, comboboxes, focus | native, Radix, React Aria, Floating UI | product copy or brand style |
| Server/data state | fetching, cache, stale, retry, mutation | TanStack Query | local tabs, open panels, decorative state |
| Tables/lists | sorting, filtering, selection, pagination, density | TanStack Table, virtualization | tiny static comparisons |
| Forms/schemas | validation, dirty/submitting state, server recovery | native forms, React Hook Form, Zod | one-field marketing capture |
| Command/search | action model, shortcuts, disabled reasons, empty/loading | cmdk, React Aria combobox, custom reducer | marketing navigation decoration |
| Component continuity | route/detail, layout changes, sheets, active states | Motion | long scroll films or 3D scenes |
| Authored timeline | pinned scroll, scrubbed proof, SVG path, text staging | GSAP | basic card fade-ins |
| Spatial object | inspectable 3D, camera path, material proof | Three/R3F, Spline | generic background spectacle |
| Stateful authored art | interactive illustration, onboarding state, brand mark | Rive | important UI text or controls |
| Small loops | loaders, empty-state marks, brand loops | Lottie/dotLottie | primary product UI |
| Cinematic proof | real/generated output, media examples, expensive motion | video, generated bitmap | fake interactivity |
| Data proof | chart question, comparison, drilldown, source | native SVG, Chart.js, ECharts, D3/visx, Observable Plot, Vega-Lite | decorative metrics |

## Multipliers

Use combinations only when each layer has a different owner:

- **Motion + Radix/React Aria**: primitive owns focus and keyboard; Motion owns entrance/exit only.
- **GSAP + HTML proof labels**: GSAP owns the scroll film; HTML owns labels, CTAs, focus, and reduced-motion static frames.
- **Three/R3F + CSS UI**: Three owns the object; CSS/HTML owns copy, controls, proof labels, fallback, and layout.
- **Rive + app state**: Rive owns authored state visuals; React/app state owns truth, inputs, labels, and recovery.
- **TanStack Table + adaptive composition**: TanStack owns table mechanics; Stark owns priority columns, mobile replacement, summary, and detail sheet.
- **TanStack Query + forms**: Query owns server mutation/cache states; React Hook Form/Zod owns field state and schema boundary.
- **Embla + proof wall**: Embla owns drag/swipe; HTML owns visible controls, pagination, keyboard, and linear fallback.
- **Data-viz + product copy**: chart library owns marks/interaction; copy owns question, units, source, and accessible summary.

If two libraries want the same layer, keep the one with the clearest product job and remove the other.

## Surface recipes

### Cinematic product page

- Native/CSS: page grid, responsive key-art framing, fallback sections.
- GSAP: one authored proof timeline.
- Motion: local component entrances or route/detail continuity only if React state exists.
- Three/video/generated bitmap: one main proof object or output.
- Product libraries: usually none unless the page contains a real demo, command surface, or form.
- Removal rule: remove Lenis, decorative particles, and extra card animation before removing proof.

### Stateful product app

- Native/CSS: shell, grid, containment, density.
- Product libraries: Radix/React Aria for primitives; TanStack/React Hook Form/Zod only for real data/forms.
- Motion: command palette, sheet, route/detail continuity, optimistic feedback.
- GSAP/Three/video: only for onboarding, proof, or an inspectable object outside the repeated-use path.
- Removal rule: remove spectacle before state coverage, keyboard flow, or data recovery.

### Dashboard or CRM

- Native/CSS: dense layout, table containment, split panes.
- TanStack Table/Query: real operational data mechanics.
- Radix/React Aria/Floating UI: filters, menus, popovers, dialogs.
- Motion: state feedback and panel continuity; no scroll theater.
- Data-viz: chart question, accessible summary, table/source fallback.
- Removal rule: remove cinematic motion before reducing scan speed.

### Docs or developer platform

- Native/CSS: readable content, code blocks, sticky local nav, responsive containment.
- cmdk/React Aria/Radix: command/search and disclosure.
- View Transitions/Motion: route/detail continuity with focus restoration.
- GSAP/Lenis/Three: rarely, only for launch/campaign pages.
- Removal rule: remove motion that slows search, reading, or copy actions.

### Creative editor or canvas

- Native/CSS: canvas dominance, panels, toolbars, stable hit targets.
- Product libraries: primitives, forms, command palette, tables as needed.
- Motion: direct manipulation feedback, inspector/sheet continuity.
- Canvas/WebGL/Pixi/R3F: actual creative surface or preview, not background.
- Removal rule: remove panel flourish before compromising canvas stability.

## Implementation rules

- Name the state owner before coding. React state, URL state, Query server state, form state, animation state, and Rive/Three scene state cannot blur together.
- Keep important text, controls, status, and recovery paths code-native.
- Do not let a visual library own routing, focus, forms, permissions, or irreversible actions.
- Treat embedded scenes and generated media as assets with HTML-owned UI.
- Prefer one signature library moment over many medium-quality effects.
- Every installed library needs a QA probe and a removal rule.
- Add a dependency only when native platform primitives cannot meet the product job with acceptable quality.

## QA gates

- Ownership map has no duplicate behavior owners.
- Every library appears in rendered behavior, not only in imports.
- Keyboard and focus still work through overlays, command menus, forms, and animated exits.
- Reduced motion preserves proof, state, and navigation.
- Mobile/tablet has structural replacements for dense, animated, or media-heavy regions.
- Console is clean after primary interaction and route/detail changes.
- Heavy media/canvas/WebGL/video/Rive/Lottie is nonblank, framed, pausable/offscreen-safe, and has fallback.
- Performance budget names lazy loading, DPR/object count, pause policy, and removal candidates.
- The product is recognizable before the libraries are.

## Hard fails

- Library list is longer than the product object description.
- Motion, GSAP, Lenis, Three, Rive, and Lottie are all used without one primary choreography mechanic.
- A product library controls visual identity through untouched defaults.
- A visual asset contains essential UI text, CTA, labels, or form controls.
- Server state, local state, form state, and animation state are mixed in one component without ownership.
- Reduced motion or mobile removes the proof instead of replacing it.
- The design would look almost the same if the named product were swapped out.
