# Ambition calibration contract

Use this after `design-preflight.md`, `design-mode-router.md`, and `taste-calibration-system.md`, before `capability-maximization-matrix.md`, library selection, typography selection, asset production, or implementation.

This contract decides how far Stark should go. It prevents two common failures:

- underbuilding a "next level" request with a polite template
- overbuilding a repeated-use product with spectacle, libraries, and motion that make the task worse

## Source anchors

- Apple motion guidance ties custom motion to status, feedback, instruction, platform fit, and avoiding unnecessary attention cost.
  https://developer.apple.com/design/human-interface-guidelines/motion
- Material motion choreography uses continuity and focal guidance to direct attention, not random decoration.
  https://m1.material.io/motion/choreography.html
- web.dev animation guidance favors transform and opacity and warns against layout/paint-heavy animation for performance.
  https://web.dev/articles/animations-guide
- WCAG 2.2 defines accessibility requirements for focus, target/input behavior, motion-sensitive users, errors, and reflow.
  https://www.w3.org/TR/WCAG22/

## Output contract

```md
Ambition calibration
- User wording:
- Surface:
- User frequency:
- Risk level:
- Requested level: functional / good / polished / high-craft / portfolio
- Target level:
- Evidence required:
- Product object depth:
- Originality depth:
- Typography depth:
- Motion depth:
- Library depth:
- Asset depth:
- Usability depth:
- QA depth:
- Things to maximize:
- Things to keep quiet:
- Things to reject:
- Stop condition:
- Continue condition:
```

## Ambition levels

| Level | Use when | Maximize | Keep quiet | Evidence |
|---|---|---|---|---|
| Functional | internal utility, quick helper, low-risk sketch | task completion, basic states | visual novelty, heavy motion, custom type | primary path works, no hard breakage |
| Good | normal product UI, internal dashboard, low-public-risk app | product object, hierarchy, copy, states, responsive containment | cinematic assets, excessive library stacks | desktop/mobile check, primary interaction, no obvious accessibility trap |
| Polished | user-facing workflow, docs, checkout, dashboard, app shell | density fit, type roles, component anatomy, recovery, focus, mobile replacement | showpiece motion unless it clarifies task | screenshot/DOM evidence, state coverage, repair if a visible issue exists |
| High-craft | "go all out", "next level", public demo, animation-led, premium, user critique | originality, proof surface, type/copy, one signature capability, assets, rendered gates | unrelated effects, starter-kit defaults, copied reference identity | desktop/mobile screenshots, interaction, reduced motion, rendered quality, usability/accessibility gates |
| Portfolio | README/gallery, launch hero, showcase, star/clone proof, visual benchmark | benchmark repair, distinctive structure, produced assets, refined still frames, curated proof | weak examples, hidden mobile flaws, vague copy | benchmark gap, originality boundary, first viewport/proof/mobile evidence, selection/rejection record |

If the user asks for stars, clones, public proof, gallery screenshots, release examples, or "actually good looking designs", default to `high-craft` or `portfolio` unless the surface is a repeated-use workflow where spectacle would reduce utility.

## Surface ambition rules

### Cinematic, campaign, product-proof landing

Target: high-craft or portfolio.

Maximize:

- one main product object
- art-directed proof surface
- typography pairing
- asset realism
- one motion pattern
- benchmark repair
- rendered still-frame quality

Keep quiet:

- product libraries unless the demo/form needs them
- dense app states outside the proof path
- multiple competing motion systems

Reject:

- centered hero plus cards
- copied reference props
- output hidden below the fold
- media with baked-in essential text

### Operational app, dashboard, CRM, editor, agent run

Target: polished or high-craft, rarely portfolio.

Maximize:

- task ergonomics
- workflow pattern
- state coverage
- product data realism
- speed paths
- keyboard/touch paths
- component anatomy
- table/list/form behavior

Keep quiet:

- cinematic scroll
- dramatic page transitions
- oversized display type
- decorative 3D/video

Reject:

- marketing-page spacing
- animated metrics without decisions
- hover-only critical controls
- spectacle that moves targets during repeated use

