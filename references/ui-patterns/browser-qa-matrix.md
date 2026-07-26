# Browser QA matrix

Use this when Stark needs to verify a rendered web UI with browser evidence before calling it good.

This file turns design-quality claims into concrete probes. Use it after `qa-evidence-contract.md` and before `visual-qa-workflow.md` when a browser, Playwright, or the in-app browser is available. For custom widgets, use `accessibility-interaction-contract.md` to define the expected keyboard/focus/live-region behavior before probing it.

When performance is a risk, pair browser probes with `performance-budget-contract.md` so the evidence covers critical path, layout shift, heavy media/canvas, interaction latency, reduced motion, and rejected effects.

## Browser QA Brief

```md
Browser QA matrix
- Target:
- Surface:
- Risk level:
- Viewports:
- Required probes:
- Evidence captured:
- Failed evidence:
- Fix applied:
- Re-check:
- Missing evidence:
```

## Probe Matrix

| Risk | Evidence | Probe |
|---|---|---|
| Page-level horizontal overflow | runtime measurement | `scrollWidth - clientWidth` at desktop and mobile widths |
| Clipped hero/type | screenshot or bounding boxes | desktop + mobile screenshot, inspect overflowing text containers |
| Generic or missing product proof | DOM + screenshot | h1, CTA, proof labels, media/assets visible above fold |
| Cheap or placeholder copy | DOM text review | h1, CTA, labels, empty/error copy, repeated banned phrases |
| Inert controls | interaction smoke | click/tap primary CTA, tabs, filters, dialogs, command palette, forms |
| Poor keyboard/focus | user-facing locators | Tab to primary controls, visible focus, escape/close behavior |
| Missing accessibility names | role/label locators | buttons/links/inputs have visible or accessible names |
| Reduced motion failure | media emulation + screenshot | emulate reduced motion; all information remains available |
| Blank canvas/WebGL | canvas dimensions + pixel/screenshot check | nonzero canvas, nonblank pixels or visible fallback |
| Broken video/image/Rive/Lottie | media readiness + screenshot | natural dimensions, ready state, poster/fallback, no missing asset errors |
| Table/data overflow | runtime + screenshot | bounded scroll, priority columns, mobile replacement |
| State coverage missing | DOM/state triggers | empty/loading/error/permission/success/stale/blocked states visible or documented |
| Runtime errors | console capture | no missing assets, hydration errors, WebGL errors, animation warnings |
| Layout shift/performance risk | visual/runtime inspection | avoid animating layout properties; check major layout jumps where practical |
| Typography fit | screenshot + DOM text | line breaks, button text, labels, numeric alignment, font loading fallback |
| Mobile touch usability | mobile viewport + interaction | target size, sticky action, no hover-only essential path |

## Standard Web Probe

Use this as the minimum runtime data shape:

```js
({
  title: document.title,
  h1: document.querySelector("h1")?.textContent?.trim() || null,
  overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  viewport: [window.innerWidth, window.innerHeight],
  focusables: [...document.querySelectorAll("button,a,input,select,textarea,[tabindex]:not([tabindex='-1'])")].length,
  buttonsWithoutNames: [...document.querySelectorAll("button")].filter((el) => !el.textContent?.trim() && !el.getAttribute("aria-label")).length,
  images: [...document.images].map((img) => ({
    alt: img.alt,
    complete: img.complete,
    w: img.naturalWidth,
    h: img.naturalHeight
  })),
  canvases: [...document.querySelectorAll("canvas")].map((canvas) => ({
    w: canvas.width,
    h: canvas.height
  })),
  videos: [...document.querySelectorAll("video")].map((video) => ({
    readyState: video.readyState,
    paused: video.paused,
    w: video.videoWidth,
    h: video.videoHeight
  }))
})
```

## Surface Packs

### Landing / Product Proof

Required:

- desktop screenshot
- mobile screenshot or overflow probe
- h1/CTA/proof-label DOM text
- console check
- primary CTA interaction
- reduced-motion check if motion exists
- media/image/video nonblank check when assets carry proof

Hard fail:

- proof is only a claim
- CTA is below a long animation with no alternate path
- mobile hero clips or hides the product object

### Animation / Cinematic

Required:

- stable hero screenshot
- mid-sequence or pinned-section screenshot when practical
- reduced-motion emulation
- nonblank media/canvas/video/Rive/Lottie evidence
- pause/stop/hide evidence for persistent autoplay motion when applicable
- console/performance-risk check

Hard fail:

- reduced motion removes information
- pinned story traps the user
- multiple libraries animate the same element without ownership
- blank canvas/video with no fallback

### Dashboard / Admin / CRM

Required:

- desktop screenshot
- narrow/mobile overflow probe
- table/list/filter/search interaction
- state evidence for empty/loading/error/stale/permission/selection/bulk action where relevant
- keyboard/focus spot check
- console check

Hard fail:

- table causes page-level overflow
- filters or bulk actions are decorative
- no failed/blocked/recovery state

### Checkout / Trust / Permissions

Required:

- desktop/mobile screenshot
- primary form or permission action smoke
- validation failure with preserved input
- destructive/payment/permission copy visible near action
- focus and target-size check
- no distracting autoplay motion near risk

Hard fail:

- hidden cancellation/renewal/risk
- validation clears user input
- destructive action lacks confirmation or recovery

### Docs / Developer Platform

Required:

- heading hierarchy check
- command/search or nav interaction
- code block overflow check
- copy button state when present
- mobile nav check
- 404/empty/search-empty state where practical

Hard fail:

- code cannot be read or copied
- nav/search is hidden behind animation
- page has horizontal overflow from code blocks

### Editor / Canvas / Agent Run

Required:

- primary canvas/timeline screenshot
- inspector/detail panel interaction
- keyboard/focus spot check
- save/export/retry/stop state where relevant
- blank/error fallback for canvas/media/logs
- mobile replacement check

Hard fail:

- controls move away during interaction
- long-running state is spinner-only
- artifact/log/error is hidden

## Reduced Motion Probe

When using Playwright:

```ts
await page.emulateMedia({ reducedMotion: "reduce" });
```

Then verify:

- all content remains visible
- no essential hover-only or scroll-only reveal
- video/canvas/story has a poster, static frame, or stacked fallback
- controls and CTA remain reachable

## Viewport Set

Use at least:

- desktop: 1440 x 900 or the current app viewport
- mobile: 390 x 844

Add tablet or short-height checks when:

- hero text is large
- nav is dense
- pinned sections exist
- canvas/video/object stages are full-bleed
- forms or tables have many controls

## Evidence Report

Keep it concise:

```md
Browser evidence
- Viewports:
- Runtime probe:
- Screenshots:
- Interactions:
- Reduced motion:
- Media/canvas:
- Console:
- Failed evidence:
- Fix and re-check:
- Missing evidence:
```

## Source Anchors

- Playwright screenshots capture page or element images for visual verification: https://playwright.dev/docs/screenshots
- Playwright screenshot comparisons support visual regression testing: https://playwright.dev/docs/test-snapshots
- Playwright `page.evaluate()` runs JavaScript in the page context for runtime probes: https://playwright.dev/docs/evaluating
- Playwright emulation supports device, viewport, and media options such as reduced motion: https://playwright.dev/docs/emulation
- Playwright locators prioritize user-facing roles, labels, placeholder, text, alt text, and test IDs: https://playwright.dev/docs/locators
- Chrome DevTools Rendering/Performance guidance covers layout shift and rendering performance inspection: https://developer.chrome.com/docs/devtools/rendering/performance/
