# Visual token recipes

Use this after `material-systems.md` and before implementation when Stark needs concrete color, spacing, radius, shadow, border, density, and state-token decisions.

When the UI needs light/dark mode, high contrast, forced colors, compact/comfortable density, brand themes, or appearance adaptation, follow this file with `theme-mode-density-system.md`. Token values are not enough; Stark must also preserve surface, state, focus, media, chart, and density behavior across modes.

The goal is to stop generated UI from drifting into the same purple/slate/beige/card palette. Tokens should express the product job, not just decorate the page.

## Required output

```md
Visual token recipe
- Surface:
- Product world:
- Palette type:
- Background role:
- Surface roles:
- Text roles:
- Accent roles:
- Semantic state roles:
- Spacing/density:
- Radius:
- Border/rule:
- Shadow/elevation:
- Texture/material:
- Contrast/accessibility:
- Banned defaults:
- QA checks:
```

## Token role model

Every serious UI should define roles before values.

| Role | Job |
|---|---|
| `bg/base` | stable page/app ground |
| `bg/raised` | layer behind surfaces or panes |
| `surface/default` | primary content surface |
| `surface/subtle` | secondary grouped regions |
| `surface/strong` | selected, active, modal, or inspected object |
| `border/subtle` | quiet structure |
| `border/strong` | selected, warning, drag, or focus boundary |
| `text/primary` | main reading/action text |
| `text/secondary` | supporting copy |
| `text/muted` | metadata only, never critical state |
| `accent/primary` | primary action or brand anchor |
| `accent/secondary` | secondary motif or data highlight |
| `state/success` | completed/healthy |
| `state/warning` | attention/risk |
| `state/danger` | destructive/error |
| `state/info` | neutral system note |
| `focus/ring` | keyboard focus and active control proof |

If the design only has `background`, `card`, `text`, and `primary`, it is probably under-specified.

## Palette ratio

Use a ratio before choosing colors.

| Ratio | Use for | Rule |
|---|---|---|
| 80/15/5 | product apps, dashboards, checkout, docs | neutral base, stable surfaces, small accent |
| 70/20/10 | branded product pages, docs platforms, developer tools | stronger surface identity, restrained accent |
| 60/25/15 | campaign, editorial, launch | more visual voice, still readable |
| 90/8/2 | high-trust finance/admin/settings | nearly all system/neutral, accent only for action/state |

Do not make every surface a variation of one hue. Accent should be a signal, not wallpaper.

## Recipe families

### Operational ink

Use for dashboards, admin, CRM, agent runs, devops, analytics.

- Palette: cool or neutral ink, high contrast, semantic states.
- Background: slightly tinted neutral, not pure black/white.
- Surfaces: low contrast fill plus borders; fewer shadows.
- Accent: one task color for primary action, semantic colors for status.
- Spacing: dense, 4/8px base, stable rows.
- Radius: 4-8px; 0-4px for dense grids.
- Shadow: minimal; use borders and tonal separation.
- Ban: decorative gradients, floating cards everywhere, low-contrast slate labels.

### Editorial paper

Use for docs, reports, editorial product pages, trust/pricing, portfolios.

- Palette: paper base, ink text, one accent ink or stamp color.
- Background: warm or cool off-white with enough text contrast.
- Surfaces: rules, margins, columns; cards only when framing repeated items.
- Accent: sparse links, stamps, highlights.
- Spacing: larger vertical rhythm; section spacing varies by narrative.
- Radius: 0-6px; radius should feel intentional.
- Shadow: almost none; paper depth through border/texture.
- Ban: beige sameness, weak contrast, fake parchment.

### Cinematic proof

Use for AI/media/video/product launches.

- Palette: media-driven; extract one dark/light ground and one accent from the hero object.
- Background: dark or deep tinted neutral only if text sits on stable surfaces.
- Surfaces: transparent overlays, proof labels, posters, frames.
- Accent: one glow/light source tied to the object.
- Spacing: hero-scale first viewport, then tighter proof sections.
- Radius: object-dependent; avoid every panel having the same pill radius.
- Shadow: object depth, not card shadow soup.
- Ban: purple-blue gradient dominance, random glow blobs, illegible text on media.

### Trust ledger

Use for billing, pricing, checkout, permissions, security, healthcare, finance.

- Palette: neutral high-trust base, muted accent, explicit state colors.
- Background: calm and solid; avoid entertainment-style spectacle.
- Surfaces: comparison rows, ledgers, matrices, evidence panes.
- Accent: CTA plus selected row; semantic state colors near risk.
- Spacing: compact enough for comparison, not cramped.
- Radius: 4-8px; consistent in forms and tables.
- Shadow: restrained; hierarchy from grouping and rules.
- Ban: playful color near money/security, hidden low-contrast terms.

### Studio desk

Use for editors, creative tools, image/video/canvas products.

