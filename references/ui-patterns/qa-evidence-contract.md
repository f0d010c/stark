# QA evidence contract

Use this before final delivery on serious UI work. It converts "visual QA" into a concrete evidence pack by surface type.

This file complements `browser-qa-matrix.md`, `visual-qa-protocol.md`, `visual-qa-workflow.md`, and `design-quality-metrics.md`. Use those files for what to inspect and how to score; use this file for the minimum proof Stark should gather or explicitly mark as missing. Use `accessibility-interaction-contract.md` when keyboard, focus, ARIA/live-region, hidden-content, reduced-motion, or touch behavior is part of the risk.

Use `design-acceptance-gate.md` after evidence and scoring. Missing evidence can be acceptable for a quick internal sketch, but it is not acceptable for public, high-craft, portfolio, or "go all out" work unless clearly named as remaining risk.

Use `performance-budget-contract.md` when animation, media, WebGL/canvas, data visualization, large data views, or multiple frontend libraries are part of the delivery risk.

Use `ux-measurement-instrumentation-contract.md` when the evidence pack needs to prove product success, not only rendered quality. It defines success metrics, friction/recovery signals, event taxonomy, privacy boundaries, accessibility/performance signals, and learning-loop evidence.

## Required output

```md
QA evidence contract
- Surface:
- Risk level:
- Evidence required:
- Evidence captured:
- Hard fails:
- Fix applied:
- Re-check:
- Missing evidence:
- Remaining risk:
```

## Evidence ladder

Use the strongest practical evidence available in the environment.

| Level | Evidence | Proves |
|---|---|---|
| 0 | Decision brief only | intent, not implementation |
| 1 | Static code inspection | structure, labels, fallback intent |
| 2 | Build/lint/test | implementation health |
| 3 | Browser DOM/console/evaluate | runtime text, overflow, errors, state |
| 4 | Desktop + mobile screenshots | visual hierarchy, framing, containment |
| 5 | Interaction/reduced-motion/media probes | controls, accessibility, animation fallback, nonblank assets |
| 6 | Re-check after repair | the fix actually changed the failing evidence |

Do not use level 0 or 1 evidence to claim a rendered visual result is good.

## Minimum evidence by surface

### Static landing / docs fragment

Required:

- desktop screenshot or browser visual inspection
- mobile viewport screenshot or overflow measurement
- console check when served in browser
- heading/title text check
- reduced-motion check if any motion exists

Hard fails:

- clipped hero text
- page-level horizontal overflow
- missing CTA/action
- generic placeholder copy/media

### Vite/React product UI

Required:

- build or dev server health when available
- desktop and mobile screenshot
- console check
- primary interaction smoke test
- keyboard/focus spot check
- empty/loading/error/permission/success state evidence when relevant

Hard fails:

- core controls are inert
- stateful UI is only a screenshot/mock
- focus cannot be seen or escapes incorrectly
- mobile replacement for dense regions is missing

### Animation-heavy landing page

Required:

- desktop and mobile screenshots at stable moments
- reduced-motion emulation or static fallback evidence
- console check
- primary CTA visibility check
- motion ownership/fallback statement from `choreography-state-machine.md`

Hard fails:

- important content disappears when motion is reduced
- scroll/pinned story traps the user
- controls move away during interaction
- long autoplaying motion has no pause/stop/hide when required

### Three/R3F/canvas/video/Rive/Lottie

Required:

- nonblank media/canvas evidence
- desktop and mobile framing check
- fallback/poster/reduced-motion evidence
- console/WebGL/media error check
- proof that essential UI text exists outside the asset

Hard fails:

- blank canvas/video/artboard
- essential text baked into unreadable media
- no poster/static fallback
- WebGL/media errors

### Dashboard/admin/CRM

Required:

- desktop screenshot
- narrow/mobile containment proof
- table/list/filter/search interaction check when present
- state matrix evidence: empty/loading/error/permission/stale/selection/bulk action as relevant
- keyboard/focus spot check

Hard fails:

- decorative cards replace needed tables/lists
- table causes page-level overflow
- filters/bulk actions are fake
- no recovery state for failed or blocked work

### Checkout/pricing/trust

Required:

- desktop/mobile screenshot
- price/terms/cancellation/risk copy near CTA
- form validation and preserved input path
- permission/error/recovery state when relevant
- focus and target-size spot check

Hard fails:

- surprise cost or buried cancellation/renewal details
- validation loses user input
- destructive/payment action unclear
- playful motion near risk without purpose

### Native app or desktop shell

Required:

- build/run result where practical
- screenshot or simulator/window evidence
- platform idiom check: native type, controls, navigation, menus/window behavior
- state/recovery evidence for file/network/permission flows

Hard fails:

- web layout squeezed into native app
- platform type/icons/controls are wrong
- file/permission failures have no recovery

## Browser probe checklist

When a browser is available, read `browser-qa-matrix.md` and collect a compact probe:

```js
{
  title: document.title,
  h1: document.querySelector("h1")?.textContent,
  overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  focusables: [...document.querySelectorAll("button,a,input,select,textarea,[tabindex]:not([tabindex='-1'])")].length,
  images: [...document.images].map(img => ({ alt: img.alt, complete: img.complete, w: img.naturalWidth, h: img.naturalHeight })),
  canvases: [...document.querySelectorAll("canvas")].map(c => ({ w: c.width, h: c.height })),
  videos: [...document.querySelectorAll("video")].map(v => ({ readyState: v.readyState, paused: v.paused, w: v.videoWidth, h: v.videoHeight }))
}
```

Use role/label based interactions where possible. Playwright recommends user-facing locators such as role, label, placeholder, and text because they mirror how users perceive the page.

## Hard-fail policy

If a hard fail appears:

1. Name it.
2. Apply the smallest high-impact fix.
3. Re-check the same evidence.
4. Report remaining risk.

Do not compensate for a hard fail with visual polish, extra animation, or more documentation.

## Missing evidence policy

If evidence cannot be gathered, say exactly why and mark the score uncertain. Examples:

- "No browser available, screenshot evidence missing."
- "Could not run build because package scripts are absent."
- "Could not verify canvas pixels, only fallback code inspected."

Unverified is not passing.

## Source anchors

- Playwright screenshots capture page or element images for visual verification: https://playwright.dev/docs/screenshots
- Playwright visual comparisons support screenshot-based visual testing: https://playwright.dev/docs/test-snapshots
- Playwright `page.evaluate()` runs JavaScript in the page context for runtime probes: https://playwright.dev/docs/evaluating
- Playwright locators prioritize user-facing roles, labels, placeholder, text, and test IDs: https://playwright.dev/docs/locators
