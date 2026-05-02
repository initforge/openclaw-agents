/**
 * Content Context — Enhanced with preview, health, scope config
 */
export function renderContentContext() { return `
<div class="flex flex-col gap-8">
  <div class="flex justify-between items-end">
    <div><h2 class="text-2xl font-bold text-on-surface mb-1">NGUỒN TRI THỨC</h2><p class="text-xs text-on-surface-variant">AI thấu hiểu phong cách của bạn qua việc quét profile liên tục. Xem AI đã học được gì.</p></div>
    <div class="flex gap-2"><button class="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"><span class="material-symbols-outlined text-sm">grid_view</span> Grid</button><button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant flex items-center gap-2"><span class="material-symbols-outlined text-sm">view_list</span> List</button></div>
  </div>
  <!-- Summary -->
  <div class="grid grid-cols-3 gap-4">
    <div class="oc-card p-4 flex items-center gap-3 !rounded-xl"><div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600"><span class="material-symbols-outlined">check_circle</span></div><div><span class="text-xl font-bold text-on-surface">2</span><span class="text-[10px] text-outline uppercase block font-bold">Active</span></div></div>
    <div class="oc-card p-4 flex items-center gap-3 !rounded-xl"><div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500"><span class="material-symbols-outlined">error</span></div><div><span class="text-xl font-bold text-on-surface">1</span><span class="text-[10px] text-outline uppercase block font-bold">Expired</span></div></div>
    <div class="oc-card p-4 flex items-center gap-3 !rounded-xl"><div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline"><span class="material-symbols-outlined">storage</span></div><div><span class="text-xl font-bold text-on-surface">16 KB</span><span class="text-[10px] text-outline uppercase block font-bold">Cached</span></div></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <!-- LinkedIn Profile -->
    <article class="oc-card p-6 flex flex-col gap-4 group">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600"><span class="material-symbols-outlined">person_search</span></div>
          <div><h3 class="font-bold text-on-surface">Hồ sơ LinkedIn</h3><span class="text-[10px] text-on-surface-variant font-bold uppercase">@vanhien_ai</span></div>
        </div>
        <div class="oc-status oc-status-live scale-75">ACTIVE</div>
      </div>
      <div class="bg-surface-container/30 p-4 rounded-xl flex flex-col gap-2">
        <div class="flex justify-between"><span class="text-[10px] font-bold text-outline uppercase">Scope</span><span class="text-xs font-bold">Full Profile + Posts</span></div>
        <div class="flex justify-between"><span class="text-[10px] font-bold text-outline uppercase">Lần cuối</span><span class="text-xs font-bold">2 giờ trước</span></div>
        <div class="flex justify-between"><span class="text-[10px] font-bold text-outline uppercase">Retention</span><span class="text-xs font-bold">30 ngày</span></div>
      </div>
      <!-- AI Learning Preview -->
      <details class="bg-teal-50/50 rounded-xl">
        <summary class="px-4 py-3 text-xs font-bold text-teal-700 cursor-pointer flex items-center gap-2"><span class="material-symbols-outlined text-sm">psychology</span> AI đã học được gì?</summary>
        <div class="px-4 pb-3 flex flex-col gap-2">
          <div class="flex flex-wrap gap-1.5"><span class="bg-teal-100 text-teal-800 text-[9px] px-2 py-0.5 rounded font-bold">AI</span><span class="bg-teal-100 text-teal-800 text-[9px] px-2 py-0.5 rounded font-bold">SaaS</span><span class="bg-teal-100 text-teal-800 text-[9px] px-2 py-0.5 rounded font-bold">Startup</span><span class="bg-teal-100 text-teal-800 text-[9px] px-2 py-0.5 rounded font-bold">Education</span></div>
          <p class="text-[10px] text-teal-700">Tone: Chuyên nghiệp, storytelling, data-driven</p>
          <p class="text-[10px] text-teal-700">142 bài viết · 12 kỹ năng · 3 chủ đề chính</p>
        </div>
      </details>
      <div class="flex gap-2 mt-auto">
        <button class="flex-1 py-2.5 bg-primary text-white font-bold text-xs rounded-xl">Quét Lại</button>
        <button class="flex-1 py-2.5 bg-surface-container text-on-surface font-bold text-xs rounded-xl">Chỉnh Scope</button>
        <button class="py-2.5 px-3 bg-surface-container text-red-500 rounded-xl"><span class="material-symbols-outlined text-sm">delete</span></button>
      </div>
    </article>

    <!-- Website -->
    <article class="oc-card p-6 flex flex-col gap-4 group">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600"><span class="material-symbols-outlined">language</span></div>
          <div><h3 class="font-bold text-on-surface">Website Vanhien.ai</h3><span class="text-[10px] text-on-surface-variant font-bold uppercase">MCP Server</span></div>
        </div>
        <div class="oc-status oc-status-live bg-secondary text-white border-none scale-75 shadow-lg shadow-secondary/20">MCP</div>
      </div>
      <div class="bg-surface-container/30 p-4 rounded-xl flex flex-col gap-2">
        <div class="flex justify-between"><span class="text-[10px] font-bold text-outline uppercase">Tham chiếu</span><span class="text-xs font-bold">32 tính năng</span></div>
        <div class="flex justify-between"><span class="text-[10px] font-bold text-outline uppercase">Cache</span><span class="text-xs font-bold">14.2 MB</span></div>
      </div>
      <div class="flex gap-2 mt-auto">
        <button class="flex-1 py-2.5 bg-surface-container text-on-surface font-bold text-xs rounded-xl">Quản Lý MCP</button>
        <button class="py-2.5 px-3 bg-surface-container text-red-500 rounded-xl"><span class="material-symbols-outlined text-sm">delete</span></button>
      </div>
    </article>

    <!-- TikTok - Expired -->
    <article class="oc-card p-6 flex flex-col gap-4 opacity-60">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-red-400"><span class="material-symbols-outlined">trending_up</span></div>
          <div><h3 class="font-bold text-on-surface">TikTok Creator</h3><span class="text-[10px] text-on-surface-variant font-bold uppercase">Analytics</span></div>
        </div>
        <div class="oc-status oc-status-error scale-75">EXPIRED</div>
      </div>
      <div class="bg-red-50/50 p-3 rounded-xl text-[10px] text-red-600 font-bold flex items-center gap-2"><span class="material-symbols-outlined text-sm">warning</span> Hết hạn 6 ngày trước. Cần quét lại.</div>
      <button class="w-full py-2.5 bg-primary text-white font-bold text-xs rounded-xl mt-auto">Quét Lại</button>
    </article>

    <!-- Add New -->
    <article class="oc-card p-6 flex flex-col justify-center items-center border-2 border-dashed border-outline-variant/30 cursor-pointer group hover:border-primary/30 transition-colors">
      <span class="material-symbols-outlined text-3xl text-outline/30 group-hover:text-primary transition-colors mb-3">add_link</span>
      <h3 class="font-bold text-on-surface mb-1">Thêm Nguồn</h3>
      <p class="text-[10px] text-outline text-center">Social Profile · Website · File Upload · MCP Server</p>
    </article>
  </div>
</div>
`; }
