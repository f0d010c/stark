# Design orchestration

Use this when the user asks to "go all out", reach a higher design level, use animation libraries well, improve choreography, choose fonts, improve usability, or produce work that feels designed by a strong UI/UX designer and frontend engineer.

This is the design-director layer. It connects visual direction, library choice, typography, choreography, usability, and QA into one repeatable workflow.

For broad or risky work, start with `design-preflight.md` so the agent chooses which references to read, which to skip, and how many libraries/effects the surface can justify. When research or references are used, run `research-synthesis-contract.md` before implementation so sources become decisions rather than mood.

## Operating principle

High-end design is not more effects. It is a strong concept executed with the right constraints:

- One product job.
- One memorable object or layout premise.
- One clear hierarchy.
- One motion thesis.
- Two to four supporting techniques.
- Usability and state coverage that survive the spectacle.

If any added library or visual element does not reinforce the job, object, hierarchy, or motion thesis, remove it.

## Quality lessons from research

Use these when an animated page feels messy, cheap, or too close to a reference:

- Composition beats decoration. Rauno Freiberg's web interface guidelines emphasize proportional, fast, restrained motion; Anthony Hobday's interface writing separates visual design from interaction design and treats animation as a response to input or state, not loose ambience.
- Aesthetic quality can improve perceived usability, but it can also hide usability problems. Use the aesthetic-usability effect as motivation to polish, not as permission to obscure proof, controls, or recovery.
- Good application visual design is hierarchical and stateful. For tools, dense apps, checkout, docs, and dashboards, useful structure beats expressive spectacle.
- Interface personality comes from many coordinated details. Variety is useful only when relationships are controlled; too many unrelated objects make the page feel pasted together.
- Strong animation is fast, smooth, interruptible, relevant to the concept, internally logical, and respectful of motion preferences.
- Layering should clarify structure. Background, container, object, controls, labels, and atmosphere need clear contrast and depth roles.
- Premium animation needs production direction, not more props. When a page feels messy, copied, or cheap, read `premium-animation-direction.md` and rebuild the product truth, main object, signature transformation, visual world, motif, proof surface, and copy voice before touching libraries.

## Research-to-design workflow

Before implementation, produce this compact brief:

```md
Design orchestration brief
- Product job: what the user/viewer must understand or do
- User mode: browsing / evaluating / comparing / operating / editing / buying / recovering
- Quality references: 2-4 references and the abstract qualities borrowed
- Research synthesis: source confidence, decisions changed, rejected sources/patterns/libraries/fonts, and evidence required
- Transformed concept: new object/world/mechanic created for this brief
- Memorable anchor: typography / object / proof surface / interaction / material / composition
- Usability anchor: primary action, proof, state, scan path, or recovery path
- Task ergonomics: frequency/risk fit, control model, speed path, error prevention, recovery, evidence task
- Copy system: copy job, voice, hero/CTA, proof labels, state/recovery copy, banned phrases
- Typography system: display, body/UI, mono/labels, fallback, why it fits
- Choreography: 3-5 beats with focal point, trigger, duration, easing, and fallback
- Premium animation direction: product truth, main object, signature transformation, motif, proof surface, copy voice, and originality delta when the page is animation-led
- Library stack: CSS / Motion / GSAP / native scroll CSS / Three/R3F / Rive / Lottie / video / Lenis, with rejected options
- QA gates: responsive, accessibility, performance, visual fidelity, interaction, state coverage
```

## Library roles

Choose libraries by job, not fashion.

| Need | First choice | Use when | Avoid when |
|---|---|---|---|
| Hover/focus/disclosure | CSS transitions | Simple state feedback, buttons, tabs, nav, status | Sequencing many dependent objects |
| Scroll reveal/progress | Native CSS scroll-driven or CSS + IntersectionObserver | Progressive enhancement, simple reveals, docs progress | Critical story with no fallback |
| React component motion | Motion | Layout continuity, modals, sheets, command palettes, gestures, `useScroll`, shared elements | Large authored scroll films or SVG timelines |
| Authored timeline | GSAP | Pinned sections, scrubbed storytelling, SVG path drawing, text split, complex staging | Dashboards, forms, checkout, basic fades |
| Spatial hero object | Three.js/R3F | Product object, shader scene, camera path, physical depth | Generic cards, simple 2D compositions, weak devices |
| Designer-authored illustration | Rive | State machines, character/logo/product illustrations, interactive artboards | Text-heavy UI, data tables, layout motion |
| Lightweight vector animation | Lottie | Small brand marks, loaders, explainer loops from After Effects | Interactive product state, editable UI, heavy hero movies |
| Cinematic proof | Video | Real/generated media is the product proof | Fake video that replaces usable UI |
| Scroll feel | Lenis | Brand/campaign page where scroll texture is part of the art direction | Apps, docs, checkout, editors, admin |
| Page/route transition | View Transitions API or Motion | Gallery/detail, docs, SPA route continuity | Hiding loading, permission, or error states |

## Choreography rules

Plan motion like a shot list:

1. Establish the object.
2. Reveal the transformation.
3. Show proof.
4. Let the user inspect or act.
5. Resolve into the next section or CTA.

For each beat define:

- Focal point: the thing the eye should track.
- Trigger: load, scroll, click, hover, drag, route change, or system progress.
- Continuity: what remains visible from the previous beat.
- Duration: 120-240ms for UI feedback, 300-700ms for component transitions, 800-1600ms for cinematic reveals.
- Easing: snappy for tools, soft for editorial, spring for tactile UI, linear only for scrubbing or ambient loops.
- Exit: where attention lands next.
- Fallback: static frame, fade, stepped section, or no movement.

