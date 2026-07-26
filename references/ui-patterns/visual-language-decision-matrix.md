# Visual language decision matrix

Use this after `product-intent-matrix.md`, `surface-playbook-matrix.md`, `taste-calibration-system.md`, and `style-diversity-matrix.md`, before `material-systems.md`, `typography-pairing-lab.md`, `visual-token-recipes.md`, assets, motion, and implementation.

This matrix turns product context into a coherent visual language. It prevents Stark from treating every request as the same premium page with a new font, gradient, object, or animation library.

## Output Contract

```md
Visual language decision
- Product category:
- Surface/user mode:
- User frequency:
- Trust/risk level:
- Density level:
- Audience maturity:
- Primary object:
- Chosen visual language:
- Why it fits:
- Material posture:
- Typography posture:
- Palette/value posture:
- Shape/radius/border posture:
- Layout rhythm:
- Motion posture:
- Asset/media posture:
- Icon/illustration stance:
- Copy voice:
- Motif/repetition rule:
- One tasteful risk:
- Rejected languages:
- Hard bans:
- QA checks:
```

If the chosen language could fit the next unrelated prompt by changing the logo and accent color, reject it and choose again.

## Source Anchors

- Apple Human Interface Guidelines organize interface quality around platform foundations such as layout, typography, color, materials, motion, and accessibility.
- Material color guidance treats color as semantic roles for surfaces, text, icons, errors, and brand, not loose decoration.
- Carbon separates productive type for task-focused product spaces from expressive type for editorial/marketing contexts.
- IBM Design Language color guidance keeps neutral UI values dominant, reserves core action color for interaction, uses additional colors sparingly, and ties legibility to WCAG contrast.

## Decision Inputs

Choose the language from context, not taste:

- **Risk**: money, permissions, compliance, health, or destructive actions demand restraint.
- **Frequency**: daily tools need speed, stable geometry, and compact rhythm; campaign pages can spend more attention.
- **Density**: dashboards, editors, and agent runs need value contrast, tabular figures, and scan paths before mood.
- **Audience maturity**: technical, executive, consumer, creative, public-service, or luxury audiences read different cues as trustworthy.
- **Primary object**: artifact, run, scene, ticket, quote, policy, chart, file, canvas, clip, product, place, or record should shape the world.
- **Platform**: web, native desktop, mobile, docs, or embedded widget changes what feels credible.

## Visual Languages

| Language | Use For | Material | Type | Palette/Value | Motion | Hard Ban |
|---|---|---|---|---|---|---|
| Precision command | devtools, infra, agents, ops | ink, metal, rails, console surfaces | technical grotesque, mono labels, tabular figures | dark or light neutrals with one signal accent | fast state feedback | fake terminal decoration without real workflow |
| Trust ledger | finance, permissions, checkout, security, health | paper, ink, cells, stamps, audit surfaces | readable sans/serif plus tabular figures | restrained neutrals, explicit semantic states | quiet continuity | playful novelty near risky choices |
| Studio instrument | editors, builders, creative tools | canvas, quiet chrome, handles, selected states | compact UI sans, mono metadata | neutral work surface, accent for active tool | direct manipulation | marketing hero layout inside the tool |
| Cinematic proof | AI media, launches, demos, output-heavy products | media frames, light, poster edges, proof object | expressive display plus quiet UI labels | extracted from output/key art, one glow source | authored 3-5 beat sequence | random floating props or copied reference scene |
| Editorial authority | docs, knowledge, reports, research | paper, rules, annotations, index structures | editorial serif/sans, mono metadata | high reading contrast, one accent | light reveal | beige sameness and decorative marginalia |
| Data observatory | analytics, monitoring, intelligence products | data ink, panels, chart frames, source labels | data-literate sans, tabular/mono figures | value hierarchy plus semantic chart colors | drill/compare transitions | decorative chart variety with no decision |
| Playful instrument | consumer creation, education, onboarding, wellness | tactile plastic, soft surfaces, progress rituals | warm sans, small display personality | brighter but role-based | tactile feedback | childish copy or novelty controls in serious tasks |
| Civic utility | public service, healthcare forms, education access | solid panels, clear grouping, high contrast | sturdy sans, generous line height | conservative roles, accessible states | minimal state feedback | brand drama that weakens comprehension |
| Luxury restraint | premium object, portfolio, boutique product | high-quality media, fine rules, controlled whitespace | refined display with quiet body | rich neutrals, sparse accent, strong value control | slow only when it reveals product quality | fake luxury type with poor spacing or low contrast |
| Experimental poster | event, art, campaign, lab, manifesto | raw ink, texture, type as object | display-led, body still readable | bolder contrast, bounded system | one signature mechanic | using poster rules for repeated-use product UI |

