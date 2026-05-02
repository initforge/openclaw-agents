import { createBackgroundJob } from "@openclaw/agent-core";
import type { ExecutionSurface, WorkerJobSummary } from "@openclaw/contracts";

export type RemotionRenderRequest = {
  jobId: string;
  projectId: string;
  compositionId: string;
  outputPath: string;
  requestedBy: ExecutionSurface;
  qualityMode: "draft" | "final";
  createdAt?: string;
};

export type ContentSyncRequest = {
  jobId: string;
  workspaceRoot: string;
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
    detail: `Render ${request.qualityMode} vao ${request.outputPath}`,
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
