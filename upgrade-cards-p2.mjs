import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';

const REPLACEMENTS = [
  // Leads audit — rounded-3xl cards
  ['bg-surface-container-lowest rounded-3xl p-container-padding', 'oc-card'],
  ['bg-surface-container-lowest rounded-3xl', 'oc-card'],
  
  // Leads customers — glass-card or rounded-card patterns
  ['bg-surface-container-lowest rounded-card shadow-level-1 p-card-padding', 'oc-card'],
  ['bg-surface-container-lowest rounded-card p-card-padding', 'oc-card'],
  ['bg-surface-container-lowest p-card-padding rounded-card', 'oc-card'],
  ['rounded-card shadow-level-1', 'oc-card'],
  
  // Leads respond
  ['bg-surface-container-lowest rounded-2xl p-6', 'oc-card'],
  ['bg-surface-container-lowest rounded-xl p-5', 'oc-card'],
  ['bg-surface-container-lowest rounded-xl p-6', 'oc-card'],
  ['bg-surface-container-lowest rounded-xl p-4', 'oc-card'],
  ['bg-surface-container-lowest rounded-2xl', 'oc-card'],
  ['bg-surface-container-lowest rounded-xl', 'oc-card'],
  
  // Leads sources
  ['bg-surface-container-lowest rounded-[20px]', 'oc-card'],
  
  // Content pipeline — kanban column cards
  ['bg-surface-container-lowest rounded-2xl p-4', 'oc-card'],
  ['bg-surface-container-lowest rounded-lg p-4', 'oc-card'],
  
  // General leftover flat patterns
  ['bg-surface-container-lowest rounded-lg', 'oc-card'],
  ['bg-white rounded-[24px]', 'oc-card'],
  
  // Signal stream — 3-column card wrappers
  ['bg-surface-container-low rounded-xl p-5', 'oc-card'],
  ['bg-surface-container-low rounded-xl p-4', 'oc-card'],
  ['bg-surface-container-low rounded-lg p-4', 'oc-card'],
  ['bg-surface-container-low rounded-lg p-3', 'oc-card'],
];

const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));
let fixed = 0;

for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let c = fs.readFileSync(fpath, 'utf-8');
  const orig = c;

  for (const [old, nw] of REPLACEMENTS) {
    c = c.split(old).join(nw);
  }

  if (c !== orig) {
    fs.writeFileSync(fpath, c);
    fixed++;
    console.log(`[UPGRADED] ${file}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}

console.log(`\n=== PASS 2 CARD UPGRADE: ${fixed} views ===`);
