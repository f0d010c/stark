# Stark next-level design roadmap

Goal: make Stark behave less like a style checklist and more like a compact design studio plus senior frontend engineer.

Stark should guide an agent through concept, UX, reference analysis, layout, typography, assets, motion, implementation, and visual QA before code ships. The end state is not "prettier defaults"; it is a system that reliably produces product-specific, original, interactive, accessible interfaces using the same tools real UI/UX designers and frontend teams use.

## Operating principle

Stark should stay a design-routing plugin, not become a giant demo app repo.

Keep runtime guidance compact:

- Root and platform skills should act as routers and contracts.
- Reference files should be narrow, measurable, and loaded only when relevant.
- Full generated apps should stay out of the runtime bundle.
- Proof should be kept as curated screenshots, prompts, and small reference snippets.
- New libraries should be recommended only when they unlock product behavior the platform cannot already provide.

## North star

For every serious UI generation, Stark should produce:

1. Product job and user flow.
2. Reference extraction from real shipped patterns.
3. Concept seed and composition archetype.
4. Typography personality and token system.
5. Layout sketch and component anatomy.
6. Asset plan and generated/real media strategy.
7. Motion choreography with the right library or native API.
8. Implementation track and dependency risk.
9. Browser visual QA and critique loop.
10. Final quality report with screenshots, accessibility, responsiveness, and interaction proof.

## Phase 0 - Measurement and Governance

Before adding more creative material, Stark needs a way to measure whether designs got better.

Add:

- `docs/design-quality-measurement.md`
- `docs/reference-governance.md`
- `references/ui-patterns/design-quality-metrics.md`
- `evals/quality-evals.json`
- `tests/test_quality_evals.py`

Measured dimensions:

- platform idiom
- product specificity
- state coverage
- hierarchy and scan speed
- originality
- typography personality
- motion restraint
- responsive containment
- asset realism
- accessibility
- dependency restraint

Quality gate:

- Roadmap work must improve at least one measured dimension.
- New references must cover a missing failure mode, replace duplication, or unlock a new eval.
- Runtime files must stay small enough that agents can load only the relevant guidance.

## Phase 1 - Design Studio Brain

### 1.1 Reference board workflow

Add a Stark workflow that creates a reference board before designing.

New files:

- `references/ui-patterns/reference-board-workflow.md`
- `commands/stark-reference-board.md`

Required output:

```md
Reference board
- Product category:
- 3-5 references:
- Structural lessons:
- Visual lessons:
- Motion lessons:
- State/recovery lessons:
- What not to copy:
```

Quality gate:

- At least three structural lessons must influence the layout sketch.
- References can teach interaction and hierarchy, but Stark must not copy trade dress, brand assets, exact layouts, or proprietary screens.

### 1.2 Concept options as standard

Upgrade `originality-engine.md` so original work always considers three routes:

- conservative native
- product-specific
- memorable risk

Add a selection rule:

- Choose product-specific by default.
- Choose conservative native for high-risk admin, finance, healthcare, or compliance surfaces.
- Choose memorable risk for campaign, portfolio, launch, entertainment, and high-craft marketing surfaces.

Quality gate:

- The chosen option must change the layout sketch, not only the palette.

### 1.3 Component anatomy library

Add recipes that describe the internal anatomy of complex surfaces.

New file:

- `references/ui-patterns/component-anatomy.md`

Initial entries:

- command palette
- run timeline
- artifact inspector
- transfer lane
- permission matrix
- pricing/plan table
- collection wall
- now-playing stage
- light table
- document editor workbench
- onboarding runway
- evidence/inspection bay

Each anatomy entry:

```md
Component anatomy
- Purpose:
- Required parts:
- Optional parts:
- States:
- Keyboard/mouse behavior:
- Responsive behavior:
- Visual traps:
```

Quality gate:

- Any complex generated surface must include at least one anatomy-backed component.

## Phase 2 - Typography, Tokens, and Visual Systems

### 2.1 Typography as a first-class decision

