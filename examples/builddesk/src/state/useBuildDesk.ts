import { useMemo, useState } from "react";
import { projects as initialProjects } from "../data/projects";
import type { BuildProject } from "../types";

export function useBuildDesk() {
  const [projects, setProjects] = useState<BuildProject[]>(initialProjects);
  const [selectedId, setSelectedId] = useState(initialProjects[0].id);
  const [query, setQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return projects;
    return projects.filter((project) => {
      return [project.name, project.kind, project.repo, project.packageName ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
    });
  }, [projects, query]);

  const selectedProject = projects.find((project) => project.id === selectedId) ?? projects[0];

  function selectProject(id: string) {
    setSelectedId(id);
  }

  function clearSearch() {
    setQuery("");
  }

  function markFollowUpDone(projectId: string, followUpId: string) {
    updateFollowUp(projectId, followUpId, "done");
    setToast("Follow-up completed");
  }

  function snoozeFollowUp(projectId: string, followUpId: string) {
    updateFollowUp(projectId, followUpId, "snoozed");
    setToast("Follow-up snoozed until tomorrow");
  }

  function updateFollowUp(projectId: string, followUpId: string, status: "done" | "snoozed") {
    setProjects((current) =>
      current.map((project) => {
        if (project.id !== projectId) return project;
        return {
          ...project,
          followUps: project.followUps.map((followUp) =>
            followUp.id === followUpId ? { ...followUp, status } : followUp
          )
        };
      })
    );
  }

  function refresh() {
    setIsRefreshing(true);
    setToast(null);
    window.setTimeout(() => {
      setProjects((current) =>
        current.map((project) => ({
          ...project,
          updatedAt: project.stale ? project.updatedAt : "just now"
        }))
      );
      setIsRefreshing(false);
      setToast("Refresh complete");
    }, 900);
  }

  return {
    projects,
    filteredProjects,
    selectedProject,
    selectedId,
    query,
    isRefreshing,
    toast,
    setQuery,
    selectProject,
    clearSearch,
    markFollowUpDone,
    snoozeFollowUp,
    refresh,
    dismissToast: () => setToast(null)
  };
}
