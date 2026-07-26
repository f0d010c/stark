# Style diversity matrix

Use this after `originality-engine.md` and `creative-direction.md`, before `typography-pairing-lab.md`, `material-systems.md`, `visual-token-recipes.md`, and implementation.

This matrix prevents Stark from producing the same "clean dark SaaS", "soft beige editorial", "sidebar and cards", or "glow plus glass" output for every project. It chooses a distinct visual strategy by product job, platform, audience, and use frequency.

## Output Contract

```md
Style diversity brief
- Product category:
- User mode/frequency:
- Chosen style lane:
- Why this lane fits:
- Layout grammar:
- Material strategy:
- Typography posture:
- Color/token strategy:
- Motion posture:
- One memorable anchor:
- Rejected style lanes:
- Anti-sameness bans:
- QA checks:
```

## Style Lanes

| Lane | Best For | Layout Grammar | Material | Type | Motion | Avoid |
|---|---|---|---|---|---|---|
| Operational ink | dashboards, admin, CRM, agents, support, analytics | dense stack, priority queue, master/detail, cockpit | data ink, rules, low elevation | UI sans + mono figures | functional feedback | giant hero spacing, decorative cards |
| Trust ledger | finance, billing, checkout, security, permissions, healthcare | ledger, matrix, review step, evidence pane | paper/ink, stamps, restrained surfaces | readable sans/serif mix, tabular figures | quiet state transitions | playful accents near risk |
| Studio workbench | editors, creative tools, IDE-like surfaces, builders | canvas center, tools, timeline, inspector | quiet chrome, canvas material, selection states | compact UI sans + mono labels | direct manipulation | campaign hero structure |
| Cinematic proof | AI media, launches, demos, video/image tools | object stage, proof film, gallery, frame stack | media, glow tied to object, poster frames | expressive display + quiet UI | signature choreography | random particles and fake props |
| Editorial archive | docs, knowledge bases, research, reports, type/content products | index, side rail, chapter rhythm, specimen labels | paper, ink, rules, archive labels | editorial serif/sans + mono metadata | light reveal | beige sameness, low contrast |
| Industrial command | devtools, infra, CLIs, automation, ops | terminal board, command deck, log lanes | metal, console, hard rules | mono-led or technical grotesque | snappy/status-led | generic slate/indigo SaaS |
| Product showroom | marketplace, catalog, hardware, objects, portfolio | object-detail stage, comparison wall, spec table | object media, glass sparingly, measurement labels | refined display + utility text | inspect/compare | hiding product behind mood |
| Playful instrument | consumer, education, creator onboarding, wellness | tactile controls, progress ritual, friendly stack | plastic, color blocks, soft surfaces | warm sans/display accents | responsive/tactile | childish copy in serious tasks |
| Civic utility | public services, healthcare ops, forms, compliance | clear form path, status rails, accessible panels | calm solid surfaces, high contrast | system or sturdy sans | minimal | decorative risk and ambiguity |
| Experimental poster | portfolios, campaigns, arts, events | poster grid, kinetic type, dramatic asymmetry | raw ink, texture, type as image | expressive display-led | authored signature | product apps and repeated work |

## Product-To-Lane Heuristic

Choose by product job first:

- Daily operations -> operational ink or industrial command.
- Money, trust, permissions, health, compliance -> trust ledger or civic utility.
- Creation and editing -> studio workbench.
- AI/media/product proof -> cinematic proof.
- Docs, research, reference, education content -> editorial archive or task-led docs.
- Catalog, marketplace, product object -> product showroom.
- Consumer activation or learning -> playful instrument.
- Portfolio/campaign/event -> experimental poster or cinematic proof.

If two lanes fit, pick the one that protects the riskiest user need. For example, a flashy AI security product should usually start with trust ledger plus cinematic proof, not full cinematic proof everywhere.

## Lane Recipes

### Operational Ink

Use when repeated work and scan speed matter.

- Layout: priority strip, saved views, table/list, selected detail, compact controls.
- Material: low-contrast panels, clear borders, semantic states, minimal shadows.
- Type: dense UI sans, tabular figures, mono for IDs/logs.
- Color: 80/15/5 or 90/8/2 ratio; accent reserved for action and selection.
- Motion: status updates, row selection, panel open/close; no cinematic scroll.
- Anchor: one operational object such as queue item, run, account, incident, or alert.

### Trust Ledger

Use when confidence, audit, or consequences matter.

- Layout: comparison rows, matrix, evidence pane, review summary, audit trail.
- Material: paper/ink, rules, stamps, subdued surfaces.
- Type: strong body readability, tabular numbers, restrained display.
- Color: muted accent, explicit semantic states, danger not brand-colored.
- Motion: quiet state changes; no moving payment/legal/security text.
- Anchor: receipt, ledger row, permission scope, risk stamp, policy diff.

### Studio Workbench

Use when the user manipulates an object.

