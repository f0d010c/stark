# Product data and content system

Use this before implementation when a generated UI includes lists, tables, dashboards, charts, cards, timelines, forms, search, docs, agent runs, product screenshots, or any product proof that depends on data.

Good-looking UI with toy data still feels fake. Stark should define the domain model, realistic records, relationships, edge cases, state distribution, and content density before styling.

Source anchors:

- Faker's official docs describe generating fake but reasonable data for demos, tests, and work without a completed backend: https://fakerjs.dev/guide/
- Faker usage docs note the package can be large and should not leak third-party generator types into the app's domain model: https://fakerjs.dev/guide/usage
- Playwright recommends user-facing locators such as role, label, placeholder, and text, which means realistic labels and content improve QA realism: https://playwright.dev/docs/locators
- NN/g usability heuristics emphasize matching the real world and using users' language rather than system-oriented terms: https://www.nngroup.com/articles/ten-usability-heuristics/

## Product data/content brief

```md
Product data/content system
- Product domain:
- Primary objects:
- Object relationships:
- Realistic record shape:
- Status/state distribution:
- Edge cases:
- Time/money/unit rules:
- Domain vocabulary:
- Fixture generation method:
- Privacy/license boundary:
- QA scenarios:
```

If the UI shows data, fixture content is part of the design. Do not leave it to random placeholders.

## Fixture quality ladder

| Level | Use for | Quality bar | Avoid |
|---|---|---|---|
| Static hand-written | one-off hero proof, small demos | 5-12 believable records with names, statuses, dates, owners | lorem, Item 1, User A |
| Domain fixture file | dashboards, tables, app shells | records, relationships, states, edge cases, filters | all happy-path rows |
| Faker-assisted | large tables, forms, search, perf demos | generated values constrained by domain rules | random names with no relationships |
| Schema-backed | serious prototypes, forms, API demos | types/schema own shape; generator fills values | UI invents fields not in model |
| Real/sanitized sample | public proof, analytics, docs examples | privacy-cleared, attributed, realistic distribution | leaking private/customer data |

Use Faker for volume and variety, not for product meaning. Stark still owns the domain model.

## Domain model rules

Define:

- primary object: run, artifact, ticket, invoice, account, event, file, deployment, patient, order, lesson, product
- secondary objects: owner, team, workspace, source, destination, plan, permission, comment, log, asset
- identity fields: human name, ID, slug, short code, timestamp
- status fields: state, risk, priority, freshness, permission, validation
- action fields: next action, disabled reason, recovery action
- evidence fields: source, audit trail, change count, sample output, cost, duration, confidence

Do not build UI around database nouns unless those nouns are also user-facing.

## State distribution

Real products are not all perfect. Include a useful mix:

- empty or first-run
- loading/syncing
- healthy/success
- stale/partial
- warning/risk
- failed/retryable
- permission blocked
- archived/deleted
- selected/bulk action
- long-running/queued

For public demos, show at least one non-happy state in the visible UI.

## Realistic values

Use values that reveal interface stress:

- long names and short names
- similar names that test disambiguation
- old and fresh timestamps
- narrow and wide numeric ranges
- currency with decimals and renewal dates
- IDs/hashes/versions that need mono or truncation
- row counts that force pagination/virtualization/scroll
- missing optional fields
- localized dates/units when relevant
- labels that wrap on mobile

Avoid perfect 3-card, 3-row, 3-feature symmetry unless the product truly has three things.

## Domain vocabulary

Copy and data must share nouns:

- A deployment app uses deploys, builds, environments, rollbacks, regions, logs.
- An agent app uses runs, steps, tools, artifacts, approvals, blocked reasons.
- A CRM uses accounts, contacts, deals, owners, stage, next touch, renewal risk.
- A docs platform uses guides, API refs, versions, snippets, anchors, copied state.
- A checkout uses plan, renewal, tax, trial, cancellation, invoice, payment state.
- An editor uses canvas, layer, asset, selection, history, export, constraint.

Replace "Manage", "Resource", "Item", "Activity", and "Overview" with product nouns unless they are genuinely the user's words.

## Fixture generation method

For each generated app, choose:

- hand-authored fixtures for small proof surfaces
- a fixture module for product apps
- Faker-assisted generation for large realistic sets
- schema-derived fixtures for typed forms/tables
- sanitized real samples only when explicitly available and safe

Keep generation deterministic when tests or screenshots depend on it. Use stable seeds or committed fixture files.

## QA scenarios

Fixture data should make these checks possible:

- search returns results, no results, and permission-blocked results
- filters produce full, empty, and partial lists
- tables show sorting, selected rows, stale rows, and overflow
- forms show validation and server failure with preserved values
- charts show missing data, outliers, and source/freshness
- command palettes show disabled commands and grouped results
- agent runs show queued, blocked, failed, retrying, and succeeded steps
- mobile views show long labels and priority information

## Hard fails

- Lorem ipsum, placeholder.com, Item 1, User A, Company B, or generic metric cards.
- All records have the same status, length, date, owner, or priority.
- Data does not match the product's copy or navigation nouns.
- A chart has no source, freshness, units, or table fallback.
- Empty/error/permission states exist only in docs, not fixtures.
- Random generated data breaks relationships, filters, or screenshots.
- Private or real customer data appears without explicit safe sourcing.
