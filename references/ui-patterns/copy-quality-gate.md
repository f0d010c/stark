# Copy quality gate

Use this after `copy-system.md`, `../web-copy-voice.md`, `progressive-disclosure-information-scent.md`, and rendered/browser evidence when the UI text must stop sounding generic, cheap, vague, or AI-ish.

Copy is accepted only when it helps the user understand the product, task, state, risk, or next action.

Source anchors:

- GOV.UK content design frames content as planning, writing, and managing content so users can complete tasks, with plain English even for specialist audiences.
- Apple writing guidance emphasizes clear, useful, consistent interface language that fits device context and screen size.
- Material Design writing guidance treats clear, accurate, concise text as a trust and usability requirement.
- NN/g usability heuristics require language that matches the user's world and constructive error recovery.

## Use when

- The user says text feels cheap, generic, bland, overexplained, too much like a presentation, or AI-generated.
- The surface has hero text, CTA text, proof labels, state/recovery copy, pricing/risk copy, docs copy, onboarding, forms, or animation-led headline moments.
- A visual design looks good but could fit any SaaS, AI launch, dashboard, or app shell.
- Final QA needs to judge DOM text, screenshot text, or generated copy before acceptance.

## Output contract

```md
Copy quality gate
- Surface:
- User mode:
- Evidence inspected:
- Text inventory:
- Copy job:
- Voice fit:
- Product nouns:
- Action verbs:
- Proof labels:
- CTA clarity:
- State/recovery copy:
- Risk/terms copy:
- Banned or weak phrases:
- Mobile/readability result:
- Failed text:
- Required rewrite:
- Re-check evidence:
- Gate result: blocked / repair required / acceptable with risk / pass
```

## Text inventory

Inspect the actual text a user sees:

- H1/H2/H3
- hero support copy
- CTA labels
- nav, tabs, filters, command/menu labels
- proof labels on media, charts, screenshots, timelines, and dashboards
- empty/loading/error/permission/success/long-running states
- form labels, helper text, validation, destructive confirmation
- pricing, renewal, cancellation, permission, privacy, and risk text
- alt text, status text, and accessible names when they affect task understanding

Do not judge only the headline. Cheap text often hides in labels, empty states, proof captions, and CTAs.

## Acceptance rule

Pass only when:

- the headline names a product object, user outcome, transformation, artifact, task, or decision
- the primary CTA names the action and object, not just "Get started" or "Learn more"
- proof labels reveal real states, owners, times, artifacts, units, risks, costs, versions, or decisions
- state and recovery copy says what happened, what was preserved, and what to do next
- pricing, permissions, destructive actions, renewal, cancellation, and public actions keep risk near the action
- the voice fits the surface frequency and risk
- text is concise enough for mobile and long enough to remove ambiguity
- important text is DOM/native text, not only baked into bitmap, video, canvas, Rive, or Lottie assets

## Cheap-copy symptoms

| Symptom | Likely cause | Repair |
|---|---|---|
| Generic SaaS headline | no product noun | name the queue, artifact, event, trace, plan, scene, invoice, run, frame, or decision |
| Hype without proof | claim is unsupported | replace claim with state, metric, artifact, or proof label |
| "AI-powered" vagueness | model job is unnamed | say what the model creates, changes, checks, routes, or rejects |
| Soft CTA | action object missing | use verb + object, such as `Review failed run` |
| Decorative proof labels | labels describe UI type | use owner, status, time, risk, cost, or artifact |
| Overexplained section | every sentence at same level | compress first layer; move details behind disclosure or docs |
| Cute risk copy | brand voice overrides trust | make cost, consequence, recovery, and permission explicit |
| Error blames user | developer/system language | name failure, preserved state, and next action |
| Animated text copies reference | borrowed rhythm too closely | change product object, sentence shape, CTA wording, and proof context |

## Rewrite formulas

Use formulas as scaffolds, then make them sound natural:

- **Hero**: `[Action/transformation] [product object] for [specific user/job]`
- **Proof label**: `[status/owner/time/artifact/risk]`
- **CTA**: `[Verb] [object]`
- **Error**: `[Thing] failed because [reason]. [Preserved state]. [Next action].`
- **Permission**: `[Action] needs [scope] because [reason]. [Alternative or requester].`
- **Pricing/risk**: `[Cost/term] applies when [condition]. [Cancel/change path].`
- **Long-running work**: `[Current step]. [Progress/artifact]. [Stop/retry/resume path].`

## Voice fit by surface

- **Developer tools**: exact, procedural, artifact-led.
- **AI/media launches**: cinematic headline is allowed; proof and body text must name output, frame, prompt, timeline, model job, or artifact.
- **Dashboards/ops/CRM**: operational and scannable; status, owner, time, risk, and action beat cleverness.
- **Editors/canvas tools**: tool-like and mode-aware; text should not compete with the canvas.
- **Checkout/pricing/permissions**: calm, explicit, never clever near cost or irreversible decisions.
- **Docs/API**: task-led and procedural; examples and commands beat brand poetry.
- **Agent runs**: traceable; plan, tool, artifact, blocked reason, retry, stop, and resume copy matter.

## Hard fails

- Headline or CTA could fit any unrelated SaaS product.
- Primary action is vague near money, permissions, destructive actions, generated output, or public posting.
- Error/permission/empty/loading states do not explain what happened and what to do next.
- Proof labels say "Dashboard", "Analytics", "Feature", "Smart insights", or other decorative placeholders.
- Important copy is unreadable inside generated image/video/canvas assets with no DOM equivalent.
- Copy uses banned hype phrases from `../web-copy-voice.md` without a deliberate parody/brand reason.
- Mobile line breaks make the headline, CTA, or risk text misleading.

## Repair order

1. Replace generic headline with product noun, task, artifact, transformation, or decision.
2. Rewrite CTA as action plus object.
3. Add proof labels tied to state, owner, time, unit, risk, or artifact.
4. Fix empty/error/permission/recovery copy.
5. Move risk, cost, cancellation, or destructive consequence near the action.
6. Compress or disclose weak explanatory paragraphs.
7. Re-check actual DOM/screenshot text at desktop and mobile.

## Gate results

- **Blocked**: copy prevents task completion, hides risk, misleads, or makes the product unrecognizable.
- **Repair required**: visuals are viable but text weakens credibility or action clarity.
- **Acceptable with risk**: text is usable, but missing evidence or a minor tone issue remains.
- **Pass**: text is specific, useful, recoverable, proof-led, voice-fit, and readable.
