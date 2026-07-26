# UX measurement and instrumentation contract

Use this when a serious product UI, onboarding flow, checkout/trust surface, dashboard, editor, agent run UI, docs platform, product proof page, or generated showcase needs usability evidence beyond screenshot quality.

This file complements `design-quality-metrics.md`, `qa-evidence-contract.md`, `task-flow-acceptance-harness.md`, `conversion-proof-system.md`, `performance-budget-contract.md`, and `accessibility-interaction-contract.md`. Use it before final acceptance when the design should prove that users can succeed, recover, trust the surface, and keep using it after the first impression.

The goal is not to add tracking everywhere. The goal is to define the smallest privacy-safe evidence loop that tells whether the UI works.

## Required output

```md
UX measurement and instrumentation contract
- Surface:
- User mode:
- Primary task:
- Success metric:
- Leading indicators:
- Friction signals:
- Failure/recovery metrics:
- Event taxonomy:
- Instrumented controls/states:
- Privacy/data boundary:
- Accessibility signal:
- Performance signal:
- Experiment/variant boundary:
- QA evidence:
- Post-launch learning loop:
```

## Metric set

Pick only metrics that match the surface. Do not reward dark patterns, hidden exits, fake engagement, or friction that only improves a conversion number.

| Metric type | Use when | Good signal |
|---|---|---|
| Task success | Any real workflow | user reaches the intended outcome without help |
| Time to first value | Onboarding, empty states, first project | user gets a meaningful result quickly |
| Time on task | Repeated work, dashboards, editors | task gets faster without more errors |
| Error rate | Forms, checkout, setup, data entry | preventable errors decrease |
| Recovery rate | Risk, permissions, failures, agent runs | users can retry, edit, resume, or escape |
| Abandon/drop-off | Funnels, setup, checkout, imports | exits identify unclear or risky steps |
| Validation friction | Forms, filters, settings, checkout | errors are understandable and input is preserved |
| Search refinement | Docs, command, marketplace, dashboards | zero-result and repeated refinements decrease |
| Speed-path usage | Power-user tools, repeated ops | keyboard, saved views, bulk actions, command paths get used |
| State coverage observed | Product apps, demos, QA galleries | empty/loading/error/permission/stale states are seen and recoverable |
| Accessibility evidence | Custom controls, motion, dense UI | keyboard/focus/reduced-motion path is measurable |
| Performance evidence | Media, motion, WebGL, data views | LCP, INP, CLS, or interaction latency stay inside budget |
| Product proof comprehension | Landing/product proof pages | users reach proof, inspect examples, and choose a next action |
| Activation/conversion | Signup, install, purchase, demo | conversion improves without hiding risk, cost, or cancellation |
| Retention/repeated-use | Workflows used over time | users return and complete the same job with less friction |
| Qualitative critique tags | Design dogfood, beta, internal tests | repeated wording becomes a repair input |

## Surface recipes

### Product proof page

- Success metric: qualified primary CTA, demo start, install, docs start, or product proof interaction.
- Leading indicators: hero proof viewed, proof section reached, example inspected, objection/trust detail opened, secondary CTA used.
- Friction signals: CTA ignored, proof skipped, pricing/security clicked repeatedly, mobile proof hidden, reduced-motion fallback loses meaning.
- Events: `product_proof_viewed`, `proof_example_opened`, `objection_detail_opened`, `primary_cta_clicked`, `docs_or_demo_started`.

### Onboarding or first run

- Success metric: first project, first import, first useful output, workspace created, or setup completed.
- Leading indicators: sample content used, deferrable step skipped safely, permission accepted after context, checklist progress.
- Friction signals: setup abandonment, permission denial, repeated validation error, help opened at same step, first value never reached.
- Events: `onboarding_started`, `sample_content_used`, `permission_prompt_viewed`, `setup_step_completed`, `first_value_reached`, `setup_abandoned`.

### Dashboard or operations surface

- Success metric: user identifies priority work and completes the next action.
- Leading indicators: saved view used, filter/search/sort changed, detail opened, selection made, bulk action completed, stale/error state recovered.
- Friction signals: repeated filter clearing, row opened then abandoned, bulk action cancelled after unclear preview, stale data ignored.
- Events: `view_loaded`, `filter_changed`, `priority_item_opened`, `bulk_action_previewed`, `bulk_action_completed`, `stale_data_refreshed`, `error_recovered`.

