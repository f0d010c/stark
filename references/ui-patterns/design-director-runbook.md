# Design director runbook

Use this when Stark needs to generate, redesign, or critique a serious UI end to end instead of answering with isolated design tips.

This is the execution wrapper for the larger design system. It tells the agent what to decide, which references to pull, when to stop, and what evidence proves the result moved beyond generic output.

## Use when

- The user says "go all out", "next level", "make it actually good", "real UI/UX designer", "higher quality", "less generic", or "use libraries well".
- The work touches multiple dimensions: layout, motion, typography, product libraries, usability, copy, assets, and QA.
- The surface is public, high-craft, animation-led, user-facing, or likely to be reused as a portfolio/gallery example.
- The agent has already produced something visually acceptable but the user says it still feels bland, cheap, messy, copied, or not like a real product.

## Output Contract

Before implementation, produce this compact runbook:

```md
Design director runbook
- Product job:
- Surface/user mode:
- Primary user task:
- Main object:
- Proof surface:
- Reference board:
- Benchmark repair loop:
- Ambition calibration:
- Ambition surface recipe:
- Taste calibration:
- Variant selection:
- Originality move:
- Structural pattern:
- Component anatomy:
- Conversion proof:
- Typography recipe:
- Typography pairing:
- Copy voice:
- Text resilience/localization:
- Visual/material system:
- Visual language decision:
- Style lane:
- Asset plan:
- Asset realism:
- Motion/choreography:
- Motion pattern:
- Library stack:
- Library orchestration:
- Product library composition:
- Library de-defaulting:
- Frontend technique plan:
- Rejected defaults:
- Usability/state contract:
- Usability pattern:
- Responsive strategy:
- Adaptive composition:
- QA evidence plan:
- Showcase selection:
- Feedback memory:
```

After implementation or audit, produce:

```md
Design director report
- What changed:
- Evidence captured:
- Hard fails fixed:
- Remaining risks:
- Next best improvement:
```

## Sequence

### 1. Frame the product before style

Read:

- `design-execution-protocol.md`
- `design-preflight.md`
- `design-orchestration.md`
- `ambition-calibration-contract.md` when the request implies next-level, public proof, portfolio quality, better screenshots, stronger generated output, or serious product UI.
- `ambition-surface-recipes.md` after ambition and surface are known, so the target level becomes concrete structure, type, motion, library, asset, usability, and QA choices.
- `taste-calibration-system.md` when the request is premium, high-craft, library-heavy, animation-heavy, broad, or likely to be overdesigned.
- `variant-selection-loop.md` when the prompt is original, high-craft, next-level, public, portfolio, animation-led, repeated-generation, or asks for several designs.
- `task-ergonomics.md` from `../ux-patterns/` when the product has repeated use, risk, forms, checkout, admin, dashboards, editors, or agent runs.
- `usability-pattern-matrix.md` from `../ux-patterns/` when the product needs a real workflow structure, not only visual polish.
- `usability-scenario-testing.md` from `../ux-patterns/` when usability must be validated with first-run, returning, error/recovery, keyboard, and mobile/touch scenarios.

Decide:

- product job
- user mode
- primary task
- main object
- proof surface
- risk if the page is misunderstood
- expression level, density level, novelty budget, motion budget, library budget, one allowed showpiece, and restraints
- requested/target level, evidence depth, what to maximize, what to keep quiet, rejected spectacle, and stop/continue conditions
- ambition surface recipe: chosen recipe, maximized dimensions, quiet support dimensions, structural recipe, type/motion/library/asset/usability/QA choices, rejected effort, and stop/continue conditions
- variant A/B/C directions, scorecard, selected direction, rejected variants, borrowed details, and anti-sameness checks when exploration is needed
- scenario tests for first-run, returning-user, error/recovery, keyboard-only, and mobile/touch paths when the surface is a serious product UI

Stop if the main object is "platform", "AI", "dashboard", "solution", "workflow", or another category word. Replace it with the thing the user handles: artifact, run, quote, account, timeline, prompt, scene, branch, payment, policy, clip, canvas, file, permission, ticket, or model output.

### 2. Research references without copying identity

Read:

- `reference-board-workflow.md`
- `reference-analysis.md`
- `benchmark-repair-loop.md` when improving an existing/generated draft against stronger references
- `premium-animation-direction.md` if an animated reference is involved

