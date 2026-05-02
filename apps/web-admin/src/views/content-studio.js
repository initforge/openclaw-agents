/**
 * Content Studio — Video production with wizard + queue + library
 */
export function renderContentStudio() { return `
<div class="flex flex-col gap-8">
  <div class="flex justify-between items-end">
    <div><h2 class="text-2xl font-bold text-on-surface mb-1">STUDIO</h2><p class="text-xs text-on-surface-variant">Sản xuất video: Walkthrough, Viral Short, Product Showcase.</p></div>
    <div class="oc-status oc-status-live bg-primary text-white border-none px-4 py-2 shadow-lg shadow-primary/20"><span class="material-symbols-outlined text-sm animate-pulse">videocam</span> STUDIO ONLINE</div>
  </div>

  <div class="grid grid-cols-12 gap-6">
    <!-- Left: New Production + Queue -->
    <div class="col-span-12 lg:col-span-5 flex flex-col gap-6">
      <!-- New Production Wizard -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-lg font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined text-primary">add_circle</span> TẠO VIDEO MỚI</h3>
        <div class="flex flex-col gap-3">
          <div><span class="text-[10px] font-bold text-outline uppercase">① Loại video</span>
            <div class="flex gap-2 mt-2">
              <button class="flex-1 p-3 bg-primary/10 text-primary rounded-xl text-xs font-bold ring-2 ring-primary/30">Walkthrough</button>
              <button class="flex-1 p-3 bg-surface-container rounded-xl text-xs font-bold text-on-surface-variant">Viral Short</button>
              <button class="flex-1 p-3 bg-surface-container rounded-xl text-xs font-bold text-on-surface-variant">Showcase</button>
            </div>
          </div>
          <div><span class="text-[10px] font-bold text-outline uppercase">② Cấu hình</span>
            <div class="flex flex-col gap-2 mt-2">
              <input type="text" class="w-full h-10 bg-surface-container-low rounded-xl px-4 text-xs" placeholder="URL trang web...">
              <div class="grid grid-cols-2 gap-2">
                <select class="h-10 bg-surface-container-low rounded-xl px-3 text-xs"><option>CinematicWalkthrough</option><option>ProductShowcase</option><option>QuickDemo</option></select>
                <select class="h-10 bg-surface-container-low rounded-xl px-3 text-xs"><option>TikTok 9:16</option><option>YouTube 16:9</option><option>Reels 9:16</option></select>
              </div>
              <select class="h-10 bg-surface-container-low rounded-xl px-3 text-xs"><option>Credential: Chọn từ vault...</option><option>EngPath Demo Account</option><option>Vanhien Account</option></select>
            </div>
          </div>
          <button class="w-full py-3 bg-primary text-white font-bold rounded-xl text-xs mt-2">③ Tạo Storyboard → Review → Render</button>
        </div>
      </section>

      <!-- Active Queue -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-lg font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined text-secondary">pending</span> ĐANG RENDER</h3>
        <div class="flex flex-col gap-3">
          <div class="p-4 bg-surface-container/20 rounded-xl flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white"><span class="material-symbols-outlined text-lg">rendering</span></div>
              <div><p class="text-sm font-bold text-on-surface">EngPath Walkthrough v3</p><p class="text-[10px] text-outline">Scene 4/12 · ETA 3 phút</p></div>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-primary">65%</span>
              <button class="text-outline hover:text-red-500 transition-colors"><span class="material-symbols-outlined text-sm">cancel</span></button>
            </div>
          </div>
          <div class="w-full h-2 bg-surface-container rounded-full overflow-hidden"><div class="h-full bg-primary rounded-full" style="width:65%"></div></div>
          <div class="p-4 bg-surface-container/10 rounded-xl flex items-center justify-between opacity-60">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-outline"><span class="material-symbols-outlined text-lg">hourglass_empty</span></div>
              <div><p class="text-sm font-bold text-on-surface">Viral TikTok FnB</p><p class="text-[10px] text-outline">Queued · Chờ slot</p></div>
            </div>
            <button class="text-outline hover:text-red-500"><span class="material-symbols-outlined text-sm">cancel</span></button>
          </div>
        </div>
      </section>
    </div>

    <!-- Right: Preview + Library -->
    <div class="col-span-12 lg:col-span-7 flex flex-col gap-6">
      <!-- Preview -->
      <section class="oc-card p-6 bg-black text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image:radial-gradient(#fff 1px,transparent 1px);background-size:20px 20px"></div>
        <div class="flex justify-between items-center mb-4 relative z-10">
          <h3 class="text-lg font-bold flex items-center gap-2"><span class="material-symbols-outlined text-primary">play_circle</span> PREVIEW</h3>
          <div class="flex items-center gap-3 text-[10px] text-white/50"><span>CPU: 42%</span><span>GPU: 18%</span></div>
        </div>
        <div class="w-full aspect-video bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center mb-4">
          <span class="material-symbols-outlined text-white/10 text-7xl">play_circle</span>
          <div class="absolute bottom-10 left-10 right-10 flex items-center gap-3"><div class="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden"><div class="w-[65%] h-full bg-primary"></div></div><span class="text-[10px] font-bold text-white/50">00:42 / 01:15</span></div>
        </div>
        <div class="flex gap-2 relative z-10">
          <button class="flex-1 py-2 bg-white/10 rounded-xl text-xs font-bold hover:bg-white/20 transition-all">View Log</button>
          <button class="flex-1 py-2 bg-primary rounded-xl text-xs font-bold">⬇ Download</button>
          <button class="flex-1 py-2 bg-teal-600 rounded-xl text-xs font-bold">→ Pipeline</button>
        </div>
      </section>

      <!-- Library -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-lg font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined">video_library</span> THƯ VIỆN VIDEO</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-surface-container/20 rounded-xl p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/40 transition-colors">
            <div class="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-white/20 text-3xl">play_circle</span></div>
            <p class="text-sm font-bold text-on-surface">Vanhien Walkthrough</p>
            <div class="flex items-center gap-2 text-[10px]"><span class="text-outline">38s · TikTok</span><span class="text-teal-600 font-bold">✅ Published</span></div>
            <div class="flex gap-2"><button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">▶ Preview</button><button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">⬇</button></div>
          </div>
          <div class="bg-surface-container/20 rounded-xl p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/40 transition-colors">
            <div class="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-white/20 text-3xl">play_circle</span></div>
            <p class="text-sm font-bold text-on-surface">EngPath Walkthrough v2</p>
            <div class="flex items-center gap-2 text-[10px]"><span class="text-outline">42s · YouTube</span><span class="text-amber-600 font-bold">Draft</span></div>
            <div class="flex gap-2"><button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">▶ Preview</button><button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">⬇</button></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
`; }
