import type { BuildProject } from "../types";

export const projects: BuildProject[] = [
  {
    id: "stark",
    name: "stark",
    kind: "Codex design plugin",
    repo: "f0d010c/stark",
    packageName: "stark",
    url: "https://github.com/f0d010c/stark",
    health: "attention",
    attention: "CI failed on Windows smoke tests after the desktop audit command change.",
    updatedAt: "8 min ago",
    stale: false,
    partial: false,
    metrics: {
      stars: { value: 814, delta: "+19" },
      issues: { open: 7, delta: "+2" },
      prs: { open: 3, delta: "+1" },
      release: "v0.3.0",
      npmDownloads: { value: "12.8k", delta: "+42%" },
      versionDrift: "2 packages behind",
      reddit: { views: "18.4k", upvotes: 312, comments: 47, delta: "12 new replies" },
      checks: "failed",
      deploy: "healthy"
    },
    activity: [
      { id: "a1", tone: "danger", label: "CI failed", detail: "windows-latest smoke test failed in 2m 18s.", time: "8 min ago" },
      { id: "a2", tone: "good", label: "npm downloads spiked", detail: "stark up 42% over the trailing 24h.", time: "31 min ago" },
      { id: "a3", tone: "warn", label: "Reddit replies", detail: "12 new comments on the launch thread need triage.", time: "1h ago" }
    ],
    followUps: [
      { id: "f1", text: "Open failed check and inspect Windows screenshot diff", source: "GitHub Actions", due: "Today", status: "open" },
      { id: "f2", text: "Reply to Reddit questions about Electron route", source: "Reddit", due: "Today", status: "open" }
    ],
    integrations: [
      { name: "GitHub", status: "ok", detail: "Synced 8 min ago" },
      { name: "npm", status: "ok", detail: "Downloads refreshed" },
      { name: "Reddit", status: "ok", detail: "47 comments tracked" },
      { name: "Deploy", status: "ok", detail: "Docs site live" }
    ]
  },
  {
    id: "agent-skillforge",
    name: "agent-skillforge",
    kind: "npm package",
    repo: "f0d010c/agent-skillforge",
    packageName: "agent-skillforge",
    url: "https://www.npmjs.com/package/agent-skillforge",
    health: "attention",
    attention: "Release draft is waiting while package consumers are still on the older CLI.",
    updatedAt: "22 min ago",
    stale: false,
    partial: false,
    metrics: {
      stars: { value: 236, delta: "+6" },
      issues: { open: 4, delta: "0" },
      prs: { open: 1, delta: "+1" },
      release: "draft v0.4.0",
      npmDownloads: { value: "5.1k", delta: "+18%" },
      versionDrift: "latest tag behind draft",
      reddit: { views: "4.7k", upvotes: 86, comments: 11, delta: "steady" },
      checks: "passing",
      deploy: "healthy"
    },
    activity: [
      { id: "a4", tone: "warn", label: "Release draft waiting", detail: "v0.4.0 notes are complete but the package has not been published.", time: "22 min ago" },
      { id: "a5", tone: "good", label: "Checks passed", detail: "lint, test, audit, and dry-run pack all green.", time: "28 min ago" }
    ],
    followUps: [
      { id: "f3", text: "Publish v0.4.0 after final changelog skim", source: "Release", due: "Today", status: "open" },
      { id: "f4", text: "Turn deterministic impact labels into docs snippet", source: "Docs", due: "Tomorrow", status: "snoozed" }
    ],
    integrations: [
      { name: "GitHub", status: "ok", detail: "Synced 22 min ago" },
      { name: "npm", status: "ok", detail: "5.1k weekly downloads" },
      { name: "Reddit", status: "ok", detail: "Launch post steady" },
      { name: "Deploy", status: "ok", detail: "Docs preview current" }
    ]
  },
  {
    id: "operator-console",
    name: "operator-console",
    kind: "Electron experiment",
    repo: "f0d010c/operator-console",
    packageName: "operator-console",
    url: "https://github.com/f0d010c/operator-console",
    health: "partial",
    attention: "Reddit integration is unavailable, but GitHub and npm are current.",
    updatedAt: "47 min ago",
    stale: false,
    partial: true,
    metrics: {
      stars: { value: 93, delta: "+3" },
      issues: { open: 11, delta: "+3" },
      prs: { open: 0, delta: "0" },
      release: "v0.2.1",
      npmDownloads: { value: "1.9k", delta: "+7%" },
      versionDrift: "current",
      reddit: { views: "unavailable", upvotes: 0, comments: 0, delta: "token expired" },
      checks: "passing",
      deploy: "healthy"
    },
    activity: [
      { id: "a6", tone: "warn", label: "Partial data", detail: "Reddit token expired; post performance is hidden until reconnect.", time: "47 min ago" },
      { id: "a7", tone: "neutral", label: "Issues opened", detail: "3 new issues mention command palette focus behavior.", time: "2h ago" }
    ],
    followUps: [
      { id: "f5", text: "Reconnect Reddit token from integrations", source: "Settings", due: "Today", status: "open" },
      { id: "f6", text: "Cluster command palette issues before replying", source: "GitHub Issues", due: "This week", status: "open" }
    ],
    integrations: [
      { name: "GitHub", status: "ok", detail: "Synced 47 min ago" },
      { name: "npm", status: "ok", detail: "1.9k weekly downloads" },
      { name: "Reddit", status: "expired", detail: "Token expired" },
      { name: "Deploy", status: "ok", detail: "Preview healthy" }
    ]
  },
  {
    id: "launchnotes-site",
    name: "launchnotes.site",
    kind: "deployed website",
    repo: "f0d010c/launchnotes-site",
    url: "https://launchnotes.local",
    health: "stale",
    attention: "Deploy is stale: production has not refreshed since Monday.",
    updatedAt: "2d ago",
    stale: true,
    partial: false,
    metrics: {
      stars: { value: 41, delta: "+1" },
      issues: { open: 2, delta: "0" },
      prs: { open: 1, delta: "0" },
      release: "site build 2026.05.11",
      npmDownloads: { value: "n/a", delta: "website" },
      versionDrift: "Next 1 minor behind",
      reddit: { views: "9.2k", upvotes: 154, comments: 29, delta: "5 new replies" },
      checks: "pending",
      deploy: "stale"
    },
    activity: [
      { id: "a8", tone: "warn", label: "Deploy stale", detail: "Production deploy is 2 days old while main has 4 newer commits.", time: "2d ago" },
      { id: "a9", tone: "warn", label: "Reddit replies", detail: "5 comments ask for examples from the new template.", time: "4h ago" }
    ],
    followUps: [
      { id: "f7", text: "Trigger production deploy after checking pending PR", source: "Deploy", due: "Today", status: "open" },
      { id: "f8", text: "Answer Reddit comments with template examples", source: "Reddit", due: "Today", status: "open" }
    ],
    integrations: [
      { name: "GitHub", status: "ok", detail: "Synced 2d ago" },
      { name: "npm", status: "unavailable", detail: "No package connected" },
      { name: "Reddit", status: "ok", detail: "29 comments tracked" },
      { name: "Deploy", status: "rate-limited", detail: "Provider rate limited" }
    ]
  }
];
