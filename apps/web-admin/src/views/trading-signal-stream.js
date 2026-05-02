/**
 * 05-trading-signal-stream — Stitch MCP Generated View
 * Auto-injected from stitch-ref/05-trading-signal-stream.html
 */
export function renderTradingSignalStream(data) { return `
<!-- Main Content Canvas -->
<main class="flex-1 flex flex-col min-w-0">
<div class="max-w-[1400px] mx-auto w-full px-8 pt-6">
<!-- Page Header & Filters -->
<div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
  <div>
    <h1 class="text-2xl font-bold text-primary flex items-center gap-3">
      <span class="material-symbols-outlined fill">stream</span>
      LUỒNG TÍN HIỆU (LIVE)
    </h1>
    <p class="text-sm text-on-surface-variant mt-1">Chuỗi tin nhắn gốc -> Phân tích AI -> Thực thi lệnh.</p>
  </div>
  
  <div class="flex items-center gap-3 bg-surface-container p-1.5 rounded-2xl border border-outline-variant/10">
    <button class="px-4 py-2 bg-white text-on-surface rounded-xl shadow-sm font-bold text-xs">Tất cả</button>
    <button class="px-4 py-2 text-on-surface-variant hover:bg-white/50 rounded-xl transition-all font-bold text-xs">Đã vào lệnh</button>
    <button class="px-4 py-2 text-on-surface-variant hover:bg-white/50 rounded-xl transition-all font-bold text-xs">Cập nhật SL/TP</button>
    <div class="w-px h-6 bg-outline-variant/30 mx-1"></div>
    <button class="p-2 text-on-surface-variant hover:bg-white/50 rounded-xl transition-all">
      <span class="material-symbols-outlined text-[20px]">filter_list</span>
    </button>
  </div>
</div>

<!-- Signal Timeline (Batched View) -->
<div class="flex flex-col gap-10">
  <!-- Batch 1: Pending/Passing Messages -->
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4 mb-2">
      <div class="h-px flex-1 bg-gradient-to-r from-transparent to-outline-variant/20"></div>
      <span class="text-[10px] font-bold text-outline uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full">Phiên tín hiệu 08:45 AM</span>
      <div class="h-px flex-1 bg-gradient-to-l from-transparent to-outline-variant/20"></div>
    </div>
    
    <!-- Batched Card (Passing messages before execution) -->
    <details class="oc-card bg-surface-container/30 border-none group" open>
      <summary class="flex items-center justify-between cursor-pointer outline-none">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
            <span class="material-symbols-outlined">forum</span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-on-surface">3 tin nhắn nhận diện tín hiệu</span>
            <span class="text-[10px] text-on-surface-variant">Vừa xong • Nguồn: GoldSignalVIP</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex -space-x-2">
            <div class="w-6 h-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">AI</div>
            <div class="w-6 h-6 rounded-full bg-primary border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">TG</div>
          </div>
          <span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform">expand_more</span>
        </div>
      </summary>
      
      <div class="mt-6 flex flex-col gap-4 border-t border-dashed border-outline-variant/30 pt-6">
        <!-- Step 1: Raw Message -->
        <div class="flex gap-4">
          <div class="flex flex-col items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-primary"></div>
            <div class="w-px h-full bg-outline-variant/30"></div>
          </div>
          <div class="flex-1 bg-white p-4 rounded-2xl shadow-sm">
            <span class="text-[10px] font-bold text-primary mb-2 block">TELEGRAM @ 08:42 AM</span>
            <p class="text-sm italic text-on-surface">"Gold starts moving, wait for entry around 2045."</p>
          </div>
        </div>
        
        <!-- Step 2: AI Interpretation -->
        <div class="flex gap-4">
          <div class="flex flex-col items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-teal-500"></div>
            <div class="w-px h-full bg-outline-variant/30"></div>
          </div>
          <div class="flex-1 bg-teal-50/50 p-4 rounded-2xl border border-teal-100">
            <span class="text-[10px] font-bold text-teal-600 mb-2 block uppercase">AI INTERPRETATION</span>
            <p class="text-sm font-bold text-on-surface">NHẬN DIỆN: Đang chờ điểm vào lệnh (XAUUSD)</p>
            <div class="mt-2 flex gap-3">
              <span class="text-[10px] bg-white px-2 py-1 rounded border border-teal-100">Action: MONITOR</span>
              <span class="text-[10px] bg-white px-2 py-1 rounded border border-teal-100">Confidence: 94%</span>
            </div>
          </div>
        </div>

        <!-- Step 3: Trigger Message -->
        <div class="flex gap-4">
          <div class="flex flex-col items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-error animate-pulse"></div>
          </div>
          <div class="flex-1 bg-white p-4 rounded-2xl shadow-sm border-l-4 border-error">
            <span class="text-[10px] font-bold text-error mb-2 block uppercase">TELEGRAM @ 08:45 AM</span>
            <p class="text-sm font-bold text-on-surface">"BUY GOLD NOW @ 2045.50 - SL 2040 - TP 2065"</p>
          </div>
        </div>
      </div>
    </details>

    <!-- Execution Card (When signal results in a trade) -->
    <div class="oc-card bg-primary text-white border-none shadow-xl shadow-primary/20 p-6 flex flex-col gap-4">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-3xl">bolt</span>
          </div>
          <div class="flex flex-col">
            <h3 class="text-xl font-bold leading-none">THỰC THI LỆNH TỰ ĐỘNG</h3>
            <span class="text-[10px] opacity-70 font-bold uppercase tracking-widest mt-1">MT5 Execution • Success</span>
          </div>
        </div>
        <div class="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">#ORD-4921</div>
      </div>
      
      <div class="grid grid-cols-3 gap-4 mt-2">
        <div class="bg-white/10 p-3 rounded-xl border border-white/10">
          <span class="text-[9px] uppercase opacity-60 font-bold block mb-1">Mã sản phẩm</span>
          <span class="font-data-lg text-lg">XAUUSD</span>
        </div>
        <div class="bg-white/10 p-3 rounded-xl border border-white/10">
          <span class="text-[9px] uppercase opacity-60 font-bold block mb-1">Khối lượng</span>
          <span class="font-data-lg text-lg">1.50 Lots</span>
        </div>
        <div class="bg-white/10 p-3 rounded-xl border border-white/10">
          <span class="text-[9px] uppercase opacity-60 font-bold block mb-1">Giá vào</span>
          <span class="font-data-lg text-lg">2045.50</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Batch 2: Passive Updates -->
  <div class="flex flex-col gap-4 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
    <div class="flex items-center gap-4 mb-2">
      <div class="h-px flex-1 bg-outline-variant/20"></div>
      <span class="text-[10px] font-bold text-outline uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full">Phiên tín hiệu 08:30 AM</span>
      <div class="h-px flex-1 bg-outline-variant/20"></div>
    </div>
    
    <details class="oc-card bg-surface-container/30 border-none group">
      <summary class="flex items-center justify-between cursor-pointer outline-none">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-outline shadow-sm">
            <span class="material-symbols-outlined">update</span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-on-surface">Cập nhật dời Stop Loss (SL)</span>
            <span class="text-[10px] text-on-surface-variant">15 phút trước • Nguồn: CryptoAlpha</span>
          </div>
        </div>
        <span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform">expand_more</span>
      </summary>
      <div class="mt-4 p-4 bg-white rounded-2xl shadow-sm text-sm italic">
        "Move SL to Entry on BTC Sell positions."
      </div>
    </details>
  </div>
</div>
</div>
</main>
`; }
