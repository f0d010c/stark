# Pattern selection

Use this when a design needs to be both original and usable. This reference chooses the structural pattern before visual styling or motion.

The point is to avoid choosing a layout because it looks fashionable. Choose a pattern because it helps the user understand, compare, operate, edit, buy, or recover.

If the prompt has a clear product category or user job, read `product-intent-matrix.md` before choosing the final pattern. It maps product intent to structural pattern, libraries, motion level, typography posture, state requirements, responsive replacement, and QA evidence.

After choosing the pattern family, read `composition-system.md` when designing a full page or app shell. It turns the pattern into first viewport structure, grid grammar, section rhythm, proof placement, and responsive composition.

## Pattern brief

Before code, state:

```md
Pattern selection
- User mode: browsing / evaluating / comparing / operating / editing / buying / recovering
- Primary object: artifact, record, media, run, account, permission, canvas, document, product, event, dataset
- Decision/action: what the user must know or do next
- Pattern family: ...
- Why this pattern fits: ...
- What pattern was rejected: ...
- Mobile replacement: ...
- State coverage: empty/loading/error/permission/success/long-running, where relevant
```

## User mode matrix

| User Mode | Best Patterns | Avoid |
|---|---|---|
| Browsing | cinematic object hero, editorial rail, magazine spread, type-as-hero, guided story | dense tables, fake app chrome, repeated feature cards |
| Evaluating | annotated product proof, before/after, artifact gallery, feature-by-proof sections, trust matrix | pure claims, abstract illustrations, hidden proof below the fold |
| Comparing | comparison table, matrix, split-screen, before/after slider, side-by-side inspector | carousels, animated counters, cards with unequal labels |
| Operating | workbench, cockpit, split pane, command center, queue, timeline, status board | marketing spacing, giant cards, slow scroll effects |
| Editing | canvas + inspector, timeline editor, layer stack, toolbar + property panel, preview/export stage | shifting controls, decorative panels, hover-only commands |
| Buying | pricing table, plan comparison, checkout stepper, risk summary, policy details, success confirmation | animated distractions near payment, hidden cancellation/trial terms |
| Recovering | error detail + action, permission gate, stale state, retry path, audit trail, support handoff | empty "something went wrong" pages, vague toasts, celebratory animation |

## High-craft pattern families

### Cinematic object hero

Use for launches, media products, AI/video tools, consumer brands, portfolios, and campaign pages.

Required:

- One dominant object or scene.
- Copy that names the offer quickly.
- One primary action visible without waiting for animation.
- A proof hint or next-section preview.
- Reduced-motion static frame.

Avoid:

- Floating unrelated props.
- Copying a reference site's product object or prop set.
- Hero art that cannot explain the product after the novelty fades.

### Product proof workbench

Use for developer tools, AI tools, security, analytics, automation, and SaaS.

Required:

- Believable product surface with real labels and states.
- Annotation or inspector explaining why it matters.
- Visible artifact, run, record, issue, account, or object.
- At least one non-happy state if the product has risk.

Avoid:

- Decorative fake dashboards.
- Screenshots too blurred to inspect.
- Proof that only shows happy metrics.

### Command center / cockpit

Use for repeated operational work.

Required:

- Priority, status, owner/source, timestamp, next action.
- Dense but calm layout.
- Saved views, filters, or command palette when useful.
- Bounded scroll regions and responsive replacement.

Avoid:

- Marketing-page whitespace.
- Animated card lifts on every row.
- Hidden error and blocked states.

### Canvas + inspector

Use for editors, builders, design tools, media tools, map tools, and document tools.

Required:

- Canvas/work area visually dominates.
- Inspector, layers, toolbar, timeline, or property panel stays stable.
- Selection, hover, disabled, drag, undo/redo, and save/export states.
- Keyboard shortcuts or command surface for expert use.

Avoid:

- Moving controls away from the pointer.
- Over-styled chrome that competes with the canvas.
- Empty canvas with no useful starter object.

### Timeline / run replay

Use for AI agents, CI/CD, imports, automations, workflows, media generation, and long-running tasks.

Required:

- Stages, timestamps, current step, queued/completed/failed status.
- Artifacts or logs visible as they arrive.
- Stop, retry, resume, inspect, and export when relevant.
- Stale/blocked state.

Avoid:

- Spinner-only loading.
- Celebrating before artifacts exist.
- Hiding tool calls, errors, or retry controls.

### Trust / permission matrix

Use for auth, admin, enterprise, plugin installs, marketplace approvals, billing, and compliance.

Required:

- Actor, scope, permission, impact, owner, approval, and audit trail.
- Clear warning, denied, inherited, pending, and revoked states.
- Recovery action or escalation path.

Avoid:

- Friendly cards that obscure risk.
- Color-only status.
- Hidden destructive actions.

### Interactive comparison

Use for migrations, optimization, pricing, plans, before/after, visual generation, and quality audits.

Required:

- Stable comparison axes.
- Same labels in the same positions across states.
- Clear selected/current state.
- Mobile fallback that stacks without losing comparison context.

Avoid:

- Sliders that hide labels or totals.
- Carousels for decision-critical comparison.
- Animated metrics without source or meaning.

### Editorial system

Use for essays, portfolios, brand stories, founder narratives, changelogs, case studies, and concept pages.

Required:

- Strong type hierarchy.
- Varied rhythm: dense, sparse, full-bleed, narrow, and proof sections.
- Section markers, captions, references, or metadata when useful.
- Text width and line height tuned for reading.

Avoid:

- Centered hero plus repeated centered sections.
- Decorative type that hurts reading.
- Identical spacing bands.

## Pattern mixing

Most strong pages combine two or three pattern families:

- AI video launch: cinematic object hero + product proof workbench + artifact gallery.
- Developer tool: product proof workbench + command center + docs/console split.
- Security product: trust matrix + timeline replay + annotated proof.
- Creative editor: canvas + inspector + timeline + export proof.
- Marketplace/plugin: trust matrix + comparison + install recovery state.
- Portfolio/campaign: cinematic object hero + editorial system + case-study proof.

Do not mix more than three primary patterns on one page unless it is a full product app.

## Mobile replacements

Every chosen pattern needs a mobile plan:

- Workbench -> stacked proof cards with sticky action.
- Split pane -> list then detail sheet.
- Matrix/table -> horizontal bounded scroll or grouped rows.
- Canvas + inspector -> canvas first, inspector as sheet/drawer.
- Timeline -> vertical stages with sticky current step.
- Cinematic object -> cropped hero object plus static proof frame.
- Comparison -> stacked comparisons with repeated labels.

## Quality test

A pattern choice passes when:

- The user can name what the product does from the first viewport.
- The primary object is visible and specific.
- The layout would not still work after replacing labels with a random SaaS category.
- Motion, type, and assets support the pattern instead of competing with it.
- The mobile version preserves the same job instead of merely shrinking desktop.
