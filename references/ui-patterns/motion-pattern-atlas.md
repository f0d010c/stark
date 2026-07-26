# Motion pattern atlas

Use this after `animation-creation.md`, `premium-animation-direction.md`, and `choreography-state-machine.md`, before `motion-library-playbooks.md`.

This atlas teaches Stark which high-craft choreography pattern to use. The library comes after the pattern. Do not pick Motion, GSAP, Three, Rive, Lottie, Lenis, Anime.js, Theatre.js, PixiJS, or video until the product object and choreography pattern are named.

## Output Contract

```md
Motion pattern brief
- Product job:
- Main object:
- Pattern chosen:
- Why this pattern fits:
- Timeline beats:
- Library owner:
- Native/browser owner:
- Rejected patterns:
- Reduced-motion version:
- Mobile version:
- QA probes:
```

## Pattern Families

| Pattern | Use For | Library Owner | Native Owner | Avoid When |
|---|---|---|---|---|
| Object birth | AI/media generation, product creation, artifact reveal | GSAP, video, Motion, Three/R3F | CSS masks/transforms, responsive media | The product has no visible artifact |
| Scroll proof film | 3-5 proof beats, launch/campaign storytelling | GSAP ScrollTrigger, video, Theatre.js export | sticky layout, CSS scroll progress | Docs, dashboards, checkout, long reading |
| Shared-object continuity | gallery/detail, route/detail, expanding cards, active bento | Motion layout, View Transitions API | CSS layout containment | Loading/error/focus states are unclear |
| Material inspection | physical/digital product detail, hardware, editor object | Three/R3F, video, Motion | CSS transform/perspective, responsive image | The object is just generic cards |
| Prompt-to-output trace | AI generation, agent run, creative tool proof | Motion, GSAP, native SVG/WAAPI | SVG path, CSS masks, custom properties | The trace hides real output |
| Cursor lens | image/video/code/data inspection | CSS/WAAPI, Motion pointer values | pointer media query, focus fallback | Essential content depends on hover |
| State-machine icon/illustration | onboarding, status, empty states, trust screens | Rive, Lottie for small loops | static poster/fallback | Text or controls are trapped in animation |
| Data morph | analytics, metrics, comparison, simulation | D3/visx, ECharts, Motion for UI shell | SVG, canvas, table fallback | The chart question is unnamed |
| Kinetic type system | editorial, campaign, type-as-hero, brand moments | CSS, GSAP SplitText, Anime.js | CSS font variation, masks | Body copy becomes hard to read |
| 2D canvas field | generative art, maps, particles tied to product | PixiJS, canvas, Anime.js for simple DOM/SVG | CSS poster/fallback | Particles are pure decoration |
| Designer-authored sequence | exact keyframed art, 3D camera, studio-grade timing | Theatre.js, Rive, video export | static frames | The team cannot maintain authored assets |
| View choreography | app route continuity, docs, catalog/detail | View Transitions API, Motion | focus/scroll restoration | It masks permission/loading/error changes |

## Pattern Recipes

### Object Birth

Job: make the user feel something is being created, assembled, rendered, compiled, mapped, or approved.

Beats:

1. Quiet source state: prompt, seed, blank canvas, raw file, dataset, or unprocessed material.
2. Trace: line, mask, scan, timeline, cursor, or camera path shows cause.
3. Material arrival: one output becomes visible.
4. Inspection: labels or controls prove what changed.
5. Close: CTA or next task remains stable.

Best stacks:

- AI/media page: video or generated poster + GSAP for one timeline + CSS labels.
- React product demo: Motion for object state + SVG/CSS trace.
- 3D object: Three/R3F only if spatial inspection matters.

Hard fail: adding particles, glow, and floating panels without a source-to-output path.

### Scroll Proof Film

Job: make a short product story unfold as the user scrolls.

Beats:

1. Establish the object.
2. Advance one product state per scene.
3. Keep progress visible.
4. Show proof before asking for conversion.

Rules:

- Keep to 2-4 scenes and about 120-220vh unless the page is explicitly editorial.
- Provide normal stacked sections for reduced motion and narrow mobile.
- Use `gsap.matchMedia()` or equivalent breakpoint logic so pinned timelines do not leak into mobile.
- Keep pinned text readable and avoid scroll traps.

Best stacks: GSAP ScrollTrigger for scrubbed/pinned authored timelines; native scroll-driven CSS for lightweight progress/reveal; video when the proof is rendered footage.

### Shared-Object Continuity

Job: preserve orientation when a user moves from summary to detail or compact to expanded state.

Use for:

- Active bento tiles.
- Gallery to detail.
- Command result to artifact.
- Docs/sidebar route transitions.
- Product card to checkout/detail.

Best stacks:

- Motion layout and `layoutId` when React component state owns the change.
- View Transitions API when native route/view continuity is enough and fallback is acceptable.
- CSS only for small disclosure/detail shifts.

QA:

- Focus moves to the new detail.
- Loading/error states are not hidden by a transition.
- Reduced motion uses direct state change.

### Material Inspection

Job: make one object feel worth inspecting.

Use for:

- Device, hardware, 3D model, generated artifact, media frame, canvas, document, map, or dense chart.

Best stacks:

- Three/R3F for actual 3D geometry, camera, material, light, and inspect controls.
- Video/poster for cinematic object proof that does not need runtime control.
- CSS transform/perspective for lighter slab/card depth.

Rules:

- Cap DPR or drawing buffer size.
- Lazy-load below fold or provide a poster.
- Test nonblank canvas/video and mobile framing.
- UI labels stay code-native.

