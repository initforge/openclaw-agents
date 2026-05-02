import { describe, expect, it } from "vitest";

import {
  createBackgroundJob,
  createNotification,
  getRemoteSurfaceLabel,
  shouldRunOnVps,
} from "../../src";

const createdAt = "2026-04-24T00:00:00.000Z";

describe("agent-core job and notification factories", () => {
  it("creates queued background jobs with deterministic timestamp override", () => {
    const job = createBackgroundJob({
      id: "job-1",
      type: "notify.telegram",
      workspace: "system",
      requestedBy: "web_admin",
      target: "telegram:ops",
      detail: "Send deployment notification.",
      createdAt,
    });

    expect(job).toEqual({
      id: "job-1",
      type: "notify.telegram",
      status: "queued",
      priority: "medium",
      workspace: "system",
      requestedBy: "web_admin",
      createdAt,
      target: "telegram:ops",
      detail: "Send deployment notification.",
    });
  });

  it("keeps explicit job priority", () => {
    const job = createBackgroundJob({
      id: "job-2",
      type: "system.health-check",
      workspace: "system",
      requestedBy: "system_scheduler",
      target: "vps",
      detail: "Run health check.",
      priority: "critical",
      createdAt,
    });

    expect(job.priority).toBe("critical");
  });

  it("creates unacknowledged notifications", () => {
    const notification = createNotification({
      id: "notif-1",
      type: "system.deploy_succeeded",
      workspace: "system",
      channel: "telegram",
      title: "Deploy succeeded",
      body: "Production deployment finished.",
      createdAt,
    });

    expect(notification.createdAt).toBe(createdAt);
    expect(notification.acknowledged).toBe(false);
  });

  it("routes heavy jobs to VPS background runtime", () => {
    const heavyJob = createBackgroundJob({
      id: "job-3",
      type: "agent.codex-cli",
      workspace: "platform-content",
      requestedBy: "telegram_bot",
      target: "content-package:demo",
      detail: "Prepare package.",
      createdAt,
    });

    const lightJob = createBackgroundJob({
      id: "job-4",
      type: "notify.telegram",
      workspace: "system",
      requestedBy: "system_scheduler",
      target: "telegram:ops",
      detail: "Notify operator.",
      createdAt,
    });

    expect(shouldRunOnVps(heavyJob)).toBe(true);
    expect(shouldRunOnVps(lightJob)).toBe(false);
  });

  it("labels known execution surfaces for admin display", () => {
    expect(getRemoteSurfaceLabel("web_admin")).toBe("Web admin");
    expect(getRemoteSurfaceLabel("telegram_bot")).toBe("Telegram bot");
    expect(getRemoteSurfaceLabel("openclaw_mcp")).toBe("OpenClaw MCP");
    expect(getRemoteSurfaceLabel("codex_cli")).toBe("Codex CLI");
    expect(getRemoteSurfaceLabel("system_scheduler")).toBe("System scheduler");
  });
});
