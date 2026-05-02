import { getRemoteSurfaceLabel, shouldRunOnVps } from "@openclaw/agent-core";

import { bootstrapJobs, bootstrapNotifications, describeRuntimePlan } from "./runtime.js";

console.log("[worker] background runtime scaffold ready");

for (const plan of describeRuntimePlan()) {
  console.log(`[worker] plan ${plan.id} -> ${plan.type} (${plan.runsOn})`);
}

for (const job of bootstrapJobs) {
  console.log(
    `[worker] job ${job.id} requested by ${getRemoteSurfaceLabel(job.requestedBy)} -> ${job.type} | target=${job.target} | vps=${shouldRunOnVps(job)}`,
  );
}

for (const notification of bootstrapNotifications) {
  console.log(
    `[worker] notification ${notification.id} -> ${notification.channel} | ${notification.title}`,
  );
}
