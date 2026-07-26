# Surface playbook matrix

Use this after `product-intent-matrix.md` and before implementation when Stark needs to quickly choose the right design references, library stack, motion level, typography posture, state model, responsive replacement, and QA probes for a known surface.

This is the routing layer. It does not replace the deeper references. It tells the agent what to read, what to skip, and what would count as a wrong solution for the surface.

## Output contract

```md
Surface playbook
- Surface:
- User mode:
- Primary object:
- Must-read references:
- Usually skip:
- Structural pattern:
- Product libraries:
- Motion/visual libraries:
- Typography posture:
- Required states:
- Responsive replacement:
- QA gates:
- Hard bans:
```

## Playbooks

| Surface | Must read | Usually skip | Structural pattern | Libraries | Motion | Type | QA gates | Hard bans |
|---|---|---|---|---|---|---|---|---|
| Developer tool product page | product intent, page proof, conversion proof, copy, font selection, frontend techniques, library orchestration | checkout form depth, cinematic excess unless launch | product proof workbench + docs/console split | cmdk if command model, Motion for continuity, Query if live data | Level 2 or 3 only for proof | precise sans + real mono | code/log readability, copy action, error state, docs/search path | fake terminal wallpaper, unreadable code, generic dark SaaS |
| AI generation / media launch | animation creation, premium animation direction, choreography, motion atlas, asset realism, page proof | dense admin states unless app UI | cinematic object hero + prompt-to-output proof + artifact gallery | Motion for UI, GSAP/video for one proof timeline, Three/Rive only if output is spatial/stateful | Level 3-4 with reduced-motion frames | expressive display + quiet UI + mono prompt labels | generated output visible, failed generation state, media nonblank, reduced motion | floating AI orbs, copied phone/prop hero, proof below fold |
| Operational dashboard | task ergonomics, product intent, component anatomy, data/content, interaction states, table/data-viz, accessibility | cinematic landing system, Lenis, scroll theatre | command center/cockpit + queue/table + detail inspector | TanStack Table/Query, Radix/React Aria, cmdk for expert actions | Level 1-2 state feedback only | compact UI sans, tabular figures | table overflow, stale/error, bulk action, keyboard path, mobile detail sheet | marketing spacing, giant cards, hover-only controls |
| CRM / sales workflow | task ergonomics, usability pattern, product data, forms, navigation IA, interaction states | abstract campaign art, heavy 3D | saved-view cockpit + account detail + activity timeline | TanStack Table/Query, RHF/Zod, Radix dialogs/menus | Level 1-2 continuity for detail open | dense UI sans, tabular money/dates | saved views, overdue/duplicate/no-owner states, failed sync, mobile detail | pretty cards with no next action |
| Checkout / upgrade | conversion proof, forms, accessibility, copy, text resilience, usability scenario | carousels, cinematic motion, decorative WebGL | plan comparison + checkout stepper + risk summary | RHF/Zod, Radix dialogs, Query for pricing/session | Level 0-1 reassuring feedback | plain trustworthy UI, clear numerals | errors, payment failure, terms visibility, focus order, preserved input | hidden terms, playful motion near payment, vague cancellation |
| Docs / platform | navigation IA, typography, text resilience, product library playbooks, accessibility | cinematic scroll, heavy media, Lenis | docs manual + command/search palette + code examples | cmdk/search, Radix/React Aria disclosure, View Transitions only with focus care | Level 1-2 route/copy feedback | readable text face + mono code | heading structure, search empty, code overflow/copy, mobile nav, 404/offline | tiny code, hidden nav, animation slowing reading |
| Editor / canvas | task ergonomics, component anatomy, interaction states, accessibility, performance, library orchestration | marketing section rhythm, decorative panels | canvas + stable inspector + layers/timeline/export proof | Radix/React Aria menus, cmdk, RHF/Zod for settings, Motion for layout continuity | Level 2 direct manipulation | quiet UI sans, mono coordinates | canvas framing, selection/drag, undo/export, save conflict, inspector sheet | moving controls, chrome competing with canvas, empty canvas |
| Agent run UI | task ergonomics, product intent, component anatomy, motion recipes, interaction states, data/content | celebration/campaign motion | run timeline + artifact inspector + tool/log detail | Query for run state, Motion for artifact arrival, cmdk actions | Level 1-2 status-driven arrivals | UI sans + mono logs | queued/running/blocked/failed/retry/stop, artifact arrival, log readability | spinner-only loading, hidden errors, celebration before artifacts |
| Permissions / trust | accessibility contract, interaction states, product data, copy, forms if editable | playful motion, vague cards | trust matrix + audit trail + recovery path | Radix/React Aria, TanStack Table for audits, RHF/Zod for changes | Level 0-1 cautious feedback | sober UI sans, tabular timestamps | denied/revoked/destructive state, audit trail, status text, keyboard path | color-only status, friendly cards hiding risk |
| Analytics / data product | data-viz library selection, product data, task ergonomics, component anatomy, accessibility | decorative chart grids, cinematic hero unless launch | chart-as-object + data panel + source table | ECharts for dense ops, D3/visx for bespoke, TanStack Table/Query | Level 1 reveal/filter/focus only | tabular figures, clear units | chart question, source labels, accessible summary, table fallback, export | charts without question, animated metrics without source |
| Marketplace / plugin install | conversion proof, permissions/trust, forms, copy, accessibility, text resilience | generic app-store cards only | permission matrix + comparison + install recovery | Radix dialogs, TanStack Table for dense permissions, Zod manifest validation | Level 0-1 progress/confirmation | clear UI sans, mono scopes/ids | unverified/incompatible/denied/install failed/rollback, scope text | one-click trust, vague permissions |
| Portfolio / campaign | reference board, variant selection, cinematic system, asset realism, typography pairing, page proof | dense table/product library depth unless proof surface | cinematic object hero + editorial system + case-study proof | CSS first; GSAP/video/Three only if asset earns it | Level 3-4 with one signature mechanic | expressive display + readable companion | media crop, reduced motion, mobile first viewport, contact fallback | endless effects, inaccessible body type, fake product proof |

