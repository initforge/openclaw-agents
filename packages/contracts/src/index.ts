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

export const ContentTriggerTypeSchema = z.enum([
  "schedule",
  "trend",
  "performance",
  "command",
]);

export const ContentAutonomyLevelSchema = z.enum([
  "fully_auto",
  "auto_with_review",
  "auto_no_publish",
  "manual_only",
]);

export const ContentStatusSchema = z.enum([
  "draft",
  "reviewed",
  "ready",
  "scheduled",
  "publishing",
  "published",
  "failed",
]);

export const VideoProductionTypeSchema = z.enum([
  "walkthrough",
  "viral_clip",
  "product_showcase",
  "testimonial_edit",
]);

export const VideoRenderStatusSchema = z.enum([
  "queued",
  "rendering",
  "completed",
  "failed",
]);

export const PublishMethodSchema = z.enum([
  "official_api",
  "browser_assisted",
  "handoff",
  "none",
]);

export const PublishStatusSchema = z.enum([
  "pending",
  "published",
  "failed",
  "skipped",
]);

export const ContentPlatformSchema = z.enum([
  "linkedin",
  "tiktok",
  "youtube",
  "facebook",
  "upwork",
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
  "content.factory.plan",
  "content.factory.generate",
  "content.factory.schedule_optimize",
  "content.factory.context_crawl",
  "content.publish.api",
  "content.publish.browser",
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
export type ContentTriggerType = z.infer<typeof ContentTriggerTypeSchema>;
export type ContentAutonomyLevel = z.infer<typeof ContentAutonomyLevelSchema>;
export type ContentStatus = z.infer<typeof ContentStatusSchema>;
export type VideoProductionType = z.infer<typeof VideoProductionTypeSchema>;
export type VideoRenderStatus = z.infer<typeof VideoRenderStatusSchema>;
export type PublishMethod = z.infer<typeof PublishMethodSchema>;
export type PublishStatus = z.infer<typeof PublishStatusSchema>;
export type ContentPlatform = z.infer<typeof ContentPlatformSchema>;

export const ContentPackageSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  platform: ContentPlatformSchema,
  contentPillar: z.string().optional(),
  triggerType: ContentTriggerTypeSchema,
  triggerMeta: z.record(z.unknown()).optional(),
  autonomyLevel: ContentAutonomyLevelSchema,
  status: ContentStatusSchema,
  createdBy: ExecutionSurfaceSchema,
  createdAt: z.string(),
  publishedAt: z.string().nullable(),
  reviewDecision: z.enum(["approved", "rejected"]).nullable(),
  reviewBy: z.string().nullable(),
  reviewAt: z.string().nullable(),
});

export type ContentPackage = z.infer<typeof ContentPackageSchema>;

export const VideoRenderJobSchema = z.object({
  id: z.string(),
  productionType: VideoProductionTypeSchema,
  contentPackageId: z.string().nullable(),
  scriptJson: z.record(z.unknown()),
  assetsJson: z.record(z.unknown()),
  templateId: z.string(),
  renderStatus: VideoRenderStatusSchema,
  previewUrl: z.string().nullable(),
  finalUrl: z.string().nullable(),
  publishMethod: PublishMethodSchema,
  publishStatus: PublishStatusSchema,
  createdBy: ExecutionSurfaceSchema,
  createdAt: z.string(),
  publishedAt: z.string().nullable(),
});

export type VideoRenderJob = z.infer<typeof VideoRenderJobSchema>;