The new typography gate should become mandatory for original, web, and branded desktop work.

Enhance:

- `references/ui-patterns/design-recipes.md`
- `references/web-fonts.md`
- `assets/font-pairs.md`

Add:

- `references/ui-patterns/typography-systems.md`

Include:

- display/body/mono roles
- free versus licensed stacks
- native platform type exceptions
- variable font axis use
- type scale by surface
- line-length rules
- dense app chrome typography
- accessibility and zoom rules

Quality gate:

- No unchosen fallback stacks like `system-ui`, Georgia, or Inter unless the platform or brief explicitly justifies them.
- Every design must name the type personality and banned fallback.

### 2.2 Token kits by design direction

Current token bundles are useful, but Stark needs product-specific token kits.

Add token bundles:

- `assets/tokens/stark-command-deck.json`
- `assets/tokens/stark-archive-index.json`
- `assets/tokens/stark-light-table.json`
- `assets/tokens/stark-ledger.json`
- `assets/tokens/stark-media-stage.json`
- `assets/tokens/stark-cinematic-proof.json`

Quality gate:

- Token export tests must cover every new token bundle.
- Every bundle must include color, typography, spacing, radius, border, motion, and state tokens.

### 2.3 Visual texture and material library

Add implementation-ready guidance for:

- grain/noise overlays
- paper/ink systems
- glass/native material restraint
- shadows versus tonal elevation
- grid/rule systems
- data ink
- product media frames
- glow systems without generic orbs

New file:

- `references/ui-patterns/material-systems.md`

Quality gate:

- Material choice must come from the concept seed, not trend language.

## Phase 3 - Motion and Interaction Engine

Stark already has motion budget guidance. The next level is choosing libraries and APIs as production tools, with examples and rejection rules.

Primary sources to track:

- Motion for React docs: https://motion.dev/docs/react
- GSAP ScrollTrigger docs: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- MDN View Transition API: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- MDN CSS scroll-driven animations: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- Lenis docs: https://www.lenis.dev/
- three.js docs: https://threejs.org/docs/
- React Three Fiber docs: https://r3f.docs.pmnd.rs/
- Rive web runtime docs: https://rive.app/docs/runtimes/web
- Lottie web: https://github.com/airbnb/lottie-web
- dotLottie web: https://github.com/LottieFiles/dotlottie-web
- Chart.js: https://www.chartjs.org/
- Apache ECharts: https://echarts.apache.org/
- D3: https://d3js.org/
- visx: https://visx.airbnb.tech/
- Vega-Lite: https://vega.github.io/vega-lite/
- Observable Plot: https://observablehq.com/plot/
- Theatre.js: https://www.theatrejs.com/

### 3.1 Motion library decision matrix

Add:

- `references/ui-patterns/motion-library-matrix.md`

Decision matrix:

| Tool | Use for | Avoid for | Required checks |
|---|---|---|---|
| CSS transitions/keyframes | hover, focus, disclosure, small loops | layout continuity, complex sequences | reduced motion, no layout thrash |
| Motion for React | component state, layout transitions, route/detail continuity, command palettes, sheets, modals | pinned scroll stories, heavy SVG choreography | `LazyMotion` where useful, reduced motion |
| GSAP ScrollTrigger | pinned storytelling, scrubbed timelines, SVG/text choreography | dashboards, forms, docs, checkout | one pinned section max unless campaign, mobile fallback |
| View Transitions API | route/detail shared transitions, galleries, docs/app shells | critical error/loading states, unsupported fallback gaps | feature detection and fallback |
| Native scroll-driven CSS | lightweight reveal/progress/parallax | critical interactions without fallback | `@supports`, reduced motion |
| Lenis | brand/editorial scroll feel | dashboards, docs, forms, editors, admin | opt-out/reduced motion, no nested scroll issues |
| Three.js/R3F | hero object, product configurator, immersive scene, spatial proof | simple decoration, dense forms, low-end mobile | nonblank canvas, fallback image, performance budget |
| Rive | interactive icons/illustrations/state machines | data-heavy UI, inaccessible essential state | pause/reduced motion, state-machine mapping |
| Lottie | designer-authored vector loops and empty states | complex UI state or text-heavy animation | file size, renderer choice, pause/reduced motion |
| Chart.js | simple standard charts | complex custom interaction | labels, truthful scales, responsive containers |
| ECharts | dashboards, large data, rich chart interaction | simple static charts or tiny bundles | data-size/performance budget, accessible summary |
| visx/D3 | bespoke React data visualization | simple static charts | labels, tooltips, keyboard/ARIA alternatives |
| Vega-Lite/Observable Plot | declarative exploratory charts | highly branded custom chart systems | data semantics, scale clarity |
| Theatre.js | cinematic keyframed 3D/UI stories | ordinary app transitions | deterministic playback, reduced-motion alternative |

