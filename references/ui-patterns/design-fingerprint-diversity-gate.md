# Design fingerprint diversity gate

Use this after `style-diversity-matrix.md`, `brand-identity-motif-system.md`, `variant-selection-loop.md`, or `rendered-quality-gate.md` when the user wants original, non-generic, repeated-generation, showcase, gallery, public, or "not the same Stark design again" output.

This gate checks the rendered artifact for its design fingerprint: the visible combination of structure, motif, type, material, palette, interaction, asset grammar, and proof surface. It exists because a design can follow many good rules and still look like the same template with new words.

## Source anchors

- Atlassian Design foundations treat color, spacing, grid, typography, iconography, illustrations, logos, elevation, border, and radius as coordinated foundations, not interchangeable decoration: https://atlassian.design/foundations
- Atlassian iconography guidance shows how shape details such as corner and terminal treatment can express a product design language: https://atlassian.design/foundations/iconography
- Material Design color guidance separates brand/style color from UI roles for surfaces, text, icons, and state: https://m2.material.io/guidelines/style/color.html
- IBM technical diagram guidance uses labels, line styles, icons, color, and accessibility requirements together so visual systems remain recognizable and usable: https://www.ibm.com/design/language/infographics/technical-diagrams/design
- Nielsen Norman Group's aesthetic-usability effect describes why perceived visual quality can affect perceived usability, which makes rendered design quality a usability concern, not pure garnish: https://www.nngroup.com/articles/aesthetic-usability-effect/

## Output contract

```md
Design fingerprint diversity gate
- Surface:
- Product/category:
- Evidence inspected:
- Previous/forbidden fingerprint:
- Current fingerprint:
- Structure difference:
- Motif difference:
- Typography difference:
- Palette/material difference:
- Asset/proof difference:
- Interaction/motion difference:
- Product-specificity proof:
- Same-looking residue:
- Required repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Fingerprint Dimensions

Inspect the actual screenshot, DOM, component tree, or coded structure. Do not accept intent alone.

### Structure

Check first:

- first viewport pattern
- section rhythm
- grid and alignment grammar
- navigation/chrome shape
- main object placement
- proof surface
- mobile replacement

Hard fail: changing colors/fonts while preserving the same centered hero, same bento, same sidebar/cards/table, same poster-and-floating-props, or same card grid.

### Motif

Check:

- repeated shape, mark, line, frame, stamp, trace, lens, layer, or instrument
- where it repeats
- where it is restrained
- whether it ties to the product object

Hard fail: motif appears only as decoration, logo, gradient, background mark, or random floating object.

### Typography

Check:

- display/body/mono roles
- text measure and density
- numeric/data behavior
- hierarchy texture
- fallback/default residue

Hard fail: every generated design uses the same type posture, same scale, same all-caps labels, same giant headline texture, or the same body/UI face without product reason.

### Palette And Material

Check:

- palette ratio
- surface vocabulary
- border/radius/shadow logic
- one-note hue risk
- relationship to product world
- semantic state separation

Hard fail: same dark slate/indigo, same beige editorial, same glass cards, same soft gradient glow, or same radius/shadow values appear without being required by the product.

### Asset And Proof Surface

Check:

- what object proves the product
- whether assets share a style grammar
- whether product proof is code-native, screenshot, chart, generated key art, media, diagram, or artifact
- whether downstream sections preserve the same visual world

Hard fail: hero art is distinctive but the product UI below it returns to generic cards, fake charts, placeholder screenshots, or unrelated assets.

### Interaction And Motion

Check:

- primary interaction pattern
- choreography/microinteraction grammar
- transition continuity
- reduced-motion equivalent
- whether motion echoes the motif

Hard fail: same reveal timing, same hover lift, same scroll sequence, same floating prop drift, or same generic stagger is reused without product purpose.

## Comparison Modes

Use whichever evidence exists:

| Mode | Compare Against | Use When |
|---|---|---|
| Active critique | user's wording and rejected screenshot | user said bland, copied, messy, same-looking, too generic |
| Previous generation | last 1-3 Stark outputs in the thread/repo | repeated design generation or dogfood batches |
| Surface defaults | known generated skeletons | first attempt for common SaaS/dashboard/app prompts |
| Reference boundary | shipped reference board | "like X but original" work |
| Gallery standard | README/showcase candidates | selecting public examples |

If no prior screenshot exists, compare against Stark's forbidden defaults for that surface: centered hero/three cards, sidebar/cards/table, static bento, fake dashboard, glassy AI hero, pasted animation props, generic docs sidebar, or default shadcn/Tailwind starter.

## Repair Moves

Choose one high-impact repair, not a full redesign unless blocked:

- Change structure: replace hero/cards with artifact inspector, timeline, ledger, command deck, proof workbench, trust matrix, product object stage, or mobile task stack.
- Change motif: pick one product-tied motif and remove unrelated decoration.
- Change type posture: choose a new display/body/mono role that fits the lane and density.
- Change proof: replace claims/cards with real artifact, state, record, source, timeline, chart question, or workflow.
- Change material: swap default glass/gradient/cards for product-world surfaces, rules, stamps, instruments, frames, cells, rails, or media.
- Change motion grammar: replace generic reveal/stagger with one product-tied transition, state change, or authored beat.

## Gate Results

- **Blocked**: fingerprint is mostly the same as a rejected/forbidden prior design, or the product could be rebranded by changing logo/text/accent only.
- **Repair required**: one or two dimensions are same-looking but a focused repair can recover originality.
- **Acceptable with risk**: structure is familiar but product proof, motif, type, and interaction are meaningfully specific.
- **Pass**: the artifact has a recognizable product-specific fingerprint across structure, motif, type, material, proof, and interaction.

## Hard Fails

- No rendered/code evidence inspected.
- Same first viewport structure as the previous rejected design.
- Same component furniture with only different copy, colors, or images.
- Product category cannot be identified after hiding logo and H1.
- Motif is not visible in meaningful UI/proof moments.
- Type, palette, radius, shadow, and card anatomy match the repo's recent generated examples without justification.
- Mobile drops the distinct fingerprint and becomes a generic stack.
