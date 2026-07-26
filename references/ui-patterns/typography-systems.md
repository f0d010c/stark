# Typography systems

Use this before visual styling for original, branded, high-craft, dense, native, or cross-platform UI. Typography controls hierarchy, scan speed, trust, accessibility, and perceived craft.

This file complements `font-selection-matrix.md`, `typography-pairing-lab.md`, `../web-fonts.md`, and `type-recipes.md`. Use this file for the system decision across web, native, desktop, mobile, and product surfaces; use `font-selection-matrix.md` when Stark needs to choose the font job/class and concrete stack; use `typography-pairing-lab.md` when the chosen style lane should drive the pair; use `type-recipes.md` when Stark needs a concrete web recipe with loading, numeric, and QA rules.

## Typography system brief

```md
Typography system
- Surface:
- Platform:
- User mode:
- Density:
- Type strategy: native / branded native / custom web / mixed
- Display role:
- Body/UI role:
- Mono/data role:
- Scale roles:
- Number rule:
- Accessibility scaling:
- Font loading/performance:
- Motion rule:
- Banned fallback:
```

## Strategy choice

| Strategy | Use when | Examples | Avoid when |
|---|---|---|---|
| Native | settings, forms, system apps, high-trust flows | SF Pro, Segoe UI Variable, Roboto Flex | brand/campaign needs distinctive voice |
| Branded native | native app with identity in content surfaces | native chrome + custom display in hero/content | custom type breaks platform accessibility |
| Custom web | marketing, docs, product proof, web apps | display/body/mono chosen per surface | dense product UI becomes hard to read |
| Mixed | web desktop shell, docs platform, dev tool | native-like UI face + expressive display | roles are unclear or too many families |

Default:

- Native apps should start native.
- Web surfaces should choose a deliberate display/body/mono system.
- Dense tools should privilege readability over novelty.
- Campaign pages can let display type become the main visual object.

## Platform rules

### Apple

- Use SF Pro / SF Compact / New York / SF Mono through system text styles.
- Support Dynamic Type. Do not hard-code point sizes for normal UI text.
- Use rounded variants when the UI shape language is soft/rounded.
- Custom display type belongs in branded content surfaces, not core settings/forms.

### Windows

- Use Segoe UI Variable for Windows UI and Fluent type ramp.
- Use Cascadia Code/Mono for code, terminals, coordinates, and logs.
- Avoid legacy Segoe UI Plain as a brand choice.
- Custom display type can appear in branded content panes while native controls stay Fluent.

### Android

- Use Material 3 type scale and Roboto Flex/Roboto by default.
- Use Material Symbols for iconography and Roboto Mono/JetBrains Mono for code.
- Branded display type must still sit inside Material hierarchy, density, and accessibility scaling.

### Web

- Choose one display face, one body/UI face, and optional mono.
- Use `font-display: swap`.
- Prefer variable fonts when they reduce files and support the design.
- Subset/self-host when the project supports it.
- Never leave the browser/Tailwind default scale untouched for high-craft work.

## Surface matrix

| Surface | Display | Body/UI | Mono/Data | Scale behavior |
|---|---|---|---|---|
| Campaign / editorial | expressive serif/grotesque | quiet text face | sparse metadata | large jumps, designed line breaks |
| Cinematic product | wide/soft grotesque or restrained serif | neutral UI sans | proof labels/timecode | hero object leads, labels stay legible |
| Developer tool | precise grotesque or mono-led display | readable sans | code/log mono | compact but not cramped |
| Dashboard/ops | little or no display face | highly legible UI sans | tabular figures/mono IDs | dense rows, strong status hierarchy |
| Editor/canvas | quiet UI sans | same family | dimensions/shortcuts mono | canvas dominates, controls stable |
| Docs/API | readable heading face | long-form text face | code mono | comfortable reading + copyable code |
| Checkout/trust | trustworthy sans or warm serif | readable sans | tabular prices | no experimental type near risk |
| Agent run/devops | industrial sans/mono labels | readable sans | tool/log mono | status/owner/time scan speed |
| Luxury/portfolio | refined serif/grotesque | warm text face | sparse metadata | generous leading, fewer labels |
| Mobile task flow | native or very readable sans | same | minimal mono | thumb-scale controls, no tiny caps |

## Type roles

- Display: brand voice, hero, section anchors, campaign moments.
- Body/UI: reading, controls, labels, repeated work.
- Mono/data: code, logs, IDs, coordinates, counters, timestamps, proof labels.
- Tabular figures: prices, metrics, durations, dates, comparable numbers.
- Captions: explain media/proof, not decorative microcopy.

Do not use display type in dense tables. Do not use mono for paragraphs unless the product concept truly requires it.

## Scale rules

- Hero: design line breaks; test mobile and medium desktop.
- H1/H2: match container density, not viewport width.
- Body: 16-20px marketing/docs, 14-16px apps, platform text style on native.
- Dense rows: 12-14px with enough contrast and line-height.
- Labels: 10-13px; uppercase needs extra spacing and contrast.
- Buttons: 13-15px; never browser default.
- Legal/pricing/error: stable, readable, no motion.

## Accessibility

- Support platform text scaling where applicable.
- Do not encode hierarchy through size alone; use weight, position, spacing, and semantics.
- Avoid low-contrast small labels.
- Keep line length comfortable.
- Use real text for important UI, not text baked into images/video/Rive/Lottie.
- Test long labels, numbers, localized strings, and narrow screens.

## Variable fonts and motion

Variable fonts can support:

- optical size for display vs text
- weight/grade changes for hover or emphasis
- type-as-hero interactions
- compact data UI when axes are used carefully

Rules:

- Animate type axes only for display or small interactive moments.
- Do not animate body text, legal copy, prices, warnings, logs, or table cells.
- Use variable fonts for performance only when the family and axes are actually needed.

## Font loading and licensing

- Confirm licensed fonts are available before using them.
- Prefer free/open fonts when publishing examples.
- Use `font-display: swap`.
- Self-host/subset when project constraints allow.
- Avoid loading many weights and italics for a minor visual difference.
- Keep fallback metrics close enough to avoid jarring layout shift.

## Quality gates

- Type strategy is named.
- Display/body/mono roles are distinct.
- Scale fits surface density.
- Numbers use tabular/mono when compared.
- Native platforms preserve system text scaling.
- Web fonts have loading strategy.
- No generic primary personality: Inter, Roboto, Arial, Space Grotesk, Poppins, or `system-ui` unless justified by native/platform constraints.
- Screenshot critique checks line breaks, clipping, contrast, and button text fit.
