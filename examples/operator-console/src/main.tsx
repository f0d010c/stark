import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  AlertTriangle,
  Archive,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  Code2,
  DatabaseZap,
  FileDiff,
  History,
  KeyRound,
  Layers3,
  LockKeyhole,
  PackageCheck,
  Play,
  PlugZap,
  RotateCcw,
  Search,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  TerminalSquare,
  Trash2,
} from "lucide-react";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./styles.css";

type RunState = "active" | "warn" | "done";
type Health = "healthy" | "stale" | "blocked" | "scanning";

const runs: Array<{
  id: string;
  agent: string;
  target: string;
  state: RunState;
  time: string;
  files: number;
}> = [
  { id: "run_8421", agent: "Codex", target: "nutrimeal/api", state: "active", time: "00:12", files: 7 },
  { id: "run_8419", agent: "Claude Code", target: "mcp/weather", state: "warn", time: "11:48", files: 2 },
  { id: "run_8416", agent: "Cursor", target: "site/src", state: "done", time: "18:03", files: 11 },
];

const inventory = [
  { label: "Agents", count: "05", detail: "3 active, 2 idle", icon: TerminalSquare },
  { label: "Plugins", count: "18", detail: "2 unsigned", icon: PlugZap },
  { label: "Skills", count: "42", detail: "6 local overrides", icon: Layers3 },
  { label: "MCP servers", count: "09", detail: "1 retrying", icon: ServerCog },
];

const servers: Array<{ name: string; path: string; health: Health; latency: string }> = [
  { name: "filesystem", path: "~/.codex/mcp/filesystem.json", health: "healthy", latency: "9ms" },
  { name: "github", path: "~/.config/mcp/github.env", health: "scanning", latency: "..." },
  { name: "postgres-local", path: "C:/dev/.mcp/postgres.toml", health: "stale", latency: "312ms" },
  { name: "browser-use", path: "~/.codex/plugins/browser", health: "blocked", latency: "off" },
];

const workflow = [
  {
    step: "01",
    title: "discover installed surface",
    copy: "Operator Console reads agent folders, plugin manifests, skill indexes, MCP configs, and local automation metadata without requiring a cloud sync step.",
    fragment: ["scan_root=~/agent-home/.codex", "agents=5 plugins=18 skills=42", "unindexed=2"],
  },
  {
    step: "02",
    title: "inspect access and scripts",
    copy: "Every tool gets a readable access profile: file scopes, env names, startup commands, hooks, write permissions, and whether a command can mutate the machine.",
    fragment: ["hook=post_run.ps1", "writes=workspace,desktop", "risk=needs_review"],
  },
  {
    step: "03",
    title: "replay run history",
    copy: "A run can be replayed as a timeline: prompts, tool calls, files touched, logs emitted, errors, and the exact state that led to a change.",
    fragment: ["run_8421", "tool_calls=31", "diffs=7 files"],
  },
  {
    step: "04",
    title: "retire stale extensions",
    copy: "Stale plugins and orphaned skills become a cleanup queue with local paths, last execution time, and a rollback-friendly removal plan.",
    fragment: ["last_seen=47d", "owner=local", "action=archive"],
  },
];

function statusLabel(state: RunState) {
  if (state === "active") return "running";
  if (state === "warn") return "needs review";
  return "complete";
}

function healthLabel(health: Health) {
  if (health === "healthy") return "healthy";
  if (health === "stale") return "stale token";
  if (health === "blocked") return "permission blocked";
  return "scanning";
}

