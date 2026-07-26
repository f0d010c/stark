# Advanced visual systems

Use this after `animation-creation.md`, `premium-animation-direction.md`, `choreography-state-machine.md`, `motion-pattern-atlas.md`, and `asset-production-pipeline.md` when the design depends on shader-like visuals, canvas fields, WebGL, Spline-style scenes, Rive state machines, Lottie loops, video composites, or generated key art.

This file turns "make it look expensive" into one coherent visual mechanic. It should prevent the page from becoming a collage of particles, floating cards, random props, and disconnected animation libraries.

## Required visual system brief

Write this before implementation:

```md
Advanced visual system
- Product truth: what the visual system proves or makes felt
- Main mechanic: reveal / inspect / generate / compare / navigate / simulate / compose
- Visual owner: CSS / SVG / canvas / WebGL / R3F / Spline / Rive / Lottie / video / generated bitmap
- Supporting owners: type, HTML UI, Motion, GSAP, native scroll, data-viz
- Motif: one repeated shape, path, material, axis, light behavior, or state transition
- Inputs: scroll, cursor, tap, keyboard, route, data, state machine input, time, or none
- Code-native content: text, controls, labels, focus, status, data, and recovery paths
- Asset source: real screenshot, code-rendered mock, generated bitmap, Rive, Lottie, Spline, video, SVG, shader, or chart
- Performance budget: load cost, DPR/object count/frame risk, lazy strategy, pause/offscreen behavior
- Fallback: poster, static SVG, simplified canvas, HTML section, reduced motion, or alternate mobile composition
- QA probes: desktop/mobile screenshot, nonblank media/canvas, input test, reduced motion, console, performance risk
- Rejected spectacle: effects removed because they do not support the mechanic
```

## Choose one main mechanic

| Mechanic | Use when | Best owner | Avoid |
|---|---|---|---|
| Reveal | the product has a before/after, generation, unlock, or material transformation | GSAP, CSS masks, video, R3F | revealing generic marketing cards |
| Inspect | the user needs to understand shape, material, layers, quality, or state | R3F, Spline, SVG, code-rendered mock | 3D object behind unrelated copy |
| Generate | the product creates media, text, code, analysis, or artifacts | canvas, video, generated bitmap, Motion overlays | fake particles with no output proof |
| Compare | the value is improvement, risk, diff, repair, or quality delta | before/after slider, SVG, data-viz, Motion | vague "better/faster" claims |
| Navigate | the product is spatial, branching, route-based, or multi-step | View Transitions, Motion, WebGL map, canvas | camera moves that hide IA |
| Simulate | the product models behavior, physics, data flow, system state, or agent progress | canvas, PixiJS, D3/visx, Rive | decorative background simulations |
| Compose | the product is an editor, canvas, design tool, or media builder | HTML UI + canvas/SVG + Motion | moving the controls themselves |

If two mechanics compete, choose the one closest to the product job. The others become proof labels, section beats, or optional details.

## Ownership rules

### HTML and CSS

Use HTML/CSS for real product UI, labels, focusable controls, copy, layout, reduced-motion fallbacks, and responsive replacement. Important text should not be baked into generated images, video, Rive, Lottie, or Spline scenes.

### SVG

Use SVG for crisp diagrams, paths, icons, masks, small generative systems, and data-like marks. Keep it accessible with titles or surrounding HTML labels when the SVG communicates meaning.

### Canvas and PixiJS

Use canvas or PixiJS when there are many marks, particles, traces, pixels, sprites, or map-like layers that would make DOM/SVG too heavy.

Rules:

- Put labels, controls, and status in HTML.
- Cap object counts and pixel ratio.
- Pause when hidden or offscreen.
- Keep the field tied to the product: signal trace, generation map, timeline, waveform, route, constellation, or data sculpture.
- Do not use a canvas background when a CSS texture or static bitmap would do the job.

### Three.js / React Three Fiber

Use WebGL/R3F when spatial depth is the product proof: inspectable object, camera path, material, exploded view, scene, or 3D data.

Rules:

- The 3D object is the main object, not wallpaper.
- Lazy-load the scene or start with a poster frame.
- Cap DPR, object count, shadows, and post-processing.
- Dispose geometries, materials, textures, and renderer resources when the scene unmounts.
- Keep UI overlays code-native.
- Verify mobile framing and nonblank canvas.

### Spline

