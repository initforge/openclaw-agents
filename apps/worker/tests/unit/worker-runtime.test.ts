import { describe, expect, it } from "vitest";

import { shouldRunOnVps } from "@openclaw/agent-core";

import {
  bootstrapJobs,
  bootstrapNotifications,
  describeRuntimePlan,
} from "../../src/runtime";

describe("worker runtime scaffold", () => {
  it("danh dau remotion render la job chay nen tren VPS", () => {
    const renderJob = bootstrapJobs.find(
      (job) => job.type === "content.render.remotion",
    );

    expect(renderJob).toBeDefined();
    expect(renderJob ? shouldRunOnVps(renderJob) : false).toBe(true);
  });

  it("tao du thong bao mau cho lead va render", () => {
    const notificationTypes = bootstrapNotifications.map(
      (notification) => notification.type,
    );

    expect(notificationTypes).toContain("lead.customer_replied");
    expect(notificationTypes).toContain("content.render_completed");
  });

  it("mo ta runtime plan co target hop le", () => {
    const plan = describeRuntimePlan();

    expect(plan.length).toBeGreaterThan(0);
    expect(plan.every((item) => item.detail.length > 0)).toBe(true);
  });
});
