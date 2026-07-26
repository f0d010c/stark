# Visual and usability QA protocol

Use this before final delivery for high-craft UI, animation-heavy pages, public demos, or any design where visual quality matters.

For the step-by-step screenshot critique, repair, and re-check loop, also use `visual-qa-workflow.md`. For deciding the minimum evidence pack by surface, use `qa-evidence-contract.md`.

This protocol turns "looks good" into evidence. Run the checks that match the surface and report the result briefly.

## QA brief

```md
Visual QA
- Viewports checked: desktop / tablet / mobile
- Browser evidence: screenshot / DOM / console / interaction
- Visual hierarchy: pass/fix
- Typography: pass/fix
- Responsiveness: pass/fix
- Motion/accessibility: pass/fix
- Usability states: pass/fix
- Performance risk: pass/fix
- Remaining risk: ...
```

## 1. First viewport

Check:

- One dominant focal point.
- Product/category/offer visible immediately.
- Primary action visible and not delayed by animation.
- Hero object/media is inspectable, not blurry filler.
- Next section hint exists on normal laptop and mobile when appropriate.
- Copy is concrete, not generic hype.

Fail examples:

- Multiple objects compete equally.
- CTA appears only after scroll or long animation.
- Hero could belong to any AI SaaS after changing the logo.

## 2. Typography

Check:

- Display face has a reason and is not a generic default.
- Body/UI text is readable at desktop and mobile sizes.
- Labels, buttons, captions, nav, badges, and table text have deliberate sizes.
- Line length and line height are comfortable.
- No text overlaps, clips, or overflows its container.
- No cheap copy such as "next level", "seamless", "unlock", "supercharge", or vague "AI-powered" unless intentionally on-brand.

Fail examples:

- Browser-default button typography.
- Huge display text inside cramped cards.
- Low-contrast small labels in hero art.

## 3. Layout and containment

Check:

- No page-level horizontal overflow on mobile/tablet.
- Nav, toolbars, tables, inspectors, and long labels wrap, collapse, or scroll inside their own region.
- Dense surfaces use bounded scroll and stable panes.
- Cards are not nested inside decorative cards.
- Fixed-format elements have stable dimensions and do not jump on hover or loading.

Fail examples:

- Mobile page wider than viewport.
- Table forces the whole page sideways.
- Hero object pushes copy below a dead first viewport.

## 4. Motion

Check:

- Motion budget matches surface type.
- Each motion moment supports hierarchy, continuity, progress, or control.
- Continuous motion uses transform/opacity where possible.
- No controls move away during pointer interaction.
- Reduced-motion mode preserves all important information.
- Autoplaying motion longer than 5 seconds has pause/stop/hide unless essential.
- No rapid flashing or red flashes.

Fail examples:

- Lenis on docs/admin/checkouts.
- GSAP added only for simple card fades.
- Pinned scroll story with no static fallback.

## 5. Interaction and states

Check:

- Hover, focus, active, selected, disabled, loading, error, empty, permission, success, and long-running states exist when relevant.
- Keyboard focus is visible and follows the workflow.
- Primary and destructive actions are clearly separated.
- Forms show validation and recovery.
- Tool/agent workflows show stop, retry, resume, inspect, artifact, and blocked states when relevant.

Fail examples:

- Happy path only.
- Error is a toast with no recovery.
- Controls are inert or decorative.

## 6. Assets and media

Check:

- Images/video/canvas/WebGL assets load.
- Hero media is framed correctly on desktop and mobile.
- Canvas/WebGL is nonblank and not clipped.
- Images are not random stock filler.
- External assets have attribution when required.
- Generated assets match the product world and do not carry unreadable fake text.

Fail examples:

- A dark blurred screenshot as proof.
- WebGL blank on mobile.
- Decorative image obscures text.

## 7. Performance

Check:

- Heavy libraries are justified by the chosen pattern.
- Media below the fold is lazy-loaded.
- WebGL renderer DPR is capped and resize handled.
- Scroll handlers are passive/throttled or replaced with native scroll timelines where appropriate.
- Avoid animating layout/paint-heavy properties in loops.
- No console errors.

Fail examples:

- Multiple animation libraries for one simple page.
- Unbounded particles or canvas work on every frame.
- Post-processing added to a weak 3D scene.

## 8. Accessibility

Check:

- Semantic headings and landmark structure.
- Buttons/links are real controls.
- Contrast is acceptable for body, labels, controls, and states.
- Focus-visible styles are present.
- Hover-only interactions have tap/keyboard alternatives.
- Reduced motion is respected.
- Important status is not color-only.

Fail examples:

- Text inside images when it should be real UI.
- No focus ring.
- Status conveyed only by green/red color.

## Evidence levels

Use the strongest evidence practical:

| Evidence | Good For |
|---|---|
| Browser screenshot | visual hierarchy, framing, typography, overflow |
| Mobile screenshot | responsive proof |
| DOM snapshot | text, landmarks, controls, focusable elements |
| Console logs | runtime errors, missing assets |
| Interaction click/keyboard test | controls, menus, states |
| Reduced-motion emulation | fallback behavior |
| Canvas pixel/nonblank check | WebGL/canvas proof |
| Build/test/lint | implementation health |

## Final repair rule

If a design-review comment would be obvious from the screenshot, fix it before final delivery. Do not ship with:

- clipped text
- accidental overlap
- generic placeholder media
- unreadable labels
- broken mobile
- inert core controls
- console errors
- missing reduced-motion behavior
- a hero that looks copied from the reference instead of transformed
