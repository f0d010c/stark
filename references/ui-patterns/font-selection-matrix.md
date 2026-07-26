# Font selection matrix

Use this when Stark needs to choose concrete fonts, critique generic typography, or decide whether a type system should be expressive, native, technical, quiet, dense, editorial, or performance-first.

Read this after `typography-systems.md` and before `typography-pairing-lab.md` and `type-recipes.md`. This file chooses the font job and family class; `typography-pairing-lab.md` maps the chosen style lane to a pairing archetype; `type-recipes.md` turns the choice into display/body/mono roles, imports, numeric rules, and QA checks.

## Font Selection Brief

```md
Font selection
- Surface:
- User mode:
- Density:
- Tone:
- Font job:
- Display class:
- Body/UI class:
- Mono/data class:
- Concrete stack:
- Numeric behavior:
- Loading plan:
- Motion rule:
- Rejected fonts:
- QA checks:
```

## First Principle

Fonts are not decoration. They do work:

- establish brand memory
- speed up scanning
- make controls trustworthy
- distinguish data from prose
- make proof feel real
- preserve platform expectations
- support accessibility and localization

If the font does not perform a job, do not load it.

## Surface Matrix

| Surface | Font Job | Display Class | Body/UI Class | Mono/Data | Good Free Stack | Avoid |
|---|---|---|---|---|---|---|
| Cinematic AI/product launch | make the object feel premium while proof stays readable | soft/wide grotesque, restrained serif, expressive variable | neutral grotesque | prompt/timecode mono | Bricolage Grotesque + Manrope + JetBrains Mono | all display type, generic Space Grotesk hero, tiny proof labels |
| Developer tool | make code/log proof credible and UI precise | precise grotesque or mono-led heading | crisp sans | code-first mono | Geist + Geist Mono, IBM Plex Sans + IBM Plex Mono | all-mono body, fake terminal aesthetic with no real commands |
| Docs/API | support long reading and code scanning | readable heading grotesque or editorial serif | text-friendly sans/serif | code mono | Newsreader + Geist + Geist Mono, IBM Plex Sans + IBM Plex Mono | fancy display in code-heavy docs, tiny code |
| Dashboard/ops | increase scan speed and numeric comparison | none or restrained section labels | compact UI sans | tabular mono for IDs/times | IBM Plex Sans + IBM Plex Mono, Source Sans 3 + IBM Plex Mono | expressive table typography, low-contrast labels |
| Agent run/devops | separate human explanation from tool/log evidence | industrial sans or restrained mono accent | readable sans | logs/tool calls mono | IBM Plex Sans + IBM Plex Mono, Geist + Geist Mono | mono paragraphs, animated log text |
| Checkout/trust | reduce uncertainty and make numbers stable | trustworthy sans or warm restrained serif | highly readable sans | tabular prices | Manrope + JetBrains Mono, Source Sans 3 + IBM Plex Mono | novelty display near price/legal/risk |
| Editor/canvas | keep chrome quiet and canvas dominant | minimal display in gallery/welcome only | stable UI sans | dimensions/shortcuts mono | Geist + Geist Mono, IBM Plex Sans + IBM Plex Mono | branded chrome competing with canvas |
| Editorial/campaign | make type itself memorable | character serif, high-contrast serif, expressive grotesque | quiet companion | sparse metadata mono | Newsreader + Geist + Geist Mono, Fraunces + Manrope | centered SaaS grotesque, too many families |
| Luxury/portfolio | signal craft and restraint | refined serif or premium grotesque | warm readable text | sparse metadata | Fraunces + Manrope, Instrument Serif + Geist | fake luxury with weak spacing/contrast |
| Playful consumer/creator | feel friendly without hurting controls | soft/round expressive display | calm readable sans | minimal mono | Bricolage Grotesque + Nunito Sans + JetBrains Mono | cute body copy, childish controls |
| Mobile task flow | preserve readability, platform scale, and thumb use | native or restrained brand heading | native/readable sans | minimal | system font, Roboto/Roboto Flex, SF Pro, Segoe UI Variable | tiny caps, complex font loading, custom text that ignores scaling |

## Font Job Matrix

