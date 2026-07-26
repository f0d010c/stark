# Frontend technique matrix

Use this after the stack is chosen and before adding product or motion libraries. It keeps Stark from solving every design problem with the same component kit, animation library, and decorative layer.

The goal is to choose the browser primitives, library ownership, fallbacks, and QA hooks that make a page feel authored, responsive, and durable.

When the technique choice adds expensive motion, media, WebGL/canvas, data visualization, large lists, or multiple libraries, pair this matrix with `performance-budget-contract.md`. For charts, analytics, maps, timelines, or metric panels, read `data-visualization-library-selection.md` before picking the charting library.

## Output Contract

```md
Frontend technique brief
- Surface:
- Product object:
- Native primitives:
- Library owners:
- Rejected techniques:
- Browser support/fallback:
- Responsive containment:
- Performance hooks:
- Accessibility hooks:
- QA probes:
```

## Native First Rule

Start with the platform:

- Use CSS Grid and subgrid when nested content should align to the same columns, rows, tracks, or proof rails.
- Use container queries when a component's layout should respond to its own available space, not the whole viewport.
- Use CSS custom properties for local tokens, stateful themes, color channels, elevation, density, and component variants.
- Use `@property` only when typed custom properties need animation, interpolation, defaults, or inheritance control.
- Use native scroll-driven CSS for small scroll-linked reveals and progress indicators.
- Use the View Transitions API for progressive route/detail continuity when the app can tolerate a fallback to instant change or a simple fade.
- Use Popover, dialog, and anchor positioning for lightweight menus, disclosure panels, callouts, and anchored surfaces when the browser support/fallback plan is clear.
- Use responsive images, `aspect-ratio`, `object-fit`, and stable media boxes before reaching for script-based media measurement.
- Use `content-visibility`, lazy loading, and containment for below-fold heavy sections when it will not hide important accessibility or find-in-page content.

Reach for a library only when it owns behavior the platform does not cover well enough for the product job.

## Technique Matrix

| Need | Prefer | Add Library When | Reject When |
|---|---|---|---|
| Nested page alignment | CSS Grid + subgrid | A canvas/editor layout needs measured drag/drop zones | The layout is simple one-dimensional flow |
| Component-level responsiveness | Container queries | The component also needs measured virtualization | The component only changes with page breakpoint |
| Local design tokens | CSS custom properties | A theme editor needs persisted runtime token transforms | Tokens are hard-coded per element |
| Animatable tokens | `@property` + CSS transitions/keyframes | React state must coordinate multiple elements | Browser support or fallback is untested |
| Hero/product reveal | CSS transform/opacity/mask first | GSAP for authored timelines, Motion for state continuity, Three/R3F for real spatial objects | The reveal is decorative and does not prove the product |
| Scroll progress/reveal | Scroll-driven CSS | GSAP ScrollTrigger for pinned, sequenced, scrubbed storytelling | It makes reading or task completion harder |
| Route/detail continuity | View Transitions API or Motion layout transitions | The route system needs React state-aware shared elements | Loading/error/focus states are unclear |
| Menus, sheets, callouts | Popover/dialog + anchor positioning, or Radix/React Aria/Floating UI | Keyboard, modality, collision, portals, or complex focus are product-critical | A static card would be clearer |
| Dense tables/lists | CSS grid areas + overflow containment | TanStack Table/Virtual for sorting, filtering, virtualization | The data can be summarized as proof, not operated on |
| Data visualization | Native SVG + table fallback for simple proof | Chart.js, Recharts, ECharts, D3, visx, Observable Plot, or Vega-Lite for named chart questions and interactions | The chart question, accessible summary, or mobile replacement is missing |
| Forms and validation | Native form semantics + visible state copy | React Hook Form/Zod for complex validation, schemas, async flows | Styling hides labels, errors, or recovery |
| Media proof | Responsive images/video with stable boxes | Video/Rive/Lottie/Three when motion is authored proof | Assets are placeholders or pure atmosphere |
| Heavy below-fold sections | Lazy loading + `content-visibility` + containment | Framework streaming/lazy boundaries for app routes | It delays primary content or breaks accessibility |

## Browser Support And Fallback

Every advanced native primitive needs a named fallback:

- `@supports` gate CSS that is not baseline enough for the target audience.
- Keep the no-support experience readable, operable, and visually stable.
- Prefer instant state changes over broken animation.
- Never hide primary copy, controls, or recovery behind unsupported animation, anchor positioning, or scroll behavior.
- Do not ship smooth scroll, pinned scroll, or route transitions without reduced-motion behavior.

## Library Ownership

Use this language before implementation:

```md
Library ownership
- CSS owns:
- Native API owns:
- Motion owns:
- GSAP owns:
- Three/R3F owns:
- Rive/Lottie/video owns:
- Product libraries own:
- Rejected because:
```

If two tools own the same behavior, simplify. A premium interface usually feels composed because each layer has a job: layout, material, proof, interaction, or state.

## QA Probes

Check these before final delivery:

- Desktop and mobile screenshots show the same product job, not a crushed version of the same layout.
- Components using container queries are tested in narrow, medium, and wide containers.
- Subgrid/grid alignment is visible and does not collapse when text grows.
- View transitions and scroll-driven animations degrade cleanly when unsupported.
- Reduced motion preserves proof and navigation without motion dependence.
- Popovers, dialogs, tooltips, command menus, and anchored surfaces work by keyboard and do not clip offscreen.
- Media boxes are nonblank, stable, and do not cause layout shift.
- Heavy sections do not block first interaction, scroll, or primary content.
- Console is clean after the primary interaction.

## Source Anchors

- MDN documents container queries as a way to apply styles to descendants based on a container's size or style rather than the viewport.
- MDN documents subgrid as a grid value for inheriting parent grid tracks, useful for aligned nested layout.
- MDN documents CSS scroll-driven animations for linking CSS animations to scroll progress or view progress timelines.
- MDN documents the View Transitions API for animated transitions between website views, with feature detection for unsupported browsers.
- MDN documents CSS anchor positioning and Popover for tethered, anchored, and top-layer UI surfaces.
- MDN documents custom properties and `@property` for reusable tokens and typed animatable CSS variables.
- MDN documents `content-visibility` as a rendering control that can improve skipped/offscreen rendering work when used carefully.