Extract:

- structure
- hierarchy
- motion rhythm
- proof timing
- responsive behavior
- state/recovery pattern
- asset strategy
- what not to copy

Reference work is not complete until the runbook names the originality delta: subject, object, composition, copy rhythm, color role, motion mechanic, or state model that changed.

If there is a current screenshot, preview, or draft, reference work is also not complete until the runbook names the quality gap, one repair hypothesis, the before/after evidence to capture, and the remaining delta after repair.

### 3. Choose the pattern and anatomy

Read:

- `pattern-selection.md`
- `composition-system.md`
- `page-proof-architecture.md` for long/full pages, launch pages, docs homes, product pages, or cases where the hero is stronger than the rest
- `conversion-proof-system.md` for landing pages, product pages, docs homes, pricing, install pages, waitlists, plugin trust pages, campaign pages, or any page with a CTA/conversion goal
- `product-intent-matrix.md`
- `surface-playbook-matrix.md` after product intent is known
- `navigation-information-architecture.md` for app shells, multi-route products, docs, dashboards, settings, workspaces, command/search, breadcrumbs, tabs, or route transitions
- `component-anatomy.md`
- `layout-precision-system.md` when the layout feels loose, cheap, misaligned, crowded, over-spaced, fragile, or slightly generated
- `interaction-state-matrix.md`
- `microinteraction-affordance-system.md` when hover, focus, pressed, selected, busy, optimistic, drag/drop, disclosure, or direct-manipulation feedback matters
- `accessibility-interaction-contract.md` when custom widgets, status updates, or complex keyboard/focus behavior are present
- `form-state-validation-system.md` when the product includes forms, settings, checkout, onboarding, filters, generation prompts, or any user input that can fail
- relevant UX pattern from `../ux-patterns/` when the surface is onboarding, checkout, editor, dashboard, or agent run

Decide:

- product intent
- surface playbook: must-read references, skipped references, structural pattern, libraries, motion/type posture, states, responsive replacement, QA gates, and hard bans
- structural pattern
- first viewport composition
- page proof sequence and section jobs for full pages
- visitor intent, source/message match, offer, primary/secondary actions, decision stage, main objection, proof ladder, trust/risk signals, CTA rhythm, friction removals, and measurement events for CTA-driven pages
- section rhythm
- rejected pattern
- product library fit
- route map, navigation model, current-location model, search/command behavior, deep-link state, route states, and focus/scroll restoration when the surface has multiple routes or panels
- grid/container, pane model, alignment spine, spacing rhythm, text measure, media frame, adaptive breakpoints, overflow/reflow plan, and optical balance
- motion level
- component anatomy
- required states
- form pattern, validation timing, preservation, review/confirmation, and server recovery when user input can fail
- control/state behavior
- state vocabulary, feedback job, timing/easing, pointer/touch parity, optimistic/async behavior, and drag/selection affordances
- keyboard/focus behavior
- live-region/status behavior and hidden/inert content behavior when relevant
- mobile replacement for dense regions
- mobile proof order for full pages
- usable workflow pattern and rejected pattern

If a dashboard/editor/checkout becomes a marketing page with cards, reject it. If a campaign page becomes centered hero plus three cards, reject it.

### 4. Set typography and copy before paint

Read:

- `typography-systems.md`
- `font-selection-matrix.md`
- `typography-pairing-lab.md`
- `type-recipes.md`
- `../web-fonts.md`
- `copy-system.md`
- `product-data-content-system.md` when UI proof depends on records, charts, dashboards, tables, timelines, forms, screenshots, search, or agent runs
- `text-resilience-localization-system.md` when UI depends on long labels, formatted values, translations, RTL, mixed scripts, dynamic content, or custom fonts
- `../web-copy-voice.md`

Decide:

- typography strategy: native, branded native, custom web, mixed, mono-led, editorial, or data-heavy
- font job and concrete stack
- pairing archetype by style lane
- concrete type recipe
- display/body/mono roles
- numeric behavior
- loading plan
- copy voice
- domain model, realistic fixture records, state distribution, edge cases, units/time/money rules, and privacy boundary
- text sources, locale formatting, expansion risk, wrapping/truncation rules, plural/grammar behavior, RTL/bidi behavior, font fallback, component stress cases, and QA checks
- proof labels
- CTA language
- banned phrases

