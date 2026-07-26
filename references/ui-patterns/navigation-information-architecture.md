# Navigation and information architecture

Use this before implementing multi-route sites, app shells, docs platforms, dashboards, admin tools, settings, workspaces, command palettes, or any product where the user can get lost.

Navigation is not the same as information architecture. IA defines the product objects, hierarchy, labels, and routes. Navigation is the set of controls that helps the user move through that architecture. Stark should define both before styling.

For multi-route, multi-section, multi-state, or app-like products, follow this with `experience-continuity-system.md` so object names, state language, components, type, tokens, motion, copy, responsive behavior, and QA journeys stay coherent across screens.

Source anchors:

- Nielsen Norman Group's menu-design checklist emphasizes visible navigation, clear labels, current-location cues, breadcrumbs, local navigation, and avoiding jargon.
- W3C WAI's page-structure tutorial frames landmarks and structure as tools for navigation and orientation.
- MDN's `<nav>` guidance notes that pages may have several navigation sections and should label them when needed.
- MDN's ARIA navigation role guidance mirrors the same labeling requirement for repeated navigation landmarks.

## Navigation/IA brief

```md
Navigation/IA brief
- Product job:
- User mode:
- Primary objects:
- Route map:
- Navigation model:
- Current-location model:
- Search/command model:
- Breadcrumb/tab model:
- Deep-link/state model:
- Empty/404/permission route states:
- Mobile replacement:
- Focus/scroll restoration:
- Responsive containment:
- QA checks:
```

If the product has more than one route, the route map is required. If the product has one route with multiple panels, the panel hierarchy and current-location model are still required.

## Route topology

| Topology | Use when | Must include | Avoid |
|---|---|---|---|
| Flat marketing/page nav | Few public pages or page sections | one conversion path, section anchors, active section when sticky | app-like sidebar for simple content |
| Hub and spoke app | Users return to a few major areas | home/hub state, persistent global nav, clear selected area | making every subpage a top-level item |
| Master/detail | Users compare, triage, inspect, or edit objects | list state, selected object, detail route, empty selection state | detail pages with no way back to filtered context |
| Workspace/project scoped | Work belongs to an account, project, team, or tenant | scope switcher, scoped routes, permission state, URL-safe object identity | hiding the current workspace in a tiny label |
| Docs/reference hierarchy | Users search, browse, and deep link | local nav/tree, search, table of contents, breadcrumbs, copyable anchors | hamburger-only desktop docs nav |
| Settings/admin groups | Users configure risky or grouped options | searchable settings, grouped sections, dirty state, permission blocks | mystery labels like General, Advanced, Misc |
| Workflow steps | Users complete a risky or ordered process | stepper/progress, save/resume, review step, validation state | steps that cannot be deep linked or recovered |
| Editor/canvas shell | Users work in a primary canvas with tools | canvas route, stable tools, inspector route/state, asset/library browser | navigation that steals canvas priority |

## Navigation model matrix

| Model | Use | Must include | Avoid |
|---|---|---|---|
| Top nav | public sites, simple SaaS, page families | clear labels, active area, visible primary action | hiding product proof behind vague labels |
| Sidebar | apps, docs, admin, workspaces | selected route, group labels, collapsed behavior, keyboard path | turning every object into a permanent nav item |
| Split nav | complex apps with global areas plus local object nav | global/local ownership, route depth, scope label | two navs with competing active states |
| Tabs | sibling views of the same object or dataset | active tab, count/status where useful, shared object context | tabs for unrelated destinations |
| Breadcrumbs | deep hierarchy, docs, scoped workspaces | human labels, clickable ancestors, current page title agreement | using breadcrumbs as the only navigation |
| Command/search | power use, docs, large apps | groups, empty/loading, disabled reasons, keyboard model, focus return | command palettes that expose random actions |
| Stepper | ordered flows and review wizards | current step, completion state, validation, save/resume | steppers for exploratory browsing |
| Bottom nav | mobile products with 3-5 primary modes | stable labels/icons, active state, safe touch targets | dumping desktop sidebar items into a bottom bar |
| Context rail | selected object actions, metadata, inspectors | object identity, current state, primary next action | rail content that changes too much to trust |

## IA object rules

- Route around product objects and user tasks, not database nouns.
- Keep labels concrete and front-loaded: "Invites", "Billing", "Runs", "Artifacts", "Access" beats "Manage" and "Resources".
- Do not use generic top-level buckets like Overview, Analytics, Settings, and Activity unless their contents are specific and distinct.
- Preserve user scope: workspace, project, account, selected object, saved view, and filter context should be visible or recoverable.
- Do not make the primary navigation a gallery of feature cards. Cards can explain or summarize; they should not replace orientation.

## Current-location model

Every app shell needs at least three orientation cues:

- active navigation item or section
- page title that agrees with the route
- object/scope identity when the route is scoped

For deep routes, also add breadcrumbs, a local nav tree, or sibling tabs. For filtered/list-driven products, preserve the selected filter, search query, sort, page, and selected object through back/forward and detail navigation.

## Search and command model

Use command palettes or global search only when there is a real action/retrieval model.

Required states:

- closed, opening, open
- query empty, loading, results, no results
- grouped results/actions
- disabled command with reason
- permission-blocked result
- execution success/error
- focus return to the invoking control

Search should reveal destinations, objects, docs, and actions according to product job. It should not become a junk drawer for features the IA failed to organize.

## Route state rules

Route-level states are part of IA:

- loading route
- empty route
- partial/stale route
- 404/not found
- permission denied
- offline/unavailable
- unsaved navigation guard
- first-run/onboarding gate
- deleted or archived object

These states need real copy, next actions, and a way back to a stable route.

## Mobile and responsive replacement

- Sidebar can become a sheet/drawer when navigation is secondary and current location stays visible.
- Sidebar should become bottom nav only when there are 3-5 true primary modes.
- Docs need mobile search plus current article context; do not bury both tree and search behind one unlabeled menu.
- Master/detail often becomes list route -> detail route; preserve filters and selected item when returning.
- Toolbars, tabs, breadcrumbs, and nav rows need bounded wrapping or horizontal scroll inside their own region.

## Focus, scroll, and route continuity

- On route change, move focus to the main heading or main region.
- Restore scroll on back/forward; reset scroll on new top-level destinations unless the product convention says otherwise.
- Preserve selected object and filters across detail routes.
- Use View Transitions or animated route changes only when they improve orientation.
- Reduced motion should use instant state continuity, not remove orientation cues.

## QA checks

- Open a deep link directly and verify scope, nav active state, page title, and object identity.
- Refresh on a nested route and verify loading, data, permission, and 404 behavior.
- Use browser back/forward after filters, search, detail navigation, and tabs.
- Keyboard through global nav, local nav, tabs, breadcrumbs, search, and command palette.
- Trigger empty, loading, permission, deleted-object, and 404 route states.
- Resize to mobile and verify current location, primary action, and route recovery remain visible.
- Check landmarks: each navigation region is semantic and repeated nav landmarks are labeled.