- Layout: canvas/artifact dominant, toolbar, inspector, timeline/layers.
- Material: neutral chrome, selected-object highlight, canvas-safe background.
- Type: compact controls; labels do not compete with the artifact.
- Color: accent for selection/current tool/export, not broad decoration.
- Motion: direct manipulation, undo/redo, panel transitions.
- Anchor: canvas, layer, timeline, file, generated artifact, selected object.

### Cinematic Proof

Use when the page must make an output feel tangible.

- Layout: one object stage, proof frame, scroll proof film, gallery expansion.
- Material: media/poster frame, object glow, code-native overlays.
- Type: expressive display in first viewport, quiet product labels.
- Color: extracted from object/media; one glow source per viewport.
- Motion: storyboarded 3-5 beats; reduced-motion static proof frames.
- Anchor: generated clip, model output, artifact, scene, product object.

### Editorial Archive

Use when content, knowledge, type, or provenance matters.

- Layout: index, side rail, chapter markers, specimen tray, source notes.
- Material: paper/ink, rules, annotations, marginalia.
- Type: editorial serif/sans with mono metadata.
- Color: restrained paper/ink with one accent.
- Motion: light section reveal, anchor links, no spectacle.
- Anchor: source, article, artifact, paragraph, specimen, research note.

### Industrial Command

Use when the product feels technical and operational.

- Layout: command deck, log lanes, status channels, terminal board.
- Material: dark metal/console, hard separators, calibrated readouts.
- Type: mono-led or precise grotesque; tabular figures.
- Color: tinted near-black, one signal color, semantic status colors.
- Motion: fast, mechanical, status changes; avoid soft bouncy delight.
- Anchor: command, deploy, run, trace, branch, environment, prompt.

### Product Showroom

Use when the object itself must be inspected.

- Layout: object-detail stage, spec rail, comparison wall, proof gallery.
- Material: high-quality object media, measurement marks, restrained glass.
- Type: refined display plus utility labels.
- Color: extracted from product/media; neutral support surfaces.
- Motion: rotate/inspect/compare only when it clarifies the object.
- Anchor: product, plan, listing, hardware, artwork, media item.

### Playful Instrument

Use when friendliness and active learning matter.

- Layout: progress ritual, tactile controls, simple task stack.
- Material: soft plastic, color blocks, clear affordances.
- Type: warm sans with small display personality.
- Color: brighter but role-based; semantic states remain clear.
- Motion: responsive tactile feedback; no long waits before value.
- Anchor: habit, lesson, creator control, friendly instrument.

### Civic Utility

Use when clarity, trust, and accessibility beat brand drama.

- Layout: step path, status rails, plain forms, help near fields.
- Material: solid surfaces, high contrast, clear grouping.
- Type: sturdy sans, generous line height, readable labels.
- Color: conservative roles; semantic states explicit.
- Motion: minimal, only state feedback and focus preservation.
- Anchor: application, request, appointment, case, record, result.

### Experimental Poster

Use only when the surface can tolerate expressive risk.

- Layout: poster grid, oversized type, asymmetric tension, art-directed sections.
- Material: raw ink, texture, image/type collisions.
- Type: display-led; body copy still readable.
- Color: bolder palette, but not every section a new system.
- Motion: one authored signature, not constant effects.
- Anchor: event, portfolio piece, manifesto, collection, campaign symbol.

## Anti-Sameness Bans

Use these to keep generations distinct:

- Do not reuse the same dominant lane twice in a row for unrelated projects when another lane fits.
- Do not default to dark slate + indigo/blue accent for devtools; consider industrial command, operational ink, or editorial archive.
- Do not default to beige paper for every premium or editorial page.
- Do not default to glass panels for AI products; prefer cinematic proof only when there is a real proof object.
- Do not use the same card radius, shadow, and two-button hero across lanes.
- Do not use one type stack for every lane; map type to product role.
- Do not let a material trend override platform expectations.
- Do not blend more than two lanes in one first pass.

## Style Fork

For open-ended design requests, generate three forks:

```md
Style forks
1. Safe lane:
2. Product-specific lane:
3. Memorable risk lane:
Chosen:
Rejected:
```

Rules:

- Safe lane protects platform, usability, and trust.
- Product-specific lane should usually win.
- Memorable risk lane is allowed for public/campaign work, but must include restraints.
- Do not blend all three.

## QA Checks

- Can the screen be identified by lane before reading the logo?
- Does the lane match product job, risk, and frequency?
- Does the layout grammar differ from the previous generated default?
- Does the material strategy clarify hierarchy and interaction?
- Does type posture fit the lane and density?
- Does color use roles instead of one-note hue domination?
- Does motion posture match product use, not trend?
- Are rejected lanes named?
- Does mobile preserve the lane through a suitable replacement structure?

## Source Anchors

- Material Design treats color, typography, shape, motion, and components as themed systems with semantic roles, not isolated decoration.
- Apple Human Interface Guidelines emphasize typography, color, layout, platform conventions, and testing custom choices in context.
- Fluent 2 frames visual foundations through accessibility, focus order, color contrast, typography, icons, motion, and cross-platform design tokens.
- Atlassian Design System uses tokenized foundations such as elevation, surfaces, color, and typography to keep product UI consistent across dense collaboration workflows.
