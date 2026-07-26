# Conversion proof system

Use this for landing pages, product pages, docs homes, pricing, checkout-adjacent pages, waitlists, install pages, plugin trust pages, campaign pages, and any screen whose job is to move a user from interest to action.

This is not "growth hack" guidance. It is design strategy for making the user's decision visible, credible, and low-friction.

Source anchors:

- NN/g information scent research shows users choose paths based on visible cues that predict value.
- NN/g scanning research supports placing important information early, with headings and structure that work for scanning.
- Baymard checkout research highlights trust, payment clarity, and perceived security as major conversion factors, especially near payment.
- Stanford Web Credibility research found that design, transparency, and information quality strongly affect perceived credibility.

## Use when

- The page has a CTA: install, start, book, buy, join, create, copy, download, upgrade, subscribe, contact, try, or request access.
- The page explains a product, plugin, model, developer tool, app, service, portfolio, launch, or campaign.
- The user says the design looks like a presentation instead of a real site.
- A beautiful page lacks a clear offer, proof, trust, objection handling, or next step.
- Pricing, permissions, checkout, security, cancellation, privacy, or data access can create hesitation.

## Output contract

```md
Conversion proof system
- Visitor intent:
- Source/message match:
- Offer:
- Primary action:
- Secondary action:
- Decision stage:
- Main objection:
- Proof ladder:
- Trust/risk signals:
- CTA placement/rhythm:
- Friction removals:
- Measurement/events:
- QA checks:
```

## Visitor intent and message match

Before layout, identify why the visitor arrived:

- **Problem aware**: they know the pain but not the solution.
- **Solution aware**: they compare approaches.
- **Product aware**: they need proof, price, install path, or trust.
- **Returning/evaluating**: they need details, docs, changelog, demo, security, or objections answered.
- **Ready to act**: they need the shortest safe path to start.

Message match:

- The first viewport must answer the promise that brought the visitor there.
- If the source is an ad, repo, search result, referral, social post, docs link, or app store listing, align the headline, proof object, and CTA with that source.
- Do not open with a brand metaphor when the arrival intent expects a concrete install, price, demo, or product proof.

## Offer clarity

The offer must be more specific than the category:

- Weak: "AI workflow automation for modern teams."
- Strong: "Replay failed agent runs, inspect tool calls, and ship the fixed artifact."
- Weak: "Beautiful event pages."
- Strong: "Publish a ticketed event page with guest lists, payouts, and mobile check-in."

Offer test:

- Who is this for?
- What can they do after acting?
- What artifact/state changes?
- What risk or cost is reduced?
- Why now instead of later?

## CTA model

Define one primary action and one secondary action:

- Primary: the highest-value next step for the user's stage.
- Secondary: lower-commitment proof path for users not ready.

CTA copy should name the action and object:

- "Create event page"
- "Install Stark plugin"
- "Replay failed run"
- "Generate first clip"
- "Compare plans"
- "Copy quickstart"

Avoid vague CTAs unless the surrounding proof makes them specific:

- "Learn more"
- "Get started"
- "Start now"
- "Try it"

CTA rhythm:

- First viewport: primary action visible after the offer/proof is clear.
- Proof section: CTA appears near the proof it unlocks.
- Risk/pricing section: CTA includes cost, scope, cancellation, data, or permission context.
- Final close: CTA repeats with the strongest accumulated proof, not a generic band.

## Objection map

Name the main objection before styling:

| Objection | Common surfaces | Required proof |
|---|---|---|
| "Will this work for my case?" | product pages, developer tools, AI tools | examples, supported inputs, edge cases, output states |
| "Can I trust it?" | security, plugins, checkout, finance, healthcare | permissions, privacy, audit, owner, source, security copy |
| "Is it worth the cost?" | pricing, subscriptions, pro tools | comparison, ROI, usage limits, cancellation, guarantees |
| "How hard is setup?" | docs, SDKs, integrations | quickstart, command, dependencies, time-to-first-result |
| "What happens if it fails?" | agent tools, sync, checkout, forms | recovery path, preserved input, retry, support, fallback |
| "Is this just hype?" | AI/media/campaign pages | real artifact, state, benchmark, transparent limitations |

If the page does not answer the main objection by the second or third section, the page is not conversion-ready.

## Proof ladder for conversion

Use proof that matches the decision stage:

1. **Artifact proof**: screenshot, output, generated object, code, table, timeline, file, event, quote, ticket, branch, payment.
2. **Workflow proof**: input -> action -> state -> output.
3. **Control proof**: filters, sliders, command, inspector, settings, comparison.
4. **Failure proof**: error, denied permission, retry, rollback, cancellation, stale data, empty state.
5. **Trust proof**: security, privacy, source, audit, customer, benchmark, guarantee, support, changelog.
6. **Decision proof**: pricing, plan fit, tradeoff, migration, next step, cost of inaction.

High-craft pages need visual proof. Conversion-ready pages need decision proof.

## Trust and risk signals

Use trust signals only where they answer a real risk:

- Near payment: price, billing cadence, renewal/cancellation, payment methods, security, refund/support path.
- Near plugin install: scopes, permissions, local/remote boundary, data access, audit log, owner, revoke path.
- Near AI generation: source material, usage rights, privacy, output limits, failure states, export path.
- Near enterprise/admin: roles, approvals, audit, compliance, SSO, recovery, data retention.
- Near waitlist/contact: response time, what happens next, no-spam promise, required information.

Trust badges without context are decoration. Place the specific reassurance next to the risky action.

## Friction removals

Reduce friction without hiding consequences:

- Show time-to-value: "2 min setup", "copy one command", "first event in 90 seconds".
- Show prerequisites: account, API key, card, repo access, browser permission, invite.
- Preserve lower-commitment routes: docs, demo, sample output, pricing comparison, security notes.
- Make cancellation, downgrade, revoke, export, rollback, or retry visible where relevant.
- Do not move risk/legal text below the action that depends on it.

## Measurement and events

For generated prototypes and real apps, define the decision events:

- viewed first proof
- clicked primary CTA
- clicked secondary proof route
- copied command
- opened pricing/security/docs
- compared plans
- started checkout/install
- completed install/signup/purchase
- abandoned near risk
- used recovery path

Do not add analytics code unless the project already has an analytics system or the user asks. The design brief should still name what would be measured.

## QA checks

- First viewport states who it is for, what changes, and what action is next.
- Primary CTA is visible and specific.
- Secondary CTA supports exploration without competing visually.
- The main objection is answered by the second or third section.
- Proof includes a real artifact or workflow, not only claims.
- Risk copy appears near risky actions.
- Pricing/payment/permission/cancellation details are not hidden behind vague links.
- Mobile preserves offer -> proof -> objection -> CTA order.
- Visual hierarchy makes the next decision obvious without reading every paragraph.
- No repeated CTA band appears without new proof or reassurance.

## Hard fails

- Beautiful hero but no specific offer.
- CTA visible before the user has enough proof to trust it.
- Repeated "Start now" CTAs with no changing reason.
- Social proof, logos, or badges with no context or relevance.
- Pricing or cancellation clarity appears after the payment CTA.
- Plugin permissions or data access hidden behind generic trust language.
- The page answers "what it is" but not "why should I act now".
- The second section is another claim instead of proof, comparison, or objection handling.
