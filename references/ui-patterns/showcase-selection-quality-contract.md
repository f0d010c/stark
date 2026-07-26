# Showcase selection quality contract

Use this after `dogfood-generation-loop.md`, `rendered-quality-gate.md`, `design-quality-metrics.md`, and `design-acceptance-gate.md` when Stark generates multiple designs, README/gallery screenshots, release examples, public demos, or proof that the design system is improving.

The goal is to make Stark behave like a design lead curating a portfolio, not a generator that publishes every plausible output. Weak examples teach future users the wrong standard.

## Required showcase brief

```md
Showcase selection
- Batch purpose: README gallery / release proof / dogfood set / public demo / benchmark comparison
- Audience: prospective user / contributor / marketplace reviewer / internal maintainer
- Surfaces generated:
- Quality target: good / high-craft / portfolio
- Comparison baseline: previous gallery, benchmark reference, rejected draft, or category standard
- Selection criteria:
- Rejection criteria:
- Required evidence:
- Selected examples:
- Rejected examples:
- Repair candidates:
- Final gallery decision:
```

## Selection criteria

Every selected example must prove a different strength. Do not choose five screens that all show the same taste.

| Strength | What it proves | Evidence |
|---|---|---|
| Product proof | The product object and workflow are clear without explanation | first viewport screenshot, DOM text, state fixture |
| App usability | A repeated task, command path, state, recovery, or keyboard path works | interaction smoke, state evidence, scenario note |
| Visual originality | Structure, motif, material, or type differs from Stark defaults | style lane, rejected lane, screenshot comparison |
| Motion quality | Animation has a thesis, resting frame, reduced-motion fallback, and product role | motion frame QA, reduced-motion check |
| Typography quality | Type roles, scale, line breaks, numeric behavior, and copy voice support the surface | desktop/mobile screenshot, DOM text review |
| Library maturity | Product libraries or motion libraries own behavior without starter-kit fingerprints | implementation review, de-defaulting notes |
| Responsive dignity | Desktop and mobile preserve the idea with deliberate transformations | desktop/mobile screenshots or probes |
| Native/platform fit | Desktop/mobile/native UI respects platform controls and evidence | platform QA, native desktop contract, screenshots |

## Rejection criteria

Reject an example from public gallery or README if any are true:

- It is only passable when the target is public, launch, README, portfolio, or high-craft.
- The product object is unclear or hidden behind mood, gradients, abstract cards, or decorative media.
- It looks like a previous Stark example with different colors.
- It has generic copy, placeholder data, or hype text carrying the concept.
- It has no visible state beyond the happy path when the surface is a product app.
- It lacks mobile evidence for public web UI.
- It uses a reference so closely that the originality boundary feels weak.
- It exposes default library styling, default component anatomy, or starter-kit spacing.
- It is visually good but not useful, or useful but not screenshot-worthy for the stated audience.
- It needs explanation text outside the screenshot to feel impressive.

## Batch composition rules

A strong public batch should include varied proof:

- one product proof landing or campaign example
- one serious product app/workbench example
- one operations/data/agent example
- one animation or media-rich example, only if motion evidence is available
- one trust/checkout/settings/native example when platform/usability maturity matters

Avoid batches where every item is:

- dark SaaS
- cinematic hero
- sidebar and cards
- beige editorial
- glass panels
- dashboard metrics
- animation-first but not usable

If a batch has fewer than three genuinely different style lanes or product patterns, regenerate or repair before publishing.

## Scoring rule

For each candidate, record:

```md
Candidate score
- Surface:
- Requested level:
- Gate result:
- Strongest proof:
- Weakest dimension:
- Evidence inspected:
- Selected / rejected / repair:
- Why:
```

Do not average away a hard fail. A candidate with one public-facing hard fail is rejected or repaired even if the rest is strong.

## Repair-or-reject decision

Repair when:

- the candidate has a strong concept but one visible execution flaw.
- the flaw maps to one clear repair in `visual-repair-playbook.md`.
- the required evidence can be re-checked quickly.

Reject when:

- the concept is generic.
- the structure copies a reference or previous Stark output.
- the main object is weak.
- multiple quality dimensions are below target.
- the repair would require changing product pattern, style lane, typography, motion, and copy at once.

## Gallery proof checklist

Before publishing or mentioning a generated example as proof:

1. Does it meet the requested quality target in `design-acceptance-gate.md`?
2. Is the product object obvious in the first screenshot?
3. Does it show at least one concrete state, proof, or workflow, not only branding?
4. Is the type/copy product-specific?
5. Does it differ meaningfully from the previous selected examples?
6. Does mobile or narrow evidence exist where relevant?
7. Is the reference originality boundary safe?
8. Is the selected screenshot cropped/framed around the proof, not whitespace?
9. Is there a clear reason this example belongs in public?
10. Would removing it make the gallery stronger?

If the answer to 10 is yes, remove it.

## Final report

```md
Showcase selection report
- Selected:
- Rejected:
- Repaired:
- Evidence:
- Gallery gaps still missing:
- Next batch should target:
```

## Source anchors

- Nielsen Norman Group usability guidance emphasizes evidence from user goals, status, recovery, and recognition; a screenshot alone does not prove usability.
- WCAG 2.2 provides accessibility requirements that public examples should not visibly violate.
- Design systems such as Material, Apple HIG, Fluent, and Atlassian show that public component examples should demonstrate state, accessibility, responsive behavior, and correct usage, not only attractive resting frames.