Quality gate:

- Every non-trivial motion plan must state: budget, techniques, library/API, why it fits, reduced-motion behavior, mobile fallback, rejected alternatives.
- Motion should default to native CSS/platform APIs, then Motion for React app UI, then GSAP/Three/Rive/Lottie/Theatre only for clear specialist needs.

### 3.2 Motion recipes

Add implementation examples:

- `references/motion-recipes/layout-transition.md`
- `references/motion-recipes/command-palette-motion.md`
- `references/motion-recipes/run-timeline-arrival.md`
- `references/motion-recipes/route-view-transition.md`
- `references/motion-recipes/pinned-product-story.md`
- `references/motion-recipes/native-scroll-reveal.md`
- `references/motion-recipes/r3f-product-object.md`
- `references/motion-recipes/rive-state-icon.md`

Each recipe:

```md
Motion recipe
- Product job:
- Library/API:
- Minimal code:
- Accessibility:
- Performance traps:
- When to remove:
```

Quality gate:

- Motion recipes must include reduced-motion handling.
- Recipes for Three/R3F must include a screenshot/canvas-pixel verification note.

## Phase 4 - Asset and Media Production

### 4.1 Asset production pipeline

Add:

- `references/ui-patterns/asset-production-pipeline.md`

Cover:

- when to use generated bitmap images
- when to use CSS/SVG
- when to use real screenshots
- when to use Rive/Lottie
- when to use Three.js
- transparent cutouts
- texture/material studies
- icon systems
- product proof mockups
- attribution and license tracking

Quality gate:

- No placeholder images.
- Every asset must support proof, trust, comprehension, or art direction.

### 4.2 Icon and illustration systems

Add:

- `references/ui-patterns/icon-illustration-systems.md`

Cover:

- platform icons: SF Symbols, Segoe Fluent Icons, Material Symbols
- lucide for web controls where appropriate
- custom SVG quality checklist
- icon stroke/fill consistency
- empty-state illustration anatomy
- when to use Rive/Lottie instead of static icons

Quality gate:

- Icons must be audited for metaphor, stroke/fill style, size, color, alignment, and state.

## Phase 5 - Frontend Implementation Tracks 2.0

### 5.1 Stack blueprints

Enhance `web-implementation-tracks.md` with stack blueprints:

- static HTML/CSS/JS
- Vite + React + Motion
- Vite + React + GSAP
- Vite + React + R3F
- Next + View Transitions
- Astro + islands
- Electron/Tauri web desktop shell

Each blueprint:

```md
Stack blueprint
- Install:
- File structure:
- Component ownership:
- Styling strategy:
- Motion strategy:
- Asset strategy:
- QA commands:
- Avoid:
```

Quality gate:

- React app generations should avoid one giant `App` component.
- Dependencies must be justified by behavior, not decoration.

### 5.2 Component implementation standards

Add:

- `references/ui-patterns/frontend-component-standards.md`

Cover:

- app shell ownership
- feature modules
- reusable primitives
- data/state helpers
- table/list/detail patterns
- command palette data model
- inspector state model
- form validation state
- keyboard shortcuts
- responsive containment

Quality gate:

