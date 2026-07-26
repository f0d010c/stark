# Research synthesis contract

Use this after `reference-board-workflow.md` and before `design-orchestration.md`, `surface-playbook-matrix.md`, `generation-blueprint-contract.md`, or implementation.

The goal is to turn research into binding design decisions. A reference board is not enough if the final page can ignore it. This contract converts references, library docs, typography guidance, choreography patterns, usability requirements, and QA risks into decisions the build must preserve.

## Required output

```md
Research synthesis contract
- Research question:
- Product job:
- User mode:
- Quality target:
- Sources inspected:
- Source confidence:
- Decision table:
- Library decisions:
- Typography decisions:
- Choreography decisions:
- Usability/state decisions:
- Responsive decisions:
- Originality boundary:
- Rejected patterns/libraries/fonts:
- Evidence required:
- Implementation constraints:
- Open risks:
```

## Source mix

For serious, high-craft, public, library-heavy, or unfamiliar work, inspect 3-6 sources before design:

| Source type | Use for | Avoid using it for |
| --- | --- | --- |
| Shipped product / live app | workflow, density, states, navigation, interaction | visual identity cloning |
| Official library docs | API fit, accessibility behavior, lifecycle, performance, fallback | judging taste or product strategy |
| Platform/design-system guidance | native conventions, accessibility, motion principles | forcing one platform style everywhere |
| High-craft visual reference | composition, material, type rhythm, motion pacing | copying hero object, props, palette, or copy |
| Failure reference / user critique | bans, weak signals, repair target | overcorrecting into a new generic pattern |
| Internal Stark guidance | routing, constraints, pass bars, QA | replacing current evidence |

When the user explicitly asks for research or the topic is a modern library, use current official docs where practical. If research is skipped, state why the existing local guidance is enough.

## Decision table

Turn every useful source lesson into a decision:

| Research signal | Decision it changes | File/component affected | Evidence to verify |
| --- | --- | --- | --- |
| Radix primitive owns dialog focus | Use Radix/Dialog for modal behavior, custom tokens for visuals | `InstallDialog` | keyboard open/close, focus trap, restored focus |
| Motion owns shared layout | Use Motion for selected artifact transition only | `ArtifactPanel` | transition does not hide loading/error state |
| Reference has strong proof above fold | Put product artifact in first viewport, not below feature cards | hero/proof section | desktop/mobile screenshot shows proof object |

If a lesson does not change layout, component anatomy, state, copy, motion, library ownership, typography, responsive behavior, or QA evidence, leave it out.

## Library synthesis

For each candidate library, decide:

- Job it owns.
- Why native/CSS is insufficient.
- What it must not own.
- Required fallback.
- QA probe.
- Removal rule if quality or performance fails.

Use current library fit rather than popularity:

| Library/tool | Strong use | Research proof to seek |
| --- | --- | --- |
| CSS/native APIs | layout, containment, simple state feedback, progressive enhancement | support/fallback, reduced motion, no layout thrash |
| Motion | React state continuity, layout/shared transitions, gestures, component entrances | reduced-motion hook, layout behavior, no hidden states |
| GSAP/ScrollTrigger | one authored timeline, pinned proof, SVG/text staging | matchMedia/breakpoint cleanup, scroll range, reduced-motion static frames |
| Three/R3F | inspectable spatial object, shader scene, product depth | DPR/performance plan, nonblank canvas, fallback poster |
| Rive | designer-authored stateful object with named inputs | state-machine inputs, text/control ownership outside asset |
| Lottie/dotLottie | small brand loops, loaders, empty-state marks | file size, pause/offscreen, no essential text inside animation |
| Video | real/generated cinematic proof | poster, native overlay labels, pause/control policy |
| Radix / React Aria | accessible primitives and interaction patterns | keyboard/focus states, data attributes/state styling, custom visual ownership |
| TanStack Table/Query | serious table mechanics or server state | sorting/filtering/selection/stale/retry evidence |
| React Hook Form/Zod | complex forms, validation, dirty/submitting/server states | validation timing, recovery, preserved input |
| Data viz libraries | chart question, comparison, drilldown, exploration | accessible summary, source/units, mobile table fallback |