Hard fail if the page uses generic hype copy to carry the concept. Motion and type can create emotion, but copy must name concrete artifacts, actions, risks, states, owners, or proof.

### 5. Select the visual, asset, and token system

Read:

- `creative-direction.md`
- `style-diversity-matrix.md`
- `visual-language-decision-matrix.md`
- `material-systems.md`
- `visual-token-recipes.md`
- `theme-mode-density-system.md` when light/dark, high contrast, forced colors, brand themes, or density variants are relevant
- `asset-selection.md`
- `asset-realism-matrix.md`
- `asset-production-pipeline.md`
- `advanced-visual-systems.md` when shader/canvas/WebGL/Spline/Rive/Lottie/video/generated key art becomes the signature visual system
- `icon-illustration-systems.md`

Decide:

- material language
- visual language by risk, frequency, density, audience, and primary object
- style lane and rejected lanes
- palette ratio
- surface roles
- semantic states
- spacing density
- supported modes, theme parity, density variants, brand boundaries, first-paint behavior, and mode QA when relevant
- radius/elevation/border behavior
- icon/illustration source
- asset production path
- proof versus mood asset realism level
- advanced visual mechanic, visual owner, repeated motif, code-native content, fallback, and rejected spectacle when media/canvas/WebGL/Rive/Lottie/Spline/generative art is central
- license/privacy risk
- accessible text alternatives

Do not use decorative assets that do not clarify the product job, state, proof, or next action.

### 6. Decide motion and libraries by ownership

Read:

- `animation-creation.md` for animation-led pages
- `premium-animation-direction.md` for high-craft/reference-led motion
- `choreography-state-machine.md` for central motion
- `motion-pattern-atlas.md`
- `motion-library-playbooks.md`
- `library-orchestration-system.md` when native primitives, product libraries, motion libraries, visual systems, data-viz, forms, media, or assets are combined
- `data-visualization-library-selection.md` when charts, analytics, maps, timelines, metric panels, or data proof are present
- `advanced-visual-systems.md` when the motion depends on shader-like visuals, canvas fields, WebGL, Spline, Rive, Lottie, video composites, or generated key art
- relevant recipe in `../motion-recipes/`

Assign one owner per animated behavior:

- CSS: feedback, opacity/transform entrances, masks, fallbacks
- Motion: React state continuity, layout changes, gestures, command palettes, sheets, route/detail motion
- GSAP: authored timelines, pinned stories, scrubbed proof, SVG paths, split text
- Three/R3F: inspectable spatial objects, camera paths, shader/media worlds
- Spline: designer-authored 3D embeds with HTML-owned UI and poster/mobile fallback
- Rive: designer-authored runtime state machines
- Lottie: small authored loops, marks, loaders
- Anime.js: compact DOM/SVG timelines and meaningful kinetic type when GSAP is too much
- Theatre.js: authored keyframed web/3D sequences when designers need timeline control
- PixiJS: high-volume 2D product fields with HTML UI labels
- WAAPI: lightweight JS-controlled keyframes without a larger dependency
- video: cinematic proof
- Lenis: brand/editorial scroll feel only
- View Transitions/native scroll APIs: progressive continuity with fallbacks
- data-viz libraries: named chart question, accessible summary, responsive replacement, chart-as-product object, not decoration
- library orchestration: native/product/motion/data/asset/styling/state/accessibility/performance owners, QA probes, rejected libraries, and removal rule

The runbook must name rejected libraries. If the stack says "CSS + Motion + GSAP + Three + Lenis" without ownership and rejection rationale, simplify.

### 7. Build with containment and state coverage

Read:

- `web-implementation-tracks.md`
- `stack-blueprints.md`
- `frontend-technique-matrix.md`
- `performance-budget-contract.md` when motion, media, WebGL/canvas, data-viz, large lists, or many libraries are part of the surface
- `data-visualization-library-selection.md` when data-viz is part of the product proof or workflow
- `navigation-information-architecture.md` when route hierarchy, app shell, search/command, breadcrumbs/tabs, or mobile navigation are part of the surface
- `frontend-component-standards.md`
- `product-library-playbooks.md` when using product libraries
- `product-library-composition.md` after selecting product libraries
- `library-de-defaulting-system.md` when selected libraries are visible in the UI or the result risks looking like a starter kit
- `form-state-validation-system.md` when using form/schema libraries or implementing submit flows
- `responsive-containment.md`
- `adaptive-composition-system.md` when desktop, tablet, and mobile need different structures, media framing, dense-region replacements, motion fallbacks, or public high-craft responsive QA

