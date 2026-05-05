---
name: design-router
description: Detects which platform a UI/design request targets (web, Windows, iOS, macOS, Android, or cross-platform) and routes to the matching platform skill. Use when the user asks to build, design, mock up, scaffold, or improve any interface, screen, page, component, or app and the target platform is ambiguous or multi-target. TRIGGER on: "build a screen", "design a page", "make this UI", "create an app interface", "mockup", "prototype", "scaffold a frontend". SKIP when the request explicitly names one platform — let that platform skill trigger directly.
---

# design-router — platform dispatch

This skill is the entry point when a UI request is ambiguous. Goal: pick the right platform skill, do not over-eagerly route to web.

## Step 1 — Read the request for platform signals

Scan for explicit signals (in priority order):

| Signal in request | Route to |
|---|---|
| `.tsx` `.jsx` `.html` `.svelte` `.vue`, "Tailwind", "Next.js", "Astro", "shadcn", "landing page", "marketing site", "dashboard in React" | `web-design` |
| `.xaml` `.cs` (with `WinUI`/`UWP`/`WPF`), "Windows app", "Fluent", "Mica", "WinUI", "Win11", "Microsoft Store app", "PowerToys-style" | `windows-design` |
| `.swift` `.swiftui`, "SwiftUI", "iOS app", "iPadOS", "macOS", "Liquid Glass", "HIG", "SF Symbols", "App Store", "Tahoe" | `apple-design` |
| `.kt` `.kts`, "Compose", "Jetpack Compose", "Material 3", "Material You", "Pixel app", "Android app" | `android-design` |
| "Tauri", "Electron", "Flutter", "React Native", "Expo", "Compose Multiplatform", "CMP", "Uno Platform", "Avalonia", "MAUI" | `cross-platform-design` |
| "design tokens", "export tokens", "DTCG", "translate this design from X to Y" | `design-tokens` |

## Step 2 — When signals are absent

Ask one question, no more:

> "Which platform is this for? **(1) Web** — React/Tailwind/Astro **(2) Windows** — WinUI 3 / WPF **(3) iOS / macOS** — SwiftUI **(4) Android** — Jetpack Compose **(5) Cross-platform** — Tauri 2, Compose Multiplatform, React Native, Flutter. Or describe the audience and I'll pick."

Do not assume web. Web defaults are how the official `frontend-design` skill produces native-looking-wrong code.

## Step 3 — Multi-target requests

If the user wants the same product on multiple platforms (e.g. "iOS + Android + web"):
1. Ask which platform is **canonical** (where the design originates). Usually iOS or web.
2. Build the canonical version first.
3. Then translate per-platform via `cross-platform-design` or successive single-platform skills, **respecting each idiom**, not pixel-cloning.

Same product ≠ same UI. A Settings screen on iOS uses grouped Form, on Android uses LargeTopAppBar + LazyColumn, on Windows uses NavigationView + SettingsCard. Translate idiom, not pixels.

## Step 4 — Hand off

Once routed, that platform's SKILL.md takes over. State what platform you picked and why in one sentence, then proceed.

## Anti-patterns this skill exists to prevent

- Generating React/Tailwind when user wants a Windows app
- Pasting Inter on iOS where SF Pro belongs
- Reaching for Tauri/Electron when the user said "Windows app" (those are web-in-window — use WinUI 3 unless web stack is mandated)
- Defaulting to Material Design on Apple platforms

When uncertain, ask. One clarifying question is cheaper than 800 lines of wrong-platform code.
