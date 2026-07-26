# Dashboard insight hierarchy

Use this before `data-visualization-library-selection.md` when a UI includes dashboards, analytics, KPI cards, metric panels, monitoring boards, reports, business intelligence, or public data-proof screenshots.

This is not a chart-library chooser. It decides what the dashboard proves, what decision it supports, which metrics deserve prominence, and how filters, freshness, exceptions, and drill-down keep the screen useful instead of decorative.

## Required output

```md
Dashboard insight hierarchy
- Audience:
- Monitoring job:
- Primary decision/action:
- North-star metric:
- Supporting metrics:
- Exception/alert logic:
- Segment/filter model:
- Freshness/source:
- Insight order:
- Detail/drill path:
- Empty/stale/partial state:
- Responsive replacement:
- Data honesty checks:
- QA evidence:
```

If the dashboard cannot name a decision/action, it is probably a report collage or fake proof.

## Insight order

Arrange the surface from decision to detail:

1. Current state: the one thing the user must know first.
2. Change: what moved, how much, and over what time window.
3. Cause or segment: where the change came from.
4. Exception: what is out of range, blocked, stale, missing, or risky.
5. Action: what the user can do next.
6. Detail: table, drill-down, export, audit trail, source, or owner.

Do not start with four equal KPI cards unless four equal decisions truly exist.

## Metric hierarchy

| Element | Job | Must include | Avoid |
| --- | --- | --- | --- |
| North-star metric | orient the user | unit, time window, delta, target or baseline | giant number without context |
| Supporting metric | explain the north star | relationship to main metric | unrelated vanity metric |
| Exception tile | identify urgency | threshold, owner, next action | red card with no recovery |
| Trend chart | show movement | date range, annotations or comparison | unlabeled sparkline decoration |
| Segment chart | show where to act | sorted categories, filters, sample size | random donut/radar variety |
| Source table | prove data and enable action | row state, owner, freshness, action | hidden details behind a pretty chart |

## Dashboard types

| Type | Use for | Primary shape | Hard fail |
| --- | --- | --- | --- |
| Executive health | high-level status and trend | north-star, deltas, exceptions, drill links | too many operational controls |
| Operational queue | repeated triage and action | priority list/table plus detail/action rail | decorative charts replacing rows |
| Monitoring board | live or near-live awareness | alert/status rail, timeline, affected systems | stale data with no freshness signal |
| Analytical workspace | exploration and comparison | filters, chart/table pairing, drill path | filters hidden or no source table |
| Product proof panel | landing/demo proof | artifact, metric, before/after, source cue | fake metrics with no product object |
| Public report | explanation and trust | narrative order, citations/source, accessible table | chart wall with no takeaway |

## Filter and segment model

Filters are product controls, not decoration:

- Primary filters belong near the data they change.
- Active filters must be visible in the screenshot.
- Default filter state must be named.
- Filter-empty must explain whether no data exists or the filter is too narrow.
- Segment comparisons need consistent time windows and units.
- Drill-down should preserve context and provide a path back.

## Data honesty checks

- Units, date range, source, and freshness are visible.
- Deltas name baseline: previous period, target, forecast, cohort, or benchmark.
- Precision matches the decision; do not mix `41.238%` with rough estimates.
- Missing, delayed, partial, sampled, or stale data has a visual state.
- Bar charts use honest baselines unless a documented exception exists.
- Color encodes semantic state consistently and never carries critical meaning alone.
- Generated/demo data looks domain-specific but is not presented as real telemetry.

## Responsive replacement

Do not shrink a desktop dashboard into a tiny wall of cards:

| Desktop pattern | Mobile/tablet replacement |
| --- | --- |
| KPI row + chart + table | primary metric, exception list, expandable chart/table |
| Wide operational table | priority cards with owner/status/action, detail sheet |
| Multi-chart analytics | one chart at a time with segmented comparison |
| Filter sidebar | filter sheet with visible active-filter chips |
| Live monitoring wall | status summary plus incident timeline |
| Public report dashboard | narrative stack with source table behind details |

## QA evidence

- Screenshot shows the north-star metric, context, exception/action, and source/freshness.
- At least one filter, empty/filter-empty, stale/partial, or exception state is visible or tested.
- Chart/table pairing answers the named user question.
- Desktop/tablet/mobile screenshots preserve insight order.
- Keyboard path can reach filters, drill links, chart controls, and row actions.
- Accessible summary/table fallback exists for decision-critical charts.
- Data labels, legends, axes, and tooltips do not overlap at target viewports.

## Hard fails

- KPI cards use fake labels like "Growth", "Engagement", or "Revenue" with no unit/window/source.
- Dashboard has charts but no primary decision/action.
- All metrics are visually equal.
- Filters exist but active filter state is invisible.
- No data freshness, date range, or source cue.
- Mobile only stacks desktop tiles and loses the main action.
- Color-only status or hover-only critical values.
- Decorative chart variety replaces a source table, queue, or drill path.

## Source anchors

- Microsoft Power BI dashboard guidance emphasizes audience, key metrics, one-screen story, essential information, context, placement, and avoiding unnecessary visual variety: https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips
- Tableau dashboard best practices emphasize purposeful views, limiting dashboard content, filters, and device-specific layouts: https://help.tableau.com/current/pro/desktop/en-us/dashboards_best_practices.htm
- Tableau visual best practices emphasize matching chart type to message, visual hierarchy, audience comprehension, filters/actions, and dashboard performance: https://help.tableau.com/current/blueprint/en-us/bp_visual_best_practices.htm
- WCAG non-text contrast applies to graphical objects and visual information required to understand content: https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
