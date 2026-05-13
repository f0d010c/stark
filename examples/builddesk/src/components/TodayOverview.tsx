import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ExternalLink,
  GitPullRequest,
  MessageSquare,
  Package,
  RefreshCw,
  Rocket,
  Star
} from "lucide-react";
import type { BuildProject, FollowUp } from "../types";

interface TodayOverviewProps {
  projects: BuildProject[];
  selectedProject: BuildProject;
  isRefreshing: boolean;
  onSelectProject: (id: string) => void;
  onRefresh: () => void;
  onMarkDone: (projectId: string, followUpId: string) => void;
  onSnooze: (projectId: string, followUpId: string) => void;
}

export function TodayOverview({
  projects,
  selectedProject,
  isRefreshing,
  onSelectProject,
  onRefresh,
  onMarkDone,
  onSnooze
}: TodayOverviewProps) {
  const attentionProjects = projects.filter((project) => project.health !== "good");
  const activeFollowUps = selectedProject.followUps.filter((followUp) => followUp.status === "open");

  return (
    <section className="overview pane">
      <div className="overview-header">
        <div>
          <p className="eyebrow">What changed while you were away?</p>
          <h1>Today needs attention in {attentionProjects.length} places.</h1>
        </div>
        <button className="primary-button" type="button" onClick={onRefresh} disabled={isRefreshing}>
          <RefreshCw size={15} className={isRefreshing ? "spin" : ""} />
          Refresh all
        </button>
      </div>

      <div className="metric-grid">
        <Metric icon={Star} label="Stars" value="+29" detail="across tracked repos" />
        <Metric icon={GitPullRequest} label="Issues / PRs" value="24 / 5" detail="open right now" />
        <Metric icon={Package} label="npm downloads" value="+31%" detail="weighted 24h change" />
        <Metric icon={MessageSquare} label="Reddit replies" value="17" detail="new comments" />
      </div>

      <div className="section-title">
        <h2>Priority stack</h2>
        <span>Measured attention, no artificial panic.</span>
      </div>

      <div className="priority-list">
        {attentionProjects.map((project) => (
          <button
            key={project.id}
            className={`priority-row ${project.id === selectedProject.id ? "active" : ""}`}
            type="button"
            onClick={() => onSelectProject(project.id)}
          >
            <span className={`severity-dot ${project.health}`} />
            <span>
              <strong>{project.name}</strong>
              <small>{project.attention}</small>
            </span>
            <span className="priority-meta">{project.updatedAt}</span>
          </button>
        ))}
      </div>

      <div className="split-stack">
        <div>
          <div className="section-title compact">
            <h2>Latest signals</h2>
            <span>{selectedProject.name}</span>
          </div>
          <div className="activity-feed">
            {selectedProject.activity.map((item) => (
              <article className={`activity-item ${item.tone}`} key={item.id}>
                <span className="activity-icon">
                  {item.tone === "danger" ? <AlertTriangle size={15} /> : item.tone === "good" ? <CheckCircle2 size={15} /> : <Clock3 size={15} />}
                </span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </div>
                <time>{item.time}</time>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-title compact">
            <h2>Follow-ups</h2>
            <span>{activeFollowUps.length} open</span>
          </div>
          <div className="followup-list">
            {selectedProject.followUps.map((followUp) => (
              <FollowUpRow
                key={followUp.id}
                projectId={selectedProject.id}
                followUp={followUp}
                onDone={onMarkDone}
                onSnooze={onSnooze}
              />
            ))}
          </div>
        </div>
      </div>

      <a className="source-link" href={selectedProject.url} target="_blank" rel="noreferrer">
        <ExternalLink size={15} />
        Open source link for {selectedProject.name}
      </a>
    </section>
  );
}

function Metric({ icon: Icon, label, value, detail }: { icon: typeof Rocket; label: string; value: string; detail: string }) {
  return (
    <article className="metric-card">
      <Icon size={17} />
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function FollowUpRow({
  projectId,
  followUp,
  onDone,
  onSnooze
}: {
  projectId: string;
  followUp: FollowUp;
  onDone: (projectId: string, followUpId: string) => void;
  onSnooze: (projectId: string, followUpId: string) => void;
}) {
  return (
    <article className={`followup-row ${followUp.status}`}>
      <div>
        <strong>{followUp.text}</strong>
        <span>{followUp.source} / {followUp.due}</span>
      </div>
      {followUp.status === "open" ? (
        <div className="row-actions">
          <button type="button" onClick={() => onSnooze(projectId, followUp.id)}>Snooze</button>
          <button type="button" onClick={() => onDone(projectId, followUp.id)}>Done</button>
        </div>
      ) : (
        <span className="handled-label">{followUp.status}</span>
      )}
    </article>
  );
}
