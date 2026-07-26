# Progressive disclosure and information scent

Use this when a UI feels like a presentation, wall of text, pasted marketing sections, overexplained demo, dense dashboard, confusing docs home, checkout/trust page, onboarding flow, settings surface, or agent run UI where users need the next step to be obvious without reading everything.

This file complements `copy-system.md`, `page-proof-architecture.md`, `conversion-proof-system.md`, `navigation-information-architecture.md`, `task-ergonomics.md`, `component-anatomy.md`, `ux-measurement-instrumentation-contract.md`, and `text-resilience-localization-system.md`.

The goal is to reveal the right thing at the right depth. A beautiful page still feels cheap when every section speaks at the same volume, every detail is visible too early, or labels do not help users predict what they will get.

## Required output

```md
Progressive disclosure and information scent brief
- Surface:
- User mode:
- Primary object:
- Primary question:
- First-layer content:
- Second-layer content:
- Deep detail:
- Hidden until needed:
- Information scent labels:
- Navigation/CTA scent:
- Disclosure controls:
- Copy compression:
- Empty/error/recovery scent:
- Mobile disclosure:
- Accessibility structure:
- Measurement signal:
- QA checks:
```

## Layer model

| Layer | Job | Contains | Avoid |
|---|---|---|---|
| First layer | prove relevance and next action | object, status/value, primary action, one reason to trust | feature lists, abstract promises, dense setup |
| Second layer | support comparison or decision | examples, filters, preview, detail summary, objections, owner/source/time | repeating hero claims |
| Deep detail | answer specialist/risk questions | logs, terms, audit trail, config, raw data, advanced controls | forcing everyone through it |
| Hidden until needed | reduce noise without hiding recovery | advanced settings, destructive actions, verbose docs, rare filters | burying cost, risk, cancellation, errors, or permissions |

## Information scent rules

- Headings should answer what the section lets the user decide or do, not just name a vibe.
- CTAs should name the outcome: "Create workspace" beats "Get started" when the action is concrete.
- Links and nav labels should predict the destination. Avoid cute labels for serious work.
- Cards need object, status/value, owner/source/time when those help users choose.
- Dashboards need exception labels before decorative metrics.
- Docs need task labels, version/platform hints, code-language labels, and copy/run affordances.
- Trust flows need cost, permission scope, cancellation, risk, and recovery scent close to the decision.
- Empty/error states need the next recoverable action, not sympathy copy.
- Animated/product-proof pages need DOM-owned labels near the visual proof so the asset is not the only explanation.

## Surface recipes

### Product proof landing

- First layer: product object, proof surface, concrete outcome, primary CTA.
- Second layer: example, workflow slice, trust proof, comparison or objection.
- Deep detail: docs, pricing, security, changelog, integration notes.
- Hide: verbose feature matrices until after proof is established.
- Never hide: pricing risk, platform requirements, data/security claims.

### Dashboard or operations surface

- First layer: highest-risk queue/status, owner, freshness, next action.
- Second layer: filter, saved view, supporting metric, detail preview.
- Deep detail: history, audit trail, raw logs, secondary metadata.
- Hide: rare filters, table columns, export settings until requested.
- Never hide: stale/error state, blocked work, destructive/bulk action preview.

### Editor or canvas

- First layer: canvas object, current selection, primary tool, save/export state.
- Second layer: inspector controls, validation hints, undo/redo, mode switch.
- Deep detail: advanced settings, file metadata, command palette, history.
- Hide: rarely used transform/config panels until selection or command asks for them.
- Never hide: selection state, unsaved changes, validation failures, destructive edits.

### Onboarding

- First layer: first value promise, minimum setup, sample/demo path.
- Second layer: optional integrations, permission rationale, import details.
- Deep detail: advanced configuration, team/security settings, billing.
- Hide: settings that can safely wait.
- Never hide: what happens after permission, cost, or irreversible import.

### Checkout, trust, permissions

- First layer: decision, price/scope, risk, primary action.
- Second layer: terms, cancellation, permission detail, comparison.
- Deep detail: legal, audit, data retention, invoices.
- Hide: advanced/legal detail behind clear labels.
- Never hide: recurring cost, cancellation, permission scope, destructive consequence.

### Docs or developer tools

- First layer: task route, platform/version, command/code path, expected result.
- Second layer: examples, alternatives, troubleshooting.
- Deep detail: API shape, migration notes, edge cases.
- Hide: exhaustive references until the task path is clear.
- Never hide: version mismatch, required auth, breaking change, security warning.

## Copy compression

Use compression when a section has more explanation than decision value:

- Replace claims with proof labels.
- Turn paragraphs into object/status/action rows.
- Move background explanation into disclosure details.
- Keep one lead sentence, one evidence point, and one action per section.
- Delete copy that repeats a previous section's claim.
- Use microcopy for risk, constraints, and recovery, not for decoration.

## Disclosure controls

- Use tabs for mutually exclusive views users will compare repeatedly.
- Use details/disclosure for optional explanation.
- Use drawers/sheets for object detail that preserves list context.
- Use popovers/tooltips only for short clarifications, never essential content.
- Use command/search for advanced routes and power paths.
- Use accordions sparingly; if every section is collapsed, the page has no first read.

## Accessibility and structure

- Use real headings that describe page structure, not styled text pretending to be hierarchy.
- Keep heading order meaningful and scannable without the visual layout.
- Disclosure controls need names, expanded state, keyboard operation, and focus return when content appears or closes.
- Hidden content must not contain the only copy for price, risk, error recovery, or primary task completion.
- Mobile disclosure must reduce density without changing the meaning of the journey.

## QA checks

- Can a user predict the result of every primary nav, CTA, card, and disclosure control?
- Does the first viewport prove the primary object, value/status, and next action without a paragraph wall?
- Are advanced controls hidden only when safe, and reachable when needed?
- Are risk, cost, permissions, errors, and recovery visible at decision time?
- Does mobile preserve the same scent with shorter labels and progressive detail?
- Does the heading outline still explain the page when styles are ignored?
- Does measurement from `ux-measurement-instrumentation-contract.md` include wrong-click, pogo-sticking, zero-result, disclosure-open, and abandonment signals when relevant?

## Source anchors

- NN/g's information-foraging model explains that users rely on cues and scent to decide where to go next: https://www.nngroup.com/articles/information-foraging/
- Progressive disclosure reduces complexity by revealing advanced or secondary information when it becomes relevant: https://www.uxpin.com/studio/blog/what-is-progressive-disclosure/
- W3C WAI recommends headings that convey meaningful page structure for navigation and understanding: https://www.w3.org/WAI/tutorials/page-structure/headings/
