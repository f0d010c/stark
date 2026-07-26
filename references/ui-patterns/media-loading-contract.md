# Media loading contract

Use this after `asset-realism-matrix.md`, `art-direction-asset-board.md`, and `performance-budget-contract.md` when a web surface uses hero images, responsive crops, product screenshots, video, canvas/WebGL, Rive, Lottie, Spline, carousels, galleries, or generated bitmap assets.

High-craft media is not only the artwork. It is the loading order, reserved geometry, fallback, accessibility, and QA that make the artwork feel intentional on real devices.

## Required output

```md
Media loading contract
- Critical media:
- LCP candidate:
- Responsive sources:
- Art-direction crops:
- Reserved geometry:
- Loading priority:
- Decode/preload/fetch priority:
- Poster/fallback:
- Motion/reduced-motion behavior:
- Offscreen/lazy policy:
- Accessibility text:
- Nonblank/runtime QA:
- Rejected media:
```

## Loading priority model

| Media role | Loading rule | Hard fail |
|---|---|---|
| first-viewport product proof | eager or preloaded only when it is the real LCP/proof object | lazy hero image delays first read |
| first-viewport decorative atmosphere | poster/static CSS first, defer full media | decoration blocks product text |
| below-fold screenshot/proof | `loading="lazy"` or route-level lazy where supported | below-fold gallery competes with LCP |
| carousel/gallery thumbnails | stable dimensions, progressive loading by visible range | all full-size images load at once |
| video hero | poster first, compressed source, controls/pause when persistent | autoplay video has no static equivalent |
| canvas/WebGL/R3F/Spline | poster shell first, lazy scene, capped DPR, fallback | blank canvas owns the hero |
| Rive/Lottie loop | static frame first, pause offscreen, no essential text | loop hides missing UI state |

Do not lazy-load everything. The main first-viewport proof object often needs priority. Do not preload everything either; priority is a scarce signal.

## Image implementation rules

- Give every meaningful image explicit `width`/`height` or a stable `aspect-ratio`.
- Use `srcset`/`sizes` when one crop can scale across viewports.
- Use `<picture>` when the crop or composition changes by viewport.
- Use `fetchpriority="high"` sparingly for the real LCP/proof image.
- Use `loading="lazy"` for below-fold images, not for the primary LCP image.
- Use `decoding="async"` for non-critical images when it will not delay the visible proof.
- Compress generated bitmap assets to the displayed size and format; do not ship huge raw generations.
- Keep important UI labels, prices, warnings, CTAs, and legal text in the DOM, not inside images.

## Video implementation rules

- Provide a poster frame with stable dimensions.
- Use `preload="none"` or `preload="metadata"` unless immediate playback is essential.
- Use `muted`, `playsinline`, and a pause/control strategy for autoplaying decorative video.
- Use reduced-motion static frames or step-through proof instead of removing the proof.
- Lazy-load below-fold video and iframes; keep first-viewport video behind a poster until useful.
- Use captions/transcripts/summaries when the video conveys information.
- Never use GIF for heavy hero motion when compressed video or CSS/Canvas would do the job better.

## Canvas, WebGL, Rive, Lottie, and Spline

- Render a poster/static shell before runtime initialization.
- Cap device pixel ratio and quality on mobile or low-power devices.
- Pause or reduce render loops when offscreen, hidden, or inactive.
- Keep navigation, labels, forms, CTA, and recovery UI outside the media runtime.
- Provide reduced-motion and no-WebGL/static fallbacks.
- Verify the runtime is nonblank on desktop and mobile.

## QA probes

- Confirm first-viewport text and primary action are readable before heavy media completes.
- Inspect desktop and mobile screenshots for crop, focal point, proof labels, and CTA visibility.
- Check network order: LCP proof prioritized, below-fold media deferred, no duplicate large downloads.
- Verify image `naturalWidth`/`naturalHeight`, video `readyState` or poster visibility, and canvas pixel nonblank when relevant.
- Check that media has stable layout and does not cause visible CLS.
- Check reduced motion, pause controls, and offscreen pause behavior for persistent motion.
- Confirm alt text or nearby summaries explain meaningful media; decorative layers are hidden.

## Hard fails

- LCP hero proof is `loading="lazy"` without a deliberate poster strategy.
- Media shifts layout because dimensions or aspect ratio are missing.
- Desktop crop is squeezed into mobile and hides the product object or CTA.
- A blank canvas/video/Rive/Lottie frame is accepted because the rest of the page renders.
- Important text exists only inside raster/video/canvas/generated media.
- A decorative video, WebGL scene, or animation delays the product thesis.
- Many media assets are preloaded or eagerly loaded because it seemed safer.

## Source anchors

- web.dev responsive image guidance covers `srcset`, `sizes`, lazy loading, and selective fetch priority for important images: https://web.dev/learn/design/responsive-images/
- MDN documents `fetchpriority` as a browser hint for important resources: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority
- web.dev image performance guidance covers responsive candidates, sizing, and layout stability: https://web.dev/learn/performance/image-performance
- MDN documents `<video>` attributes such as `poster`, `preload`, `autoplay`, `muted`, `playsinline`, controls, and lazy loading behavior: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
- web.dev video performance guidance covers poster, preload, lazy loading, and video loading tradeoffs: https://web.dev/learn/performance/video-performance
- MDN documents `prefers-reduced-motion` for accessible reduced-motion alternatives: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