## Read/skip rules

- If the surface is repeated-use, risky, dense, or operational, read task ergonomics before visual direction and skip cinematic systems unless the prompt explicitly asks for a launch page.
- If the surface is public, high-craft, or reference-led, read reference board, variant selection, taste calibration, and page proof before implementation.
- If the surface contains user input that can fail, read form state and validation even if the UI is mostly visual.
- If the surface contains data, charts, tables, logs, queues, or metrics, read product data/content before styling.
- If the surface contains multiple capabilities, read library orchestration before installing or importing libraries.
- If the user rejected a prior attempt, read feedback memory before variants.

## Library ceilings

Use these as first-pass ceilings, then simplify further if a library lacks ownership:

- Checkout/trust: 1-3 behavior libraries, no expressive visual libraries.
- Dashboard/CRM/agent/editor: 2-5 product libraries when they own data, tables, forms, overlays, command, or state.
- Docs/platform: 1-3 behavior libraries; route motion only if focus restoration is handled.
- Campaign/AI launch: 1-3 visual/motion libraries; product libraries only for real demos/forms.
- Analytics: data-viz + table/query is allowed; avoid adding motion libraries unless they clarify filtering/focus.

If the chosen stack exceeds the ceiling, remove the least product-critical effect first.

## QA escalation

Always include the surface-specific QA gates plus:

- Desktop and mobile screenshots for public/high-craft work.
- Keyboard/focus path for product UI, forms, docs, command palettes, dialogs, and trust screens.
- Reduced-motion verification for animation-led work.
- Nonblank media/canvas/video/Rive/Lottie/Three checks when visual assets are central.
- Overflow checks for tables, code, nav, inspectors, charts, and long labels.
- State evidence for every async, risky, destructive, or input-heavy surface.

## Hard fails

- The chosen surface playbook contradicts the user's product job.
- A risky/repeated-use surface is treated as a cinematic campaign.
- A campaign/product page has no proof surface.
- A data/dashboard surface has fake generic content and no state distribution.
- A checkout/trust surface hides risk, recovery, or terms.
- A library is selected even though it owns no behavior in the playbook.
- A mobile replacement is not named before implementation.
- QA gates are generic instead of surface-specific.
