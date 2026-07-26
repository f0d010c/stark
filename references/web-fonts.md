# Web Typography Systems

Use this before visual styling when Stark is building or auditing a web surface. Typography is part of the product strategy: it controls hierarchy, tone, scan speed, trust, and perceived craft.

For cross-platform, native, dense app, or branded-native decisions, read `ui-patterns/typography-systems.md` first. For font job/class decisions and concrete stack selection, read `ui-patterns/font-selection-matrix.md`. For concrete web font choices after the strategy is chosen, read `ui-patterns/type-recipes.md`.

Do not pick a font because it is trendy. Pick a type system because it fits the surface, user mode, density, and product object.

## Typography brief

Before code, state:

```md
Typography system
- Surface: campaign / product proof / dashboard / docs / editor / checkout / agent run
- Tone: editorial / technical / luxury / playful / industrial / operational / cinematic
- Display face: ...
- Body/UI face: ...
- Mono/labels: ...
- Why it fits: ...
- Scale: hero, h1, h2, body, caption, label, button
- Number/data rule: tabular figures / mono / compact labels
- Motion rule: none / variable axis / stagger / scroll tied
- Banned fallback: ...
```

## Surface matrix

| Surface | Display | Body/UI | Mono/Labels | Use When | Avoid |
|---|---|---|---|---|---|
| Editorial campaign | Character serif, high-contrast serif, or expressive grotesque | Quiet grotesque or text serif | Small mono only for metadata | Reading, brand story, manifesto, portfolio | Generic SaaS grotesque, too many weights |
| Cinematic product launch | Wide/soft grotesque, restrained serif, or custom display | Neutral grotesque | Mono for proof labels and timing | Hero object/media carries drama | Overly playful display, tiny low-contrast labels |
| Developer tool | Precise grotesque, mono-led display, or technical serif | Humanist/geometric sans | Real mono for code, CLI, coordinates | Dev products, SDKs, CLIs | All-mono body unless concept demands it |
| Operational dashboard | Legible UI sans | Same family or close companion | Mono/tabular for metrics and IDs | Repeated work, dense rows, status scanning | Display fonts in tables, decorative labels |
| Editor/canvas | Quiet sans or tool-like grotesque | Same UI sans | Mono for dimensions, layers, code, time | Tools where canvas must dominate | Brand display competing with canvas |
| Docs/API | Readable grotesque or editorial serif for headings | Highly readable body sans/serif | Code mono | Long reading plus snippets | Fancy display in code-heavy content |
| Checkout/pricing | Trustworthy grotesque or warm serif | Highly readable sans | Tabular figures for prices | Risk, payment, plan comparison | Experimental type near price/legal copy |
| Agent run/devops | Industrial grotesque or mono-led display | Sans for explanations | Mono for logs, tool calls, statuses | Timelines, logs, artifacts | Decorative type that slows scan |
| Playful consumer | Round/soft display | Calm readable sans | Minimal mono | Consumer products, creator tools | Cute body text that hurts readability |
| Luxury/portfolio | High-contrast serif or refined grotesque | Text serif or warm grotesque | Sparse metadata | Premium feel, sparse copy | Too many small caps, weak contrast |

## Curated pairs

Use licensed faces only when available in the project or user approves. Otherwise use the free/system-safe alternatives.

| Direction | Licensed Pair | Free / Easier Pair | Notes |
|---|---|---|---|
| Editorial Swiss | PP Editorial New + PP Neue Montreal | Newsreader + Geist | Use restrained body, strong line breaks |
| Luxury editorial | GT Sectra + GT America | Fraunces + Manrope | Keep labels sparse and precise |
| Technical product | Sohne + Sohne Mono | Geist + Geist Mono | Good for devtools and product proof |
| Industrial mono | ABC Diatype + ABC Diatype Mono | IBM Plex Sans + IBM Plex Mono | Use mono for structure, not long prose |
| Indie SaaS | Cabinet Grotesk + Satoshi | Bricolage Grotesque + Manrope | Friendly without becoming generic |
| Type-as-hero | Migra / Reckless / NaN Holo + neutral sans | Fraunces / Bricolage + Geist | Type is the visual object |
| Playful consumer | Reckless / Paradigm + Satoshi | Bricolage + Nunito Sans | Keep body calm |
| Data/agent | Neue Haas Grotesk + JetBrains Mono | Manrope + JetBrains Mono | Tabular data and logs need stability |

## Free font stacks

Use these when you cannot assume paid fonts:

| Need | Stack |
|---|---|
| Premium editorial | `Newsreader`, `Geist`, `Geist Mono` |
| Cinematic product | `Bricolage Grotesque`, `Manrope`, `JetBrains Mono` |
| Technical/devtool | `Geist`, `Geist Mono` |
| Dense operational | `IBM Plex Sans`, `IBM Plex Mono` |
| Warm SaaS | `Manrope`, `JetBrains Mono` |
| Expressive type hero | `Fraunces`, `Inter Tight`, `JetBrains Mono` |
| Playful but usable | `Bricolage Grotesque`, `Nunito Sans`, `JetBrains Mono` |

`Geist` is acceptable as a body/UI face. Do not use it as the only personality on every design.

## Scale rules

Set type deliberately instead of relying on default Tailwind/browser scales.

| Role | Guidance |
|---|---|
| Hero display | 56-140px desktop; line-height 0.84-1.02; test mobile line breaks |
| Page h1 | 40-72px desktop; 32-48px mobile |
| Section h2 | 28-56px depending on density |
| Body | 16-20px marketing; 14-16px apps; line-height 1.4-1.65 |
| Dense table/list | 12-14px; use weight/spacing, not tiny contrast |
| Labels/captions | 10-13px; uppercase only with enough spacing and contrast |
| Buttons | 13-15px; never browser default |
| Numbers | tabular figures or mono when comparing |

## Motion and type

Use type motion only when it supports the concept:

- Letter/word stagger for first load or section reveal.
- Variable-axis hover for type-as-hero, editorial, or experimental brands.
- Scroll-tied headline morph only when the headline is the object.
- Scramble/split text only for technical/industrial concepts.
- Do not animate long body text, prices, legal copy, warnings, or dense table cells.

## Quality gates

- Display, body, labels, buttons, and data each have intentional styling.
- Body text remains readable on mobile.
- Long words and labels fit their containers.
- Line breaks are designed, especially hero headings.
- No more than two type families plus mono.
- No generic primary face: Inter, Roboto, Arial, Space Grotesk, Poppins, or system-ui as the personality.
- No untouched Tailwind/browser type scale.
- No fake luxury: high-contrast serif plus weak spacing and low contrast.
- No fake technical: all-mono body copy with poor readability.
- Self-host fonts when practical; use `font-display: swap`; subset when project supports it.

## CSS starter

```css
:root {
  --font-display: "Newsreader", Georgia, serif;
  --font-ui: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 8.5rem);
  line-height: 0.9;
  letter-spacing: 0;
}

body {
  font-family: var(--font-ui);
  font-size: 16px;
  line-height: 1.55;
}

.label,
.metric,
code {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}
```
