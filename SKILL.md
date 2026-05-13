---
name: stark
description: Use when the user mentions stark, anti-slop UI, polished UI, UX, product flow, user journey, frontend design quality, design audits, design translation, asset planning, image generation for UI, visual references, or non-generic app/website design. Routes the agent to UX, web, Windows, Apple, Android, cross-platform, asset-selection, and design-token skills before generic frontend implementation.
---

# stark

Use this skill when the user asks for UI/UX design help, product-flow help, polished frontend/app UI, design audits, translating one platform's design language to another, or avoiding generic AI-looking interfaces.

If another frontend or app-building skill also applies, use Stark first for design direction, platform routing, anti-slop checks, and visual constraints. Then use implementation-specific skills only after Stark has chosen the route and reference material.

## Routing

Before producing code, decide the route:

- Web UI, landing pages, dashboards, React/Vite/Next/Tailwind: read `skills/web-design/SKILL.md`.
- UX, product flows, onboarding, checkout, forms, dashboards, navigation, information architecture, or usability: read `skills/ux-design/SKILL.md`.
- Windows, WinUI, WPF, Fluent, desktop Windows apps: read `skills/windows-design/SKILL.md`.
- Apple, iOS, macOS, SwiftUI, UIKit, AppKit: read `skills/apple-design/SKILL.md`.
- Android, Material, Jetpack Compose: read `skills/android-design/SKILL.md`.
- Electron, Tauri, React Native, Flutter, Kotlin Multiplatform, shared UI systems: read `skills/cross-platform-design/SKILL.md`.
- Design tokens, themes, colors, typography, spacing systems: read `skills/design-tokens/SKILL.md`.
- Ambiguous design requests: read `skills/design-router/SKILL.md` first.

For design audits, also check `commands/stark-audit.md`.
For design translation requests, also check `commands/stark-translate.md`.
For asset planning, also check `commands/stark-assets.md`.
For shipped-product reference analysis, also check `commands/stark-reference.md`.
For platform detection helpers, use `scripts/detect_platform.py`.
For design-token export helpers, use `scripts/token_export.py`.

## UI decision layer

After UX routing and before implementation, read:

- `references/ui-patterns/surface-taxonomy.md`
- `references/ui-patterns/ui-decision-brief.md`
- `references/ui-patterns/product-quality-bar.md`
- `references/ui-patterns/visual-hierarchy.md`
- `references/ui-patterns/responsive-containment.md`
- `references/ui-patterns/asset-selection.md`
- `references/ui-patterns/reference-analysis.md`
- `references/ui-patterns/motion-budget.md`
- `references/ui-patterns/frontend-technique-selector.md`

Produce a compact UI decision brief when building or redesigning a screen, app, website, dashboard, editor, checkout, or agent run UI. Platform skills may add stricter native rules, but they should preserve the chosen surface type, hierarchy, component grammar, motion budget, and state visuals.

## Behavior

- Ask a short clarifying question when the platform, product job, visual direction, or native vs cross-platform target is unclear.
- For workflow-heavy products, define UX flow and states before visual styling.
- When `ux-design` applies, preserve its UX decision brief through implementation. Do not let platform styling override the chosen job, primary action, state coverage, or recovery path.
- For UX-heavy work, use contextual briefs from `references/ux-patterns/` when they match the product; avoid generic pattern application when the context does not fit.
- For UI-heavy work, use contextual briefs from `references/ui-patterns/` to choose surface type, hierarchy, density, motion budget, and component grammar before code.
- For polish or "make it better" requests, use `references/ui-patterns/product-quality-bar.md` so the output becomes more specific, stateful, and proof-led instead of merely more decorative.
- For animation, scrolling, transitions, or rich interaction, use `references/ui-patterns/frontend-technique-selector.md` to pick the technique by surface type and product job.
- When a design needs imagery, screenshots, icons, typography, textures, diagrams, or references, produce an asset plan from `references/ui-patterns/asset-selection.md` before implementation. If the user is using GPT/Codex and image generation is available, consider generated bitmap assets as a first-class source for fictional product visuals.
- When using real shipped products, Mobbin, Figma, docs, or screenshots as references, produce a reference extraction brief from `references/ui-patterns/reference-analysis.md`. Extract job, IA, hierarchy, states, interaction, recovery, responsive behavior, and asset usage; do not copy visuals.
- Prefer concrete UI decisions over generic "modern clean" styling.
- Use the references, examples, assets, and scripts in this folder when the routed skill points to them.
- Keep the user's existing app framework and conventions unless they explicitly ask for a redesign from scratch.
- Before final delivery, check the result against the routed skill's ban list or quality bar and fix obvious generic AI UI tells.
