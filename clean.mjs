import { existsSync, rmSync, readdirSync } from "node:fs";
import { resolve, relative, sep } from "node:path";

const root = process.cwd();
const includeDeps = process.argv.includes("--deps");

const rootTargets = [
  ".logs",
  ".playwright-mcp",
  ".turbo",
  "coverage",
  "playwright-report",
  "test-results",
];

const workspaceTargetNames = new Set([".turbo", "dist", ".next", "coverage"]);

if (includeDeps) {
  rootTargets.push("node_modules", ".corepack", ".tools");
  workspaceTargetNames.add("node_modules");
}

const workspaceRoots = ["apps", "packages"];
const targets = new Set(rootTargets.map((target) => resolve(root, target)));

for (const workspaceRoot of workspaceRoots) {
  const absoluteWorkspaceRoot = resolve(root, workspaceRoot);
  if (!existsSync(absoluteWorkspaceRoot)) {
    continue;
  }

  for (const entry of readdirSync(absoluteWorkspaceRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }

    const packageRoot = resolve(absoluteWorkspaceRoot, entry.name);
    for (const child of readdirSync(packageRoot, { withFileTypes: true })) {
      if (child.isDirectory() && workspaceTargetNames.has(child.name)) {
        targets.add(resolve(packageRoot, child.name));
      }
    }
  }
}

const removed = [];

for (const target of [...targets].sort()) {
  const pathFromRoot = relative(root, target);
  const isInsideRoot = pathFromRoot && !pathFromRoot.startsWith(`..${sep}`) && pathFromRoot !== "..";

  if (!isInsideRoot || !existsSync(target)) {
    continue;
  }

  rmSync(target, { recursive: true, force: true });
  removed.push(pathFromRoot);
}

if (removed.length === 0) {
  console.log("Workspace already clean.");
} else {
  console.log(`Removed ${removed.length} generated paths:`);
  for (const path of removed) {
    console.log(`- ${path}`);
  }
}
