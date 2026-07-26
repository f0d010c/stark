# Prompt-to-build compiler

Use this after `research-synthesis-contract.md`, `design-orchestration.md`, `surface-playbook-matrix.md`, `generation-blueprint-contract.md`, and any matching `implementation-pattern-library.md` pattern. Use it immediately before code generation or a major implementation pass.

The compiler turns design decisions into an implementation directive. It exists to stop the common failure where Stark plans a strong design, then the generated code quietly returns to a generic hero, cards, default fonts, fake data, and decorative motion.

## Required output

```md
Prompt-to-build compiler
- Build target:
- Product object:
- User task:
- Quality target:
- Files to create/edit:
- Component inventory:
- State/data fixtures:
- Library ownership:
- Typography/tokens:
- Choreography/motion hooks:
- Responsive replacements:
- Accessibility hooks:
- QA selectors/evidence hooks:
- Forbidden defaults:
- Implementation directive:
- Acceptance comparison:
```

## Compiler rules

- Every design decision must map to a file, component, state fixture, CSS token, library owner, motion hook, or QA hook.
- Every imported library must appear in the directive with one owner, one fallback, and one evidence probe.
- Every product surface must include one non-happy state unless the surface is purely editorial and the omission is explicit.
- Every public/high-craft surface must name the screenshot-worthy object or workflow before coding.
- Every responsive promise must name a structural replacement, not only a breakpoint.
- Every animation-led surface must name the main object, beat hooks, reduced-motion replacement, and cleanup/offscreen policy.
- Every generated implementation must list at least five forbidden defaults from the current brief.

## Build target

```md
Build target
- Framework/runtime:
- Route or entry file:
- Styling owner:
- Data owner:
- Interaction owner:
- Motion owner:
- Asset owner:
- Browser target:
- Mobile target:
```

If the framework is unknown, choose the smallest implementation that can prove the design:

| Need | Target |
| --- | --- |
| static proof page | HTML/CSS/JS |
| interactive React page | Vite React |
| route/app shell | Next or existing router |
| docs/static content | Astro, Next, or existing docs stack |
| animation-heavy one-off | Vite React or static page with isolated timeline |
| design preview only | local HTML under the repo's preview pattern |

## Component inventory

Convert the surface into named parts:

| Component | Job | State/data | Library owner | QA hook |
| --- | --- | --- | --- | --- |
| HeroProof | shows product object and first proof | selected scenario, failed/success state | Motion for artifact arrival | proof visible desktop/mobile |
| QueueTable | repeated-use work surface | filters, selection, stale/error | TanStack Table if real table behavior exists | sort/filter/select smoke |
| InspectorPanel | detail and editing controls | selected object, dirty/invalid state | Radix/React Aria for overlays only | selection changes inspector |

Do not implement serious surfaces as unnamed sections. Naming components forces ownership.

## State and fixture compile

Before code, write the state shape in plain language or TypeScript:

```md
State/data fixtures
- Records:
- Selected item:
- Loading state:
- Empty state:
- Error/recovery state:
- Permission/blocked state:
- Success/completion state:
- Long text/edge case:
- Units/time/money/status rules:
```

Forbidden:

- `Project Alpha`, `Metric`, `User 1`, `Lorem ipsum`, generic percentages, or fake rows that do not test the UI.
- happy-path-only dashboards, editors, agent runs, forms, docs, checkout, or trust screens.

## Library ownership compile

For each library:

```md
Library owner
- Library:
- Owns:
- Does not own:
- Fallback:
- QA probe:
- Removal rule:
```

Examples:

- Motion owns artifact arrival and selected-panel continuity; it does not own the long scroll story.
- GSAP owns one pinned proof timeline; it does not own button hovers or app state.
- Radix owns dialog/menu focus and keyboard behavior; it does not own visual identity.
- TanStack Table owns sorting/filtering/selection; it does not turn a landing page into a fake dashboard.
- React Hook Form/Zod owns validation and dirty/submitting state; it does not own layout or trust copy.

If two libraries want the same owner, remove one before code.

## Typography and token compile

Write implementable choices:

```md
Typography/tokens
- Display family:
- Body/UI family:
- Mono family:
- Import/loading:
- Numeric rule:
- Type scale:
- Max text measure:
- Surface tokens:
- Semantic state tokens:
- Focus/selection tokens:
- Density/radius/elevation:
- Rejected default palette/type:
```

Do not say "premium typography" or "modern palette" in the implementation directive. Name roles and CSS variables.

## Choreography compile

For motion-heavy work:

```md
Choreography compile
- Main object:
- Beat hooks:
- Trigger model:
- Continuity object:
- Proof frame:
- Reduced-motion replacement:
- Mobile replacement:
- Cleanup/offscreen policy:
- Still-frame QA:
```

Generated code should expose stable refs, classes, data attributes, or component boundaries for these hooks.

## QA selector compile

Add or identify evidence hooks:

- Primary action accessible name.
- Product object/proof locator.
- State toggle or fixture path.
- Mobile replacement locator.
- Reduced-motion path.
- Nonblank media/canvas/video check.
- Focusable overlay/menu/form controls.
- Console/runtime check.
- Screenshot target for desktop and mobile.

The implementation should be testable without fragile pixel guessing.

## Implementation directive

Before coding, produce a direct instruction block:

```md
Implementation directive
Build:
- ...
Use:
- ...
Do not use:
- ...
State/data:
- ...
Responsive:
- ...
Motion:
- ...
QA:
- ...
Acceptance:
- ...
```

The directive should be concrete enough that another agent could implement the same structure without rereading every prior brief.

## Acceptance comparison

After implementation, compare against the compiler output before broader acceptance:

| Compiler decision | Implemented evidence | Status |
| --- | --- | --- |
| Product object visible above fold | screenshot / component / locator | kept / drifted / missing |
| Non-happy state exists | fixture / control / screenshot | kept / drifted / missing |
| Library owner respected | imports / component owner / QA probe | kept / drifted / missing |
| Mobile replacement exists | mobile screenshot / DOM / route | kept / drifted / missing |
| Forbidden defaults removed | code/screenshot inspection | kept / drifted / missing |

If any core decision is missing, run `implementation-review-loop.md` and repair before visual polish.

## Hard fails

- The implementation directive still contains vague instructions like "make it modern", "add animations", "use nice fonts", or "make responsive" without owners and evidence.
- The first code pass can be built without product data or state fixtures.
- A library is listed because it is impressive, not because it owns behavior.
- The selected font, token system, or motion pattern cannot be located in implementation files.
- QA cannot locate primary action, product proof, state switch, mobile replacement, or reduced-motion path.
- The final design would pass even if the product name changed.
