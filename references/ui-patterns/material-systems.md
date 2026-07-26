# Material systems

Use this before visual styling when the design needs a distinct surface language: paper, glass, metal, ink, glow, grain, data ink, native material, or product-media framing.

Materials are not decoration. They should explain hierarchy, product identity, depth, trust, and interaction.

After choosing the style lane in `style-diversity-matrix.md`, choose the material family here. Then use `visual-token-recipes.md` to define concrete token roles for color, spacing, radius, borders, shadows, density, semantic states, and contrast.

## Material brief

```md
Material system
- Product world:
- Primary material:
- Secondary material:
- Background role:
- Surface role:
- Accent role:
- Texture/noise role:
- Shadow/elevation rule:
- Native/platform constraint:
- Banned material cliches:
```

## Material families

| Family | Use for | Build with | Avoid |
|---|---|---|---|
| Paper / ink | editorial, docs, pricing, trust, reports | warm off-white, rules, paper grain, restrained shadows | beige sameness, fake parchment, weak contrast |
| Industrial metal | devtools, infra, agent runs, monitoring | dark tinted neutrals, hard rules, mono labels, cool highlights | generic slate SaaS, all-mono body copy |
| Product glass | media, creative tools, Apple-adjacent branded apps | translucent panels, real backdrop context, tight borders | glass on everything, unreadable blur, nested cards |
| Data ink | dashboards, analytics, operations | high information contrast, semantic color, tabular figures | decorative charts, low-contrast tiny labels |
| Cinematic proof | AI/video/media launches | real/generated media, poster frames, code-native overlays | blurred dark stock imagery, fake product movies |
| Tactile plastic / toy | playful consumer, education, kids/creator tools | soft shadows, rounded forms, expressive color | childish body type, novelty controls in serious flows |
| Luxury editorial | portfolio, premium product, fashion/art | refined serif/grotesque, sparse metadata, high-quality media | fake luxury serif with poor spacing |
| Brutalist raw | experimental portfolios, manifesto pages | visible grid, hard contrast, exposed structure | inaccessible contrast games, random clashing accents |

## Texture rules

- Grain should soften banding, add tactile depth, or support the product world.
- Use subtle opacity; texture should disappear before content does.
- Do not use gradient orbs, blob fields, or bokeh as default atmosphere.
- Do not let texture reduce contrast for body text, labels, controls, or charts.
- Prefer CSS/SVG/canvas noise when it is light; use generated bitmap textures only when the visual system needs specific material detail.

## Shadow and elevation

- Operational tools usually need tonal separation and borders more than dramatic shadows.
- Marketing objects may use deeper shadows if they clarify one focal object.
- Native apps should preserve platform material rules before custom flair.
- Avoid identical card shadows everywhere; vary depth by function, not by random polish.

## Glow systems

Use glow only when the product world supports it: media, AI/video, sensors, music, energy, creative tools, or live systems.

Rules:

- One glow source per viewport.
- Glow should reveal an object or state.
- Keep body text on stable surfaces, not directly on glow.
- Avoid purple-blue gradient dominance unless the brand or product demands it.

## Product media frames

Product screenshots, generated mocks, videos, canvases, and charts need frames that clarify scale and state.

Good frames:

- show actual UI labels or product content
- include state, metadata, or proof
- preserve aspect ratio and readable crops
- have responsive constraints

Bad frames:

- dark blurred screenshot used as mood
- phone/laptop mockup that hides the product
- fake UI text baked into an image when it should be real HTML
- oversized hero object that collides with copy on medium screens

## Platform constraints

- Apple: use system materials, translucency, SF typography/icons, and motion restraint before inventing chrome.
- Windows: use Mica/Acrylic/Fluent materials with native control grammar; custom color should not fight system contrast.
- Android: use Material color, elevation, shape, expressive motion, and edge-to-edge rules before bespoke effects.
- Web: material must be implemented with accessible contrast, containment, responsive behavior, and performance-aware CSS.

## QA gates

- Material supports hierarchy: background, surface, object, control, label.
- Body text and labels pass contrast.
- Texture and glow do not hide product proof.
- Shadows do not make every card equally important.
- Native platform material is respected where applicable.
- Mobile keeps the same material logic without clipping or overflow.
