/**
 * 10-leads-sources — Stitch MCP Generated View
 * Auto-injected from stitch-ref/10-leads-sources.html
 */
export function renderLeadsSources(data) { return `
<!-- Main Content Canvas -->
<main class="flex-grow flex flex-col w-full">
<div class="p-8 max-w-[1400px] mx-auto w-full flex-grow flex flex-col gap-10">
<!-- Page Header -->
<div class="flex justify-between items-end">
  <div>
    <h2 class="text-3xl font-bold text-primary mb-2">NGUỒN DỮ LIỆU (SOURCES)</h2>
    <p class="text-sm text-on-surface-variant">AI tự động phân loại và điều phối thợ săn cho từng nguồn.</p>
  </div>
  <div class="flex gap-4">
    <div class="relative w-96">
      <input type="text" class="w-full h-12 bg-surface-container border border-outline-variant/10 rounded-2xl px-5 pr-12 text-sm font-body-md focus:ring-2 focus:ring-primary shadow-inner" placeholder="Dán link Group/Page để AI phân tích...">
      <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-md">
        <span class="material-symbols-outlined text-sm">auto_awesome</span>
      </button>
    </div>
  </div>
</div>

<!-- Sources Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  <!-- Source Card 1 -->
  <article class="oc-card p-8 flex flex-col border border-outline-variant/5 hover:shadow-xl transition-all group">
    <div class="flex justify-between items-start mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          <span class="material-symbols-outlined">groups</span>
        </div>
        <div class="flex flex-col">
          <h3 class="font-bold text-on-surface text-lg leading-none">Hội Kinh Doanh Đồ Uống</h3>
          <a href="#" class="text-[10px] text-primary font-bold hover:underline mt-1 italic">fb.com/groups/drinks_vn</a>
        </div>
      </div>
      <div class="oc-status oc-status-live scale-75">LIVE</div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="bg-surface-container/20 p-4 rounded-2xl border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Loại nguồn</span>
        <span class="text-xs font-bold text-on-surface">Community/SME</span>
      </div>
      <div class="bg-surface-container/20 p-4 rounded-2xl border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Nick trực</span>
        <div class="flex -space-x-1">
          <div class="w-5 h-5 rounded-full bg-teal-500 border border-white text-[8px] text-white flex items-center justify-center">M</div>
          <div class="w-5 h-5 rounded-full bg-primary border border-white text-[8px] text-white flex items-center justify-center">H</div>
        </div>
      </div>
    </div>

    <div class="space-y-3 mb-8">
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-on-surface-variant font-medium">Tần suất quét</span>
        <span class="font-data-mono font-bold">5 phút / lần</span>
      </div>
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-on-surface-variant font-medium">Leads phát hiện</span>
        <span class="font-data-mono font-bold text-secondary">1,248</span>
      </div>
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-on-surface-variant font-medium">Tỷ lệ Auto Action</span>
        <span class="font-data-mono font-bold text-teal-600">82%</span>
      </div>
    </div>

    <button class="w-full py-3 bg-surface-container-highest text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
      <span class="material-symbols-outlined text-[16px]">analytics</span>
      XEM THỐNG KÊ CHI TIẾT
    </button>
  </article>

  <!-- Source Card 2 -->
  <article class="oc-card p-8 flex flex-col border border-outline-variant/5 hover:shadow-xl transition-all group">
    <div class="flex justify-between items-start mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          <span class="material-symbols-outlined">hub</span>
        </div>
        <div class="flex flex-col">
          <h3 class="font-bold text-on-surface text-lg leading-none">Cộng đồng Startup Việt</h3>
          <a href="#" class="text-[10px] text-primary font-bold hover:underline mt-1 italic">fb.com/groups/startup_vn</a>
        </div>
      </div>
      <div class="oc-status oc-status-live scale-75">LIVE</div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="bg-surface-container/20 p-4 rounded-2xl border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Loại nguồn</span>
        <span class="text-xs font-bold text-on-surface">Startup/Tech</span>
      </div>
      <div class="bg-surface-container/20 p-4 rounded-2xl border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Nick trực</span>
        <div class="w-5 h-5 rounded-full bg-teal-500 border border-white text-[8px] text-white flex items-center justify-center">M</div>
      </div>
    </div>

    <div class="space-y-3 mb-8">
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-on-surface-variant font-medium">Tần suất quét</span>
        <span class="font-data-mono font-bold">15 phút / lần</span>
      </div>
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-on-surface-variant font-medium">Leads phát hiện</span>
        <span class="font-data-mono font-bold text-secondary">4,512</span>
      </div>
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-on-surface-variant font-medium">Tỷ lệ Auto Action</span>
        <span class="font-data-mono font-bold text-teal-600">65%</span>
      </div>
    </div>

    <button class="w-full py-3 bg-surface-container-highest text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
      <span class="material-symbols-outlined text-[16px]">analytics</span>
      XEM THỐNG KÊ CHI TIẾT
    </button>
  </article>
</div>
</div>
</main>
`; }
