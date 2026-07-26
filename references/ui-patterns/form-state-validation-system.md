# Form state and validation system

Use this before implementation when a UI has forms, settings, checkout, onboarding, signup, admin configuration, permissions, filters, imports, generation prompts, or any user input that can fail.

Forms are product workflows, not styled input fields. A good form prevents errors, explains constraints, preserves work, supports recovery, and confirms the result.

## Required form brief

```md
Form state brief
- Form job:
- User risk:
- Form pattern:
- Field anatomy:
- Validation timing:
- State model:
- Error/recovery model:
- Async/server model:
- Review/confirmation:
- Library/schema ownership:
- Accessibility contract:
- Responsive behavior:
- QA checks:
```

## Pick the form pattern

| Pattern | Use when | Required parts | Avoid |
|---|---|---|---|
| Single inline form | small low-risk task, search/filter, newsletter, quick setting | label, hint, validation, submit state, success/failure | multi-step risk hidden in one panel |
| Grouped settings form | preferences, integrations, billing settings, admin config | sections, dirty/saved state, inline validation, permission disabled reasons | modal chains for revisited settings |
| Wizard with review | legal, payment, public publishing, permission changes, irreversible actions | steps, saved progress, review summary, edit links, consequence preview | high-frequency expert flows with no fast path |
| Checkout/risk path | payment, subscription, upgrade, shipping, plan changes | total cost, terms, tax/shipping, guest path, declined/retry, cancellation clarity | playful motion or hidden terms near payment |
| Prompt/generation form | AI generation, code/artifact creation, imports | prompt field, examples, constraints, queued/generating/failed/cancelled, artifact handoff | spinner-only wait or vague "try again" |
| Bulk action form | batch update, assignment, approval, destructive action | selected count, affected objects, preview, disabled items, undo/rollback | no consequence preview |
| Filter form | dashboards, search, reports, logs | current filters, clear all, saved views, empty/filter-empty state | losing context after submit |

## Field anatomy

Every non-trivial field needs:

- visible label, not placeholder-only labeling
- optional/required signal only where it changes behavior
- hint/instruction near the field
- current value, placeholder only as example
- constraints in human language
- validation message near the field
- preserved value after validation/server failure
- disabled/read-only reason when unavailable
- focus, hover, filled, invalid, valid, loading, disabled, and dirty states

Use `fieldset`/`legend` or equivalent grouped semantics for radio groups, checkbox groups, address groups, permission scopes, and matrix-like choices.

## Validation timing

Choose timing by risk and effort:

| Timing | Use for | Rule |
|---|---|---|
| on submit | most required fields and low-risk forms | show summary + field errors, preserve values |
| on blur | fields with format constraints: email, URL, date, username | avoid yelling while typing |
| while typing | character limits, password strength, search/filter | do not block typing or steal focus |
| async after pause/blur | availability, unique name, invite email, permission path | show checking state, debounce, allow retry |
| server after submit | payment, permissions, external APIs, schema boundaries | map server error to field/global/action |

Do not validate every keystroke unless the feedback helps the user finish faster.

## State model

At minimum define:

- idle
- dirty
- validating
- field invalid
- form invalid
- submitting
- server failed
- permission blocked
- saved/succeeded
- partially saved
- stale/conflict
- cancelled/reset

Risky forms also need:

- review pending
- destructive confirmation
- rollback/undo window
- support/contact path
- audit record or timestamp

## Error and recovery model

Errors must say:

- what failed
- where it failed
- how to fix it
- whether entered data was preserved
- whether retry is safe

Use field errors for field-specific problems, a summary for multi-error submit, and global errors only for form-level or server-level failures.

Do not use vague copy such as "Something went wrong" unless paired with a concrete retry/support path and preserved input.

## Library and schema ownership

Use the smallest capable implementation:

| Need | Good owner | Notes |
|---|---|---|
| simple native constraints | HTML forms + Constraint Validation API | use labels, required/type/min/max/pattern carefully |
| React form lifecycle | React Hook Form | dirty, touched, submit, dynamic fields, field arrays |
| boundary validation | Zod or equivalent schema | user-facing messages, not raw schema jargon |
| server state/mutations | TanStack Query or route action | pending, retry, invalidation, optimistic/rollback |
| accessible custom controls | native, React Aria, Radix, platform primitives | pair with `accessibility-interaction-contract.md` |

Keep schema, form lifecycle, and server mutation ownership distinct. If the same rule exists in client and server validation, name which source is authoritative.

## Accessibility contract

Pair with `accessibility-interaction-contract.md`.

Must include:

- label association for every control
- instructions before or near the control
- error text connected to the field
- error summary for multi-error submit
- focus movement after submit failure
- keyboard path through every field and action
- visible focus in all supported themes
- status/live-region behavior for async validation and submit result
- no placeholder-only label
- no color-only invalid/success state

## Responsive behavior

Do not squeeze desktop forms:

- multi-column form -> single-column groups on mobile
- review table -> stacked summary with edit links
- settings page -> searchable groups plus sticky save/status
- checkout -> step or section stack with total/action visible
- permission matrix -> grouped scope cards
- filter bar -> sheet or wrapped chips with clear all

Mobile needs input modes, target sizes, sticky actions when helpful, and enough room for errors without covering the field.

## QA checks

- Submit empty form and verify summary, field errors, focus, and preserved values.
- Enter invalid format, blur, correct it, and verify error clears.
- Trigger server failure and verify input is preserved with safe retry.
- Trigger permission/disabled state and verify reason plus next path.
- Submit successfully and verify confirmation, saved timestamp, next action, or artifact handoff.
- Test keyboard-only path through fields, errors, review, submit, and cancel.
- Test mobile layout with long labels, long errors, and soft keyboard.
- Test light/dark/high-contrast focus and invalid states when supported.
- Confirm chosen library owns real behavior; use native forms for tiny low-risk forms.

## Source anchors

- web.dev Learn Forms covers HTML form attributes, built-in validation, keyboard/input behavior, and form UX: https://web.dev/learn/forms
- web.dev form validation guidance recommends native validation and careful real-time validation such as validating after blur: https://web.dev/learn/forms/validation
- MDN documents HTML constraint validation and the Constraint Validation API for native form constraints and custom validation behavior: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- W3C WAI forms tutorial covers labels, grouping, instructions, validation, and user notifications for accessible forms: https://www.w3.org/WAI/tutorials/forms/
- W3C WCAG labels/instructions guidance explains why labels and instructions help prevent incomplete or incorrect submissions: https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html
