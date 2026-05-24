# Desktop app archetypes

Use this before generating Windows, macOS, Electron, Tauri, Avalonia, Uno, or other desktop app UI.

The goal is to avoid the default desktop sameness: sidebar, title, cards, settings rows, and a pleasant empty state. That shell is sometimes correct, but it is not a desktop design strategy.

## Required decision

Before code, choose one archetype:

| Archetype | Use for | Primary shape | Avoid |
|---|---|---|---|
| Command center | utilities, developer tools, admin operations | navigation + command surface + status rail | passive settings-card stack |
| Library / collection | music, photos, files, notes, assets, snippets | browsable grid/list + preview + metadata inspector | dashboard metrics as the main view |
| Workbench | editors, builders, analysis tools, IDE-like products | canvas/document + toolbar + inspector + activity/history | decorative cards around the work area |
| Monitoring cockpit | agents, sync, deploys, scanners, jobs, devices | priority stack + timeline/log + detail pane | generic KPI cards |
| Tray / menu-bar utility | background tools, quick actions, small status apps | compact popover + one primary toggle/action + recent events | full app shell for tiny jobs |
| Media / consumer desktop | music, video, reading, creative browsing | immersive content surface + native chrome + queue/now-playing/detail | system settings look |
| Document / knowledge app | docs, research, notes, local files | three-pane reading/editing layout + search + outline | marketing-dashboard spacing |
| Setup / preferences | configuration, permissions, accounts | grouped settings + inline validation + safe defaults | over-branded custom controls |

If the request is vague, infer the archetype from the product job and state the assumption. Only ask if two archetypes would lead to very different code.

## Desktop decision brief

Add this to the UI decision brief for desktop work:

```md
Desktop archetype
- Archetype: command center / library / workbench / monitoring cockpit / tray utility / media consumer / document app / setup preferences
- Main object: file, track, run, note, project, device, account, document, or selection
- Primary workspace: list, canvas, preview, timeline, table, grid, or popover
- Secondary surfaces: inspector, queue, activity, properties, command palette, settings, logs
- Chrome: native title bar, sidebar, toolbar, tabs, split view, menu bar, tray, or floating palette
- Empty/non-happy state: ...
- Distinctive anchor: ...
```

## Archetype rules

### Command center

- Put the command surface near the top or in a dedicated toolbar.
- Show current status, last run, alerts, and next action in the first viewport.
- Use saved views, recent commands, keyboard shortcuts, and quick filters.
- Use a settings page only as a secondary destination.

### Library / collection

- Let the collection be the first visual: albums, projects, files, clips, notes, records, or assets.
- Pair browsing with preview and metadata.
- Use selection, sorting, grouping, and search as first-class controls.
- Add an inspector or detail pane instead of navigating away for every item.

### Workbench

- The artifact owns the screen.
- Toolbars should be icon-led, stable, and grouped by task.
- Inspector controls are contextual to selection.
- Undo/redo, autosave/saved state, export, and conflict states must be visible.

### Monitoring cockpit

- Start with the current risk, queue, run, device, or incident.
- Prefer timeline/log/detail panes over decorative metric cards.
- Include stale, failed, retrying, paused, blocked, and complete states.
- Make stop, retry, resume, and open-artifact actions obvious.

### Tray / menu-bar utility

- Design the compact surface first.
- One main action or status toggle should be reachable immediately.
- Show recent events and a path to full settings.
- Avoid turning a background utility into a full dashboard unless the product truly needs it.

### Media / consumer desktop

- Content and brand can lead while native chrome remains correct.
- Use artwork, previews, queue, recommendations, or now-playing as the visual anchor.
- Preserve platform navigation, keyboard, focus, and accessibility.
- Avoid bland system-utility layout unless the app is actually a utility.

### Document / knowledge app

- Search, outline, content, and selection should be stable.
- Use split view, tabbed documents, reading widths, backlinks, or activity where relevant.
- Empty states should create/import/open the first document.
- Avoid card dashboards that delay reading or writing.

### Setup / preferences

- This is the one archetype where grouped settings are usually correct.
- Keep validation inline.
- Keep risky toggles close to explanation and recovery.
- Use native controls and semantic system materials.

## Distinctive anchors for desktop

Pick one anchor per app:

- a persistent command strip
- a live timeline or run replay
- a preview/inspector pairing
- an oversized content hero for the selected item
- a compact status popover
- a tabbed workbench
- a split library + now-playing/preview surface
- a local file/map/tree as the first object
- a keyboard-first launcher palette
- a branded but native content surface

One anchor is enough. The rest of the UI should support it.

## Anti-sameness checklist

Before shipping desktop UI, ask:

1. Did I choose an archetype before picking components?
2. Is the main object visible immediately?
3. Is this more specific than a sidebar plus cards?
4. Does the layout match a desktop workflow, not a mobile/web page stretched wide?
5. Are settings secondary unless the product is a preferences app?
6. Is there a non-happy state visible or specified?
7. Is there one memorable desktop anchor?

If the answer to 1-3 is no, redesign the shell before styling it.