Decide:

- implementation track
- feature/component boundaries
- native frontend primitives and fallbacks
- route/app shell ownership, current-location cues, mobile navigation replacement, focus/scroll restoration, and route-state handling
- critical path, heavy features, performance budget, and fallback evidence
- chart question, data-viz library, accessible summary, source/table fallback, and responsive chart replacement
- data/state owner
- product libraries and their behavior ownership
- product library token/theme mapping, component anatomy, rejected defaults, and QA probes
- default fingerprints, product-specific replacement, token/anatomy/state/copy/responsive changes, removed components, docs-example comparison, and QA when product libraries shape the UI
- loading/error/empty/permission/success/long-running states
- responsive replacement
- desktop/tablet/mobile structures, breakpoint triggers, component/container queries, nav/proof/media/dense-region/motion/text transformations, and QA viewports
- focus order
- overflow constraints

Use libraries to improve behavior, not to produce default-looking components.

### 8. Verify, score, and repair

Read:

- `qa-evidence-contract.md`
- `browser-qa-matrix.md`
- `visual-qa-protocol.md`
- `visual-qa-workflow.md`
- `implementation-review-loop.md`
- `visual-repair-playbook.md`
- `feedback-memory-loop.md` when user critique or repeated QA should affect future generations
- `benchmark-repair-loop.md` when comparing against a stronger reference
- `design-quality-metrics.md`
- `design-acceptance-gate.md`
- `showcase-selection-quality-contract.md` when generated examples, release screenshots, README/gallery items, dogfood batches, or public proof are involved

Capture or explicitly mark missing:

- desktop screenshot/visual inspection
- mobile/narrow viewport
- console errors
- primary interaction
- reduced motion
- horizontal overflow
- nonblank media/canvas/video/Rive/Lottie when relevant
- state coverage evidence
- accessibility/performance risk
- design-to-code drift between source decisions, files/components, and rendered evidence
- selected/rejected/repair decisions for any generated examples that might become public proof
- user critique converted into future bans, preferences, stress tests, scope, and expiration

Score only with evidence. Missing evidence is uncertain, not passing.

Repair rule: fix the highest-impact visible or decision-drift failure before polishing smaller details.

Acceptance rule: classify the result as blocked, passable, good, high-craft, or portfolio. If the gate is below the level implied by the user request, continue with one required repair and re-check the evidence instead of stopping.

## Decision Matrix

