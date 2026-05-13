# Contributing to stark

## Scope

`stark` is opinionated. PRs that broaden defaults, add "AI-friendly" softening, or default to web aesthetics on native platforms will be rejected. The plugin's purpose is to refuse the AI-slop middle.

This repository is dual-compatible:

- Codex uses `.codex-plugin/plugin.json` plus `skills/*/SKILL.md`.
- Claude Code compatibility is retained through `.claude-plugin/` and `commands/`.

PRs welcome for:

- Updated currency (e.g. when iOS 27 / Material 3.5 / Tailwind v5 ship, refresh references)
- New aesthetic directions for web (must come with full reference doc + ban list + reference apps)
- New code patterns (must include `web-patterns/<name>.md` with when-to-deploy + tradeoffs)
- New token bundles (DTCG W3C format only)
- Expanded reference apps (must be live, must demonstrate the direction)
- Anti-slop ban list additions (with example of the slop being banned)
- Eval suite expansions
- Bug fixes in scripts / examples
- Translations / new platform skills (must follow same "ask which track first" pattern)

PRs not welcome:

- Default-changing without discussion
- Removing the upfront question pattern
- Adding shadcn defaults / Inter / generic SaaS layouts as starting points
- Soft "you might consider..." copy in skills (skills are directive, not advisory)

## Adding a new aesthetic direction (web)

Required:

1. `references/web-direction-<name>.md` with: typography, palette, layout grid, motion language, copy voice, reference apps (5+), direction-specific bans, sample structure, sample tokens
2. Update `skills/web-design/SKILL.md` Step 0 to list the new direction
3. Update `references/awwwards-ceiling.md` with refs grouped under new direction
4. At least 3 motion patterns documented in `web-patterns/` referenced from the direction

## Adding a new code pattern

Required `web-patterns/<name>.md`:

1. One paragraph: what it is, when to deploy
2. Direction fit (which directions it serves)
3. Full TSX/CSS code, copy-paste ready
4. Tradeoffs section
5. Browser support / accessibility caveats

## Adding a new platform skill

Required:

1. `skills/<name>-design/SKILL.md` with mandatory "ask which track first" pattern
2. Direction-specific reference files
3. Per-platform anti-slop ban list
4. At least one working example in `examples/`
5. Reference apps section (5+ live URLs)
6. Eval entries in `evals/evals.json` (5+ trigger prompts + 2 negative controls)

## Code style

- TypeScript: 2-space indent, no semicolons preference (match existing)
- Markdown: line-break per sentence in long docs, hard wraps OK in tables
- No comments stating the obvious; comments explain *why* not *what*
- No "TODO" / "FIXME" / "XXX" in committed code

## Testing changes

```bash
# Validate plugin manifests + all SKILL.md frontmatter
python -c "
import json, os, re, sys
errors = []
for path in ['.codex-plugin/plugin.json', '.claude-plugin/plugin.json', '.claude-plugin/marketplace.json']:
    json.load(open(path))
for root, dirs, files in os.walk('skills'):
    for f in files:
        if f == 'SKILL.md':
            content = open(os.path.join(root, f)).read()
            assert re.match(r'---\s*\n.*?\n---', content, re.DOTALL), f'{f} missing frontmatter'
print('ok')
"

# Codex plugin readiness
npx codex-skillforge lint . --format text
npx codex-skillforge smoke .
```

Run example builds (Win11 only):

```bash
# WinUI example
cd examples/windows-music-settings/Resonance.Windows
dotnet build -c Debug -p:Platform=x64

# Web example via Electron
cd examples/windows-music-settings/Resonance.Web
npm run electron
```

## Commit style

- Conventional Commits not required but appreciated (`feat:`, `fix:`, `docs:`, `refactor:`)
- Subject ≤72 chars, imperative ("add" not "added")
- Body explains *why* if not obvious from subject

## License

By submitting, you agree your contribution is licensed under Apache 2.0 (the project license). No CLA required.
