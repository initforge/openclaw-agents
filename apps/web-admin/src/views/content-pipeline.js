/**
 * Content Pipeline — Real Kanban with cards
 */
export function renderContentPipeline() { return `
<div class="flex flex-col gap-6">
  <div class="flex justify-between items-end">
    <div><h2 class="text-2xl font-bold text-on-surface mb-1">PIPELINE</h2><p class="text-xs text-on-surface-variant">Mỗi bài viết/video = 1 card. Kéo qua các trạng thái để publish.</p></div>
    <div class="flex gap-2"><button class="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold">Kanban</button><button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant">Calendar</button></div>
  </div>
  <div class="flex gap-2 text-xs"><button class="bg-surface-container px-3 py-1.5 rounded-full font-bold text-on-surface">Tất cả</button><button class="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-bold">LinkedIn</button><button class="bg-surface-container-low px-3 py-1.5 rounded-full font-bold text-on-surface-variant">TikTok</button><button class="bg-surface-container-low px-3 py-1.5 rounded-full font-bold text-on-surface-variant">AI Auto</button><button class="bg-surface-container-low px-3 py-1.5 rounded-full font-bold text-on-surface-variant">User</button></div>

  <div class="flex gap-5 overflow-x-auto pb-4" style="min-height:calc(100vh - 340px)">
    <!-- DRAFT -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Draft</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">3</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl">
          <div class="flex items-center gap-2"><span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span><span class="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">AI Auto</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">AI Agent vs Human Worker: Cuộc đua 2024</p>
          <p class="text-[10px] text-outline">Pillar: AI in Education · @main</p>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10"><span class="text-[9px] text-outline">📝 Post · Hôm nay</span><span class="text-[9px] text-amber-600 font-bold">Gate ⏳</span></div>
        </div>
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl">
          <div class="flex items-center gap-2"><span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span><span class="bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded text-[8px] font-bold">User</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">Viral: Cách AI thay thế Excel</p>
          <p class="text-[10px] text-outline">Pillar: Quick Tips · @tiktok</p>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10"><span class="text-[9px] text-outline">🎬 Video · Render 65%</span><span class="text-[9px] text-amber-600 font-bold">Gate ⏳</span></div>
        </div>
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl">
          <div class="flex items-center gap-2"><span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span><span class="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">AI Auto</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">Case Study: POS FnB Quận 7</p>
          <p class="text-[10px] text-outline">Pillar: Case Study · @main</p>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10"><span class="text-[9px] text-outline">📝 Post · Hôm qua</span><span class="text-[9px] text-amber-600 font-bold">Gate ⏳</span></div>
        </div>
      </div>
    </div>

    <!-- REVIEW -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Review</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">1</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl border-l-3 border-amber-400">
          <div class="flex items-center gap-2"><span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span><span class="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">AI Auto</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">EngPath Walkthrough Caption</p>
          <p class="text-[10px] text-outline">Pillar: Behind the Scenes · @tiktok</p>
          <div class="bg-amber-50 text-amber-700 p-2 rounded-lg text-[10px] font-bold flex items-center gap-1"><span class="material-symbols-outlined text-xs">visibility</span> Chờ bạn review</div>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10"><span class="text-[9px] text-outline">📝 Caption</span><span class="text-[9px] text-teal-600 font-bold">Gate ✅</span></div>
        </div>
      </div>
    </div>

    <!-- READY -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Ready</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">1</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl">
          <div class="flex items-center gap-2"><span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span><span class="bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded text-[8px] font-bold">User</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">POS FnB Case Study Deep Dive</p>
          <p class="text-[10px] text-outline">Pillar: Case Study · @main</p>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10"><span class="text-[9px] text-outline">📝 Post</span><span class="text-[9px] text-teal-600 font-bold">Gate ✅</span></div>
        </div>
      </div>
    </div>

    <!-- SCHEDULED -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Scheduled</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">1</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl bg-primary/3">
          <div class="flex items-center gap-2"><span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span><span class="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">AI Auto</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">Portfolio Engineering Best Practices</p>
          <div class="bg-primary/10 text-primary p-2 rounded-lg text-[10px] font-bold flex items-center gap-1"><span class="material-symbols-outlined text-xs">schedule</span> T4, 8:00 sáng</div>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10"><span class="text-[9px] text-outline">📝 Post · @main</span><span class="text-[9px] text-teal-600 font-bold">Gate ✅</span></div>
        </div>
      </div>
    </div>

    <!-- PUBLISHED -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Published</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">2</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl opacity-80">
          <div class="flex items-center gap-2"><span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span><span class="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">AI Auto</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">Vanhien Walkthrough</p>
          <div class="flex items-center gap-3 text-[10px]"><span class="text-on-surface-variant">🎬 Video</span><span class="font-bold text-teal-600">👁 1.2K</span></div>
        </div>
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl opacity-80">
          <div class="flex items-center gap-2"><span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span><span class="bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded text-[8px] font-bold">User</span></div>
          <p class="text-sm font-bold text-on-surface leading-snug">Portfolio Engineering</p>
          <div class="flex items-center gap-3 text-[10px]"><span class="text-on-surface-variant">📝 Post</span><span class="font-bold text-teal-600">👁 3.4K</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
`; }
