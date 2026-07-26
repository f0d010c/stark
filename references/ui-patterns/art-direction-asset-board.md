# Art direction asset board

Use this after `creative-direction.md`, `asset-realism-matrix.md`, and `asset-production-pipeline.md` when a page/app needs hero key art, generated visuals, product screenshots, cinematic proof, responsive crops, media layers, or any visual asset that carries first-impression quality.

This file turns "make it look premium" into a production board: shot choice, crop, layers, DOM-owned text, responsive variants, and QA. It should prevent blurry mood art, fake UI text, generic device mockups, pasted props, and desktop-only hero images.

## Output contract

```md
Art direction asset board
- Product truth:
- Asset role: proof / atmosphere / comprehension / trust / state / navigation
- Main shot:
- Secondary shots:
- Layer stack:
- DOM-owned content:
- Generated/image prompt:
- Negative constraints:
- Desktop crop:
- Tablet crop:
- Mobile crop:
- Fallback/poster:
- Performance plan:
- Accessibility:
- QA evidence:
```

## Shot roles

Choose one primary shot before generating or sourcing assets.

| Shot | Use when | Asset owner | Avoid |
|---|---|---|---|
| Product inspection | the product object, output, UI, or artifact must be examined | code-rendered mock, screenshot, R3F, generated object | dark cropped mood image |
| Workflow proof | the value is a sequence, run, edit, booking, approval, or recovery | code-rendered UI, SVG/HTML diagram, video, GSAP proof film | single hero image with no state |
| Cinematic object | campaign quality depends on one memorable object or scene | generated bitmap, video, R3F, Spline, photo | unrelated floating props |
| Material study | the brand world needs texture, light, surface, or physicality | generated bitmap, CSS/SVG texture, video loop | texture that fights legibility |
| Trust evidence | the page sells safety, finance, healthcare, compliance, or risk reduction | ledger/matrix/screenshot/proof label | playful fake illustration |
| Editorial cover | the page is portfolio, report, launch, or narrative | generated image, photo, typographic composition | generic SaaS dashboard screenshot |
| State sample | the app quality depends on loading/error/success/permission/empty states | code-rendered UI, Rive state, small Lottie | happy-path-only hero |

## Layer stack

Good key art is usually layered, but each layer needs a job.

- Base: stable background, product world, or material field.
- Main object: product proof, artifact, device, diagram, 3D object, media frame, or generated scene.
- Proof labels: HTML text, UI chips, callouts, source labels, units, timestamps, or state badges.
- Motion layer: only if it reveals, inspects, compares, generates, or navigates.
- Texture/light: subtle enough that text and controls remain dominant.
- Controls: HTML-owned actions, pause, compare, inspect, next, or replay.

If a layer can be removed without reducing proof, comprehension, trust, or brand memory, remove it.

## Generated visual prompt pattern

When using generated bitmap art, write the prompt as a production spec:

```md
Generated asset prompt
- Subject:
- Product object:
- Shot/framing:
- Materials:
- Lighting:
- Environment:
- Color role:
- Detail level:
- Empty space reserved for DOM text:
- Must avoid:
```

Rules:

- Do not ask the image to render important UI text, CTA text, pricing, legal copy, code, or small labels.
- Reserve quiet space for real DOM text and controls.
- Prefer one strong product object over many props.
- Ask for the crop and aspect ratio needed by the layout, not a generic poster.
- Generate alternate crops when desktop and mobile need different compositions.

## Responsive crops

Choose art direction per viewport.

| Viewport | Required decision |
|---|---|
| Desktop | wide composition, focal object, proof label placement, safe text zone |
| Tablet | object scale, cropped edge, whether proof labels move outside image |
| Mobile | portrait or square crop, simpler object, DOM text above/below/over safe zone |

Use `srcset`/`sizes` for multiple resolutions of the same composition. Use `<picture>` when the composition or crop changes by viewport. Keep width/height or aspect-ratio stable to prevent layout shift.

## Product screenshot and mock rules

- Use real screenshots only when public-safe and approved.
- Use code-rendered mocks for fictional products or when labels/states must be readable.
- Show realistic data, states, timestamps, status, and one meaningful action.
- Avoid tiny full-page screenshots that become unreadable on mobile.
- Do not let screenshots become decorative rectangles; crop to the decision, artifact, or state.

## Integration rules

- Important text, CTA, labels, prices, warnings, and form controls stay in HTML.
- Generated images/video/Rive/Lottie/Spline/Three are assets; the page owns navigation, semantics, focus, and recovery.
- Match asset lighting/materials to tokens and typography instead of placing a beautiful image on an unrelated UI.
- Define object-position, aspect-ratio, and focal point for every responsive crop.
- Provide poster/static fallback for video/canvas/WebGL/Rive/Lottie/Spline.
- Keep media below the critical path unless it is the main proof and has a stable poster.

## QA evidence

Before accepting:

- Desktop screenshot: focal object, DOM text, proof labels, CTA, and crop are coherent.
- Mobile screenshot: no cropped-off product object, illegible text, hidden CTA, or tiny proof UI.
- Network/performance: image/video sizes are appropriate; lazy loading and poster behavior are correct.
- Nonblank media: image/video/canvas/Rive/Lottie/Spline actually renders.
- Accessibility: alt text or surrounding copy explains meaningful imagery; decorative layers are hidden.
- Reduced motion: moving media has a static/stepped equivalent.
- Originality: asset transforms references into a new subject, object, crop, material, and proof surface.

## Source anchors

- MDN documents responsive images, including `srcset`, `sizes`, and the requirement for an `img` fallback in `picture`: https://developer.mozilla.org/docs/Web/HTML/Guides/Responsive_images
- web.dev describes `picture` as the tool for explicit source selection when art direction changes by viewport: https://web.dev/learn/images/responsive-images/
- web.dev image performance guidance recommends responsive image candidates, modern formats, and stable dimensions to avoid excess download and layout shift: https://web.dev/learn/performance/image-performance
- Next.js Image docs recommend `sizes` for responsive layouts and note that increasing quality cannot improve a low-quality original: https://nextjs.org/docs/app/api-reference/components/image

## Hard fails

- Hero art has fake unreadable UI text where real UI should be.
- Desktop art is simply squeezed or badly cropped on mobile.
- Asset quality is high but disconnected from product proof.
- Key art uses many unrelated props instead of one main object.
- Important CTA, status, legal, pricing, or recovery copy lives inside a raster image.
- No fallback for video/canvas/WebGL/Rive/Lottie/Spline.
- Asset cannot be verified as public-safe, licensed, generated, or user-provided.
