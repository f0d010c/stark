# Visual QA workflow

Use this after implementation for frontend work, high-craft pages, animation-heavy UI, public screenshots, and serious product screens.

This is the execution loop for `visual-qa-protocol.md`: capture evidence, critique, repair, then re-check. Use `qa-evidence-contract.md` first to decide the minimum evidence pack for the surface, then use `browser-qa-matrix.md` when browser/runtime probes are available. Use `visual-repair-playbook.md` to choose the first repair when the critique finds a failure.

Use `rendered-quality-gate.md` after the re-check when visual/DOM evidence exists, then use `design-acceptance-gate.md` to decide whether the design is allowed to stop at passable, good, high-craft, or portfolio quality. If either gate is below the requested level, keep repairing the highest-impact failure.

When the critique is based on a stronger reference, insert `benchmark-repair-loop.md` between critique and repair so the fix uses a benchmark lesson without copying trade dress.

## Required workflow

```md
Visual QA workflow
- Target:
- Viewports:
- Evidence captured:
- First critique:
- Fix applied:
- Re-check:
- Rendered quality gate:
- Acceptance gate:
- Remaining risk:
```

## 1. Capture evidence

For web work, read `browser-qa-matrix.md` and gather the strongest practical evidence:

- desktop screenshot or in-browser visual inspection
- mobile/narrow viewport screenshot or overflow check
- console errors
- horizontal overflow measurement
- primary interaction smoke test
- focus visibility for at least one interactive control
- reduced-motion check when motion exists
- canvas/video/image nonblank check when relevant

For native apps, use the platform's build/run/debug workflow and screenshot or simulator/device evidence where possible.

## 2. Critique the screenshot

Write a short critique:

```md
Design critique
- First impression:
- Main object clarity:
- Typography:
- Composition:
- Density:
- Motion:
- Assets:
- State coverage:
- Platform fit:
- One fix before shipping:
```

The critique must name at least one possible fix unless the design is genuinely production-ready. If the fix is obvious, apply it before final delivery.

## 3. Repair

Read `visual-repair-playbook.md`, then prioritize repairs in this order:

1. Broken layout: clipping, overlap, horizontal overflow, unreadable text.
2. Wrong surface type: marketing layout for an app, app density for a campaign.
3. Missing proof or states.
4. Weak typography or cheap copy.
5. Motion/accessibility failure.
6. Asset quality or framing.
7. Fine polish.

Do not spend time on decorative polish while high-severity issues remain.

## 4. Re-check

After the fix, re-check the evidence that originally failed.

Examples:

- If mobile overflow failed, measure overflow again.
- If hero object collided with text, capture the viewport again.
- If canvas was blank, run a nonblank pixel check again.
- If console had errors, reload and check logs again.

## Browser checks

Use whichever browser/testing tool is available in the environment. The minimum useful web checks are:

```js
{
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  viewport: [innerWidth, innerHeight],
  title: document.title,
  h1: document.querySelector("h1")?.textContent
}
```

For canvases:

- check dimensions are nonzero
- sample pixels or inspect rendered screenshot
- verify resize behavior
- verify fallback/poster

For video/images:

- check natural dimensions / ready state
- check alt text or accessible replacement
- check poster/fallback

## Final answer rule

For high-craft/frontend work, final answer should mention:

- what was checked
- what was fixed after visual QA
- what could not be checked, if anything

Do not claim "looks good" without evidence.

For serious UI work, finish with the compact scorecard from `design-quality-metrics.md` or state why scoring is not applicable.