- Palette: quiet chrome plus canvas/product media.
- Background: tool chrome, not campaign backdrop.
- Surfaces: toolbar, layer list, inspector, canvas, timeline.
- Accent: selection, handles, current mode, export state.
- Spacing: compact controls, generous canvas.
- Radius: small controls 4-6px; artifact frames can differ.
- Shadow: panel depth only when it clarifies layering.
- Ban: brand colors fighting selection state, panels styled as decorative cards.

### Playful instrument

Use for consumer, education, creator onboarding, wellness.

- Palette: lighter base, stronger accent pair, clear state colors.
- Background: optimistic but not candy everywhere.
- Surfaces: soft, tactile controls.
- Accent: one primary plus one supporting color.
- Spacing: touch-friendly, clear grouping.
- Radius: 10-20px where product allows.
- Shadow: soft and sparse.
- Ban: childish body copy/type, low-contrast pastel controls.

## Spacing and density recipes

| Surface | Base | Rows | Section rhythm | Notes |
|---|---|---|---|---|
| Dense app | 4/8px | 32-44px rows | compact | repeated work and scan speed |
| Dashboard | 4/8px | 36-52px rows | compact/moderate | filters and tables stay near data |
| Editor | 4/8px controls, canvas flexible | 28-40px controls | compact chrome | canvas/artifact gets the space |
| Checkout | 8px | 44-56px inputs | moderate | risk copy near action |
| Docs | 8px | code/list dependent | readable | line length and code overflow matter |
| Campaign | 8/12px | n/a | varied | avoid identical section padding |
| Mobile task flow | 8px | 44px+ tap rows | tight | thumb reach and safe areas |

Do not use one universal `py-24` rhythm across a whole site.

## Radius rules

- Dense operations: 4-8px.
- Native-like controls: match platform.
- Editorial/paper: 0-6px.
- Playful/consumer: 10-20px.
- Hero media frames: can be larger if the object earns it.
- Cards should not all have the same radius if they represent different functions.
- Avoid giant 24px rounded rectangles for every serious B2B surface.

## Shadow and elevation rules

- Operational surfaces: borders and tonal elevation first.
- Native surfaces: platform materials/elevation first.
- Campaign/product object: shadows support one main object.
- Tables/lists: no hover lift that shifts layout.
- Avoid identical shadow on every card.
- Avoid glow as elevation unless the product world supports light.

## Semantic state color rules

- State colors must not rely on color alone; pair with text/icon/shape.
- Danger should not share the brand accent.
- Warning needs enough contrast on light and dark surfaces.
- Success should be calmer than primary action unless success is the main result.
- Disabled is not just low opacity if explanation is needed.
- Selection state should differ from hover and focus.

## CSS variable starter

```css
:root {
  --bg-base: #f7f5ef;
  --bg-raised: #ffffff;
  --surface-default: #fbfaf7;
  --surface-subtle: #f1eee6;
  --surface-strong: #101412;
  --border-subtle: rgba(16, 20, 18, 0.12);
  --border-strong: rgba(16, 20, 18, 0.32);
  --text-primary: #101412;
  --text-secondary: rgba(16, 20, 18, 0.68);
  --text-muted: rgba(16, 20, 18, 0.48);
  --accent-primary: #0f7f65;
  --accent-secondary: #b86b2b;
  --state-success: #147a4d;
  --state-warning: #9a6200;
  --state-danger: #b42318;
  --state-info: #2563eb;
  --focus-ring: #111827;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --shadow-object: 0 18px 48px rgba(16, 20, 18, 0.18);
}
```

This is a role example, not a universal palette. Replace values by recipe.

## OKLCH guidance

OKLCH is useful for perceptual color steps and modern CSS token systems. Use it when the target browser support and fallback are acceptable.

Rules:

- Provide hex/rgb fallback if supporting older browsers.
- Keep contrast checks on actual rendered foreground/background pairs.
- Avoid extreme chroma that clips unpredictably.
- Use semantic roles even when values are in OKLCH.

## QA checks

- Body/control text meets WCAG contrast for expected backgrounds.
- Accent is not doing three jobs at once: brand, primary action, and danger.
- Semantic states are visible in dark/light modes where relevant.
- Spacing communicates grouping.
- Dense surfaces do not use marketing whitespace.
- Campaign surfaces do not use identical stacked section padding.
- Radius and shadow differ by function, not random polish.
- Palette is not one-note purple/blue, beige/brown, or slate-only unless deliberately justified.
- Focus ring is visible on all surface roles.
- Mobile keeps contrast and state color clarity.

## Source anchors

- MDN documents `oklch()` as a CSS color function in the CSS Color modules: https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/oklch
- WCAG 2.2 contrast guidance defines minimum text contrast expectations and notes that contrast must be measured against the specified background in normal use: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- Material Design color systems use roles to separate primary, secondary, surface, background, and state meaning: https://m2.material.io/guidelines/style/color.html
- Apple HIG color guidance emphasizes using color judiciously, communicating consistently, and preserving legibility across appearances: https://developer.apple.com/design/human-interface-guidelines/color
