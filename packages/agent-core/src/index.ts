import type {
  AgentSlug,
  ExecutionSurface,
  JobPriority,
  NotificationChannel,
  NotificationSummary,
  NotificationType,
  WorkerJobSummary,
} from "@openclaw/contracts";

export interface AgentContext {
  agentId: string;
}

export type BackgroundJobRequest = {
  id: string;
  type: WorkerJobSummary["type"];
  workspace: "system" | AgentSlug;
  requestedBy: ExecutionSurface;
  target: string;
  detail: string;
  priority?: JobPriority;
  createdAt?: string;
};

export type NotificationRequest = {
  id: string;
  type: NotificationType;
  workspace: "system" | AgentSlug;
  channel: NotificationChannel;
  title: string;
  body: string;
  createdAt?: string;
};

function timestamp(createdAt?: string) {
  return createdAt ?? new Date().toISOString();
}

export function createBackgroundJob(request: BackgroundJobRequest): WorkerJobSummary {
  return {
    id: request.id,
    type: request.type,
    status: "queued",
    priority: request.priority ?? "medium",
    workspace: request.workspace,
    requestedBy: request.requestedBy,
    createdAt: timestamp(request.createdAt),
    target: request.target,
    detail: request.detail,
  };
}

export function createNotification(request: NotificationRequest): NotificationSummary {
  return {
    id: request.id,
    type: request.type,
    workspace: request.workspace,
    channel: request.channel,
    title: request.title,
    body: request.body,
    createdAt: timestamp(request.createdAt),
    acknowledged: false,
  };
}

const vpsJobTypes = new Set<WorkerJobSummary["type"]>([
  "content.render.remotion",
  "content.render.preview",
  "agent.codex-cli",
  "agent.openclaw-session",
  "content.sync.workspace",
]);

export function shouldRunOnVps(job: WorkerJobSummary) {
  return vpsJobTypes.has(job.type);
}

export function getRemoteSurfaceLabel(surface: ExecutionSurface) {
  switch (surface) {
    case "web_admin":
      return "Web admin";
    case "telegram_bot":
      return "Telegram bot";
    case "openclaw_mcp":
      return "OpenClaw MCP";
    case "codex_cli":
      return "Codex CLI";
    case "system_scheduler":
      return "System scheduler";
    default:
      return surface;
  }
}
