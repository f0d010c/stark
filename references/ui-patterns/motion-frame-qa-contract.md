# Motion frame QA contract

Use this after `choreography-state-machine.md`, `motion-pattern-atlas.md`, `motion-library-playbooks.md`, and `media-loading-contract.md` when animation quality is central: cinematic heroes, scroll-scrubbed proof, shared-object transitions, 3D scenes, Rive/Lottie states, video composites, kinetic type, or generated key-art reveals.

Premium motion must work as a sequence of composed frames. If the still frames are messy, unreadable, blank, or copied from a reference, the motion will feel low quality even when it technically animates.

## Required output

```md
Motion frame QA contract
- Target:
- Timeline owner:
- Key frames:
- Capture method:
- Stable selectors/state hooks:
- Reduced-motion frames:
- Mobile frames:
- Interaction frames:
- Nonblank media probes:
- Visual comparison risk:
- Required repair:
- Re-check evidence:
```

## Key frame set

Every serious animation needs a small frame set before acceptance.

| Frame | Job | Must Prove |
|---|---|---|
| `poster` | useful before runtime motion | main object, copy, CTA, and proof are readable |
| `start` | first animated state | no blank canvas/video/image, no layout shift |
| `beat-1` | first focal change | one thing changes and attention is directed |
| `beat-2` | transformation or inspection | proof, labels, or controls are readable while motion pauses |
| `proof` | output/evidence state | product value is visible without explanation |
| `end` | return to page/app control | CTA, next section, or primary action is reachable |
| `reduced-motion` | accessibility substitute | same information exists without continuous motion |
| `mobile-proof` | narrow viewport version | the product object is not squeezed, cropped away, or hidden |

Do not capture 30 random frames. Capture the frames that prove story, usability, and visual quality.

## Capture methods

Choose the strongest practical method for the stack.

| Owner | Capture approach |
|---|---|
| CSS / WAAPI | pause animations, set current time or class/data state, capture screenshot |
| Motion | expose deterministic state props, route/story ids, or test controls; respect reduced motion |
| GSAP | use timeline labels, `progress()`, `seek()`, or ScrollTrigger label/scroll positions |
| native scroll CSS | scroll to named sections or progress markers; capture before/after |
| Three/R3F/canvas | set camera/state seed, render one frame, sample pixels, capture desktop/mobile |
| Rive | drive named state-machine inputs to known states; capture poster and active state |
| Lottie | capture first frame, meaningful mid-frame, and loop frame; verify fallback |
| video | capture poster, paused proof timestamp, and reduced-motion/static equivalent |
| View Transitions | capture old state, transition midpoint when practical, final state, focus target |

The implementation may need hidden test controls, storybook stories, query params, data attributes, or dev-only frame selectors. Keep them stable and non-user-facing.

## Frame quality checklist

For every captured frame, check:

- main object is visible and not competing with decorative props
- typography is readable and not trapped in motion blur, raster art, or canvas
- proof labels or controls are stable long enough to understand
- focal hierarchy matches the intended beat
- no important content is clipped, overlapped, or hidden by a transition
- media/canvas/Rive/Lottie/video is nonblank
- focusable controls are not visually hidden or unreachable
- mobile frame preserves the same product job with fewer moving parts
- reduced-motion frame preserves proof, not only the mood

## Visual comparison policy

Use visual comparison only on deterministic frames.

- Snapshot stable states, not free-running particles, randomized key art, uncontrolled videos, or live data.
- Freeze time, random seeds, fixture data, scroll position, viewport, fonts, and theme where possible.
- Mask intentionally volatile regions if the product value is elsewhere.
- Prefer a short named frame set over full-page screenshots of every scroll position.
- Treat visual-diff failures as a triage signal: layout, typography, proof, media, or expected art change.

## Hard fails

- Animation passes because the page moves, but no key frame is screenshot-worthy.
- Scroll-scrubbed story has no named labels or capture positions.
- Reduced motion removes the proof state.
- Mobile capture shows a shrunken desktop stage, clipped object, or hidden CTA.
- Canvas/video/Rive/Lottie can be blank at a key frame.
- Essential copy or controls exist only inside media.
- Visual comparison is attempted on nondeterministic frames without masking or seeding.

## Source anchors

- Playwright visual comparison supports screenshot assertions through `toHaveScreenshot()`: https://playwright.dev/docs/test-snapshots
- GSAP timelines support labels, and ScrollTrigger exposes timeline-linked scroll positions and label helpers: https://gsap.com/docs/v3/GSAP/Timeline/ and https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- MDN documents the Web Animations `Animation` interface with playback controls and `currentTime`: https://developer.mozilla.org/en-US/docs/Web/API/Animation
- Motion documents reduced-motion APIs for replacing movement with accessible alternatives: https://motion.dev/docs/react-use-reduced-motion
- WCAG Pause, Stop, Hide requires controls for automatic moving content that lasts more than five seconds and appears with other content: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
