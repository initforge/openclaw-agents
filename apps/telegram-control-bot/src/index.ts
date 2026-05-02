const supportedCommands = [
  "/status",
  "/approvals",
  "/pause trading",
  "/pause leads",
  "/pause content",
  "/jobs",
  "/notifications",
  "/render demo-001",
  "/codex content-package demo-001",
];

console.log("[telegram-control-bot] scaffold ready");
console.log("[telegram-control-bot] remote commands:");

for (const command of supportedCommands) {
  console.log(` - ${command}`);
}
