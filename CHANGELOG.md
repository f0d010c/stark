# Changelog

## 0.4.5 - 2026-05-13 - security text cleanup

- Removed stale `examples/` references from `SECURITY.md` after the proof projects moved to screenshots.

## 0.4.4 - 2026-05-13 - screenshot proof gallery

- Removed full generated example projects from the repo to keep Stark focused as a plugin.
- Added organized screenshot proof assets under `assets/screenshots/<project>/`.
- Updated README examples section into a screenshot gallery.
- Captured fresh desktop and mobile screenshots for `operator-console` and `builddesk`.

## 0.4.3 - 2026-05-13 - lean marketplace bundle

- Trimmed the Codex plugin include list to runtime resources only.
- Kept proof examples source-repo-only so marketplace installs stay smaller.
- Moved the Playwright screenshot helper to local-only tooling by ignoring `scripts/screenshot-tool/`.
- Clarified README examples wording so bundled plugin installs do not imply demo projects are included.

## 0.4.2 - 2026-05-13 - packaging helper hardening

- Added manifest include metadata for marketplace mirrors.
- Guarded token alias resolution against circular references.
- Preserved whole-token references during export.
- Switched generated SwiftUI and Compose token names to platform-friendly camelCase.
- Replaced fixed waits in local screenshot helpers with state-based waits.

## 0.4.1 - 2026-05-13 - neutral plugin naming

- Renamed the Codex plugin manifest from `stark-codex` to `stark` so marketplace installs match the repo and multi-agent branding.
- Removed Codex-specific wording from the Codex manifest summary while keeping Codex compatibility.

## 0.4.0 - 2026-05-13 - shipped-reference analysis + product patterns

- Added `references/ui-patterns/reference-analysis.md`, a framework for learning from shipped UI/UX references without copying visuals, copy, brand identity, or proprietary screens.
- Added `commands/stark-reference.md` so Codex/agents can explicitly produce a reference extraction brief before designing from Mobbin, Figma, screenshots, docs, or shipped products.
- Added web product patterns for command palettes, inspector split panes, annotated product proof, before/after sliders, timeline/run replay, permission/trust matrices, empty state galleries, pricing comparison tables, docs/API references, and keyboard shortcut overlays.
- Wired reference extraction into the Stark root skill, web-design skill, UI decision brief, UX references, asset planning, audit command, layout catalog, and smoke examples.
- Tightened asset guidance to prefer user-provided, licensed, generated, or code-rendered imagery over placeholder services.

## 0.2.0 — 2026-05-05 — branded fluent + multi-track skills

- Renamed: `idiom-design` → `stark`
- All platform skills now **ask user which track first** (no defaults):
  - `windows-design`: 4 tracks (system-like WinUI / branded WinUI / Tauri 2 / Electron)
  - `apple-design`: 5 tracks (SwiftUI strict / SwiftUI branded / RN / Flutter / Tauri+Electron desktop)
  - `android-design`: 5 tracks (Compose strict / Compose branded / RN / Flutter / Compose Multiplatform)
- Added `references/branded-fluent.md` — full method for native chrome + bespoke identity (custom accent override, embedded display fonts, hero atmospheres, custom card chrome, custom NavigationView selection indicator, ConnectedAnimation, magazine layouts)
- Added generated Windows proof projects for React/Tauri/Electron and WinUI 3 (later replaced by screenshot-only proof assets in 0.4.4).

## 0.1.0 — 2026-05-04 — initial release

- 7 skills: design-router, web-design, windows-design, apple-design, android-design, cross-platform-design, design-tokens
- 9 reference docs covering design philosophy, web (bans/fonts/motion/awwwards), Fluent 2, Liquid Glass, Material 3 Expressive, Apple HIG
- 5 token bundles (DTCG W3C format): Fluent 2, Material 3 Expressive, Apple system, awwwards-editorial, awwwards-brutalist
- 2 scripts: deterministic platform detector + DTCG → Tailwind/SwiftUI/Compose/WinUI exporter
- 3 slash commands: /design, /design-audit, /design-translate
- 40-prompt eval suite (20 train + 20 validation)
- Currency: Tailwind v4, Motion (motion.dev), View Transitions API, WinAppSDK 1.8, SwiftUI 7 + Liquid Glass (iOS 26 / macOS 26), Compose BOM 2026.04 + Material 3 Expressive
