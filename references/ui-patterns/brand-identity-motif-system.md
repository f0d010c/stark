# Brand identity and motif system

Use this after `style-diversity-matrix.md`, `copy-system.md`, and `visual-token-recipes.md` when a public page, app shell, product proof, campaign, plugin page, portfolio piece, or generated showcase needs to feel recognizable instead of assembled from generic UI parts.

This is not a logo exercise. It defines the repeated visual and verbal decisions that make the interface feel authored: name treatment, motif, shape grammar, color role, icon/illustration stance, copy voice, proof objects, and restraint.

Source anchors:

- Atlassian Design treats foundations such as color, typography, iconography, illustration, logos, elevation, border, and radius as part of a coherent design language: https://atlassian.design/foundations
- Atlassian illustration guidance frames illustration as a brand-system element shaped by color, softness, curves, and composition: https://atlassian.design/foundations/illustrations
- Material Design color guidance separates primary, secondary, surface, background, error, typography, and iconography roles so color reinforces brand without losing UI meaning: https://m2.material.io/guidelines/style/color.html
- IBM Design Language pictogram guidance uses a shared grid, positioning, proportion, and color rules to keep visual assets coherent: https://www.ibm.com/design/language/iconography/pictograms/design/
- Shopify product content guidance treats voice and tone as interface quality, not marketing garnish: https://shopify.dev/docs/apps/design/content

## Required output

```md
Brand identity and motif system
- Product/category:
- Recognition target:
- Brand words:
- Motif:
- Shape grammar:
- Color role:
- Typography role:
- Icon/illustration stance:
- Motion/material echo:
- Product proof tie:
- Repetition rule:
- Restraint rule:
- Rejected identity moves:
- QA checks:
```

If the system cannot name a motif, repetition rule, and restraint rule, the result will likely drift into generic polish.

## Recognition targets

Choose one target:

| Target | Use when | Quality bar |
|---|---|---|
| Quiet product | dashboards, admin, tools | recognizable through layout, density, type, and controls without loud branding |
| Branded product | SaaS, plugin, developer tool | brand mark, accent, motif, and copy appear consistently but do not fight task clarity |
| Campaign/editorial | launches, event pages, creative products | one memorable visual world carries first viewport and repeats later |
| Native-adjacent | Windows/macOS/Android/iOS work | platform idiom leads; brand appears through accent, icon, copy, and optional hero proof |
| Portfolio/showcase | public proof and gallery pages | strongest motif is screenshot-worthy and reusable across sections |

Do not use campaign-level expression for routine work surfaces unless the brief explicitly asks for it.

## Motif options

Pick one primary motif, then repeat it with variation:

- grid/crosshair/measurement
- trace/path/route
- stack/layer/depth
- lens/inspection/magnifier
- pulse/signal/waveform
- frame/shot/timeline
- ticket/receipt/ledger
- map/terrain/node graph
- stamp/seal/checkpoint
- split/reveal/before-after
- material fold/cut/edge
- instrument panel/gauge

The motif must connect to the product object. A node graph is not a motif for every AI product.

## Shape and asset grammar

Define:

- corner logic: square, softened, pill, clipped, notched, circular, organic
- edge logic: hairline, strong divider, glow edge, inset groove, shadow seam, no border
- asset style: icon-only, pictogram, code-rendered UI, generated key art, screenshot, chart, diagram
- density: compact tool, editorial roomy, dashboard moderate, mobile priority stack
- repetition: where the motif appears again, and where it does not

Do not mix rounded SaaS cards, glass blobs, pixel badges, 3D props, and hand-drawn illustrations unless the concept explicitly justifies the collision.

## Color and typography identity

Color identity:

- Assign the brand accent one job: recognition, primary action, selection, or proof highlight.
- Keep semantic states independent from brand color.
- Choose one supporting accent only when the motif needs a second signal.
- Avoid making the whole interface one hue family.

Typography identity:

- Decide where personality lives: wordmark, hero, section heads, labels, numbers, or mono data.
- Keep body and dense UI readable even when display type is expressive.
- Pair typography with the motif: industrial mono for traces/specs, humanist sans for tools, editorial serif for narrative, geometric display for launch.
- Do not rely on a trendy display font to carry a weak product idea.

## Motion and material echo

Motion should echo the motif:

- trace/path motif -> draw, follow, route, progress
- layer/depth motif -> reveal, stack, peel, inspect
- lens motif -> focus, zoom, scan, isolate
- frame/timeline motif -> scrub, cut, sequence, pause
- pulse/signal motif -> periodic but controlled status feedback

Material should echo the motif:

- measurement -> precise lines, ticks, rulers, alignment marks
- ledger -> paper, cells, signed rows, restrained ink
- media/story -> frame edges, contact sheets, film strips, crop marks
- command/tool -> panels, rails, handles, selected state

If motion/material does not reinforce the motif, remove it.

## Restraint rules

Every identity system needs bans:

- maximum one primary motif
- maximum two accent colors excluding semantic states
- maximum two asset styles
- maximum one novelty shape treatment
- no motif on controls where it hurts recognition or accessibility
- no decorative assets that do not prove product, state, motion, or brand

## QA checks

- First viewport is recognizable without reading the nav logo.
- The motif repeats at least three times across meaningful UI/proof moments.
- The motif does not make controls, text, charts, or state colors less usable.
- Brand accent is not also danger, warning, success, and selection.
- Icons/illustrations/assets share a source or style grammar.
- Typography personality has a named role and does not weaken body/UI readability.
- Mobile preserves the identity without shrinking desktop decoration.
- Screenshot proof still reads as the same product when cropped.
- A rejected-identity list prevents fallback to generic SaaS gradients, cards, and stock-like props.

## Hard fails

- Logo in the nav is the only recognizable brand cue.
- Motif is decorative and unrelated to the product object.
- Every section uses a different visual language.
- Brand color replaces semantic state colors.
- Generated hero art carries one style while product UI uses unrelated default components.
- Mobile removes all identity or leaves only decorative clutter.
- The design could be rebranded by changing one word and one accent color.
