/**
 * 06-trading-connections — Stitch MCP Generated View
 * Auto-injected from stitch-ref/06-trading-connections.html
 */
export function renderTradingConnections(data) { return `
<!-- Main Canvas -->
<main class="flex-1 w-full max-w-[1400px] mx-auto px-8 pt-8">
<div class="mb-10">
<h2 class="text-3xl font-bold text-primary mb-2">QUẢN LÝ KẾT NỐI</h2>
<p class="text-sm text-on-surface-variant">Thiết lập nguồn tin tín hiệu và tài khoản giao dịch thực thi.</p>
</div>

<!-- 2x2 Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Card 1: Telegram -->
<section class="oc-card flex flex-col p-8">
  <div class="flex justify-between items-center mb-8">
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
        <span class="material-symbols-outlined text-3xl">send</span>
      </div>
      <h3 class="text-xl font-bold text-on-surface">Telegram Listener</h3>
    </div>
    <div class="oc-status oc-status-live bg-teal-500/10 text-teal-600 border-none px-3">Connected</div>
  </div>
  
  <div class="flex-1 flex flex-col gap-3 mb-8">
    <div class="bg-surface-container/30 rounded-2xl p-4 flex justify-between items-center border border-outline-variant/10">
      <div class="flex flex-col">
        <span class="text-sm font-bold">GoldSignalVIP channel</span>
        <span class="text-[10px] text-on-surface-variant uppercase">@gold_vip_official</span>
      </div>
      <span class="font-data-mono text-[10px] text-teal-600 font-bold bg-white px-2 py-1 rounded shadow-sm">ACTIVE</span>
    </div>
    <div class="bg-surface-container/30 rounded-2xl p-4 flex justify-between items-center border border-outline-variant/10">
      <div class="flex flex-col">
        <span class="text-sm font-bold">CryptoAlpha group</span>
        <span class="text-[10px] text-on-surface-variant uppercase">@crypto_alpha_trade</span>
      </div>
      <span class="font-data-mono text-[10px] text-teal-600 font-bold bg-white px-2 py-1 rounded shadow-sm">ACTIVE</span>
    </div>
  </div>
  
  <button class="w-full bg-white border-2 border-primary text-primary py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all flex justify-center items-center gap-2">
    <span class="material-symbols-outlined">add</span>
    KẾT NỐI KÊNH MỚI
  </button>
</section>

<!-- Card 2: Zalo Web (QR Flow Mockup) -->
<section class="oc-card flex flex-col p-8 relative overflow-hidden">
  <div class="flex justify-between items-center mb-8">
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
        <span class="material-symbols-outlined text-3xl">chat</span>
      </div>
      <h3 class="text-xl font-bold text-on-surface">Zalo Ingestion</h3>
    </div>
    <div class="text-[10px] font-bold text-error uppercase animate-pulse">Session Expired</div>
  </div>
  
  <div class="flex-1 flex flex-col items-center justify-center gap-4 mb-8 bg-surface-container/30 rounded-3xl p-8 border border-dashed border-outline-variant">
    <div class="w-32 h-32 bg-white p-2 rounded-2xl shadow-xl relative group cursor-pointer">
      <div class="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
        <span class="material-symbols-outlined text-4xl text-primary animate-spin">refresh</span>
        <span class="text-[9px] font-bold text-primary mt-2 uppercase">Refresh QR</span>
      </div>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ZaloOpenClaw" class="w-full h-full grayscale opacity-20">
    </div>
    <p class="text-center text-[11px] text-on-surface-variant px-4 leading-relaxed italic">Sử dụng ứng dụng Zalo để quét mã và duy trì kết nối Ingestion.</p>
  </div>
  
  <button class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all">
    QUÉT MÃ MỚI
  </button>
</section>

<!-- Card 3: MT5 Bridge (Full functional look) -->
<section class="oc-card flex flex-col p-8 col-span-1 md:col-span-2">
  <div class="flex justify-between items-center mb-10">
    <div class="flex items-center gap-4">
      <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
        <span class="material-symbols-outlined text-4xl">candlestick_chart</span>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-on-surface">MT5 Execution Bridge</h3>
        <p class="text-xs text-on-surface-variant">Cầu nối thực thi lệnh trực tiếp tới MetaTrader 5.</p>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="flex flex-col items-end">
        <span class="text-[10px] text-outline font-bold uppercase">Account Balance</span>
        <span class="text-3xl font-data-mono font-bold text-primary">$12,500.42</span>
      </div>
      <div class="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600">
        <span class="material-symbols-outlined animate-spin-slow">sync</span>
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div class="p-5 bg-surface-container/30 rounded-2xl border border-outline-variant/10">
      <span class="text-[10px] text-outline font-bold uppercase block mb-3 tracking-widest">Broker Info</span>
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
          <span class="material-symbols-outlined text-primary text-sm">apartment</span>
        </div>
        <span class="font-bold text-on-surface">ICMarkets-Live04</span>
      </div>
    </div>
    <div class="p-5 bg-surface-container/30 rounded-2xl border border-outline-variant/10">
      <span class="text-[10px] text-outline font-bold uppercase block mb-3 tracking-widest">Terminal ID</span>
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
          <span class="material-symbols-outlined text-primary text-sm">fingerprint</span>
        </div>
        <span class="font-data-mono font-bold text-on-surface">50281923</span>
      </div>
    </div>
    <div class="p-5 bg-primary rounded-2xl shadow-lg flex flex-col justify-between">
      <span class="text-[10px] text-white/60 font-bold uppercase block tracking-widest">Connection State</span>
      <div class="flex items-center justify-between">
        <span class="text-white font-bold">STABLE CONNECTION</span>
        <span class="w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_8px_#5eead4]"></span>
      </div>
    </div>
  </div>
  
  <div class="flex gap-4">
    <button class="flex-1 bg-surface-container-highest text-on-surface py-4 rounded-2xl font-bold hover:bg-surface-container-high transition-all">CHỈNH SỬA THÔNG SỐ MT5</button>
    <button class="flex-1 bg-error/10 text-error py-4 rounded-2xl font-bold border border-error/20 hover:bg-error hover:text-white transition-all">NGẮT KẾT NỐI CẦU NỐI</button>
  </div>
</section>
</div>
</main>
`; }