| Job | Choose | Reject |
|---|---|---|
| Brand memory | display face with unusual proportion, contrast, width, or optical size | generic display used only because it is popular |
| Scan speed | UI sans with clear numerals, open counters, stable spacing | high-contrast serif or novelty forms in rows |
| Technical proof | real mono for code/logs plus sans for explanation | mono everywhere with weak paragraph readability |
| Trust/risk | calm UI sans, stable numerals, conservative spacing | playful or experimental faces near payment, permissions, errors |
| Editorial authority | serif/display contrast plus readable body rhythm | tiny labels and low-contrast captions |
| Data comparison | tabular figures, aligned decimals, consistent units | proportional numbers in tables/prices |
| Native fit | platform text styles and scaling | web fonts that fight OS controls |
| Performance | system or one variable font, limited weights, subset | many weights/italics loaded for small visual gains |

## Concrete Stack Rules

### Free/Open Default Pool

Use these first for public examples unless the project already includes licensed fonts:

- `Newsreader`: editorial/display with warmth.
- `Fraunces`: expressive serif, premium and playful when used large.
- `Instrument Serif`: sharp editorial display, best used sparingly.
- `Bricolage Grotesque`: warm expressive grotesque for creative/AI/consumer.
- `Manrope`: calm geometric UI/body face.
- `Geist`: precise technical sans and UI face.
- `IBM Plex Sans`: enterprise, operational, data-heavy UI.
- `Source Sans 3`: neutral readable UI/body.
- `Nunito Sans`: friendly body for creator/consumer surfaces.
- `JetBrains Mono`: code, logs, devtool proof.
- `IBM Plex Mono`: operational/data mono.
- `Geist Mono`: technical product mono.

### Paid/License-Required Targets

Use only when the license exists or the user approves:

- `Sohne`: polished dev/product UI.
- `Sohne Mono`: premium technical labels/logs.
- `PP Neue Montreal`: Swiss product body/UI.
- `PP Editorial New`: editorial display.
- `GT America`: broad premium product UI.
- `GT Sectra`: editorial/luxury display.
- `ABC Diatype`: industrial/product UI.
- `Authentic Sans`: raw/human web-native tone.

## Loading Plan

Choose the smallest loading plan that supports the design:

- Native/system: no web font. Use for native apps, mobile task flows, high-trust controls, or performance-first prototypes.
- One family variable: use when one family can cover display/body or body/data with weight/width axes.
- Two families: display + body/UI for most high-craft web pages.
- Two plus mono: use only when code, logs, IDs, timestamps, prices, or instrumentation are visible.
- Subset display: for hero-only display faces, subset when possible or use a narrow `text=` request/provider equivalent.
- Preload only critical fonts: preload above-the-fold body or display font only when it is genuinely needed early.

Rules:

- Use `font-display: swap` unless a project has a specific reason not to.
- Match fallback metrics closely enough to avoid jarring layout shift.
- Avoid loading unused italics and weights.
- Self-host when the project supports caching, subsetting, and license constraints.
- Test that important text renders before custom fonts finish loading.

## Variable Font Rules

Variable fonts are useful when:

- one file replaces several weights/styles
- optical size supports display vs text
- width/weight supports a type-as-hero concept
- grade/weight supports hover emphasis without layout shifts

Avoid variable axes when:

- body text would animate
- the font file is larger than needed static cuts
- the UI needs platform-native scaling
- the axis effect is invisible at the sizes used

Motion rule: animate variable axes only for display, logos, posters, or small interactive moments. Do not animate legal, pricing, warnings, logs, tables, or long body copy.

## QA Checks

Before shipping:

- Hero line breaks are designed on desktop, tablet, and mobile.
- Long labels, buttons, file names, IDs, prices, and localized strings fit.
- Tables/prices use tabular figures when compared.
- Body text remains readable at mobile width.
- Fallback font does not cause severe layout shift.
- Font loading does not hide text.
- Important UI text is real text, not baked into images/video/Rive/Lottie.
- No more than two type families plus mono.
- The rejected font is named, especially when avoiding Inter, Space Grotesk, Poppins, generic Roboto, or untouched `system-ui`.

## Source Anchors

- web.dev recommends loading fonts early, limiting font usage, using system/variable fonts when appropriate, and avoiding excessive preloads: https://web.dev/articles/font-best-practices
- web.dev documents preload, `font-display`, `unicode-range`, and subsetting as webfont loading controls: https://web.dev/articles/optimize-webfont-loading
- MDN documents `font-display` as the descriptor that controls how a font renders while downloading: https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/%40font-face/font-display
- MDN describes variable fonts as a way to include many variations of a typeface in a single file instead of separate files for every style: https://developer.mozilla.org/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
- Google Fonts documents variable font production and axis guidance: https://googlefonts.github.io/gf-guide/variable.html
