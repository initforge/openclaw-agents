import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';
const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));

let fixed = 0;
for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let c = fs.readFileSync(fpath, 'utf-8');
  const orig = c;

  // Skip pipeline (Kanban horizontal scroll is intentional)
  if (file === 'content-pipeline.js') continue;

  // ═══ PASS 2: Remaining cleanup ═══

  // Fix leftover p-container-padding (already handled by shell)
  c = c.replace(/ p-container-padding/g, '');

  // Fix empty class attributes or classes with just spaces
  c = c.replace(/class="  *"/g, 'class=""');
  c = c.replace(/class=" +([^"]+)"/g, 'class="$1"');

  // Fix leads-respond leftover p-8 pb-12
  c = c.replace(/ p-8 pb-12/g, '');

  // Ensure every <main> is just flex-1 overflow-y-auto (shell handles padding)
  // Remove any leftover direct padding on <main>
  c = c.replace(/<main class="([^"]*)p-gutter([^"]*)">/g, '<main class="$1$2">');
  c = c.replace(/<main class="([^"]*)p-bento-gap([^"]*)">/g, '<main class="$1$2">');

  // Remove wrapper divs that just add flex-1 without purpose
  c = c.replace(/<div class="flex-1 flex flex-col ml-0 w-full relative">\s*/g, '');

  // Remove p-margin from strategy
  c = c.replace(/ p-margin /g, ' ');

  // Ensure all inner content divs have max-w-[1400px] mx-auto
  // For signal-stream, add it to the mb-xl div wrapper
  if (file === 'trading-signal-stream.js') {
    c = c.replace(
      '<main class="flex-1 flex flex-col min-w-0 overflow-y-auto">',
      '<main class="flex-1 flex flex-col min-w-0 overflow-y-auto">\n<div class="max-w-[1400px] mx-auto w-full">'
    );
    // Add closing div before </main>
    c = c.replace('</main>', '</div>\n</main>');
  }

  // For leads-customers, fix the empty main
  if (file === 'leads-customers.js') {
    c = c.replace(
      '<main class="">',
      '<main class="flex-1 overflow-y-auto">\n<div class="max-w-[1400px] mx-auto w-full">'
    );
    c = c.replace('</main>', '</div>\n</main>');
  }

  // For leads-respond, ensure it has max-w centering
  if (file === 'leads-respond.js') {
    c = c.replace(
      /<main class="([^"]*)">\s*<div class=" flex-1">/,
      '<main class="$1">\n<div class="max-w-[1400px] mx-auto w-full flex-1">'
    );
  }

  // Clean up double/triple spaces
  c = c.replace(/  +/g, ' ');
  c = c.replace(/class=" /g, 'class="');
  c = c.replace(/ "/g, '"');

  if (c !== orig) {
    fs.writeFileSync(fpath, c);
    fixed++;
    console.log(`[FIXED] ${file}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}

console.log(`\n=== PASS 2: ${fixed} views fixed ===`);
