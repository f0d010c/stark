# Premium animation direction

Use this when an animation-led page technically works but feels low-quality, messy, copied, cheap, or like random elements were pasted around a reference.

This brief sits between `animation-creation.md` and `choreography-state-machine.md`. `animation-creation.md` defines the story. This file raises the art-direction bar. `choreography-state-machine.md` turns the approved direction into states, timing, ownership, fallbacks, and QA.

## Core standard

Premium animation is authored, not accumulated.

A high-end animated page should feel like one directed scene:

- one memorable object
- one transformation the viewer can follow
- one visual world with consistent materials
- one copy voice
- one or two motion mechanics that repeat with variation
- proof that the product works
- controls, fallbacks, and states that preserve user trust

If the page needs many unrelated decorative props to feel exciting, the concept is weak. Rework the object, transformation, or proof surface before adding more layers.

## Direction brief

Write this before code when the quality bar is "Luma-level", "Awwwards-level", "cinematic", "better than the reference", or "not pasted together":

```md
Premium animation direction
- Product truth: what the product actually makes, changes, reveals, protects, or accelerates
- Main object: the artifact, instrument, scene, timeline, model, canvas, map, specimen, or control surface
- Signature transformation: the one before/after or cause/effect the motion proves
- Visual world: material, lighting, camera, color roles, density, and texture
- Repeated motif: shape, path, cut, mask, grid, reflection, scan, orbit, trace, fold, or reveal
- Proof surface: real output, UI state, data, comparison, generated asset, or workflow evidence
- Copy voice: concrete nouns, action verbs, proof labels, and banned cheap phrases
- Motion grammar: which properties move, how elements enter, how attention exits
- Asset quality plan: what is custom, generated, captured, modeled, rendered, or code-native
- Library ownership: CSS, Motion, GSAP, Three/R3F, Rive, Lottie, video, Lenis, native APIs
- Originality delta: what was borrowed from references and what changed
- QA gates: screenshot critique, mobile framing, reduced motion, performance, accessibility, nonblank media
```

## Make It Original

When a reference is strong, borrow its grammar, not its costume.

Borrow:

- object depth
- first-viewport balance
- camera distance
- rhythm of reveal
- lighting hierarchy
- proof timing
- interaction idea

Change:

- product category
- hero object
- prop set
- copy structure
- palette formula
- CTA wording
- exact device pose
- section order
- motion mechanic

If a viewer could say "this is that site with different words," the transformation failed.

## Anti-Collage Diagnosis

When the screen feels messy, check these failure modes.

| Symptom | Likely cause | Fix |
|---|---|---|
| Many floating objects compete | no main object | pick one hero object and demote the rest into labels, proof, or atmosphere |
| Text feels cheap | generic promise language | rewrite around artifact, action, risk, time, owner, or proof |
| Hero looks like a poster, not a product | no proof surface | expose output, UI state, comparison, timeline, or real data |
| Motion feels random | no repeated motif | reuse one path, mask, trace, fold, or camera rule across beats |
| Reference feels copied | borrowed subject and composition | keep only abstract quality signals and invent a new object/world |
| Page gets worse after the hero | no section rhythm | reuse motif and proof surface in quieter downstream sections |
| Mobile collapses | desktop-only stage | design a stacked proof sequence, not a shrunken pinned scene |
| Animation feels expensive but hollow | library-led decision | name product truth before choosing GSAP, Three, Rive, Lottie, or video |

## Scene Production Rules

### 1. Build a hero object, not a decoration field

The main object can be:

- artifact: generated video frame, document, design output, model card, dataset, rendered product
- instrument: timeline, mixer, command surface, lens, map, canvas, debug console
- scene: theatre, lab bench, observatory, archive wall, control room, field map
- specimen: product object, material sample, data sculpture, waveform, glyph, model preview

The object must be readable as a product metaphor and useful as proof.

### 2. Use a production pipeline, not placeholders

Choose one asset path:

- generated bitmap key art for fictional products, cinematic hero scenes, or atmospheric proof
- code-rendered UI mock for product proof that needs crisp text and real states
- video for cinematic media proof that would be expensive or worse in code
- Three/R3F for inspectable spatial objects where depth is the point
- Rive for designer-authored stateful diagrams or brand objects
- Lottie for small loops, marks, empty states, or branded loaders
- SVG/canvas for precise abstract systems, charts, traces, and generated marks

Never let low-resolution, text-heavy, or mismatched assets carry the first viewport.

### 3. Direct attention through contrast, not clutter

Each beat should have:

- focal object
- supporting proof
- quiet area for type
- visible path to next section or action
- contrast between foreground, midground, and background

