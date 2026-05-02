/**
 * Content Audit — Enhanced with 6 columns, filters, artifact links
 */
export function renderContentAudit() { return `
<div class="flex flex-col gap-6">
  <div class="flex justify-between items-end">
    <div><h2 class="text-2xl font-bold text-on-surface mb-1">AUDIT LOG</h2><p class="text-xs text-on-surface-variant">Mọi hành động AI đã thực hiện. Trả lời: Who / What / Why / When / Result.</p></div>
  </div>
  <!-- Cost Summary -->
  <div class="grid grid-cols-4 gap-4">
    <div class="oc-card p-4 !rounded-xl"><span class="text-[10px] font-bold text-outline uppercase block">Hôm nay</span><span class="text-xl font-bold text-on-surface">$0.05</span></div>
    <div class="oc-card p-4 !rounded-xl"><span class="text-[10px] font-bold text-outline uppercase block">Tuần này</span><span class="text-xl font-bold text-on-surface">$0.32</span></div>
    <div class="oc-card p-4 !rounded-xl"><span class="text-[10px] font-bold text-outline uppercase block">Actions hôm nay</span><span class="text-xl font-bold text-on-surface">12</span></div>
    <div class="oc-card p-4 !rounded-xl"><span class="text-[10px] font-bold text-outline uppercase block">AI Auto</span><span class="text-xl font-bold text-teal-600">8 / 12</span></div>
  </div>
  <!-- Filters -->
  <div class="flex gap-2 flex-wrap">
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface">Tất cả</button>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Render</button>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Publish</button>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Generate</button>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Context</button>
    <span class="border-l border-outline-variant/20 mx-1"></span>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">AI Auto</button>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">User</button>
    <span class="border-l border-outline-variant/20 mx-1"></span>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">LinkedIn</button>
    <button class="bg-surface-container-low px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">TikTok</button>
  </div>
  <!-- Table -->
  <section class="oc-card overflow-hidden !p-0">
    <div class="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container/30">
      <div class="col-span-2 text-[10px] font-bold text-outline uppercase">Thời gian</div>
      <div class="col-span-1 text-[10px] font-bold text-outline uppercase">Account</div>
      <div class="col-span-3 text-[10px] font-bold text-outline uppercase">Hành động</div>
      <div class="col-span-2 text-[10px] font-bold text-outline uppercase">Strategy</div>
      <div class="col-span-2 text-[10px] font-bold text-outline uppercase">Trigger</div>
      <div class="col-span-1 text-[10px] font-bold text-outline uppercase">Result</div>
      <div class="col-span-1 text-[10px] font-bold text-outline uppercase text-right">Cost</div>
    </div>
    <div class="flex flex-col">
      <div class="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-surface-container/10 cursor-pointer transition-colors border-b border-outline-variant/5">
        <div class="col-span-2 font-mono text-xs text-outline">12:30:15</div>
        <div class="col-span-1"><span class="bg-surface-container text-[9px] px-2 py-0.5 rounded font-bold">@main</span></div>
        <div class="col-span-3 text-sm font-bold text-on-surface flex items-center gap-2">Video rendered: Vanhien <span class="material-symbols-outlined text-xs text-primary">open_in_new</span></div>
        <div class="col-span-2 text-[10px] text-on-surface-variant">LinkedIn v3</div>
        <div class="col-span-2"><span class="bg-blue-50 text-blue-700 text-[9px] px-2 py-0.5 rounded font-bold">User cmd</span></div>
        <div class="col-span-1"><span class="text-teal-600 font-bold text-xs">✅</span></div>
        <div class="col-span-1 text-right font-mono text-xs font-bold text-primary">$0.00</div>
      </div>
      <div class="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-surface-container/10 cursor-pointer transition-colors border-b border-outline-variant/5">
        <div class="col-span-2 font-mono text-xs text-outline">13:00:44</div>
        <div class="col-span-1"><span class="bg-black text-white text-[9px] px-2 py-0.5 rounded font-bold">@tiktok</span></div>
        <div class="col-span-3 text-sm font-bold text-on-surface flex items-center gap-2">TikTok upload assisted <span class="material-symbols-outlined text-xs text-primary">open_in_new</span></div>
        <div class="col-span-2 text-[10px] text-on-surface-variant">TikTok v1</div>
        <div class="col-span-2"><span class="bg-teal-50 text-teal-700 text-[9px] px-2 py-0.5 rounded font-bold">Pipeline auto</span></div>
        <div class="col-span-1"><span class="text-teal-600 font-bold text-xs">✅</span></div>
        <div class="col-span-1 text-right font-mono text-xs font-bold text-primary">$0.00</div>
      </div>
      <div class="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-surface-container/10 cursor-pointer transition-colors border-b border-outline-variant/5">
        <div class="col-span-2 font-mono text-xs text-outline">09:00:12</div>
        <div class="col-span-1"><span class="bg-surface-container text-[9px] px-2 py-0.5 rounded font-bold">@main</span></div>
        <div class="col-span-3 text-sm font-bold text-on-surface flex items-center gap-2">AI tạo bài LinkedIn <span class="material-symbols-outlined text-xs text-primary">open_in_new</span></div>
        <div class="col-span-2 text-[10px] text-on-surface-variant">LinkedIn v3</div>
        <div class="col-span-2"><span class="bg-teal-50 text-teal-700 text-[9px] px-2 py-0.5 rounded font-bold">AI auto</span></div>
        <div class="col-span-1"><span class="text-teal-600 font-bold text-xs">✅</span></div>
        <div class="col-span-1 text-right font-mono text-xs font-bold text-primary">$0.008</div>
      </div>
      <div class="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-surface-container/10 cursor-pointer transition-colors border-b border-outline-variant/5">
        <div class="col-span-2 font-mono text-xs text-outline">09:00:05</div>
        <div class="col-span-1"><span class="bg-surface-container text-[9px] px-2 py-0.5 rounded font-bold">@main</span></div>
        <div class="col-span-3 text-sm font-bold text-on-surface">Context crawled: LinkedIn</div>
        <div class="col-span-2 text-[10px] text-on-surface-variant">—</div>
        <div class="col-span-2"><span class="bg-purple-50 text-purple-700 text-[9px] px-2 py-0.5 rounded font-bold">Cronjob</span></div>
        <div class="col-span-1"><span class="text-teal-600 font-bold text-xs">✅</span></div>
        <div class="col-span-1 text-right font-mono text-xs font-bold text-primary">$0.002</div>
      </div>
      <div class="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-surface-container/10 cursor-pointer transition-colors">
        <div class="col-span-2 font-mono text-xs text-outline">08:15:00</div>
        <div class="col-span-1"><span class="bg-surface-container text-[9px] px-2 py-0.5 rounded font-bold">@main</span></div>
        <div class="col-span-3 text-sm font-bold text-on-surface">AI đề xuất bài LinkedIn</div>
        <div class="col-span-2 text-[10px] text-on-surface-variant">LinkedIn v3</div>
        <div class="col-span-2"><span class="bg-teal-50 text-teal-700 text-[9px] px-2 py-0.5 rounded font-bold">AI auto</span></div>
        <div class="col-span-1"><span class="text-amber-500 font-bold text-xs">⏳</span></div>
        <div class="col-span-1 text-right font-mono text-xs font-bold text-primary">$0.005</div>
      </div>
    </div>
  </section>
</div>
`; }
