# Feedback memory loop

Use this when the user critiques generated UI, rejects a direction, compares attempts, or says the work feels bland, cheap, messy, copied, generic, presentation-like, same-looking, low quality, hard to use, or not like a real product. The goal is to convert subjective feedback into reusable design constraints for the next attempt.

This loop is not a permanent secret store. It is a project-local design memory artifact that should be repeated in the next brief, eval, or report so the agent stops relearning the same lesson.

## Output contract

```md
Feedback memory loop
- Feedback source:
- User wording:
- Surface:
- Symptom:
- Likely cause:
- Severity:
- Affected dimensions:
- Evidence:
- Repair that worked:
- Repair that failed:
- New ban:
- New preference:
- Future stress test:
- Applies to:
- Expires when:
```

## When to use it

Run this loop when:

- The user says a result is bland, cheap, messy, low-quality, generic, copied, presentation-like, or pasted together.
- The user prefers one generated option over another and gives a reason.
- A visual QA pass finds the same failure across multiple attempts.
- A benchmark repair identifies a recurring quality gap.
- An implementation review finds drift that could recur in future code.
- A style lane, font, library default, motion pattern, or copy voice should be avoided for this project.

Skip it for purely mechanical bugs, one-off copy typos, or a preference that does not affect future design generation.

## Feedback classification

Translate the user's words into one or more dimensions:

| User wording | Dimension | Likely cause |
|---|---|---|
| "bland" / "generic" | originality, product specificity, visual system | no product object, default skeleton, weak style lane |
| "cheap" | typography, copy, spacing, material, assets | default type, vague copy, bad hierarchy, low-fidelity media |
| "messy" | composition, motif, motion, density | too many ideas, no focal object, effects compete |
| "presentation-like" | page proof, interaction, product proof | sections explain instead of showing product behavior |
| "copied" / "too 1:1" | originality boundary, reference transformation | borrowed subject, layout, copy rhythm, prop set, or color formula |
| "same as before" | style diversity, variant selection | style lane, composition, tokens, or type did not change enough |
| "not usable" | task ergonomics, states, accessibility | missing scenario path, recovery, focus, touch, or state coverage |
| "animations feel random" | choreography, library ownership | no motion thesis, no state machine, too many owners |
| "font looks bad" | typography strategy | wrong type job, default fallback, poor measure/weight |
| "low quality" | evidence, asset production, polish | missing rendered QA, weak assets, no implementation review |

## Severity

Use the smallest severity that fits:

- `S0 blocker`: prevents use, trust, accessibility, or the requested quality level.
- `S1 major`: repeats across attempts or defines why the design feels bad.
- `S2 moderate`: weakens quality but has a clear local repair.
- `S3 polish`: useful preference, but not a major quality driver.

Do not bury user taste in `S3` when it explains why they rejected a direction. If the feedback changes the direction, it is at least `S1`.

## Memory rules

- Store the user's wording, not just the normalized diagnosis.
- Name the concrete future ban. Example: "Do not use floating decorative props around a phone-like hero for this project."
- Name the concrete future preference. Example: "Prefer one product object with a visible transformation and code-native proof labels."
- Name a stress test. Example: "Generate three variants; reject any that still use centered hero plus cards."
- Scope the memory. Example: this product, this repo, landing pages only, dashboards only, animation-led work only.
- Name an expiration condition. Example: expires after the user approves a direction, after a successful high-craft gate, or when the project changes category.

## Repair memory examples

```md
Feedback memory loop
- Feedback source: user critique on animation preview
- User wording: "looks messy and like you pasted random elements on it"
- Surface: animation-led product landing page
- Symptom: pasted props / weak focal object
- Likely cause: multiple decorative assets competing with no product-proof transformation
- Severity: S1 major
- Affected dimensions: composition, asset realism, motion choreography, originality
- Evidence: screenshot first viewport, no single dominant object
- Repair that worked: one main object, repeated motif, deleted unrelated props
- Repair that failed: adding more glow and floating assets
- New ban: no decorative prop clusters around a copied hero scene
- New preference: product-proof object with one transformation and code-native labels
- Future stress test: first viewport should be describable in one sentence without listing props
- Applies to: animation-led landing pages in this project
- Expires when: user approves a portfolio-level animation direction
```

```md
Feedback memory loop
- Feedback source: user critique on typography
- User wording: "the font is too generic and looks bad"
- Surface: public web/product page
- Symptom: generic type personality
- Likely cause: default UI font used for both brand and body roles
- Severity: S1 major
- Affected dimensions: typography, style lane, copy tone
- Evidence: screenshot + font stack inspection
- Repair that worked: style-lane-specific display/body/mono pairing with numeric behavior
- Repair that failed: swapping to another common SaaS sans without changing scale/measure
- New ban: no Inter/Space Grotesk primary face for public high-craft Stark examples
- New preference: choose type by product surface and density before tokens
- Future stress test: desktop/mobile screenshots must show distinct display and readable UI roles
- Applies to: public examples and generated design previews
- Expires when: a brand system explicitly requires the banned face
```

## How to apply memory

Before the next generation:

1. Read active feedback memories for the same product/surface.
2. Add the relevant bans and preferences to the design preflight.
3. Include the future stress test in QA evidence.
4. Use the memory to reject weak variants before implementation.
5. After repair, update the memory with what worked and what failed.

## Pair with

- `visual-repair-playbook.md` for the immediate repair.
- `variant-selection-loop.md` to reject directions that repeat remembered failures.
- `style-diversity-matrix.md` to avoid same-looking generations.
- `benchmark-repair-loop.md` when the memory came from a reference comparison.
- `implementation-review-loop.md` when the memory came from design-to-code drift.
- `design-acceptance-gate.md` to decide whether the memory was resolved enough to stop.

## Hard fails

- User critique is acknowledged but not converted into a future ban, preference, or stress test.
- The next variant repeats a previously rejected symptom without explanation.
- The memory erases the user's wording and keeps only a generic label like "make better."
- Feedback from one surface is applied globally when it should be scoped.
- A repair is claimed to work without re-checking the same evidence that exposed the issue.

## Research anchors

- Figma critique practice emphasizes shared exploration, specific feedback, and iteration instead of unstructured taste arguments.
- Figma comments and branch reviews show why feedback should stay attached to the design context and be resolved or carried forward.
- NN/g heuristic evaluation and severity-style triage support classifying issues by impact before choosing the next repair.
