# Animation composition cohesion gate

Use this after `premium-animation-direction.md`, `choreography-state-machine.md`, `art-direction-asset-board.md`, `advanced-visual-systems.md`, or reference repair when an animated landing page, hero, product reveal, scroll film, or key-art scene risks feeling messy, copied, decorative, or pasted together.

This gate is about the still frame and scene logic before motion polish. A premium animated page does not become coherent because the props move. It passes when the hero object, surrounding assets, text, light, depth, and choreography all describe one product idea.

## Source anchors

- Apple Human Interface Guidelines describe motion as a way to convey status, feedback, instruction, and context, and caution that custom motion should be purposeful and not distracting: https://developer.apple.com/design/human-interface-guidelines/motion
- Material motion guidance says motion should express spatial relationships, functionality, intention, hierarchy, and continuity: https://m2.material.io/design/motion/understanding-motion.html
- Material choreography guidance frames motion as a way to guide focus through surfaces and shared elements: https://m1.material.io/motion/choreography.html
- Material duration/easing guidance says motion should be fast enough to avoid waiting and slow enough to understand: https://m1.material.io/motion/duration-easing.html
- NN/g visual design principles describe hierarchy, scale, contrast, and proximity as ways to guide attention and support scanning: https://www.nngroup.com/articles/principles-visual-design/
- web.dev animation performance guidance emphasizes compositor-friendly animation such as transform and opacity for smoothness: https://web.dev/articles/animations-guide

## Output contract

```md
Animation composition cohesion gate
- Surface:
- Reference used:
- Original transformation:
- Product idea:
- Hero object:
- Scene container:
- Supporting assets:
- Asset job map:
- Depth/perspective:
- Lighting/material system:
- Color/value hierarchy:
- Text integration:
- Motion job:
- Choreography focus path:
- Responsive crop/recomposition:
- Reduced-motion still:
- Pasted-element risk:
- Failed frame/element:
- Required repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Cohesion Questions

Answer these from the rendered frame, not from intent:

- What is the one product object the viewer remembers?
- What does each supporting asset prove, frame, reveal, or compare?
- Where is the scene boundary: stage, device, product surface, viewport, canvas, room, timeline, or document?
- What direction does light come from?
- What perspective plane does each object sit on?
- What is foreground, subject, midground, background, and UI layer?
- What stays still so the motion can be understood?
- What would you delete first if the page felt busy?

Hard fail: if an asset exists only because similar references had it, remove it or give it a product job.

## Scene Container

Choose one container before adding assets:

| Container | Use when | Required proof | Avoid |
|---|---|---|---|
| Device/object theater | product is an app, artifact, media, or generated output | device, output, UI state, or object is inspectable | free-floating unrelated props |
| Workflow diorama | product value is a process | input, transformation, output, status, and control are visible | decorative timeline beads with no data |
| Spatial studio | brand/creative product needs atmosphere | one set, lighting logic, material logic, focal subject | random 3D stickers |
| Data/proof stage | analytics, AI, ops, finance, monitoring | source, metric, exception, action, freshness | chart confetti without user question |
| Editorial split scene | content/story product | headline, media, proof, CTA, next section path | slide-like text next to unrelated art |
| Interactive instrument | editor, canvas, tool, builder | controls manipulate a visible object | controls that do not map to the scene |

The container should make the composition feel inevitable. If the same objects could be sprinkled over a different hero without changing meaning, the scene is not specific enough.

## Asset Job Map

Every visible asset needs one primary job:

- **Subject**: the main product object.
- **Proof**: evidence of output, state, quality, data, trust, speed, or workflow.
- **Frame**: directs attention to the subject.
- **Handle**: suggests interaction or control.
- **Scale**: helps the subject feel physical or large.
- **Depth**: creates foreground/background, not clutter.
- **Brand echo**: repeats motif, shape, material, or color with restraint.

Hard fail: more than two supporting assets with only "decoration" as their job.

## Depth And Perspective

Inspect:

- shared horizon or camera angle
- matching shadows/contact points
- consistent object scale
- believable overlap/occlusion
- clear z-order
- no accidental tangents
- no important text behind moving or glowing assets

Repair by anchoring objects to a plane, removing mismatched perspective assets, adding contact shadows, cropping closer, or converting a prop into a flat UI/proof layer.

## Lighting And Materials

Choose one lighting rule:

- soft studio
- theatrical rim light
- product screenshot daylight
- terminal/editor glow
- cinematic neon
- high-key paper
- dark glass stage
- native platform material

Then make every asset obey it. Shadows, blur, glow, grain, reflections, and edge highlights should share the same world.

Hard fail: separate assets appear to come from different stock packs, lighting setups, or rendering styles.

## Text Integration

Text is part of the scene:

- headline line breaks must point toward or balance the hero object
- CTA/proof labels should sit on a stable reading plane
- DOM text owns important product claims; do not bake critical text into media
- animated type must not fight the object reveal
- label density must match the scene's distance and scale

Repair by moving text into a stable column, docking proof labels to the product object, reducing headline scale, or replacing weak marketing copy with product nouns and proof labels.

## Motion Job

Each motion layer gets one job:

- reveal subject
- show transformation
- guide focus
- prove interaction
- preserve continuity
- show state change
- create atmosphere around a stable subject

Hard fail: the camera, props, glow, cards, particles, and text all animate at once with no resting frame.

## Originality Boundary

When using references such as Luma, Stripe, Linear, Arc, Apple, Vercel, or studio portfolios:

- borrow quality bar, staging discipline, and craft constraints
- do not copy object arrangement, copy structure, color rhythm, or prop set 1:1
- replace the reference's hero object with a product-specific object
- invent one original mechanic tied to the product
- keep one restraint from the reference, not every visual trick

Hard fail: the page is recognizable as a specific reference after brand/name swaps.

## Repair Moves

Choose one high-impact repair first:

- Delete decorative props until only subject, proof, frame, and one brand echo remain.
- Replace floating stickers with a single scene container.
- Rebuild the hero around one product object instead of a collage.
- Unify lighting through one shadow/glow/edge-highlight system.
- Convert mismatched 3D assets into flat proof UI or a single generated key art layer.
- Assign foreground/midground/background and stop overlapping text.
- Make the first motion beat reveal the subject, then stage supporting proof.
- Create a reduced-motion poster frame that still communicates the product.

## Gate Results

- **Blocked**: no clear hero object, copied reference arrangement, mismatched assets, unreadable text, or motion with no product job.
- **Repair required**: the concept is strong but one asset class, depth rule, lighting rule, text layer, or motion beat breaks cohesion.
- **Acceptable with risk**: one minor supporting element is weak, but the hero object and scene still read.
- **Pass**: the scene has one product idea, coherent asset jobs, believable depth/light/materials, integrated text, purposeful motion, responsive crops, and an original transformation.
