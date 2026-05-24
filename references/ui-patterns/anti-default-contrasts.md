# Anti-default contrasts

Use this when a design starts drifting toward the familiar generated skeleton. Each contrast pairs a weak default with a stronger replacement.

Do not only say what is banned. Choose the replacement pattern before code.

## Universal replacements

| Weak default | Stronger alternative |
|---|---|
| Sidebar + cards + table | Archetype-specific shell: command deck, library, workbench, cockpit, ledger, light table, archive index |
| Centered hero + subtitle + two CTAs | First viewport built around proof, object, command, or decision |
| Three feature cards | Product proof, comparison, timeline, trust matrix, or artifact gallery |
| Generic dashboard metrics | Operational thesis: what is at risk, what queue is active, what action is next |
| Decorative illustration | Inspectable product state or domain object |
| Default system/Georgia/Cascadia mockup typography | Chosen type personality: display, UI/body, mono labels, and banned fallback |
| Pretty empty state | Empty state that explains how data arrives and what to do next |
| Spinner | Skeleton, progress timeline, current step, retry/cancel/resume |
| “Activity” feed | Audit trail with actor, action, object, timestamp, consequence |
| “Analytics” page | Decision surface with segment, delta, cause, next action |
| “Settings” as whole app | Put settings behind the main job unless the product is preferences |

## Desktop replacements

| Weak default | Stronger alternative |
|---|---|
| NavigationView with identical cards on every page | Choose command center, library, workbench, monitoring cockpit, tray utility, media surface, document app, or preferences |
| macOS sidebar + blank detail pane | Main object stage plus inspector, outline, preview, table, or document surface |
| Electron app that looks like a website in a frame | Desktop-specific chrome, keyboard paths, bounded panes, menus, native title behavior |
| SettingsCard stack for a media app | Collection wall + now-playing stage + queue/state surface |
| Chat shell for agent work | Plan preview + run timeline + artifact inspector + stop/retry/resume |
| Full dashboard for a tiny background utility | Menu-bar/tray popover with one primary action and recent events |
| Big cards for file work | File tree/index + preview + provenance + transfer/recovery state |
| Decorative dashboard widgets | Live queue, selected detail, logs, audit, or command palette |

## Web replacements

| Weak default | Stronger alternative |
|---|---|
| Hero + three features + CTA | Hero proof + process/story + comparison/trust + final close |
| Purple gradient AI SaaS | Direction-specific palette plus product proof and concrete copy |
| Bento grid with static tiles | Active bento with actual state, expansion, or product details |
| Abstract mesh hero | Generated/code-rendered product visual or meaningful object |
| Generic logos/social proof | Specific trust proof: audit, permissions, speed delta, customer workflow |
| Every section `py-20` | Deliberate rhythm: tall hero, short context, dense proof, quiet trust, large close |
| “Built for modern teams” | Concrete user/job/outcome labels |
| Scroll motion everywhere | One signature motion tied to story or continuity |

## Native mobile replacements

| Weak default | Stronger alternative |
|---|---|
| Web dashboard squeezed into phone | One thumb-reachable task flow with progressive disclosure |
| Custom controls for personality | Native controls plus original composition/content/state |
| Five tabs because web nav had five sections | Platform navigation matched to frequency and reach |
| Celebration screen for routine success | Success state with next useful action |
| Onboarding carousel | Guided setup that reaches first value |

## Rewrite examples

### File sync app

Weak:

```text
[sidebar]
[storage cards]
[recent activity table]
```

Stronger:

```text
[sync health + pause/resume]
[roots tree] [transfer lanes] [selected file provenance]
[checkpoint log + retry stalled transfer]
```

### AI agent app

Weak:

```text
[chat]
[spinner]
[output card]
```

Stronger:

```text
[goal + approve/stop]
[run queue] [plan/timeline/tool calls] [artifacts/diff inspector]
[blocked permission / failed test / resume checkpoint]
```

### Developer tool landing page

Weak:

```text
[centered hero]
[three feature cards]
[logo cloud]
[CTA]
```

Stronger:

```text
[hero command + real output proof]
[workflow timeline with failure/retry]
[permission/trust matrix]
[docs/API split preview]
[final install command]
```

### Music app

Weak:

```text
[sidebar]
[album cards]
[settings cards]
```

Stronger:

```text
[transport/search]
[library sources] [collection wall] [now-playing stage]
[queue + unavailable/offline state]
```

## Final anti-default question

Before code, ask:

> If I replaced the domain words and logo, would this still look like the same UI?

If yes, rewrite the layout sketch until the product's actual object, state, or decision shapes the page.
