# Signature surface recipes

Use this after `design-mode-router.md`, `product-intent-matrix.md`, `surface-playbook-matrix.md`, `implementation-pattern-library.md`, and `frontend-library-production-presets.md` when Stark needs a concrete high-craft starting shape rather than another generic page/app skeleton.

This file turns broad design guidance into signature surface recipes: product object, composition, proof, typography posture, library preset, motion signature, states, and QA in one package.

Do not copy the visual style. Copy the product-specific structure and ownership.

## Output contract

```md
Signature surface recipe
- Surface:
- User job:
- Primary product object:
- Selected recipe:
- Composition skeleton:
- Proof surface:
- Typography posture:
- Library preset:
- Motion signature:
- Required states:
- Responsive replacement:
- Originality move:
- Rejected recipe:
- QA evidence:
```

## Recipe matrix

| Recipe | Best for | Primary product object | Signature capability | Avoid |
|---|---|---|---|---|
| Proof workbench landing | dev tools, AI tools, workflow products | command, input, output, trace | interactive proof + artifact reveal | hero claims plus feature cards |
| Cinematic output reveal | AI video/image/media, launches, campaigns | generated output, scene, before/after | authored reveal or scroll proof film | copied reference props around a phone |
| Operational cockpit | CRM, support, admin, monitoring, security ops | queue item, case, account, incident | dense queue + decision detail | decorative KPI cards |
| Agent run review | agents, build systems, automation, pipelines | run step, tool call, artifact | timeline arrival + artifact inspector | spinner/log wall only |
| Editor instrument | design tools, builders, canvas apps, workflow editors | selected object, layer, node, command | stable canvas + inspector continuity | dashboard shell around tiny canvas |
| Trust decision flow | OAuth, plugins, billing, permissions, compliance | permission, risk, scope, audit event | risk matrix + consent controls | one giant allow button |
| Docs command manual | developer platforms, SDKs, APIs, CLI tools | command, code sample, result | command search + runnable proof | marketing docs home with vague cards |
| Data proof panel | analytics, finance, observability, BI | metric, exception, segment, source row | chart question + drill/detail | chart confetti or decorative metrics |
| Gallery proof system | portfolios, marketplaces, showcases, release pages | example, artifact, comparison, source | curated cards + detail continuity | autoplay carousel without context |
| Mobile task stack | mobile-first utilities, workflows, approvals | one task, one decision, one next action | priority stack + thumb-safe controls | squeezed desktop layout |

## Recipes

### Proof workbench landing

Composition:

- First viewport pairs a real command/input with the generated artifact, not an abstract hero.
- The primary proof surface appears above the fold.
- Downstream sections explain setup, trust, integration, and recovery through product evidence.

Typography posture:

- Clear product display face for the promise.
- Quiet UI/body face for proof panels.
- Mono/data face only inside code, logs, IDs, and counters.

Library preset:

- Motion for React state continuity or GSAP only for one authored proof timeline.
- Product libraries only for real command/menu/dialog behavior.
- Native CSS owns grid, containment, tokens, and responsive structure.

Required states:

- Idle, running, succeeded, failed, copied/exported, and disabled reason.

QA evidence:

- Scenario switch changes command, status, output, and logs.
- Mobile stacks command, status, artifact, and proof text.
- Reduced motion still shows artifact arrival as a state change.

### Cinematic output reveal

Composition:

- One main output object carries the page: video frame, generated scene, product mock, render, or before/after field.
- Copy sits beside or over the object without becoming a presentation slide.
- The second section proves process or control, not generic features.

Typography posture:

- Expressive display type may carry the brand moment.
- Supporting copy stays short, concrete, and proof-led.
- UI labels remain code-native and readable.

Library preset:

- GSAP for authored reveal/scroll proof, Three/R3F for inspectable spatial output, video/generated bitmap for cinematic proof, or Rive/Lottie only for small authored accents.
- Do not combine multiple signature visual owners.

Required states:

- Poster/static frame, active reveal, proof frame, reduced-motion frame, mobile crop/replacement.

QA evidence:

- Capture poster, beat, proof, and mobile frames.
- Nonblank media/canvas check passes.
- Reduced motion preserves the product proof.

### Operational cockpit

Composition:

- Dense work surface with toolbar, saved view, list/table, decision detail, and recovery banner.
- Metrics support prioritization; they are not the page.
- Detail panel names the next action.

Typography posture:

- Compact UI face with tabular numbers.
- Strong hierarchy through weight, case, and alignment rather than huge type.

Library preset:

- TanStack Table or native table/list for real sorting, filtering, selection, and pagination.
- Motion only for status arrival or panel continuity.
- Data-viz only when a named decision requires it.

