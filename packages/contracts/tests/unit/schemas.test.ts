import { describe, expect, it } from "vitest";

import {
  AgentSummarySchema,
  DashboardSummarySchema,
  SourceSummarySchema,
  WorkerJobSummarySchema,
} from "../../src";

describe("contract schemas", () => {
  it("accepts valid agent summaries", () => {
    const parsed = AgentSummarySchema.parse({
      id: "trading-signal-agent",
      slug: "trading",
      name: "Trading Signal Agent",
      mode: "paper",
      enabled: true,
      health: "healthy",
      pendingApprovals: 0,
      sourceCount: 2,
      description: "Reads Telegram signals and supports paper replay before guarded execution.",
    });

    expect(parsed.mode).toBe("paper");
  });

  it("accepts the platform content agent in context capture mode", () => {
    const parsed = AgentSummarySchema.parse({
      id: "platform-content-agent",
      slug: "platform-content",
      name: "Platform Content Agent",
      mode: "context_capture",
      enabled: true,
      health: "healthy",
      pendingApprovals: 1,
      sourceCount: 3,
      description: "Manages platform context, AI content commands and Remotion video jobs.",
    });

    expect(parsed.slug).toBe("platform-content");
  });

  it("accepts trading agent in guarded auto mode", () => {
    const parsed = AgentSummarySchema.parse({
      id: "trading-signal-agent",
      slug: "trading",
      name: "Trading Signal Agent",
      mode: "auto_guarded",
      enabled: true,
      health: "healthy",
      pendingApprovals: 0,
      sourceCount: 2,
      description: "Executes MT5 trades only after rule and risk guards pass.",
    });

    expect(parsed.mode).toBe("auto_guarded");
  });

  it("rejects invalid trust score bounds", () => {
    const result = SourceSummarySchema.safeParse({
      id: "source-1",
      agentSlug: "facebook-leads",
      type: "facebook_group_link",
      name: "Group",
      urlOrExternalId: "https://facebook.com/groups/demo",
      enabled: true,
      trustScore: 101,
    });

    expect(result.success).toBe(false);
  });

  it("rejects negative dashboard counters", () => {
    const result = DashboardSummarySchema.safeParse({
      totalAgents: 3,
      activeAgents: -1,
      pendingApprovals: 0,
      messagesToday: 0,
      aiCostTodayUsd: 0,
      lastError: null,
    });

    expect(result.success).toBe(false);
  });

  it("accepts worker jobs with system workspace", () => {
    const parsed = WorkerJobSummarySchema.parse({
      id: "job-1",
      type: "system.health-check",
      status: "queued",
      priority: "critical",
      workspace: "system",
      requestedBy: "system_scheduler",
      createdAt: "2026-04-24T00:00:00.000Z",
      target: "vps",
      detail: "Run health check.",
    });

    expect(parsed.workspace).toBe("system");
  });
});
