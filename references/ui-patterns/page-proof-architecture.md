# Page proof architecture

Use this after `composition-system.md` and before implementation for full pages, launch pages, product pages, docs homes, portfolio/case-study pages, and any design where the first viewport is good but the rest risks becoming generic sections.

Composition defines the page shape. Page proof architecture defines what each section proves, why it deserves to exist, how it changes rhythm, and what evidence or interaction keeps it from feeling like a presentation.

## Required page proof brief

```md
Page proof architecture
- Page job:
- User mode:
- Main object:
- First proof:
- Section sequence:
- Proof ladder:
- Interaction/proof moments:
- Repeated motif:
- Copy constraints:
- Mobile sequence:
- Deleted sections:
- QA checks:
```

## Section jobs

Every section must do one of these jobs:

| Job | Purpose | Needs | Reject |
|---|---|---|---|
| Establish | show what this is and who it is for | main object, short claim, action, proof hint | vague hero with no artifact |
| Prove | make a claim inspectable | screenshot, output, data, workflow, comparison, demo, artifact | decorative image beside marketing copy |
| Explain | reduce complexity | diagram, process, labels, before/after, example | wall of text or generic feature cards |
| Compare | help choose or trust | axes, criteria, state, price, risk, current selection | carousel for critical decisions |
| Operate | let the user understand a real workflow | controls, states, logs, selection, recovery | static mock with fake controls |
| Reassure | answer risk, trust, security, cost, recovery | source, scope, owner, audit, guarantees | social proof with no context |
| Deepen | show craft, variants, edge cases, details | specimen, gallery, inspector, cases | unrelated visual mood |
| Convert | ask for the next step | clear CTA, prerequisite info, risk nearby | repeated CTA band with no new reason |

If a section has no job, delete it. If two adjacent sections do the same job with the same rhythm, merge or change one.

## Proof ladder

Build pages from stronger proof, not more claims:

1. Product object visible.
2. Product object labeled.
3. Product object in a real state.
4. Product object with user control or inspection.
5. Product object with non-happy state or recovery.
6. Product object compared against alternative/current state.
7. Product object backed by source, customer, benchmark, or measurable result.

Most generated pages stop at level 1 or 2. High-craft product pages should reach level 4+ by the second or third section. Trust, checkout, dashboards, developer tools, agent UIs, and editors should include level 5 where relevant.

## Sequence patterns

### Product proof page

1. Establish: object stage or proof workbench.
2. Prove: real workflow/output with labels.
3. Explain: process or architecture diagram.
4. Compare: before/after, alternatives, migration, plan, or risk.
5. Reassure: security, recovery, customers, operational states.
6. Convert: CTA with final proof or command.

### Developer tool

1. Establish: command/input plus output.
2. Prove: run log, diff, artifact, check, or deployment state.
3. Explain: integration path or API/docs split.
4. Operate: failure/retry/debug state.
5. Reassure: permissions, local/remote boundary, audit, privacy.
6. Convert: install command or repo action.

### AI generation product

1. Establish: prompt-to-output object.
2. Prove: generated artifact with controls or timeline.
3. Explain: model controls, iterations, quality markers.
4. Compare: raw input vs generated result, variants, failed/partial state.
5. Deepen: gallery of outputs with metadata.
6. Convert: create/export/start action.

### Operational app/dashboard

1. Establish: current operational state.
2. Operate: queue/table/detail with selected item.
3. Explain: filters, saved views, owner/status/time logic.
4. Prove: stale/error/permission/bulk-action state.
5. Reassure: audit/export/recovery.
6. Convert: start run, assign, resolve, or invite.

### Campaign or portfolio

1. Establish: key art and concise offer.
2. Deepen: world/context with short scannable copy.
3. Prove: craft, process, detail, case, or artifact.
4. Compare/show range: gallery, variations, moments, outcomes.
5. Reassure: people, place, credibility, availability.
6. Convert: memorable close.

### Docs/platform

1. Establish: what developers can do.
2. Operate: search/command/code example.
3. Explain: concepts or quickstart.
4. Prove: live example, API response, error/copy state.
5. Reassure: versioning, auth, support, status, changelog.
6. Convert: copy command, create key, open docs.

## Rhythm rules

Long pages need rhythm shifts:

- One full-bleed or object-led section.
- One dense proof/workbench section.
- One quiet explanatory section.
- One comparison/matrix/timeline/inspector section.
- One trust or recovery section.
- One final close.

Do not repeat:

- centered headline + paragraph + three cards
- left copy/right image more than once
- identical card grids
- giant screenshots with no labels
- vague benefits without artifact proof

## Copy constraints

Section headings should carry information scent. If users read only the first two words, they should still understand the section.

Use headings like:

- "Replay failed runs"
- "Compare policy drift"
- "Export with audit"
- "Generate three cuts"
- "Recover denied installs"
- "Inspect source rows"

Avoid:

- "Powerful features"
- "Built for teams"
- "Everything you need"
- "How it works"
- "Designed for the future"

## Mobile sequence

Mobile pages should preserve the proof order, not the desktop layout.

- Put the primary proof object before long explanation.
- Turn side-by-side comparison into repeated axes.
- Turn table/detail into summary, priority rows, then detail sheet.
- Turn pinned story into stacked proof frames.
- Turn gallery into selected item plus rail.
- Keep CTA near the proof that justifies it.
- Avoid moving risk, price, or recovery below unrelated sections.

## Deleted-section test

Before implementation, list sections deleted or merged:

- duplicate feature grids
- decorative testimonials without product context
- vague "benefits" sections
- repeated CTA bands
- stock image sections
- section whose only job is visual variety

Deletion is a design move. It protects attention for proof.

## QA checks

- Every section has a job from the section-job table.
- Proof reaches level 4+ for serious product pages.
- Non-happy state or recovery appears where the product has risk.
- Section rhythm changes at least twice.
- No repeated generic card grid unless comparison truly requires cards.
- Headings carry information in the first words.
- Mobile order preserves proof, risk, and CTA logic.
- Screenshot critique can name what the second and third sections prove.

## Source anchors

- NN/g scanning research recommends formatting, headings, grouping, bullets, and early important points so users do not fall into low-information scanning: https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- NN/g information scent explains that users decide where to go next based on visible cues that signal value: https://www.nngroup.com/articles/information-scent/
- Baymard product-page research emphasizes evidence-rich product-detail content and layout decisions that help users interpret and compare products: https://baymard.com/research/product-page
- web.dev responsive design guidance emphasizes layout that adapts to screen sizes and device capabilities: https://web.dev/articles/responsive-web-design-basics