### Checkout, permissions, trust, admin risk

Target: polished or high-craft.

Maximize:

- consequence clarity
- validation and recovery
- preserved input
- review/confirmation
- focus order
- readable terms/prices/scopes

Keep quiet:

- playful motion
- novelty type near risk
- hidden terms
- color-only status

Reject:

- one-click trust without scope
- vague permission copy
- animation that obscures errors or consequences

### Docs, developer platform, plugin install

Target: polished or high-craft.

Maximize:

- information architecture
- search/command
- code/log readability
- version/platform state
- copyable examples
- mobile navigation

Keep quiet:

- reading-hostile scroll effects
- heavy visual systems that slow comprehension
- excessive display type

Reject:

- tiny code
- hidden nav
- generic "beautiful docs" claims without install/task proof

## Depth sliders

Use these sliders to decide where effort belongs.

### Typography depth

- `0`: system font only.
- `1`: native/system with tuned scale and numeric behavior.
- `2`: concrete display/body/mono recipe with loading plan.
- `3`: style-lane-specific pairing, rendered type gate, text stress fixtures.
- `4`: typography is a signature part of the identity and must pass desktop/mobile still-frame QA.

### Motion depth

- `0`: no motion beyond native feedback.
- `1`: microinteraction and state feedback.
- `2`: component continuity, route/detail transitions, status arrivals.
- `3`: one authored storyboard or scroll/product proof.
- `4`: signature animation/key-art system with motion frame QA, reduced-motion frames, mobile substitute, and performance budget.

### Library depth

- `0`: native primitives only.
- `1`: one behavior library for an accessibility or state need.
- `2`: product-library stack with clear owners.
- `3`: product libraries plus one motion/visual/data capability, each with QA probes.
- `4`: advanced multi-capability stack with source verification, production presets, orchestration, and rendered stack gate.

### Asset depth

- `0`: no custom assets.
- `1`: icons and simple product diagrams.
- `2`: code-rendered product mock, realistic screenshots, charts, or generated supporting imagery.
- `3`: art-directed hero/proof asset with responsive crops and media loading contract.
- `4`: signature key art, video/3D/Rive/Lottie/canvas system with nonblank, fallback, and motion-frame QA.

### QA depth

- `0`: manual sanity only.
- `1`: build/test plus basic viewport check.
- `2`: browser QA matrix, console, overflow, primary interaction, focus.
- `3`: screenshots, reduced motion, state coverage, accessibility/usability gates, implementation review.
- `4`: regression baselines, story-driven QA, benchmark repair, showcase selection, acceptance gate at target level.

## Maximization rule

Pick at most two dimensions to maximize for the first pass. Everything else supports the job quietly.

Good pairs:

- cinematic launch: asset depth + motion depth
- developer tool: typography depth + product proof/data depth
- dashboard: usability depth + product-library depth
- editor: interaction depth + component anatomy
- checkout/trust: usability depth + accessibility/recovery depth
- docs/platform: IA/search depth + typography/code depth
- showcase/gallery: asset depth + QA/selection depth

If three or more dimensions are at maximum, require a removal list before code.

## Continue/stop rules

Continue when:

- the requested level is high-craft or portfolio and the current result is passable or merely good
- the strongest proof is only in the hero and downstream sections are generic
- typography, copy, or mobile still feels default
- the library stack has no rendered proof or removal value
- usability/accessibility gates are missing for a serious product UI
- benchmark repair shows a major gap

Stop when:

- the target level is met by evidence
- the strongest product decision is preserved
- the highest-risk failure has been repaired and re-checked
- additional changes would add novelty without improving product proof, usability, accessibility, or public proof

## Hard fails

- No target level before implementation on broad or high-craft requests.
- "Go all out" is interpreted as adding many libraries rather than maximizing the right dimensions.
- A repeated-use workflow is pushed to portfolio spectacle at the expense of speed, density, or recovery.
- A public/demo surface stops at good without benchmark, mobile, rendered quality, and acceptance evidence.
- No continue/stop condition is named before final delivery.
