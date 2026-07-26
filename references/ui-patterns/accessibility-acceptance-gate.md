# Accessibility acceptance gate

Use this before accepting serious web UI, native-like app UI, public demos, generated screenshots, animation-led pages, forms, dashboards, docs, checkout, command surfaces, editors, and any interface with custom controls.

This gate complements `accessibility-interaction-contract.md`. The interaction contract defines behavior before implementation; this file decides whether the built or proposed surface is acceptable, needs repair, or is blocked.

## Required output

```md
Accessibility acceptance gate
- Surface:
- Target level: WCAG 2.2 A / AA / product-specific stricter target
- Evidence inspected:
- Semantic structure:
- Names/roles/values:
- Keyboard/focus:
- Contrast/non-text contrast:
- Text resize/reflow:
- Motion/media:
- Target/input modalities:
- Forms/errors/status:
- Custom widget/APG behavior:
- Automated checks:
- Manual checks:
- Hard fails:
- Required repair:
- Re-check evidence:
- Remaining risk:
- Gate result: blocked / needs repair / acceptable with risk / pass
```

## Gate levels

- Internal sketch: name missing evidence and avoid claims.
- Serious product UI: require WCAG 2.2 A/AA-relevant checks for the surface plus APG behavior for custom widgets.
- Public, release, gallery, portfolio, checkout, permissions, data, or high-craft UI: block on critical A/AA failures and any untested custom control that owns the primary task.

Do not claim WCAG conformance unless the project has completed a proper accessibility audit. For Stark outputs, report evidence and remaining risk.

## Evidence matrix

| Dimension | Check | Evidence |
|---|---|---|
| Semantic structure | headings, landmarks, lists, tables, form groups, page title | DOM/role inspection, accessibility tree, code review |
| Names/roles/values | buttons, links, icon controls, inputs, media controls, custom widgets | role/name locators, accessibility snapshot, APG contract |
| Keyboard/focus | tab order, shift-tab, enter/space, escape, arrow keys where expected, no traps | manual/browser keyboard probe |
| Focus visibility | visible indicator, not hidden behind sticky UI, works on real tokens/modes | screenshot/visual check on focused elements |
| Contrast | text contrast, non-text contrast for controls/focus/charts | token inspection, browser/axe check, visual check |
| Text resize/reflow | 200% zoom or equivalent, no page-level horizontal overflow, labels/buttons still usable | browser zoom/viewport probe |
| Motion/media | reduced-motion substitution, pause/stop/hide for persistent motion, no unsafe flashing | media emulation, screenshot, motion-frame QA |
| Target/input | target size, pointer cancellation, drag alternatives, no hover-only essential path | mobile/touch/keyboard probe |
| Forms/errors/status | labels/instructions, invalid state, preserved input, error summary, status/live-region behavior | invalid-submit probe, DOM/state check |
| Custom widgets | dialogs, comboboxes, tabs, menus, grids, carousels follow APG expectations | pattern-specific keyboard/focus probe |

## Hard fails

- Primary action, navigation, or recovery path cannot be reached by keyboard.
- Focus is missing, invisible, trapped, lost, or obscured in a critical flow.
- Icon-only or custom controls have no accessible name.
- Custom widget uses ARIA roles without matching keyboard, state, and focus behavior.
- Form errors are color-only, toast-only, detached from fields, or clear user input.
- Critical text, labels, prices, warnings, or controls are baked into images, canvas, video, Rive, or Lottie without equivalent HTML.
- Reduced motion removes content, proof, orientation, or controls.
- Page-level horizontal scrolling appears at normal mobile width or at text zoom/reflow checks.
- Low contrast makes body text, controls, focus, selected, disabled, invalid, chart, or warning states unreadable.
- Persistent animation, carousel, video, or marquee has no pause/stop/hide when it affects use.

## Repair order

1. Fix keyboard/focus blockers and missing names first.
2. Fix form/recovery/status failures next.
3. Fix contrast, target size, reduced motion, and reflow failures before visual polish.
4. Fix APG mismatches for any custom widget that remains.
5. Re-check the same evidence, not a nearby happy path.

## Automated vs manual checks

Automated tools are useful for missing names, obvious contrast issues, invalid ARIA, landmarks, and form-label problems. They do not prove keyboard behavior, focus movement, reduced-motion quality, cognitive clarity, mobile target comfort, or whether the primary task is actually usable.

If only automated checks ran, the gate result is at most `acceptable with risk` for serious work.

## Source anchors

- WCAG 2.2 organizes accessibility around perceivable, operable, understandable, and robust principles, with testable success criteria and A/AA/AAA levels.
- W3C's WCAG quick reference lists criteria and techniques for text alternatives, contrast, keyboard, focus, target size, labels, errors, names/roles/values, and status messages.
- WAI-ARIA APG provides design patterns, examples, names/descriptions guidance, landmarks, and keyboard support expectations for custom widgets.
- WCAG 2.2 adds criteria that matter for modern UI such as focus not obscured, dragging movements, target size minimum, redundant entry, and accessible authentication.