### Prompt-To-Output Trace

Job: show cause and effect in AI, agent, compiler, creative, or automation products.

Good motifs:

- SVG path from prompt to artifact.
- Timeline with discrete status markers.
- Mask opening from an input label.
- Token stream resolving into a frame.
- Diff line becoming approved output.

Best stacks: SVG + CSS/WAAPI for line drawing; Motion for React state; GSAP for authored path/timeline sequences.

Hard fail: output appears magically while copy claims "seamless" or "delightful."

### Cursor Lens

Job: let users inspect proof by moving over it.

Use for:

- Before/after media.
- Code diff.
- Image/video detail.
- Map or dataset.
- Generated frame inspection.

Rules:

- Pointer is an enhancement. Provide tap, keyboard, or always-visible fallback.
- Use `@media (pointer: fine)` before cursor-only behavior.
- Do not hide essential labels inside the lens.

Best stacks: CSS custom properties + pointer events, Motion pointer values, canvas when the sampled content is graphical.

### State-Machine Icon Or Illustration

Job: make a small status, onboarding, or empty-state object feel alive and controllable.

Best stacks:

- Rive when named runtime inputs or designer-authored state machines matter.
- Lottie when it is a small authored loop, loader, mark, or empty-state accent.

Rules:

- Important copy stays in HTML.
- Pause offscreen loops.
- Provide static poster/fallback.
- Drive Rive through named inputs, not frame guesses.

### Data Morph

Job: make data changes understandable.

Use for:

- Filtered analytics.
- Scenario comparison.
- Live operations.
- Source-to-summary transformation.

Best stacks:

- D3/visx for bespoke marks and transitions.
- ECharts for dense operational interaction.
- Chart.js or native SVG for simple standard charts.
- Motion for shell/filter/control transitions, not chart math.

Rules:

- Name the question, units, source, and fallback table.
- Animate compare, filter, focus, and arrival. Do not animate for excitement alone.

### Kinetic Type System

Job: make type itself the hero.

Best stacks:

- CSS masks/keyframes and variable fonts for lightweight editorial motion.
- GSAP SplitText for authored staging where license/availability is acceptable.
- Anime.js for compact DOM/SVG timelines, stagger, text, and WAAPI-friendly sequencing.

Rules:

- Body and UI copy stay still and readable.
- Letter/word motion should communicate grouping, order, or transformation.
- Avoid random staggered feature cards.

### 2D Canvas Field

Job: render many 2D marks, particles, sprites, maps, or generative traces tied to the product.

Best stacks:

- PixiJS for retained-mode WebGL/WebGPU 2D scenes with many sprites or marks.
- Canvas 2D for small custom fields.
- CSS only when the field is static atmosphere.

Rules:

- The field must represent product state, not background sparkle.
- Pause or reduce offscreen.
- Cap counts by viewport/device.
- Provide static poster.

### Designer-Authored Sequence

Job: preserve exact keyframed timing that would be tedious or brittle in hand-written code.

Best stacks:

- Theatre.js for keyframed web/3D sequencing and studio-like timeline authoring.
- Rive for stateful vector illustration.
- Lottie for small AE-exported loops.
- Video for final cinematic proof.

Rules:

- Use this when the animation artifact will be maintained as art direction, not incidental code.
- Export or document the sequence state so another engineer can reproduce the scene.
- Keep the app shell and UI controls code-native.

## Pattern Selection Heuristic

Choose one primary pattern and at most one secondary pattern for a first pass:

- If the product creates artifacts: object birth + prompt-to-output trace.
- If the product story needs scrolling: scroll proof film + material inspection.
- If the product is an app: shared-object continuity + state-machine icon.
- If the product is data: data morph + material inspection.
- If the brand is editorial/type-led: kinetic type + object birth.
- If the design needs many marks: 2D canvas field + data morph.

If the brief wants more than two signature patterns, split the page into separate design directions or stages. Do not ship a sampler platter.

## QA Gates

- The first viewport can be described in one sentence.
- The pattern has a visible product object and proof state.
- Each library owns a different behavior.
- Reduced-motion and mobile versions preserve the same proof.
- No critical copy, controls, or recovery states are embedded only inside canvas/video/Rive/Lottie.
- Scroll and cursor effects are enhancements, not access gates.
- Canvas/video/3D/vector assets are nonblank and framed on desktop/mobile.
- The design rejects at least one tempting pattern by name.

## Source Anchors

- Motion documents React motion components, layout/view animation, scroll values, and reduced-motion hooks for component-state choreography.
- GSAP documents ScrollTrigger and matchMedia-style breakpoint ownership for scrubbed or pinned timelines.
- Three.js and React Three Fiber documentation emphasize responsive sizing, DPR/performance scaling, render-loop cost, and canvas QA.
- Rive web runtime documentation exposes state machines, inputs, playback, pause/stop, and reset behavior.
- Lottie player documentation supports authored vector playback and interactivity, but important UI text still belongs in code.
- Lenis documents smooth scroll for scroll-synced brand effects; use it only when scroll feel is part of the surface.
- Anime.js documents timeline, SVG, text, WAAPI, draggable, and layout tools for compact authored DOM/SVG motion.
- Theatre.js documents sequenced keyframed props for HTML/SVG/3D scenes.
- PixiJS documents retained-mode 2D rendering, ticker/render-loop behavior, and frame-rate limits.
- MDN documents the Web Animations API for JavaScript-controlled keyframes and playback on DOM elements.
