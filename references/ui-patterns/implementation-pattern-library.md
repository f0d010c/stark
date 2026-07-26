# Implementation pattern library

Use this after `generation-blueprint-contract.md` and before coding. These are implementation-shaped patterns, not finished designs. They show how Stark should structure common high-quality UI output so the generated code has product ownership, state coverage, library restraint, and QA hooks from the first pass.

Do not copy the visual style from these patterns. Copy the ownership shape.

## Pattern brief

```md
Implementation pattern
- Pattern:
- Surface:
- Files/components:
- State owner:
- Library owner:
- Data/fixtures:
- Non-happy states:
- Motion/choreography:
- Responsive replacement:
- QA hooks:
- Remove:
```

## 1. Product proof workbench

Use for developer tools, AI tools, API products, build/deploy products, and product pages that must prove a workflow rather than claim benefits.

### Structure

```text
src/
  app/App.tsx
  features/proof-workbench/
    ProofWorkbench.tsx
    CommandDeck.tsx
    OutputArtifact.tsx
    ProofTimeline.tsx
    proofFixtures.ts
    proofMotion.ts
  components/ui/
    Button.tsx
    StatusPill.tsx
    CodeBlock.tsx
  styles/tokens.css
```

### Ownership

- `ProofWorkbench` owns selected scenario, command state, output artifact, and visible proof.
- `CommandDeck` owns command labels, disabled reasons, keyboard shortcuts, and execution feedback.
- `OutputArtifact` owns the generated result, diff, preview, or report.
- `ProofTimeline` owns queued/running/failed/succeeded states.
- Motion owns continuity between command, running state, and artifact arrival; it does not animate unrelated cards.

### First-pass state shape

```ts
type ProofStatus = "idle" | "queued" | "running" | "failed" | "succeeded";

type ProofScenario = {
  id: string;
  command: string;
  inputLabel: string;
  outputLabel: string;
  status: ProofStatus;
  durationMs: number;
  risk?: string;
  artifact: {
    title: string;
    before: string;
    after: string;
    logs: string[];
  };
};
```

### Required QA hooks

- Primary command button has an accessible name and disabled reason.
- Scenario switch changes artifact content, status, and logs.
- Code/log blocks have bounded overflow and copy state.
- Mobile replaces split workbench with command, status, artifact, then logs.
- Reduced motion keeps artifact arrival visible as a state change.

### Remove

- Fake terminal wallpaper with no executable command.
- Hero-only proof.
- Generic "Ship faster" cards.
- Code text baked into images.

## 2. Operational queue cockpit

Use for dashboards, CRMs, admin tools, support operations, review queues, and repeated-use B2B surfaces.

### Structure

```text
src/features/queue-cockpit/
  QueueCockpit.tsx
  QueueToolbar.tsx
  QueueTable.tsx
  QueueDetail.tsx
  QueueStateBanner.tsx
  queueFixtures.ts
```

### Ownership

- Table or list library owns sorting, filtering, selection, and pagination only when those behaviors are real.
- Feature state owns selected item, filters, saved view, bulk actions, and recovery.
- Detail panel owns decision context and next action.
- Token system owns compact/comfortable density and selected/error/blocked states.

### First-pass state shape

```ts
type QueueItem = {
  id: string;
  account: string;
  owner: string;
  status: "healthy" | "at-risk" | "blocked" | "waiting" | "resolved";
  priority: "low" | "normal" | "high" | "urgent";
  updatedAt: string;
  slaMinutes: number;
  blocker?: string;
  nextAction: string;
};

type QueueViewState = {
  selectedId: string;
  filter: "all" | "blocked" | "urgent" | "mine";
  sort: "sla" | "updated" | "priority";
  bulkSelection: string[];
  loading: boolean;
  stale: boolean;
  error?: string;
};
```

### Required QA hooks

- Sort/filter changes table and selected detail.
- Bulk action has disabled reason when no rows are selected.
- Stale/error banner preserves old data and offers retry.
- Keyboard focus can move through toolbar, table/list, and detail actions.
- Mobile replaces table with priority cards and a route/drawer detail.

### Remove

- Four KPI cards with no row-level work.
- Decorative charts before naming the decision.
- Marketing spacing in repeated-use views.
- "Open tickets: 312" without owners, time, risk, or action.

## 3. Agent run timeline

Use for AI agents, long-running tasks, tool calls, generation pipelines, build systems, or workflow automation.

### Structure

