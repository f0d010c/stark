# Variant selection loop

Use this before implementation when the user asks for original, high-craft, next-level, public, portfolio, animation-led, or repeated Stark generation. The goal is to make Stark explore meaningfully different design directions, judge them against the product job, and choose one strong path before code.

This is not a request to make ten random moodboards. Each variant must change the product object, structure, visual system, typography posture, motion grammar, proof strategy, or usability model enough that the choice matters.

## Output contract

```md
Variant selection loop
- Product job:
- Quality target:
- Reference lessons:
- Non-negotiables:
- Variant A:
- Variant B:
- Variant C:
- Scorecard:
- Rejected variants and why:
- Selected variant:
- Borrowed details:
- Implementation risks:
- QA probes:
- Anti-sameness checks:
```

## When to use it

Use the loop when:

- The prompt asks for "go all out", "next level", "original", "not generic", "better design", "like X but original", "Luma-level", "portfolio", or "generate a couple designs".
- The product category has multiple valid patterns, such as a dashboard that could be a cockpit, command deck, queue, timeline, workbench, or map-table.
- The first idea is likely to default to centered hero/cards, sidebar/cards/table, static bento, pasted props, default shadcn, or a single trendy style lane.
- The user has rejected a design as bland, cheap, messy, presentation-like, copied, or same-looking.
- A reference is inspiring the work and the design needs originality boundaries.

Skip it for small edits, bug fixes, one-screen native settings, or when the user explicitly chose a direction and only wants execution.

## Variant requirements

Create three variants by default. Five is allowed for broad brand/product exploration. Each variant must include:

- Product object: what concrete object/action anchors the surface.
- Structural pattern: the layout model before color or decoration.
- Proof strategy: how the UI proves the product instead of only claiming value.
- Typography posture: display/body/mono roles and why they fit the surface.
- Visual world: material, token, asset, and motif direction.
- Motion grammar: one primary motion idea, or an explicit no-motion reason.
- Usability posture: task density, state coverage, recovery, and mobile behavior.
- Library posture: likely native/product/motion/data/asset owners and rejected excess.
- Risk: what could make this variant fail or feel generic.

If two variants share the same structure and only swap colors/fonts, delete one and generate a more different option.

## Scorecard

Score each variant 1-5 with evidence, not vibes:

| Dimension | What good looks like |
|---|---|
| Product specificity | The page/app could not be relabeled for another product without breaking |
| Structural originality | The layout is recognizable before color and is not a default skeleton |
| Proof strength | The variant shows product behavior, artifact, data, workflow, or trust |
| Typography fit | Type supports tone, density, and readability without generic fallback |
| Motion fit | Motion clarifies product behavior, continuity, or proof; it is not an effect sampler |
| Library fit | Each library has one owner and a removal rule |
| Usability fit | The main task, states, recovery, keyboard/touch, and mobile path are plausible |
| Responsive strategy | Desktop, tablet, and mobile preserve the same product job intentionally |
| Originality boundary | Reference lessons are transformed, not copied |
| Implementation risk | Risk is understood, scoped, and QA-able |

Pick the variant with the best product/job fit, not the loudest visuals. If the highest score is still weak, create another round instead of implementing a mediocre direction.

## Borrowing rule

After selecting one variant, you may borrow at most two details from rejected variants. Borrow details only when they strengthen the selected concept:

- A better CTA rhythm
- A stronger proof section
- A clearer mobile replacement
- A more appropriate type pairing
- A useful state or recovery model
- A cleaner motion fallback

Do not merge multiple variants into a collage. The selected variant keeps one dominant structure, visual world, and motion grammar.

## Research and critique loop

Use this sequence for serious work:

1. Reference board: extract 3-5 structural, motion, state, responsive, and proof lessons.
2. Feedback memory: carry forward active bans, preferences, and stress tests from prior user critiques.
3. Variant generation: create three divergent directions with product object, structure, proof, type, motion, usability, and library posture.
4. Critique: score against the scorecard and the product job.
5. Selection: choose one direction, reject the rest, and optionally borrow two details.
6. Implementation: code the selected direction only.
7. Implementation review: compare rendered/code output against the selected variant.
8. Acceptance: run QA evidence, quality metrics, and the acceptance gate.

## Hard fails

- Only one direction is produced for an ambiguous high-craft prompt.
- Variants differ only by color, font, or decoration.
- The selected variant is chosen because it is easiest to code when another variant better serves the product job.
- Multiple variants are merged into one incoherent page.
- No rejected-variant rationale exists.
- No proof strategy exists for a product/landing page.
- No usability posture exists for app, dashboard, checkout, editor, agent-run, or form-heavy UI.
- No originality boundary exists when a reference is involved.
- The final implementation cannot be traced back to the selected variant.
- The selected variant repeats an active feedback-memory ban without naming why the old critique no longer applies.

## Research anchors

- Design sprint practice separates mapping/sketching/deciding/prototyping/testing so teams explore options before committing to one prototype.
- Figma design critique practice distinguishes divergent critique from narrowing critique, which maps well to early variant exploration and later selection.
- Component variants in design systems show why variation should be structured by meaningful properties, not arbitrary duplicated screens.
