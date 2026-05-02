import { createBackgroundJob, createNotification, shouldRunOnVps } from "@openclaw/agent-core";
import { createContentSyncJob, createRemotionRenderJob } from "@openclaw/domain-content";

export const bootstrapJobs = [
  createRemotionRenderJob({
    jobId: "bootstrap-render-final",
    projectId: "demo-001",
    compositionId: "case-study-final",
    outputPath: "/srv/openclaw/content/renders/finals/demo-001.mp4",
    requestedBy: "web_admin",
    qualityMode: "final",
  }),
  createContentSyncJob({
    jobId: "bootstrap-sync-content",
    workspaceRoot: "P:/contentsocial",
    requestedBy: "system_scheduler",
  }),
  createBackgroundJob({
    id: "bootstrap-codex-content-package",
    type: "agent.codex-cli",
    workspace: "platform-content",
    requestedBy: "telegram_bot",
    target: "content-package:demo-001",
    detail: "Chay Codex CLI de cap nhat content package va publish notes.",
    priority: "medium",
  }),
];

export const bootstrapNotifications = [
  createNotification({
    id: "bootstrap-notif-customer-replied",
    type: "lead.customer_replied",
    workspace: "facebook-leads",
    channel: "telegram",
    title: "Khach da nhan tin lai",
    body: "Lead moi vua hoi quy trinh lam viec va timeline giao hang.",
  }),
  createNotification({
    id: "bootstrap-notif-render-ready",
    type: "content.render_completed",
    workspace: "platform-content",
    channel: "telegram",
    title: "Render da xong",
    body: "Remotion final da render xong tren VPS, san sang review.",
  }),
];

export function describeRuntimePlan() {
  return bootstrapJobs.map((job) => ({
    id: job.id,
    type: job.type,
    runsOn: shouldRunOnVps(job) ? "vps_background" : "shared_runtime",
    detail: job.detail,
  }));
}
