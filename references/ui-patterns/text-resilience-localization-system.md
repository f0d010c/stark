# Text resilience and localization system

Use this before implementation when UI depends on dynamic labels, user-generated text, data tables, dates, currencies, units, translated strings, RTL languages, mixed scripts, compact controls, custom fonts, or mobile/narrow layouts.

The goal is not to fully localize every generated mock. The goal is to design as if real copy, real locales, and real data will arrive later without breaking the interface.

Source anchors:

- W3C Internationalization recommends declaring base direction with `dir` and using bidi markup only where direction actually changes.
- MDN documents the JavaScript `Intl` APIs for locale-aware dates, numbers, lists, relative time, and plural-sensitive formatting.
- Unicode CLDR defines locale data patterns for numbers, currency, dates, time, and measurement conventions.
- WCAG Reflow and Resize Text require layouts to survive narrow/zoomed presentations without loss of content or function.

## Use when

- Labels, nav items, tabs, buttons, chips, table cells, cards, forms, docs, pricing, or dashboards contain real product text.
- The product may be translated, sold internationally, or used with user-generated content.
- Dates, times, time zones, currencies, units, percentages, counts, file sizes, phone numbers, or addresses appear.
- The design uses custom fonts, display type, tight controls, fixed cards, dense tables, or single-line hero text.
- The UI may need RTL, Arabic/Hebrew text, CJK, accented Latin text, long German-style labels, mixed LTR IDs, or no-space strings.

## Output contract

```md
Text resilience/localization system
- Surface:
- Text sources:
- Locale/formatting scope:
- Expansion risk:
- Wrapping/truncation rules:
- Date/number/currency/unit rules:
- Plural/grammar rules:
- RTL/bidi behavior:
- Font fallback/subset plan:
- Component stress cases:
- QA checks:
```

## Text sources

Classify every important text source:

- **Authored UI copy**: nav, CTAs, headings, labels, helper text, empty/error/recovery copy.
- **Domain data**: names, statuses, owners, records, regions, SKUs, tickets, clips, prompts, branches, files, policy names.
- **Generated/user content**: descriptions, comments, logs, prompts, file names, messages, organization names.
- **Formatted values**: dates, times, relative time, currency, units, counts, percentages, ranges, lists.
- **Accessibility text**: button names, icon labels, live-region status, table summaries, chart summaries.

Hard fail if the design relies on lorem ipsum, one-word labels, or perfect English strings to preserve layout polish.

## Expansion rules

- Plan for 30-50% longer translated labels in nav, buttons, tabs, filters, badges, and table headers.
- Compact controls that cannot wrap need an explicit truncation rule, tooltip/full-label escape, and accessible name.
- Avoid fixed-height text containers unless the component has a tested line clamp or scroll owner.
- Do not rely on manual hero line breaks unless the page is single-locale and the break is intentionally art-directed.
- Test at least one very long unbroken token such as a file path, model name, transaction ID, or generated slug.

## Wrapping and truncation

- **Buttons**: prefer short action verbs. If a label can expand, allow width growth within a control group or choose an icon+label pattern with responsive label hiding only when the icon remains understandable.
- **Tabs/nav**: set min/max behavior, current-state visibility, overflow menu or horizontal scroll owner, and full accessible labels when text truncates.
- **Chips/badges**: keep status meaning visible, not color-only. Truncate inside the chip only when full value is available nearby or on focus/hover.
- **Tables**: names and descriptions may wrap; IDs and hashes may truncate with copy affordance; numbers align; units stay attached to values; headers survive expansion.
- **Forms**: labels sit above fields on narrow screens, helper/error text wraps, placeholder-only labels are forbidden, and validation messages can be longer than one line.
- **Cards**: titles and primary data get stable line limits; secondary copy can wrap; card actions cannot be pushed outside the visible region.
- **Tooltips/popovers**: do not make them the only place essential information appears.

