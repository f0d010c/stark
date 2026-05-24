# Design recipes

Use this after `originality-engine.md` and before implementation when the agent needs a stronger starting point than a blank design brief.

Recipes are not templates. They are starting instincts: product type, concept seed, composition, layout sketch, typography personality, non-happy state, and visual anchor. Adapt the recipe to the user's platform and constraints.

## Output requirement

For original or higher-craft work, include a compact layout sketch before code:

```text
Layout sketch:
[region]
[region] [region]
[region]
```

The sketch should name the actual product regions, not generic "cards" or "content".

## Typography gate

Every recipe should name the type role before code:

```md
Typography personality
- Display:
- UI/body:
- Mono/labels:
- Why it fits:
- Banned fallback:
```

Rules:

- Do not let desktop previews fall back to bland system-font mockups unless strict native fidelity is the point.
- For branded desktop apps, keep native controls readable but give content surfaces a stronger display or label voice.
- For technical products, choose a mono with character and pair it with a non-generic sans.
- For editorial/product pages, choose display type that carries the concept instead of relying on color.
- If no licensed type is available, pick a distinctive free stack from `../../assets/font-pairs.md` or `../web-fonts.md`.

## Desktop recipes

### Local file sync utility

- Concept seed: quiet operations room for file movement.
- Composition: command deck + transfer lanes.
- Layout sketch:

```text
[status strip: sync health, last checkpoint, pause]
[left roots/tree] [center transfer lanes] [right selected file provenance]
[bottom event log with retry/restore]
```

- Non-happy state: stalled transfer with retry, skip, reveal file, and last good checkpoint.
- Visual anchor: horizontal transfer strips with status stamps.
- Avoid: generic storage dashboard cards.

### Desktop music player

- Concept seed: listening room and record wall.
- Composition: library / collection + object-detail stage.
- Layout sketch:

```text
[native title/transport bar]
[left library sources] [center collection wall] [right now-playing stage]
[queue strip + unavailable/offline state]
```

- Non-happy state: unavailable track, offline cache warning, missing artwork.
- Visual anchor: selected album art drives a restrained content atmosphere.
- Avoid: settings-app sidebar with album cards.

### AI coding agent desktop app

- Concept seed: mission control for local work.
- Composition: monitoring cockpit + timeline wall.
- Layout sketch:

```text
[run command + model/workspace controls]
[left run queue] [center plan/timeline/artifacts] [right diff inspector]
[terminal/log rail with stop/retry/resume]
```

- Non-happy state: blocked tool permission, failed test, resumable checkpoint.
- Visual anchor: live run timeline tied to artifacts and diffs.
- Avoid: chat-only app with spinner.

### Screenshot / image review tool

- Concept seed: light table for visual evidence.
- Composition: light table + inspection bay.
- Layout sketch:

```text
[capture/import toolbar]
[left filmstrip] [center image light table with overlays] [right issue inspector]
[bottom comparison/history strip]
```

- Non-happy state: missing file, unsupported format, annotation conflict.
- Visual anchor: large inspectable image with numbered overlays.
- Avoid: gallery cards with no inspection workflow.

### Menu-bar focus utility

- Concept seed: small instrument, not full dashboard.
- Composition: tray/menu-bar utility + instrument panel.
- Layout sketch:

```text
[current mode + one primary toggle]
[next block / app limits / exception]
[recent interruptions]
[settings link]
```

- Non-happy state: permission missing for app monitoring or notifications.
- Visual anchor: compact calibrated dial or mode strip.
- Avoid: full app shell for a two-action utility.

### Desktop notes / knowledge app

- Concept seed: archive desk.
- Composition: archive index + document stage.
- Layout sketch:

```text
[global search + quick capture]
[left notebooks/tags] [center note index] [right selected document]
[backlinks/activity strip or inspector]
```

- Non-happy state: conflict, unsynced note, missing attachment.
- Visual anchor: dense archive index with provenance and backlinks.
- Avoid: generic "recent notes" cards.

## Web and product recipes

### Developer tool landing page

- Concept seed: command deck that proves the workflow.
- Composition: product proof workbench + terminal board.
- Layout sketch:

