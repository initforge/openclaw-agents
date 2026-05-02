import fs from 'fs';
function updateView(src, dest, funcName) {
  const content = fs.readFileSync(src, 'utf8');
  let body = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  body = body ? body[1] : content;
  // Escape backticks and $ so it can be safely used in a JS template string
  body = body.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  fs.writeFileSync(dest, `export function ${funcName}(data) { return \`${body}\`; }`);
}
updateView('p:/open-claw-setup/apps/web-admin/src/views/stitch-trading.html', 'p:/open-claw-setup/apps/web-admin/src/views/trading-desk.js', 'renderTradingDesk');
updateView('p:/open-claw-setup/apps/web-admin/src/views/stitch-leads.html', 'p:/open-claw-setup/apps/web-admin/src/views/leads-radar.js', 'renderLeadsRadar');
updateView('p:/open-claw-setup/apps/web-admin/src/views/stitch-content.html', 'p:/open-claw-setup/apps/web-admin/src/views/content-pipeline.js', 'renderContentPipeline');
console.log('Successfully injected Stitch HTML into JS views');
