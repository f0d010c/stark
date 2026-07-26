# Product intent matrix

Use this when Stark must quickly choose the right surface shape, product libraries, motion level, typography posture, state model, and QA evidence from the user's product intent.

This file prevents the common failure where every request becomes the same attractive landing page, dashboard cards, or over-animated component demo. It should be read before `pattern-selection.md`, `product-library-playbooks.md`, and `motion-library-playbooks.md` when the prompt has a clear product category or user job.

For concrete font stacks after the typography posture is chosen, read `font-selection-matrix.md`.
For detailed product states and behavior contracts, read `interaction-state-matrix.md`.

## Intent brief

```md
Product intent brief
- Intent:
- User mode:
- Primary object:
- Primary decision/action:
- Best structural pattern:
- Product libraries:
- Motion level:
- Typography posture:
- Required states:
- Responsive replacement:
- QA evidence:
- Avoid:
```

## Matrix

| Intent | Pattern | Libraries | Motion | Type | Required States | Avoid |
|---|---|---|---|---|---|---|
| Developer tool proof | product proof workbench + docs/console split | Motion for continuity, cmdk for command actions, TanStack Query if data-backed | short component motion, no scroll theatre unless marketing | precise sans + mono for code/logs | loading, error, stale, retry, copied, empty artifact | fake terminal claims, unreadable code, generic dark SaaS |
| AI generation product | cinematic object hero + prompt-to-output proof + artifact gallery | Motion for UI, GSAP/video for one proof timeline, Three only for real spatial output | authored reveal and inspectable proof | display face with quiet UI text, mono for prompt/run labels | generating, queued, failed, cancelled, partial output, export | floating AI orbs, "unlock creativity", proof below fold |
| Operational dashboard | command center/cockpit + queue/table + detail inspector | TanStack Table, TanStack Query, Radix/React Aria overlays, cmdk for expert actions | subtle state feedback and row arrival only | UI sans with tabular figures, mono sparingly | empty, loading, stale, error, permission, selected, bulk-action, blocked | marketing spacing, giant cards, hover-only controls |
| CRM / sales workflow | saved-view cockpit + account detail + activity timeline | TanStack Table/Query, React Hook Form + Zod, Radix dialogs/menus | continuity for detail open, no spectacle | legible UI sans, dense labels, tabular money/dates | lead stage, overdue, duplicate, no owner, failed sync, permission | pretty cards with no next action |
| Checkout / upgrade | plan comparison + checkout stepper + risk summary | React Hook Form + Zod, Radix dialogs, TanStack Query for pricing/session | minimal, reassuring feedback only | trustworthy UI sans, clear numerals | dirty, validating, submitting, declined, retry, cancellation, tax, success | carousels, hidden terms, motion near payment |
| Docs / platform | docs manual + command/search palette + code examples | cmdk/search, Radix/React Aria disclosure, View Transitions only with focus care | route continuity and copy feedback | readable text face + mono for code | search empty, copied, version mismatch, offline, 404 | cinematic scroll, tiny code labels, hidden nav |
| Editor / canvas | canvas + inspector + layers/timeline/export proof | Radix/React Aria menus/dialogs, cmdk, Motion for layout, RHF/Zod for settings forms | direct manipulation, layout continuity, no control drift | quiet UI sans, mono for coordinates/metadata | selected, hover, drag, saving, conflict, undo, export failed | moving controls, decorative chrome, empty canvas |
| Agent run UI | run timeline + artifact inspector + tool/log detail | Motion for artifact arrival, TanStack Query for run state, cmdk for actions | status-driven arrivals, interruptible | UI sans + mono for logs/tool calls | queued, running, blocked, failed, retrying, cancelled, stale, artifact ready | spinner-only loading, hidden errors, celebration before artifacts |
| Permissions / trust | trust matrix + audit trail + recovery path | Radix/React Aria dialogs/menus, TanStack Table for audit logs, RHF/Zod for changes | cautious feedback, no playful motion | sober UI sans, tabular timestamps | inherited, denied, pending, revoked, escalated, destructive confirm | friendly cards hiding risk, color-only status |
| Analytics/data product | chart-as-object + data panel + source table | ECharts for dense ops, D3/visx for bespoke, TanStack Table for source, Query for data | reveal/filter/focus only | UI sans with tabular figures, mono for query/source | no data, partial data, stale, filtered, source missing, export | decorative charts, animation without question |
| Marketplace/plugin install | permission matrix + comparison + install recovery | Radix/React Aria dialogs, TanStack Table for permissions if dense, Zod for manifest validation | progress and confirmation only | clear UI sans, mono for scopes/ids | unverified, incompatible, denied, revoked, install failed, rollback | one-click trust, vague permissions |
| Portfolio/campaign | cinematic object hero + editorial system + proof/case study | CSS, GSAP/video/Three only if asset earns it, Lenis optional | 1-2 signature moments | expressive display + quiet reading face | media missing, reduced motion, mobile crop, contact fallback | endless scroll effects, inaccessible body type |

