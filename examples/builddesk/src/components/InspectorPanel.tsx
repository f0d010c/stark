import {
  AlertTriangle,
  Box,
  CheckCircle2,
  CircleDashed,
  Clock3,
  GitBranch,
  GitPullRequest,
  MessageSquare,
  Package,
  Rocket,
  Settings,
  ShieldAlert,
  Star
} from "lucide-react";
import type { BuildProject, IntegrationStatus } from "../types";

const integrationTone: Record<IntegrationStatus, string> = {
  ok: "good",
  expired: "danger",
  "rate-limited": "warn",
  unavailable: "neutral"
};

export function InspectorPanel({ project }: { project: BuildProject }) {
  const hasError = project.integrations.some((item) => item.status === "expired" || item.status === "rate-limited");

  return (
    <aside className="inspector pane">
      <div className="pane-heading">
        <div>
          <p className="eyebrow">Inspector</p>
          <h2>{project.name}</h2>
        </div>
        <span className={`health-badge ${project.health}`}>{project.health}</span>
      </div>

      {project.partial ? (
        <div className="inline-banner warn">
          <CircleDashed size={16} />
          Some integrations are unavailable. Existing GitHub and npm data is still current.
        </div>
      ) : null}

      {project.stale ? (
        <div className="inline-banner warn">
          <Clock3 size={16} />
          Stale data: deploy information is older than expected.
        </div>
      ) : null}

      {hasError ? (
        <div className="inline-banner danger">
          <ShieldAlert size={16} />
          Token or provider limit needs attention in integrations.
        </div>
      ) : null}

      <section className="inspector-section">
        <h3>Project pulse</h3>
        <div className="pulse-grid">
          <Pulse icon={Star} label="Stars" value={String(project.metrics.stars.value)} delta={project.metrics.stars.delta} />
          <Pulse icon={GitBranch} label="Open issues" value={String(project.metrics.issues.open)} delta={project.metrics.issues.delta} />
          <Pulse icon={GitPullRequest} label="Open PRs" value={String(project.metrics.prs.open)} delta={project.metrics.prs.delta} />
          <Pulse icon={Package} label="Downloads" value={project.metrics.npmDownloads.value} delta={project.metrics.npmDownloads.delta} />
        </div>
      </section>

      <section className="inspector-section">
        <h3>Release and drift</h3>
        <div className="detail-table">
          <Detail label="Latest release" value={project.metrics.release} />
          <Detail label="Package drift" value={project.metrics.versionDrift} />
          <Detail label="Checks" value={project.metrics.checks} tone={project.metrics.checks === "failed" ? "danger" : project.metrics.checks === "pending" ? "warn" : "good"} />
          <Detail label="Deploy" value={project.metrics.deploy} tone={project.metrics.deploy === "stale" ? "warn" : "good"} />
        </div>
      </section>

      <section className="inspector-section">
        <h3>Reddit performance</h3>
        <div className="reddit-box">
          <MessageSquare size={17} />
          <strong>{project.metrics.reddit.views} views</strong>
          <span>{project.metrics.reddit.upvotes} upvotes / {project.metrics.reddit.comments} comments</span>
          <small>{project.metrics.reddit.delta}</small>
        </div>
      </section>

      <section className="inspector-section">
        <div className="section-row">
          <h3>Integrations</h3>
          <button className="icon-text-button" type="button">
            <Settings size={14} />
            Settings
          </button>
        </div>
        <div className="integration-list">
          {project.integrations.map((integration) => (
            <div className="integration-row" key={integration.name}>
              <span className={`integration-dot ${integrationTone[integration.status]}`} />
              <div>
                <strong>{integration.name}</strong>
                <small>{integration.detail}</small>
              </div>
              <span>{integration.status}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

function Pulse({
  icon: Icon,
  label,
  value,
  delta
}: {
  icon: typeof Box;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <article className="pulse-card">
      <Icon size={15} />
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{delta}</small>
    </article>
  );
}

function Detail({ label, value, tone = "neutral" }: { label: string; value: string; tone?: "good" | "warn" | "danger" | "neutral" }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <strong className={tone}>
        {tone === "good" ? <CheckCircle2 size={13} /> : tone === "warn" ? <AlertTriangle size={13} /> : tone === "danger" ? <AlertTriangle size={13} /> : null}
        {value}
      </strong>
    </div>
  );
}
