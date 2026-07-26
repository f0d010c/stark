# Transition continuity contract

Use this when a web app, product page, dashboard, editor, docs platform, gallery, command surface, agent run UI, checkout/trust flow, or animated product story changes state, route, selected object, layout, or detail level and the transition needs to feel authored rather than decorative.

This file complements `choreography-state-machine.md`, `motion-pattern-atlas.md`, `motion-timing-easing-system.md`, `motion-library-playbooks.md`, `interactive-prototype-contract.md`, `navigation-information-architecture.md`, `experience-continuity-system.md`, `input-interaction-model-contract.md`, `accessibility-interaction-contract.md`, and `performance-budget-contract.md`.

The goal is continuity: users should understand what changed, what stayed the same, where focus went, and what they can do next. A transition is successful when it preserves orientation and state comprehension, not when it shows off a library.

## Required output

```md
Transition continuity contract
- Surface:
- User mode:
- Source state:
- Destination state:
- Persistent object:
- Transition job:
- Continuity pattern:
- State owner:
- Library/native owner:
- Focus and scroll behavior:
- Loading/error/recovery behavior:
- Reduced-motion substitution:
- Mobile/touch substitution:
- Performance boundary:
- Rejected transition:
- QA evidence:
```

## Continuity patterns

| Pattern | Use for | Persistent object | Best owner | Avoid when |
|---|---|---|---|---|
| Shared element | card to detail, gallery to inspect, artifact preview to artifact | thumbnail, title, status, artifact frame | Motion layoutId, View Transitions API | element identity is ambiguous |
| Container transform | parent list item to child panel, compact row to expanded task | container, header, leading metadata | Motion layout, View Transitions, CSS | it hides loading/error state |
| Route dissolve with anchor | docs, settings, admin routes | nav location, heading, selected tab | View Transitions, CSS | route meaning changes dramatically |
| State swap | tabs, filters, status panels, form steps | controls and selection marker | CSS, Motion, React state | content height causes jump |
| Artifact arrival | AI/agent/output generation | source prompt, progress marker, output artifact | Motion, GSAP, SVG/CSS trace | output appears without cause |
| Command-to-result | command palette, search, quick actions | command text, selected result, destination heading | Motion, View Transitions | result opens without focus |
| Master/detail continuity | dashboards, CRM, inbox, docs list/detail | selected row, detail header, status | Motion, CSS, native route state | mobile needs full-screen replacement |
| Modal/sheet continuity | settings, preview, confirmation, drawer | triggering control and dialog title | Motion, Radix/React Aria + CSS | focus return is unclear |
| Data/status update | live metrics, queues, tables, timelines | row identity, value, status, timestamp | CSS/Motion for shell, chart library for marks | every row animates at once |
| Scroll story step | pinned proof, cinematic landing | hero object, progress marker, proof frame | GSAP, native scroll CSS | docs/forms/dense work need reading stability |

## Transition jobs

Choose one job. If a transition tries to do many jobs, simplify it.

- **Orient**: preserve where the object came from.
- **Confirm**: show that an action happened.
- **Compare**: reveal before/after, selected/unselected, old/new value.
- **Progress**: show a task advancing.
- **Reveal**: expose more detail without losing context.
- **Recover**: show the path out of error, blocked, stale, or denied state.
- **De-emphasize**: move secondary content away from the user's focus.
- **Delight**: only after orientation, confirmation, and accessibility are already handled.

## State ownership rules

- Product state owns the meaning. Animation state only expresses it.
- The persistent object must exist before and after the transition with the same identity.
- If the destination has loading, permission, error, stale, or blocked state, the transition must reveal that state rather than mask it.
- If the user initiates the transition, the next focus target should match their intent: detail heading, dialog title, selected control, error summary, or created artifact.
- If system state initiates the transition, do not move the user's active control unexpectedly.
- If data updates frequently, animate only the changed value/status and preserve row position unless re-sort is explicit.
- If the transition cannot explain cause/effect, use a direct cut.

## Library and native owner choices

### CSS

Use for simple opacity/transform, selection indicators, details disclosure, basic state swaps, and reduced-motion fallbacks.

Avoid using CSS alone when the transition needs route state, shared element identity, focus management, or complex interruption handling.

### Motion

Use when React component state owns layout continuity, shared elements, expanding cards, active bento, command palettes, sheets, tabs, route/detail panels, drag/gesture, or interruptible state changes.

