---
description: Generate a UI for the specified platform — web, windows, apple, android, or cross-platform. Routes to matching skill which then asks the user which track / aesthetic direction before generating code.
argument-hint: "[platform] <description>"
---

# /stark

Generate a UI for the platform specified by `$1` and the description in the rest of the arguments.

`$1` must be one of: `web`, `windows`, `apple`, `ios`, `macos`, `android`, `cross-platform`, or `auto` (let the router pick).

Then read the matching SKILL.md from `skills/`:
- `web` → `skills/web-design/SKILL.md` — asks aesthetic direction + stack first
- `windows` → `skills/windows-design/SKILL.md` — asks track first (system / branded / Tauri / Electron)
- `apple` / `ios` / `macos` → `skills/apple-design/SKILL.md` — asks track first (SwiftUI / RN / Flutter / Tauri / Electron)
- `android` → `skills/android-design/SKILL.md` — asks track first (Compose / RN / Flutter / CMP)
- `cross-platform` → `skills/cross-platform-design/SKILL.md`
- `auto` → `skills/design-router/SKILL.md`

Follow that SKILL.md's full process. **Do not skip the upfront questions** — ask track + direction before any code. State the chosen track/direction at the top of the response. Then implement.

If the user did not specify enough context (audience, tone, constraints), ask one clarifying question before generating. Do not assume defaults silently.
