# Data visualization library selection

Use this before implementation when charts, graphs, maps, timelines, source tables, metric panels, or analytics proof are part of the product.

Charts are interface decisions. They must answer a question, support a decision, and remain understandable without animation, hover, perfect color vision, or desktop width.

## Data-viz brief

```md
Data-viz brief
- User question:
- Decision/action:
- Dataset shape:
- Required comparison:
- Chart form:
- Library:
- Interaction:
- Accessible summary:
- Table/source fallback:
- Responsive replacement:
- Motion rule:
- Rejected libraries:
- QA checks:
```

## Choose the question first

Do not start with "add a chart." Start with the decision the user needs to make.

| User question | Good form | Avoid |
|---|---|---|
| What changed over time? | line, area, event timeline, annotation | pie, radial, animated counters |
| Which category is largest? | sorted bar, lollipop, ranked table | donut with many slices |
| Where is the problem? | heatmap, grouped table, map only when location matters | decorative map, tiny choropleth |
| How do groups compare? | grouped bars, small multiples, slope chart | stacked area when exact comparison matters |
| What caused the change? | annotated timeline plus source table | unlabeled spike with no event context |
| Which item needs action? | priority table plus sparkline or badge | standalone chart with no row/action |
| How does a flow convert? | funnel with counts and drop-off labels | percentage-only funnel |
| Is a threshold breached? | banded line, bullet chart, alert row | color-only status |

If the chart does not change a decision, replace it with a table, summary insight, or remove it.

## Library matrix

| Library | Use when | Strength | Avoid when |
|---|---|---|---|
| Native SVG + CSS | one-off small charts, sparklines, proof marks, tiny dashboards | tiny bundle, full styling control, easy static fallback | rich interaction, zooming, complex scales |
| Chart.js | familiar line/bar/doughnut/scatter charts with light interaction | fast standard charts, canvas rendering, broad ecosystem | accessibility is not automatic; complex bespoke marks |
| Recharts | React dashboards with composable common charts | React component mental model, quick product charts | huge datasets, highly custom marks, fragile responsive containers |
| Apache ECharts | dense operational analytics, many series, zoom/brush/tooltips/maps | rich interactions, datasets, large chart feature set, accessibility options | tiny static charts, fully bespoke editorial visuals |
| D3 | custom visual grammar, unusual marks, custom interaction/math | maximum control over scales, layout, interaction, DOM/SVG/canvas | simple dashboards where a smaller library is enough |
| visx | React-owned bespoke charts using D3 primitives | design-system chart primitives, custom React composition | quick standard charts with low design risk |
| Observable Plot | exploratory analysis, fast declarative charts, small multiples | concise marks/scales/transforms/facets | heavily branded app components needing deep React ownership |
| Vega-Lite | declarative specs, analysis tooling, reproducible chart grammar | portable spec, clear encoding model | deeply custom hand-tuned product interactions |

Use one charting family per surface unless there is a named reason. Mixing libraries often creates mismatched tooltips, legends, fonts, colors, and interaction behavior.

## Design rules

- Title the chart as the question or answer, not the chart type.
- Put units, source, date range, filters, and freshness near the chart.
- Use tabular figures for metrics and axes.
- Prefer direct labels over legends when space allows.
- Keep color semantic and redundant: use labels, patterns, shape, or position, not color alone.
- Keep chart animation functional: reveal, filter, compare, focus, or transition between related states.
- Never use 3D chart forms for product analytics unless the product object is spatial data.
- Preserve data honesty: zero baselines for bars unless explicitly justified, clear truncation, visible missing data, no smoothed line that hides volatility.

## Accessibility contract

Every chart needs:

- accessible name that states the chart purpose
- text summary of the main insight
- source/table fallback or link to underlying data
- non-color encoding for critical differences
- keyboard path for interactive filters, tooltips, or selected points
- visible focus for chart controls
- no hover-only critical values

Canvas charts need extra care because canvas pixels are not exposed as semantic data. Add ARIA/fallback content or a nearby accessible summary/table.

## Responsive replacements

Do not only shrink charts:

| Desktop chart | Mobile replacement |
|---|---|
| wide multi-series line | latest value + trend summary + horizontal scroll detail |
| dense table + chart | priority list first, chart in expandable detail |
| small multiples grid | swipe/segmented series, one comparison at a time |
| heatmap | grouped list with severity labels |
| map | location ranking unless geography is the decision |
| scatterplot | summary clusters + selected outliers list |
| funnel | stacked step cards with counts, drop-off, next action |

## QA checks

- The chart answers the named question without reading the surrounding paragraph.
- Units, source, date range, and freshness are visible.
- Axis labels, tick labels, legends, and tooltips do not overlap at desktop and mobile widths.
- Critical information is not color-only or hover-only.
- Table/source fallback exists for canvas, dense, or decision-critical charts.
- Empty, loading, partial, stale, filter-empty, and export-failed states are represented when relevant.
- Motion is reduced or removed under `prefers-reduced-motion`.
- The chosen library owns a real need; rejected libraries are named.

## Source anchors

- Chart.js accessibility docs explain that canvas content is not accessible to screen readers without ARIA or fallback content: https://www.chartjs.org/docs/latest/general/accessibility.html
- Chart.js responsive docs require a dedicated, relatively positioned container for responsive canvas sizing: https://www.chartjs.org/docs/latest/configuration/responsive.html
- Apache ECharts supports ARIA descriptions and decal patterns for non-color differentiation when imported/enabled: https://echarts.apache.org/handbook/en/best-practices/aria/
- Apache ECharts dataset guidance separates changing data from chart configuration and supports mapping data to visuals: https://echarts.apache.org/handbook/en/concepts/dataset/
- Observable Plot uses marks, scales, transforms, facets, and projections rather than fixed chart types: https://observablehq.com/plot/
- D3 describes itself around data-driven documents and custom visualizations: https://d3js.org/what-is-d3
- WCAG non-text contrast applies to graphical objects and visual information required to understand content: https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
