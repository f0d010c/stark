# Layout precision system

Use this after `composition-system.md` and before `spatial-rhythm-density-system.md` and `visual-token-recipes.md` when the design needs to stop feeling loose, cheap, crowded, accidental, or slightly generated.

Composition decides the big picture. Layout precision decides whether the pixels feel intentional: grid, alignment, spacing rhythm, optical balance, adaptive panes, hit targets, text measures, media crop rules, and responsive reflow.

Source anchors:

- Material Design layout guidance treats grids, margins, gutters, spacing, scale, and adaptive behavior as a system for hierarchy and consistency: https://m2.material.io/design/layout/understanding-layout.html
- Material responsive layout describes breakpoints, columns, margins, gutters, and reflow across screen sizes: https://m1.material.io/layout/responsive-ui.html
- Apple HIG layout guidance emphasizes clear hierarchy, alignment, spacing, and adapting content to the available space: https://developer.apple.com/design/human-interface-guidelines/layout
- W3C WCAG Reflow requires content to adapt without loss of information or function, with data tables as a valid two-dimensional exception when contained: https://w3c.github.io/wcag/understanding/reflow.html

## Layout precision brief

```md
Layout precision
- Surface:
- Density:
- Grid/container:
- Pane model:
- Alignment spine:
- Spacing rhythm:
- Text measure:
- Media/object frame:
- Control and hit-target rule:
- Adaptive breakpoints:
- Overflow/reflow plan:
- Optical balance adjustment:
- QA checks:
```

If this brief cannot be filled, the design is not ready for implementation.

## Grid and container choice

| Grid | Use for | Must include | Avoid |
|---|---|---|---|
| Single column | essays, docs articles, settings groups, mobile flows | max text measure, section spacing, inline actions | full-width paragraphs on desktop |
| 12-column page grid | marketing, product pages, docs homes, dashboards | container max, margins, gutters, section alignment | arbitrary card widths |
| Split pane | master/detail, editors, inspectors, docs with TOC | fixed/flexible pane rules, minimum widths, collapse point | equal halves when one side is clearly primary |
| Workbench grid | editors, agent runs, devtools, dashboards | toolbar, main work area, inspector/status, scroll owners | nested cards pretending to be layout |
| Matrix grid | pricing, permissions, comparison, plans, data | aligned axes, row/column labels, responsive replacement | card grids for comparison-heavy decisions |
| Object stage | cinematic/product proof | object frame, copy frame, proof frame, next-section hint | floating props without alignment logic |
| Feed/list grid | marketplaces, logs, docs indexes | repeatable item rhythm, selected state, pagination/loading | masonry unless content truly benefits |

Name one primary grid. Use at most one secondary grid on a single screen unless the page is intentionally editorial.

## Spacing rhythm

Spacing must communicate grouping:

- Tight: 4-8px for label/value, icon/text, checkbox/label, chip contents.
- Related: 12-16px for controls in a toolbar, fields in a group, row contents.
- Grouped: 20-32px for form groups, card internals, panel sections.
- Section: 48-96px for page sections, adjusted by density and proof needs.
- Editorial/cinematic: can break the scale, but only with a repeated rhythm and clear focal path.

Do not use one universal gap across the whole UI. A page with `gap-6` everywhere usually feels generated.

## Alignment spine

Every screen needs an alignment spine:

- Text spine: headings, paragraphs, labels, and captions share a left edge or deliberate offset.
- Data spine: numbers align by decimal/tabular figures; units are consistent.
- Control spine: primary controls align with the content they affect.
- Object spine: media/product object aligns to a grid or intentionally breaks it once.
- Nav spine: nav, title, and active content agree on the current route.

Misalignment is allowed only when it creates emphasis and is repeated as a rule.

## Pane and scroll ownership

Before coding, decide which region scrolls:

- Page scroll: marketing, docs articles, simple forms.
- Main pane scroll: dashboards, admin, workbenches, app shells.
- List scroll + detail fixed: triage, inboxes, master/detail.
- Canvas pan/zoom: editors, maps, whiteboards.
- Internal scroll: tables, code blocks, chip rows, long inspectors.

Do not let the browser body become the accidental scroll owner for dense tools.

## Text measure and line breaks

- Body prose: target roughly 55-75 characters per line.
- Dense UI labels: keep short; wrap only at sensible boundaries.
- Long-label, localization, RTL, mixed-script, formatted-value, and custom-font fallback risk should use `text-resilience-localization-system.md` before finalizing dimensions.
- Hero headlines: design line breaks at desktop, tablet, and mobile.
- Tables: keep units and numeric columns scannable; do not center-align numbers.
- Buttons: allow label wrapping only when the button pattern supports it; otherwise shorten the action.

## Media and object frame

High-craft visuals need frame rules:

- aspect ratio or max dimensions
- crop anchor
- safe area for overlaid text
- shadow/elevation extent
- mobile crop or replacement
- load/fallback size

If hero media is the signature object, define the frame before styling surrounding copy.

## Adaptive breakpoints

Breakpoints should be based on layout strain, not default device names:

- container too narrow for two panes
- table columns lose scan value
- toolbar wraps into two confusing rows
- text measure becomes too wide or too narrow
- hero object hides proof or primary action
- nav consumes too much vertical space

Use container queries where component context matters more than viewport width.

## Optical balance

Mechanical grids often need optical correction:

- Large display type may need visual centering, not mathematical centering.
- Icons and badges need optical alignment with text x-height.
- Rounded shapes can look heavier; reduce fill, border, or shadow.
- Dark surfaces often need more spacing than light surfaces.
- Dense tables need stronger row rhythm and quieter borders.
- Floating objects need one anchor: shadow, baseline, orbit, rail, or frame.

Optical adjustment should be named, not random nudging.

## QA checks

- Grid columns, pane widths, and container max width are named.
- At least one alignment spine is visible in screenshot critique.
- Spacing uses multiple purposeful levels, not one repeated gap.
- Text measure is readable on desktop and mobile.
- Primary controls align with the content they affect.
- Dense regions have explicit scroll ownership.
- The design has no page-level horizontal overflow at narrow widths.
- Hero/object media has a stable frame, crop, and mobile replacement.
- A 400% zoom or 320px-equivalent reflow check does not lose content or function except for contained two-dimensional data regions.
