# Usability pattern matrix

Use this after `task-ergonomics.md` and before visual design when the product must be usable over repeated, risky, or stateful work.

This matrix chooses the workflow structure. It is not a visual layout library. A beautiful screen that uses the wrong workflow pattern will still feel fake, slow, or hard to trust.

## Output Contract

```md
Usability pattern brief
- Product job:
- User mode:
- Frequency/risk:
- Pattern chosen:
- Why this pattern fits:
- Primary action:
- Secondary actions:
- Speed path:
- Error prevention:
- Recovery path:
- Required states:
- Keyboard/touch model:
- Rejected patterns:
- Evidence tasks:
```

## Pattern Matrix

| Need | Pattern | Use When | Avoid When | Must Include |
|---|---|---|---|---|
| First value | Guided setup with skip/resume | user must connect, import, invite, or configure before value | setup can happen after first value | progress, saved state, skip, resume, first useful result |
| Risky creation | Wizard with review step | legal, financial, public, permission, or irreversible output | expert users repeat the flow many times | summary, edit links, consequence preview, preserved inputs |
| Repeated operations | Command surface + saved views | high-frequency internal/admin/operator work | user is still learning the domain | command/search, saved filters, bulk actions, recents, keyboard path |
| Triage | Priority queue | support, security, CRM, incident, moderation, tasks | all items are equally important | priority reason, owner, SLA/risk, next action, assignment |
| Dense comparison | Master/detail + filters | user compares accounts, tickets, products, logs, files | single object requires deep editing | stable list, selected item, filters, sort, detail, recovery |
| Monitoring | Status board + drilldown | user checks what changed, what is blocked, what needs action | user needs to edit many fields inline | status, trend, anomaly, timestamp, owner, drilldown |
| Complex editing | Canvas/workbench + inspector | user manipulates objects, layers, code, timelines, documents | task is linear form completion | selected object, tools, inspector, undo, history, export |
| Settings/admin | Searchable grouped settings | many knobs, permissions, billing, integrations, preferences | only 3-5 simple options exist | search, groups, inline validation, save state, audit risk |
| Permission/trust | Permission matrix + audit trail | scopes, plugins, roles, data access, approvals | permissions are trivial or read-only | scope, owner, risk, requested by, grant/deny, audit trail |
| Checkout/upgrade | Transparent cost/risk path | payment, plan comparison, shipping, subscription | no money/risk is involved | total cost, plan difference, guest path, errors, recovery |
| Docs/help | Task-led docs + command/search | users need to find and apply instructions | content is marketing narrative | IA, search, copy code, version, examples, feedback |
| AI/agent run | Plan preview + progress + artifacts | long-running AI/tool/background work | instant answer with no side effects | plan, current step, tool trace, artifacts, stop/retry/resume |
| Collaboration | Activity + ownership thread | multiple people change, review, approve, or comment | solo task has no audit value | owner, timestamp, comments, decision, unresolved items |
| Mobile task | Priority stack + bottom actions | one-handed, field, consumer, or touch-heavy tasks | desktop density is required for comparison | large targets, sticky primary action, concise hierarchy |

## Pattern Details

### Guided Setup With Skip/Resume

Use when the user needs confidence and first value more than speed.

Required:

- show why each step exists
- preserve progress after exit
- allow skip when setup can continue without the step
- show the first useful result before asking for optional work
- include empty/error states for imports, permissions, and integrations

Evidence task: a new user reaches first value, exits halfway, resumes, and recovers from one failed connection.

### Wizard With Review Step

Use when mistakes are costly.

Required:

- short step labels
- one decision per step when risk is high
- review summary with edit links
- consequence preview before submit
- preserved inputs after validation errors
- confirmation only where risk justifies friction

Avoid for high-frequency operators unless there is a fast path or templates.

### Command Surface + Saved Views

Use when repeated work should get faster after the first run.

Required:

- command/search entry
- saved views or recent filters
- bulk actions
- keyboard shortcuts where expected
- visible current filter/mode
- undo/retry/cancel for routine actions

Evidence task: a returning user repeats the core task faster than a first-time user.

### Priority Queue

Use when the user needs to know what to handle next.

Required:

- priority reason, not only color
- age/SLA/timestamp
- owner or assignment
- batch action where safe
- selected row detail
- empty, stale, and permission states

Avoid decorative metrics that do not change the user's next action.

### Master/Detail + Filters

Use when comparison and inspection are both needed.

Required:

- list/table remains stable
- selected object stays visible
- filters and sort are visible and reversible
- detail pane has next/previous navigation
- mobile replacement becomes priority list + detail route/sheet

Do not turn every list into cards if the user is comparing many rows.

### Status Board + Drilldown

Use when users monitor change over time.

Required:

- what changed
- what is blocked
- what is risky
- who/what owns the item
- when it happened
- next action

Charts must answer a question. If a chart does not change a decision, it is decoration.

### Canvas/Workbench + Inspector

Use when the object needs direct manipulation.

Required:

