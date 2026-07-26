# Animation creation brief

Use this when the user asks for animation creation, cinematic motion, Luma-style landing pages, scroll stories, product reveals, interactive demos, generative visuals, high-craft motion, or "cool animations" that a normal agent would not invent from a vague prompt.

This brief is for choreographing a memorable animated system before code. It does not replace `motion-budget.md` or `interaction-techniques.md`; it decides what the animation should say, then those docs decide how much motion and which library fits.

When the animation must feel premium, original, reference-inspired, or better than a normal generated page, follow this brief with `premium-animation-direction.md`. When the animation is more than a simple reveal, follow the approved direction with `choreography-state-machine.md`. That second pass turns the storyboard into named scenes, triggers, system states, timing, ownership, reduced-motion substitutions, and QA probes. Then use `motion-pattern-atlas.md` to choose the choreography pattern before picking libraries.

## Use when

- The page is a cinematic campaign, AI/video/model landing page, creative-tool launch, product proof page, or immersive brand page.
- The animation is central to the value proposition, not decoration.
- The user references Luma, studio sites, Awwwards motion, scroll-scrubbed reveals, hero choreography, product transformations, or generative media.
- A static design would undersell the product.

## Avoid when

- The surface is a dashboard, CRM, admin panel, checkout, docs, form flow, settings screen, or dense editor.
- The animation hides primary content behind long delays.
- The product needs trust, comparison, or repeated work more than spectacle.
- The brief only needs hover states or simple page transitions. Use `interaction-techniques.md` instead.

## Required animation direction

Write this before picking libraries:

```md
Animation direction
- Motion thesis: what the motion proves or makes felt
- Main object: model, generated video, prompt, file, canvas, device, dataset, artifact, character, or scene
- Transformation: what changes over time and why it matters
- Timeline beats: load, hero reveal, scroll beat 1, scroll beat 2, proof beat, final close
- Camera/framing: locked stage / orbit / dolly-in / macro inspection / split-screen / gallery drift / map path
- Spatial layers: background atmosphere, midground object, foreground UI/type, cursor layer
- Asset plan: real video, generated bitmap, product mock, SVG, CSS, canvas, WebGL, Rive, Lottie, or code-native shapes
- Library plan: CSS / Motion / GSAP ScrollTrigger / native scroll CSS / Three.js or R3F / Lenis / video
- Performance budget: target devices, asset sizes, lazy loading, DPR cap, and scroll-handler risk
- Reduced-motion fallback: static hero frame, stepped sections, paused video, or no parallax
- Interaction gate: what moves automatically, what waits for scroll, and what responds to cursor/tap
```

## Composition before effects

High-craft animated pages are composed scenes, not effect collections. Before adding any animated element, classify it:

- Main object: the one thing the viewer should remember.
- Proof: evidence that the product works.
- Control: something the user can inspect or act on.
- Label: real UI metadata, timecode, state, or navigation.
- Atmosphere: lighting, texture, depth, or soundless mood.
- Transition: a layer that connects one beat to the next.

If an element is not one of those, remove it. If more than one object asks for equal attention, pick one and demote the rest into labels, proof, or atmosphere.

Do not paste props around a reference composition. A prop is allowed only when it comes from the product world and affects the story. Decorative speakers, calendars, sparks, stickers, orbiting chips, generic particles, and fake UI cards are usually signs that the design is borrowing identity instead of transforming structure.

## Shot logic

Plan the first viewport like a single shot:

1. Establish the main object.
2. Show the transformation path.
3. Expose proof or controls.
4. Give the eye a clear exit to the next section.

The viewer should be able to describe the scene in one sentence. If the sentence needs "and also" more than once, simplify.

## Luma-style motion patterns

Use these as pattern families, not as a copy target:

- Cinematic media reveal: a generated video/image object emerges first, then UI and copy orbit around it.
- Prompt-to-output transformation: prompt text, timeline, or control marks morph into the generated artifact.
- Scroll-scrubbed camera path: pinned section where the camera moves through a product story in 3-5 beats.
- Masked media transition: clips, frames, or panels wipe into each other through a product-shaped mask.
- Before/after generation reveal: raw input, generation in progress, and final output share one continuous stage.
- Gallery expansion: a compact strip of outputs expands into a full-viewport proof wall or inspection view.
- Volumetric ambience: grain, glow, particles, fog, or shader-like layers support depth without becoming the subject.
- Cursor inspection: pointer controls a light, crop, scrubber, lens, or timeline preview.
- Pinned proof moment: one section locks while concrete product proof advances frame by frame.

## Reference transformation rule

When a real site is used as a quality reference, transform it before designing:

- Extract only the abstract qualities: first-viewport balance, object depth, lighting, motion pacing, asset hierarchy, and interaction idea.
- Replace the subject: do not reuse the same product category, phone/device pose, prop set, headline structure, CTA wording, color recipe, or hero object unless the user's product truly requires it.
- Invent a new main object from the brief: instrument, map, artifact, canvas, specimen, machine, timeline, theatre, lens, control surface, scene, or data object.
- Add one original motion mechanic: cursor lens, timeline scrub, object assembly, spatial fold, material transition, split-state compare, generated artifact birth, or camera path.
- Name what was borrowed and what was changed in the animation direction brief.

