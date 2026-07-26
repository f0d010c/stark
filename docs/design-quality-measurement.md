# Stark design quality measurement

Use this rubric to decide whether Stark is improving actual generated UI quality, not only adding more instructions.

Runtime scoring guidance lives in `references/ui-patterns/design-quality-metrics.md`.

When score or gate evidence shows a design is below target but not broken, `references/ui-patterns/quality-calibration-ladder.md` chooses the next one-level-up repair by surface and weakest dimension.

Batch dogfooding guidance lives in `references/ui-patterns/dogfood-generation-loop.md`, with standard reusable batches in `references/ui-patterns/dogfood-batch-matrix.md` and `evals/dogfood-batches.json`. Use them when testing whether Stark improvements raise actual generated-output quality across multiple surfaces.

Research-backed design work should use `references/ui-patterns/research-synthesis-contract.md` after reference boards so sources become concrete build decisions and evidence requirements instead of moodboard flavor.

Serious implementation work should use `references/ui-patterns/prompt-to-build-compiler.md` immediately before code so design decisions become concrete components, fixtures, library owners, QA selectors, forbidden defaults, and acceptance comparisons.

Score each dimension from 1 to 5.

## Dimensions

| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| Platform idiom | Ignores platform conventions | Uses some native patterns | Feels native or intentionally branded with clear tradeoffs |
| Product specificity | Generic template after logo swap | Some domain-specific labels/states | Layout, states, assets, and controls express the product job |
| State coverage | Happy path only | Includes common empty/loading/error states | Includes permission, recovery, success, edge, and repeated-use states |
| Task ergonomics | Attractive but hard to use repeatedly | Main path and common states work | Frequency, risk, controls, speed path, prevention, recovery, and evidence tasks are explicit |
| Hierarchy and scan speed | Everything competes | Main areas are readable | A returning user can scan status, risk, owner, and next action quickly |
| Originality | Palette-only difference | Some distinctive composition | Concept seed changes layout, component anatomy, and state treatment |
| Copy quality | Placeholder or generic hype | Mostly clear labels | Hero, CTA, proof labels, states, risk, and recovery copy are concrete |
| Typography personality | Default stack or arbitrary fonts | Chosen display/body roles | Type roles, scale, density, and fallback are justified by the surface |
| Motion restraint | Decoration or missing fallback | Useful transitions with some checks | Motion clarifies continuity/feedback and includes reduced-motion behavior |
| Choreography behavior | Pasted effects or copied reference props | Named beats with partial trigger/fallback planning | Scenes, triggers, states, ownership, timing, controls, fallbacks, and QA are defined before code |
| Responsive containment | Breaks or overlaps | Works at common widths | Uses stable constraints and adapts density, controls, and hierarchy |
| Asset realism | Placeholder or decorative images | Some relevant media | Assets prove, explain, or operate as part of the product experience |
| Visual tokens | Default palette and spacing | Some roles defined | Color, spacing, radius, state, border, shadow, and density roles fit the surface |
| Accessibility | Unchecked | Basic contrast/semantics | Keyboard, focus, contrast, labels, and reduced motion are planned/tested |
| Dependency restraint | Adds packages for vibes | Dependencies loosely justified | Libraries are chosen for concrete behavior with rejection rationale |

## Passing bar

- Any generated UI should average at least 3.5 across relevant dimensions.
- Original/high-craft work should score at least 4 in originality, typography, hierarchy, and asset realism.
- Production app work should score at least 4 in platform idiom, state coverage, responsive containment, accessibility, and dependency restraint.
- A roadmap item is worth doing only if it raises one or more dimensions in a measurable way.

## Evidence

Prefer evidence over taste claims:

- decision briefs
- layout sketches
- component anatomy/state tables
- desktop and mobile screenshots
- visual QA notes
- accessibility notes
- dependency/motion rejection rationale

## Prompt eval coverage

Use `evals/design-quality-prompts.json` alongside the trigger evals in `evals/evals.json`.

The design-quality evals check whether Stark guidance covers:

- design orchestration
- pattern selection
- animation direction
- choreography state machines
- motion-library playbooks
- typography systems
- copy systems
- execution protocol
- component anatomy
- material systems
- visual token recipes
- asset production
- icon and illustration systems
- visual QA
- usability states
- task ergonomics
- reference transformation
- responsive containment
- accessibility
- performance
- anti-collage rewrites for animation pages that look pasted together
- data visualization library selection when the product object is data
- visual QA workflow with screenshot critique, repair, and re-check
- stack blueprints and frontend component architecture for stateful web work
- reference-board generation for research-led design
- motion recipes with accessibility, performance traps, and removal criteria
- typography strategy across web, native, branded, dense, and cross-platform surfaces
- runtime design-quality metrics, hard fail gates, evidence requirements, and repair priority
- dogfood generation loops that produce representative surfaces, evidence, rendered quality gates, repairs, feedback memory entries, and gallery decisions

The file is validated by `tests/test_design_quality_evals.py` so future changes do not drop coverage of the higher-craft design goal.
