# BuildDesk

BuildDesk is a polished Electron desktop app for solo builders who want a calm daily command center for small tools, plugins, packages, websites, and experiments.

## Run

```powershell
npm install
npm run dev
```

For a browser preview during UI testing:

```powershell
npm run dev:web
```

## Stark UX Decision Brief

- Job: help a returning solo builder see what changed, what matters, and which project needs attention today.
- User mode: returning daily user.
- Frequency/risk: daily repeated use, low-to-medium risk; avoid false urgency and use measured attention language.
- Pattern: operational dashboard with command surface, priority stack, and master/detail inspector.
- Primary action: refresh project status and handle the next follow-up.
- Secondary actions: search/filter projects, open source links, mark done, snooze, inspect integration health, review stale or partial data.
- Core path: open app -> scan changed projects -> select a project -> open source link or complete/snooze follow-up -> success feedback.
- Recovery path: show inline partial, stale, rate limit, and token-expired states near the affected project/integration with retry or settings entry.
- Required states: empty, loading, partial integration, token/rate-limit error, success, stale data.
- Handoff constraints: preserve scan speed, avoid marketing hero spacing, keep the project list stable, keep the thesis visible in the first viewport.

## Stark UI Decision Brief

- Surface type: desktop operational dashboard.
- Platform idiom: Electron + React with Windows desktop productivity density. Tradeoff: Electron is heavier than Tauri but matches the requested stack and mature ecosystem.
- Product thesis: a local morning desk for "what changed while I was away?"
- Visual direction: premium desktop productivity tool with Raycast/Linear-level density, restrained contrast, domain language, and native-feeling panes.
- Density: operational, compact, readable.
- Hierarchy: left project sidebar, central today queue, right inspector, command/search bar, settings/integrations entry.
- Component grammar: panes, compact cards, status rows, inspector sections, command bar, toolbar buttons, restrained banners.
- Typography: desktop-readable sans stack with tabular metadata and mono for versions, commit-ish metadata, and timestamps.
- Color/materials: warm dark desktop shell, layered neutral surfaces, blue accent for active state, semantic amber/red/green states.
- Motion budget: subtle state transitions and refresh feedback only; no scroll theatrics.
- Responsive containment: sidebar, overview, and inspector each contain overflow; narrower web preview stacks inspector below content and avoids page-level horizontal overflow.
- Asset plan: lucide icons for source, package, comments, deploys, checks, warnings, search, refresh, settings; no generated hero image.
- State visuals: empty state for no filtered projects, loading refresh overlay, partial integration banner, error banner, success toast, stale deploy/data rows.
- Bans: stock images, decorative blobs, generic purple gradients, fake SaaS hero, placeholder screenshots, generic admin CRM labels.

## Stark Asset Plan

- Needed assets: iconography, type treatment, state indicators, realistic mock data.
- Source: lucide-react icons, CSS-rendered status materials, local mock data.
- License risk: low; no third-party screenshots or copied brand assets.
- Usage: domain-specific status rows for GitHub, npm, Reddit, deploy, checks, releases, and follow-ups.
- Reference extraction: structure only from Raycast command palette density, Linear master/detail pacing, GitHub checks, npm package pages, and Reddit post/comment performance views.
- Bans: no stock images, no abstract AI gradients, no copyrighted app screenshots, no decorative product hero.

## Project Structure

- `electron/`: Electron main and preload scripts.
- `src/data/`: realistic static project data.
- `src/components/`: shell, sidebar, overview, inspector, command bar, state surfaces.
- `src/state/`: app state and actions.
