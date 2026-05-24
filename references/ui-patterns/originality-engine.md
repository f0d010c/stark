# Originality engine

Use this before implementation when the user asks for an original, distinctive, memorable, non-generic, creative, polished, premium, weird, cinematic, high-craft, or "actually designed" page/app.

Originality is not decoration. It is a subject-specific concept, a less expected composition, one memorable anchor, and enough restraint that the product remains usable.

## Required originality brief

Before code, produce this:

```md
Originality brief
- Subject:
- Product world:
- Main object:
- Visual metaphor:
- Composition archetype:
- Repeated motif:
- One weird move:
- Restraints:
- Specific defaults banned for this brief:
```

## How to fill it

- Subject: the actual domain, object, service, artifact, user task, or product category.
- Product world: the environment the product feels like it belongs to: studio, control room, archive, lab, field kit, runway board, atelier, command deck, map room, editing bay, ledger, observatory, instrument panel.
- Main object: the thing users inspect, make, choose, buy, monitor, edit, or trust.
- Visual metaphor: one concrete metaphor that can influence layout and interactions.
- Composition archetype: the structural layout idea, chosen from the list below or invented from the subject.
- Repeated motif: one visual behavior or shape that returns across surfaces.
- One weird move: a tasteful, deliberate deviation from the obvious template.
- Restraints: the rules that prevent the weird move from becoming noise.
- Specific defaults banned: the exact skeletons, copy, components, or motifs that would make this brief generic.

## Concept seed

For serious original work, write a seed before the UI decision brief:

```md
Concept seed
- Subject:
- Metaphor:
- World:
- Main object:
- Layout premise:
- Repeated motif:
- One weird move:
- Restraints:
```

Example:

```md
Concept seed
- Subject: local file sync utility
- Metaphor: air traffic control for file movement
- World: quiet operations room, not aviation cosplay
- Main object: transfer lanes
- Layout premise: live runway board instead of generic dashboard cards
- Repeated motif: clearance strips, delayed/landed states, timestamped handoffs
- One weird move: files travel through horizontal strips with status stamps
- Restraints: no plane illustrations, no novelty labels, native desktop controls remain standard
```

## Composition archetypes

Choose one composition archetype before arranging components:

| Archetype | Use for | Shape |
|---|---|---|
| Cockpit | monitoring, devices, agents, deploys, operations | priority strip, live status, controls, dense readouts |
| Map / table hybrid | logistics, locations, pipelines, inventory | spatial overview plus sortable records |
| Specimen tray | portfolios, type, products, assets, media | objects displayed as labeled specimens |
| Command deck | power tools, devtools, automations | command strip, recent actions, logs, keyboard paths |
| Ledger | finance, billing, audit, compliance, inventory | rows, balances, stamps, reconciliation states |
| Timeline wall | agent runs, CI, history, workflows | phases, events, artifacts, retry/recovery |
| Studio desk | creative tools, editors, writing, media | artifact in center, tools around it, materials nearby |
| Terminal board | infrastructure, CLI, developer products | streams, prompts, commands, status channels |
| Light table | images, documents, research, comparison | previews, overlays, annotations, selected detail |
| Magazine spread | campaigns, editorial pages, luxury brands | oversized type, asymmetry, chapter rhythm |
| Object-detail stage | products, media, catalog, profile detail | one selected object as hero with metadata and actions |
| Inspection bay | QA, security, healthcare, diagnostics | item under review, checks, evidence, decision controls |
| Archive index | knowledge, notes, files, libraries | dense index, facets, preview, provenance |
| Instrument panel | hardware, science, music, creative utilities | calibrated controls, meters, modes, stable readouts |

Composition is not visual theme. A Windows app can be a cockpit, a macOS app can be a specimen tray, and a web landing page can be a ledger if the product calls for it.

## Three-direction fork

When the brief asks for originality and the product is not already constrained by an existing design system, generate three short directions before choosing:

```md
Concept options
1. Conservative native: ...
2. Product-specific: ...
3. Memorable risk: ...
Chosen: option ... because ...
```

Rules:

- Option 1 protects usability and platform fit.
- Option 2 should be the best default for most product work.
- Option 3 can be bolder, but must still name its restraint.
- Choose one direction before code. Do not blend all three.
- If the user already gave a strong creative direction, skip the fork and state that the user supplied the direction.

## Source originality from the subject

Use domain facts, not trend words:

| Product | Weak generic move | Stronger source of originality |
|---|---|---|
| Backup app | dashboard cards | recovery timeline, restore points, integrity stamps |
| Music app | generic sidebar | queue, waveform, listening room, collection wall |
| AI agent UI | chat plus spinner | plan, tool calls, artifacts, retry path, run replay |
| Billing app | pricing cards | ledger, reconciliation, renewal risk, invoice state |
| Design tool | floating cards | canvas, layers, inspector, command deck, snapshots |
| Security app | lock icons | trust matrix, scopes, evidence, audit trail |
| File manager | folder grid only | path history, preview table, transfer lanes, provenance |
| Healthcare tool | soft blue cards | queue, triage, evidence, handoff, risk markers |
| Restaurant page | stock food hero | menu as service choreography, ingredient map, reservation ritual |
| Type foundry | generic portfolio | specimen tray, glyph behavior, archive index |

## Originality audit

Reject these unless the brief specifically calls for them:

- Sidebar plus cards plus table as the default desktop shell.
- Centered hero, subtitle, two buttons, three feature cards for every site.
- Generic dashboard labels: Overview, Analytics, Activity, Customers, Performance.
- Decorative metaphor that does not affect layout, states, or interaction.
- Moodboard-only creativity: colors and gradients without a structural idea.
- Five unrelated clever moves.
- Product UI that could belong to another category after changing the logo.
- Custom controls that break native platform expectations.
- High-craft hero followed by generic sections.
- Original visuals with missing empty/loading/error/permission/success states.

## Output expectation

For original design work, the generation should include:

1. Concept seed or originality brief.
2. Three-direction fork when useful.
3. UI decision brief that carries the chosen composition archetype.
4. One memorable anchor.
5. One set of restraints.
6. A final originality audit pass.

Keep the brief compact. The point is to steer the build, not to write a manifesto.
