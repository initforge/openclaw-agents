import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';
const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));

// The STANDARD wrapper: no margin-left offsets, consistent max-width and padding.
// Shell (#workspace-content) already provides: padding: 24px 40px 160px
// So views should NOT add their own outer padding.
// Standard pattern: <div class="oc-view max-w-[1400px] mx-auto w-full">

let fixed = 0;
for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let c = fs.readFileSync(fpath, 'utf-8');
  const orig = c;

  // ═══ STEP 1: Remove sidebar margin-left offsets ═══
  c = c.replace(/ml-64/g, '');
  c = c.replace(/ml-72/g, '');
  c = c.replace(/md:ml-64/g, '');
  c = c.replace(/md:ml-72/g, '');

  // ═══ STEP 2: Normalize main wrapper padding ═══
  // Remove excessive padding on <main> wrappers since shell provides it
  c = c.replace(/ px-12 py-12/g, '');
  c = c.replace(/ p-margin-page/g, '');
  c = c.replace(/ p-section-margin/g, '');
  c = c.replace(/ md:p-section-margin/g, '');
  c = c.replace(/ p-margin/g, '');
  c = c.replace(/ p-8 pb-12/g, '');
  c = c.replace(/ p-8/g, '');
  c = c.replace(/ p-6 md:p-10 lg:p-12/g, '');
  // Keep p-container-padding, p-gutter, p-bento-gap as they are reasonable
  // But normalize p-container-padding to nothing (shell handles it)
  c = c.replace(/ p-container-padding/g, '');
  c = c.replace(/ pb-section-gap/g, '');
  c = c.replace(/ pb-24/g, '');

  // ═══ STEP 3: Normalize max-width to consistent 1400px ═══
  // Pipeline is special (Kanban horizontal scroll), skip it
  if (file !== 'content-pipeline.js') {
    c = c.replace(/max-w-5xl/g, 'max-w-[1400px]');
    c = c.replace(/max-w-7xl/g, 'max-w-[1400px]');
    c = c.replace(/max-w-\[1200px\]/g, 'max-w-[1400px]');
    c = c.replace(/max-w-full/g, 'max-w-[1400px]');
    c = c.replace(/max-w-container-max/g, 'max-w-[1400px]');
  }

  // ═══ STEP 4: Remove min-h-screen (shell handles viewport) ═══
  c = c.replace(/ min-h-screen/g, '');
  c = c.replace(/ h-screen/g, '');
  c = c.replace(/ h-full/g, '');

  // ═══ STEP 5: Clean up double/triple spaces from removals ═══
  c = c.replace(/class="  +/g, 'class="');
  c = c.replace(/  +"/g, '"');
  c = c.replace(/  +/g, ' ');

  if (c !== orig) {
    fs.writeFileSync(fpath, c);
    fixed++;
    console.log(`[FIXED] ${file}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}

console.log(`\n=== NORMALIZED ${fixed}/${files.length} views ===`);
