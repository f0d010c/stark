# Spatial rhythm and density system

Use this after `composition-system.md` and `layout-precision-system.md`, before `visual-token-recipes.md`, when a page or app risks feeling like a presentation, a loose mockup, a one-gap template, or a cramped tool.

This system decides how space communicates relationship, priority, repetition, and task speed. It does not replace the grid; it makes the grid feel inhabited.

## Required output

```md
Spatial rhythm and density
- Surface:
- User frequency: one-time / occasional / repeated / expert
- Density mode: spacious / balanced / compact / data-dense
- Relationship scale: label-value, control group, panel section, page section
- Repetition rhythm: rows/cards/sections/toolbars
- Primary whitespace job:
- Compression rule:
- Expansion rule:
- Touch/target rule:
- Scroll ownership:
- Zoom/reflow check:
- Hard fails:
```

If the design uses the same spacing level for labels, controls, panels, and sections, the rhythm is not designed yet.

## Density modes

| Mode | Use for | Rhythm | Avoid |
| --- | --- | --- | --- |
| Spacious | campaign pages, object showrooms, brand/portfolio moments | fewer objects, strong focal isolation, section pauses | dashboard controls floating in luxury gaps |
| Balanced | product pages, docs homes, settings, onboarding | clear groups, readable copy, moderate section cadence | equal card grids with no proof density |
| Compact | dashboards, admin, agent runs, editors, CRM, review flows | tighter row rhythm, grouped controls, visible state/action density | tiny text, hidden recovery, cramped hit targets |
| Data-dense | tables, logs, monitoring, permissions, analytics | aligned rows/columns, scan rails, contained scroll, persistent filters | cardifying everything on desktop |

Choose one dominant density mode per viewport. Mobile can switch modes when the task changes.

## Relationship scale

Space should express semantic distance:

| Relationship | Typical spacing | Design job |
| --- | --- | --- |
| Inside control | 4-8px | binds icon, label, value, and affordance |
| Label to value/control | 4-10px | proves which text describes which object |
| Related controls | 8-16px | forms a toolbar, filter group, or action set |
| Field/row/card internals | 12-24px | separates parts without breaking scan flow |
| Panel sections | 24-40px | creates chapters inside a pane |
| Page sections | 48-112px | changes thought without making a slide deck |
| Cinematic pause | custom | isolates one object or beat, then repeats as a motif |

These are starting ranges, not a universal scale. The important part is the ratio between relationships.

## Rhythm patterns by surface

| Surface | Rhythm that feels real | Cheap rhythm signal |
| --- | --- | --- |
| Product proof landing | hero object, proof band, artifact detail, objection/trust beat | every section is centered headline plus cards |
| Cinematic page | big pause, tight proof captions, repeated object frame, scroll beat | random huge gaps between unrelated props |
| Dashboard/CRM | compact rows, saved views, filter/action rails, detail density | four giant KPI cards and empty whitespace |
| Editor/workbench | stable toolbar, dominant canvas, close inspectors, dense controls | floating panels with no task relationship |
| Agent run UI | timeline cadence, artifact arrival, status rail, recovery cluster | progress cards scattered around the page |
| Checkout/settings | tight field groups, risk copy near action, review density | decorative spacing separating terms from CTA |
| Docs platform | readable prose measure, close headings/body, scannable nav | enormous hero then weak article rhythm |

## Compression and expansion rules

Before implementation, define both:

- Compression rule: what becomes denser first when space is tight.
- Expansion rule: what receives extra space when space is generous.

Good expansion adds proof, comparison, media scale, or breathing room around the main object. Bad expansion only increases gaps.

Good compression preserves the primary action, state, and recovery path. Bad compression hides controls or clips labels.

## Spacing traps

- One universal `gap` value across the whole UI.
- Page sections with equal height regardless of content job.
- Large whitespace around weak proof.
- Card padding larger than the information it contains.
- Toolbar controls separated so far they stop reading as one tool.
- Dense products using marketing spacing.
- Campaign pages using app-table density.
- Mobile layouts that keep desktop section gaps while shrinking content.
- Internal scroll regions with no visible boundary or affordance.
- Button and chip labels that fit only at default font size.

## Touch, zoom, and reflow

Density cannot break usability:

- Interactive targets need a clear pointer/touch strategy; compact does not mean impossible to tap.
- Text must tolerate browser zoom and user text spacing without losing function.
- Dense tables, code, timelines, and canvases may use contained two-dimensional scroll; the page itself should not accidentally scroll sideways.
- At narrow widths, replace the structure when shrinking would destroy relationship spacing.

## QA checks

- Screenshot at desktop, tablet, and mobile shows different spacing roles, not one repeated gap.
- Headings sit closer to their content than to the previous section when they introduce a group.
- Labels remain visually attached to their controls or values.
- Primary actions are near the object they affect.
- Repeated rows/cards have a stable cadence.
- Extra desktop width improves proof or scan speed instead of only adding blank space.
- Mobile compression keeps action, state, and recovery visible.
- 200% text zoom and 320px-equivalent reflow do not clip or hide content/function except in intentional contained data regions.

## Hard fails

- Same gap scale everywhere.
- Presentation spacing on repeated-use product UI.
- Cramped density that hides state, recovery, focus, or touch targets.
- Whitespace used to make weak content feel premium.
- Mobile keeps desktop gaps and loses proof/action.
- Whole-page horizontal overflow caused by nav, toolbar, table, media, or code.

## Source anchors

- Material Design layout guidance treats columns, gutters, margins, and 8dp spacing as a coordinated system for balance and consistency: https://m2.material.io/design/layout/understanding-layout.html
- Material density guidance supports higher-density layouts when they improve user experience: https://m2.material.io/develop/web/supporting/density
- Apple HIG layout guidance emphasizes hierarchy, alignment, spacing, and adapting content to available space: https://developer.apple.com/design/human-interface-guidelines/layout
- W3C WCAG Reflow requires content to adapt without loss of information or function: https://www.w3.org/WAI/WCAG21/Understanding/reflow.html
