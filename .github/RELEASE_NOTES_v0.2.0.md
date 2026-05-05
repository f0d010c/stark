# v0.2.0 — branded fluent + multi-track skills + 17-pattern web library

First public release. Plugin verified end-to-end.

## What's in here

### Skills

- `web-design` — 6 aesthetic directions (editorial Swiss / tactile brutalism / type-as-hero / glow + grain / industrial monospace / active bento). Asks user before code.
- `windows-design` — 4 tracks (system-like WinUI 3 / branded WinUI 3 / Tauri 2 / Electron). Asks track first.
- `apple-design` — 5 tracks (system SwiftUI / branded SwiftUI / React Native / Flutter / Tauri+Electron desktop). Asks track first.
- `android-design` — 5 tracks (system Compose / branded Compose / React Native / Flutter / Compose Multiplatform). Asks track first.
- `cross-platform-design`, `design-tokens`, `design-router`

### References

- 6 per-direction web reference files — typography scale, palette, motion language, copy voice, reference apps, direction-specific bans
- 17 copy-paste pattern files in `references/web-patterns/` — page-load curtain, custom cursor, magnetic CTA, scroll-pinned section, View Transitions, letter stagger, variable-font hover, marquee, parallax layers, 3D tilt card, sticky § markers, native scroll-driven CSS, Lenis smooth scroll, asymmetric grid, glyph cycling, connected animation, mesh gradient
- `branded-fluent.md` — full method for native chrome + bespoke identity (no "Settings clone" look)
- `web-layouts.md`, `web-copy-voice.md`, `web-svg-illustration.md`
- 5 DTCG token bundles (Fluent 2, Material 3 Expressive, Apple system, awwwards-editorial, awwwards-brutalist)

### Examples

- `apple-music-settings/` — iOS 26 SwiftUI Settings with Liquid Glass
- `windows-music-settings/Resonance.Windows/` — WinUI 3 (system-like + branded variants, music player)
- `windows-music-settings/Resonance.Web/` — same React UI shipped via both Tauri 2 and Electron

### Slash commands

- `/stark <platform> <prompt>` — main entry
- `/stark-audit <file>` — audit code against direction-specific ban list
- `/stark-translate <from> <to> <file>` — translate UI between platforms idiomatically

### Eval suite

40 prompts (20 train + 20 validation) testing skill trigger rate.

## Install

```
/plugin marketplace add https://github.com/f0d010c/stark.git
/plugin install stark@stark
/reload-plugins
```

## Sample output ceiling

A single `/stark web Docs hub for open-source database, railway.com / fly.io tier` prompt produces a full Next.js + Tailwind v4 + Motion site with:
- Mono-driven hero
- Live `tail -f` terminal mockup
- Real status strip (`build passing | bench 1.2B rows/s | uptime 99.998%`)
- 12px microheader, mono caps eyebrow, system stats indicator

No purple gradient. No "Built for modern teams." No Inter.

## License

Apache 2.0 — `LICENSE` + `NOTICE`. Attribution required, patent grant included.

## Differentiation

vs Anthropic's official `frontend-design` skill (web-only, one direction, no track question) — `stark` covers 4 platforms × multi-tracks × 6 web directions × 17 patterns and asks first.

## Breaking changes

None. First public release.

## Known issues

- Plugin installer may need explicit HTTPS marketplace URL on systems where git defaults to SSH — use `/plugin marketplace add https://github.com/f0d010c/stark.git` not the `f0d010c/stark` shorthand if SSH host keys aren't configured.
