# Motion timing and easing system

Use this after `choreography-state-machine.md` and before `motion-library-playbooks.md` when motion quality matters. The state machine says what happens; this contract says how it feels over time.

The goal is to make animation legible, tasteful, interruptible, performant, and accessible. Timing is a product decision: it controls attention, confidence, perceived speed, and whether motion feels expensive or cheap.

## Output contract

```md
Motion timing and easing
- Surface:
- User frequency:
- Motion job:
- Attention hierarchy:
- Timing scale:
- Easing language:
- Stagger/sequence rule:
- Interruption behavior:
- Resting frame:
- Reduced-motion substitution:
- Persistent-motion control:
- Performance-safe properties:
- QA frames:
- Rejected timing:
```

## Timing scale

Choose the shortest timing that still communicates the job.

| Motion job | Duration | Easing | Notes |
|---|---:|---|---|
| Press/tap feedback | 60-120ms | ease-out or direct spring | should feel immediate and never move the target away |
| Hover/focus affordance | 80-140ms | ease-out | optional enhancement; focus must remain obvious |
| Toggle/selection/status | 120-200ms | ease-out or small spring | confirms state without stealing attention |
| Toast/status arrival | 120-220ms | ease-out in, ease-in out | content should be readable before it leaves |
| Disclosure/panel/sheet | 160-280ms | spring or ease-out | must be interruptible and focus-managed |
| Command palette/dialog | 140-260ms | snappy spring/ease-out | speed beats drama |
| Route/detail continuity | 180-420ms | spring/shared layout | preserve orientation; do not hide loading/errors |
| Layout reflow/shared object | 250-600ms | spring, damped | use for meaningful continuity only |
| Hero object reveal | 700-1400ms | authored ease, skippable | first frame and final frame must both work |
| Scroll proof scene | user-controlled | scrub/progress | 2-4 scenes; avoid scroll traps |
| Looping ambience | slow/subtle | linear/sine | pausable if it lasts or competes with content |

If the surface is a dashboard, checkout, settings, admin, docs, editor, or repeated-use tool, bias to the low end and use motion as feedback. If the surface is a campaign, cinematic launch, or gallery proof, a longer signature beat is allowed only when it proves the product.

## Easing language

Pick an easing personality that matches the product risk and surface frequency.

| Easing language | Use for | Avoid |
|---|---|---|
| Snappy utility | command palettes, dashboards, forms, tables, agent runs | cinematic hero reveals |
| Damped spring | sheets, shared object continuity, selected states, drag release | legal/risk copy, destructive actions, dense data rows |
| Authored cinematic | campaign heroes, product films, SVG/path staging | repeated workflow controls |
| Mechanical precision | developer tools, industrial/control UIs, timelines | playful consumer moments |
| Gentle editorial | docs, explainers, text reveals, galleries | urgent status/error states |
| Linear/progress | progress bars, scrubbed playback, continuous media | object entrances or feedback |

Use overshoot sparingly. Bounce, elastic, and exaggerated back easing usually feel cheap in product UI unless the brand is explicitly playful and the motion does not affect risk, reading, or control placement.

## Staging rules

- Animate one focal change at a time.
- Stagger only to communicate grouping, order, workflow, or causality.
- Keep primary copy readable before secondary decoration moves.
- Let important objects land before labels, CTAs, or controls ask for action.
- Do not make every card enter separately; that is a generic generated-design tell.
- If a sequence has more than five meaningful beats, split it into scenes or make it user-controlled.
- Design the resting frame. The page must look intentional when motion is paused, reduced, or screenshotted.

## Interruption behavior

Every serious animation needs an interruption rule:

- User scrolls past: let the scene complete to a stable frame or release control quickly.
- User opens another view: cancel/finish the old animation without orphaned transforms.
- User repeats action: debounce, reverse, or retarget; do not stack duplicate timelines.
- Route changes: cleanup timelines, restore focus/scroll deliberately, preserve loading/error visibility.
- Pointer leaves: return direct-manipulation feedback quickly; do not snap important content away.
- Reduced motion: run the state change instantly or with a short opacity/cut substitute.

## Reduced motion and persistent motion

- Respect `prefers-reduced-motion`.
- Replace large movement with cuts, static proof frames, opacity, or stepped sections.
- If content moves, blinks, scrolls, auto-updates, or loops for more than a short moment while other content is present, provide a pause/stop/hide mechanism when applicable.
- Pausing visual motion must also pause the JS/canvas/video/render loop when that loop would keep changing content or consuming resources.
- Do not use reduced motion as an excuse to remove product proof.

## Performance-safe motion

- Prefer `transform` and `opacity` for continuous motion.
- Avoid animating layout/paint-heavy properties in long or repeated animations.
- Use `will-change` narrowly and remove it when no longer needed.
- Cap render-loop work for canvas/WebGL/R3F/Pixi.
- Lazy-load expensive scenes and provide poster frames.
- Keep scroll handlers passive/throttled or use native scroll timelines/GSAP responsibly.

## QA checks

- Capture poster, active beat, proof beat, final/resting frame, reduced-motion frame, and mobile frame.
- Verify no essential content is hidden during animation longer than necessary.
- Verify focus order does not enter invisible or leaving elements.
- Verify interaction remains possible during/after interruption.
- Verify persistent motion can be paused/stopped/hidden when required.
- Verify the animation still communicates the product with motion disabled.
- Verify console cleanup after route changes, unmount, and repeated interactions.

## Source anchors

- Apple HIG motion guidance emphasizes purposeful motion, optional motion, and realistic feedback that follows gestures and expectations: https://developer.apple.com/design/human-interface-guidelines/motion
- Motion for React documents transitions, spring/tween choices, duration, easing, and delay through the `transition` prop: https://motion.dev/docs/react-transitions
- GSAP easing docs describe easing as the main control for animation feel and personality: https://gsap.com/docs/v3/Eases/
- MDN documents CSS easing functions as the mathematical timing functions used by transitions and animations: https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
- web.dev recommends transform and opacity for high-performance animations and warns against layout/paint-heavy animation when smoothness matters: https://web.dev/articles/animations-guide
- W3C WCAG Pause, Stop, Hide requires a mechanism for qualifying moving/blinking/scrolling/auto-updating content that starts automatically and runs in parallel with other content: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- MDN documents `prefers-reduced-motion` as the user preference for minimizing non-essential motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

## Hard fails

- All elements animate with the same duration/easing regardless of job.
- Random stagger is used to make generic cards feel lively.
- Animation blocks reading, pricing, form recovery, permission review, or next action.
- A repeated-use product surface uses cinematic timing for routine controls.
- Persistent motion cannot be paused, stopped, hidden, or reduced when needed.
- Reduced motion removes proof instead of replacing the motion.
- Repeated interactions stack timelines or leave stale transforms.
- The final resting frame looks accidental or empty.