- canvas/object remains dominant
- selected object is visible
- inspector is stable
- undo/redo is visible or keyboard-accessible
- destructive actions are separated
- export/share state exists
- mobile/tablet has a focused replacement, not crushed desktop chrome

Evidence task: user selects an object, changes a property, undoes it, and exports.

### Searchable Grouped Settings

Use for settings, admin, billing, integrations, and preferences.

Required:

- search/filter
- semantic groups
- inline validation
- unsaved/saved state
- permission disabled reasons
- audit trail for risky settings

Avoid giant modal chains for settings that users revisit.

### Permission Matrix + Audit Trail

Use when trust depends on visible scope and accountability.

Required:

- requested scope
- who requested it
- resource affected
- risk label in plain language
- grant/deny/narrow path
- audit record
- recovery/rollback path

Do not hide permission consequences behind cheerful install copy.

### Transparent Cost/Risk Path

Use for checkout, subscriptions, pricing, and upgrades.

Required:

- total cost before commitment
- plan difference or comparison
- guest path where appropriate
- shipping/tax/security cues before submit
- validation near fields
- input preservation after errors
- cancellation or downgrade clarity

Avoid surprise costs, forced accounts, and vague stock/renewal states.

### Task-Led Docs + Command/Search

Use when users arrive with a problem to solve.

Required:

- task-oriented IA
- search/command access
- current version/platform
- runnable examples
- copyable code
- error/recovery notes
- feedback path

Avoid marketing copy in the path of a technical task.

### Plan Preview + Progress + Artifacts

Use for AI agents, background runs, imports, exports, deploys, and long tasks.

Required:

- plan before execution when side effects matter
- current step
- tool/action trace
- artifact list
- stop/pause/cancel
- retry/resume
- blocked/error reason
- final summary with next action

Avoid invisible "thinking" states when work takes time or has side effects.

### Activity + Ownership Thread

Use for collaboration, review, support, approvals, and audit-heavy surfaces.

Required:

- owner
- timestamp
- decision/status
- comments or notes
- unresolved item markers
- permission-aware visibility
- copy/export where support needs evidence

Avoid chat-like UI when the real job is approval, triage, or audit.

### Priority Stack + Bottom Actions

Use for mobile task flows.

Required:

- one primary action
- touch targets sized and spaced for real thumbs
- sticky bottom action only when it does not obscure content/focus
- reduced table density
- gestures have button alternatives
- no hover-only controls

Mobile is not a scaled desktop screenshot. It should preserve the same job with a different structure.

## Accessibility And Interaction Baseline

- Use native HTML controls where possible.
- Use WAI-ARIA APG patterns only when the component behavior actually matches the pattern.
- Dialogs need a visible close/cancel path and managed focus.
- Tabs need tablist/tab/tabpanel semantics and keyboard behavior.
- Comboboxes need clear editable/select-only behavior and popup keyboard handling.
- Interactive grids can reduce tab stops, but require arrow-key focus management.
- Disclosures should be buttons controlling visible/hidden content.
- Focus must remain visible and not be hidden by sticky UI.
- Touch/pointer targets must be large enough or spaced enough for the target context.
- Drag interactions need button or single-pointer alternatives.

## Selection Heuristic

Choose by failure mode:

- If the user might abandon before first value: guided setup.
- If the user might make a costly mistake: wizard with review.
- If the user repeats the same task daily: command surface + saved views.
- If the user asks "what should I do next?": priority queue.
- If the user compares many objects: master/detail + filters.
- If the user watches operations: status board + drilldown.
- If the user manipulates an object: workbench + inspector.
- If the user grants access: permission matrix.
- If money is involved: transparent cost path.
- If time passes: plan preview + progress + artifacts.

Reject any pattern that optimizes the wrong use: a marketing hero for repeated operations, a wizard for high-volume triage, a grid of cards for comparison, or a dashboard for a single linear task.

## Evidence Tasks

Before final delivery on serious UX work, name at least one realistic task:

- New user reaches first value and resumes after leaving.
- Returning operator finds the highest-risk item and assigns it.
- Admin narrows a plugin permission and can audit the change.
- Buyer fixes a payment error without losing form data.
- Editor changes an object, undoes it, and exports.
- Agent user starts, stops, retries, and inspects artifacts.
- Keyboard user opens a dialog/combobox/tabs/grid and exits without a trap.
- Mobile user completes the primary task without hover or tiny targets.

## Source Anchors

- Nielsen Norman Group usability heuristics emphasize system status, user control, recognition over recall, error prevention, flexibility, and recovery.
- NN/g usability testing guidance treats realistic tasks and observed behavior as the core evidence source.
- W3C WAI-ARIA Authoring Practices define component patterns such as dialogs, tabs, comboboxes, grids, and disclosures with expected keyboard behavior.
- W3C WCAG 2.2 Understanding documents focus visibility/focus appearance, focus not obscured, target size, dragging alternatives, error identification, labels/instructions, and error prevention.
- Baymard checkout research highlights form preservation, transparent costs, account friction, delivery/security clarity, and error recovery as recurring checkout risks.