### Editor, canvas, or builder

- Success metric: user creates, edits, validates, exports, or publishes the main object.
- Leading indicators: object selected, inspector changed, undo/redo used, keyboard shortcut used, validation issue fixed, export preview opened.
- Friction signals: repeated undo after same tool, abandoned export, inspector changes not applied, canvas zoom/pan confusion.
- Events: `canvas_object_selected`, `tool_used`, `inspector_value_changed`, `undo_used`, `validation_issue_fixed`, `export_completed`.

### Agent run or automation UI

- Success metric: user understands progress, handles blockers, and accepts/uses the artifact.
- Leading indicators: plan expanded, tool output inspected, approval granted, stop/retry/resume used, artifact opened/downloaded.
- Friction signals: blocked state ignored, user stops without recovery, logs copied before outcome, retry loop, artifact never inspected.
- Events: `agent_run_started`, `plan_step_expanded`, `approval_decided`, `run_blocked`, `run_retried`, `artifact_opened`, `artifact_accepted`.

### Checkout, trust, or permission flow

- Success metric: user makes an informed consent, purchase, install, or permission decision.
- Leading indicators: terms/cancellation/security viewed, scope changed, risk detail opened, validation recovered, payment failure recovered.
- Friction signals: surprise cost/backtracking, denied permission with no recovery, validation loses input, destructive action ambiguity.
- Events: `plan_selected`, `risk_detail_opened`, `permission_scope_changed`, `checkout_validation_failed`, `payment_recovered`, `consent_confirmed`.

### Docs or developer tool

- Success metric: user finds the right instruction and completes a command, copy, integration, or route.
- Leading indicators: search succeeds, code copied, version switched, command palette used, feedback submitted, 404/offline recovered.
- Friction signals: zero-result search, repeated query refinement, copied obsolete code, version mismatch, navigation pogo-sticking.
- Events: `docs_search_submitted`, `docs_zero_results`, `code_copied`, `version_changed`, `command_palette_opened`, `feedback_submitted`.

## Event taxonomy rules

- Use domain-specific names that can survive redesign: `artifact_opened` is better than `purple_button_clicked`.
- Name the object and outcome, not the visual location.
- Include state events for empty, loading, error, permission, stale, blocked, validation, and recovery when those states exist.
- Capture primary action, secondary action, risky action, recovery action, speed path, and abandon point.
- Pair every event with the fixture/state or route where it can be QA-tested.
- Keep analytics names stable across visual variants so design experiments can be compared.

## Privacy and trust boundaries

- Do not instrument personal data, prompts, documents, health/financial details, private source code, or message contents unless the product explicitly requires it and the data is minimized.
- Prefer event names, object type, state, timing bucket, and anonymous outcome over raw content.
- Do not log secrets, API keys, tokens, full URLs with sensitive query strings, pasted text, file contents, or user-generated artifacts.
- For generated demos, use synthetic fixtures and mark analytics as illustrative unless real collection is implemented.
- If a metric would encourage hiding cancel, burying terms, trapping scroll, or nagging for permissions, reject the metric.

## QA checks

- The primary task has one success metric and at least two friction signals.
- Every primary, risky, and recovery action has either an event, test hook, or QA probe.
- Empty/loading/error/permission/stale states have recovery evidence when relevant.
- Accessibility signals include keyboard/focus/reduced-motion or the specific accessibility risk for the surface.
- Performance signals include Core Web Vitals or interaction latency when motion, media, WebGL/canvas, charts, or large data are involved.
- Event names are domain-specific, stable, and not tied to color/layout.
- Privacy boundary is explicit and rejects sensitive content logging.
- Measurement does not replace qualitative critique; repeated critique words feed `feedback-memory-loop.md`.

## Source anchors

- NN/g describes usability measurement through observed task success, time, errors, and satisfaction: https://www.nngroup.com/articles/usability-metrics/
- The HEART framework groups UX metrics around happiness, engagement, adoption, retention, and task success: https://www.heartframework.com/
- Web.dev defines Core Web Vitals as LCP, INP, and CLS for loading, responsiveness, and visual stability: https://web.dev/articles/vitals
- WCAG 2.2 provides accessibility success criteria that should inform measurable keyboard, focus, motion, and error evidence: https://www.w3.org/TR/WCAG22/
