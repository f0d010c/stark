# Asset production pipeline

Use this when a design needs imagery, product proof, icons, diagrams, charts, generated visuals, videos, textures, Rive/Lottie, or Three.js/WebGL.

Before choosing the final asset type, read `asset-realism-matrix.md` when the asset is a hero, product proof, trust proof, workflow proof, cinematic proof, generated bitmap, screenshot, chart, video, Rive/Lottie, or Three/WebGL object.

When the asset is not just supporting art but the signature visual language of the page, follow this file with `advanced-visual-systems.md`. That second pass chooses the one main mechanic, visual owner, motif, input, code-native content, fallback, rejected spectacle, and media/canvas QA.

The goal is to create assets that prove or explain the product, not filler that makes a weak layout feel busy.

## Asset production brief

```md
Asset production
- Product job:
- Asset job: proof / trust / comprehension / brand / state / navigation
- Asset type: screenshot / code-rendered mock / generated bitmap / SVG / icon / chart / video / Rive / Lottie / Spline / Three
- Source:
- License/privacy risk:
- Implementation:
- Responsive framing:
- Accessibility:
- QA:
```

## Choose the asset type

| Need | Prefer | Use when | Avoid |
|---|---|---|---|
| Real product proof | real screenshot with permission | product exists and user can provide/approve media | private screenshots, unreadable crops |
| Fictional product proof | code-rendered UI mock | product is fictional but must look inspectable | stock photos, generic dashboards |
| Cinematic concept | generated bitmap or video | art direction needs atmosphere or realism | generated images with fake unreadable UI text |
| Diagram | SVG/CSS/HTML | structure, workflow, architecture, permission, data flow | raster diagrams that cannot resize |
| Icons | platform set, lucide, existing brand set | control/action metaphor is common | mixed icon packs, handmade generic SVG controls |
| Illustration | SVG, Rive, generated bitmap | empty state, onboarding, brand mark, explainer | decorative mascot in serious flows |
| Interactive illustration | Rive | state machine or designer-authored animation matters | essential text inside artboard |
| Small loop | Lottie | loader, brand loop, small explainer | hero movie, editable UI, data-heavy state |
| Designer-authored 3D scene | Spline | fast brand object or simple interactive 3D scene | app UI, critical labels, no fallback |
| Spatial object | Three/R3F | user should inspect depth/material/camera path | generic floating cards |
| Chart/data proof | native SVG, Chart.js, ECharts, D3/visx, Plot | data is the product object | decorative chart with no question |

## Generated bitmap rules

Generated images are useful for:

- fictional product campaign art
- product concept scenes
- material and texture studies
- editorial hero imagery
- empty-state illustrations
- transparent cutouts
- realistic product/device context

Rules:

- Keep important UI text, controls, prices, warnings, and legal copy code-native.
- Reject fake text unless the image is purely atmospheric.
- Store only public-safe generated outputs.
- Use generated art to support a product object, not to replace product proof.
- Crop and frame for desktop and mobile separately when needed.

## Code-rendered mock rules

Use HTML/CSS/SVG to create product proof when:

- the app is fictional
- labels/states must be readable
- responsive framing matters
- the design needs real controls or focus states

Include:

- realistic names, values, statuses, timestamps
- empty/loading/error/permission/success where relevant
- one action the user can understand
- bounded scroll for dense regions

## Video rules

Use video when motion itself is proof: AI video, media editing, music, animation, spatial product, or campaign film.

Rules:

- Provide poster frame.
- Keep controls or pause affordance when autoplay persists.
- Overlay important UI natively.
- Compress and lazy-load below-fold media.
- Provide static/reduced-motion fallback.

## Rive and Lottie rules

- Rive is for runtime-controlled illustration state machines.
- Lottie is for small authored loops.
- Keep important UI text outside the animation.
- Pause offscreen loops.
- Provide static fallback.
- Do not use either to hide missing product states.

## Three/WebGL rules

- The 3D scene must be the product object or inspectable proof.
- Cap DPR and handle resize.
- Lazy-load heavy scenes or show a poster.
- Provide fallback for reduced motion and weak devices.
- Verify nonblank canvas on desktop and mobile.

## Spline rules

- Treat the Spline viewer as an asset, not the full app shell.
- Keep copy, CTA, labels, state, and recovery UI in HTML.
- Provide poster/static fallback and mobile replacement when load/framing is risky.
- Use Three/R3F instead when code-level state, accessibility, or performance control matters.

## Asset QA

Before final delivery, verify:

- asset loads
- asset is public-safe and licensed/attributed when needed
- crop is readable on desktop and mobile
- image/canvas/video is nonblank
- important text is real DOM where possible
- asset supports proof, trust, comprehension, brand, state, or navigation
- no placeholder services, random stock, or private screenshots
