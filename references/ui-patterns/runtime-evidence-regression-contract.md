# Runtime evidence and regression contract

Use this after `browser-qa-matrix.md`, `rendered-quality-gate.md`, and `implementation-review-loop.md` when Stark needs to prove a rendered UI can stay good over time: README screenshots, gallery proofs, public demos, generated design batches, animation pages, component galleries, or high-craft UI that may be regenerated.

This contract turns one-off visual QA into repeatable evidence. It defines which screenshots, runtime probes, accessibility probes, performance signals, and interaction states become baselines, and how changes are accepted or repaired.

Source anchors:

- Playwright visual comparisons support screenshot snapshots for catching visual regressions and stabilizing screenshot output: https://playwright.dev/docs/test-snapshots
- Playwright screenshot APIs capture page or element images with viewport and clipping options: https://playwright.dev/docs/screenshots
- Playwright accessibility testing guidance uses `@axe-core/playwright` for WCAG-oriented automated checks: https://playwright.dev/docs/accessibility-testing
- web.dev Core Web Vitals names LCP, INP, and CLS as key loading, responsiveness, and visual-stability signals: https://web.dev/articles/vitals

## Required output

```md
Runtime evidence and regression contract
- Target surface:
- Evidence owner:
- Baseline viewports:
- Baseline states:
- Baseline interactions:
- Screenshot scope:
- Dynamic regions to mask:
- Runtime probes:
- Accessibility probes:
- Performance/vitals probes:
- Media/canvas probes:
- Acceptance threshold:
- Update-baseline rule:
- Failure triage:
- Stored artifacts:
```

If the result is public proof, do not rely on a single happy-path screenshot.

## Baseline viewports

At minimum:

- desktop: 1440 x 900 or the current app/browser viewport
- mobile: 390 x 844

Add:

- short desktop height when the hero, nav, or pinned sequence is tall
- tablet when the layout has sidebars, split panes, dense tables, or inspector panels
- wide desktop when the visual depends on a full-bleed stage, 3D object, chart wall, or hero art

## Baseline states

Choose states by surface:

| Surface | Required states |
|---|---|
| Landing/product proof | hero, proof section, CTA/final section, reduced motion |
| Animation/cinematic | poster frame, mid-beat, proof frame, reduced motion, mobile frame |
| Dashboard/admin | default, filtered, empty/no-results, error/permission, selected/bulk |
| Agent run/tool | queued/running, blocked, failed/retry, artifact/result |
| Editor/canvas | selected object, inspector change, empty canvas, export/saved |
| Checkout/trust | invalid submit, review/confirmation, payment/permission failure |
| Component gallery | default, hover/focus where capturable, disabled, loading, error, long label, mobile |

Do not accept public screenshots that only prove the happy path.

## Screenshot scope

Choose the smallest stable screenshot that proves the claim:

- full page for landing or gallery overview
- first viewport for hero composition and brand/motif
- component or panel for state galleries
- canvas/stage for media, 3D, animation, or editor proof
- table/list container for dense product UI
- mobile full viewport for responsive replacement

Avoid full-page screenshots when below-fold dynamic data, sticky headers, timers, or lazy media make the baseline noisy.

## Dynamic regions to mask

Mask or freeze:

- timestamps, clocks, relative times
- randomized names, avatars, IDs, hashes, generated media seeds
- loading spinners that are not the subject
- video/canvas regions when a poster or deterministic frame is the actual baseline
- third-party embeds, ads, analytics widgets, maps, or network-dependent content

Prefer deterministic fixtures and seeded generators over masking product-critical content.

## Runtime probes

Record the minimum stable facts that support the screenshot:

- page title and h1
- primary CTA/control names
- overflowX for desktop and mobile
- focusable count and unnamed button count
- image/video/canvas readiness and dimensions
- console errors/warnings that affect assets, hydration, WebGL/canvas, animation, or routing
- state-specific proof labels and recovery copy

These probes catch regressions that a pretty screenshot can hide.

## Accessibility probes

For public or serious UI:

- keyboard path reaches primary controls
- focus is visible on real backgrounds
- dialogs/menus/popovers return focus
- buttons, links, inputs, and icon controls have names
- reduced motion preserves content and controls
- axe/WCAG automated checks are run when available and not treated as a full accessibility audit

Automated checks are evidence, not a substitute for keyboard and focus inspection.

## Performance and stability probes

When motion, media, WebGL/canvas, generated imagery, data-viz, or large lists are present:

- LCP candidate is planned and visible
- CLS risk is checked through reserved geometry and no visible layout jumps
- interaction latency/INP risk is considered for heavy input or animation
- offscreen media/canvas pauses or lazy loads
- reduced-motion fallback avoids unnecessary heavy work
- console has no asset load failures or animation/rendering errors

Use lab evidence pragmatically; do not claim production Core Web Vitals without field data.

## Acceptance threshold

Define what passes:

- No page-level overflow at baseline viewports.
- Public proof screenshots meet `rendered-quality-gate.md` at public or better.
- Portfolio claims meet portfolio or name the remaining delta.
- State baselines show the required state and recovery path.
- Accessibility probes have no blocking failure.
- Performance probes have no obvious LCP/CLS/INP risk for the chosen surface.
- Screenshot diffs are either intentional and documented or repaired.

## Update-baseline rule

Update screenshots only when:

- the intended design changed
- a repair improved the failed evidence
- fixture data changed intentionally
- browser/OS/font rendering changed and the visual result is still acceptable

Never update a baseline just to silence a failed proof. Name the reason in the report.

## Failure triage

| Failure | First response |
|---|---|
| Screenshot diff in main object | inspect design drift before accepting |
| Mobile diff/overflow | run adaptive composition repair |
| Type reflow/clipping | run text resilience and typography repair |
| Missing state/proof labels | repair fixtures, state model, or copy |
| Console asset error | fix path/loading/fallback before visual polish |
| Axe/name/focus failure | repair accessibility contract before accepting visual quality |
| CLS/layout jump | reserve geometry or remove layout animation |
| Blank media/canvas | add poster/fallback and nonblank check |

## Hard fails

- Public README/gallery screenshot has no reproducible viewport or state.
- Baseline hides the primary product object behind a mask.
- Only desktop happy-path proof exists for a responsive/product UI.
- Failed visual diff is accepted without a documented intended change.
- Accessibility or console failures are ignored because the screenshot looks good.
- Performance risk is dismissed while heavy media/canvas/animation remains always active.
- Baselines use random unseeded data that changes the UI meaning between runs.