Required states:

- Loading, stale data, error with retry, selected row, bulk selection, disabled action, empty filtered result.

QA evidence:

- Sort/filter changes data and selected detail.
- Keyboard path reaches toolbar, table/list, detail, and action.
- Mobile replaces table with priority cards and detail route/drawer.

### Agent run review

Composition:

- Timeline, controls, artifact inspector, and tool log are visible as a connected work surface.
- The active step and latest artifact are visually linked.
- Recovery controls sit near the problem state.

Typography posture:

- UI/body face for scanning.
- Mono only for tool names, paths, diffs, and logs.
- Status copy uses concrete verbs.

Library preset:

- Motion for active-step continuity and artifact arrival.
- Product libraries for tabs, splitter, disclosure, menus, and command palette if behavior is real.

Required states:

- Queued, running, waiting, blocked, failed, cancelled, succeeded, retrying, artifact selected.

QA evidence:

- Stop/retry/resume availability changes by status.
- Artifact selection updates inspector.
- Blocked state shows reason and recovery.

### Editor instrument

Composition:

- Canvas or object surface dominates.
- Tool rail, layer list, inspector, command palette, and status live around the object without stealing focus.
- Properties update from selection.

Typography posture:

- Small precise UI type.
- Numeric inputs use tabular figures.
- Labels are short and stable under localization expansion.

Library preset:

- Native pointer/keyboard model plus product primitives.
- Motion only for inspector/selection continuity.
- Canvas/SVG/WebGL only if the product object needs direct manipulation or visual proof.

Required states:

- Selected, locked, hidden, invalid, dirty, saving, undo/redo unavailable, preview.

QA evidence:

- Selection changes inspector.
- Keyboard shortcuts and command path exist.
- Mobile becomes focused task screens or preview-first workflow.

### Trust decision flow

Composition:

- Permission/risk matrix, plain-language consequence summary, audit trail, and consent controls.
- High-risk items cannot be hidden in secondary copy.
- Reversibility is visible.

Typography posture:

- Trustworthy body/UI face.
- Strong labels and careful microcopy matter more than display drama.

Library preset:

- Accessible forms, disclosure, dialogs, and confirmation primitives.
- Motion restrained near irreversible actions.

Required states:

- Required/optional, allowed/denied/limited, high-risk, irreversible, error, pending approval.

QA evidence:

- Denying optional access changes summary and CTA.
- Keyboard review path works.
- Confirmation/recovery copy names actual consequences.

### Docs command manual

Composition:

- Search/command, navigation, code example, result, and troubleshooting are connected.
- First viewport gives a runnable or copyable command.
- Reference depth follows after success path.

Typography posture:

- Developer-readable body face.
- Mono/code face with clear punctuation and line height.
- Avoid huge marketing type beyond the intro.

Library preset:

- Native/search or command palette for navigation.
- View Transitions/Motion only for route/detail continuity.
- Product libraries for tabs, combobox, copy buttons, and disclosure when needed.

Required states:

- Empty search, no result, copy success/failure, selected language/framework, install error.

QA evidence:

- Search/filter changes visible commands.
- Copy button has state feedback.
- Mobile preserves code readability and navigation access.

### Data proof panel

Composition:

- The chart answers one question and sits near source, filters, exception list, and drill path.
- Summary text explains the decision/action.
- Table/source fallback exists for critical data.

Typography posture:

- Compact UI type with tabular numbers.
- Chart labels stay readable; avoid decorative display type inside charts.

Library preset:

- Chart.js/native SVG for simple charts, ECharts for dense interaction, D3/visx for bespoke marks, Observable Plot/Vega-Lite for declarative analysis.
- Motion is functional: reveal, filter, compare, or focus.

Required states:

- Loading, empty range, stale source, filtered, selected point, drilldown, source error.

QA evidence:

- Chart question, axes, units, source, and accessible summary are present.
- Mobile gets a table/list or simplified chart.
- Color is not the only encoding.

## Selection rules

- Choose one recipe. Do not merge three recipes into a collage.
- If the surface has repeated use, choose the recipe with the most stable controls.
- If the surface is public/marketing, choose the recipe that proves the product fastest.
- If the product object is unclear, stop and define it before choosing a recipe.
- If the selected library preset does not strengthen the recipe, remove it.

## Hard fails

- The selected recipe does not name a primary product object.
- The hero is the only specific section.
- The library preset is unrelated to the proof surface.
- Typography posture is chosen by trend rather than reading job.
- Mobile is only a scaled desktop screenshot.
- Required states are missing from fixtures.
- QA cannot prove the recipe worked.