```text
src/features/agent-run/
  AgentRun.tsx
  RunTimeline.tsx
  RunControls.tsx
  ArtifactInspector.tsx
  ToolCallLog.tsx
  runFixtures.ts
  runMotion.ts
```

### Ownership

- Timeline owns run steps, active step, tool calls, and progress.
- Controls own stop, retry, resume, approve, and blocked-state actions.
- Artifact inspector owns generated files, previews, diffs, and download/copy states.
- Motion owns artifact arrival and active-step continuity, not celebration effects.

### First-pass state shape

```ts
type RunStatus = "queued" | "running" | "waiting" | "blocked" | "failed" | "cancelled" | "succeeded";

type RunStep = {
  id: string;
  label: string;
  status: RunStatus;
  startedAt?: string;
  endedAt?: string;
  toolCalls: Array<{ name: string; status: RunStatus; summary: string }>;
  artifacts: Array<{ id: string; name: string; type: "file" | "preview" | "log" | "diff" }>;
  blockedReason?: string;
};
```

### Required QA hooks

- Blocked state shows reason and recovery action.
- Stop/retry/resume controls update availability by status.
- Artifact selection changes inspector without losing timeline position.
- Logs are readable and bounded.
- Mobile stacks timeline, controls, inspector, logs in that order.

### Remove

- Spinner-only long-running work.
- Hidden tool errors.
- Confetti before artifacts are inspectable.
- All-mono UI that harms scan speed.

## 4. Editor workbench

Use for creative tools, builders, workflow editors, canvas apps, node tools, document tools, and product surfaces where the object is directly manipulated.

### Structure

```text
src/features/editor-workbench/
  EditorWorkbench.tsx
  CanvasStage.tsx
  ToolRail.tsx
  InspectorPanel.tsx
  LayerList.tsx
  CommandPalette.tsx
  editorState.ts
```

### Ownership

- Canvas owns selection and visible object state.
- Inspector owns selected-object properties, dirty state, validation, reset/apply.
- Tool rail owns mode, not arbitrary navigation.
- Command palette owns discoverability and keyboard speed path.
- Motion supports selection/inspector continuity only.

### First-pass state shape

```ts
type EditorMode = "select" | "draw" | "comment" | "preview";

type EditorState = {
  mode: EditorMode;
  selectedId?: string;
  layers: Array<{ id: string; name: string; visible: boolean; locked: boolean; invalid?: string }>;
  dirty: boolean;
  history: { canUndo: boolean; canRedo: boolean };
  validation: Array<{ id: string; message: string; severity: "info" | "warning" | "error" }>;
};
```

### Required QA hooks

- Selection changes inspector content.
- Undo/redo disabled reasons are visible.
- Locked/invalid layers have distinct states.
- Canvas controls remain reachable on tablet/mobile.
- Mobile replaces full editor with focused task screens or preview-first workflow.

### Remove

- Dashboard cards around a tiny fake canvas.
- Inspector with static labels only.
- Hover-only editing.
- Marketing hero layout for a workbench.

## 5. Trust and permission matrix

Use for plugin installs, OAuth scopes, security settings, admin permissions, billing risk, data access, and any flow where the user is granting power.

### Structure

```text
src/features/trust-matrix/
  TrustMatrix.tsx
  PermissionGroup.tsx
  RiskSummary.tsx
  AuditTrail.tsx
  ConsentActions.tsx
  permissionFixtures.ts
```

### Ownership

- Permission groups own scope, rationale, risk level, and reversible/irreversible status.
- Risk summary owns plain-language consequences.
- Audit trail owns who changed what, when, and how to recover.
- Form/control state owns approve/deny/partial access and confirmation.

### First-pass state shape

```ts
type Permission = {
  id: string;
  group: string;
  label: string;
  reason: string;
  risk: "low" | "medium" | "high";
  required: boolean;
  reversible: boolean;
  status: "allowed" | "denied" | "limited";
};
```

### Required QA hooks

- Denying optional permission changes the summary and CTA.
- Required high-risk permission cannot be hidden in fine print.
- Keyboard can review and change permissions.
- Mobile groups permissions into expandable sections with sticky summary.
- Copy avoids hype and names actual risk.

### Remove

- One giant "Allow" button with no scope.
- Legal copy as the only explanation.
- Decorative lock illustration replacing permission details.
- Motion near irreversible confirmation.

## 6. Docs command manual

Use for docs platforms, developer portals, API references, SDK sites, CLI docs, and technical onboarding.