Use Spline when a designer-authored 3D scene is more valuable than code-level 3D control and the site can accept an embedded viewer.

Best for:

- Fast 3D art direction prototypes.
- Brand object embeds.
- Simple interactive 3D hero scenes.

Avoid:

- Product UI that needs deep state, routing, accessibility, or lightweight load.
- Large scenes on mobile without poster fallback.
- Scenes whose important text or controls live inside the embed.

Rules:

- Treat the `<spline-viewer>` as an asset, not the whole app.
- Provide a poster/static fallback and mobile replacement when load or framing is risky.
- Keep CTA, copy, navigation, and proof labels in HTML.

### Rive

Use Rive when a designer-authored vector/illustration needs runtime state.

Best for:

- Stateful brand marks.
- Onboarding illustrations.
- Input-driven diagrams.
- Small product state machines.

Rules:

- Drive behavior through named state machine inputs.
- Keep UI text and controls in HTML.
- Provide static poster or paused first frame.
- Do not use Rive for dense product interfaces.

### Lottie / dotLottie

Use Lottie for small authored vector loops, not full product UIs.

Best for:

- Loaders.
- Empty states.
- Small brand loops.
- Micro explainers.

Rules:

- Keep files small and loops pausable.
- Pause offscreen loops.
- Avoid important text inside the animation.
- Replace with video or static SVG when the Lottie is too complex, bitmap-heavy, or janky on mobile.

### Video

Use video for cinematic proof that is expensive or impossible to render live.

Rules:

- Use a poster frame.
- Compress and lazy-load below the critical path.
- Provide pause/control affordance for persistent motion.
- Put labels, controls, and important UI in HTML overlays.
- Do not fake interactivity with a video when the user needs inspection or control.

### Generated bitmap key art

Use generated images for fictional product worlds, hero scenes, textures, material studies, and atmospheric proof when real product assets do not exist.

Rules:

- Keep essential text code-native.
- Generate around a product object, not vague mood.
- Use the image as one layer in the composition, not a substitute for structure.
- Crop deliberately for desktop and mobile.
- Check for visual artifacts, illegible pseudo-text, hands/devices if present, and licensing/brand risk.

## Composition pattern

High-craft visual systems usually have this structure:

1. One memorable object or field.
2. One repeated motif.
3. One input or timeline.
4. One proof surface close to the object.
5. A static/reduced/mobile equivalent.

Examples:

- AI video page: generated scene reel + prompt trace + scroll proof timeline.
- Dev tool page: branch graph field + live run artifacts + command palette transition.
- Security product: permission matrix + risk heat path + policy inspection drawer.
- Creative editor: canvas stage + layer build + before/after export proof.
- Analytics: chart-as-object + source/units + drilldown state.

## Anti-collage rules

Reject the design if:

- The scene has more than one hero object.
- Floating props could be deleted without changing the product story.
- The chosen library is only there because it looks impressive.
- The same page uses shader noise, 3D, Lottie, particles, video, and card motion without a single mechanic.
- The copy is vague and the visual system is asked to hide it.
- The mobile version is just a broken crop of the desktop scene.
- Reduced motion removes the product proof instead of replacing it.

## QA probes

Use these before shipping:

- Desktop and mobile screenshots of first viewport and the proof section.
- Console free of runtime/asset errors.
- Media/canvas/WebGL/Rive/Lottie/Spline nonblank check.
- Input check for scroll/cursor/tap/keyboard route that drives the mechanic.
- Reduced-motion check with a meaningful static or stepped equivalent.
- Pause/offscreen check for loops, canvas, video, and WebGL.
- Performance spot check: critical path assets, frame risk, memory/leak risk, and mobile heat risk.
- Copy-native check: important text, labels, controls, and state/recovery copy are HTML.

## Source anchors

- Rive web runtime state machines expose runtime inputs for controlling authored animation state.
- Lottie/dotLottie is best treated as an authored vector-animation asset; complex interactive product UI should stay code-native.
- Three.js resources such as geometries, materials, textures, and render targets require explicit disposal when no longer used.
- Spline Viewer is a web component embed, so it should be treated as an asset with fallback and HTML-owned UI.
- PixiJS guidance emphasizes performance choices around sprites, textures, object counts, and renderer work.
- Theatre.js Studio provides a timeline/sequence editor for authored keyframed scenes, which is useful only when the sequence will be maintained.