Hard fail if the research summary says "use Motion, GSAP, Three, Rive, Lottie, Lenis" without assigning unique ownership and rejected libraries.

## Typography synthesis

Translate research into type decisions:

- Surface: campaign, product proof, app, editor, dashboard, docs, checkout, trust, data, agent run.
- Reading mode: skimming, operating, editing, comparing, reading, buying, recovering.
- Display job: brand, concept, object label, hero only, none.
- UI/body job: scan speed, trust, warmth, density, long reading, platform fit.
- Mono job: code, logs, counters, coordinates, prompts, audit trail.
- Numeric rule: tabular numbers when comparing metrics, money, time, counts, rows, or logs.
- Loading/performance rule: limit families/weights, use WOFF2, use `font-display`, avoid custom fonts when trust/performance matters more than personality.
- Stress cases: mobile, long labels, localization, zoom, fallback metrics, CJK/RTL if relevant.

Reject fonts by reason, not taste:

- too generic for public brand proof.
- too expressive for repeated workflow.
- weak numbers for dashboards/logs.
- poor script coverage or fallback mismatch.
- too many weights/files for the value.

## Choreography synthesis

Convert references into a shot plan:

- Borrowed quality: depth, timing, continuity, reveal rhythm, interaction idea, material behavior.
- Changed identity: subject, object, prop set, copy rhythm, color role, motion mechanic.
- Main object: product artifact, instrument, scene, timeline, map, canvas, model, data object.
- Signature transformation: input to output, status to resolution, hidden to inspectable, raw to refined, risk to recovery.
- Beat list: establish, transform, prove, inspect/act, resolve.
- Library owner: CSS, Motion, GSAP, Three/R3F, Rive, Lottie, video, native API.
- Reduced-motion replacement: static proof frame, stepped sections, paused media, simple state change.

Do not let visual references dictate prop choices. If the research does not produce a new main object and transformation, continue synthesis before code.

## Usability synthesis

For product surfaces, research must decide:

- Primary task and frequency.
- Risk level and recovery path.
- Required states: empty, loading, partial, stale, permission, error, blocked, retrying, success, cancelled.
- Control model: mouse, keyboard, touch, command palette, bulk action, inspector, inline edit.
- Speed path for returning users.
- First-run path for new users.
- Mobile replacement.
- Evidence task that proves the workflow, not the mockup.

## Originality boundary

Before implementation, write:

```md
Originality boundary
- Borrowed:
- Changed:
- Rejected:
- New main object:
- New repeated motif:
- New proof surface:
- Why this is not a reskin:
```

Restart synthesis if the answer is mostly color, copy, or logo changes.

## Evidence contract

The research synthesis must define evidence that could disprove the design:

- desktop and mobile screenshots or visual inspection.
- interaction smoke for the primary behavior.
- one non-happy state.
- typography fit check.
- reduced-motion evidence when motion exists.
- nonblank media/canvas/Rive/Lottie/video evidence when relevant.
- keyboard/focus evidence when primitives/forms/menus exist.
- console/runtime check when a browser target exists.
- rendered quality gate and design acceptance gate for serious/public work.

## Source anchors

- Motion React documents layout/component animation, scroll values, and reduced-motion hooks: https://motion.dev/react and https://motion.dev/docs/react-use-reduced-motion
- GSAP documents `matchMedia()` cleanup for breakpoint-scoped timelines and ScrollTrigger work: https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29
- Rive web runtimes expose state-machine playback and runtime inputs: https://rive.app/docs/runtimes/web/state-machines
- Radix Primitives and React Aria position themselves as accessible primitive/component layers that leave styling to the product: https://www.radix-ui.com/primitives/docs and https://react-aria.adobe.com/getting-started
- TanStack Table is headless table infrastructure; product UI must own visual design, accessible summaries, and responsive replacement: https://tanstack.com/table/latest/docs/guide/tables
