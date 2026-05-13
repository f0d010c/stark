export type Health = "good" | "attention" | "partial" | "stale";
export type IntegrationStatus = "ok" | "expired" | "rate-limited" | "unavailable";
export type CheckStatus = "passing" | "failed" | "pending";
export type DeployStatus = "healthy" | "stale";
export type Tone = "good" | "warn" | "danger" | "neutral";
export type FollowUpStatus = "open" | "done" | "snoozed";

export interface BuildProject {
  id: string;
  name: string;
  kind: string;
  repo: string;
  packageName?: string;
  url: string;
  health: Health;
  attention: string;
  updatedAt: string;
  stale: boolean;
  partial: boolean;
  metrics: {
    stars: { value: number; delta: string };
    issues: { open: number; delta: string };
    prs: { open: number; delta: string };
    release: string;
    npmDownloads: { value: string; delta: string };
    versionDrift: string;
    reddit: { views: string; upvotes: number; comments: number; delta: string };
    checks: CheckStatus;
    deploy: DeployStatus;
  };
  activity: ActivityItem[];
  followUps: FollowUp[];
  integrations: Integration[];
}

export interface ActivityItem {
  id: string;
  tone: Tone;
  label: string;
  detail: string;
  time: string;
}

export interface FollowUp {
  id: string;
  text: string;
  source: string;
  due: string;
  status: FollowUpStatus;
}

export interface Integration {
  name: "GitHub" | "npm" | "Reddit" | "Deploy";
  status: IntegrationStatus;
  detail: string;
}
