# Public plugin readiness

This checklist keeps Stark ready for public Codex plugin discovery or marketplace-style review.

## Current status

| Area | Status | Evidence |
|---|---|---|
| Codex manifest | Ready | `.codex-plugin/plugin.json` |
| Skill entry points | Ready | `SKILL.md`, `skills/*/SKILL.md` |
| Public README | Ready | `README.md` covers install, usage, scope, screenshots, tests, and compatibility |
| Brand assets | Ready | `assets/logo/` contains SVG mark, favicon, monochrome variant, and usage note |
| Proof assets | Ready | `assets/screenshots/` contains curated desktop/mobile screenshots |
| Release notes | Ready | `CHANGELOG.md` and GitHub releases |
| Runtime scope | Ready | `docs/review-contract.md` defines what belongs in the plugin bundle |
| Quality roadmap | Ready | `docs/next-level-design-roadmap.md`, `docs/design-quality-measurement.md`, `docs/reference-governance.md` |
| CI | Ready | `.github/workflows/ci.yml` runs helper tests, SkillForge lint/smoke, and token export smoke checks |
| Marketplace lint | Ready | `npx agent-skillforge lint . --format text --strict --profile marketplace` |

## Before public submission

Run:

```bash
npm ci
npm run check
npm run pack:plugin
```

Scan for local-only content:

```bash
git ls-files -o --exclude-standard
rg -n "C:\\\\Users|OneDrive|Desktop|api[_-]?key|secret|password|bearer|sk-[A-Za-z0-9]|ghp_[A-Za-z0-9]|github_pat|OPENAI_API_KEY" .
```

## Public content rules

Keep public:

- skills, references, token bundles, docs, CI, tests, helper scripts
- curated screenshots in `assets/screenshots/`
- brand assets in `assets/logo/`
- changelog and release notes

Keep local:

- generated demo projects
- temporary screenshots
- Playwright/browser scratch artifacts
- one-off research notes
- unpublished release-note drafts
- machine-specific paths or local workflow files

`design-previews/` is ignored intentionally. Promote only selected proof into `assets/screenshots/` or public docs.

CI runs the same repository validator and deterministic packaging path used locally. Keep maintainer-only local scripts out of git.
