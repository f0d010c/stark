# Color, material, and contrast gate

Use this after `visual-token-recipes.md`, `theme-mode-density-system.md`, `token-implementation-contract.md`, and rendered/browser evidence when a serious UI needs to prove its palette, material system, state colors, and contrast actually work.

Token planning chooses roles. This gate accepts, repairs, or blocks the rendered result.

Source anchors:

- WCAG 2.2 contrast guidance covers text contrast, and non-text contrast covers meaningful controls, graphics, and state indicators.
- Material Design color guidance treats color as a system of roles for primary, secondary, surface, background, error, and related UI meanings.
- Apple HIG color guidance emphasizes consistent color use, legibility, appearance adaptation, and not relying on color alone.
- MDN documents `prefers-color-scheme`, `color-scheme`, and `forced-colors` for browser/user appearance modes.

## Use when

- The design has custom colors, dark mode, high contrast, forced colors, charts, status colors, brand themes, generated key art, glass/material effects, gradients, glows, or textured surfaces.
- A page looks polished but feels flat, muddy, one-note, inaccessible, or like the same purple/slate/beige AI palette.
- Product-library defaults are visible through color, border, focus, selected, invalid, or destructive states.
- Final QA needs to verify actual foreground/background pairs, not just planned tokens.

## Output contract

```md
Color/material contrast gate
- Surface:
- Evidence inspected:
- Token/source files:
- Rendered modes checked:
- Palette ratio:
- Surface hierarchy:
- Text contrast:
- Non-text contrast:
- Focus/selection visibility:
- Semantic state separation:
- Brand/accent ownership:
- Chart/media color behavior:
- Material/depth behavior:
- One-note/default residue:
- Failed pair/state/surface:
- Required repair:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Acceptance rule

Do not accept a color system because it has named tokens.

Pass only when:

- rendered text contrast is checked against the actual surface behind it
- meaningful borders, focus rings, controls, selected rows, chart marks, and status indicators have enough non-text contrast
- color is not the only cue for state, risk, chart meaning, or progress
- brand accent, primary action, focus, danger, warning, success, disabled, and selection have separate roles
- surface hierarchy is readable without identical card borders/shadows everywhere
- dark, light, high-contrast, forced-colors, compact, or brand modes preserve state meaning where supported
- chart/media colors remain legible and have labels, legends, summaries, or non-color encoding when meaning matters
- material effects support hierarchy or product identity rather than hiding content

## Evidence to inspect

Use the best available evidence:

- token/source files for semantic roles and component state roles
- rendered screenshots in supported modes
- browser probes for computed foreground/background color pairs
- component state gallery for hover, focus, selected, invalid, disabled, destructive, loading, and success states
- chart/media screenshots and accessible summaries
- forced-colors/high-contrast screenshot or CSS review when the app supports custom UI
- comparison against product-library docs defaults when libraries are visible

Missing evidence is risk. It is not a pass.

## Rendered checks

### Text contrast

Check:

- body text, labels, captions, helper text, metadata, nav, buttons, badges, tabs, chips
- text over images, video, canvas, glass, gradients, glows, and generated assets
- muted text that still carries status, price, risk, owner, time, or recovery

Repair:

- increase value contrast before changing hue
- place text on stable surfaces instead of busy media
- remove low-opacity critical text
- split decorative text from functional text

### Non-text contrast

Check:

- input borders, toggle tracks/thumbs, focus rings, selected rows, invalid fields, drag handles, chart lines, map markers, icon-only buttons, table rules, dividers that communicate grouping

Repair:

- strengthen component/state tokens
- add text, icon, shape, position, or pattern in addition to color
- make focus ring independent from brand/accent color
- differentiate hover, selected, active, focus, disabled, and invalid states

### Semantic state separation

Check:

- primary action does not share the same color as danger
- warning and success remain distinct in light/dark modes
- disabled is visibly disabled but still legible when explanatory text matters
- selected state is different from hover and focus
- busy/loading state is not only a low-contrast spinner

Repair:

- assign state tokens by meaning, not brand palette
- use border/shape/icon/text in addition to hue
- reserve accent for one job per surface

### Surface and material hierarchy

Check:

- background, raised surface, content surface, selected surface, modal/sheet, and overlay are distinguishable
- shadows/glows share one believable light model
- glass/blur/transparency does not reduce text or control contrast
- every repeated card is not framed with the same border, radius, shadow, and accent

Repair:

- adjust value and border hierarchy first
- remove decorative surfaces that do not group or prioritize content
- tie material treatment to product world or platform idiom
- use depth only for overlays, selected objects, or real layer changes

### Palette personality and defaults

Check:

- palette ratio is visible: neutral/surface/accent balance matches surface risk and frequency
- design is not dominated by one hue family unless justified by the product
- colors do not look like default Tailwind/shadcn/docs examples
- generated key art, logo, accent, and UI states do not fight each other

Repair:

- choose a clearer visual language and palette ratio
- reduce random accent usage
- replace starter library colors with product-specific semantic roles
- extract one color from proof/media only when it has a job

## Hard fails

- Text or essential labels fail contrast on their actual backgrounds.
- Focus, selected, invalid, disabled, destructive, or warning states are ambiguous.
- Meaningful chart/status information is color-only.
- Danger shares the primary brand/action color.
- Glass, blur, gradient, glow, image, or video makes important text unreadable.
- Dark mode is an inversion that loses hierarchy or state meaning.
- Forced-colors/high-contrast support is claimed but custom UI disappears or loses focus.
- Product-library starter colors are still recognizable in public UI.
- Palette is one-note and the product could be rebranded by changing only the logo/accent.

## Repair order

1. Fix text contrast on actual backgrounds.
2. Fix focus, selected, invalid, disabled, warning, danger, and destructive states.
3. Add non-color cues for charts, status, progress, and risk.
4. Restore surface hierarchy through value, borders, and grouping.
5. Separate brand accent from semantic state roles.
6. Remove one-note/default palette residue.
7. Re-check the failed pair, state, mode, or screenshot.

## Gate results

- **Blocked**: contrast/state ambiguity prevents use, trust, accessibility, or core task completion.
- **Repair required**: the palette is viable but one or more state, surface, material, or default-residue issues weaken quality.
- **Acceptable with risk**: minor issue or missing evidence remains and is named.
- **Pass**: rendered colors, material, contrast, states, modes, and palette identity are role-driven and verified.