function ProductPreview() {
  const [selected, setSelected] = useState(runs[0].id);
  const selectedRun = useMemo(() => runs.find((run) => run.id === selected) ?? runs[0], [selected]);

  return (
    <section className="console" aria-label="Operator Console product preview">
      <div className="console__bar">
        <div className="window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="console__title">operator://local-stack</div>
        <div className="console__health">
          <CircleDot size={14} />
          live scan
        </div>
      </div>

      <div className="console__grid">
        <aside className="rail" aria-label="Inventory summary">
          <div className="search-line">
            <Search size={14} />
            inspect local stack
          </div>
          {inventory.map((item) => (
            <div className="inventory-row" key={item.label}>
              <item.icon size={16} />
              <div>
                <strong>{item.count}</strong>
                <span>{item.label}</span>
              </div>
              <small>{item.detail}</small>
            </div>
          ))}
          <div className="empty-state">
            <Archive size={16} />
            <span>No orphaned installs in selected workspace.</span>
          </div>
        </aside>

        <main className="runs-pane">
          <div className="pane-head">
            <span>agent runs</span>
            <button type="button">
              <RotateCcw size={14} />
              replay selected
            </button>
          </div>
          <div className="run-list">
            {runs.map((run) => (
              <button
                className={`run-row ${selected === run.id ? "is-selected" : ""}`}
                key={run.id}
                onClick={() => setSelected(run.id)}
                type="button"
              >
                <span className={`dot dot--${run.state}`} />
                <strong>{run.id}</strong>
                <span>{run.agent}</span>
                <span>{run.target}</span>
                <small>{statusLabel(run.state)}</small>
              </button>
            ))}
          </div>

          <div className="detail-card">
            <div className="detail-card__top">
              <span>{selectedRun.id}</span>
              <strong>{selectedRun.files} files touched</strong>
            </div>
            <div className="timeline">
              <span />
              <p>prompt accepted</p>
              <span />
              <p>shell probe completed in {selectedRun.time}</p>
              <span className="warn" />
              <p>hook review: unsigned script requested desktop write</p>
            </div>
            <pre className="diff"><code>{`+ allow: ~/Projects/operator-console
env: AGENT_HOME, REPO_TOKEN
- hook: ./scripts/post-run.ps1  # unsigned
status: review_required`}</code></pre>
          </div>
        </main>

        <aside className="health-pane" aria-label="MCP server and credential health">
          <div className="pane-head">
            <span>MCP health</span>
            <small>4 checked</small>
          </div>
          {servers.map((server) => (
            <div className={`server-row server-row--${server.health}`} key={server.name}>
              <ServerCog size={15} />
              <div>
                <strong>{server.name}</strong>
                <span>{server.path}</span>
              </div>
              <small>{healthLabel(server.health)}</small>
            </div>
          ))}
          <div className="credential-block">
            <KeyRound size={16} />
            <div>
              <strong>local credentials</strong>
              <span>3 env files readable, 1 masked, 0 uploaded</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <header className="hero">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Operator Console home">
          <TerminalSquare size={18} />
          Operator Console
        </a>
        <div className="navlinks">
          <a href="#proof">Proof</a>
          <a href="#workflow">Workflow</a>
          <a href="#local">Local-first</a>
        </div>
      </nav>

      <div className="hero__inner">
        <div className="hero__copy">
          <h1>Operator Console</h1>
          <p>
            A local-first command center for AI coding agents, plugins, skills, MCP servers,
            credentials, hooks, installs, logs, and every run that changed your machine.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#proof">
              <Search size={16} />
              Inspect local stack
            </a>
            <a className="button button--secondary" href="#history">
              <History size={16} />
              View run history
            </a>
          </div>
          <div className="hero__meta" aria-label="Local scan summary">
            <span>cloud_sync=off</span>
            <span>write_scope=visible</span>
            <span>last_scan=12s</span>
          </div>
        </div>
        <ProductPreview />
      </div>
    </header>
  );
}

function ProductProof() {
  return (
    <section className="section section--proof" id="proof">
      <div className="section__label">product proof</div>
      <div className="proof-layout">
        <div>
          <h2>Everything installed. Everything running. Everything risky enough to see.</h2>
          <p>
            Operator Console treats local agent infrastructure like production infrastructure:
            inventory, health, permissions, run history, diffs, warnings, and cleanup queues in
            one auditable surface.
          </p>
        </div>
        <div className="proof-table" role="table" aria-label="Local stack inspection">
          <div className="proof-table__row proof-table__row--head" role="row">
            <span>surface</span>
            <span>signal</span>
            <span>state</span>
          </div>
          {[
            ["codex.exe", "features + goals enabled", "healthy"],
            ["browser-use plugin", "sandbox requested desktop read", "blocked"],
            ["post-run hook", "PowerShell writes outside workspace", "warning"],
            ["github MCP", "token masked in local env", "protected"],
            ["skill cache", "6 overrides shadow bundled skills", "review"],
          ].map(([surface, signal, state]) => (
            <div className="proof-table__row" role="row" key={surface}>
              <span>{surface}</span>
              <span>{signal}</span>
              <span className={`state state--${state}`}>{state}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="section section--workflow" id="workflow">
      <div className="section__label">workflow</div>
      <div className="workflow-grid">
        {workflow.map((item) => (
          <article className="workflow-step" key={item.step}>
            <div className="workflow-step__index">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <pre><code>{item.fragment.join("\n")}</code></pre>
          </article>
        ))}
      </div>
    </section>
  );
}

function LocalFirst() {
  return (
    <section className="section section--local" id="local">
      <div className="section__label">local-first trust</div>
      <div className="local-grid">
        <div className="trust-copy">
          <h2>Not another cloud dashboard for tools that live on your laptop.</h2>
          <p>
            The console starts with local truth: paths, processes, env files, hooks, startup
            commands, install provenance, and the permissions each agent can actually exercise.
          </p>
        </div>
        <div className="permission-panel">
          <div className="permission-line permission-line--ok">
            <ShieldCheck size={16} />
            <span>read</span>
            <code>~/agent-home/.codex</code>
          </div>
          <div className="permission-line permission-line--warn">
            <ShieldAlert size={16} />
            <span>review</span>
            <code>~/Projects</code>
          </div>
          <div className="permission-line permission-line--lock">
            <LockKeyhole size={16} />
            <span>masked</span>
            <code>AI_API_KEY, REPO_TOKEN</code>
          </div>
          <div className="script-warning">
            <AlertTriangle size={17} />
            <div>
              <strong>risky hook detected</strong>
              <span>scripts/post-run.ps1 invokes Start-Process after agent completion.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="history">
      <div>
        <h2>Know what your agents can touch before the next run touches it.</h2>
        <p>Start with a local scan, inspect the warnings, then replay the changes that matter.</p>
      </div>
      <div className="final-cta__actions">
        <a className="button button--primary" href="#proof">
          <Play size={16} />
          Inspect local stack
        </a>
        <a className="button button--secondary" href="#top">
          <ChevronRight size={16} />
          Return to console
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="site" id="top">
      <Hero />
      <ProductProof />
      <WorkflowSection />
      <LocalFirst />
      <FinalCta />
      <footer className="footer">
        <span>Operator Console</span>
        <span>local audit surface</span>
        <span>cloud_sync=off</span>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
