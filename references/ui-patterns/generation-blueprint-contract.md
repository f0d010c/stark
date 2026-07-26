# Generation blueprint contract

Use this after `surface-playbook-matrix.md`, `stack-blueprints.md`, `frontend-technique-matrix.md`, and any required product/motion library playbooks, but before implementation. This contract turns design direction into concrete generator output so the first pass contains product behavior, states, ownership, and QA hooks instead of only a polished shell.

This file is not a replacement for the design director runbook. It is the implementation handoff that makes the runbook executable.

After completing this contract, use `implementation-pattern-library.md` when the surface matches product proof workbench, operational queue cockpit, agent run timeline, editor workbench, trust matrix, docs command manual, animated product story, or data proof panel. The pattern library supplies implementation-shaped file, state, ownership, responsive, QA, and deletion examples.

Immediately before coding serious work, run `prompt-to-build-compiler.md`. It turns this blueprint into a concrete implementation directive with files, component inventory, state fixtures, library owners, typography/tokens, choreography hooks, QA selectors, forbidden defaults, and an acceptance comparison.

## Required output

```md
Generation blueprint
- Surface:
- Stack:
- Files/components to create:
- Main product object:
- Product data/fixtures:
- Required states:
- Structural pattern:
- Component anatomy:
- Implementation pattern:
- Native/browser primitives:
- Product libraries and ownership:
- Motion/visual libraries and ownership:
- Choreography hooks:
- Asset/proof objects:
- Typography implementation:
- Token implementation:
- Responsive replacements:
- Accessibility hooks:
- Performance/fallback hooks:
- QA hooks:
- Deleted defaults:
```

If any line is unknown, pause and derive it from the current surface. Do not fill the contract with generic phrases.

## File and component plan

Before code, name the concrete files and their jobs:

| Surface | Minimum file shape |
| --- | --- |
| Static page | `index.html`, `styles.css`, `script.js`, `assets/*` with semantic sections and progressive enhancement |
| Vite React page/app | `src/app/App.tsx`, `src/features/<surface>/*`, `src/components/ui/*`, `src/data/fixtures.ts`, `src/styles/tokens.css` |
| Next app | route groups, server data boundaries, narrow client islands, route `loading/error/not-found` states |
| Dashboard/operations | feature module for table/queue, detail panel, filters, state fixtures, responsive list replacement |
| Editor/canvas | canvas feature, inspector feature, toolbar/command feature, selection/history state, mobile task replacement |
| Agent run UI | run timeline, artifact inspector, controls, event fixtures, blocked/retry/stop states |
| Cinematic/product proof page | hero object/proof feature, motion timeline hook, proof sections, reduced-motion static frames |

Rules:

- One file cannot own app shell, data, animation, tokens, and all product behavior unless the artifact is intentionally tiny.
- Every visible complex region needs a named component or section job.
- Every data-backed UI needs fixtures with at least one non-happy state.
- Every imported dependency needs one owning file or feature.

## Library implementation contract

Use official library shape, not vague "use animation library" intent.

| Library/API | First-pass owner | Required implementation detail | QA hook |
| --- | --- | --- | --- |
| Motion for React | component continuity, gestures, route/detail or layout transitions | use `motion` components, `layout`/variants/motion values where they avoid React re-renders; `useReducedMotion` or static state for fallback | primary transition smoke, reduced-motion check, no layout jump |
| GSAP/ScrollTrigger | authored timeline, pinned proof, SVG/text choreography | isolate timeline in a hook/module; use scoped selectors and `gsap.matchMedia()` for desktop/mobile and reduced motion; cleanup on unmount | pin does not trap, mobile fallback, reduced motion, console cleanup |
| Three/R3F | inspectable product object or spatial proof | keep text/controls in HTML, cap DPR, lazy-load or poster fallback, adapt quality/performance where practical | nonblank canvas, resize framing, low-motion/low-power fallback, WebGL console |
| Rive | designer-authored state-machine illustration or icon | load a `.riv` with named `stateMachines`, call resize after load, expose state inputs through product state | canvas sharpness, state input smoke, fallback frame |
| Lottie | small authored loop or explainable micro-animation | lazy-load JSON, pause offscreen, no essential text inside animation | nonblank render, pause/reduced motion, network/asset failure fallback |
| View Transitions | route/detail continuity | preserve focus and scroll restoration; fallback to instant change | back/forward/deep-link smoke |
| native scroll CSS | progressive reveal or simple scroll-linked effect | content must remain readable without support; do not hide essential content | unsupported browser fallback, reduced motion |
| Popover/anchor positioning | anchored menus/tooltips/command surfaces | native first when supported, Floating UI only when placement/collision is real behavior | keyboard open/close, collision at narrow width |
| TanStack Table | sorting/filtering/selection/pagination | table owns data operations, not visual card decoration | sort/filter/select smoke, mobile list replacement |
| React Hook Form + Zod | risky/input-heavy forms | schema owns validation; form preserves input and recovery states | validation timing, server error, keyboard/focus |
| Radix/React Aria | accessible primitives | primitive owns behavior, Stark owns anatomy/tokens/copy | keyboard/focus/ARIA smoke |

