import { z } from "zod";

export const AgentIdSchema = z.enum([
  "trading-signal-agent",
  "facebook-lead-agent",
  "platform-content-agent",
]);

export const AgentSlugSchema = z.enum(["trading", "facebook-leads", "platform-content"]);

export const AgentModeSchema = z.enum([
  "disabled",
  "observe",
  "paper",
  "draft_for_review",
  "monitor_only",
  "draft_fast",
  "assisted_comment",
  "official_auto",
  "generate_only",
  "render_video",
  "publish_assisted",
  "official_publish",
  "context_capture",
  "auto_guarded",
  "semi_auto",
  "manual_only",
  "paused",
]);

export const SourceTypeSchema = z.enum([
  "telegram_channel",
  "telegram_group",
  "facebook_group_link",
  "facebook_post_link",
  "manual_text_inbox",
  "screenshot_upload",
  "browser_assist_feed",
  "api_feed",
  "project_repository",
  "proof_library",
  "platform_account",
  "publish_queue",
]);

export const ApprovalRiskLevelSchema = z.enum(["low", "medium", "high", "critical"]);

export const JobTypeSchema = z.enum([
  "content.render.remotion",
  "content.render.preview",
  "content.sync.workspace",
  "platform.context.capture",
  "platform.publish.assisted",
  "agent.codex-cli",
  "agent.openclaw-session",
  "notify.telegram",
  "notify.webhook",
  "system.health-check",
]);

export const JobStatusSchema = z.enum([
  "queued",
  "running",
  "waiting_approval",
  "completed",
  "failed",
  "cancelled",
]);

export const JobPrioritySchema = z.enum(["low", "medium", "high", "critical"]);

export const ExecutionSurfaceSchema = z.enum([
  "web_admin",
  "telegram_bot",
  "openclaw_mcp",
  "codex_cli",
  "system_scheduler",
]);

export const NotificationChannelSchema = z.enum(["telegram", "web_admin", "email", "webhook"]);

export const NotificationTypeSchema = z.enum([
  "approval.pending",
  "lead.customer_replied",
  "lead.new_inbound_message",
  "lead.hot_post_detected",
  "lead.zalo_followup_ready",
  "trading.signal_detected",
  "trading.order_executed",
  "platform.context_captured",
  "platform.post_drafted",
  "content.render_completed",
  "content.render_failed",
  "system.worker_error",
  "system.deploy_succeeded",
]);

export const AgentSummarySchema = z.object({
  id: AgentIdSchema,
  slug: AgentSlugSchema,
  name: z.string(),
  mode: AgentModeSchema,
  enabled: z.boolean(),
  health: z.enum(["healthy", "warning", "error"]),
  pendingApprovals: z.number().int().nonnegative(),
  sourceCount: z.number().int().nonnegative(),
  description: z.string(),
});

export const SourceSummarySchema = z.object({
  id: z.string(),
  agentSlug: AgentSlugSchema,
  type: SourceTypeSchema,
  name: z.string(),
  urlOrExternalId: z.string(),
  enabled: z.boolean(),
  trustScore: z.number().min(0).max(100),
});

export const ApprovalSummarySchema = z.object({
  id: z.string(),
  agentSlug: AgentSlugSchema,
  title: z.string(),
  riskLevel: ApprovalRiskLevelSchema,
  confidence: z.number().min(0).max(1),
  createdAt: z.string(),
  reason: z.string(),
});

export const DashboardSummarySchema = z.object({
  totalAgents: z.number().int().nonnegative(),
  activeAgents: z.number().int().nonnegative(),
  pendingApprovals: z.number().int().nonnegative(),
  messagesToday: z.number().int().nonnegative(),
  aiCostTodayUsd: z.number().nonnegative(),
  lastError: z.string().nullable(),
});

export const WorkerJobSummarySchema = z.object({
  id: z.string(),
  type: JobTypeSchema,
  status: JobStatusSchema,
  priority: JobPrioritySchema,
  workspace: z.union([z.literal("system"), AgentSlugSchema]),
  requestedBy: ExecutionSurfaceSchema,
  createdAt: z.string(),
  target: z.string(),
  detail: z.string(),
});

export const NotificationSummarySchema = z.object({
  id: z.string(),
  type: NotificationTypeSchema,
  channel: NotificationChannelSchema,
  workspace: z.union([z.literal("system"), AgentSlugSchema]),
  title: z.string(),
  body: z.string(),
  createdAt: z.string(),
  acknowledged: z.boolean(),
});

export type AgentId = z.infer<typeof AgentIdSchema>;
export type AgentSlug = z.infer<typeof AgentSlugSchema>;
export type AgentMode = z.infer<typeof AgentModeSchema>;
export type SourceType = z.infer<typeof SourceTypeSchema>;
export type ApprovalRiskLevel = z.infer<typeof ApprovalRiskLevelSchema>;
export type JobType = z.infer<typeof JobTypeSchema>;
export type JobStatus = z.infer<typeof JobStatusSchema>;
export type JobPriority = z.infer<typeof JobPrioritySchema>;
export type ExecutionSurface = z.infer<typeof ExecutionSurfaceSchema>;
export type NotificationChannel = z.infer<typeof NotificationChannelSchema>;
export type NotificationType = z.infer<typeof NotificationTypeSchema>;
export type AgentSummary = z.infer<typeof AgentSummarySchema>;
export type SourceSummary = z.infer<typeof SourceSummarySchema>;
export type ApprovalSummary = z.infer<typeof ApprovalSummarySchema>;
export type DashboardSummary = z.infer<typeof DashboardSummarySchema>;
export type WorkerJobSummary = z.infer<typeof WorkerJobSummarySchema>;
export type NotificationSummary = z.infer<typeof NotificationSummarySchema>;
