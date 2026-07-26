# Icon and illustration systems

Use this when a UI needs icons, command symbols, empty-state art, diagrams, logo motion, product illustrations, or platform icon decisions.

Icons and illustrations are interface language. They must be consistent, recognizable, and useful.

## Icon brief

```md
Icon system
- Platform/source:
- Stroke/fill style:
- Sizes:
- Color roles:
- Interactive states:
- Metaphor rules:
- Accessibility labels:
- Banned icons:
```

## Source choices

| Surface | Prefer | Notes |
|---|---|---|
| Apple native | SF Symbols | Match HIG, dynamic type, multicolor/hierarchical rendering only when useful. |
| Windows native | Segoe Fluent Icons / Fluent system icons | Match Windows chrome and command language. |
| Android native | Material Symbols | Respect Material sizing, optical weight, and state color. |
| Web app | lucide or project icon set | Good for controls and generic actions; keep stroke width consistent. |
| Brand/campaign | custom SVG/icon mark | Use when the symbol is part of identity, not every button. |
| Dense dashboard | simple line icons or no icons | Text/status often beats vague icons. |
| Editor/canvas | familiar tool icons | Use conventional symbols for tools; add tooltips. |

## Icon rules

- Use familiar icons for common commands: save, download, search, filter, settings, close, undo, redo, play, pause, stop.
- Use text labels for dangerous, rare, or ambiguous actions.
- Do not mix outline, filled, duotone, and hand-drawn styles in one control set.
- Align icon optical size, stroke width, corner radius, and visual weight.
- Icons inside buttons need hover, focus, active, disabled, and selected states when relevant.
- Do not manually draw SVG icons when a platform or lucide icon exists for the same command.
- Icon-only controls need accessible names and usually tooltips.
- Status must not be color-only; combine icon, text, and shape where needed.

## Illustration brief

```md
Illustration system
- Job: empty state / onboarding / proof / diagram / brand / product scene
- Format: SVG / CSS / generated bitmap / Rive / Lottie / Three
- Visual language:
- Required real UI/text:
- Motion:
- Fallback:
- QA:
```

## Illustration rules

- Empty-state art should point to the next action, not explain every feature.
- Product diagrams should expose structure, sequence, ownership, risk, or recovery.
- Editorial/campaign illustrations may be more expressive, but must still support the concept.
- Avoid generic abstract blobs, random gradients, decorative mascots, and fake UI screenshots.
- Keep important UI labels as real text outside bitmap/Rive/Lottie assets.
- Respect responsive crops; never let art cover controls or body copy.

## Format choices

| Format | Use for | Avoid |
|---|---|---|
| SVG/CSS | diagrams, icons, abstract product objects, scalable art | photoreal scenes, complex soft texture |
| Generated bitmap | editorial hero, realistic scene, texture, cutout | readable UI text, legal/pricing copy |
| Rive | interactive illustration/state machine | text-heavy UI or dense data |
| Lottie | small loops, loaders, brand marks | primary product UI or long hero animation |
| Three/R3F | inspectable spatial object | generic background decoration |

## Empty-state anatomy

Required:

- what happened
- why it matters
- next action
- recovery or setup path
- illustration that supports the action

Avoid:

- feature-tour paragraphs
- mascot only
- no primary action
- art larger than the explanation in operational tools

## QA gates

- Icons use one source/style unless intentionally separated by role.
- Icon metaphors are recognizable for the target audience.
- Icon-only controls have accessible names and focus states.
- Illustration supports a user job, state, or product proof.
- Generated/Rive/Lottie art does not contain essential unreadable text.
- Mobile crops preserve the meaningful part of the art.