| User asks for | Read first | Output |
|---|---|---|
| "make it next level" | this runbook + `taste-calibration-system.md` + `design-orchestration.md` | full design director runbook with expression/library budgets |
| "how far should we push this" | `ambition-calibration-contract.md` + `ambition-surface-recipes.md` + `design-acceptance-gate.md` | target level, depth sliders, surface recipe, maximize/quiet/reject list, stop/continue condition |
| "generate multiple designs / pick the best" | `variant-selection-loop.md` + `style-diversity-matrix.md` + `design-quality-metrics.md` | divergent variants, scorecard, selected variant, rejected variants, and anti-sameness checks |
| "like this reference but original" | `reference-board-workflow.md` + `benchmark-repair-loop.md` + `premium-animation-direction.md` if animated | reference board, quality gap, originality delta, repair |
| "make this convert" | `conversion-proof-system.md` + `page-proof-architecture.md` + `copy-system.md` | offer, objection, proof ladder, trust/risk, CTA rhythm |
| "cool animations" | `animation-creation.md` | motion thesis and storyboard |
| "Luma-level" | `animation-creation.md` + `premium-animation-direction.md` | premium animation direction |
| "which animation pattern" | `motion-pattern-atlas.md` | primary pattern, rejected patterns, library owner |
| "which libraries" | `motion-library-playbooks.md` + `product-library-playbooks.md` + `product-library-composition.md` + `library-de-defaulting-system.md` | ownership, token mapping, anti-defaults, de-defaulting, and rejected libraries |
| "use multiple libraries well" | `library-orchestration-system.md` + `frontend-technique-matrix.md` + relevant playbooks | one owner per behavior, QA probes, rejected libraries, and removal rules |
| "implementation drift / looks different than brief" | `implementation-review-loop.md` + `qa-evidence-contract.md` + `visual-repair-playbook.md` | source decisions, files/components, rendered evidence, drift, highest-impact fix, and re-check |
| "do not repeat this problem" | `feedback-memory-loop.md` + `visual-repair-playbook.md` + `variant-selection-loop.md` | user wording, symptom, severity, future ban, preference, stress test, scope, and expiration |
| "too much / messy" | `taste-calibration-system.md` + `visual-repair-playbook.md` | one showpiece, removals, and repair evidence |
| "which frontend techniques" | `frontend-technique-matrix.md` | native primitives, library owners, fallbacks, QA probes |
| "fonts feel generic" | `typography-systems.md` + `type-recipes.md` | type strategy and concrete recipe |
| "text feels cheap" | `copy-system.md` + `../web-copy-voice.md` | copy job, voice, proof labels, banned phrases |
| "text might break" | `text-resilience-localization-system.md` | expansion, formatting, RTL, font fallback, stress QA |
| "usable, not just pretty" | `../ux-patterns/task-ergonomics.md` + `../ux-patterns/usability-pattern-matrix.md` + `../ux-patterns/usability-scenario-testing.md` | ergonomics, workflow pattern, scenario evidence |
| "test/QA this" | `qa-evidence-contract.md` + `design-quality-metrics.md` + `design-acceptance-gate.md` | evidence-backed score, gate, and repair |
| "which screenshots/examples should we show" | `showcase-selection-quality-contract.md` + `dogfood-generation-loop.md` | selected, rejected, repaired examples and gallery gaps |

## Hard Fails

- No product job.
- No main object.
- Serious product UI claims usability without a realistic scenario test.
- No proof surface.
- CTA-driven page has no offer, primary action, main objection, trust/risk answer, or CTA rhythm.
- No taste calibration for broad high-craft or library-heavy work.
- No rejected pattern or rejected library.
- No frontend technique/fallback plan for advanced native APIs, motion, overlays, or responsive components.
- No variant exploration for ambiguous high-craft work, or variants only differ by colors/fonts.
- Typography chosen by default rather than surface need.
- Copy could fit any SaaS page.
- Text only works with short English strings, hardcoded formats, or one exact line break.
- Animation exists without motion thesis, state machine, or reduced-motion equivalent.
- Libraries overlap ownership of the same behavior.
- Implementation does not preserve named decisions from the brief, or no files/rendered evidence were inspected before acceptance.
- Library list is longer than the product object description, or no removal rule exists.
- Multiple novelty axes compete without one dominant showpiece.
- Product libraries keep visible demo/default styling, copy, radius, or state behavior.
- Library de-defaulting does not name changed tokens, anatomy, state visuals, copy/data, and docs-example delta.
- Product UI lacks loading, error, empty, permission, or recovery states.
- Mobile is only a scaled-down desktop composition.
- Tablet/mobile are only squeezed or source-order stacked versions of desktop when the product needs structural replacement.
- QA report has scores without evidence.
- Public gallery or README examples are published without a selection/rejection decision.
- User critique is acknowledged but not converted into a scoped future ban, preference, or stress test when the failure could recur.
- Final report stops at passable when the user asked for high-craft, public, portfolio, or next-level work.

## One-Pass Checklist

Before final delivery, check:

1. Can the design be recognized from structure before colors?
2. Does one product object anchor the first viewport or primary screen?
3. Does the copy name concrete proof?
4. Does type fit the surface and density?
5. Is motion tied to proof, continuity, feedback, or control?
6. Are libraries assigned by ownership and not trend?
7. Is there one dominant showpiece and clear restraint around it?
8. If the prompt was ambiguous or high-craft, were multiple directions scored before one was selected?
9. Are repeated-use tasks faster after first use?
10. Are risky actions and recovery paths visible?
11. Does mobile preserve the same job with a different layout when needed?
12. Did screenshot or runtime evidence produce at least one repair when a visible issue existed?
13. Did repeated/user-stated critique become memory for future generations?
14. Did the implementation review compare source decisions against files/components and rendered output?
15. Does the acceptance gate meet the requested level, or did the report keep working?
16. If examples are public proof, were weak or repetitive candidates rejected?