## Translation Rules

### From Context To Language

- High risk + low frequency decision -> trust ledger or civic utility.
- High frequency + technical operations -> precision command or data observatory.
- Creative manipulation -> studio instrument, with cinematic proof only on public proof pages.
- Output-first AI/media -> cinematic proof plus product proof, not generic AI glass.
- Dense analysis -> data observatory with dashboard insight hierarchy before charts.
- Consumer learning or creation -> playful instrument, but keep controls adult and clear.
- Premium object -> luxury restraint only if media, spacing, and type quality can support it.
- Ambiguous public page -> generate three forks: product-specific, restrained, memorable risk.

### From Language To Build Choices

- **Material**: choose one family and one support material; remove extra glass, paper, glow, metal, or texture.
- **Typography**: decide where personality lives: display, numbers, labels, captions, or mono data; body text remains durable.
- **Palette/value**: assign background, surface, text, accent, semantic, and proof-highlight roles before choosing hues.
- **Shape**: let radius and borders express the object: square command, signed ledger, canvas handles, poster frames, tactile controls, or fine premium rules.
- **Motion**: echo the job: trace, compare, scrub, reveal, route, inspect, confirm, recover, or transition state.
- **Assets**: product proof first. Mood assets only support a named object, state, or identity motif.
- **Copy**: match the language; command copy is concrete, ledger copy is exact, cinematic copy is sparse, civic copy is plain.

## Quality Bar By Language

- Precision command: scanable at 3 seconds, keyboard path visible, states and logs feel real.
- Trust ledger: risky action can be reviewed, recovered, and audited without reading marketing copy.
- Studio instrument: canvas or artifact dominates, controls stay stable, selection state is obvious.
- Cinematic proof: key art, copy, and motion all point to one product truth; downstream sections prove rather than repeat mood.
- Editorial authority: reading rhythm, source labels, and hierarchy survive mobile and long content.
- Data observatory: primary decision, source freshness, exception logic, and drill path are visible.
- Playful instrument: delight speeds comprehension; it does not hide error, focus, or progress states.
- Civic utility: plain language, high contrast, clear grouping, and recovery beat visual novelty.
- Luxury restraint: spacing, media crop, type spacing, and material detail are precise enough to carry restraint.
- Experimental poster: the unusual mechanic is the idea, but controls, mobile, and text still work.

## Hard Fails

- Palette chosen before risk, frequency, density, audience, and primary object.
- Typography chosen by trend instead of its job in the visual language.
- Motion posture contradicts user frequency or risk.
- Motif is only a logo, accent color, or decorative background.
- Repeated-use dashboards use cinematic campaign pacing.
- Public campaigns collapse into centered hero, cards, and generic downstream sections.
- Multiple languages compete in one first viewport without a clear hierarchy.
- The design can be rebranded by changing one word and one accent color.

## QA Checks

- Can the chosen language be named from structure, density, type, and material before reading the logo?
- Does the language match risk, frequency, density, audience, and platform?
- Did the build remove at least one tempting but wrong language?
- Are semantic color, focus, and state roles still separate from brand expression?
- Does mobile preserve the same language through an appropriate replacement structure?
- Does the selected typography pair support the language and the real text load?
- Does motion echo the product job rather than decorate a generic layout?
- Do assets prove the product object, not just mood?
- Is the tasteful risk bounded by a restraint rule?
