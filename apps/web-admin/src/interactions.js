/**
 * OpenClaw Interactions — Event delegation + Simulated Execution
 */
import { appStore } from './core/store.js';

/* ── CSS Injection ── */
const CSS = `
.oc-toast-container{position:fixed;bottom:100px;right:24px;z-index:9999;display:flex;flex-direction:column-reverse;gap:8px;pointer-events:none}
.oc-toast{font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:600;padding:12px 20px;border-radius:12px;color:#fff;background:#1B1C1A;box-shadow:0 8px 32px rgba(0,0,0,.2);transform:translateX(120%);transition:transform .3s cubic-bezier(.22,1,.36,1);pointer-events:auto;max-width:340px}
.oc-toast.show{transform:translateX(0)}
.oc-toast.success{background:#065f46}
.oc-toast.warn{background:#92400e}
.oc-toast.error{background:#991b1b}
.oc-toast.info{background:#1e3a5f}
.oc-modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9998;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;backdrop-filter:blur(4px)}
.oc-modal-backdrop.show{opacity:1}
.oc-modal{background:#FFFBF5;border-radius:24px;padding:32px;max-width:560px;width:90%;max-height:85vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,.2);transform:scale(.9);transition:transform .25s cubic-bezier(.22,1,.36,1)}
.oc-modal-backdrop.show .oc-modal{transform:scale(1)}
.oc-modal h3{font-family:'Space Grotesk';font-size:22px;font-weight:700;margin-bottom:16px;color:#1B1C1A}
.oc-modal label{display:block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6F7977;margin:12px 0 4px}
.oc-modal input,.oc-modal textarea,.oc-modal select{width:100%;padding:10px 14px;border:1px solid #e5e2db;border-radius:12px;font-size:13px;background:#fff;font-family:inherit}
.oc-modal textarea{min-height:80px;resize:vertical}
.oc-modal .oc-modal-actions{display:flex;gap:8px;margin-top:20px}
.oc-modal .oc-modal-actions button{flex:1;padding:12px;border-radius:12px;font-weight:700;font-size:12px;cursor:pointer;font-family:'Space Grotesk'}
.oc-btn-loading{pointer-events:none;opacity:.7}
.oc-btn-loading::after{content:'';display:inline-block;width:12px;height:12px;border:2px solid transparent;border-top-color:currentColor;border-radius:50%;animation:oc-spin .6s linear infinite;margin-left:8px;vertical-align:middle}
@keyframes oc-spin{to{transform:rotate(360deg)}}
.oc-card-glow{animation:oc-glow 1.5s ease-out}
@keyframes oc-glow{0%{box-shadow:0 0 0 4px rgba(185,88,63,.4)}100%{box-shadow:0 0 0 0 rgba(185,88,63,0)}}
.oc-progress-sim{transition:width 2s ease-in-out}
`;

let toastContainer;

export function initInteractions() {
  if (document.getElementById('oc-ix-css')) return;
  const s = document.createElement('style'); s.id = 'oc-ix-css'; s.textContent = CSS;
  document.head.appendChild(s);
  toastContainer = document.createElement('div');
  toastContainer.className = 'oc-toast-container';
  document.body.appendChild(toastContainer);
  document.body.addEventListener('click', handleClick);
}

/* ── Toast ── */
function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = `oc-toast ${type}`;
  el.textContent = msg;
  toastContainer.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3000);
}

/* ── Modal ── */
function showModal(title, bodyHTML, onConfirm) {
  const bd = document.createElement('div');
  bd.className = 'oc-modal-backdrop';
  bd.innerHTML = `<div class="oc-modal"><h3>${title}</h3>${bodyHTML}<div class="oc-modal-actions"><button class="oc-modal-cancel" style="background:#f0ece4;color:#1B1C1A">Huỷ</button>${onConfirm ? '<button class="oc-modal-confirm" style="background:#B9583F;color:#fff">Xác nhận</button>' : ''}</div></div>`;
  document.body.appendChild(bd);
  requestAnimationFrame(() => bd.classList.add('show'));
  bd.querySelector('.oc-modal-cancel').onclick = () => closeModal(bd);
  bd.addEventListener('click', (e) => { if (e.target === bd) closeModal(bd); });
  if (onConfirm) bd.querySelector('.oc-modal-confirm').onclick = () => { onConfirm(); closeModal(bd); };
  return bd;
}
function closeModal(bd) { bd.classList.remove('show'); setTimeout(() => bd.remove(), 200); }

