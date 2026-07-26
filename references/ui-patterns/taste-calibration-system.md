# Taste calibration system

Use this when Stark is asked to "go all out", "make it next level", use libraries, add animation, improve visual quality, or make a design feel less generic. This system decides how much expression, restraint, density, motion, library usage, and novelty the surface can carry.

The goal is senior design judgment: the best result is often not more effects, but a stronger hierarchy of choices.

Source anchors:

- NN/g's aesthetic-usability effect explains that polished interfaces can feel easier to use, but visual appeal cannot repair bad task fit or missing affordances.
- Material motion guidance frames animation as a way to communicate hierarchy, continuity, and state change.
- Apple HIG motion guidance emphasizes purposeful, understandable motion and avoiding effects that distract from user intent.
- Laws of UX patterns such as Hick's Law and cognitive load explain why more options, effects, and simultaneous signals can reduce perceived quality.

## Use when

- The user asks for higher-quality, next-level, premium, portfolio, beautiful, cinematic, original, or less generic output.
- A design has too many unrelated ideas, libraries, animations, motifs, fonts, surfaces, or decorative effects.
- The agent is tempted to use every relevant Stark reference instead of selecting the few that fit.
- A product surface could be either expressive or quiet, and the right answer depends on frequency, risk, and user mode.
- The work needs a design-director pass before implementation.

## Output contract

```md
Taste calibration
- Surface risk:
- User frequency:
- Expression level:
- Density level:
- Novelty budget:
- Motion budget:
- Library budget:
- Typography posture:
- Asset/key-art posture:
- Restraints:
- One allowed showpiece:
- Things to remove:
- QA taste checks:
```

## Expression ladder

Choose one level before visual styling:

| Level | Use for | Allowed moves | Hard limit |
|---|---|---|---|
| 0 Quiet utility | settings, admin, forms, compliance, dense dashboards | native components, careful spacing, clear labels, state color | no decorative motion or hero theatrics |
| 1 Polished product | SaaS apps, docs, editor shells, repeated workflows | distinctive layout, strong typography, refined microinteractions | one subtle motif, not a campaign |
| 2 Signature product | public product pages, demos, onboarding, launches | memorable first viewport, one proof animation, custom assets | one showpiece; product proof stays dominant |
| 3 Cinematic campaign | launches, brand moments, editorial stories | key art, authored choreography, expressive type, media composition | no generic sections after the hero |
| 4 Experimental artifact | portfolios, labs, creative tools, art/product hybrids | unusual interaction model, generative/canvas/3D motif, kinetic type | must still state the product job and fallback |

Most product apps should live at 0-1. Most public product pages should live at 1-2. Only explicitly cinematic, editorial, or campaign surfaces should live at 3-4.

## Novelty budget

Pick one primary novelty axis and keep the rest calmer:

- **Structure**: unusual layout, proof ladder, map/table, command deck, object-detail stage.
- **Typography**: distinctive display type, kinetic type, editorial scale, mono/data voice.
- **Material**: paper, glass, metal, data ink, cinematic proof, tactile plastic, raw/brutalist.
- **Motion**: signature transformation, scroll proof film, object birth, data morph, state-machine illustration.
- **Asset/key art**: generated product mock, 3D object, code-rendered UI, video proof, diagrammatic system.
- **Interaction model**: command-first, inspector/canvas, timeline replay, permission matrix, guided setup.

If two novelty axes are active, one must support the other. If three are active, the design needs an explicit reason and a higher QA bar.

## Library budget

Libraries should earn their place by owning behavior:

- Use product libraries for accessibility, complex state, tables, forms, overlays, command menus, carousels, charts, and server state.
- Use motion libraries for state continuity, authored timelines, gestures, scroll proof, SVG paths, spatial scenes, or designer-authored sequences.
- Use visual libraries for 3D/canvas/Rive/Lottie/video only when the visual proves the product or becomes a coherent motif.
- Do not use a library just because the design should feel premium.

Default budgets:

- Utility/admin/form: 0-2 product libraries, no decorative motion library.
- Product app/editor/dashboard: 1-4 product libraries, 0-1 motion library.
- Product proof page: 0-2 product libraries, 1 motion/visual library when it owns the proof moment.
- Cinematic campaign: 0-1 product libraries, 1-2 motion/visual libraries with strict ownership.

## Restraint rules

- One showpiece per first pass: hero object, scroll proof, animated diagram, command deck, 3D object, or type system.
- One dominant type personality. Body/UI text stays quiet enough to work.
- One material language. Do not mix glass, paper, glow, brutalist borders, and 3D chrome unless the concept explains it.
- One motion grammar. Do not combine springy app transitions, scrubbed cinematic motion, marquee loops, magnetic cursors, and parallax unless each has a different job.
- One primary accent behavior. Avoid every component shouting with color.
- Remove any element whose job is "looks cool" but cannot be tied to proof, orientation, feedback, emotion, or comprehension.

## Surface fit

### Dashboards and operational tools

- Prioritize scan speed, stable panes, visible state, keyboard path, compact density, and non-happy states.
- Novelty should live in structure, data visualization, typography restraint, or a small motif.
- Avoid cinematic transitions, oversized key art, and marketing hero composition.

### Editors and creative tools

- Canvas/work object dominates.
- Inspectors and toolbars stay predictable.
- Motion supports selection, object continuity, and command feedback.
- Novelty can live in tool anatomy, preview surfaces, or direct manipulation.

### Docs and developer tools

- Make proof immediate: command, code, output, API shape, migration, diff, trace, or deploy state.
- Typography and information architecture matter more than decoration.
- Motion can support command palette, route continuity, or copyable examples.

### Checkout, pricing, permissions, and trust

- Restraint is quality.
- Avoid distracting motion near risky decisions.
- Use comparison, risk labels, recovery copy, and clear state rather than theatrical visuals.

### Campaign and product launches

- The showpiece must express a product truth, not generic spectacle.
- The second and third sections must prove, not repeat the hero mood.
- Motion must have choreography, fallback, and a final resting state.

## Typography posture

- **Quiet native**: settings, system utilities, admin tools, compliance.
- **Data-literate**: dashboards, analytics, finance, agent runs, logs.
- **Editorial/product**: docs, product proof pages, studio tools.
- **Campaign/display**: cinematic launches and brand moments.
- **Experimental type**: only when type is the primary visual object.

Hard fail if a distinctive font harms scan speed, number comparison, localization, accessibility scaling, or platform trust.

## QA taste checks

- Can the design be described as one sentence plus one visual mechanic?
- Could removing one effect make the product job clearer?
- Is there one dominant hierarchy, or are multiple areas competing?
- Did the chosen libraries own real behavior?
- Does mobile preserve the same idea without miniaturizing spectacle?
- Are states, recovery, and accessibility still visible after polish?
- Does the design still work when motion is reduced?
- Are the first viewport and second section part of the same system?

## Hard fails

- "Go all out" produced more libraries but no stronger product object.
- Multiple unrelated showpieces compete in the same viewport.
- Motion, asset, material, typography, and layout all try to be the signature at once.
- A high-risk workflow is treated like a campaign page.
- A campaign page has a strong hero but generic downstream sections.
- The design uses premium references as visual costume instead of transforming structure, proof, and interaction.
- Removing decorative effects would reveal a generic centered hero, cards, or dashboard shell.
