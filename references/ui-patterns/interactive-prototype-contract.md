# Interactive prototype contract

Use this after `component-anatomy.md`, `interaction-state-matrix.md`, `frontend-component-standards.md`, and before implementation when a generated page/app includes controls, filters, tabs, forms, drawers, command surfaces, inspectors, media controls, charts, or workflow actions.

The goal is to stop Stark from producing attractive static mockups. A serious generated UI should have enough real behavior to prove the product idea, even when backed by local fixtures instead of a real backend.

## Required output

```md
Interactive prototype contract
- Product task:
- Primary interaction:
- Secondary interactions:
- State owner:
- Fixture/state model:
- Controls that must work:
- Controls that are intentionally static:
- State transitions:
- Error/recovery path:
- Keyboard/touch path:
- Motion/feedback tied to state:
- QA probes:
```

## Interaction depth

Choose the lowest depth that proves the product job.

| Depth | Use for | Must work | Avoid |
| --- | --- | --- | --- |
| Static proof | screenshot gallery, tiny visual sample | links/buttons clearly marked or removed | fake enabled controls |
| Clickable proof | landing/product demo, simple app preview | primary CTA, tabs, disclosure, selected item, one proof control | decorative buttons everywhere |
| Stateful prototype | dashboards, editors, agent runs, forms, checkout, command surfaces | selection, filters/search, submit/retry, drawer/modal, one non-happy state | happy-path-only data |
| Workflow prototype | risky/repeated tasks, public app demos | multi-step state, validation, undo/recovery, keyboard path, persistence where useful | fake workflow that cannot complete |

If a control is visible and enabled, it should either work or be clearly outside the prototype scope. Do not leave primary controls inert.

## Minimum behavior by surface

| Surface | Required behavior |
| --- | --- |
| Product proof landing | primary CTA, one interactive proof control, reduced-motion state when motion exists |
| Dashboard / CRM / operations | filter/search or tab switch, selected row/item, empty/error/loading state trigger or visible state variant |
| Agent run UI | stop/retry/resume or inspect artifact, active step selection, blocked/error recovery state |
| Editor/canvas | selection, inspector change or mode switch, undo/reset or dirty state, keyboard focus path |
| Checkout / signup / forms | validation, preserved input, loading/submitting, success/error recovery |
| Command palette | open/close, query, active result, empty/loading, execute selection |
| Data visualization | hover/select/focus data point, accessible summary, table/source fallback |
| Docs/developer platform | search/filter or copy code, route/current state, focus target after navigation |
| Animation-led page | play/pause or scroll/state trigger, reduced-motion fallback, still-frame proof |

## State model rules

- Keep state local and small when the prototype is local.
- Use realistic fixtures from `product-data-content-system.md`.
- Name disabled reasons; disabled controls without explanation feel broken.
- Include at least one non-happy state for serious product UI.
- Preserve user input after validation or server errors.
- Make selection visible in both data and detail panes.
- Keep motion derived from state, not timers alone.
- Avoid pretending destructive or payment actions completed unless the copy says simulation.

## Controls that may stay static

Static is acceptable only when it is explicit:

- marketing nav links in a one-section preview
- secondary integration icons
- footer/social links
- export/share actions outside the task being proved
- advanced settings not part of the requested workflow

Do not style static controls as the primary path. Prefer removing them to shipping fake affordances.

## QA probes

Use browser/runtime evidence when possible:

- click the primary action and verify visible state change.
- test one keyboard path: Tab, Enter/Space, Escape, or arrow keys where expected.
- change a filter/tab/selection and verify related content changes.
- trigger one validation, empty, error, blocked, or recovery state.
- verify focus remains visible and returns after modal/sheet/palette close.
- verify reduced-motion or pause control when motion is important.
- on mobile, verify the same task works through the replacement structure.

## Report format

```md
Prototype evidence
- Primary interaction tested:
- State changed:
- Non-happy state tested:
- Keyboard/touch evidence:
- Static controls left intentionally:
- Remaining prototype gap:
```

## Hard fails

- Primary CTA/control is enabled but inert.
- A dashboard/editor/agent/form is only a screenshot-like layout.
- Visual state changes do not correspond to data/state changes.
- Keyboard focus cannot reach or operate the primary interaction.
- A modal, drawer, palette, or menu opens without a close/focus return path.
- Error/recovery copy exists but no control lets the user recover.
