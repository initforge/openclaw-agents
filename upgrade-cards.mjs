import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';
const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));

let fixed = 0;
for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let c = fs.readFileSync(fpath, 'utf-8');
  const orig = c;

  // ═══ UPGRADE 1: Replace old flat card patterns with oc-card ═══
  // Pattern: bg-surface-container-lowest rounded-[24px] ... → oc-card
  c = c.replace(
    /bg-surface-container-lowest rounded-\[24px\]([^"]*?)shadow-\[[^\]]*\]/g,
    'oc-card$1'
  );
  // Remaining flat white cards
  c = c.replace(
    /bg-surface-container-lowest rounded-\[24px\] p-\[32px\]/g,
    'oc-card'
  );
  c = c.replace(
    /bg-surface-container-lowest rounded-\[24px\] p-bento-padding/g,
    'oc-card'
  );
  c = c.replace(
    /bg-surface-container-lowest rounded-\[24px\] p-container-padding/g,
    'oc-card'
  );

  // ═══ UPGRADE 2: Replace <details> expandable cards with oc-card-expand ═══
  c = c.replace(
    /class="(group )?bg-surface-container-lowest rounded-\[24px\] bento-shadow overflow-hidden/g,
    'class="oc-card-expand'
  );
  c = c.replace(
    /class="(group )?bg-surface-container-lowest rounded-card shadow-\[[^\]]*\] overflow-hidden/g,
    'class="oc-card-expand'
  );
  c = c.replace(
    /class="glass-card group w-full/g,
    'class="oc-card-expand w-full'
  );
  c = c.replace(
    /class="glass-card group w-full md:col-span-2/g,
    'class="oc-card-expand w-full md:col-span-2'
  );

  // ═══ UPGRADE 3: Replace flat surface cards with oc-card ═══
  c = c.replace(
    /bg-surface rounded-bento shadow-ambient p-bento-pad/g,
    'oc-card'
  );
  c = c.replace(
    /bg-surface-container-lowest rounded-\[24px\]/g,
    'oc-card'
  );

  // ═══ UPGRADE 4: Replace old metric tiles with oc-metric ═══
  c = c.replace(
    /bg-\[#F5F2ED\] p-4 rounded-xl flex flex-col/g,
    'oc-metric flex flex-col'
  );
  c = c.replace(
    /bg-surface-container-low p-4 rounded-xl flex flex-col gap-1/g,
    'oc-metric flex flex-col gap-1'
  );
  c = c.replace(
    /bg-surface-container-low p-4 rounded-xl flex flex-col/g,
    'oc-metric flex flex-col'
  );

  // ═══ UPGRADE 5: Fix context card styling ═══
  c = c.replace(
    /bg-surface-container-low rounded-\[24px\] p-md/g,
    'oc-card'
  );

  // ═══ UPGRADE 6: Replace stats bar with oc-glass ═══
  c = c.replace(
    /bg-surface-container-high rounded-\[24px\] px-6 py-4/g,
    'oc-glass'
  );

  // ═══ UPGRADE 7: Replace old divider lines with oc-divider ═══
  c = c.replace(
    /<div class="w-\[1px\] h-8 bg-outline-variant opacity-50"><\/div>/g,
    '<div class="oc-divider" style="width:1px;height:32px;margin:0 8px;background:rgba(0,0,0,0.06)"></div>'
  );

  // ═══ UPGRADE 8: Section titles ═══
  // h3 section headers in leads/content audit
  c = c.replace(
    /font-label-caps text-label-caps text-on-surface(?!-variant)/g,
    'oc-section-title'
  );

  // ═══ UPGRADE 9: Status badges ═══
  c = c.replace(
    /bg-primary-container text-on-primary px-2 py-1 rounded text-xs font-semibold tracking-wide/g,
    'oc-badge oc-badge-buy'
  );
  c = c.replace(
    /bg-secondary text-on-secondary px-2 py-1 rounded text-xs font-semibold tracking-wide/g,
    'oc-badge oc-badge-sell'
  );

  if (c !== orig) {
    fs.writeFileSync(fpath, c);
    fixed++;
    console.log(`[UPGRADED] ${file}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}

console.log(`\n=== CARD UPGRADE: ${fixed}/${files.length} views enhanced ===`);
