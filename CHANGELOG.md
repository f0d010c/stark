# Changelog

## 0.2.0 — 2026-05-05 — branded fluent + multi-track skills

- Renamed: `idiom-design` → `stark`
- All platform skills now **ask user which track first** (no defaults):
  - `windows-design`: 4 tracks (system-like WinUI / branded WinUI / Tauri 2 / Electron)
  - `apple-design`: 5 tracks (SwiftUI strict / SwiftUI branded / RN / Flutter / Tauri+Electron desktop)
  - `android-design`: 5 tracks (Compose strict / Compose branded / RN / Flutter / Compose Multiplatform)
- Added `references/branded-fluent.md` — full method for native chrome + bespoke identity (custom accent override, embedded display fonts, hero atmospheres, custom card chrome, custom NavigationView selection indicator, ConnectedAnimation, magazine layouts)
- Added `examples/windows-music-settings/Resonance.Web/` — same React UI shipped via **both Tauri 2 and Electron** as proof of "non-native branded" track
- Added `examples/windows-music-settings/Resonance.Windows/` — same product shipped via WinUI 3 (system-like + branded variants) showing axis differences

## 0.1.0 — 2026-05-04 — initial release

- 7 skills: design-router, web-design, windows-design, apple-design, android-design, cross-platform-design, design-tokens
- 9 reference docs covering design philosophy, web (bans/fonts/motion/awwwards), Fluent 2, Liquid Glass, Material 3 Expressive, Apple HIG
- 5 token bundles (DTCG W3C format): Fluent 2, Material 3 Expressive, Apple system, awwwards-editorial, awwwards-brutalist
- 2 scripts: deterministic platform detector + DTCG → Tailwind/SwiftUI/Compose/WinUI exporter
- 3 slash commands: /design, /design-audit, /design-translate
- 40-prompt eval suite (20 train + 20 validation)
- Currency: Tailwind v4, Motion (motion.dev), View Transitions API, WinAppSDK 1.8, SwiftUI 7 + Liquid Glass (iOS 26 / macOS 26), Compose BOM 2026.04 + Material 3 Expressive