```text
[nav + compact CTA]
[hero: command/result proof, not abstract claims]
[workflow timeline with artifacts]
[trust/permissions matrix]
[docs/API split preview]
```

- Non-happy state: failed command with retry and useful output.
- Visual anchor: inspectable product proof with real command/result labels.
- Avoid: centered hero plus three feature cards.

### Security / permissions product

- Concept seed: evidence room.
- Composition: permission matrix + inspection bay.
- Layout sketch:

```text
[risk summary + primary review action]
[scope matrix: actor/resource/action/status]
[selected evidence inspector]
[audit timeline]
```

- Non-happy state: denied scope, inherited permission, pending approval.
- Visual anchor: trust matrix with concrete scopes and timestamps.
- Avoid: vague shield icons and "enterprise-grade security" copy.

### Billing / subscription app

- Concept seed: operating ledger.
- Composition: ledger + reconciliation view.
- Layout sketch:

```text
[current plan / renewal / balance]
[ledger rows with invoices, usage, credits]
[right selected invoice/change preview]
[bottom risk/cancellation/recovery copy]
```

- Non-happy state: failed payment, proration change, renewal risk.
- Visual anchor: ledger rows with stamps, totals, and effective dates.
- Avoid: three pricing cards when user is managing an account.

### Marketplace comparison flow

- Concept seed: buyer's inspection table.
- Composition: comparison table + object-detail stage.
- Layout sketch:

```text
[decision criteria + filters]
[comparison table with stable axes]
[selected listing proof/details]
[trust, shipping, refund, seller state]
```

- Non-happy state: unavailable listing, missing seller verification, shipping unknown.
- Visual anchor: stable comparison axes with decision confidence markers.
- Avoid: decorative product cards with hidden risk.

### Onboarding / setup flow

- Concept seed: guided calibration.
- Composition: setup runway + first-value preview.
- Layout sketch:

```text
[outcome preview]
[required steps] [optional later]
[sample/import/progress surface]
[resume/skip path]
```

- Non-happy state: import failed, permission denied, partial setup.
- Visual anchor: first-value preview that updates as setup progresses.
- Avoid: long profile form before value.

### Editor / canvas web app

- Concept seed: studio desk.
- Composition: workbench + inspector.
- Layout sketch:

```text
[mode toolbar + undo/redo + save state]
[left tools/layers] [center canvas/artifact] [right inspector]
[bottom timeline/comments/export state]
```

- Non-happy state: blank canvas, unsaved conflict, export failed.
- Visual anchor: canvas dominates; controls orbit the artifact.
- Avoid: tool panels styled as decorative cards.

### AI automation run UI

- Concept seed: run replay room.
- Composition: timeline wall + artifact inspector.
- Layout sketch:

```text
[run goal + stop/resume/retry]
[left phase timeline] [center current step/log] [right artifacts]
[final summary: done/skipped/needs decision]
```

- Non-happy state: waiting for user, tool failed, retryable checkpoint, stale result.
- Visual anchor: phase timeline with artifacts attached to steps.
- Avoid: spinner-only working state.

## Native mobile recipes

### Fitness / habit tracker

- Concept seed: daily instrument.
- Composition: instrument panel + timeline.
- Layout sketch:

```text
[today's focus + progress instrument]
[primary action within thumb reach]
[streak / recent sessions]
[blocked/missed/recovery state]
```

- Non-happy state: missed day, sensor permission missing, paused goal.
- Visual anchor: single calibrated progress instrument.
- Avoid: generic stat cards and confetti-only success.

### Mobile banking / money movement

- Concept seed: safe transfer desk.
- Composition: ledger + confirmation sheet.
- Layout sketch:

```text
[available balance + account context]
[recent ledger]
[primary transfer action]
[confirmation with amount, recipient, timing, reversal]
```

- Non-happy state: insufficient funds, delayed transfer, fraud hold.
- Visual anchor: transaction ledger and confirmation clarity.
- Avoid: playful motion near money risk.

## Recipe selection rule

If none fits, invent one from the subject:

1. Name the main object.
2. Choose a product world.
3. Choose a composition archetype.
4. Sketch regions.
5. Choose a typography personality.
6. Add one non-happy state.
7. Pick one visual anchor.
8. Ban the obvious generic skeleton.