## Product Library Selection

Use product libraries only when they own real behavior:

- Radix UI: accessible primitives with custom styling when the app needs dialogs, menus, popovers, tabs, selects, sliders, or overlays.
- React Aria: deeper accessibility, internationalization, custom rendering, grids, collections, comboboxes, date fields, and complex behavior.
- shadcn/ui: owned component source for fast Tailwind product UI, but only after replacing default visual tokens and generic card/table styling.
- TanStack Table: sorting, filtering, selection, grouping, pagination, column visibility, and dense data decisions.
- TanStack Query: server state, caching, stale/retry/error/mutation states, background refresh, and invalidation.
- React Hook Form + Zod: serious forms, validation, dirty/submitting states, dynamic fields, and data-bound boundaries.
- Floating UI: custom anchored overlays when Radix/React Aria does not already own positioning and collision.
- cmdk: command palettes and searchable actions when the command model is useful.
- Embla: media rails, proof galleries, and mobile swipers when content is not decision-critical.

If a library does not own a named behavior, do not add it.

## Motion Level

Choose motion by intent:

- Level 0: no expressive motion. Use for checkout, permissions, dense admin, critical recovery.
- Level 1: state feedback. Use for dashboards, forms, docs, settings, tables.
- Level 2: component continuity. Use for product apps, editors, command palettes, route/detail.
- Level 3: authored proof. Use for product launches, AI generation proof, interactive demos.
- Level 4: cinematic. Use for campaign/portfolio only when the asset quality and story justify it.

Hard rule: the more frequent or risky the task, the lower the expressive motion level should be.

## Typography Posture

Choose posture by product job:

- Proof-led product page: character display for the promise, quiet UI face for proof.
- Developer/platform: precise sans plus mono for real code, logs, ids, and instrumentation.
- Operational app: compact UI sans, tabular figures, restrained weights, stable labels.
- Editorial/campaign: expressive display, readable long-form companion, fewer labels.
- Trust/checkout: plain, calm UI face, high clarity numerals, no novelty in critical copy.
- Data/analytics: tabular numerals, unit consistency, clear axis/legend labels.

Reject default personality fonts when the product needs identity, but reject expressive fonts when the user must operate, buy, recover, or inspect dense data.

## State Requirements By Intent

- Products with async work: loading, queued, running, failed, retrying, stale, cancelled, complete.
- Products with permissions: pending, denied, inherited, revoked, destructive confirm, audit trail.
- Products with forms: dirty, validating, field error, submitting, server error, success, preserved input.
- Products with data: empty, filtered empty, stale, partial, source missing, export failed.
- Products with media/canvas: loading poster, blank/error fallback, reduced motion, mobile crop.
- Products with payment: tax/shipping/loading, declined, retry, cancellation, refund/support, success.

## Responsive Replacements

Do not only shrink desktop:

- table -> priority columns, grouped rows, or bounded horizontal scroll
- split pane -> list then detail sheet
- canvas + inspector -> canvas first, inspector sheet
- pinned story -> stacked proof frames
- trust matrix -> grouped permission cards with repeated labels
- command palette -> full-screen sheet
- comparison -> stacked repeated axes
- hero object -> cropped static frame with proof beneath

## QA Evidence By Intent

- Developer tool: code/log readability, copy action, error state, docs/search path.
- AI generation: generated output visible, failed generation state, reduced motion, media nonblank.
- Dashboard/CRM: table overflow, keyboard path, stale/error state, bulk action, mobile replacement.
- Checkout: form errors, payment failure, terms visibility, focus order, no distracting motion.
- Docs: heading structure, search, code overflow/copy, mobile nav, 404/offline.
- Editor: canvas framing, inspector sheet, undo/export state, keyboard/focus, save conflict.
- Agent run: timeline state, artifact arrival, retry/stop, blocked state, log readability.
- Permissions: denied/revoked/destructive state, audit trail, accessible status text.
- Analytics: chart question, source/unit labels, accessible summary, table fallback.

## Source anchors

- Radix Primitives are low-level, accessible, unstyled primitives for custom design systems and apps: https://www.radix-ui.com/primitives/docs
- React Aria provides accessibility, behavior, interactions, and internationalization for custom-rendered components: https://react-spectrum.adobe.com/react-aria/getting-started.html
- TanStack Table is a headless table/datagrid library for custom UI: https://tanstack.com/table/latest/docs/overview
- TanStack Query focuses on asynchronous/server-state data fetching, caching, synchronization, and updates: https://tanstack.com/query/latest/docs/framework/react/overview
