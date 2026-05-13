---
name: ux-design
description: Use when the user asks for UX, product flow, user journey, wireframes, usability, conversion, onboarding, checkout, signup, navigation, forms, state design, dashboard workflows, or making an app easier to use over time. Designs and audits user experience flows, information architecture, forms, onboarding, dashboards, settings, empty/loading/error states, activation, retention, and repeated-use product ergonomics before visual polish. Pair with platform UI skills after the UX flow is clear.
---

# ux-design - product flow before pixels

Use this skill when the product has to be understandable and usable, not just attractive. The output should make the user path clearer, reduce unnecessary decisions, and define states that survive real use.

## Step 1 - Identify the job and user mode

Before designing screens, state:

- Primary job: what the user is trying to finish.
- User mode: first-time, returning, power user, admin, buyer, creator, operator, or support.
- Frequency: one-time, occasional, daily, or high-volume repeated use.
- Risk: low-risk browse, reversible edit, money/data/security impact, or destructive action.

If any of these are unclear and materially affect the flow, ask one short question.

## Step 2 - Map the flow

Write the minimum useful path:

1. Entry point
2. First meaningful action
3. Required decision
4. Feedback after action
5. Success state
6. Recovery path when something fails

Prefer fewer screens when the user is trying to finish one job. Prefer separate steps when the user is making risky, costly, or hard-to-reverse decisions.

## Step 3 - Design the states

Every production UI needs these states:

- Empty: what the user sees before data exists.
- Loading: what changes while the system is working.
- Partial: some data exists, some is missing.
- Error: what failed, why it matters, and the next action.
- Permission: what is blocked and how to request access.
- Success: what happened and what the user can do next.
- Long-running: progress, cancellation, retry, and resume behavior.

Do not ship only the happy path.

## Step 4 - Reduce cognitive load

Apply these rules:

- Put the next action where the user's eye already is.
- Use one primary action per surface.
- Group by task, not by database object.
- Prefer progressive disclosure over dense first screens.
- Keep labels concrete: "Invite teammate", not "Manage".
- Make defaults safe and visible.
- Keep destructive actions separated, confirmed, and undoable when possible.
- Make repeated actions faster than first-time actions.

For high-frequency tools, optimize scan speed, keyboard flow, saved filters, bulk actions, and stable layout. For consumer onboarding, optimize motivation, trust, and the shortest path to first value.

## Step 5 - Choose the UX pattern

Pick one pattern and name it before visual design:

| Need | Pattern |
|---|---|
| First run | Guided setup with skip/resume |
| Complex creation | Wizard with review step |
| Frequent operations | Command surface + saved views |
| Data-heavy work | Master/detail + filters + bulk actions |
| Monitoring | Dashboard with priority stack and drilldown |
| Settings | Searchable grouped settings + inline validation |
| Checkout/signup | Short form + transparent cost/risk + recovery |
| Collaboration | Activity timeline + comments + ownership |
| AI/tool execution | Plan preview + progress + artifacts + retry |

## Step 6 - Hand off to UI

After the UX shape is clear, route to the platform skill:

- Web visuals: `../web-design/SKILL.md`
- Windows visuals: `../windows-design/SKILL.md`
- Apple visuals: `../apple-design/SKILL.md`
- Android visuals: `../android-design/SKILL.md`
- Cross-platform translation: `../cross-platform-design/SKILL.md`

Pass the UX decisions into that skill as constraints. Do not let visual direction erase task flow, state coverage, or platform idioms.

## UX audit checklist

Before final delivery, check:

1. Is the primary job obvious in the first screen?
2. Can a new user reach first value without reading documentation?
3. Can a returning user repeat the core task faster?
4. Are empty, loading, error, permission, and success states defined?
5. Is there one clear primary action per surface?
6. Are risky actions confirmed, separated, or undoable?
7. Do form errors appear near the fields they describe?
8. Does the layout support scanning, not just looking good in a screenshot?
9. Does navigation match the user's mental model?
10. Is the next step clear after every action?

If any answer is no, fix the flow before polishing visuals.