Red flags:

- Multiple unrelated focal points move at once.
- Decorative props orbit the hero with no product meaning.
- Scroll pinning traps the user longer than the story deserves.
- The CTA appears after a slow reveal instead of being available.
- Motion explains nothing that static layout could not.

## Typography direction

For full cross-surface type strategy, read `typography-systems.md` before choosing concrete fonts.

Typography carries perceived quality. Pick type by surface:

| Surface | Display | Body/UI | Notes |
|---|---|---|---|
| Editorial/campaign | Character serif or high-contrast grotesque | Quiet grotesque | Use scale and rhythm, not many weights |
| Developer tool | Precise grotesque or mono-led display | Humanist/geometric sans + mono | Avoid default dark SaaS type unless the concept demands it |
| AI/media/product launch | Wide grotesque, soft grotesque, or restrained serif | Neutral grotesque | Let media/object carry drama |
| Luxury/portfolio | High-contrast serif or refined grotesque | Serif or warm grotesque | Use generous leading and fewer labels |
| Operational app | Legible UI sans | Same family or close companion | Favor scan speed, numbers, tabular figures |
| Data/agent/devops | Mono for labels/data, sans for reading | Sans + mono | Mono everywhere only when it is the concept |
| Playful consumer | Round/soft display | Highly readable sans | Keep body text calmer than the brand voice |

Rules:

- Product copy should be concrete: object, state, artifact, risk, time, owner, action, or transformation. Read `copy-system.md` and `../web-copy-voice.md` when copy is part of the surface.
- Do not use Inter, Roboto, Arial, Space Grotesk, or system-ui as the primary personality unless the repo already requires it.
- Use one display face and one text/UI face. Add mono only for code, metadata, counters, coordinates, or instrumentation.
- Match x-height/proportion when pairing; create contrast through classification, width, weight, or optical size.
- Use variable fonts when axis motion supports the concept; do not animate body text.
- Body text must stay readable: comfortable line length, stable line height, no tiny low-contrast labels.
- UI labels inside hero art should be product instrumentation, not filler decoration.

## Usability gates

Good-looking work is not enough. Decide the user's mode and protect it:

- Browsing: first viewport must explain the offer and leave a clear path onward.
- Evaluating: show proof, comparison, examples, pricing/risk, or evidence quickly.
- Comparing: use tables, before/after, matrices, filters, and stable labels.
- Operating: prioritize density, status, owner, timestamp, next action, and recovery.
- Editing: protect the canvas, keep controls stable, expose undo/redo and selected state.
- Buying: reduce uncertainty; do not hide price, cancellation, trial, or risk behind motion.
- Recovering: error, permission, blocked, stale, and retry states must be visible.

Never let visual spectacle remove:

- Primary action.
- Product proof.
- Navigation orientation.
- Loading/error/permission states.
- Keyboard/focus access.
- Text readability.
- User control over long-running motion.

For serious product surfaces, also read `../ux-patterns/task-ergonomics.md`. The UX contract should define frequency, risk, cognitive load, user control, repeated-use speed, error prevention, recovery, and evidence tasks before visual direction can be considered successful.

## QA checklist

Before final delivery, verify:

- Visual hierarchy: one clear focal point per viewport.
- Concept integrity: reference transformed into a new object/world/mechanic.
- Typography: display/body/UI labels feel intentional; no generic default type; no cheap hype copy.
- Responsive framing: hero object, nav, CTA, tables, media, and long text fit desktop and mobile.
- Motion budget: 2-4 signature moments max for expressive pages; less for tools.
- Reduced motion: important info remains visible with motion disabled.
- Performance: continuous motion uses transform/opacity; heavy media is lazy-loaded; WebGL DPR capped; no layout thrash.
- Accessibility: focus states, contrast, semantic controls, no essential hover-only action, no rapid flashing.
- WCAG motion: autoplaying motion longer than 5 seconds has pause/stop/hide unless essential.
- State coverage: empty/loading/error/permission/success/long-running where relevant.
- Browser evidence: screenshots or browser checks for desktop and mobile; console errors clean.
- Canvas/video/WebGL evidence: nonblank, correctly framed, and fallback visible.

## Source-backed heuristics

- Apple HIG: motion should support the experience, not exist for its own sake; make motion optional and avoid discomfort.
- Material motion: choreography should preserve focus and continuity between states.
- WCAG: moving, blinking, or scrolling content that starts automatically and lasts more than 5 seconds needs a pause/stop/hide mechanism unless essential.
- web.dev: animate transform and opacity where possible; other properties can hit layout/paint/composite costs.
- MDN: native scroll-driven animations can bind keyframes to scroll or view timelines, but need fallback and browser-support judgment.
- Motion: use variants and orchestration for React component trees, gestures, layout continuity, and scroll-linked values.
- GSAP: use timelines/ScrollTrigger for authored sequences that CSS or component motion cannot express cleanly.
- Rive: use state machines for designer-authored interactive illustrations controlled by runtime inputs.
- Three.js: use post-processing only when the spatial scene earns it; match renderer/composer sizing and performance budgets.
- Rauno Freiberg, Web Interface Guidelines: keep interface motion proportional, immediate, and respectful of frequent actions.
- Anthony Hobday, Good application visual design: prioritize clear hierarchy, interactive affordance, density where useful, and long-term visual comfort for applications.
- Anthony Hobday, Visual design rules: use deliberate contrast, tinted neutrals, and layer differences instead of pure black/white defaults.
- Laws of UX, Aesthetic-Usability Effect: polish changes perceived usability, but can mask real usability defects if QA is weak.
