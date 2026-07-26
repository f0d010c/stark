# Component anatomy

Use this when a generated UI includes complex product surfaces. Anatomy keeps the design useful instead of becoming decorative cards.

Each anatomy entry defines required parts, states, interaction, responsive behavior, and visual traps. For detailed state behavior, disabled reasons, recovery paths, and focus evidence, pair this with `interaction-state-matrix.md`. For custom widget behavior, pair it with `accessibility-interaction-contract.md` before implementation.

## Command palette

- Purpose: fast navigation, action execution, search, and recovery.
- Required parts: input, scoped results, command groups, keyboard hint, empty state, loading state, recent/favorite actions.
- Optional parts: filters, preview pane, destructive confirmation, natural-language mode.
- States: idle, typing, loading, no results, selected result, permission blocked, error.
- Keyboard/mouse behavior: open/close shortcut, arrow navigation, enter action, escape close, focus returns to trigger.
- Responsive behavior: full-screen sheet on mobile, stable result rows, no horizontal overflow from shortcuts.
- Visual traps: fake palette with inert rows, tiny low-contrast shortcut labels, decorative commands with no action.

## Run timeline

- Purpose: show progress, ownership, tool calls, artifacts, blocked states, and recovery for long-running work.
- Required parts: plan steps, current step, tool call/event lane, elapsed time, stop control, retry/resume, artifact links, blocked reason.
- Optional parts: log drawer, diff preview, cost/token meter, approval checkpoint, branch/commit link.
- States: queued, running, waiting for input, blocked, failed, retried, succeeded, cancelled.
- Keyboard/mouse behavior: expand event, copy log, inspect artifact, stop/retry controls reachable by keyboard.
- Responsive behavior: compact step spine plus drawer on mobile; bounded log scroll; sticky current step.
- Visual traps: celebratory progress with no recovery, color-only status, unbounded log dumping into page scroll.

## Artifact inspector

- Purpose: inspect an output while preserving context and next actions.
- Required parts: artifact preview, metadata, provenance/source, status, actions, version/history, related run or record.
- Optional parts: side-by-side diff, comments, export/share, validation checklist.
- States: loading preview, unsupported preview, stale artifact, permission denied, validation failed, ready.
- Keyboard/mouse behavior: focusable actions, zoom/fit, copy/download, close returns focus.
- Responsive behavior: preview first, metadata collapses below or into drawer; large media constrained.
- Visual traps: beautiful preview with no provenance, actions far from artifact, metadata too tiny to read.

## Permission matrix

- Purpose: help users understand scope, risk, grants, denials, and audit trail.
- Required parts: actor/app, resource, permission level, reason, risk label, audit timestamp, allow/deny/revoke action.
- Optional parts: filters, bulk review, policy explanation, owner handoff, expiry.
- States: pending, granted, denied, expired, inherited, blocked by policy, needs owner.
- Keyboard/mouse behavior: row selection, bulk action confirmation, details disclosure, focus-visible controls.
- Responsive behavior: priority-column list on mobile; table with sticky headers on desktop; bounded horizontal scroll when needed.
- Visual traps: green/red only, hidden risk reason, primary approve button visually equal to revoke/delete.

## Pricing or plan comparison

- Purpose: compare value, risk, limits, and purchase path.
- Required parts: price, billing period, included limits, overage/upgrade rules, cancellation/trial terms, primary action.
- Optional parts: calculator, enterprise contact, feature grouping, security/compliance notes.
- States: selected plan, current plan, disabled/unavailable, payment error, coupon applied, trial ending.
- Keyboard/mouse behavior: plan selection, disclosure for legal/risk details, validation recovery.
- Responsive behavior: stacked plans with sticky summary on mobile; no sideways page drift.
- Visual traps: hiding cancellation terms, animated distractions near payment, low-contrast limits.

## Form or settings flow

- Purpose: collect, validate, save, or submit user input without losing work.
- Required parts: form title, grouped fields, labels, hints, required/optional logic, validation messages, submit/cancel, dirty/saved state, recovery path.
- Optional parts: review step, progress, autosave, templates, examples, field-level help, audit note.
- States: idle, dirty, validating, invalid, submitting, server failed, permission blocked, saved/succeeded, stale/conflict.
- Keyboard/mouse behavior: labels focus fields, tab order follows the task, submit works by keyboard, errors are reachable, cancel/reset is explicit.
- Responsive behavior: multi-column forms become single-column groups; review summaries keep edit links; sticky actions do not cover errors.
- Visual traps: placeholder-only labels, errors far from fields, lost input after failure, disabled controls without reasons, one giant form when review/steps are needed.

## Editor workbench

- Purpose: create or modify an artifact with stable canvas and tools.
- Required parts: canvas/work area, toolbar, selected object state, layers or structure, inspector, undo/redo, save/export.
- Optional parts: timeline, comments, version history, command palette, asset library.
- States: empty canvas, selection, multi-selection, invalid input, unsaved changes, exporting, conflict.
- Keyboard/mouse behavior: shortcuts, selection handles, focus management, drag/resize, undo/redo.
- Responsive behavior: canvas remains dominant; inspector becomes drawer on small screens; toolbar wraps without moving canvas.
- Visual traps: marketing spacing inside a tool, moving controls during editing, brand display type competing with content.

## Evidence bay

- Purpose: prove a claim with concrete data, examples, screenshots, diffs, or audit records.
- Required parts: claim, evidence object, source, timestamp, comparison or baseline, next action.
- Optional parts: filters, annotations, confidence, raw/source view, export.
- States: no evidence, loading, partial evidence, stale evidence, disputed, verified.
- Keyboard/mouse behavior: inspect, copy, filter, open source, compare.
- Responsive behavior: evidence object first; annotations collapse; large tables/images constrained.
- Visual traps: claim-heavy cards without proof, fake screenshots, proof hidden below decorative hero.

## Collection wall

- Purpose: browse many visual or content objects while preserving selection and comparison.
- Required parts: objects, filters/sort, selected state, preview/detail, empty state, pagination or virtualization.
- Optional parts: saved views, bulk actions, compare mode, tags, recents.
- States: loading, filtered empty, selected, unavailable item, bulk selected, error.
- Keyboard/mouse behavior: grid navigation, select/open, filter focus, escape close detail.
- Responsive behavior: fewer columns on mobile, detail becomes route or sheet, filters collapse.
- Visual traps: identical cards with no hierarchy, hover-only details, images cropped beyond usefulness.

## Data visualization panel

- Purpose: reveal trend, distribution, comparison, outlier, flow, or relationship.
- Required parts: chart title, question answered, axes/scales, legend, units, source, summary insight, accessible text alternative.
- Optional parts: filter, brush/zoom, tooltip, annotations, table fallback, export.
- States: no data, loading, partial data, filtered empty, stale data, error.
- Keyboard/mouse behavior: tooltip accessible by focus or alternative table, filters reachable, brush not required for core insight.
- Responsive behavior: simplify chart type or provide table/list summary on mobile; labels do not overlap.
- Visual traps: decorative chart with no question, misleading scale, inaccessible color-only encoding, tiny unreadable labels.

## Selection rule

For complex UI, name at least one anatomy in the design brief:

```md
Component anatomy
- Primary anatomy:
- Required parts included:
- States included:
- Responsive replacement:
- Visual traps avoided:
```
