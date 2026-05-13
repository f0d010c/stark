import { AlertTriangle, CheckCircle2, Clock3, RefreshCw } from "lucide-react";
import { CommandBar } from "./components/CommandBar";
import { InspectorPanel } from "./components/InspectorPanel";
import { ProjectSidebar } from "./components/ProjectSidebar";
import { TodayOverview } from "./components/TodayOverview";
import { useBuildDesk } from "./state/useBuildDesk";

export function App() {
  const desk = useBuildDesk();

  return (
    <main className="app-shell">
      <header className="titlebar">
        <div className="traffic-space" />
        <div className="brand-lockup">
          <span className="brand-mark">BD</span>
          <span>BuildDesk</span>
        </div>
        <CommandBar
          query={desk.query}
          onQueryChange={desk.setQuery}
          onClear={desk.clearSearch}
          onRefresh={desk.refresh}
          isRefreshing={desk.isRefreshing}
        />
        <button className="ghost-button" type="button">
          Integrations
        </button>
      </header>

      <section className="status-strip" aria-live="polite">
        <div className="thesis">
          <span>Today</span>
          <strong>3 projects need attention, 1 deploy is stale, 1 release draft is waiting.</strong>
        </div>
        <div className="state-pills">
          <span className="state-pill danger"><AlertTriangle size={14} /> CI failed</span>
          <span className="state-pill warn"><Clock3 size={14} /> Stale deploy</span>
          <span className="state-pill good"><CheckCircle2 size={14} /> 2 green</span>
        </div>
      </section>

      <section className="workspace-grid">
        <ProjectSidebar
          projects={desk.filteredProjects}
          selectedId={desk.selectedId}
          query={desk.query}
          onSelect={desk.selectProject}
          onClearSearch={desk.clearSearch}
        />
        <TodayOverview
          projects={desk.projects}
          selectedProject={desk.selectedProject}
          isRefreshing={desk.isRefreshing}
          onSelectProject={desk.selectProject}
          onRefresh={desk.refresh}
          onMarkDone={desk.markFollowUpDone}
          onSnooze={desk.snoozeFollowUp}
        />
        <InspectorPanel project={desk.selectedProject} />
      </section>

      {desk.isRefreshing ? (
        <div className="refresh-overlay">
          <RefreshCw size={16} />
          Refreshing GitHub, npm, Reddit, checks, and deploys...
        </div>
      ) : null}

      {desk.toast ? (
        <button className="toast" type="button" onClick={desk.dismissToast}>
          <CheckCircle2 size={16} />
          {desk.toast}
        </button>
      ) : null}
    </main>
  );
}
