# Responsive adaptation gate

Use this after `adaptive-composition-system.md`, `responsive-containment.md`, and rendered/browser evidence when a serious page or app must prove it works as an intentional desktop, tablet, and mobile product.

Adaptive composition plans the structures. This gate accepts, repairs, or blocks them.

Source anchors:

- web.dev defines responsive design as adapting layout to user needs and device capabilities, not shrinking one fixed layout.
- MDN container queries let components respond to their own container size, which is critical for reused panels, cards, tables, and inspectors.
- WCAG Reflow requires content and functionality to remain available around 320 CSS pixels without two-dimensional scrolling except where truly necessary.
- web.dev responsive image guidance distinguishes resolution switching from art direction, where different crops or aspect ratios serve different layouts.
- Material layout guidance treats responsive layouts as adaptive systems across screen sizes, margins, columns, regions, and components.

## Use when

- The design has a strong desktop composition, hero key art, split panes, sidebars, tables, charts, inspectors, animation, canvas, video, or dense controls.
- A mobile/tablet version exists but feels squeezed, stacked without intent, clipped, generic, or detached from the desktop idea.
- The user asks for public, high-craft, "go all out", animation-led, real site/app, responsive, mobile-friendly, or gallery-ready work.
- Browser QA or rendered quality found horizontal overflow, hidden proof, weak mobile framing, broken touch behavior, or cramped tablet structure.

## Output contract

```md
Responsive adaptation gate
- Surface:
- Core product idea:
- Evidence inspected:
- Viewports checked:
- Breakpoint/container triggers:
- Desktop result:
- Tablet result:
- Mobile result:
- Navigation transformation:
- Dense-region transformation:
- Media/proof crop:
- Text/CTA transformation:
- Touch/input behavior:
- Scroll ownership:
- Reflow/zoom result:
- Failed viewport:
- Required repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Acceptance rule

Do not accept a serious responsive design because it has no obvious overflow.

Accept it only when:

- the same product idea is recognizable at desktop, tablet, and mobile
- each breakpoint has a named structure, not just stacked source order
- primary proof and primary action remain close enough to understand the offer or task
- dense regions have a bounded scroll, priority-list, sheet, source table, or focused replacement
- touch and keyboard paths still reach the same essential work
- media/key art crops around the product object, not just the center of the image
- text, labels, numbers, and controls survive long content, zoom, and small widths
- reduced motion or mobile fallbacks preserve the proof sequence

## Viewport evidence

Minimum evidence for serious web work:

- desktop: 1440 x 900 or current app viewport
- tablet landscape: around 1024 x 768
- tablet portrait: around 768 x 1024 when the layout has sidebars, art, tables, or pinned sections
- mobile: around 390 x 844
- narrow/reflow: 320 CSS px or equivalent 400% zoom when text, forms, nav, tables, or legal/risk copy matter

Evidence can be screenshots, runtime probes, DOM measurements, Playwright traces, or local browser inspection. Name missing evidence as risk.

## Transformation checks

### Navigation

Check:

- current location remains visible
- search/command or primary navigation remains reachable
- collapsed menus are not the only way to find the main action
- sticky headers/bottom bars do not hide focus, content, errors, or CTAs

Repair:

- desktop sidebar -> tablet rail/top tabs -> mobile bottom nav, command sheet, or priority links
- desktop nav row -> wrapped row, overflow-contained row, or disclosure with current-location label
- dense docs nav -> section picker plus search/command

### Dense regions

Check:

- tables preserve comparison, units, status, owner, time, and action
- charts keep an accessible summary and source/table fallback
- inspectors and detail panes do not crush the main object
- code blocks, timelines, boards, and filter rows own their overflow

Repair:

- table -> bounded scroll with visible affordance
- table -> priority rows plus detail sheet
- chart -> summary, focused chart, source table
- split pane -> list/detail stack or selected-item sheet
- toolbar -> primary row plus overflow menu or drawer

### Media and proof

Check:

- first proof object is visible above the fold or reached by a clear first action
- responsive images use source/crop choices when art direction changes
- screenshots are readable or replaced by annotated slices
- canvas/WebGL/video/Rive/Lottie has a mobile/reduced-motion fallback
- DOM-owned text carries the message instead of tiny embedded image text

Repair:

- define desktop/tablet/mobile crops
- swap full screenshot for product slice plus proof labels
- replace autoplay/pinned proof with static frames or tap-triggered steps on mobile
- reserve geometry so media loading does not shift the layout

### Text and actions

Check:

- hero lines are authored per breakpoint
- button labels, tabs, filters, badges, numbers, dates, and units do not clip
- CTA stays near proof/risk context
- line lengths remain readable
- form errors and recovery copy remain visible near the field/action

Repair:

- change copy hierarchy before shrinking text
- wrap or shorten labels with accessible full labels
- move secondary actions into a menu while preserving the primary action
- use container-specific typography and spacing rules, not viewport-scaled fonts

### Touch and input

Check:

- hover-only affordances have touch/keyboard equivalents
- drag/scrub/swipe controls have keyboard or button alternatives
- targets remain large enough for touch
- carousels, sheets, maps, and canvases do not steal page scroll by accident
- focus order follows the visible mobile order

Repair:

- expose persistent controls
- add handle labels and cancel/undo paths
- replace hover reveal with tap disclosure or visible summary
- name scroll owner for every nested scroller

## Hard fails

- Page-level horizontal overflow on mobile/tablet.
- Desktop layout is merely squeezed or stacked with no proof/order decisions.
- Tablet is untested and breaks between desktop/mobile assumptions.
- Primary proof, CTA, risk copy, or recovery action disappears below unrelated decoration.
- Dense table/chart/board becomes unreadable cards with no comparison, source, or action.
- Key art crops away the product object or uses tiny unreadable screenshot text.
- Hover-only, mouse-only, or gesture-only behavior blocks the main task.
- Sticky chrome hides focused controls, errors, sheets, or primary actions.
- Reduced-motion or mobile fallback removes the actual proof.
- Text clips, controls overflow, or localization/zoom breaks the primary path.

## Repair order

1. Preserve the core product idea and proof order.
2. Remove page-level overflow and clipping.
3. Replace the failed dense region with the smallest useful responsive pattern.
4. Restore nav/current location and primary action access.
5. Fix media/key-art crop and fallback.
6. Fix text, labels, focus, and touch behavior.
7. Re-check the same failed viewport before changing style.

## Gate results

- **Blocked**: hard fail prevents the core task, proof, accessibility, or navigation.
- **Repair required**: the layout works partly but one breakpoint weakens product understanding or task completion.
- **Acceptable with risk**: missing evidence or a low-risk imperfection remains and is named.
- **Pass**: desktop/tablet/mobile preserve the product idea, controls, proof, reflow, and evidence.
