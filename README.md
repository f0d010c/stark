# stark

Anti-slop UI generator for Claude Code. Asks which track + direction first, then ships distinctive design — never template clones.

## Why this exists

Anthropic's official `frontend-design` skill is web-only. Every other AI design tool (v0, Bolt, Lovable, Magic Patterns, Subframe) defaults to "web everywhere" — which is wrong on iOS, Windows, Android. Flutter apps feel off on every platform. Material widgets on iOS scream "imported."

`stark` covers all four desktop tracks **and** all five mobile/desktop hybrids — Native, Branded Native, Tauri 2, Electron, React Native, Flutter, Compose Multiplatform — and **always asks the user which one before code**.

For web, picks one of six aesthetic directions before code: editorial Swiss / tactile brutalism / type-as-hero / glow + grain / industrial monospace / active bento. Each has its own typography, palette, motion language, copy voice, layout grammar, reference apps, and ban list.

## Install

```
/plugin marketplace add f0d010c/stark
/plugin install stark@stark
```

Verify:

```
/plugin list
```

## Use

Slash commands:

```
/stark web      Build editorial site for indie watch maker
/stark windows  Music player branded native
/stark apple    iOS 26 settings screen with Liquid Glass
/stark android  Compose app for tracking workouts
/stark auto     Pomodoro timer

/stark-audit src/components/Hero.tsx
/stark-translate apple windows path/to/Settings.swift
```

Or natural language — skills auto-trigger on UI requests:

```
Build me an Awwwards-tier landing page for a type foundry
Make a Win11 app with Mica backdrop
SwiftUI iOS 26 settings with Liquid Glass
Jetpack Compose music app with Material 3 Expressive
```

## Core principle

**No defaults. Ask first.**

Most AI design tools default to React + Tailwind + shadcn = same purple-gradient generic SaaS look on every platform. `stark` refuses that path. For each app it asks:

1. Which platform / track? (native, branded, Tauri, Electron, RN, Flutter)
2. Which aesthetic direction? (web only — editorial, brutalist, type-as-hero, glow, mono, bento)
3. Which stack? (framework, motion library, smooth scroll yes/no)

Then ships output that fits the answer, with platform-correct ban lists enforced.

## What's in here

```
stark/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── skills/
│   ├── design-router/         platform dispatcher
│   ├── web-design/            6 directions (editorial / brutalist / type-as-hero / glow / mono / bento)
│   ├── windows-design/        4 tracks (system WinUI / branded WinUI / Tauri 2 / Electron)
│   ├── apple-design/          5 tracks (SwiftUI / RN / Flutter / Tauri / Electron desktop)
│   ├── android-design/        5 tracks (Compose / RN / Flutter / CMP)
│   ├── cross-platform-design/ Tauri 2, CMP, RN, Flutter, Uno — with fidelity warnings
│   └── design-tokens/         DTCG W3C tokens, multi-platform export
├── references/
│   ├── design-philosophy.md         the thesis
│   ├── branded-fluent.md            WinUI 3 + custom identity (no Settings-clone look)
│   ├── web-bans.md                  anti-slop list (web)
│   ├── web-fonts.md                 curated type pairs
│   ├── web-motion.md                motion library + technique inventory
│   ├── web-copy-voice.md            sentence patterns + AI-slop phrase ban list
│   ├── web-layouts.md               10 layout patterns (Hero+Rail, Manifesto+Specs, etc.)
│   ├── web-svg-illustration.md      no-image asset generation
│   ├── web-direction-editorial.md   Swiss revival full implementation
│   ├── web-direction-brutalist.md   tactile brutalism
│   ├── web-direction-type-as-hero.md  Awwwards mega-type
│   ├── web-direction-glow-grain.md  atmospheric dark
│   ├── web-direction-industrial-mono.md  terminal/dev-tool
│   ├── web-direction-active-bento.md  interactive tiles
│   ├── web-patterns/                17 copy-paste pattern files
│   │                                  (curtain, cursor, magnetic, scroll-pin,
│   │                                  view-transitions, stagger, var-font,
│   │                                  marquee, parallax, 3d-tilt, sticky-markers,
│   │                                  scroll-driven-css, lenis, asymmetric-grid,
│   │                                  glyph-cycle, connected-animation, mesh-gradient)
│   ├── fluent-design.md             Mica, Acrylic, Segoe UI Variable, ThemeResource
│   ├── liquid-glass.md              .glassEffect, GlassEffectContainer
│   ├── material3-expressive.md      springs, shape morph, wavy progress
│   ├── apple-hig.md                 HIG quick reference
│   └── awwwards-ceiling.md          web quality bar refs (grouped by direction)
├── assets/
│   ├── tokens/                      Fluent 2, M3 Expressive, Apple system,
│   │                                awwwards-editorial, awwwards-brutalist (DTCG)
│   └── font-pairs.md
├── scripts/
│   ├── detect_platform.py           deterministic router fallback
│   └── token_export.py              DTCG → Tailwind / SwiftUI / Compose / WinUI
├── commands/
│   ├── stark.md                     /stark
│   ├── stark-audit.md               /stark-audit
│   └── stark-translate.md           /stark-translate
├── examples/
│   ├── apple-music-settings/        iOS 26 SwiftUI Settings (Liquid Glass)
│   │   ├── SettingsView.swift       runs in Xcode 26 on macOS
│   │   └── preview/                 HTML/CSS approximation for browser preview
│   └── windows-music-settings/      Resonance — same music app in 3 stacks
│       ├── Resonance.Windows/       WinUI 3 (system-like + branded variants)
│       │   ├── Views/, ViewModels/, Models/, Services/, Controls/
│       │   ├── Assets/Fonts/        Newsreader (Google Fonts, OFL)
│       │   └── Resonance.Windows.csproj
│       └── Resonance.Web/           React + Tailwind v4 + Motion via Tauri 2 + Electron
│           ├── src/                 components, pages, store, data
│           ├── electron/main.cjs    Electron shell
│           └── src-tauri/           Tauri 2 shell (Rust backend)
└── evals/
    ├── evals.json                   20 train + 20 validation prompts
    └── README.md                    eval methodology
```

