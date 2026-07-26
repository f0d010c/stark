# Native desktop app quality contract

Use this after `desktop-app-archetypes.md` and before Windows, macOS, Electron, Tauri, Avalonia, Uno, or other desktop implementation.

The goal is to stop desktop generations from becoming a web dashboard inside a window. A good desktop app has a window model, command model, primary object, native control grammar, resize behavior, state coverage, and platform evidence.

## Required desktop brief

Before code, write:

```md
Native desktop quality
- Target platform and stack: Windows WinUI / macOS SwiftUI-AppKit / Tauri / Electron / Avalonia / Uno / other
- Desktop archetype: command center / library / workbench / monitoring cockpit / tray utility / media consumer / document app / setup preferences
- Main object: file, run, project, account, device, track, note, selection, timeline, or document
- Window model: single window, document windows, utility window, tray/menu-bar popover, inspector window, settings window, or modal sheet
- Command model: menu bar, toolbar, command bar, command palette, context menu, shortcuts, drag/drop, open/save/share/export
- Navigation model: sidebar, split view, tabs, breadcrumbs, recents, search, outline, queue, or none
- Work surface: canvas, table, list, grid, timeline, editor, preview, map, waveform, queue, or settings form
- Secondary surfaces: inspector, detail pane, properties, activity, logs, history, preview, queue, or help
- Native material/chrome: Mica/Acrylic, Liquid Glass/material, title-bar overlay, system title bar, toolbar, sidebar material
- Density and resize: compact/comfortable density, minimum size, wide layout, narrow layout, pane collapse, overflow behavior
- States and recovery: empty, loading, stale, permission, offline, failed, selected, busy, destructive, undo/recovery
- Keyboard and focus: shortcuts, tab order, focus return, command palette/search, menu equivalents
- Platform evidence: build/run command, screenshot/simulator target, high-contrast/dark mode, resize proof, interaction proof
```

## Desktop quality rules

1. The main object must be visible in the first window state. Do not start with generic welcome cards unless the product is truly empty.
2. Commands belong in desktop places: toolbar, command bar, menu bar, context menu, palette, tray/menu-bar item, or inspector. Do not hide primary work behind marketing buttons.
3. A desktop app must define what happens at narrow, standard, and wide window widths. Sidebars, inspectors, tables, canvases, and toolbars need collapse or overflow rules.
4. Use native controls for platform-owned jobs: menus, open/save panels, search fields, split views, tables, sidebars, toggles, context menus, alerts, sheets/dialogs, drag/drop, file handling, and settings.
5. Product identity can change composition, content surface, motif, imagery, and typography accents. It should not replace platform controls with web chrome when native fit is requested.
6. Settings are secondary unless the app is a setup/preferences app.
7. At least one non-happy state must be present or specified in the primary workflow.
8. At least one keyboard path must exist for the primary repeated action.
9. For long-running work, show stop, pause/resume, retry, inspect logs/artifacts, and completed history where relevant.
10. Final acceptance needs platform/runtime evidence, not only a static screenshot.

## Platform-specific enforcement

### Windows

- Prefer WinUI 3 controls for native apps: `NavigationView`, `CommandBar`, `MenuBar`, `InfoBar`, `ContentDialog`, `TeachingTip`, `GridView`, `ListView`, `TreeView`, `TabView`, and `SettingsCard` where appropriate.
- Use Mica on the persistent window surface and Acrylic for transient surfaces. Preserve Snap Layouts by using the platform title-bar APIs correctly.
- Use Segoe UI Variable and Segoe Fluent Icons for strict native UI.
- Check dark/light theme, high contrast, keyboard focus, window resize, and command equivalents.
- Sources: Microsoft Windows app design and Fluent guidance at https://learn.microsoft.com/windows/apps/design/ and WinUI Gallery at https://github.com/microsoft/WinUI-Gallery.

### macOS

- Prefer SwiftUI/AppKit patterns: `NavigationSplitView`, `Table`, `OutlineGroup`, `.inspector`, toolbars, menus/commands, `DocumentGroup`, `Window`, `Settings`, and `MenuBarExtra`.
- Use sheets, popovers, sidebars, inspectors, document windows, and menu commands according to the Human Interface Guidelines.
- Use SF typography/SF Symbols for native UI. Custom display type may brand content surfaces, not system chrome.
- Check keyboard shortcuts, focus, window restoration, sidebar/inspector collapse, dark mode, Dynamic Type where relevant, and reduced motion.
- Sources: Apple Human Interface Guidelines at https://developer.apple.com/design/human-interface-guidelines/ and SwiftUI documentation at https://developer.apple.com/documentation/swiftui.

### Tauri and Electron

- Decide whether the app is a desktop web shell or a native-feeling shell. Do not pretend a web app is fully native without naming the tradeoff.
- Use the system title bar unless custom chrome clearly improves the product and preserves drag regions, window controls, keyboard navigation, and accessibility.
- Map OS integrations explicitly: tray/menu bar, file open/save, notifications, deep links, global shortcuts, native menus, and secure permissions.
- Keep the web design system, but add desktop behaviors: context menus, shortcuts, resize, offline/local state, file drag/drop, and persistent preferences.
- Sources: Tauri window and menu capabilities at https://tauri.app/ and Electron window/menu docs at https://www.electronjs.org/docs/latest/.

## Anti-generic desktop failures

Hard fail if any of these remain:

- Sidebar plus cards plus table with no desktop archetype or main object.
- Fake title bar that breaks platform window behavior.
- Marketing hero or landing-page sections inside a productivity desktop app.
- Primary command exists only as a large CTA button while menus, toolbars, shortcuts, and context actions are absent.
- No resize behavior for sidebars, inspectors, tables, toolbars, canvas, or dense regions.
- No keyboard/focus path for the primary repeated action.
- Native app uses web fonts/icons in platform chrome without a branded-native rationale.
- Electron/Tauri app copies a web landing page without file/tray/menu/shortcut/window integration.
- Settings shell used for a media, editor, monitoring, library, or document app without a product-specific work surface.
- No empty/loading/error/permission/offline/recovery state.
- No platform build/run/screenshot evidence when the requested deliverable is native or desktop.

## QA evidence

Minimum evidence for desktop app acceptance:

- Screenshot or simulator/device capture at standard desktop size.
- Narrow-window and wide-window evidence, or stated min-size reason.
- One command path tested by click/menu/shortcut.
- One state beyond the happy path.
- Dark mode or high contrast check where the platform supports it.
- Focus/keyboard path for primary repeated action.
- Build/run command result or explicit blocker.

For serious desktop UI, also run `implementation-review-loop.md`, `qa-evidence-contract.md`, `runtime-evidence-regression-contract.md`, and the relevant platform skill's test/build workflow.
