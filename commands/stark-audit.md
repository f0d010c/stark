---
description: Audit existing UI code or a screenshot against the matching platform's anti-slop ban list and idiomatic checklist. Reports specific violations with line numbers and proposed fixes.
argument-hint: "[file or screenshot path]"
---

# /stark-audit

Audit the file or screenshot at `$1` against the appropriate platform's standards from this plugin.

Steps:

1. **Detect platform** from file extension or screenshot context:
   - `.tsx`/`.jsx`/`.html`/`.svelte`/`.vue`/`.astro` → web
   - `.xaml`/`.cs` (with WinUI/WPF context) → windows
   - `.swift` → apple
   - `.kt`/`.kts` → android
   - Screenshot → infer from chrome (title bar style, icons, materials)

2. **Load the matching ban list**:
   - web → `references/web-bans.md`
   - windows → `skills/windows-design/SKILL.md` step 6
   - apple → `skills/apple-design/SKILL.md` step 6
   - android → `skills/android-design/SKILL.md` step 6

3. **Walk the file** and report violations as a table:

   | Line | Violation | Severity | Fix |
   |---|---|---|---|
   | 42 | `bg-gradient-to-r from-purple-500 to-pink-500` (banned web slop) | high | Pick a real direction; see web-fonts.md |
   | 88 | `font-family: 'Inter'` (banned default) | high | Replace with a curated pair from `assets/font-pairs.md` |

4. **Categorize** violations:
   - **High** — definitive AI slop tells
   - **Medium** — generic patterns that hurt distinctiveness
   - **Low** — currency issues (using v3 patterns when v4 exists, etc.)

5. **Recommend a fix path**: one paragraph, concrete steps, no hedging.

Do not just list violations. Always include the fix. If the entire approach needs rework, say so plainly.
