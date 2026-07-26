# First-run and empty-state system

Use this for onboarding, activation, empty dashboards, no-results screens, setup flows, import flows, permission gates, trial starts, workspace creation, first project creation, and any generated product UI that might otherwise open into a dead blank screen.

This system turns first-run moments into product proof. It is not a feature tour generator. It decides how a new user reaches first value, how optional setup is deferred, and how empty states explain the system status and next action.

## Required output

```md
First-run / empty-state brief
- User promise:
- First value action:
- Minimum setup:
- Deferrable setup:
- Sample/demo content:
- Empty-state type:
- Primary CTA:
- Secondary action:
- Permission timing:
- Progress/resume model:
- Recovery states:
- Contextual teaching:
- Success handoff:
- QA evidence:
```

If the first screen teaches features but does not move the user toward first value, the onboarding is decorative.

## Empty-state types

| Type | Use when | Must include | Avoid |
| --- | --- | --- | --- |
| First-run empty | user has no content yet | promise, concrete next action, optional sample/demo | blank dashboard with "No data" |
| No results | filter/search returned nothing | query/filter context, clear/reset option, alternate path | treating it like an error |
| Permission gated | data/action needs access | reason, benefit, exact scope, deny/skip path | asking before the user understands why |
| Import/setup running | value is delayed | progress, what is happening, cancel/resume/retry | fake progress with no recovery |
| Partial/stale data | some data exists but is incomplete | freshness, missing source, next fix | pretending the view is complete |
| Error empty | system failed | what failed, preserved work, retry/support path | cheerful illustration with no recovery |
| Empty section | only part of the page is empty | local explanation and local action | full-page onboarding inside a side panel |

Do not use an empty state for an error unless it clearly names failure and recovery.

## First value ladder

Design the path in this order:

1. Show what the product helps the user accomplish.
2. Ask only for setup required to create the first useful result.
3. Offer sample/demo content when real data takes time.
4. Defer profile, preferences, invites, and polish steps unless legally required.
5. Request permissions at the moment of need with a concrete reason.
6. Preserve partial progress and allow resume.
7. End on a useful object, not a celebration screen.

## CTA rules

- Primary CTA should create, import, connect, inspect, or try the first meaningful object.
- Secondary action should be skip, use sample data, learn more, resume later, clear filter, or retry.
- Avoid vague CTAs such as "Get started" when a concrete action exists.
- Empty-state illustration must support the next action, not merely decorate the blank space.
- Success copy should point to the next valuable action.

## Contextual teaching

Prefer teaching near the task:

- Use tooltips/popovers for one action at a time.
- Use empty states to explain why data is absent and how it arrives.
- Use short checklists only when setup has multiple required steps.
- Use sample content when users need to understand a populated state before connecting data.
- Keep tutorials optional and findable later.
- Never block repeated users with first-run education.

## Recovery and non-happy states

First-run UX is not complete without:

- no workspace/project/content
- permission denied
- import/connect running
- import/connect failed
- setup partial/resume
- sample data active
- filter-empty/no results
- first success

For generated demo UIs, show at least one of these states visibly when the product would otherwise look like a static poster.

## QA checks

- A new user can reach first useful result without completing optional setup.
- The UI provides a sample/demo path when real data is unavailable.
- Permission request has a visible reason and skip/deny path when possible.
- Exiting mid-setup preserves state or explains what is lost.
- Empty state names why content is missing and what to do next.
- No-results state can reset or change filters.
- Error empty state preserves user work and offers recovery.
- Mobile first-run keeps the primary action visible and avoids long setup forms.

## Hard fails

- Long profile/account/preferences form before first value.
- Feature tour that must be memorized before interaction.
- Blank dashboard with generic "No data" and no next action.
- Permission prompt before explaining the benefit or scope.
- Fake progress with no retry/resume.
- Empty state illustration that hides failure or recovery.
- CTA says "Get started" when the real action is create/import/connect/try.
- Repeated users see mandatory onboarding again.

## Source anchors

- Apple HIG onboarding recommends fast, optional onboarding, interactive learning, contextual tips, deferring nonessential setup, and permission requests at the moment of need: https://developer.apple.com/design/human-interface-guidelines/onboarding
- Material Design onboarding frames onboarding as part of a longer journey toward a key retention action and recommends focusing on essential concepts and first-run experience: https://m2.material.io/design/communication/onboarding.html
- Material Design empty states explain that empty states prevent confusion and can use starter/educational content instead of a blank view: https://m1.material.io/patterns/empty-states.html
- Fluent 2 onboarding recommends standard components, contextual guidance, empty states, and CTAs that give users a clear path forward: https://fluent2.microsoft.design/onboarding/
