/**
 * 07-trading-history — Stitch MCP Generated View
 * Auto-injected from stitch-ref/07-trading-history.html
 */
export function renderTradingHistory(data) { return `
<!-- Main Canvas -->
<main class="flex-1 w-full max-w-[1400px] mx-auto px-8 pt-8">
<div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
  <div>
    <h2 class="text-3xl font-bold text-primary mb-2">NHẬT KÝ GIAO DỊCH</h2>
    <p class="text-sm text-on-surface-variant">Tra cứu toàn bộ lịch sử thực thi lệnh và kết quả từ MT5.</p>
  </div>
  
  <!-- Filter Bar -->
  <div class="flex items-center gap-4 bg-surface-container p-2 rounded-2xl border border-outline-variant/10">
    <div class="flex flex-col px-3 border-r border-outline-variant/30">
      <span class="text-[9px] font-bold text-outline uppercase tracking-widest">Thời gian</span>
      <div class="flex items-center gap-2">
        <span class="text-xs font-bold text-on-surface">30/04/2024</span>
        <span class="material-symbols-outlined text-sm">calendar_month</span>
      </div>
    </div>
    <div class="flex flex-col px-3 border-r border-outline-variant/30">
      <span class="text-[9px] font-bold text-outline uppercase tracking-widest">Loại lệnh</span>
      <select class="bg-transparent border-none p-0 text-xs font-bold text-on-surface focus:ring-0 cursor-pointer">
        <option>Tất cả các loại</option>
        <option>Buy Only</option>
        <option>Sell Only</option>
        <option>Update SL/TP</option>
      </select>
    </div>
    <button class="p-3 bg-white text-primary rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all">
      <span class="material-symbols-outlined text-[20px]">search</span>
    </button>
  </div>
</div>

<!-- History Table -->
<div class="oc-card p-0 overflow-hidden border-none shadow-xl">
  <div class="bg-surface-container/50 p-4 grid grid-cols-6 gap-4 text-[10px] font-bold text-outline uppercase tracking-widest border-b border-outline-variant/10">
    <div class="col-span-2">Thông tin lệnh / Nguồn</div>
    <div>Loại / Khối lượng</div>
    <div>Vào / Ra</div>
    <div>Kết quả PnL</div>
    <div class="text-right">Thời gian</div>
  </div>
  
  <div class="flex flex-col">
    <!-- Row 1 -->
    <div class="p-5 grid grid-cols-6 gap-4 items-center oc-table-row border-b border-outline-variant/5">
      <div class="col-span-2 flex items-center gap-4">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600">
          <span class="material-symbols-outlined">payments</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-on-surface">XAUUSD</span>
          <span class="text-[10px] text-on-surface-variant">Nguồn: GoldSignalVIP</span>
        </div>
      </div>
      <div>
        <span class="oc-badge oc-badge-buy mb-1">BUY</span>
        <span class="font-data-mono text-xs block font-bold text-on-surface">1.50 Lots</span>
      </div>
      <div class="flex flex-col">
        <span class="font-data-mono text-xs text-on-surface">2045.50</span>
        <span class="font-data-mono text-xs text-outline">2065.00</span>
      </div>
      <div>
        <span class="text-lg font-bold text-secondary font-data-mono">+$2,100.00</span>
        <span class="text-[9px] text-teal-600 font-bold block uppercase">Hit Take Profit</span>
      </div>
      <div class="text-right">
        <span class="text-xs font-bold text-on-surface block">30/04 10:24</span>
        <span class="text-[9px] text-outline font-bold uppercase tracking-tighter">Execution: 0.8s</span>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="p-5 grid grid-cols-6 gap-4 items-center oc-table-row border-b border-outline-variant/5">
      <div class="col-span-2 flex items-center gap-4">
        <div class="w-10 h-10 rounded-xl bg-terra-500/10 flex items-center justify-center text-terra-600">
          <span class="material-symbols-outlined">currency_bitcoin</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-on-surface">BTCUSD</span>
          <span class="text-[10px] text-on-surface-variant">Nguồn: CryptoAlpha</span>
        </div>
      </div>
      <div>
        <span class="oc-badge oc-badge-sell mb-1">SELL</span>
        <span class="font-data-mono text-xs block font-bold text-on-surface">0.25 Lots</span>
      </div>
      <div class="flex flex-col">
        <span class="font-data-mono text-xs text-on-surface">65,240.0</span>
        <span class="font-data-mono text-xs text-outline">64,100.5</span>
      </div>
      <div>
        <span class="text-lg font-bold text-error font-data-mono">-$450.00</span>
        <span class="text-[9px] text-error font-bold block uppercase">Hit Stop Loss</span>
      </div>
      <div class="text-right">
        <span class="text-xs font-bold text-on-surface block">30/04 09:12</span>
        <span class="text-[9px] text-outline font-bold uppercase tracking-tighter">Execution: 1.2s</span>
      </div>
    </div>
  </div>
</div>
</div>
</main>
`; }
