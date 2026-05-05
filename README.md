# stark

Anti-slop UI generator for Claude Code. Asks which track first, then ships distinctive design — never template clones.

## Why this exists

Anthropic's official `frontend-design` skill is web-only. Every other AI design tool (v0, Bolt, Lovable, Magic Patterns, Subframe) defaults to "web everywhere" — wrong on iOS, Windows, Android. Flutter apps feel off on every platform. Material widgets on iOS scream "imported."

`stark` covers all four desktop tracks **and** all five mobile/desktop track hybrids — Native, Branded Native, Tauri 2, Electron, React Native, Flutter, Compose Multiplatform — and **always asks the user which one before code**.

Each track has its own anti-slop ban list, its own typography curation, its own reference apps. None default to web aesthetics.

## What's in here

```
stark/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── skills/
│   ├── design-router/         platform dispatcher
│   ├── web-design/            React 19 + Tailwind v4 + Motion
│   ├── windows-design/        4 tracks: WinUI 3 strict / WinUI 3 branded / Tauri 2 / Electron
│   ├── apple-design/          5 tracks: SwiftUI strict / SwiftUI branded / RN / Flutter / Tauri+Electron
│   ├── android-design/        5 tracks: Compose strict / Compose branded / RN / Flutter / CMP
│   ├── cross-platform-design/ Tauri 2, CMP, RN, Flutter, Uno — with fidelity warnings
│   └── design-tokens/         DTCG W3C tokens, multi-platform export
├── references/
│   ├── design-philosophy.md   the thesis
│   ├── branded-fluent.md      WinUI 3 + custom identity (no Settings-clone look)
│   ├── web-bans.md            anti-slop list (web)
│   ├── web-fonts.md           curated type pairs
│   ├── web-motion.md          motion.dev / GSAP / View Transitions API
│   ├── fluent-design.md       Mica, Acrylic, Segoe UI Variable, ThemeResource
│   ├── liquid-glass.md        .glassEffect, GlassEffectContainer, scrollEdgeEffectStyle
│   ├── material3-expressive.md  springs, shape morph, wavy progress, edge-to-edge
│   ├── apple-hig.md           HIG quick reference
│   └── awwwards-ceiling.md    web quality bar
├── assets/
│   ├── tokens/                Fluent 2, M3 Expressive, Apple system, awwwards-editorial, awwwards-brutalist
│   └── font-pairs.md
├── scripts/
│   ├── detect_platform.py     deterministic router fallback
│   └── token_export.py        DTCG → Tailwind / SwiftUI / Compose / WinUI
├── commands/
│   ├── design.md              /design
│   ├── design-audit.md        /design-audit
│   └── design-translate.md    /design-translate
├── examples/
│   ├── apple-music-settings/  iOS 26 SwiftUI Settings (Liquid Glass)
│   └── windows-music-settings/  Resonance — same music app in 3 stacks:
│       ├── Resonance.Windows/   WinUI 3 (system-like + branded versions)
│       └── Resonance.Web/       React + Tailwind + Motion shipped via Tauri 2 AND Electron
└── evals/
    ├── evals.json             20 train + 20 validation
    └── README.md              eval methodology
```

## Install

Once published:

```
/plugin marketplace add USER/stark
/plugin install stark@stark
```

Local dev:

```
/plugin add C:/Users/Elena/Desktop/stark
```

## Use

```
/design web Build a landing page for a fraud detection startup
/design apple SwiftUI settings screen with Liquid Glass
/design windows Win11 utility app shell with Mica
/design android Compose Material 3 Expressive checkout flow
/design auto Pomodoro timer for everyone

/design-audit src/components/Hero.tsx
/design-translate apple windows Settings.swift
```

The platform skills will **ask which track** before generating — system-like vs branded vs Tauri vs Electron vs RN vs Flutter — and route to the right reference docs.

## Core principle

**No defaults. Ask first.**

Most AI design tools default to React + Tailwind + shadcn = same purple-gradient generic SaaS look on every platform. `stark` refuses that path. For each app it asks:

1. Is this productivity (system-like) or consumer (branded)?
2. Is native quality essential, or is brand identity bigger?
3. What binary size / RAM / cross-platform reach matters?

Then ships output that fits the answer, with platform-correct ban lists enforced.

## Differentiation vs `frontend-design`

| | `frontend-design` (official) | `stark` (this) |
|---|---|---|
| Web | Yes | Yes (Tailwind v4, Motion, View Transitions) |
| Windows | No | WinUI 3 strict / branded / Tauri / Electron |
| Apple | No | SwiftUI strict / branded / RN / Flutter / Tauri / Electron |
| Android | No | Compose strict / branded / RN / Flutter / CMP |
| Asks before defaulting | No | Yes (mandatory) |
| Per-platform anti-slop bans | No | Yes (5 ban lists) |
| Design tokens (DTCG) | No | Yes |
| Branded native technique | N/A | Yes — `references/branded-fluent.md` covers full method |
| Currency | 2024 baseline | May 2026 (Liquid Glass, M3E, Tailwind v4, WinAppSDK 1.8) |
| Plugin (skills + commands + scripts + evals) | Skill-only | Plugin |

## Philosophy

Read `references/design-philosophy.md`. Three principles:

1. **No defaults — ask first.** Pick branded vs system-like vs full-bespoke per app.
2. **Commit to a direction.** Bold maximalism or refined minimalism, never the middle.
3. **Currency matters.** Material 3 ≠ Material 3 Expressive; iOS 17 materials ≠ Liquid Glass. Override training-data drift.

## License

MIT.

## Sources

Built on research May 2026 — Awwwards SOTY 2025, Microsoft Fluent 2 + WinAppSDK 1.8, Apple WWDC25/26 (Liquid Glass), Google I/O 2025 (Material 3 Expressive), Anthropic skill-creator engineering guidance.
