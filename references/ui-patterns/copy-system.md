# Copy system

Use this when Stark needs to generate, audit, or preserve product copy across a serious UI. Read `../web-copy-voice.md` for concrete web voice rules and banned phrases.

The copy system makes text part of the product design contract, alongside typography, components, states, and motion.

## Required output

```md
Copy system
- Surface:
- User mode:
- Copy job:
- Voice:
- Hero/headline:
- CTA rule:
- Proof labels:
- State/recovery copy:
- Risk/legal copy:
- Banned phrases:
- QA checks:
```

## Copy jobs

| Job | Use for | Quality bar |
|---|---|---|
| Explain | onboarding, docs, unfamiliar features | user knows what to do next |
| Prove | hero art, product screenshots, dashboards | labels expose real state/artifact/risk |
| Guide | forms, setup, editors, command menus | next action is obvious |
| Compare | pricing, analytics, before/after | axes and tradeoffs stay stable |
| Warn | permissions, destructive action, billing | consequence is visible before action |
| Recover | errors, failed sync, permission denied | input/state is preserved and next action exists |
| Sell | landing pages, campaigns | claim is specific and supported by proof |
| Orient | app shell, docs, dashboards | user knows where they are and what changed |

## Design contract

Visual direction may alter tone, typography, or layout, but it must preserve:

- concrete product nouns
- action-specific CTAs
- proof labels tied to real states or artifacts
- error/permission/recovery clarity
- pricing/risk details near decisions
- accessibility of important text

If a generated screen looks good but has vague labels, placeholder UI copy, or empty hype, the design is not done.

## Copy ownership

- UX owns flow, state, recovery, and risk text.
- UI owns hierarchy, label placement, and scannability.
- Brand/campaign owns voice and memorable lines.
- Product data owns realistic labels, metrics, timestamps, and artifacts.
- Accessibility owns control names, alt text, live region text, and semantic labels.

Do not let brand voice override recovery, permission, pricing, or form clarity.

## QA gates

- Headline can be understood without the hero image.
- Hero image/object has proof labels that feel like product instrumentation.
- Primary CTA states the action and object.
- Empty/error/permission/success copy answers what happened and what to do next.
- Dangerous, costly, or public actions name consequences.
- No essential text is embedded in generated images or animation assets.
- Domain-specific words are used only when they clarify the job.
- Copy works at mobile widths without clipping or awkward wrapping.
