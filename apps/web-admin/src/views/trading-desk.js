/**
 * 01-trading-desk-v2 — Stitch MCP Generated View (v2 with spec alignment)
 * Auto-injected from stitch-ref/01-trading-desk-v2.html
 */
export function renderTradingDesk(data) { return `
<!-- Mode Toggle (§01.2.1 Trading Mode) -->
<div class="flex items-center justify-between mb-8">
  <div class="flex items-center gap-4">
    <div class="flex bg-surface-container rounded-full p-1.5 gap-1">
      <button class="group relative px-5 py-2 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-high transition-all">
        Quan sát
        <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-on-surface text-surface text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">Chỉ đọc tin, không giả lập, không vào lệnh thật.</span>
      </button>
      <button class="group relative px-5 py-2 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-high transition-all">
        Giấy
        <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-on-surface text-surface text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">Giao dịch giả lập (Paper Trading) với tiền ảo.</span>
      </button>
      <button class="group relative px-5 py-2 rounded-full font-label-caps text-label-caps bg-primary text-on-primary shadow-level-1 font-bold scale-105">
        <span class="inline-block w-2 h-2 rounded-full bg-[#10B981] mr-2 animate-pulse"></span>Auto Guarded
        <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-on-surface text-surface text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">Giao dịch tiền thật với bảo vệ rủi ro tự động.</span>
      </button>
      <button class="group relative px-5 py-2 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-high transition-all">
        Tạm dừng
        <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-on-surface text-surface text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">Ngắt mọi hoạt động xử lý tín hiệu.</span>
      </button>
    </div>
  </div>
  <div class="flex items-center gap-3">
    <span class="font-data-mono text-[11px] text-outline px-3 py-1.5 bg-surface-container rounded-full border border-outline-variant/10">Build v1.0.42</span>
  </div>
</div>

<!-- Top Metrics Strip -->
<div class="max-w-[1400px] mx-auto mb-10">
  <div class="oc-glass flex items-center justify-between">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 flex-1">
      <div class="flex flex-col">
        <span class="oc-metric-label mb-1">PnL Hôm Nay</span>
        <span class="text-2xl font-bold text-secondary">+$4,250.00</span>
      </div>
      <div class="flex flex-col border-l border-outline-variant/20 pl-12">
        <span class="oc-metric-label mb-1">Tổng Lệnh Đang Chạy</span>
        <span class="text-2xl font-bold text-on-surface">1.50 Lots</span>
      </div>
      <div class="flex flex-col border-l border-outline-variant/20 pl-12">
        <span class="oc-metric-label mb-1">Số Lệnh Thực Thi</span>
        <span class="text-2xl font-bold text-on-surface">7</span>
      </div>
      <div class="flex flex-col border-l border-outline-variant/20 pl-12">
        <span class="oc-metric-label mb-1">Hạn Mức Lỗ Ngày</span>
        <span class="text-2xl font-bold text-error">$2,750.00</span>
      </div>
    </div>
  </div>
</div>

<!-- Main Workspace -->
<main class="flex-1 max-w-[1400px] mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 gap-8 pb-32">
  <!-- Center Column (Positions) -->
  <div class="lg:col-span-8 flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-primary flex items-center gap-3">
        <span class="material-symbols-outlined fill">account_balance_wallet</span>
        VỊ THẾ ĐANG MỞ
      </h1>
      <div class="oc-status oc-status-live">Real-time MT5 Sync</div>
    </div>
    
    <div class="flex flex-col gap-5">
      <!-- Position 1 -->
      <details class="oc-card-expand group" open>
        <summary class="flex items-center justify-between">
          <div class="flex items-center gap-6">
            <div class="oc-icon oc-icon-teal">
              <span class="material-symbols-outlined">payments</span>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-bold text-primary">XAUUSD</span>
              <span class="text-[10px] font-bold text-outline uppercase tracking-widest">SPOT GOLD</span>
            </div>
            <div class="oc-badge oc-badge-buy">BUY</div>
            <span class="font-data-mono text-sm font-bold">1.50 Lots</span>
          </div>
          <div class="flex items-center gap-8">
            <div class="flex flex-col items-end">
              <span class="oc-metric-label">Lợi nhuận tạm tính</span>
              <span class="text-xl font-bold text-secondary">+$410.00</span>
            </div>
            <span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform">expand_more</span>
          </div>
        </summary>
        <div class="px-7 pb-6 pt-2">
          <div class="grid grid-cols-1 gap-1 border-t border-dashed border-outline-variant/30 pt-4">
            <div class="flex items-center justify-between p-3 oc-table-row">
              <div class="flex items-center gap-8 text-sm font-data-mono">
                <span class="font-bold text-primary w-8">L1</span>
                <span class="text-outline">Vào <span class="text-on-surface font-bold">2045.50</span></span>
                <span class="text-outline">SL <span class="text-on-surface font-bold">2040.00</span></span>
                <span class="text-outline">TP <span class="text-on-surface font-bold">2065.00</span></span>
              </div>
              <span class="font-bold text-secondary">+$210.00</span>
            </div>
            <div class="flex items-center justify-between p-3 oc-table-row">
              <div class="flex items-center gap-8 text-sm font-data-mono">
                <span class="font-bold text-primary w-8">L2</span>
                <span class="text-outline">Vào <span class="text-on-surface font-bold">2042.00</span></span>
                <span class="text-outline">SL <span class="text-on-surface font-bold">2040.00</span></span>
                <span class="text-outline">TP <span class="text-on-surface font-bold">2065.00</span></span>
              </div>
              <span class="font-bold text-secondary">+$200.00</span>
            </div>
          </div>
        </div>
      </details>

      <!-- Position 2 -->
      <details class="oc-card-expand group">
        <summary class="flex items-center justify-between">
          <div class="flex items-center gap-6">
            <div class="oc-icon oc-icon-terra">
              <span class="material-symbols-outlined">currency_bitcoin</span>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-bold text-primary">BTCUSD</span>
              <span class="text-[10px] font-bold text-outline uppercase tracking-widest">BITCOIN</span>
            </div>
            <div class="oc-badge oc-badge-sell">SELL</div>
            <span class="font-data-mono text-sm font-bold">0.25 Lots</span>
          </div>
          <div class="flex items-center gap-8">
            <div class="flex flex-col items-end">
              <span class="oc-metric-label">Lợi nhuận tạm tính</span>
              <span class="text-xl font-bold text-error">-$450.00</span>
            </div>
            <span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform">expand_more</span>
          </div>
        </summary>
        <div class="px-7 pb-6 pt-2 border-t border-dashed border-outline-variant/30 italic text-outline text-xs text-center py-4">
          Chưa có các lớp lệnh rải.
        </div>
      </details>
    </div>
  </div>

  <!-- Right Rail -->
  <aside class="lg:col-span-4 flex flex-col gap-6">
    <!-- System Status Card -->
    <div class="oc-card flex flex-col gap-6">
      <div class="oc-section-title">Kết nối MT5</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="oc-icon oc-icon-teal">
            <span class="material-symbols-outlined fill">hub</span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-on-surface">ICMarkets Live</span>
            <div class="oc-status oc-status-live text-[9px]">Ổn định</div>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <span class="oc-metric-label">Độ trễ</span>
          <span class="font-data-mono font-bold text-primary">14ms</span>
        </div>
      </div>
      <div class="oc-divider"></div>
      <div class="grid grid-cols-2 gap-4">
        <div class="oc-metric">
          <span class="oc-metric-label">Thời gian chạy</span>
          <span class="font-data-mono text-sm font-bold">14h 22m</span>
        </div>
        <div class="oc-metric">
          <span class="oc-metric-label">Lệnh xử lý</span>
          <span class="font-data-mono text-sm font-bold">1,248</span>
        </div>
      </div>
    </div>

    <!-- Kill Switch Card -->
    <div class="oc-card bg-error/5 flex flex-col gap-6 items-center text-center">
      <div class="oc-icon oc-icon-red" style="width: 56px; height: 56px; border-radius: 20px;">
        <span class="material-symbols-outlined text-3xl">emergency_home</span>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-bold text-error text-lg tracking-tight uppercase">Kill Switch</h3>
        <p class="text-xs text-on-surface-variant px-4">Đóng toàn bộ lệnh và ngắt API ngay lập tức.</p>
      </div>
      <button class="w-full py-4 bg-error text-on-error rounded-2xl font-bold shadow-lg shadow-error/20 hover:scale-[1.02] active:scale-95 transition-all">
        KÍCH HOẠT DỪNG KHẨN CẤP
      </button>
    </div>
  </aside>
</main>
`; }
