/**
 * 09-leads-customers — Stitch MCP Generated View
 * Auto-injected from stitch-ref/09-leads-customers.html
 */
export function renderLeadsCustomers(data) { return `
<!-- Main Content Canvas -->
<main class="flex-1 flex flex-col w-full">
<div class="p-8 max-w-[1400px] mx-auto w-full flex-grow flex flex-col gap-10">
<!-- Content Header -->
<div class="flex justify-between items-end">
  <div>
    <h2 class="text-3xl font-bold text-primary mb-2">HÀNH TRÌNH KHÁCH HÀNG</h2>
    <p class="text-sm text-on-surface-variant">Theo dõi lịch sử từ lúc AI phát hiện đến khi trở thành khách hàng thân thiết.</p>
  </div>
  <div class="flex items-center gap-4">
    <div class="relative">
      <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
      <input type="text" class="bg-surface-container border-none rounded-xl py-2.5 pl-12 pr-6 text-sm font-body-md focus:ring-2 focus:ring-primary shadow-inner" placeholder="Tìm tên, Zalo, Group...">
    </div>
  </div>
</div>

<!-- Customer List (High-Density) -->
<div class="oc-card p-0 overflow-hidden border-none shadow-xl">
  <div class="bg-surface-container/50 p-5 grid grid-cols-6 gap-4 text-[10px] font-bold text-outline uppercase tracking-widest border-b border-outline-variant/10">
    <div class="col-span-2">Khách hàng / Nick tiếp cận</div>
    <div>Trạng thái</div>
    <div>Điểm tiềm năng</div>
    <div>Tương tác</div>
    <div class="text-right">Kênh dự phòng</div>
  </div>
  
  <div class="flex flex-col">
    <!-- Row 1 -->
    <div class="p-5 grid grid-cols-6 gap-4 items-center oc-table-row border-b border-outline-variant/5 cursor-pointer hover:bg-primary/5 transition-all">
      <div class="col-span-2 flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold shadow-sm">NT</div>
        <div class="flex flex-col">
          <span class="font-bold text-on-surface">Nguyễn Tấn</span>
          <span class="text-[10px] text-on-surface-variant">Bởi: Minh Trader • Group SaaS</span>
        </div>
      </div>
      <div>
        <span class="oc-status oc-status-live bg-teal-500 text-white border-none scale-90">CUSTOMER</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-data-mono font-bold text-secondary">92</span>
        <div class="w-12 h-1 bg-surface-container-highest rounded-full overflow-hidden">
          <div class="w-[92%] h-full bg-secondary"></div>
        </div>
      </div>
      <div>
        <span class="text-xs font-bold text-on-surface">12 lượt</span>
        <span class="text-[9px] text-outline block font-bold uppercase mt-0.5">Last: 2h ago</span>
      </div>
      <div class="text-right flex justify-end gap-2">
        <span class="material-symbols-outlined text-[18px] text-teal-600">chat</span>
        <span class="material-symbols-outlined text-[18px] text-primary">mail</span>
        <span class="material-symbols-outlined text-[18px] text-outline opacity-30">call</span>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="p-5 grid grid-cols-6 gap-4 items-center oc-table-row border-b border-outline-variant/5 cursor-pointer hover:bg-primary/5 transition-all">
      <div class="col-span-2 flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold shadow-sm">HM</div>
        <div class="flex flex-col">
          <span class="font-bold text-on-surface">Hoàng Mai</span>
          <span class="text-[10px] text-on-surface-variant">Bởi: AI Auto • Group Cafe</span>
        </div>
      </div>
      <div>
        <span class="oc-status oc-status-live bg-primary text-white border-none scale-90">HOT LEAD</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-data-mono font-bold text-secondary">78</span>
        <div class="w-12 h-1 bg-surface-container-highest rounded-full overflow-hidden">
          <div class="w-[78%] h-full bg-secondary"></div>
        </div>
      </div>
      <div>
        <span class="text-xs font-bold text-on-surface">3 lượt</span>
        <span class="text-[9px] text-outline block font-bold uppercase mt-0.5">Last: 1d ago</span>
      </div>
      <div class="text-right flex justify-end gap-2">
        <span class="material-symbols-outlined text-[18px] text-teal-600">chat</span>
        <span class="material-symbols-outlined text-[18px] text-outline opacity-30">mail</span>
        <span class="material-symbols-outlined text-[18px] text-outline opacity-30">call</span>
      </div>
    </div>
  </div>
</div>
</div>
</main>
`; }