Library ceiling rule: after listing owners, delete any library that owns no state, interaction, rendering, accessibility, data, or performance behavior.

## Product data and state contract

First-pass generated UI must include data and states that prove the product job:

- At least 5 realistic records for dashboards, CRMs, analytics, queues, docs examples, or agent timelines.
- At least one empty, loading, error, permission, stale, blocked, disabled, selected, or success state when the surface can encounter it.
- Domain vocabulary in labels, rows, helper text, and CTAs.
- Dates, counts, money, units, or statuses formatted consistently when relevant.
- No "User 1", "Project Alpha", "Lorem ipsum", "Metric", or generic fake SaaS labels unless the product genuinely uses placeholders.

## Choreography hook contract

For animation-led work, code must expose named hooks or data attributes for the storyboard:

```md
Choreography hooks
- Scene root:
- Beat 1 trigger:
- Beat 2 trigger:
- Primary object ref:
- Proof surface ref:
- Reduced-motion replacement:
- Mobile replacement:
- Cleanup:
```

Avoid:

- animations attached to random class names with no scene ownership.
- scroll effects that control product-critical content without fallback.
- multiple motion libraries controlling the same transform.
- motion that ends with important UI misaligned or unreadable.

## Typography and token implementation

The generator must name where type and tokens live:

- font import/load strategy.
- display/body/mono family variables.
- tabular number rule for data-heavy UI.
- type scale and max measure for dense panels and long copy.
- semantic color tokens for background, surface, text, accent, danger, warning, success, focus, selection, and disabled.
- radius/border/shadow rules by surface rather than one radius everywhere.
- hover/focus/pressed/selected/disabled/busy states for controls.

## Responsive replacement contract

Do not promise "responsive" without naming the replacement:

| Desktop pattern | Narrow replacement |
| --- | --- |
| data table | priority-column cards or horizontally bounded table region |
| split pane | stacked detail, drawer, or route-level detail |
| inspector | bottom sheet or focused edit screen |
| pinned scroll story | static proof frames or short unpinned sequence |
| 3D/WebGL hero | poster frame, simplified canvas, or static product proof |
| command palette | full-screen search sheet |
| multi-column pricing | plan carousel or stacked comparison with sticky selected summary |

## QA hook contract

Before final delivery, the generated app must be testable. Add or identify:

- semantic landmarks and accessible names for primary controls.
- stable selectors or labels for critical interactions.
- a desktop viewport target and a mobile viewport target.
- primary interaction smoke path.
- reduced-motion path when motion exists.
- nonblank media/canvas/image check when media exists.
- console/network failure check when assets or libraries are loaded.
- one state-switching control or fixture path for non-happy states when possible.

## Deleted defaults

Every generation blueprint must name at least three defaults removed from the first pass, such as:

- centered hero plus three feature cards.
- untouched shadcn/Radix visual styling.
- generic dashboard cards without table/detail/state.
- decorative animated blobs or pasted floating props.
- all-purple/blue gradient palette.
- Inter or Space Grotesk as unexamined default.
- fake data that could belong to any SaaS.
- animation library used for simple opacity fades.
- mobile layout that only shrinks the desktop.

## Stop conditions

Do not implement until the blueprint proves:

- the main object appears in file/component/data decisions.
- every chosen library has an owner and QA hook.
- responsive behavior includes replacements, not only breakpoints.
- typography and tokens are implementable, not mood words.
- at least one non-happy state is represented for product surfaces.
- animation-led work has choreography hooks, fallbacks, and cleanup.
- the deleted defaults address the specific brief, not a generic ban list.

## Source notes

- Motion for React documents `motion` components, layout animation, motion values, SSR compatibility, and avoiding React re-renders for animated values.
- GSAP documents `gsap.matchMedia()` for breakpoint/reduced-motion conditions, selector scoping, cleanup, and reverting matched animations.
- Rive web runtime documents named `stateMachines`, canvas setup, resize after load, and runtime package choices.
- React Three Fiber documents adaptive DPR/performance regression and quality changes for demanding scenes.
