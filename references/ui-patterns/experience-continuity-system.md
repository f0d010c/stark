# Experience continuity system

Use this when Stark designs a multi-section page, app shell, docs platform, dashboard, editor, checkout flow, native app, or any generated product that has more than one route, screen, panel, state, or proof section.

This system prevents one-off mockups. A product should feel like the same product as the user moves from overview to detail, empty state to loaded state, desktop to mobile, or marketing proof to app workflow.

## Required Output

```md
Experience continuity brief
- Product object model:
- Route/screen map:
- Primary user journey:
- Shared navigation/orientation:
- State language:
- Component/anatomy reuse:
- Typography continuity:
- Token/material continuity:
- Motion continuity:
- Copy/vocabulary continuity:
- Data/fixture continuity:
- Responsive continuity:
- Accessibility continuity:
- Rejected discontinuities:
- QA journey checks:
```

If the experience has multiple surfaces and this brief cannot name what stays consistent and what changes, the design will likely become a set of disconnected screenshots.

## Source Anchors

- Nielsen Norman Group usability heuristics include consistency and standards, visibility of system status, user control, and recognition over recall.
- W3C WAI page-structure guidance uses headings, landmarks, and navigation structure to improve orientation.
- WAI-ARIA APG landmarks guidance frames landmarks as a way for assistive technologies to perceive page structure that is otherwise conveyed visually.
- Material layout guidance treats layout as adaptive and consistent across platforms, environments, and screen sizes.

## Continuity Axes

| Axis | What Must Stay Stable | What Can Change | Hard Fail |
|---|---|---|---|
| Object model | names, statuses, ownership, units, IDs, relationships | selected object, filters, detail depth | same object renamed across screens |
| Navigation | route labels, current-location cue, scope identity | desktop sidebar to mobile sheet/bottom nav | user loses where they are |
| State language | loading, empty, stale, blocked, failed, permission, success | severity and copy by surface | same state uses different meaning/colors |
| Component anatomy | core parts and interaction rules | density, placement, responsive shape | detail card, row, and inspector contradict each other |
| Typography | display/body/UI/mono roles, numbers, measures | scale by context and viewport | each screen invents a new type voice |
| Tokens/materials | semantic colors, surfaces, borders, radius logic, focus | density/mode adaptations | brand color replaces danger/success/focus |
| Motion | one grammar for continuity, feedback, and reveal | duration by risk/frequency | route motion, hover, and hero all use unrelated physics |
| Copy/vocabulary | domain nouns, CTAs, status labels, recovery verbs | tone by risk and location | marketing says one thing, app says another |
| Data/fixtures | realistic records, edge cases, timestamps, source | filtered views and selected scenarios | screenshots use unrelated fake data |
| Responsive | preserved task, current location, primary action | structure and component replacement | mobile is only squeezed desktop |

## Product Object Model

Before designing screens, define the product nouns:

```md
Product object model
- Primary object:
- Secondary objects:
- Object states:
- Owner/source/time fields:
- User actions:
- Risk/recovery fields:
- Relationship between marketing proof and app/workflow proof:
```

Examples:

- Agent product: run, step, tool call, artifact, approval, branch, failure, retry.
- CRM: account, opportunity, renewal, owner, blocker, next action, note, SLA.
- Editor: canvas, layer, selection, tool, asset, validation issue, export.
- Trust flow: app, scope, permission, risk, audit event, owner, recovery.
- Docs platform: guide, command, API method, version, example, error, result.

The same object should drive hero proof, app shell, empty states, and detail screens.

## Screen-To-Screen Contracts

### Overview To Detail

- Overview shows enough status, owner/source, time, and next action to choose a detail.
- Detail preserves the selected object identity and previous list/filter context.
- Back/close restores the prior filter, scroll, and selected item.
- Mobile may route to a detail screen or sheet, but current object and return path remain visible.

### Empty To Loaded

- Empty state uses the same object vocabulary as loaded state.
- Sample/demo content can teach the loaded shape.
- First action creates or imports the same object the loaded UI expects.
- Do not use a generic illustration and then switch to unrelated dense product UI.

### Marketing Proof To App Workflow

- Public proof should show the real workflow object, state, or output.
- App workflow should reuse the same nouns, motif, and proof objects at operational density.
- Campaign motion may be more expressive; app motion must become faster state feedback.
- Avoid a cinematic hero that promises one product while the app shell is generic cards.

### Route To Route

- Each route needs current-location cue, title, scope, route state, and primary action.
- Tabs show sibling views of the same object; routes show meaningful destinations.
- Search/command should expose the same objects and actions as navigation.
- Route loading/error/permission/404 states use the same state language as components.

### Desktop To Mobile

- Preserve product task, current location, primary action, and selected object.
- Replace dense regions with priority stacks, detail routes, sheets, bounded scroll regions, or summary-first views.
- Do not preserve every desktop column if doing so hides the task.
- Motion and media simplify to proof frames when needed.

## Continuity Patterns

| Pattern | Use When | Continuity Requirement |
|---|---|---|
| Proof-to-product ladder | public product page leads to app workflow | hero proof, second section, and app mock share object/state vocabulary |
| Hub-detail loop | dashboards, CRMs, docs, galleries | selected object, filters, scope, and back path persist |
| Setup-to-empty-to-loaded | onboarding and first-run flows | first value action creates visible loaded-state object |
| Command-to-result loop | devtools, AI tools, docs, agents | command, running state, output, error, and retry share language |
| Review-to-confirm loop | checkout, trust, permissions, destructive actions | consequence, risk, recovery, and audit copy remain consistent |
| Canvas-to-inspector loop | editors/builders | selection, handles, inspector, layers, and validation agree |
| Data-question-to-source loop | analytics/data products | chart, insight, source table, filter, and export share units and freshness |

## Component Reuse Without Sameness

Continuity does not mean every screen uses the same card:

- Reuse anatomy rules, not decorative frames.
- Reuse status vocabulary, not identical badges everywhere.
- Reuse type roles, not the same font size for all contexts.
- Reuse token roles, not the same accent on every control.
- Reuse motion grammar, not the same entrance animation on every section.

Good continuity feels authored. Bad continuity feels pasted.

## QA Journey Checks

Run these before accepting multi-screen/product work:

- Start at first-run or public proof, then reach the primary object.
- Move from overview/list to detail and back with state preserved.
- Trigger empty, loading, error, permission, stale, or blocked route/component state.
- Use search/command or nav to reach a nested object.
- Resize to mobile and complete the same journey.
- Use keyboard through nav, list/detail, dialogs/sheets, and primary actions.
- Check that state colors, copy labels, and object names mean the same thing everywhere.
- Compare desktop/mobile screenshots for the same product identity and task.
- Verify reduced motion does not remove route, state, or proof continuity.

## Hard Fails

- The app has a beautiful first screen and unrelated downstream UI.
- Marketing proof uses different product nouns than the app workflow.
- Route labels, headings, tabs, and command results disagree.
- Empty/loading/error states use generic copy that does not match loaded state.
- Mobile removes current location, selected object, primary action, or recovery path.
- Each screen uses different typography, radius, surface, state color, or motion grammar.
- A user cannot return from detail to the same filtered/selected context.
- The design can only be judged from a single screenshot, not a journey.
