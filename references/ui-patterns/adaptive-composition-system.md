# Adaptive composition system

Use this after `composition-system.md`, `layout-precision-system.md`, and `responsive-containment.md` when a page or app must feel intentionally designed across desktop, tablet, and mobile.

Responsive containment prevents breakage. Adaptive composition preserves the product idea while changing the structure for each viewport.

Source anchors:

- web.dev describes responsive design as changing layout to fit user needs and device capabilities, not merely shrinking a desktop page.
- MDN container queries allow components to respond to their container size, which is often better than relying only on viewport breakpoints.
- WCAG Reflow requires content and functionality to remain available around 320 CSS pixels without two-dimensional scrolling except for content that genuinely needs it.
- Material layout guidance treats layouts as adaptive systems with minimum/maximum dimensions, margins, grids, and region behavior across form factors.

## Use when

- A desktop design has split panes, sidebars, hero key art, data tables, inspectors, charts, timelines, carousels, galleries, or complex navigation.
- A generated page looks good on desktop but cramped, clipped, over-stacked, or generic on mobile.
- The design uses animation, 3D/canvas/video, product screenshots, large typography, or dense UI.
- The user asks for public, high-craft, serious, "go all out", or mobile-friendly design.

## Output contract

```md
Adaptive composition
- Core idea to preserve:
- Desktop structure:
- Tablet structure:
- Mobile structure:
- Breakpoint triggers:
- Component/container queries:
- Navigation transformation:
- Proof/media transformation:
- Dense-region transformation:
- Motion/asset fallback:
- Text/CTA transformation:
- QA viewports:
```

## Core rule

Do not ask "how do I shrink this layout?"

Ask:

- What is the product object?
- What must remain visible first?
- What can become a sheet, drawer, rail, stack, carousel, priority list, or static frame?
- What interaction is impossible or annoying on touch?
- What proof order must survive?

The mobile layout should feel like the same product idea with a different composition, not a miniature desktop screenshot.

## Viewport roles

### Desktop

Desktop can support:

- object stage plus side proof
- split pane / master-detail
- table + inspector
- canvas + stable tools
- cinematic key art + proof rail
- command center with persistent nav
- dense comparison or chart with source table

Desktop risk: over-wide empty space, unrelated panels, spectacle that hides the product object.

### Tablet

Tablet is not just a slightly smaller desktop. It often needs:

- two-column layouts with tighter pane ratios
- sidebar -> rail or top segmented nav
- inspector -> side sheet or below-content panel
- hero key art -> cropped object stage with proof labels
- table -> priority columns plus horizontal containment
- command/search -> full-width overlay

Tablet risk: both desktop and mobile assumptions fail, especially in landscape/portrait rotations.

### Mobile

Mobile should optimize for:

- one primary object or decision per screen
- clear next action within thumb reach
- stacked proof frames
- priority rows instead of full tables
- bottom sheets for detail/filters/actions
- persistent compact nav only when needed
- static proof frames instead of long scrubbed sequences
- readable text and target sizes

Mobile risk: everything becomes generic cards, proof moves too far down, or controls disappear behind menus.

## Transformation patterns

| Desktop pattern | Tablet replacement | Mobile replacement |
|---|---|---|
| split pane | narrower pane + collapsible inspector | list/detail stack or bottom sheet |
| sidebar app shell | rail/top tabs | bottom nav, command/search, or priority stack |
| table + detail | priority columns + side sheet | priority rows + detail sheet |
| hero object + side copy | object above/beside compact copy | object crop/frame + proof labels + CTA |
| pinned scroll story | shorter pinned region or stepper | stacked proof frames |
| 3D/canvas hero | lower DPR + simpler controls | poster/static frame + tap-to-load or simplified canvas |
| chart dashboard | chart + summary/sidebar | summary cards + focused chart + table fallback |
| carousel/gallery | rail with visible controls | selected item + swipe rail + fallback list |
| command palette | centered overlay | full-screen command sheet |
| pricing matrix | fewer visible columns | plan cards with comparison rows |

## Breakpoint triggers

Use content and behavior triggers, not only device names:

- Navigation wraps or loses current-location clarity.
- Primary proof object falls below the fold.
- CTA separates from proof/risk context.
- Table columns lose units or comparison value.
- Inspector/toolbars crowd the work object.
- Text line length becomes too long or too short.
- Media/object crop loses the important subject.
- Pointer hover behavior has no touch equivalent.
- Animation consumes too much vertical distance.

## Container queries

Use container queries when components appear in multiple contexts:

- cards that can be compact, medium, or wide
- panels inside split panes and drawers
- tables inside dashboard regions
- chart panels inside grids
- media/proof modules reused across landing and detail pages
- command/menu items in narrow sidebars or full overlays

Viewport media queries decide page structure. Container queries decide component shape.

## Proof and media transformation

- Keep important UI text code-native; do not rely on tiny screenshot text on mobile.
- Crop media around the product object, not around visual balance alone.
- Replace large screenshots with annotated slices when full UI is unreadable.
- Replace 3D/canvas/video with poster/static proof frame when performance, readability, or touch interaction fails.
- Keep proof labels near the proof object after transformation.
- Preserve the proof ladder order from `page-proof-architecture.md`.

## Dense-region transformation

Dense regions need named replacements:

- **Contained table**: when horizontal comparison is essential.
- **Priority rows**: when the user needs status, owner, time, and one action.
- **Master/detail sheet**: when selected item detail matters.
- **Summary + source**: when chart or metrics need a table fallback.
- **Stepper/review**: when checkout/setup needs sequential focus.
- **Command sheet**: when actions outnumber visible controls.

Do not convert dense workflows into decorative cards unless card anatomy preserves the decision.

## Motion transformation

- Desktop can use scroll proof, shared-object continuity, 3D inspection, or cinematic media when it proves the product.
- Tablet should reduce scroll distance and preserve orientation.
- Mobile should prefer tap-triggered reveals, short transitions, static proof frames, and reduced parallax.
- Reduced-motion must preserve the same proof sequence without relying on animation timing.

## QA viewports

Minimum checks:

- 1440px desktop.
- 1024px tablet landscape.
- 768px tablet portrait.
- 390px mobile.
- 320px or 400% zoom equivalent for reflow-sensitive UI.

Check:

- no page-level horizontal overflow
- first proof object visible
- CTA stays near proof/risk
- nav/current location remains clear
- dense region has explicit replacement
- media/key art remains framed
- text does not clip
- focus order follows visual order
- reduced-motion proof still works

## Hard fails

- Mobile is only desktop stacked in source order with no proof/order decisions.
- Tablet layout is untested and breaks between desktop/mobile assumptions.
- Hero/key art crops away the product object.
- CTA moves away from the proof or risk copy that justifies it.
- Dense table becomes unreadable cards with no comparison or action.
- Canvas/video/3D is blank, tiny, slow, or impossible to inspect on mobile.
- Navigation collapses but loses current location or search/command access.
- Reduced-motion removes the proof instead of replacing the animation.
