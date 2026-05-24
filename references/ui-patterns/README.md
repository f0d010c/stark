# UI pattern briefs

These briefs define visual and interaction quality, not product flow. Use them after the UX decision brief, or directly when the user asks mainly for visual design.

Good UI decisions are contextual:

- A CRM dashboard should be dense, stable, and scannable.
- A marketing page should be memorable, directed, and conversion-aware.
- A native settings screen should feel boring in the right way.
- An editor should protect the canvas and make controls discoverable.
- A desktop app should choose a real app archetype before reaching for the same sidebar, cards, and settings shell.
- An original app/page should choose a subject-specific concept, composition archetype, one weird move, and restraints before styling.

Use these briefs to choose visual density, hierarchy, component grammar, motion budget, type, materials, imagery, and state treatment before writing code.

For Windows, macOS, Tauri, Electron, Avalonia, Uno, and other desktop work, read `desktop-app-archetypes.md` before platform components. Choose the app shape first: command center, library, workbench, monitoring cockpit, tray/menu-bar utility, media/consumer, document/knowledge, or setup/preferences.

For original, distinctive, creative, memorable, high-craft, or non-generic work, read `originality-engine.md` before `creative-direction.md`. Choose the concept seed and composition first; then choose typography, materials, motion, and platform components.

Use `design-recipes.md` to turn product categories into concrete starting instincts, and use `anti-default-contrasts.md` whenever the layout becomes sidebar/cards/table, centered hero/three cards, chat/spinner/output, or another familiar generated skeleton.

Do not apply a visual style because it is fashionable. Pick it because it supports the product job, platform, and frequency of use.

For dense products, also decide responsive containment before code: tables, nav rows, toolbars, inspectors, and canvases need bounded scroll, wrapping, or a breakpoint-specific replacement. The page itself should not drift sideways.

When assets matter, add an asset plan before code. Choose whether the design needs icons, product screenshots, generated product mocks, typography, textures, reference UI patterns, brand assets, or GPT/Codex image generation. Pull only what supports the job and store attribution for external sources.

When shipped references matter, add a reference extraction brief before code. Extract structure, interaction, state, recovery, responsive, and asset lessons from real products; do not copy their visuals.
