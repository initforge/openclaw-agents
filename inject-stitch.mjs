/**
 * inject-stitch.mjs — Extract <body> content + tailwind config + custom styles from Stitch HTML
 * Creates JS view files that return the inner HTML, plus extracts tailwind theme tokens
 */
import fs from 'fs';
import path from 'path';

const REF_DIR = 'p:/open-claw-setup/apps/web-admin/stitch-ref';
const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';

// Map from stitch file → view file + function name
const MAP = {
  '01-trading-desk':     { file: 'trading-desk.js',          fn: 'renderTradingDesk' },
  '04-trading-strategy': { file: 'trading-strategy.js',      fn: 'renderTradingStrategy' },
  '05-trading-signals':  { file: 'trading-signal-stream.js', fn: 'renderTradingSignalStream' },
  '06-trading-connections': { file: 'trading-connections.js', fn: 'renderTradingConnections' },
  '07-trading-history':  { file: 'trading-history.js',       fn: 'renderTradingHistory' },
  '02-leads-radar':      { file: 'leads-radar.js',           fn: 'renderLeadsRadar' },
  '08-leads-respond':    { file: 'leads-respond.js',         fn: 'renderLeadsRespond' },
  '09-leads-customers':  { file: 'leads-customers.js',       fn: 'renderLeadsCustomers' },
  '10-leads-sources':    { file: 'leads-sources.js',         fn: 'renderLeadsSources' },
  '11-leads-proof':      { file: 'leads-proof.js',           fn: 'renderLeadsProof' },
  '12-leads-audit':      { file: 'leads-audit.js',           fn: 'renderLeadsAudit' },
  '13-content-command':  { file: 'content-command.js',       fn: 'renderContentCommand' },
  '03-content-pipeline': { file: 'content-pipeline.js',      fn: 'renderContentPipeline' },
  '14-content-video':    { file: 'content-video.js',         fn: 'renderContentVideo' },
  '15-content-context':  { file: 'content-context.js',       fn: 'renderContentContext' },
  '16-content-audit':    { file: 'content-audit.js',         fn: 'renderContentAudit' }
};

let injected = 0;

for (const [stitchName, target] of Object.entries(MAP)) {
  const htmlPath = path.join(REF_DIR, `${stitchName}.html`);
  if (!fs.existsSync(htmlPath)) { console.log(`[SKIP] ${stitchName} — not found`); continue; }
  
  const html = fs.readFileSync(htmlPath, 'utf-8');
  
  // Extract body content (between <body ...> and </body>)
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) { console.log(`[SKIP] ${stitchName} — no body`); continue; }
  
  let bodyContent = bodyMatch[1].trim();
  
  // Remove the side nav (we have our own shell navigation)
  bodyContent = bodyContent.replace(/<nav[\s\S]*?<\/nav>/gi, (match) => {
    // Only remove if it's a sidebar/sidenav (check for fixed/hidden md:flex patterns)
    if (match.includes('h-screen') || match.includes('fixed left') || match.includes('md:flex hidden') || match.includes('SideNavBar') || match.includes('Bottom Navigation') || match.includes('fixed bottom')) {
      return '';
    }
    return match;
  });
  
  // Remove top header (we use workspace toggle instead)  
  bodyContent = bodyContent.replace(/<header[\s\S]*?<\/header>/gi, '');
  
  // Remove md:ml-72 offset from main (no sidebar)
  bodyContent = bodyContent.replace(/md:ml-72/g, '');
  
  // Escape backticks and dollar signs for template literal
  bodyContent = bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  const jsContent = `/**\n * ${stitchName} — Stitch MCP Generated View\n * Auto-injected from stitch-ref/${stitchName}.html\n */\nexport function ${target.fn}(data) { return \`\n${bodyContent}\n\`; }\n`;
  
  const outPath = path.join(VIEW_DIR, target.file);
  fs.writeFileSync(outPath, jsContent);
  injected++;
  console.log(`[OK] ${stitchName} → ${target.file} (${bodyContent.length} chars)`);
}

console.log(`\n=== INJECTED ${injected}/${Object.keys(MAP).length} views ===`);

// Extract tailwind config from first file to use as reference
const firstHtml = fs.readFileSync(path.join(REF_DIR, '01-trading-desk.html'), 'utf-8');
const configMatch = firstHtml.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*<\/script>/);
if (configMatch) {
  fs.writeFileSync(path.join(REF_DIR, 'tailwind-theme-trading.json'), configMatch[1]);
  console.log('[OK] Extracted tailwind theme config for trading');
}
