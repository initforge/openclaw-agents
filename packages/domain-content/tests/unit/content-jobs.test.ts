import { describe, expect, it } from "vitest";

import { createContentSyncJob, createRemotionRenderJob } from "../../src";

const createdAt = "2026-04-24T00:00:00.000Z";

describe("domain-content job factories", () => {
  it("creates high-priority final Remotion render jobs", () => {
    const job = createRemotionRenderJob({
      jobId: "render-final",
      projectId: "case-001",
      compositionId: "final",
      outputPath: "/srv/openclaw/renders/case-001.mp4",
      requestedBy: "web_admin",
      qualityMode: "final",
      createdAt,
    });

    expect(job).toMatchObject({
      id: "render-final",
      type: "content.render.remotion",
      status: "queued",
      priority: "high",
      workspace: "platform-content",
      requestedBy: "web_admin",
      createdAt,
      target: "case-001:final",
    });
    expect(job.detail).toContain("Render final");
  });

  it("creates medium-priority draft render jobs", () => {
    const job = createRemotionRenderJob({
      jobId: "render-draft",
      projectId: "case-001",
      compositionId: "draft",
      outputPath: "/srv/openclaw/renders/case-001-draft.mp4",
      requestedBy: "telegram_bot",
      qualityMode: "draft",
      createdAt,
    });

    expect(job.priority).toBe("medium");
    expect(job.target).toBe("case-001:draft");
  });

  it("creates content sync jobs owned by platform content", () => {
    const job = createContentSyncJob({
      jobId: "sync-content",
      workspaceRoot: "P:/contentsocial",
      requestedBy: "system_scheduler",
      createdAt,
    });

    expect(job).toMatchObject({
      id: "sync-content",
      type: "content.sync.workspace",
      status: "queued",
      priority: "medium",
      workspace: "platform-content",
      requestedBy: "system_scheduler",
      createdAt,
      target: "P:/contentsocial",
    });
  });
});