If every layer glows, nothing glows. If every label moves, none of them reads as instrumentation.

### 4. Let copy sound like the product

Hero copy should name the transformation or artifact. Avoid floating sentiment.

Weak:

- "Delightful events start here"
- "Unlock the future of creativity"
- "Supercharge your workflow"
- "Next-level AI for teams"

Stronger:

- "Turn a prompt into a shot list, timeline, and exportable preview"
- "Map every blocked renewal to the account, owner, and rescue path"
- "Generate campaign scenes with the controls still visible"
- "Inspect the model run before you ship the output"

### 5. Keep timing purposeful

Use motion to answer one of four questions:

- Where am I looking?
- What changed?
- What can I control?
- What proof should I trust?

If an effect answers none of those, remove it.

## Library Quality Rules

### CSS

Use for baseline transitions, masks, reveals, focus states, hover/tap feedback, and reduced-motion fallbacks. Prefer transform and opacity for continuous motion. Avoid building complex application state through selectors.

### Motion

Use for React component continuity: route/detail changes, tabs, sheets, command palettes, shared layout, scroll values, gestures, and interruptible UI state. Avoid using it to fake long cinematic timelines that need authored sequence control.

### GSAP

Use for one authored timeline: pinned proof, masked reveal, SVG path, text staging, camera-like sequence, or scroll-scrubbed transformation. One strong pinned sequence beats several weaker ones. Keep ranges short enough that the user never feels trapped.

### Three/R3F

Use only when the spatial object earns the rendering cost. Cap DPR, lazy-load, pause offscreen work, and provide poster/reduced-motion fallbacks. A blank or decorative canvas is worse than a good static key visual.

### Rive

Use for stateful designer-authored objects: logo systems, product diagrams, onboarding characters, instruments, or explainer art with named inputs. Keep important UI text in code.

### Lottie

Use for small loops and brand marks. Keep files small, pause offscreen loops, and avoid using Lottie as the primary product UI.

### Video

Use when cinematic proof is the product or when runtime animation would be lower quality. Overlay important UI labels and controls natively so they remain sharp, accessible, and responsive.

### Lenis

Use only when scroll feel is a deliberate brand material on a campaign/editorial page. Avoid it for dashboards, docs, checkout, editors, admin tools, and repeated-use products.

### View Transitions and native scroll APIs

Use as progressive enhancement with fallbacks. Preserve focus, reading position, loading/error visibility, and reduced-motion behavior.

## Premium QA

Before final delivery, inspect the rendered result and answer:

- Does one object dominate the first viewport?
- Can the viewer explain the transformation in one sentence?
- Does the copy name a concrete artifact, action, or proof?
- Are there fewer decorative props than proof elements?
- Are mobile and reduced-motion versions intentionally designed?
- Is any automatic motion longer than 5 seconds pausable, stoppable, or hideable?
- Are canvas, video, Rive, and Lottie assets nonblank and correctly framed?
- Do continuous animations avoid layout/paint-heavy properties where possible?
- Are focus states and keyboard paths visible when controls exist?
- Did the design borrow reference quality without copying reference identity?

Hard fail if the page can only be described as "floating things around a headline."

## Source anchors

- Apple HIG frames motion as a way to convey status, feedback, instruction, and experience rather than decoration: https://developer.apple.com/design/human-interface-guidelines/motion
- Material motion describes choreography as a way to preserve focus, continuity, and relationships between elements: https://m1.material.io/motion/choreography.html
- WCAG 2.2.2 requires pause, stop, or hide controls for automatic moving, blinking, or scrolling content that lasts more than 5 seconds and appears with other content: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- MDN documents `prefers-reduced-motion` for users who request minimized non-essential motion: https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion
- MDN documents scroll-driven animation timelines as scroll or view progress timelines, which need fallback judgment: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines
- web.dev recommends transform and opacity for high-performance web animations: https://web.dev/articles/animations-guide
- Motion documents scroll-linked values and reduced-motion hooks for React animation: https://motion.dev/docs/react-use-scroll and https://motion.dev/docs/react-use-reduced-motion
- GSAP ScrollTrigger supports breakpoint-scoped timelines through matchMedia cleanup: https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia%28%29
- Rive web runtimes expose state-machine playback and inputs for runtime-controlled authored animation: https://rive.app/docs/runtimes/web/state-machines
- React Three Fiber performance guidance covers DPR and scaling tradeoffs for expensive 3D scenes: https://r3f.docs.pmnd.rs/advanced/scaling-performance
- MDN warns View Transitions can create focus, reading-position, and live-region confusion if old and new content overlap without care: https://developer.mozilla.org/docs/Web/API/View_Transition_API