Name the `layout` or `layoutId` owner, the state key that controls it, and the reduced-motion behavior.

### View Transitions API

Use when native browser snapshots can preserve continuity between same-document or same-origin document views and the fallback remains a usable direct navigation.

Name the `view-transition-name` objects, unsupported-browser fallback, focus/scroll restoration, and which routes should not transition.

### GSAP

Use when transition continuity is part of an authored sequence: pinned proof, SVG trace, mask reveal, object birth, or multi-step hero scene.

Do not use GSAP for ordinary app route changes, tab switches, or data table updates.

### Product libraries

Radix, React Aria, shadcn/ui, TanStack, cmdk, and form libraries may own accessible structure, focus, keyboard behavior, or data state. Motion can decorate the transition only if it preserves those owners.

### Chart/visual libraries

Chart, map, canvas, Rive, Lottie, Three/R3F, and video owners must not trap essential labels, focus, text, or actions inside the animated asset.

## Surface recipes

### Product proof landing

- Persistent object: product proof frame, generated artifact, command, or workflow slice.
- Best transitions: artifact arrival, scroll story step, shared object from hero to proof section.
- Remove: unrelated floating prop loops, repeated equal section reveals, parallax that does not prove change.

### Dashboard or CRM

- Persistent object: selected row, queue item, metric, saved view, status badge.
- Best transitions: master/detail continuity, state swap, data/status update.
- Remove: animated KPI cards that delay scan speed, row motion that changes position without explicit sort/filter.

### Editor or canvas

- Persistent object: selected object, canvas frame, inspector section, tool mode.
- Best transitions: shared element, container transform, state swap, modal/sheet continuity.
- Remove: camera/zoom motion that disorients editing or hides selected state.

### Agent run UI

- Persistent object: plan step, tool call, progress marker, artifact.
- Best transitions: artifact arrival, command-to-result, status update, recovery transition from blocked/failed to resumed.
- Remove: magical artifact appearance with no trace, status motion that competes with stop/retry controls.

### Docs or developer tool

- Persistent object: route heading, nav item, code block, command result.
- Best transitions: route dissolve with anchor, command-to-result, state swap.
- Remove: page wipes that reset reading position or mask version/platform changes.

### Checkout, trust, permissions

- Persistent object: selected plan, permission scope, price/term, review summary.
- Best transitions: state swap, modal/sheet continuity, recovery from validation/payment failure.
- Remove: playful or cinematic motion near cost, consent, destructive action, or legal detail.

## Reduced-motion substitutions

Reduced motion should preserve continuity without travel:

- Shared element -> instant placement plus highlight/focus.
- Container transform -> direct expand/collapse with no spatial travel.
- Route transition -> direct navigation plus restored focus and scroll.
- Artifact arrival -> static before/after frames or completed artifact plus timestamp.
- Data update -> value highlight or status color/text change.
- Scroll story -> stacked proof frames.
- Modal/sheet -> direct open/close with focus management.

## QA checks

- The persistent object is identifiable before and after the transition.
- The transition has one named job: orient, confirm, compare, progress, reveal, recover, de-emphasize, or delight.
- Loading, error, permission, stale, blocked, and recovery states are not hidden by motion.
- Focus and scroll land where the user expects after route/detail/dialog transitions.
- Mobile and touch have an intentional replacement, not a squeezed desktop transition.
- Reduced motion preserves state comprehension and all information.
- Animation uses transform/opacity where possible and avoids unexpected layout shift.
- Unsupported View Transitions or Motion failures degrade to usable direct state changes.
- No two libraries animate the same element/property without a clear owner.

## Source anchors

- Material motion describes transitions as a way to preserve spatial relationships, functionality, and intention, with continuity as a key quality: https://m1.material.io/motion/material-motion.html
- Material choreography guidance emphasizes shared elements and continuity so users can track focus through a transition: https://m1.material.io/motion/choreography.html
- Motion layout animations provide React layout and shared-element continuity with `layout` and `layoutId`: https://motion.dev/docs/react-layout-animations
- Chrome's View Transitions documentation explains browser snapshot-based transitions for same-document and cross-document navigation: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
- MDN documents the View Transition API and its same-document and cross-document use cases: https://developer.mozilla.org/docs/Web/API/View_Transition_API
- MDN documents `prefers-reduced-motion` for users who request minimized non-essential motion: https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion
