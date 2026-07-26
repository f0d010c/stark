# Composition system

Use this when a page or app feels like a presentation, a stack of sections, a generic template, or a collection of individually nice parts that do not form one designed product surface.

Composition decides where attention starts, where it moves, what proof appears first, how sections vary, and how the product object remains recognizable across the page.

For full pages where the hero is stronger than the rest, follow this file with `page-proof-architecture.md`. That file assigns jobs to each section, builds a proof ladder, deletes weak sections, and preserves proof order on mobile.

## Composition Brief

```md
Composition system
- Surface:
- User mode:
- Main object:
- First viewport pattern:
- Focal path:
- Grid:
- Section rhythm:
- Proof placement:
- Repeated motif:
- Responsive replacement:
- Rejected composition:
- QA checks:
```

## First Viewport Patterns

Choose one before styling.

| Pattern | Use for | Required | Avoid |
|---|---|---|---|
| Object stage | cinematic launches, product proof, AI/media, campaigns | one dominant object, short copy, proof hint, CTA reachable | multiple equal props, copied device pose |
| Proof workbench | developer tools, SaaS, AI tools, security | real-looking product surface, labels, state, annotation/inspector | blurred fake dashboard, pure claims |
| Command deck | devtools, agent apps, power workflows | command/input, result/output, status, next action | decorative terminal with no real command |
| Split decision | comparison, pricing, migration, before/after | same axes/labels, current selection, action | carousel for critical comparison |
| Trust matrix | permissions, security, marketplace, checkout | scope, actor, risk, owner, audit/recovery | friendly cards that hide consequence |
| Canvas first | editors, builders, creative tools | canvas/artifact dominates, stable tools, inspector path | hero marketing copy competing with canvas |
| Timeline spine | agents, automation, CI, generation | stages, current step, artifacts, stop/retry | spinner-first flow |
| Editorial spread | docs, reports, portfolios, case studies | strong type rhythm, narrow text, proof/captions | centered hero repeated every section |
| Data object | analytics, monitoring, finance, operations | chart/question/source, table/detail, action | decorative metrics |

## Focal Path

A good first viewport has a path:

1. Anchor: the main object or headline.
2. Proof: evidence that the product works.
3. Control: what the user can do or inspect.
4. Exit: next section, CTA, or primary workflow.

If the eye path is headline -> vague paragraph -> generic cards, rewrite the composition.

## Grid Choices

Choose one grid grammar:

- Centered stage: one object or headline dominates; supporting proof sits around it.
- Rail + stage: fixed/strong rail for metadata, nav, chapter markers, or proof labels.
- Split pane: list/object on one side, inspector/detail on the other.
- Workbench: toolbar/topline, main surface, inspector/status region.
- Editorial spread: asymmetric columns, pull quotes, captions, full-bleed moments.
- Timeline spine: vertical/horizontal spine with events and artifact panels.
- Matrix: rows/columns for comparison, permissions, pricing, plans, or risk.
- Collection wall: many objects with filters, selected state, and preview/detail.
- Map/canvas: spatial surface first; controls orbit without stealing focus.

Do not mix more than two grid grammars on one screen or the page starts feeling assembled.

## Section Rhythm

Avoid identical section blocks. Use a planned rhythm:

### Product proof page

1. first viewport proof object
2. short context strip
3. workflow/process section
4. evidence or comparison
5. state/recovery/trust
6. final action

### Cinematic campaign

1. hero key art
2. short world/context
3. craft/detail/proof
4. collection or variations
5. human/place/trust
6. final brand close

### Developer tool

1. command/output proof
2. install or first-use path
3. failure/retry or debug proof
4. docs/API split
5. security/permissions
6. final command/CTA

### Operational app

1. current state/priority
2. queue/table/list
3. selected detail/inspector
4. filters/saved views/command path
5. error/stale/permission states
6. audit/export/recovery

### Editor/canvas

1. canvas/artifact
2. selected object/inspector
3. layers/timeline/assets
4. command/shortcut path
5. save/export/conflict states
6. gallery/history/proof

## Proof Placement

Proof belongs early.

- Landing page: proof hint in first viewport, concrete proof by second section.
- Product app: proof is the data/object/state itself.
- Campaign: key art can carry emotion, but craft/process proof must follow quickly.
- Trust/checkout: terms, cost, scope, and recovery must sit near the action.
- Developer/docs: command, code, output, and copy state should be close together.

If proof appears only after several vague sections, the page will feel like a pitch deck.

## Anti-Presentation Rules

Presentation-like pages usually have:

- centered headline plus supporting paragraph in every section
- evenly spaced feature bands
- icon/card grids with no product object
- generic screenshots as decoration
- no controls, states, or evidence to inspect
- no change in density or rhythm
- copy that explains instead of proving

Repair:

- replace one feature section with a proof object
- replace one card grid with a matrix, timeline, inspector, or comparison
- add state/recovery evidence
- vary section rhythm: full, narrow, dense, quiet, pinned, indexed
- keep the main object or motif returning downstream

## Responsive Composition

Do not only scale down:

- Object stage -> cropped object + proof stack.
- Proof workbench -> stacked object, annotation, CTA.
- Command deck -> input first, output below, sticky action.
- Split pane -> list then detail sheet.
- Trust matrix -> grouped cards with repeated labels.
- Canvas first -> canvas, then inspector sheet.
- Timeline spine -> vertical current-step spine.
- Editorial spread -> single column with captions and chapter markers.
- Data object -> summary insight, chart, table fallback.

## QA Checks

- The first viewport has one focal anchor.
- Proof appears in the first or second viewport.
- Section rhythm changes at least twice on long pages.
- The product object or motif recurs downstream.
- Desktop composition has a named grid.
- Mobile has a replacement, not only smaller elements.
- The design would not still work after swapping in a random SaaS category.
- Screenshot critique can name the focal path in one sentence.

## Source anchors

- Material Design layout guidance uses grids, spacing, scale, and imagery to create hierarchy, meaning, and focus: https://m1.material.io/layout/principles.html
- Material responsive layout describes responsive grids, breakpoints, and reflow across screen sizes: https://m1.material.io/layout/responsive-ui.html
- Apple HIG emphasizes clear visual hierarchy and layout that elevates content and controls appropriately: https://developer.apple.com/design/human-interface-guidelines/
- web.dev responsive design guidance emphasizes adapting layout to user needs and device capabilities: https://web.dev/responsive-web-design-basics/
- web.dev's component-driven responsive design describes layout that responds to containers and component context, not only the viewport: https://web.dev/articles/new-responsive
