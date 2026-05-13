# UI decision brief

Produce this after the UX decision brief and before implementation. Keep it compact enough to guide code generation.

```md
UI decision brief
- Surface type: marketing / dashboard / native settings / editor / mobile flow / checkout / agent run
- Platform idiom: web / Windows / Apple / Android / cross-platform translation
- Visual direction: ...
- Density: sparse / balanced / dense / operational
- Hierarchy: primary visual, primary action, secondary surfaces
- Component grammar: cards, tables, panes, toolbars, sheets, tabs, forms, command surface
- Typography: system/native or chosen custom pair, scale, emphasis rule
- Color/materials: background, surfaces, accent, semantic states
- Motion budget: none / subtle / signature / expressive, plus reduced-motion behavior
- Assets: real product media, generated illustration, icons, screenshots, data visualizations, none
- State visuals: empty, loading, error, permission, success, long-running
- Bans: ...
```

This brief prevents the common failure where the agent picks decent components but no coherent visual system.

## Rules

- Dense work tools need stable layout more than animation.
- Marketing pages need a memorable first viewport and one clear conversion path.
- Native apps need platform materials, type, icons, spacing, and controls before custom flair.
- Editor tools need canvas dominance and control stability.
- If UX and UI conflict, preserve the user's job and recovery path first.
