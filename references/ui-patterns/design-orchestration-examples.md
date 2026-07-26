# Design orchestration examples

Use these as finished decision-brief examples when a prompt is vague, ambitious, or reference-led. They are not templates to copy. They show the level of specificity Stark should reach before implementation.

## Cinematic AI video launch

```md
Design orchestration brief
- Product job: make visitors believe the model can turn a plain prompt into a controllable cinematic shot.
- User mode: evaluating.
- Quality references: borrow cinematic object depth, precise reveal pacing, and a calm first viewport from high-end launch pages; do not borrow a phone hero, party props, headline formula, or color recipe.
- Transformed concept: a "shot loom" where prompt tokens become camera rails, then weave into preview frames.
- Memorable anchor: one inspectable generated frame suspended inside a mechanical timeline loom.
- Usability anchor: prompt, output frame, controls, quality proof, and CTA are visible without waiting for a long intro.
- Typography system: wide grotesque display for cinematic confidence, quiet grotesque body, mono labels for frame/timecode.
- Choreography: load shows silhouette; prompt tokens draw rails; frame develops from center mask; scroll advances quality markers; final state opens a proof gallery.
- Library stack: video or generated poster for proof, GSAP for one pinned timeline, CSS for baseline reveals, optional Motion for React overlays. Reject Three unless the loom is truly spatial.
- QA gates: desktop/mobile screenshots, reduced-motion static frames, no copied prop set, no autoplay motion over 5 seconds without pause/stop/hide, no vague "AI-powered" copy.
```

## Developer-tool product proof

```md
Design orchestration brief
- Product job: prove the workflow from local change to reviewed artifact.
- User mode: evaluating.
- Quality references: borrow scan speed, crisp dark-surface contrast, and command-line rhythm from strong dev-tool sites; do not borrow generic terminal wallpaper or purple SaaS gradients.
- Transformed concept: a build-room wall with live lanes for plan, diff, checks, and artifact.
- Memorable anchor: the proof surface, not an illustration.
- Usability anchor: users can see inputs, output, failure, retry, and artifact ownership.
- Typography system: precise grotesque for reading, mono for logs, tabular figures for timing and counts.
- Choreography: command enters; lanes light in order; failed check expands; retry compresses history; artifact opens with route continuity.
- Library stack: CSS plus Motion for React layout continuity and expanding lanes. Reject GSAP and Lenis because this is a workflow UI, not a scroll film.
- QA gates: keyboard focus, loading/error/blocked states, mobile lane replacement, readable logs, no moving controls during interaction.
```

## Creative editor or canvas app

```md
Design orchestration brief
- Product job: make creation feel powerful while keeping the canvas stable.
- User mode: editing.
- Quality references: borrow professional tool density, stable inspectors, and subtle transition continuity; do not borrow marketing-page spacing.
- Transformed concept: a quiet studio bench where the canvas is the stage and tools behave like calibrated instruments.
- Memorable anchor: canvas plus selected-object halo and timeline scrubber.
- Usability anchor: undo/redo, selected state, layers, inspector, export, empty state, and recovery.
- Typography system: legible UI sans, mono only for coordinates, dimensions, shortcuts, and export settings.
- Choreography: file opens; selection halo follows object; inspector morphs between modes; timeline scrub previews output; export sheet resolves.
- Library stack: CSS and Motion for component state/layout. Reject Lenis, heavy scroll pinning, and decorative WebGL.
- QA gates: no inspector jump on hover, controls fit mobile/tablet, focus states visible, reduced motion keeps selection and timeline readable.
```

## Agent run UI

```md
Design orchestration brief
- Product job: help users understand, steer, pause, and recover from a long-running agent task.
- User mode: operating.
- Quality references: borrow observability clarity and command-center density; do not borrow decorative dashboards.
- Transformed concept: a run recorder with plan spine, tool-call lanes, artifacts shelf, and decision checkpoints.
- Memorable anchor: the plan spine that shows progress, risk, and next action at a glance.
- Usability anchor: stop, retry, resume, inspect, blocked reason, artifact, and logs.
- Typography system: compact UI sans, mono for tool names/logs, tabular figures for elapsed time and counts.
- Choreography: new step enters; active tool lane pulses subtly; artifact slides into shelf; blocked state takes visual priority; retry preserves history.
- Library stack: CSS plus Motion for state continuity. Reject GSAP, Lenis, and cinematic hero motion.
- QA gates: states covered, keyboard reachable controls, bounded log scroll, mobile stacked run summary, no color-only status.
```

## Checkout, pricing, or trust flow

```md
Design orchestration brief
- Product job: reduce purchase/install uncertainty.
- User mode: buying or recovering.
- Quality references: borrow clarity, trust hierarchy, and visible risk controls; do not borrow playful launch-page animation.
- Transformed concept: a decision table with permission, price, cancellation, and recovery lanes.
- Memorable anchor: the trust matrix, not a flashy hero.
- Usability anchor: price, plan limits, cancellation, security scope, error recovery, and primary action.
- Typography system: readable UI sans, tabular figures for prices, restrained labels.
- Choreography: only functional disclosure, validation, and confirmation transitions.
- Library stack: CSS. Reject Lenis, GSAP, Three, and decorative loops.
- QA gates: focus order, validation states, contrast, no motion near payment that distracts from price/risk, mobile comparison replacement.
```

## Docs or platform site

```md
Design orchestration brief
- Product job: help developers find, understand, copy, and return to API knowledge.
- User mode: browsing and evaluating.
- Quality references: borrow fast navigation, durable sidebars, and code readability; do not borrow a landing-page hero as the whole product.
- Transformed concept: a field manual with live examples, command palette, and route continuity.
- Memorable anchor: code/proof split with copyable examples and stateful API explorer.
- Usability anchor: search, navigation orientation, copy buttons, errors, versioning, mobile nav.
- Typography system: text face for docs, mono for code, tabular figures where examples include numbers.
- Choreography: route transitions preserve orientation; search opens instantly; examples highlight copied lines; sections reveal lightly.
- Library stack: CSS plus View Transitions or Motion where available. Reject Lenis and pinned scroll stories.
- QA gates: keyboard search, copy state, mobile nav, code overflow containment, no unreadable tiny labels.
```

## Anti-collage rewrite

If a design starts to look like unrelated props pasted around a hero:

1. Name the main object in five words or fewer.
2. Delete every element that is not object, proof, control, label, atmosphere, or transition.
3. Replace floating props with one repeated motif derived from the object.
4. Give every moving layer a job: establish, transform, prove, inspect, or resolve.
5. Rewrite hero copy around the object and proof, not vague excitement.
6. Re-run visual QA on the first viewport before adding sections.

Bad: phone, sparkles, calendar, speakers, disco ball, lens, chips, and timeline all competing.

Better: a single "shot loom" with prompt rails, one developing frame, timecode labels, and a proof gallery.
