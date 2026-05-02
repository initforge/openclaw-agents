/**
 * 04-trading-strategy — Stitch MCP Generated View
 * Auto-injected from stitch-ref/04-trading-strategy.html
 */
export function renderTradingStrategy(data) { return `
<!-- Main Content Canvas -->
<main class="flex-1 relative overflow-hidden flex flex-col">
<div class="p-margin max-w-[1400px] mx-auto w-full flex-grow flex flex-col gap-gutter">
<!-- Page Header -->
<div class="flex justify-between items-end mb-4">
<div>
<h1 class="font-h1 text-h1 text-primary-container">Cấu hình Chiến lược</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-2">Điều chỉnh tham số vào lệnh và quản trị rủi ro.</p>
</div>
<div class="bg-surface-container-highest text-primary-container font-data-sm text-data-sm px-3 py-1 rounded-full">
 v1.0.42
 </div>
</div>
<!-- Bento Grid Canvas -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Card 1: Multiplier -->
<details class="oc-card-expand w-full" open="">
<summary class="p-lg flex justify-between items-center outline-none focus:ring-2 focus:ring-teal-accent/50 rounded-card">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-teal-accent">calculate</span>
<div class="flex flex-col">
  <h3 class="font-h3 text-h3 text-on-surface">Nhân Khối Lượng (Multiplier)</h3>
  <span class="text-[10px] text-outline uppercase font-bold tracking-tighter">Scale provider lots</span>
</div>
</div>
<div class="flex items-center gap-4">
<span class="font-data-lg text-data-lg text-primary-container">1.0x</span>
<span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</div>
</summary>
<div class="px-lg pb-lg">
<div class="bg-surface-container/30 rounded-input p-6 flex flex-col gap-4">
<p class="text-xs text-on-surface-variant leading-relaxed">Hệ số này dùng để nhân khối lượng lệnh nhận được từ kênh tín hiệu. <br>Ví dụ: Tín hiệu gốc vào <b>0.1 Lot</b>, hệ số <b>2.0x</b> -> Hệ thống vào <b>0.2 Lot</b>.</p>
<div class="flex items-center gap-6 mt-2">
  <div class="flex-1">
    <input class="w-full accent-teal-accent" max="10.0" min="0.1" step="0.1" type="range" value="1.0"/>
    <div class="flex justify-between text-[10px] text-outline font-bold mt-2">
      <span>0.1x</span>
      <span>1.0x (Mặc định)</span>
      <span>10.0x</span>
    </div>
  </div>
  <div class="w-20 h-12 bg-white rounded-xl border border-outline-variant flex items-center justify-center font-data-lg text-primary-container">1.0x</div>
</div>
</div>
</div>
</details>

<!-- Card 2: Layering (Price-based) -->
<details class="oc-card-expand w-full" open="">
<summary class="p-lg flex justify-between items-center outline-none focus:ring-2 focus:ring-teal-accent/50 rounded-card">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-teal-accent">layers</span>
<div class="flex flex-col">
  <h3 class="font-h3 text-h3 text-on-surface">Rải Lệnh (Price Layering)</h3>
  <span class="text-[10px] text-outline uppercase font-bold tracking-tighter">Grid entry optimization</span>
</div>
</div>
<div class="flex items-center gap-4">
<div class="oc-status oc-status-live bg-primary-container/20 text-primary-container border-none scale-90 px-3">Active</div>
<span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</div>
</summary>
<div class="px-lg pb-lg">
<div class="bg-surface-container/30 rounded-input p-6 flex flex-col gap-5">
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col gap-2">
      <label class="text-xs font-bold text-secondary uppercase tracking-wider">Số lượng lệnh rải</label>
      <input type="number" class="w-full h-11 bg-white border border-outline-variant rounded-xl px-4 font-data-mono" value="3">
    </div>
    <div class="flex flex-col gap-2">
      <label class="text-xs font-bold text-secondary uppercase tracking-wider">Khoảng giá (Price Gap)</label>
      <div class="relative">
        <input type="number" class="w-full h-11 bg-white border border-outline-variant rounded-xl px-4 pr-12 font-data-mono" value="2.50">
        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-outline">USD</span>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold text-secondary uppercase tracking-wider">Tỷ lệ tăng khối lượng (Martingale)</label>
    <div class="flex gap-2">
      <button class="flex-1 h-10 bg-white border border-outline-variant rounded-lg text-xs font-bold text-on-surface hover:bg-surface-container transition-colors">1.0 (Đều)</button>
      <button class="flex-1 h-10 bg-primary text-white rounded-lg text-xs font-bold shadow-md">1.5 (Tăng)</button>
      <button class="flex-1 h-10 bg-white border border-outline-variant rounded-lg text-xs font-bold text-on-surface hover:bg-surface-container transition-colors">2.0 (Gấp đôi)</button>
    </div>
  </div>
</div>
</div>
</details>

<!-- Card 3: Sovereign SL (Stop Loss) -->
<details class="oc-card-expand w-full">
<summary class="p-lg flex justify-between items-center outline-none focus:ring-2 focus:ring-teal-accent/50 rounded-card">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-teal-accent">shield</span>
<div class="flex flex-col">
  <h3 class="font-h3 text-h3 text-on-surface">Bảo Vệ Cắt Lỗ (Sovereign SL)</h3>
  <span class="text-[10px] text-outline uppercase font-bold tracking-tighter">provider vs manual override</span>
</div>
</div>
<div class="flex items-center gap-4">
<span class="font-data-lg text-data-lg text-primary-container">Auto</span>
<span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</div>
</summary>
<div class="px-lg pb-lg">
<div class="bg-surface-container/30 rounded-input p-6 flex flex-col gap-4">
  <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-outline-variant">
    <div class="flex flex-col gap-0.5">
      <span class="font-bold text-sm text-on-surface">Ưu tiên Cắt lỗ của Kênh</span>
      <span class="text-[10px] text-on-surface-variant">Sử dụng giá SL được cung cấp trực tiếp từ tin nhắn.</span>
    </div>
    <div class="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
      <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
    </div>
  </div>
  <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-outline-variant">
    <div class="flex flex-col gap-0.5">
      <span class="font-bold text-sm text-on-surface">Cắt lỗ Thủ công (Hard Cap)</span>
      <span class="text-[10px] text-on-surface-variant">Luôn đặt SL cố định nếu tin nhắn không có SL.</span>
    </div>
    <div class="w-12 h-6 bg-surface-container-highest rounded-full relative p-1 cursor-pointer">
      <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
    </div>
  </div>
</div>
</div>
</details>

<!-- Card 4: Daily Guard -->
<details class="oc-card-expand w-full">
<summary class="p-lg flex justify-between items-center outline-none focus:ring-2 focus:ring-teal-accent/50 rounded-card">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-teal-accent">timer_10_alt_1</span>
<div class="flex flex-col">
  <h3 class="font-h3 text-h3 text-on-surface">Giới Hạn Ngày (Daily Guard)</h3>
  <span class="text-[10px] text-outline uppercase font-bold tracking-tighter">Automatic system shutdown</span>
</div>
</div>
<div class="flex items-center gap-4">
<span class="font-data-lg text-data-lg text-error">-$2,500</span>
<span class="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</div>
</summary>
<div class="px-lg pb-lg">
<div class="bg-surface-container/30 rounded-input p-6 flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold text-secondary uppercase tracking-wider">Hạn mức lỗ tối đa trong ngày</label>
    <div class="relative">
      <input type="number" class="w-full h-12 bg-white border border-outline-variant rounded-xl px-4 font-data-lg text-error" value="2500">
      <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-outline">$</span>
    </div>
    <p class="text-[10px] text-on-surface-variant italic mt-1">*Hệ thống sẽ ngắt kết nối và đóng mọi lệnh nếu lỗ vượt mức này.</p>
  </div>
</div>
</div>
</details>
</div>

<!-- Bottom Action -->
<div class="mt-auto pt-8 flex justify-end">
<button class="bg-primary-container text-on-primary font-body-lg text-body-lg px-8 py-4 rounded-btn shadow-[0px_4px_14px_rgba(17,94,89,0.25)] hover:bg-teal-800 transition-colors flex items-center gap-2 active:scale-95 duration-150">
<span class="material-symbols-outlined">save</span>
 XÁC NHẬN CẬP NHẬT CHIẾN LƯỢC
 </button>
</div>
</div>
</main>
`; }