## Locale formatting

Use locale-aware APIs or framework i18n helpers instead of handcrafted strings:

- `Intl.DateTimeFormat` for dates, times, date ranges, and time zones.
- `Intl.NumberFormat` for decimals, percentages, currency, units, compact numbers, and sign display.
- `Intl.RelativeTimeFormat` for "3 min ago" style labels.
- `Intl.ListFormat` for human-readable lists.
- `Intl.PluralRules` or an ICU-message layer for count-sensitive grammar.

Rules:

- Do not hardcode `$`, comma separators, decimal separators, or `MM/DD/YYYY`.
- Show units where ambiguity would change the user's decision.
- For operational screens, show freshness and time zone when timing affects risk.
- For money, include currency code or context when symbol ambiguity matters.
- For ranges, durations, and relative time, decide whether precision or scan speed wins.

## Plural and grammar

- Do not concatenate `"1 " + noun + "s"` or similar fragments.
- Treat count, gendered language, grammatical case, and word order as translation concerns.
- Keep variable interpolation visible in the brief: `{count} failed runs`, `{owner} approved`, `{amount} due by {date}`.
- Avoid CTAs whose meaning depends on English word order when the interface may be translated.

## RTL and bidi behavior

- Use semantic direction (`dir`) and logical CSS properties: `margin-inline`, `padding-inline`, `inset-inline`, `border-inline`, `text-align: start/end`.
- Mirror directional layout, disclosure, and navigation icons only when they represent physical direction. Do not mirror play, refresh, brand marks, or semantic icons incorrectly.
- Isolate mixed-direction IDs, file paths, code, model names, and email addresses with `bdi`, `dir="auto"`, or equivalent framework support.
- Form inputs that accept user text should preserve the user's entered direction when needed.
- QA at least one RTL layout when the product can plausibly be international.

## Font fallback and scripts

- Custom display fonts must cover the scripts in scope or have a fallback stack with compatible metrics.
- Do not use decorative/display faces for scripts they do not support.
- Use tabular figures for dashboards, pricing comparisons, tables, timers, and aligned numeric UI.
- Test fallback metrics: a beautiful font choice fails if CJK, Arabic, Hebrew, accented Latin, or emoji fallback shifts the layout.
- Subset fonts for performance, but do not subset away characters needed by names, currencies, units, or interface states.

## Component stress cases

Before shipping a serious UI, test the riskiest components with:

- 50% longer labels.
- A long German-style compound word.
- CJK text with no Latin spacing assumptions.
- Arabic or Hebrew RTL text.
- A mixed-direction string: Arabic/Hebrew sentence with an English product name, email, ID, or file path.
- Large currency values, negative values, compact values, and uncommon currency codes.
- Long dates and explicit time zones.
- Error/recovery messages that wrap to two or three lines.
- 200% zoom and a 320px-wide viewport.

## QA checks

- No clipped text in buttons, tabs, chips, cards, tables, nav, forms, dialogs, or toasts.
- No page-level horizontal overflow from long strings.
- Essential information is not hidden only behind truncation, color, hover, or a tooltip.
- Accessible names remain meaningful after visual truncation or responsive label hiding.
- Locale-formatted dates, numbers, currencies, units, and plural messages are not handcrafted.
- RTL layout preserves hierarchy, current location, control order, and focus order.
- Font fallback does not cause visible layout shift or mismatched tone in supported scripts.

## Hard fails

- Clipped primary CTA, nav item, tab, form label, or error text.
- Placeholder-only form labels.
- Hardcoded currency/date/number format in a product that handles real markets.
- A localized page whose hero or card layout depends on one exact English line break.
- Critical text embedded in a bitmap image with no code-native equivalent.
- Truncation hides the value needed to decide or recover.
- RTL flips the layout but leaves focus order, icons, or mixed-direction strings broken.
- Custom font lacks script coverage with no fallback plan.
