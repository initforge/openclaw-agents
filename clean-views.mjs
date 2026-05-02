import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';
const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));

let fixCount = 0;
for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let content = fs.readFileSync(fpath, 'utf-8');
  const original = content;
  
  // Remove fixed top app bars (Stitch-generated)
  content = content.replace(/<div class="hidden md:flex fixed top-0[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
  
  // Remove md:ml-64 offset (Stitch sidebar)
  content = content.replace(/md:ml-64/g, '');
  content = content.replace(/md:ml-72/g, '');
  
  // Remove mobile bottom nav bars
  content = content.replace(/<div class="md:hidden fixed bottom-0[\s\S]*?<\/div>\s*<\/div>/g, '');
  
  // Remove mt-24 that compensates for fixed top bar
  content = content.replace(/md:mt-24/g, 'mt-0');
  content = content.replace(/mt-0 md:mt-20/g, 'mt-0');
  
  // Remove leftover max-w-container-max constraints (we use shell padding)
  content = content.replace(/max-w-container-max/g, 'max-w-full');
  
  if (content !== original) {
    fs.writeFileSync(fpath, content);
    fixCount++;
    console.log(`[FIXED] ${file}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}
console.log(`\n=== CLEANED ${fixCount}/${files.length} view files ===`);
