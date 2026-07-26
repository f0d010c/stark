# Stack blueprints

Use this after `web-implementation-tracks.md` chooses the stack. Blueprints define file ownership, styling, motion, assets, and QA so the implementation can survive beyond a pretty first screen.

After choosing this blueprint, read `frontend-technique-matrix.md` before adding product or motion libraries. Name the native browser primitives, library owners, fallbacks, and QA probes in the blueprint.

When the blueprint includes expensive motion, media, WebGL/canvas, data visualization, large lists, or multiple libraries, read `performance-budget-contract.md` and add the critical path, budgets, fallbacks, pause/offscreen policy, and performance evidence to the blueprint.

When the stack uses product libraries such as Radix, React Aria, shadcn/ui, TanStack Table/Query, React Hook Form, Zod, Floating UI, cmdk, or Embla, read `product-library-playbooks.md` and `product-library-composition.md` after the frontend technique matrix and before implementation. Name ownership, token/theme mapping, rejected defaults, and QA probes in the blueprint.

## Blueprint brief

```md
Stack blueprint
- Stack:
- Why it fits:
- File structure:
- Component ownership:
- Product library ownership:
- Product library composition:
- Frontend technique ownership:
- Styling strategy:
- Motion strategy:
- Performance budget:
- Asset strategy:
- State/data model:
- QA commands:
- Avoid:
```

## Static HTML/CSS/JS

Use for simple landing pages, docs fragments, design previews, small animation demos, and prototypes without persistent app state.

File structure:

```text
index.html
styles.css
script.js
assets/
```

Ownership:

- HTML owns semantic structure and real text.
- CSS owns layout, type, materials, responsive behavior, and simple motion.
- JS owns progressive enhancement only: intersection observers, small canvas, pointer effects, tabs, disclosure.

Motion:

- CSS transitions/keyframes first.
- Native scroll-driven CSS when progressive enhancement is acceptable.
- Small vanilla JS only when interaction needs state.

QA:

- open file or serve locally
- desktop/mobile screenshot
- console check
- horizontal overflow check
- reduced-motion check

Avoid:

- large dependency chains
- fake app state
- complicated JS class systems
- essential content that only appears after JS

## Vite + React

Use for animated product pages, dashboards, editors, command palettes, inspectors, filters, simulated app UI, and reusable interactive components.

File structure:

```text
src/
  app/
    App.tsx
    routes-or-shell.tsx
  features/
    run-timeline/
    artifact-inspector/
    command-palette/
  components/
    ui/
    layout/
  data/
    fixtures.ts
  styles/
    tokens.css
    global.css
```

Ownership:

- `App` wires shell and feature modules only.
- `features/*` own product behavior and state.
- `components/ui/*` own reusable controls.
- `data/*` owns realistic fixtures and state examples.
- CSS/Tailwind tokens own visual system.

Motion:

- Motion for component state, layout continuity, gestures, sheets, command palettes, route/detail transitions.
- CSS for hover/focus/simple reveal.
- GSAP only for one authored timeline or pinned proof section.
- LazyMotion when Motion bundle size matters.

QA:

- `npm run dev` / build if available
- browser screenshot desktop/mobile
- interaction smoke for primary state
- console check
- focus and reduced-motion check

Avoid:

- one giant `App.tsx`
- component state spread across unrelated sections
- using GSAP for card fades
- decorative React state that does not change the user job

## Next.js App Router

Use for marketing + app hybrids, SEO pages, auth/data-backed product surfaces, docs/products at scale, server data, and routed app shells.

File structure:

```text
app/
  layout.tsx
  page.tsx
  (marketing)/
  (app)/
  api/
components/
features/
lib/
styles/
```

Ownership:

- Server Components own data fetching, static content, and non-interactive layout.
- Client Components own interactivity, browser APIs, Motion, forms, command palettes, and local state.
- Keep `"use client"` boundaries narrow.
- App routes preserve the route map, current-location model, deep-link state, and route states from `navigation-information-architecture.md`.
- Co-locate loading/error/empty UI with the route or feature that owns the state.

