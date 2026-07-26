# Reference board workflow

Use this before designing when the prompt asks for research, inspiration, shipped-product quality, Awwwards-level craft, platform fit, or an interface category the agent may not know well.

Reference boards help Stark learn from real decisions without copying visuals.

After creating a board, use `research-synthesis-contract.md` before implementation so reference lessons become binding decisions for layout, component anatomy, libraries, typography, choreography, usability, responsive behavior, and QA evidence.

After creating a board for a design that already has evidence or a rendered draft, use `benchmark-repair-loop.md` to convert reference lessons into a specific quality gap, originality boundary, repair, and re-check.

## When to create a board

- The user says research, references, study, benchmark, Mobbin, Figma, shipped apps, or "like X but original".
- The product category has mature patterns: checkout, docs, permissions, dashboards, editors, agent runs, onboarding, pricing, platform sites.
- The design goal is high-craft or public-facing.
- The agent is about to use a reference that could be copied too literally.

## Reference board

```md
Reference board
- Product category:
- User mode:
- Risk level:
- References:
  1. ...
  2. ...
  3. ...
- Structural lessons:
- Visual/material lessons:
- Motion/choreography lessons:
- State/recovery lessons:
- Responsive lessons:
- Asset/media lessons:
- What not to copy:
- Decisions Stark will use:
```

## Reference mix

Use 3-5 references when practical:

- 1 direct competitor or same category.
- 1 adjacent product with the same user mode.
- 1 platform/design-system reference.
- 1 high-craft visual or motion reference when visual quality matters.
- 1 failure-mode reference if auditing an existing UI.

Do not over-research simple screens. For small tasks, one strong reference plus platform guidance can be enough.

## Extraction rules

For each reference, extract decisions:

- primary object
- user action
- IA/navigation
- hierarchy
- density
- states and recovery
- motion purpose
- asset/media role
- typography role
- responsive behavior

Then state what will be changed:

- subject
- layout proportions
- visual identity
- copy rhythm
- color/material role
- hero object or proof surface
- interaction/motion mechanic

## Quality gates

- At least three structural lessons influence the layout or component anatomy.
- The board includes state/recovery lessons, not only pretty first screens.
- The board names what not to copy.
- The final design brief names which reference decisions were used and which were rejected.
- If the result still looks like one reference after swapping logo/copy, restart the concept.

## Short version

For fast work:

```md
Reference board
- Borrow:
- Change:
- Reject:
- Apply to layout:
- Apply to states:
- Apply to motion:
```
