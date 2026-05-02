import { createBackgroundJob } from "@openclaw/agent-core";
import type {
  ContentAutonomyLevel,
  ContentPlatform,
  ContentTriggerType,
  ExecutionSurface,
  PublishMethod,
  VideoProductionType,
  WorkerJobSummary,
} from "@openclaw/contracts";

export type RemotionRenderRequest = {
  jobId: string;
  projectId: string;
  compositionId: string;
  outputPath: string;
  requestedBy: ExecutionSurface;
  qualityMode: "draft" | "final";
  productionType: VideoProductionType;
  createdAt?: string;
};

export type ContentSyncRequest = {
  jobId: string;
  workspaceRoot: string;
  requestedBy: ExecutionSurface;
  createdAt?: string;
};

export type ContentGenerateRequest = {
  jobId: string;
  platform: ContentPlatform;
  triggerType: ContentTriggerType;
  triggerMeta?: Record<string, unknown>;
  autonomyLevel: ContentAutonomyLevel;
  contentPillarId?: string;
  requestedBy: ExecutionSurface;
  createdAt?: string;
};

export type ContentPlanRequest = {
  jobId: string;
  requestedBy: ExecutionSurface;
  createdAt?: string;
};

export type ContentPublishRequest = {
  jobId: string;
  contentPackageId: string;
  publishMethod: PublishMethod;
  platform: ContentPlatform;
  requestedBy: ExecutionSurface;
  createdAt?: string;
};

export function createRemotionRenderJob(request: RemotionRenderRequest): WorkerJobSummary {
  return createBackgroundJob({
    id: request.jobId,
    type: "content.render.remotion",
    priority: request.qualityMode === "final" ? "high" : "medium",
    workspace: "platform-content",
    requestedBy: request.requestedBy,
    target: `${request.projectId}:${request.compositionId}`,
    detail: `Render ${request.productionType} into ${request.outputPath}`,
    createdAt: request.createdAt,
  });
}

export function createContentSyncJob(request: ContentSyncRequest): WorkerJobSummary {
  return createBackgroundJob({
    id: request.jobId,
    type: "content.sync.workspace",
    priority: "medium",
    workspace: "platform-content",
    requestedBy: request.requestedBy,
    target: request.workspaceRoot,
    detail: "Dong bo platform context, content command va render state tu workspace",
    createdAt: request.createdAt,
  });
}

export function createContentGenerateJob(request: ContentGenerateRequest): WorkerJobSummary {
  return createBackgroundJob({
    id: request.jobId,
    type: "content.factory.generate",
    priority: request.triggerType === "command" ? "critical" : "medium",
    workspace: "platform-content",
    requestedBy: request.requestedBy,
    target: `content:${request.platform}:${request.triggerType}`,
    detail: `Generate ${request.platform} content via ${request.triggerType} trigger, autonomy=${request.autonomyLevel}`,
    createdAt: request.createdAt,
  });
}

export function createContentPlanJob(request: ContentPlanRequest): WorkerJobSummary {
  return createBackgroundJob({
    id: request.jobId,
    type: "content.factory.plan",
    priority: "medium",
    workspace: "platform-content",
    requestedBy: request.requestedBy,
    target: "content_plan:scheduled",
    detail: "Run scheduled content plan and create content packages",
    createdAt: request.createdAt,
  });
}

export function createContentPublishJob(request: ContentPublishRequest): WorkerJobSummary {
  const jobType = request.publishMethod === "official_api"
    ? "content.publish.api"
    : "content.publish.browser";

  return createBackgroundJob({
    id: request.jobId,
    type: jobType,
    priority: "high",
    workspace: "platform-content",
    requestedBy: request.requestedBy,
    target: `content:${request.contentPackageId}:${request.publishMethod}`,
    detail: `Publish content ${request.contentPackageId} via ${request.publishMethod} to ${request.platform}`,
    createdAt: request.createdAt,
  });
}

export function createContextCaptureJob(jobId: string, targetUrl: string, scope: string, requestedBy: ExecutionSurface): WorkerJobSummary {
  return createBackgroundJob({
    id: jobId,
    type: "content.factory.context_crawl",
    priority: "low",
    workspace: "platform-content",
    requestedBy: requestedBy,
    target: `context:${targetUrl}`,
    detail: `Capture context from ${targetUrl}, scope=${scope}`,
  });
}

export const AUTONOMY_LEVELS: ContentAutonomyLevel[] = [
  "fully_auto",
  "auto_with_review",
  "auto_no_publish",
  "manual_only",
];

export const CONTENT_TRIGGERS: ContentTriggerType[] = [
  "schedule",
  "trend",
  "performance",
  "command",
];

export const VIDEO_PRODUCTION_TYPES: VideoProductionType[] = [
  "walkthrough",
  "viral_clip",
  "product_showcase",
  "testimonial_edit",
];

export const PUBLISH_METHODS: PublishMethod[] = [
  "official_api",
  "browser_assisted",
  "handoff",
];

export const CONTENT_PLATFORMS: ContentPlatform[] = [
  "linkedin",
  "tiktok",
  "youtube",
  "facebook",
  "upwork",
];