/* ── Loading Button ── */
function btnLoad(btn, duration = 2000) {
  const orig = btn.innerHTML; btn.classList.add('oc-btn-loading');
  return new Promise(r => setTimeout(() => { btn.classList.remove('oc-btn-loading'); btn.innerHTML = orig; r(); }, duration));
}

/* ── Navigate Tab ── */
function goTab(tab) {
  const ws = appStore.state.workspace;
  appStore.state.tabs[ws] = tab;
}

/* ── Main Click Handler ── */
function handleClick(e) {
  const btn = e.target.closest('button, a[href="#"], [role="button"]');
  if (!btn) return;
  const txt = btn.textContent.trim();
  const ws = appStore.state.workspace;

  // ─── Cross-tab navigation (all workspaces) ───
  if (txt.includes('→ Pipeline') || txt.includes('Xem Pipeline'))  { goTab('pipeline');  toast('➡️ Chuyển sang Pipeline', 'info'); return; }
  if (txt.includes('→ Studio'))    { goTab('studio');   toast('➡️ Chuyển sang Studio', 'info'); return; }
  if (txt.includes('Xem Context')) { goTab('context');  toast('➡️ Chuyển sang Ngữ Cảnh', 'info'); return; }
  if (txt.includes('Sửa →') && txt.includes('Sửa'))     { goTab('strategy'); toast('➡️ Chuyển sang Chiến Lược', 'info'); return; }

  // ─── PAUSE ALL ───
  if (txt.includes('PAUSE ALL')) {
    showModal('⚠️ Tạm Dừng Toàn Bộ Factory?', '<p style="font-size:14px;color:#6F7977;line-height:1.6">Mọi hoạt động AI tự động sẽ bị tạm dừng trên tất cả nền tảng. Content đã scheduled sẽ không được publish cho đến khi bạn resume.</p>', () => {
      const dot = document.querySelector('[style*="background:#10b981"]');
      if (dot) { dot.style.background = '#ef4444'; dot.style.boxShadow = '0 0 8px rgba(239,68,68,0.5)'; }
      const label = document.querySelector('[style*="FACTORY ONLINE"]') || [...document.querySelectorAll('span')].find(s => s.textContent.includes('FACTORY ONLINE'));
      if (label) { label.textContent = 'FACTORY PAUSED'; label.style.color = '#BA1A1A'; }
      btn.textContent = '▶ RESUME'; btn.style.background = 'rgba(16,185,129,0.1)'; btn.style.color = '#065f46';
      toast('⏸ Factory đã tạm dừng', 'warn');
    });
    return;
  }
  if (txt.includes('RESUME')) {
    const dot = document.querySelector('[style*="background:#ef4444"]');
    if (dot) { dot.style.background = '#10b981'; dot.style.boxShadow = '0 0 8px rgba(16,185,129,0.5)'; }
    const label = [...document.querySelectorAll('span')].find(s => s.textContent.includes('FACTORY PAUSED'));
    if (label) { label.textContent = 'FACTORY ONLINE'; label.style.color = '#994029'; }
    btn.textContent = '⏸ PAUSE ALL'; btn.style.background = 'rgba(186,26,26,0.06)'; btn.style.color = '#BA1A1A';
    toast('▶ Factory đã hoạt động trở lại', 'success'); return;
  }

  // ─── W3 Content: Strategy Tab ───
  if (txt.includes('Chỉnh Strategy')) {
    showModal('Chỉnh sửa Strategy — LinkedIn', `
      <label>Brand Voice</label><textarea>Chuyên nghiệp nhưng gần gũi. Dùng ví dụ thực tế, tránh academic.</textarea>
      <label>Content Pillars</label><input value="AI in Education, SaaS Builder, Career Tips, Case Study">
      <label>Target Audience</label><input value="CTO startup 25-35, quan tâm automation">
      <label>Posting Rules</label><input value="3 bài/tuần, T2-T4-T6 lúc 8:00">
      <label>Autonomy Level</label><select><option>🟢 Full Auto</option><option>🟡 Semi-Auto</option><option>🔴 Manual Only</option></select>
    `, () => toast('✅ Strategy đã cập nhật', 'success'));
    return;
  }
  if (txt.includes('Bắt Đầu Setup')) {
    showModal('Setup Strategy Mới', `
      <label>Nền tảng</label><input value="Facebook" disabled style="opacity:.6">
      <label>Brand Voice</label><textarea placeholder="Mô tả giọng điệu bạn muốn AI dùng trên Facebook..."></textarea>
      <label>Content Pillars (phân cách bằng dấu phẩy)</label><input placeholder="VD: Case Study, Tips & Tricks">
      <label>Target Audience</label><input placeholder="VD: SME owners 30-45">
      <label>Autonomy Level ban đầu</label><select><option>🔴 Manual Only (khuyến nghị cho platform mới)</option><option>🟡 Semi-Auto</option></select>
    `, () => toast('✅ Facebook Strategy đã tạo. Chuyển sang 🟡 Semi-Auto.', 'success'));
    return;
  }

  // ─── W3 Content: Create Tab ───
  if (txt.includes('Tạo nội dung') || txt.includes('Tạo nội')) {
    btnLoad(btn, 2500).then(() => {
      const output = document.querySelector('[class*="border-l-4"]');
      if (output) { output.classList.add('oc-card-glow'); output.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      toast('✨ Nội dung đã được tạo (v3)', 'success');
    });
    return;
  }
  if (txt === 'Copy') { navigator.clipboard?.writeText('Bạn đang quản lý team 10 người...'); toast('📋 Đã copy nội dung', 'success'); return; }
  if (txt === 'Chỉnh lại') {
    const input = btn.closest('div')?.querySelector('input');
    if (input && !input.value.trim()) { toast('⚠️ Nhập yêu cầu chỉnh sửa trước', 'warn'); return; }
    btnLoad(btn, 1500).then(() => toast('✨ Đã chỉnh sửa nội dung (v4)', 'success'));
    return;
  }

  // ─── W3: Pipeline Tab ───
  if (btn.closest('.oc-card') && ws === 'content' && appStore.state.tabs.content === 'pipeline') {
    const card = btn.closest('.oc-card');
    const title = card.querySelector('.text-sm.font-bold')?.textContent || 'Card';
    if (card.querySelector('[class*="DRAFT"], [class*="Draft"]') || txt === '' || btn === card) {
      showModal(`📝 Chi tiết: ${title}`, `
        <div style="display:flex;gap:8px;margin-bottom:16px"><span style="background:#dbeafe;color:#1d4ed8;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:700">LINKEDIN</span><span style="background:#d1fae5;color:#065f46;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:700">AI Auto</span></div>
        <label>Brief (Tại sao làm bài này?)</label><p style="font-size:13px;color:#444;line-height:1.6">Pillar "AI in Education", target CTO 25-35. Mục tiêu: awareness + traffic.</p>
        <label>Nội dung</label><div style="background:#f9f7f4;padding:16px;border-radius:12px;font-size:13px;line-height:1.7;color:#333">${title}... [Preview content sẽ hiện ở đây khi có data thật]</div>
        <label>Metadata</label><p style="font-size:11px;color:#6F7977">Strategy: LinkedIn v3 · Context: creator-profile.md · Model: Gemini 3 Flash</p>
        <div style="display:flex;gap:8px;margin-top:16px"><button onclick="this.closest('.oc-modal-backdrop').querySelector('.oc-modal-cancel').click()" style="flex:1;padding:10px;border-radius:10px;font-size:11px;font-weight:700;background:#d1fae5;color:#065f46;border:none;cursor:pointer">✅ Approve → Review</button><button onclick="this.closest('.oc-modal-backdrop').querySelector('.oc-modal-cancel').click()" style="flex:1;padding:10px;border-radius:10px;font-size:11px;font-weight:700;background:#fee2e2;color:#991b1b;border:none;cursor:pointer">❌ Reject</button></div>
      `, null);
      return;
    }
  }

  // Pipeline filter chips
  if (ws === 'content' && appStore.state.tabs.content === 'pipeline' && btn.classList.contains('bg-surface-container-low')) {
    btn.closest('.flex')?.querySelectorAll('button').forEach(b => { b.className = b.className.replace(/bg-(?:surface-container|blue-50)\s*/g, 'bg-surface-container-low ').replace('text-blue-700', 'text-on-surface-variant'); });
    btn.className = btn.className.replace('bg-surface-container-low', 'bg-blue-50').replace('text-on-surface-variant', 'text-blue-700');
    toast(`🔍 Filter: ${txt}`, 'info'); return;
  }

  // ─── W3: Studio Tab ───
  if (txt.includes('Storyboard') || txt.includes('Review → Render')) {
    showModal('🎬 Tạo Video — Storyboard Preview', `
      <p style="font-size:13px;color:#444;margin-bottom:16px">AI đã phân tích URL và tạo storyboard 12 scenes:</p>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${[1,2,3,4,5].map(i => `<div style="display:flex;align-items:center;gap:12px;padding:10px;background:#f9f7f4;border-radius:10px"><span style="font-size:18px;font-weight:700;color:#B9583F;min-width:24px">${i}</span><div><span style="font-size:12px;font-weight:700">Scene ${i}: ${['Hero Section','Dashboard','AI Features','Pricing','Footer'][i-1]}</span><br><span style="font-size:10px;color:#6F7977">Duration: ${[3,5,4,3,2][i-1]}s · Zoom: ${['Pan Right','Zoom In','Static','Scroll','Fade Out'][i-1]}</span></div></div>`).join('')}
      </div>
      <p style="font-size:11px;color:#6F7977;margin-top:12px">Template: CinematicWalkthrough · TikTok 9:16 · Est. render: 4 phút · Cost: ~$0.02</p>
    `, () => { toast('🎬 Bắt đầu render... Theo dõi tại Active Queue', 'success'); });
    return;
  }
  if (txt === 'View Log') {
    showModal('📋 Render Log', `<pre style="font-family:monospace;font-size:11px;background:#1a1a1a;color:#10b981;padding:16px;border-radius:12px;overflow-x:auto;line-height:1.8;max-height:300px;overflow-y:auto">[12:30:01] Initializing Remotion renderer...
[12:30:02] Loading composition: CinematicWalkthrough
[12:30:03] Resolving frames for scene 1/12 (Hero)
[12:30:08] Scene 1 rendered (92 frames)
[12:30:09] Scene 2 rendering... (Dashboard)
[12:30:15] Scene 2 rendered (150 frames)
[12:30:16] Scene 3 rendering... (AI Features)
[12:30:22] Scene 3 rendered (120 frames)
[12:30:23] Scene 4 rendering... (in progress)
[12:30:28] ████████████░░░░░░░░ 65%</pre>`, null);
    return;
  }

  // ─── W3: Context Tab ───
  if (txt.includes('Quét Lại') || txt.includes('Quét lại')) {
    btnLoad(btn, 2000).then(() => toast('✅ Đã quét xong. Context đã cập nhật.', 'success')); return;
  }
  if (txt.includes('Chỉnh Scope') || txt.includes('Chỉnh scope')) {
    showModal('Chỉnh Scope Quét', `
      <label>Phạm vi</label><select><option>Full Profile + Posts</option><option>Profile Only</option><option>Posts Only (3 tháng gần nhất)</option><option>Full Profile + Posts + Comments</option></select>
      <label>Depth Limit</label><input type="number" value="50" min="1" max="500"><span style="font-size:10px;color:#6F7977">Số trang tối đa sẽ quét</span>
      <label>Retention (ngày)</label><input type="number" value="30" min="7" max="365">
      <label>Auto-refresh</label><select><option>Mỗi 6 giờ</option><option>Mỗi 12 giờ</option><option>Mỗi 24 giờ</option><option>Manual only</option></select>
    `, () => toast('✅ Scope đã cập nhật', 'success'));
    return;
  }
  if (txt.includes('Thêm Nguồn') || (btn.closest('article') && btn.closest('article').querySelector('[class*="add_link"]'))) {
    showModal('Thêm Nguồn Tri Thức', `
      <label>Loại nguồn</label><select><option>Social Profile (LinkedIn, TikTok...)</option><option>Website / Landing Page</option><option>File Upload (.md, .txt, .pdf)</option><option>MCP Server</option></select>
      <label>URL hoặc Handle</label><input placeholder="https://linkedin.com/in/your-profile hoặc @username">
      <label>Mục đích</label><input placeholder="VD: Hiểu brand voice cho content LinkedIn">
      <label>Scope ban đầu</label><select><option>Full Profile + Posts</option><option>Profile Only</option><option>Custom...</option></select>
    `, () => { toast('✅ Đã thêm nguồn. Bắt đầu quét lần đầu...', 'success'); });
    return;
  }
  if (btn.querySelector('[class*="delete"]') || txt.includes('delete')) {
    showModal('⚠️ Xoá nguồn tri thức?', '<p style="font-size:14px;color:#6F7977;line-height:1.6">Context data đã cache sẽ bị xoá. AI sẽ không còn tham chiếu nguồn này khi tạo content.</p>', () => {
      const card = btn.closest('article'); if (card) { card.style.transition = 'all .3s'; card.style.opacity = '0'; card.style.transform = 'scale(.95)'; setTimeout(() => card.remove(), 300); }
      toast('🗑️ Đã xoá nguồn tri thức', 'warn');
    });
    return;
  }
  if (txt.includes('Quản Lý MCP')) {
    showModal('MCP Server — vanhien.ai', `
      <div style="display:flex;gap:8px;margin-bottom:16px"><span style="background:#d1fae5;color:#065f46;padding:4px 12px;border-radius:99px;font-size:10px;font-weight:700">● CONNECTED</span><span style="font-size:11px;color:#6F7977">32 tools available</span></div>
      <label>Cached Features (top 5)</label>
      <div style="display:flex;flex-direction:column;gap:4px">${['AI Grading Engine','Learning Path Generator','Student Dashboard','Teacher Analytics','Payment Integration'].map(f => `<div style="padding:8px 12px;background:#f9f7f4;border-radius:8px;font-size:12px">${f}</div>`).join('')}</div>
      <label>Cache Size</label><p style="font-size:13px">14.2 MB · Last synced: 30 phút trước</p>
    `, null);
    return;
  }

  // ─── W3: Audit Tab ───
  if (ws === 'content' && appStore.state.tabs.content === 'audit') {
    if (btn.textContent && !btn.textContent.includes('PAUSE') && btn.closest('.flex.gap-2')) {
      btn.closest('.flex')?.querySelectorAll('button').forEach(b => b.className = b.className.replace('bg-surface-container ', 'bg-surface-container-low '));
      btn.className = btn.className.replace('bg-surface-container-low', 'bg-surface-container');
      toast(`🔍 Filter: ${txt}`, 'info'); return;
    }
  }

  // ─── Platform selector chips (Create tab) ───
  if (btn.closest('.flex.flex-wrap.gap-2') && ws === 'content' && appStore.state.tabs.content === 'create') {
    const chips = btn.closest('.flex')?.querySelectorAll('button');
    if (chips && chips.length <= 5) {
      chips.forEach(c => { c.className = 'bg-surface-container px-4 py-2 rounded-lg text-xs font-bold text-on-surface-variant flex items-center gap-2'; });
      btn.className = 'bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold ring-2 ring-blue-300 flex items-center gap-2';
      toast(`📱 Platform: ${txt}`, 'info'); return;
    }
  }

  // ─── Studio type selector ───
  if (btn.closest('.flex.gap-2') && (txt === 'Walkthrough' || txt === 'Viral Short' || txt === 'Showcase')) {
    btn.closest('.flex')?.querySelectorAll('button').forEach(b => { b.className = 'flex-1 p-3 bg-surface-container rounded-xl text-xs font-bold text-on-surface-variant'; });
    btn.className = 'flex-1 p-3 bg-primary/10 text-primary rounded-xl text-xs font-bold ring-2 ring-primary/30';
    toast(`🎬 Loại: ${txt}`, 'info'); return;
  }

  // ─── Download / Cancel / Preview ───
  if (txt.includes('Download') || txt.includes('⬇')) { toast('⬇ Đang tải xuống...', 'info'); return; }
  if (btn.querySelector('[class*="cancel"]') && ws === 'content') { showModal('Huỷ Render?', '<p style="font-size:14px;color:#6F7977">Video đang render sẽ bị huỷ. Bạn có thể restart lại sau.</p>', () => toast('🗑️ Đã huỷ render job', 'warn')); return; }
  if (txt.includes('Preview') || txt.includes('▶')) { toast('▶ Preview player (demo)', 'info'); return; }

  // ─── W1 Trading / W2 Leads: Generic handlers ───
  if (ws === 'trading' || ws === 'leads') {
    // Don't intercept tab/workspace buttons
    if (btn.classList.contains('tab-btn') || btn.classList.contains('ws-btn')) return;
    if (txt.length > 2 && txt.length < 50) {
      toast(`⚡ ${txt}`, 'info');
    }
    return;
  }

  // ─── Catch-all for remaining content buttons ───
  if (ws === 'content' && txt.length > 2 && txt.length < 50) {
    if (btn.classList.contains('tab-btn') || btn.classList.contains('ws-btn')) return;
    toast(`⚡ ${txt}`, 'info');
  }
}