Motion:

- CSS for static/server-rendered content.
- Motion in Client Components only.
- View Transitions or route continuity only with fallback and focus/scroll handling.

QA:

- build/lint if project scripts exist
- route navigation smoke
- direct deep-link, refresh, back/forward, focus restoration, and scroll restoration smoke when the app has nested routes
- loading/error route state where relevant
- hydration/console check
- mobile nav and overflow

Avoid:

- marking every component `"use client"`
- putting server-only data inside client state without a reason
- hiding loading/error/permission states behind route transitions
- choosing Next for a one-page static prototype

## Astro

Use for content-heavy sites, docs, editorial pages, mostly static marketing, and pages with small islands of interactivity.

File structure:

```text
src/
  pages/
  layouts/
  components/
  islands/
  content/
  styles/
```

Ownership:

- Astro pages/layouts own static HTML and content.
- Islands own isolated interactive widgets.
- Content collections own docs/editorial material.
- Keep hydration directives scoped to the widgets that need them.

Motion:

- CSS for page rhythm and reveal.
- Islands for command palette, search, filters, comparison, or demo widgets.
- Avoid whole-page client hydration unless the page is actually an app.

QA:

- build if script exists
- content route checks
- island interaction smoke
- mobile nav and code overflow

Avoid:

- using Astro for dense app UI with state everywhere
- hydrating every component
- hiding content behind client-only widgets

## Vite + React + GSAP

Use when the core page needs an authored timeline: pinned product story, SVG path choreography, text staging, or scroll-scrubbed proof.

Structure:

- Keep GSAP code in `features/<story>/timeline.ts` or a hook.
- Keep timeline selectors scoped to the feature root.
- Keep content and controls as React components.
- Provide static stacked sections for reduced motion/mobile fallback.

QA:

- verify pin duration is not trapping the user
- mobile fallback
- reduced motion
- console cleanup / timeline cleanup on unmount

Avoid:

- mixing many ad hoc global selectors
- multiple pinned stories unless it is a campaign page
- scroll hijacking on dashboards/docs/editors

## Vite + React + R3F / Three

Use when the product object is inspectable in 3D or the hero scene is the proof.

Structure:

```text
features/product-object/
  ProductScene.tsx
  ProductFallback.tsx
  materials.ts
  controls.ts
```

Rules:

- Canvas owns 3D only.
- HTML/CSS owns text, controls, labels, and CTAs.
- Cap DPR.
- Lazy-load scene or show poster fallback.
- Pause expensive rendering when offscreen when practical.

QA:

- nonblank canvas desktop/mobile
- resize/framing check
- reduced-motion or low-performance fallback
- console/WebGL errors

Avoid:

- WebGL behind generic hero cards
- essential UI text inside canvas
- heavy post-processing without a visible payoff

## Next / Astro docs platform

Use when the product is documentation, SDK, API, CLI, or developer education.

Ownership:

- docs content owns hierarchy, examples, and versioning.
- command/search palette owns navigation.
- code blocks own copy state and overflow.
- route transitions must preserve orientation.

QA:

- keyboard search
- copy button state
- mobile sidebar/nav
- code block overflow
- accessible headings and landmarks

Avoid:

- cinematic scroll hijack
- tiny code labels
- hiding search behind animation

## Electron/Tauri web desktop shell

Use when the UI is web tech inside a desktop runtime.

Ownership:

- desktop shell owns window chrome, native menu, file permissions, and platform affordances.
- web app owns product workflow.
- choose desktop archetype before web layout.

Rules:

- Avoid marketing-page spacing in desktop productivity tools.
- Use keyboard shortcuts and command palette when appropriate.
- Respect platform menus, drag regions, safe areas, and window states.

QA:

- desktop viewport sizes
- keyboard shortcuts
- menu/window behavior where possible
- offline/error/permission states

Avoid:

- browser-only assumptions
- fake native chrome
- ignoring file permission/recovery states
