# Contributing to Stark

Stark is an opinionated design plugin. Contributions should improve product specificity, platform fit, usability, accessibility, implementation quality, or measurable output quality.

## Good contributions

- Fix routing errors or false-positive platform detection.
- Refresh version-sensitive platform guidance from official sources.
- Add a narrow reference that solves a documented failure mode.
- Add token bundles in DTCG format.
- Improve helper scripts, behavioral tests, eval cases, or documentation.
- Add a platform skill with trigger and negative-control coverage.

Avoid references that repeat existing advice with new adjectives, broad mandatory reading, dependencies without a concrete product job, or defaults that turn every surface into the same web aesthetic.

## Reference changes

Read `docs/reference-governance.md`. A new runtime reference must identify:

- when to use it and when not to;
- the failure mode it solves;
- the decision or implementation behavior it changes;
- its acceptance evidence;
- the catalog entry that makes it discoverable.

Do not add a new reference directly to the root skill unless it belongs in a small, explicit route bundle.

## Development setup

Requirements:

- Python 3.12+
- Node.js 20+

```bash
npm ci
npm run check
```

For a deterministic plugin bundle:

```bash
npm run pack:plugin
```

The archive is written to `dist/stark.zip` from an explicit allowlist. Tests, eval data, caches, previews, and local files must not enter it.

## Testing expectations

- Add positive and negative cases for routing changes.
- Test behavior and invariants, not merely the presence of long lists of phrases.
- Update eval metadata when a change introduces a new design capability.
- Run `npm run check` before opening a pull request.
- Keep Markdown, JSON, Python, YAML, SVG, and HTML files LF-only with no trailing whitespace.

## Commit and pull request style

Short imperative subjects are preferred. A pull request should explain the failure mode, the change in behavior, the evidence used, and any remaining tradeoff.

## License

By submitting a contribution, you agree that it is licensed under Apache-2.0. No CLA is required.