## Differentiation vs `frontend-design`

| | `frontend-design` (official) | `stark` (this) |
|---|---|---|
| Web | Yes | Yes (Tailwind v4, Motion, View Transitions, scroll-driven CSS, GSAP) |
| Web aesthetic directions | Implied (one) | 6 explicit, asks user before code |
| Windows | No | WinUI 3 strict / branded / Tauri / Electron |
| Apple | No | SwiftUI strict / branded / RN / Flutter / Tauri / Electron |
| Android | No | Compose strict / branded / RN / Flutter / CMP |
| Asks before defaulting | No | Yes (mandatory) |
| Per-platform anti-slop bans | No | Yes (5 ban lists) |
| Per-direction anti-slop bans (web) | No | Yes (6 ban lists) |
| Code pattern library | No | 17 copy-paste patterns |
| Copy voice guide | No | Yes (per-direction sentence patterns + slop phrase ban list) |
| Design tokens (DTCG) | No | Yes (5 reference bundles) |
| Branded native technique | N/A | Yes (`references/branded-fluent.md`) |
| Working examples | None | iOS SwiftUI + Windows WinUI + Web (Tauri + Electron) |
| Currency | 2024 baseline | May 2026 (Liquid Glass, M3E, Tailwind v4, WinAppSDK 1.8) |
| Plugin (skills + commands + scripts + evals) | Skill-only | Full plugin |

## Philosophy

Read `references/design-philosophy.md` for the full thesis. Three principles:

1. **No defaults — ask first.** Pick branded vs system-like vs full-bespoke per app. Pick aesthetic direction per web project.
2. **Commit to a direction.** Bold maximalism or refined minimalism, never the middle. The middle is where AI slop lives.
3. **Currency matters.** Material 3 ≠ Material 3 Expressive; iOS 17 materials ≠ Liquid Glass; Tailwind v3 ≠ Tailwind v4. Override training-data drift.

## License

Apache 2.0 — see `LICENSE` and `NOTICE`.

Distribution and reuse permitted under the License. Attribution required (preserve `NOTICE` file in any redistribution). Patent grant included. Trade names and trademarks not licensed.

## Sources

Built on research May 2026 — Awwwards SOTY 2025, Microsoft Fluent 2 + WinAppSDK 1.8, Apple WWDC25/26 (Liquid Glass), Google I/O 2025 (Material 3 Expressive), Anthropic skill-creator engineering guidance. See per-reference docs for citations.
