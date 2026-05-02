/**
 * Content Video — Studio with 4 production types + publish method selector
 */
export function renderContentVideo() { return `
<div class="flex flex-col gap-8">
  <div class="flex justify-between items-end">
    <div>
      <h2 class="text-2xl font-bold text-on-surface mb-1">XƯỞNG VIDEO</h2>
      <p class="text-xs text-on-surface-variant">4 loại sản xuất: Walkthrough, Viral Clip, Product Showcase, Testimonial Edit. Chọn loại → điền config → render.</p>
    </div>
    <div class="oc-status oc-status-live bg-primary text-white border-none px-4 py-2 shadow-lg shadow-primary/20">
      <span class="material-symbols-outlined text-sm animate-pulse">videocam</span> STUDIO ONLINE
    </div>
  </div>

  <div class="grid grid-cols-12 gap-6">
    <!-- LEFT: Production Types + Config -->
    <div class="col-span-12 lg:col-span-5 flex flex-col gap-6">

      <!-- Production Type Selector -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-base font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">add_circle</span> CHỌN LOẠI SẢN XUẤT
        </h3>
        <div class="grid grid-cols-2 gap-3">
          <button class="p-4 bg-primary/10 text-primary rounded-xl text-xs font-bold ring-2 ring-primary/30 flex flex-col items-center gap-2">
            <span class="material-symbols-outlined text-2xl">web_asset</span>
            Walkthrough
          </button>
          <button class="p-4 bg-surface-container rounded-xl text-xs font-bold text-on-surface-variant flex flex-col items-center gap-2">
            <span class="material-symbols-outlined text-2xl">trending_up</span>
            Viral Clip
          </button>
          <button class="p-4 bg-surface-container rounded-xl text-xs font-bold text-on-surface-variant flex flex-col items-center gap-2">
            <span class="material-symbols-outlined text-2xl">inventory_2</span>
            Product Showcase
          </button>
          <button class="p-4 bg-surface-container rounded-xl text-xs font-bold text-on-surface-variant flex flex-col items-center gap-2">
            <span class="material-symbols-outlined text-2xl">movie_edit</span>
            Testimonial Edit
          </button>
        </div>
      </section>

      <!-- Config for Walkthrough -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-base font-bold text-on-surface">WALKTHROUGH CONFIG</h3>
        <div class="flex flex-col gap-3">
          <div>
            <span class="text-[10px] font-bold text-outline uppercase block mb-1">URL</span>
            <input type="text" class="w-full h-10 bg-surface-container-low rounded-xl px-4 text-xs" placeholder="https://engpath.ai/demo">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <span class="text-[10px] font-bold text-outline uppercase block mb-1">Template</span>
              <select class="w-full h-10 bg-surface-container-low rounded-xl px-3 text-xs">
                <option>CinematicWalkthrough</option>
                <option>QuickDemo</option>
                <option>ProductShowcase</option>
              </select>
            </div>
            <div>
              <span class="text-[10px] font-bold text-outline uppercase block mb-1">Aspect</span>
              <select class="w-full h-10 bg-surface-container-low rounded-xl px-3 text-xs">
                <option>TikTok 9:16</option>
                <option>YouTube 16:9</option>
                <option>Reels 9:16</option>
              </select>
            </div>
          </div>
          <div>
            <span class="text-[10px] font-bold text-outline uppercase block mb-1">Publish Method</span>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-teal-50 text-teal-700 rounded-lg text-[10px] font-bold ring-2 ring-teal-300">API</button>
              <button class="flex-1 py-2 bg-surface-container text-on-surface-variant rounded-lg text-[10px] font-bold">Browser</button>
              <button class="flex-1 py-2 bg-surface-container text-on-surface-variant rounded-lg text-[10px] font-bold">Handoff</button>
            </div>
          </div>
          <button class="w-full py-3 bg-primary text-white font-bold rounded-xl text-xs mt-2 shadow-lg shadow-primary/20">
            🚀 BẮT ĐẦU WALKTHROUGH
          </button>
        </div>
      </section>

      <!-- Active Render Queue -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-base font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">pending</span> ĐANG RENDER
        </h3>
        <div class="flex flex-col gap-3">
          <!-- Rendering job -->
          <div class="p-4 bg-primary/5 rounded-xl">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white animate-pulse">
                  <span class="material-symbols-outlined text-lg">rendering</span>
                </div>
                <div>
                  <p class="text-sm font-bold text-on-surface">EngPath Walkthrough v3</p>
                  <p class="text-[10px] text-outline">Scene 4/12 · ETA 3 phút</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-primary">65%</span>
                <button class="text-outline hover:text-red-500 transition-colors"><span class="material-symbols-outlined text-sm">cancel</span></button>
              </div>
            </div>
            <div class="w-full h-2 bg-surface-container rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all" style="width:65%"></div>
            </div>
            <div class="flex gap-2 mt-2">
              <span class="bg-teal-50 text-teal-700 text-[9px] font-bold px-2 py-0.5 rounded">walkthrough</span>
              <span class="bg-teal-50 text-teal-700 text-[9px] font-bold px-2 py-0.5 rounded">API</span>
            </div>
          </div>
          <!-- Queued job -->
          <div class="p-4 bg-surface-container/30 rounded-xl opacity-70">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-outline">
                  <span class="material-symbols-outlined text-lg">hourglass_empty</span>
                </div>
                <div>
                  <p class="text-sm font-bold text-on-surface">TikTok Viral: FnB POS</p>
                  <p class="text-[10px] text-outline">Queued · Chờ slot</p>
                </div>
              </div>
              <button class="text-outline hover:text-red-500"><span class="material-symbols-outlined text-sm">cancel</span></button>
            </div>
            <div class="flex gap-2 mt-2">
              <span class="bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded">viral_clip</span>
              <span class="bg-surface-container text-outline text-[9px] font-bold px-2 py-0.5 rounded">API</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- RIGHT: Preview + Library -->
    <div class="col-span-12 lg:col-span-7 flex flex-col gap-6">
      <!-- Preview -->
      <section class="oc-card p-6 bg-black text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image:radial-gradient(#fff 1px,transparent 1px);background-size:20px 20px"></div>
        <div class="flex justify-between items-center mb-4 relative z-10">
          <h3 class="text-lg font-bold flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">play_circle</span> PREVIEW
          </h3>
          <div class="flex items-center gap-3 text-[10px] text-white/50">
            <span>CPU: 42%</span><span>GPU: 18%</span>
          </div>
        </div>
        <div class="w-full aspect-video bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center mb-4 relative">
          <span class="material-symbols-outlined text-white/10 text-7xl">play_circle</span>
          <div class="absolute bottom-10 left-10 right-10 flex items-center gap-3">
            <div class="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div class="w-[65%] h-full bg-primary"></div>
            </div>
            <span class="text-[10px] font-bold text-white/50">00:42 / 01:15</span>
          </div>
        </div>
        <div class="flex gap-2 relative z-10">
          <button class="flex-1 py-2 bg-white/10 rounded-xl text-xs font-bold hover:bg-white/20 transition-all">View Log</button>
          <button class="flex-1 py-2 bg-primary rounded-xl text-xs font-bold">Download</button>
          <button class="flex-1 py-2 bg-teal-600 rounded-xl text-xs font-bold">→ Pipeline</button>
        </div>
      </section>

      <!-- Video Library -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-base font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined">video_library</span> THƯ VIỆN VIDEO
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <!-- Completed video -->
          <div class="bg-surface-container/20 rounded-xl p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/40 transition-colors">
            <div class="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center relative">
              <span class="material-symbols-outlined text-white/20 text-3xl">play_circle</span>
              <div class="absolute bottom-2 right-2 bg-black/50 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">38s</div>
            </div>
            <p class="text-sm font-bold text-on-surface">Vanhien Walkthrough</p>
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2 text-[10px]">
                <span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span>
                <span class="text-teal-600 font-bold">✅ Published</span>
              </div>
              <div class="flex gap-2">
                <span class="bg-teal-50 text-teal-700 text-[9px] font-bold px-2 py-0.5 rounded">walkthrough</span>
                <span class="bg-teal-50 text-teal-700 text-[9px] font-bold px-2 py-0.5 rounded">API</span>
              </div>
              <span class="text-[9px] text-outline">👁 1.2K views</span>
            </div>
            <div class="flex gap-2 mt-1">
              <button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">Preview</button>
              <button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">Download</button>
            </div>
          </div>

          <!-- Another completed -->
          <div class="bg-surface-container/20 rounded-xl p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/40 transition-colors">
            <div class="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center relative">
              <span class="material-symbols-outlined text-white/20 text-3xl">play_circle</span>
              <div class="absolute bottom-2 right-2 bg-black/50 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">45s</div>
            </div>
            <p class="text-sm font-bold text-on-surface">Product Showcase: AI Grading</p>
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2 text-[10px]">
                <span class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">LI</span>
                <span class="text-teal-600 font-bold">✅ Published</span>
              </div>
              <div class="flex gap-2">
                <span class="bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded">product_showcase</span>
                <span class="bg-teal-50 text-teal-700 text-[9px] font-bold px-2 py-0.5 rounded">API</span>
              </div>
              <span class="text-[9px] text-outline">👁 890 views</span>
            </div>
            <div class="flex gap-2 mt-1">
              <button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">Preview</button>
              <button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">Download</button>
            </div>
          </div>

          <!-- Testimonial -->
          <div class="bg-surface-container/20 rounded-xl p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/40 transition-colors">
            <div class="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center relative">
              <span class="material-symbols-outlined text-white/20 text-3xl">play_circle</span>
              <div class="absolute bottom-2 right-2 bg-black/50 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">62s</div>
            </div>
            <p class="text-sm font-bold text-on-surface">Testimonial: Customer Feedback</p>
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2 text-[10px]">
                <span class="bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">YT</span>
                <span class="text-amber-600 font-bold">⏳ Handoff</span>
              </div>
              <div class="flex gap-2">
                <span class="bg-purple-50 text-purple-700 text-[9px] font-bold px-2 py-0.5 rounded">testimonial_edit</span>
                <span class="bg-surface-container text-outline text-[9px] font-bold px-2 py-0.5 rounded">handoff</span>
              </div>
            </div>
            <div class="flex gap-2 mt-1">
              <button class="flex-1 py-1.5 bg-surface-container rounded-lg text-[10px] font-bold">Preview</button>
              <button class="flex-1 py-1.5 bg-primary text-white rounded-lg text-[10px] font-bold">Publish</button>
            </div>
          </div>

          <!-- Draft -->
          <div class="bg-surface-container/20 rounded-xl p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/40 transition-colors opacity-60">
            <div class="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center relative">
              <span class="material-symbols-outlined text-white/20 text-3xl">hourglass_empty</span>
            </div>
            <p class="text-sm font-bold text-on-surface">TikTok Viral: FnB POS</p>
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2 text-[10px]">
                <span class="bg-black text-white px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">TT</span>
                <span class="text-amber-600 font-bold">⏳ Queued</span>
              </div>
              <div class="flex gap-2">
                <span class="bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded">viral_clip</span>
                <span class="bg-surface-container text-outline text-[9px] font-bold px-2 py-0.5 rounded">API</span>
              </div>
              <span class="text-[9px] text-outline">Est. 4 min</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
`; }