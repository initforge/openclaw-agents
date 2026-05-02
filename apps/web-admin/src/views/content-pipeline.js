/**
 * Content Pipeline — Kanban with trigger_type + autonomy_level per card
 */
export function renderContentPipeline() { return `
<div class="flex flex-col gap-6">
  <div class="flex justify-between items-end">
    <div><h2 class="text-2xl font-bold text-on-surface mb-1">PIPELINE</h2><p class="text-xs text-on-surface-variant">Mỗi bài = 1 card. AI tạo → auto review → schedule → publish. Trigger & Autonomy hiển thị trên card.</p></div>
    <div class="flex gap-2"><button class="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold">Kanban</button><button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant">Calendar</button></div>
  </div>

  <!-- Header Stats -->
  <div class="grid grid-cols-4 gap-4">
    <div class="oc-card p-4 !rounded-xl text-center"><span class="text-[10px] font-bold text-outline uppercase block">Draft</span><span class="text-2xl font-bold text-on-surface">3</span></div>
    <div class="oc-card p-4 !rounded-xl text-center"><span class="text-[10px] font-bold text-outline uppercase block">Ready</span><span class="text-2xl font-bold text-primary">1</span></div>
    <div class="oc-card p-4 !rounded-xl text-center"><span class="text-[10px] font-bold text-outline uppercase block">Scheduled</span><span class="text-2xl font-bold text-on-surface">1</span></div>
    <div class="oc-card p-4 !rounded-xl text-center"><span class="text-[10px] font-bold text-outline uppercase block">Published (H.nay)</span><span class="text-2xl font-bold text-teal-600">2</span></div>
  </div>

  <!-- Filters -->
  <div class="flex gap-2 flex-wrap">
    <button class="bg-primary text-white px-3 py-1.5 rounded-full text-xs font-bold">Tất cả</button>
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">LinkedIn</button>
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">TikTok</button>
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">YouTube</button>
    <span class="border-l border-outline-variant/20 mx-1"></span>
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Schedule</button>
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Trend</button>
    <button class="bg-surface-container px-3 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">Command</button>
    <span class="border-l border-outline-variant/20 mx-1"></span>
    <button class="bg-teal-50 px-3 py-1.5 rounded-full text-xs font-bold text-teal-700">🟢 Fully Auto</button>
    <button class="bg-amber-50 px-3 py-1.5 rounded-full text-xs font-bold text-amber-700">🟡 Auto+Review</button>
  </div>

  <div class="flex gap-5 overflow-x-auto pb-4" style="min-height:calc(100vh - 340px)">
    <!-- DRAFT -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Draft</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">2</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <!-- Card with trigger + autonomy -->
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span>
            <span class="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Command</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">AI grading cho giáo viên THPT</p>
          <p class="text-[10px] text-outline">Pillar: AI in Education</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold">🟡 Auto+Review</span>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10">
            <span class="text-[9px] text-outline">📝 Post · Hôm nay</span>
            <span class="text-[9px] text-amber-600 font-bold">Gate ⏳</span>
          </div>
        </div>
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span>
            <span class="bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Schedule</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">EngPath Walkthrough Caption</p>
          <p class="text-[10px] text-outline">Pillar: AI in Education</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 font-bold">🟢 Fully Auto</span>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10">
            <span class="text-[9px] text-outline">🎬 Caption · Hôm nay</span>
            <span class="text-[9px] text-amber-600 font-bold">Gate ⏳</span>
          </div>
        </div>
      </div>
    </div>

    <!-- REVIEW (only for auto_with_review) -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Review</span><span class="bg-amber-100 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-700">1</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl border-l-4 border-amber-400 hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span>
            <span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Performance</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">POS FnB Case Study Deep Dive</p>
          <p class="text-[10px] text-outline">Pillar: SaaS Builder</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold">🟡 Auto+Review</span>
          </div>
          <div class="bg-amber-50 text-amber-700 p-2 rounded-lg text-[10px] font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">visibility</span> Chờ bạn review
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10">
            <span class="text-[9px] text-outline">📝 Post</span>
            <span class="text-[9px] text-teal-600 font-bold">Gate ✅</span>
          </div>
        </div>
      </div>
    </div>

    <!-- READY -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Ready</span><span class="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-teal-700">1</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">FB</span>
            <span class="bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Schedule</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">SaaS Startup Tips</p>
          <p class="text-[10px] text-outline">Pillar: SaaS Builder</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 font-bold">🟢 Fully Auto</span>
          </div>
          <div class="flex gap-2 mt-2">
            <button class="flex-1 py-2 bg-primary text-white text-[10px] font-bold rounded-lg">→ Schedule</button>
            <button class="flex-1 py-2 bg-surface-container text-on-surface text-[10px] font-bold rounded-lg">Publish</button>
          </div>
        </div>
      </div>
    </div>

    <!-- SCHEDULED -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Scheduled</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">1</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl bg-primary/3 hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span>
            <span class="bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Schedule</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">Portfolio Engineering Best Practices</p>
          <div class="bg-primary/10 text-primary p-2 rounded-lg text-[10px] font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">schedule</span> T4, 8:00 sáng
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-outline-variant/10">
            <span class="text-[9px] text-outline">📝 Post · @main</span>
            <span class="text-[9px] text-teal-600 font-bold">Gate ✅</span>
          </div>
        </div>
      </div>
    </div>

    <!-- PUBLISHED -->
    <div class="w-[260px] flex-shrink-0 flex flex-col">
      <div class="flex items-center justify-between mb-4"><span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Published</span><span class="bg-surface-container w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">3</span></div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl opacity-80 hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span>
            <span class="bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Command</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">Vanhien Walkthrough</p>
          <div class="flex gap-2 text-[10px]"><span class="text-on-surface-variant">🎬 Video</span><span class="font-bold text-teal-600">👁 1.2K</span></div>
          <div class="flex items-center gap-2">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 font-bold">🟡 Auto+Review</span>
            <span class="text-[9px] text-outline">· API</span>
          </div>
        </div>
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl opacity-80 hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span>
            <span class="bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Schedule</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">Portfolio Engineering</p>
          <div class="flex gap-2 text-[10px]"><span class="text-on-surface-variant">📝 Post</span><span class="font-bold text-teal-600">👁 3.4K</span></div>
          <div class="flex items-center gap-2">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 font-bold">🟢 Fully Auto</span>
            <span class="text-[9px] text-outline">· API</span>
          </div>
        </div>
        <div class="oc-card p-4 flex flex-col gap-2.5 cursor-pointer !rounded-xl opacity-80 hover:shadow-level-2 transition-all">
          <div class="flex items-center gap-2">
            <span class="bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">YT</span>
            <span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[8px] font-bold">Trend</span>
          </div>
          <p class="text-sm font-bold text-on-surface leading-snug">EngPath Deep Dive</p>
          <div class="flex gap-2 text-[10px]"><span class="text-on-surface-variant">🎬 Video</span><span class="font-bold text-teal-600">👁 890</span></div>
          <div class="flex items-center gap-2">
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold">🟡 Auto+Review</span>
            <span class="text-[9px] text-outline">· Browser</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`; }
