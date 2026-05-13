import { AlertTriangle, CheckCircle2, CircleDashed, Clock3, Github, Package } from "lucide-react";
import type { BuildProject, Health } from "../types";

const healthIcon: Record<Health, typeof AlertTriangle> = {
  attention: AlertTriangle,
  partial: CircleDashed,
  stale: Clock3,
  good: CheckCircle2
};

interface ProjectSidebarProps {
  projects: BuildProject[];
  selectedId: string;
  query: string;
  onSelect: (id: string) => void;
  onClearSearch: () => void;
}

export function ProjectSidebar({ projects, selectedId, query, onSelect, onClearSearch }: ProjectSidebarProps) {
  return (
    <aside className="sidebar pane">
      <div className="pane-heading">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Watchlist</h2>
        </div>
        <span className="count-badge">{projects.length}</span>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <Package size={24} />
          <h3>No projects found</h3>
          <p>{query ? "Clear the search to return to your connected projects." : "Connect GitHub or npm to start tracking builds."}</p>
          {query ? <button type="button" onClick={onClearSearch}>Clear search</button> : null}
        </div>
      ) : (
        <div className="project-list">
          {projects.map((project) => {
            const Icon = healthIcon[project.health];
            return (
              <button
                className={`project-row ${selectedId === project.id ? "selected" : ""} ${project.health}`}
                key={project.id}
                type="button"
                onClick={() => onSelect(project.id)}
              >
                <span className="project-status"><Icon size={16} /></span>
                <span className="project-text">
                  <strong>{project.name}</strong>
                  <small><Github size={12} /> {project.repo}</small>
                </span>
                <span className="project-updated">{project.updatedAt}</span>
              </button>
            );
          })}
        </div>
      )}
    </aside>
  );
}
