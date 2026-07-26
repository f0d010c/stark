# Font pairings quick reference

Use this as a compact lookup after `references/ui-patterns/typography-systems.md` chooses the type strategy and `references/ui-patterns/font-selection-matrix.md` chooses the font job/class. For role, loading, numeric, and QA rules, pair this with `references/ui-patterns/type-recipes.md`.

## Web paid licenses

| # | Display | Body | Mono | Source |
|---|---|---|---|---|
| 1 | PP Editorial New | PP Neue Montreal | PP Neue Montreal Mono | Pangram Pangram |
| 2 | PP Editorial Old | PP Formula | PP Formula Mono | Pangram Pangram |
| 3 | Sohne | Tiempos Text | Sohne Mono | Klim |
| 4 | GT Sectra | GT America | GT America Mono | Grilli Type |
| 5 | ABC Diatype | ABC Diatype | ABC Diatype Mono | Dinamo |
| 6 | New Edge 666 | Sohne | Sohne Mono | Newglyph + Klim |
| 7 | Reckless Neue | Sohne | Sohne Mono | Displaay + Klim |
| 8 | Authentic Sans | Authentic Sans | Authentic Mono | Authentic / Velvetyne |

## Web free / easier

| # | Display | Body | Mono | Best for |
|---|---|---|---|---|
| 1 | Bricolage Grotesque | Manrope | JetBrains Mono | warm SaaS, creator tools |
| 2 | Fraunces | Manrope | JetBrains Mono | luxury/editorial product |
| 3 | Instrument Serif | Geist | Geist Mono | editorial campaign |
| 4 | Newsreader | Geist | Geist Mono | docs/editorial hybrid |
| 5 | IBM Plex Sans | IBM Plex Sans | IBM Plex Mono | dense ops, data, enterprise |
| 6 | Geist | Geist | Geist Mono | technical product, devtools |
| 7 | Bricolage Grotesque | Nunito Sans | JetBrains Mono | playful consumer |

## Apple system

| Surface | Font |
|---|---|
| Default UI | SF Pro via text styles |
| Compact/watch contexts | SF Compact |
| Rounded/branded soft UI | SF Pro Rounded |
| Code / monospace | SF Mono |
| Editorial / serif | New York |

Use `.font(.body)`, `.font(.headline)`, etc. for normal UI. Avoid hard-coded points that break Dynamic Type.

## Windows system

| Surface | Font |
|---|---|
| Windows UI | Segoe UI Variable |
| Code / terminal | Cascadia Code / Cascadia Mono |
| Iconography | Segoe Fluent Icons |

Use Fluent type ramp and native control density before custom display type.

## Android system

| Surface | Font |
|---|---|
| Default body/UI | Roboto / Roboto Flex |
| Code / terminal | Roboto Mono / JetBrains Mono |
| Iconography | Material Symbols |

Use Material 3 type scale. Brand display type can appear in content surfaces, not by breaking core controls.

## Banned defaults unless justified

- Inter as the primary personality.
- Space Grotesk as the default AI-looking display face.
- Roboto on iOS.
- SF Pro on Android.
- Segoe UI on generic web pages.
- Default Tailwind/browser font stack untouched.
- FontAwesome where platform symbols are available.
