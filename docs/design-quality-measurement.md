# Stark design quality measurement

Use this rubric to decide whether Stark is improving actual generated UI quality, not only adding more instructions.

Score each dimension from 1 to 5.

## Dimensions

| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| Platform idiom | Ignores platform conventions | Uses some native patterns | Feels native or intentionally branded with clear tradeoffs |
| Product specificity | Generic template after logo swap | Some domain-specific labels/states | Layout, states, assets, and controls express the product job |
| State coverage | Happy path only | Includes common empty/loading/error states | Includes permission, recovery, success, edge, and repeated-use states |
| Hierarchy and scan speed | Everything competes | Main areas are readable | A returning user can scan status, risk, owner, and next action quickly |
| Originality | Palette-only difference | Some distinctive composition | Concept seed changes layout, component anatomy, and state treatment |
| Typography personality | Default stack or arbitrary fonts | Chosen display/body roles | Type roles, scale, density, and fallback are justified by the surface |
| Motion restraint | Decoration or missing fallback | Useful transitions with some checks | Motion clarifies continuity/feedback and includes reduced-motion behavior |
| Responsive containment | Breaks or overlaps | Works at common widths | Uses stable constraints and adapts density, controls, and hierarchy |
| Asset realism | Placeholder or decorative images | Some relevant media | Assets prove, explain, or operate as part of the product experience |
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