- Complex apps need component architecture plan before code.

## Phase 6 - Visual QA and Design Critique Loop

### 6.1 Browser QA workflow

Add:

- `references/ui-patterns/visual-qa-workflow.md`

Required QA:

- desktop screenshot
- mobile screenshot
- horizontal overflow check
- font load check
- reduced-motion check
- console error check
- interaction smoke test
- canvas/image nonblank check when relevant

Quality gate:

- Stark should not final-answer on frontend work without screenshots or an explicit blocker.

### 6.2 Design critique rubric

Upgrade `ui-audit-rubric.md` with a design-review loop:

```md
Design critique
- First impression:
- Main object clarity:
- Typography:
- Composition:
- Density:
- Motion:
- Assets:
- State coverage:
- Platform fit:
- One fix before shipping:
```

Quality gate:

- Every generated design should receive at least one critique pass and one concrete fix.

## Phase 7 - Evals and Measurement

### 7.1 Visual prompt evals

Expand `evals/evals.json` with prompts that test:

- original desktop app generation
- motion library selection
- typography personality
- component anatomy
- layout sketch
- anti-default rewrite
- visual QA requirement
- reference board generation
- rejection of unnecessary animation libraries
- reduction of false-positive design triggers for non-UI programming tasks

### 7.2 Golden design prompts

Add:

- `evals/design-quality-prompts.json`

Example prompts:

- "Build a desktop file sync app that does not look like a settings panel."
- "Create a developer tool landing page with Motion for React layout continuity but no GSAP."
- "Design an AI agent run UI with a run timeline, artifact inspector, and blocked permission state."
- "Make a music desktop app where the selected album drives the content surface."
- "Use Three.js only if the product object deserves it; otherwise choose a simpler asset system."

### 7.3 Regression artifacts

Add:

- `design-previews/`
- `assets/screenshots/stark-roadmap/`

Keep only curated screenshots in git. Avoid large generated app folders.

Quality gate:

- Every major design-system change should include one visual proof screenshot.
- Visual proof must include at least desktop and mobile when the target is web, and an explicit platform state when the target is native.

## Phase 8 - Packaging and Governance

### 8.1 Keep runtime bundle lean

Do not ship heavy examples or generated apps in the marketplace bundle unless they are reference screenshots or small docs.

Runtime-safe:

- skills
- references
- assets/tokens
- curated screenshots
- helper scripts

Local-only:

- full demo apps
- Playwright artifacts
- temporary screenshots
- generated asset experiments

### 8.2 Versioned design knowledge

Add release checklist:

- platform currency check
- library currency check
- token export tests
- SkillForge lint/smoke
- design preview screenshot update
- README example update

## Proposed milestone order

### v0.7 - Originality and recipe system

- Add design-quality measurement and reference governance docs.
- Finish originality engine, desktop archetypes, design recipes, anti-default contrasts.
- Add typography systems.
- Add component anatomy.
- Add eval prompts for concept seed, sketch, and typography.

### v0.8 - Motion and interaction engine

- Add motion library matrix.
- Add motion recipes for Motion, GSAP, View Transitions, native scroll CSS, Lenis.
- Add reduced-motion QA requirements.
- Add visual proof screenshots.

### v0.9 - Asset and visual production

- Add asset production pipeline.
- Add icon/illustration systems.
- Add Rive/Lottie/Three guidance.
- Add generated asset QA.

### v1.0 - Build-quality frontend system

- Add stack blueprints.
- Add component implementation standards.
- Add visual QA workflow.
- Add design critique loop.
- Add golden design prompt evals.

## Definition of "next level"

Stark reaches the next level when a generated UI:

- cannot be mistaken for a generic AI template after swapping the logo
- has a visible main object, state, and product thesis
- uses typography intentionally
- chooses motion libraries only when they serve the product
- includes real states, not only the happy path
- has assets that prove or explain the product
- passes desktop/mobile screenshot review
- includes reduced-motion and accessibility behavior
- feels implementable by a senior frontend engineer