Bad: "Make the Luma event page with another phone and floating party props."
Good: "Borrow the cinematic object depth and soft spotlight, then create a generative choreography instrument with beat markers, glass layers, and scroll-scrubbed proof."

## Originality test

Before code, answer:

- What specific quality was borrowed?
- What subject, object, composition, copy rhythm, color role, and motion mechanic changed?
- What is the new repeated motif?
- Which reference element was deliberately rejected?

If the answer is mostly "same scene, different text," restart the concept. Copying a reference's subject plus pose plus prop set plus headline structure is not inspiration; it is a reskin.

## Copy quality

Animation-led pages fail fast when the text sounds cheap. Before implementation:

- Avoid hype fragments like "starts here", "next level", "delightful", "seamless", "supercharge", "unlock", and vague "AI-powered" claims unless the brand voice truly supports them.
- Prefer concrete language about the object, transformation, proof, or user action.
- Keep hero copy short and specific; let the animated object carry emotion.
- UI labels inside hero art should feel like real product instrumentation, not fake promo cards.
- If the copy could fit any SaaS landing page, rewrite it around the product's unique motion thesis.
- Cut slogan-like gradient words unless they name a product, object, material, or outcome.

## Recipes

### AI video or model landing page

- Main object: a generated scene, timeline, model card, or preview reel.
- Beats: black/quiet load, artifact birth, prompt/UI trace, quality proof, gallery expansion, final CTA.
- Best fit: video asset plus GSAP ScrollTrigger for pinned proof; Motion for UI overlays; CSS for baseline reveals.
- Avoid: decorative particle fields with no generated-media proof.

### Creative editor or tool

- Main object: canvas, layers, cursor, timeline, inspector, or export artifact.
- Beats: empty canvas, command/prompt action, layered build, compare state, export/share.
- Best fit: Motion for layout and shared-element transitions; CSS for controls; GSAP only if the page is mostly a marketing story.
- Avoid: motion that makes controls unstable or slows repeated editing.

### 3D product or spatial object

- Main object: device, artifact, physical product, interface slab, model, or data sculpture.
- Beats: silhouette, material reveal, exploded detail, proof overlay, reassembled close.
- Best fit: Three.js/R3F when the object is worth spatial inspection; otherwise use video or CSS transforms.
- Avoid: adding WebGL for generic floating cards.

### Type or generative art page

- Main object: headline, glyph system, code trace, waveform, poster, or generated pattern.
- Beats: type assembles, rules appear, generative output blooms, proof grid, restrained close.
- Best fit: CSS/JS canvas for generative marks; Motion for type/layout; GSAP for scroll-scrubbed typography.
- Avoid: unreadable type for body content.

### Launch or campaign page

- Main object: key art, product artifact, campaign symbol, or proof scene.
- Beats: cinematic first frame, section rhythm, one signature pinned sequence, proof set, final brand close.
- Best fit: `cinematic-landing-system.md` first, then this brief, then `interaction-techniques.md`.
- Avoid: a gorgeous hero followed by generic sections.

## Implementation guidance

- CSS is enough for fades, masks, hover, simple parallax, curtains, and reduced-motion fallbacks.
- Motion fits React product motion, shared layouts, spring entrances, component transitions, and interactive UI.
- GSAP ScrollTrigger fits pinned storytelling, scroll-scrubbed timelines, masked section reveals, and complex sequencing.
- Native scroll-driven CSS fits progressive enhancement when browser support and fallback are acceptable.
- Three.js/R3F fits full-bleed spatial scenes, shader-like hero systems, and product objects that need real depth.
- Video is often the correct answer for cinematic AI/product proof; use code for overlays, framing, controls, and transitions.
- Lenis is optional flavor for brand pages only. Do not add it to dashboards, docs, forms, checkout, or editors.

## Quality gates

- Storyboard first: 3-5 named beats are enough; more becomes noise.
- Convert the storyboard into a choreography state machine before coding when the motion is central to the page.
- Choose a motion pattern from `motion-pattern-atlas.md` before choosing libraries.
- One hero object: do not animate every section as a different idea.
- Reference for quality, not identity: never clone a reference site's subject, prop set, headline, CTA, layout, and color formula together.
- Product proof stays visible: motion should reveal evidence, not replace it.
- Mobile has a simpler choreography: fewer pinned sections, no tiny scrub targets, no essential hover-only behavior.
- Reduced motion is designed, not an afterthought.
- Use transform and opacity for continuous motion; avoid layout thrash in scroll handlers.
- Lazy-load heavy media below the first viewport and cap WebGL/device pixel ratio where needed.
- Test that canvas/video scenes are nonblank and correctly framed on desktop and mobile.
- Reject random spectacle: every effect must map to the motion thesis, main object, or transformation.