### Structure

```text
src/features/docs-manual/
  DocsShell.tsx
  DocsNav.tsx
  CommandSearch.tsx
  CodeExample.tsx
  VersionSwitcher.tsx
  docsFixtures.ts
```

### Ownership

- Navigation owns route map, current location, headings, and mobile replacement.
- Command/search owns query, empty/loading, recent commands, and keyboard behavior.
- Code examples own copy state, language label, overflow, and error/result pairing.
- Route transitions preserve focus and scroll.

### First-pass state shape

```ts
type DocsPage = {
  slug: string;
  title: string;
  section: string;
  version: string;
  headings: string[];
  examples: Array<{ language: string; code: string; result?: string; error?: string }>;
};
```

### Required QA hooks

- Search empty state is useful.
- Code copy button changes state.
- Code blocks do not overflow the page.
- Mobile nav is reachable and dismissible.
- Route/detail transitions do not hide focus.

### Remove

- Cinematic scroll hijack.
- Tiny code labels.
- Docs without search or current-location cues.
- Code screenshots instead of copyable code.

## 7. Animated product story

Use for Luma-level, cinematic, high-craft, AI/media/product-proof pages where motion is central but must remain original.

### Structure

```text
src/features/product-story/
  ProductStory.tsx
  StoryStage.tsx
  ProofFrames.tsx
  StoryControls.tsx
  storyTimeline.ts
  storyFixtures.ts
```

### Ownership

- Story stage owns the main object, not a pile of props.
- Timeline module owns authored sequence, triggers, cleanup, and reduced motion.
- Proof frames own static fallback and mobile replacement.
- Controls own pause, replay, and selected proof.

### First-pass state shape

```ts
type StoryBeat = {
  id: string;
  label: string;
  trigger: "load" | "scroll" | "click" | "state";
  focalObject: string;
  proof: string;
  reducedMotionFrame: string;
};
```

### Required QA hooks

- One primary object persists through beats.
- Reduced motion shows the same proof as static frames.
- Mobile avoids long pinned scroll traps.
- Timeline cleanup is explicit for GSAP/Theatre/observers.
- Nonblank media/canvas/video is verified when used.

### Remove

- Floating props copied from a reference.
- Motion stack sampler.
- Text that sounds like a landing-page template.
- Pinned section that traps normal reading.

## 8. Data proof panel

Use for analytics, metrics, charts, observability, financial products, product intelligence, and decision-support UI.

### Structure

```text
src/features/data-proof/
  DataProofPanel.tsx
  ChartViewport.tsx
  DataSummary.tsx
  SourceTable.tsx
  DataFilters.tsx
  dataFixtures.ts
```

### Ownership

- Chart library owns marks, scales, tooltips, zoom/brush only when needed.
- Data summary owns the decision or insight in text.
- Source table owns accessible fallback and exact values.
- Filters own query state, empty/error/stale outcomes, and mobile replacement.

### First-pass state shape

```ts
type DataPoint = {
  id: string;
  label: string;
  segment: string;
  value: number;
  previousValue: number;
  unit: "ms" | "usd" | "count" | "percent";
  status: "normal" | "watch" | "alert";
};
```

### Required QA hooks

- Chart answers a named question.
- Accessible summary states the takeaway.
- Table/source fallback exists.
- Filters change both chart and summary.
- Mobile replaces dense chart with summary, key series, and source list.

### Remove

- Decorative sparkline grid.
- Color-only status.
- Chart library before data question.
- Unlabeled axes or missing units.

## Source anchors

- Motion for React: `motion` components, layout animation, motion values, and reduced-motion hooks.
- GSAP: `gsap.matchMedia()` for breakpoint/reduced-motion setup, scoped selectors, and cleanup/revert.
- Rive: named `stateMachines`, canvas setup, resize after load, runtime package choice.
- React Three Fiber: adaptive performance, DPR, and quality regression for demanding scenes.
- Radix: accessible primitives with component parts and state attributes for custom styling.
- React Aria: unstyled components/hooks for accessibility, internationalization, and complex interactions.
- TanStack Table: column definitions, sorting/filtering/selection, stable data/column references.
- TanStack Query: query keys, stale/loading/error/refetch states, invalidation after mutations.
- React Hook Form/Zod: form state, schema validation, errors, dirty/submitting state.
- Floating UI: anchored positioning, collision, and optional accessible interactions.
- Embla: carousel options/API with framework wrappers and breakpoint behavior.
