# Design mode router

Use this immediately after `design-preflight.md` and before `product-intent-matrix.md`, `surface-playbook-matrix.md`, or `design-director-runbook.md` when a prompt could be interpreted in multiple ways.

The goal is to choose the right ambition and output mode before Stark selects references, libraries, motion, typography, assets, and QA. Wrong design mode is a root cause of bland or mismatched generations: dashboards become marketing pages, campaign pages become app chrome, quick fixes become overbuilt, and interactive products become static posters.

## Required output

```md
Design mode decision
- User request:
- Output mode:
- Quality target:
- Product surface:
- User mode:
- Primary proof:
- Interaction depth:
- Expression ceiling:
- Library ceiling:
- Motion ceiling:
- Must-read references:
- Must-skip references:
- Evidence required:
- Hard no:
```

## Output modes

| Mode | Use when | Quality target | Primary proof | Interaction depth |
| --- | --- | --- | --- | --- |
| Targeted repair | user points to one issue: font, cheap text, spacing, mobile, blandness | fixed / good | before-after evidence | only affected controls |
| Product app/workbench | dashboard, editor, CRM, agent run, settings, docs platform, repeated-use workflow | good / polished / high-craft | task completion and states | stateful prototype |
| Product proof landing | product page, developer tool, plugin, waitlist, launch with CTA | high-craft / portfolio | workflow proof, CTA, objection handling | clickable proof |
| Cinematic/animation-led | Luma-style, launch film, scroll story, product reveal, motion showcase | high-craft / portfolio | main object transformation and still frames | trigger/play/scroll proof |
| Trust/risk flow | checkout, billing, permissions, security, healthcare, finance, destructive action | polished / high-craft | consequence, recovery, focus, terms | workflow prototype |
| Docs/developer platform | docs home, API reference, install guide, examples, changelog | good / polished / high-craft | navigation, search, code readability | search/copy/route proof |
| Visual system/sample | design tokens, component gallery, UI kit, theme modes | good / polished | token/state coverage | state gallery |
| Gallery/showcase proof | README screenshots, dogfood batch, public proof | high-craft / portfolio | screenshot-worthiness across surfaces | enough interaction to prove UI |

## Mode routing rules

- If the prompt says "usable", "workflow", "dashboard", "editor", "CRM", "agent run", "settings", "forms", or "not only good looking", choose product app/workbench unless the user explicitly asks for a landing page.
- If the prompt says "Luma", "cinematic", "animation", "scroll story", "cool motion", or names a visual reference, choose cinematic/animation-led but still require product proof and reduced motion.
- If the prompt says "stars", "clones", "README", "public", "portfolio", "showcase", or "proof screenshots", choose gallery/showcase proof and require desktop/mobile rendered evidence.
- If the prompt names a specific issue and does not request a redesign, choose targeted repair and do not read the full design system.
- If money, permissions, medical, legal, security, destructive action, or account access is involved, choose trust/risk flow even when the page should look polished.
- If the user asks for libraries first, choose mode by product job before selecting libraries. Libraries serve the mode, not the prompt wording.

## Expression ceilings

| Mode | Expression ceiling |
| --- | --- |
| Targeted repair | change the failing dimension only |
| Product app/workbench | product-specific, refined, restrained; one showpiece max |
| Product proof landing | memorable, proof-led, conversion-aware |
| Cinematic/animation-led | expressive, but one main object and one motion mechanic |
| Trust/risk flow | calm, explicit, low spectacle |
| Docs/developer platform | readable, searchable, fast, quietly distinctive |
| Visual system/sample | systematic, stateful, theme-aware |
| Gallery/showcase proof | strongest allowed by surface; no crop hiding weak states |

## Library and motion ceilings

| Mode | Library ceiling | Motion ceiling |
| --- | --- | --- |
| Targeted repair | none unless needed for the fix | none / existing only |
| Product app/workbench | product libraries for behavior; visual libraries rare | state feedback and continuity |
| Product proof landing | 1-3 libraries when they prove workflow | proof reveal, route/detail continuity, CTA feedback |
| Cinematic/animation-led | 1 primary motion/visual owner plus helpers | storyboarded signature mechanic |
| Trust/risk flow | forms/dialogs/table primitives only | minimal feedback, no spectacle |
| Docs/developer platform | search, disclosure, copy/code helpers | route/search feedback only |
| Visual system/sample | component/state/theme tools | state transitions only |
| Gallery/showcase proof | enough to prove the selected surface | surface-specific, evidence-backed |

## Wrong-mode symptoms

| Symptom | Likely wrong mode | Correction |
| --- | --- | --- |
| Looks like a presentation | product app treated as landing | switch to product app/workbench; add task surface, state, controls |
| Pretty but inert | app/workflow treated as static visual | apply `interactive-prototype-contract.md` |
| Too many floating props | animation-led treated as reference copy | use premium animation direction; define new main object |
| Dashboard feels empty | operational surface treated as campaign | raise density, rows, filters, selected detail, state evidence |
| Trust page feels playful | risk flow treated as brand page | lower expression, make consequence/recovery visible |
| Small fix exploded into redesign | targeted repair treated as director pass | constrain to failing dimension and re-check same evidence |

## Evidence by mode

- Targeted repair: before/after screenshot or text/DOM evidence for the failing dimension.
- Product app/workbench: primary interaction, state evidence, keyboard/focus path, desktop/mobile containment.
- Product proof landing: first viewport, proof section, CTA/copy evidence, mobile proof sequence.
- Cinematic/animation-led: still frame, reduced-motion fallback, nonblank media/canvas, performance risk.
- Trust/risk flow: validation/recovery, focus order, preserved input, terms/consequence visibility.
- Docs/developer platform: heading/nav/search/code overflow/copy evidence.
- Visual system/sample: light/dark, states, density, focus, token role coverage.
- Gallery/showcase proof: rendered quality gate, quality calibration, acceptance gate, and screenshot-worthiness.

## Hard fails

- Mode chosen from visual trend instead of product job.
- Product app mode without a primary task.
- Cinematic mode without a main object and reduced-motion fallback.
- Gallery proof without desktop/mobile evidence.
- Trust/risk flow with hidden consequences or playful motion near the risky action.
- Library selection before mode and product proof are named.
