import fs from 'fs';
import path from 'path';

const REF_DIR = 'p:/open-claw-setup/apps/web-admin/stitch-ref';
const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';

// Only the v2 upgraded files
const MAP = {
  '01-trading-desk-v2':     { file: 'trading-desk.js',          fn: 'renderTradingDesk' },
  '05-trading-signals-v2':  { file: 'trading-signal-stream.js', fn: 'renderTradingSignalStream' },
  '11-leads-proof-v2':      { file: 'leads-proof.js',           fn: 'renderLeadsProof' },
  '13-content-command-v2':  { file: 'content-command.js',       fn: 'renderContentCommand' },
  '14-content-video-v2':    { file: 'content-video.js',         fn: 'renderContentVideo' }
};

let injected = 0;
for (const [stitchName, target] of Object.entries(MAP)) {
  const htmlPath = path.join(REF_DIR, `${stitchName}.html`);
  if (!fs.existsSync(htmlPath)) { console.log(`[SKIP] ${stitchName}`); continue; }
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) { console.log(`[SKIP] ${stitchName} — no body`); continue; }
  
  let bodyContent = bodyMatch[1].trim();
  // Remove sidebars and headers (we have our own shell)
  bodyContent = bodyContent.replace(/<nav[\s\S]*?<\/nav>/gi, (m) =>
    m.includes('h-screen') || m.includes('fixed left') || m.includes('md:flex hidden') || m.includes('Bottom Navigation') ? '' : m
  );
  bodyContent = bodyContent.replace(/<header[\s\S]*?<\/header>/gi, '');
  bodyContent = bodyContent.replace(/md:ml-72/g, '');
  bodyContent = bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  const jsContent = `/**\n * ${stitchName} — Stitch MCP Generated View (v2 with spec alignment)\n * Auto-injected from stitch-ref/${stitchName}.html\n */\nexport function ${target.fn}(data) { return \`\n${bodyContent}\n\`; }\n`;
  
  fs.writeFileSync(path.join(VIEW_DIR, target.file), jsContent);
  injected++;
  console.log(`[OK] ${stitchName} → ${target.file} (${bodyContent.length} chars)`);
}
console.log(`\n=== INJECTED ${injected}/${Object.keys(MAP).length} v2 views ===`);
