/* ── View Imports ── */
import { renderTradingDesk } from './views/trading-desk.js';
import { renderTradingStrategy } from './views/trading-strategy.js';
import { renderTradingSignalStream } from './views/trading-signal-stream.js';
import { renderTradingConnections } from './views/trading-connections.js';
import { renderTradingHistory } from './views/trading-history.js';
import { renderLeadsRadar } from './views/leads-radar.js';
import { renderLeadsRespond } from './views/leads-respond.js';
import { renderLeadsCustomers } from './views/leads-customers.js';
import { renderLeadsSources } from './views/leads-sources.js';
import { renderLeadsProof } from './views/leads-proof.js';
import { renderLeadsAudit } from './views/leads-audit.js';
import { renderContentStrategy } from './views/content-strategy.js';
import { renderContentCreate } from './views/content-create.js';
import { renderContentPipeline } from './views/content-pipeline.js';
import { renderContentStudio } from './views/content-studio.js';
import { renderContentContext } from './views/content-context.js';
import { renderContentAudit } from './views/content-audit.js';
import { appStore } from './core/store.js';
import { initInteractions } from './interactions.js';

/* ── Tab Definitions (17 screens) ── */
const WORKSPACE_TABS = {
  trading: ['desk', 'strategy', 'signal-stream', 'connections', 'history'],
  leads: ['radar', 'respond', 'customers', 'sources', 'proof', 'audit'],
  content: ['strategy', 'create', 'pipeline', 'studio', 'context', 'audit']
};

const TAB_LABELS = {
  desk: 'Bàn Điều Khiển', strategy: 'Chiến Lược', 'signal-stream': 'Luồng Tín Hiệu',
  connections: 'Kết Nối', history: 'Lịch Sử',
  radar: 'Radar', respond: 'Phản Hồi', customers: 'Khách Hàng',
  sources: 'Nguồn', proof: 'Proof', audit: 'Audit',
  create: 'Soạn', pipeline: 'Pipeline', studio: 'Studio', context: 'Ngữ Cảnh'
};

/* ── View Router ── */
const VIEW_MAP = {
  'trading/desk': renderTradingDesk,
  'trading/strategy': renderTradingStrategy,
  'trading/signal-stream': renderTradingSignalStream,
  'trading/connections': renderTradingConnections,
  'trading/history': renderTradingHistory,
  'leads/radar': renderLeadsRadar,
  'leads/respond': renderLeadsRespond,
  'leads/customers': renderLeadsCustomers,
  'leads/sources': renderLeadsSources,
  'leads/proof': renderLeadsProof,
  'leads/audit': renderLeadsAudit,
  'content/strategy': renderContentStrategy,
  'content/create': renderContentCreate,
  'content/pipeline': renderContentPipeline,
  'content/studio': renderContentStudio,
  'content/context': renderContentContext,
  'content/audit': renderContentAudit,
};

/* ── DOM Refs ── */
const contentEl = document.getElementById('workspace-content');
const wsButtons = document.querySelectorAll('.ws-btn');
const wsSlider = document.querySelector('.ws-slider');
const tabBar = document.getElementById('tab-bar');

/* ── Render Functions ── */
function renderTabBar(workspace) {
  const tabs = WORKSPACE_TABS[workspace];
  const activeTab = appStore.state.tabs[workspace];
  tabBar.innerHTML = tabs.map(t =>
    `<button class="tab-btn ${t === activeTab ? 'active' : ''}" data-tab="${t}">${TAB_LABELS[t]}</button>`
  ).join('');
  tabBar.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      appStore.state.tabs[workspace] = btn.dataset.tab;
    });
  });
}

/* ── Persistent Content Header ── */
function renderFactoryHeader() {
  return `<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 20px;margin-bottom:16px;background:rgba(185,88,63,0.04);border-radius:16px;border:1px solid rgba(185,88,63,0.08)">
    <div style="display:flex;align-items:center;gap:10px">
      <div style="width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 8px rgba(16,185,129,0.5);animation:oc-pulse 2s infinite"></div>
      <span style="font-family:'Space Grotesk';font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#994029">FACTORY ONLINE</span>
    </div>
    <div style="display:flex;align-items:center;gap:16px;font-size:11px;font-weight:600">
      <span style="color:#1d4ed8">LI: 🟢</span>
      <span style="color:#000">TT: 🟡</span>
      <span style="color:#2563eb">FB: 🔴</span>
      <span style="color:#6F7977">Hôm nay: 3 bài · 1 render · $0.05</span>
    </div>
    <button style="font-family:'Space Grotesk';font-size:11px;font-weight:700;background:rgba(186,26,26,0.06);color:#BA1A1A;padding:6px 16px;border-radius:9999px;letter-spacing:0.04em">⏸ PAUSE ALL</button>
  </div>`;
}

function renderContent(workspace, tab) {
  contentEl.classList.add('content-exit');
  setTimeout(() => {
    const key = `${workspace}/${tab}`;
    const renderFn = VIEW_MAP[key];
    const header = workspace === 'content' ? renderFactoryHeader() : '';
    contentEl.innerHTML = header + (renderFn ? renderFn() : renderEmptyState(tab));
    contentEl.classList.remove('content-exit');
    contentEl.classList.add('content-enter');
    requestAnimationFrame(() => setTimeout(() => contentEl.classList.remove('content-enter'), 200));
  }, 150);
}

function renderEmptyState(tab) {
  return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;gap:12px;color:#6F7977">
    <div style="font-size:48px">◇</div>
    <h2 style="font-family:'Space Grotesk';font-size:24px;color:#1B1C1A">${TAB_LABELS[tab] || tab}</h2>
    <p>Chưa có dữ liệu.</p>
  </div>`;
}

/* ── Workspace Switch ── */
const THEME_COLORS = {
  trading: { slider: '#115E59', text: '#FFFFFF' },
  leads:   { slider: '#FFBF00', text: '#201B11' },
  content: { slider: '#B9583F', text: '#FFFFFF' }
};

function switchWorkspace(ws) {
  // Apply theme class
  document.body.className = `theme-${ws}`;
  
  // Render views
  renderTabBar(ws);
  renderContent(ws, appStore.state.tabs[ws]);
  
  // Update toggle
  wsButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.ws === ws));
  const activeBtn = document.querySelector(`.ws-btn[data-ws="${ws}"]`);
  if (activeBtn && wsSlider) {
    wsSlider.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`;
    wsSlider.style.width = `${activeBtn.offsetWidth}px`;
    wsSlider.style.backgroundColor = THEME_COLORS[ws].slider;
  }
  // Update active button text color
  wsButtons.forEach(btn => {
    btn.style.color = btn.dataset.ws === ws ? THEME_COLORS[ws].text : '';
  });
}

/* ── Event Listeners ── */
wsButtons.forEach(btn => {
  btn.addEventListener('click', () => { appStore.state.workspace = btn.dataset.ws; });
});

appStore.subscribe((prop, value) => {
  if (prop === 'workspace') switchWorkspace(value);
  if (prop === 'tab') {
    renderTabBar(value.workspace);
    renderContent(value.workspace, value.tab);
  }
});

/* ── Init ── */
initInteractions();
requestAnimationFrame(() => switchWorkspace(appStore.state.workspace));
