# v0.3.0 - Codex UX layer

Private Codex-focused update.

## What's changed

- Added `ux-design` for product flows, information architecture, onboarding, forms, dashboards, settings, and state design.
- Updated `design-router` so UX can run before platform UI work.
- Updated `/stark-audit` guidance to check UX problems before visual slop.
- Updated Codex plugin metadata and docs to describe Stark as UI/UX, not only UI.
- Removed a tracked build log from the example app and ignored future `.binlog` files.

## Verification

- `agent-skillforge lint . --strict` passes with no blocking issues.
- `agent-skillforge smoke .` passes the UX prompt and negative control.
- Secret scan found no obvious API keys, npm tokens, GitHub tokens, or private keys.
