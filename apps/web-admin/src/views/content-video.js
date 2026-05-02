/**
 * 14-content-video-v2 — Stitch MCP Generated View (v2 with spec alignment)
 * Auto-injected from stitch-ref/14-content-video-v2.html
 */
export function renderContentVideo(data) { return `
<!-- Main Content -->
<main class="flex-1 flex flex-col w-full">
<div class="p-8 max-w-[1400px] mx-auto w-full flex-grow flex flex-col gap-10">
<!-- Header -->
<div class="flex justify-between items-end">
  <div>
    <h2 class="text-3xl font-bold text-on-surface mb-2">XƯỞNG VIDEO (THE STUDIO)</h2>
    <p class="text-sm text-on-surface-variant italic">Nơi AI chuyển hóa ý tưởng và dữ liệu thành tài sản truyền thông.</p>
  </div>
  <div class="flex items-center gap-4">
    <div class="oc-status oc-status-live bg-primary text-white border-none px-4 py-2 flex items-center gap-2 shadow-lg shadow-primary/20">
      <span class="material-symbols-outlined text-sm animate-pulse">videocam</span>
      STUDIO ONLINE
    </div>
  </div>
</div>

<!-- Studio Grid -->
<div class="grid grid-cols-12 gap-10">
  
  <!-- Left: Production Paths -->
  <div class="col-span-12 lg:col-span-5 flex flex-col gap-8">
    <!-- Path 1: Walkthrough Production -->
    <div class="oc-card p-8 flex flex-col border border-outline-variant/10 shadow-xl group">
      <h3 class="text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">web_asset</span>
        WALKTHROUGH PRODUCTION
      </h3>
      <div class="flex flex-col gap-4 mb-6">
        <input type="text" class="w-full h-12 bg-surface-container border border-outline-variant/10 rounded-xl px-5 text-sm font-body-md shadow-inner" placeholder="Nhập URL trang web...">
        <div class="grid grid-cols-2 gap-3">
          <input type="text" class="h-12 bg-surface-container border border-outline-variant/10 rounded-xl px-5 text-xs font-body-md shadow-inner" placeholder="Username/Email">
          <input type="password" class="h-12 bg-surface-container border border-outline-variant/10 rounded-xl px-5 text-xs font-body-md shadow-inner" placeholder="Password">
        </div>
      </div>
      <p class="text-[11px] text-on-surface-variant mb-6 leading-relaxed">AI sẽ tự động đăng nhập, crawl sâu các ngóc ngách, chụp frame và render video hướng dẫn chuyên nghiệp.</p>
      <button class="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">BẮT ĐẦU SẢN XUẤT</button>
    </div>

    <!-- Path 2: Viral Marketing -->
    <div class="oc-card p-8 flex flex-col border border-outline-variant/10 shadow-xl bg-secondary/5">
      <h3 class="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
        <span class="material-symbols-outlined">trending_up</span>
        VIRAL MARKETING SHORT
      </h3>
      <div class="flex flex-col gap-4 mb-6">
        <div class="bg-white/50 p-4 rounded-xl border border-outline-variant/10">
          <span class="text-[10px] font-bold text-secondary uppercase block mb-1">Mục tiêu</span>
          <span class="text-xs font-bold text-on-surface">Tối ưu hóa chuyển đổi & Viral Reach</span>
        </div>
        <div class="bg-white/50 p-4 rounded-xl border border-outline-variant/10">
          <span class="text-[10px] font-bold text-secondary uppercase block mb-1">Nghiên cứu viral</span>
          <span class="text-xs font-bold text-on-surface">Trend TikTok F&B - 4/2024</span>
        </div>
      </div>
      <button class="w-full py-4 bg-secondary text-white font-bold rounded-2xl shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all">TẠO VIDEO VIRAL</button>
    </div>
  </div>

  <!-- Right: Render Center & Preview -->
  <div class="col-span-12 lg:col-span-7 flex flex-col gap-8">
    <div class="oc-card p-8 flex flex-col flex-grow relative overflow-hidden bg-black text-white">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <div class="flex justify-between items-center mb-8 relative z-10">
        <h3 class="text-xl font-bold flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">precision_manufacturing</span>
          RENDER CENTER (REMOTION)
        </h3>
        <div class="flex items-center gap-3">
          <span class="text-[10px] font-bold text-outline-variant uppercase">CPU: 42%</span>
          <span class="text-[10px] font-bold text-outline-variant uppercase">GPU: 18%</span>
        </div>
      </div>

      <!-- Preview Window -->
      <div class="relative w-full aspect-video bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden mb-8 shadow-2xl flex items-center justify-center">
        <span class="material-symbols-outlined text-white/10 text-8xl">play_circle</span>
        <div class="absolute bottom-6 left-6 right-6 flex items-center gap-4">
          <div class="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div class="w-[65%] h-full bg-primary"></div>
          </div>
          <span class="text-[10px] font-data-mono font-bold text-white/50">00:42 / 01:15</span>
        </div>
      </div>

      <div class="flex flex-col gap-4 relative z-10">
        <div class="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span class="material-symbols-outlined">rendering</span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-bold">Walkthrough_Engpath_v3</span>
              <span class="text-[10px] text-white/50">Rendering Scene 4/12...</span>
            </div>
          </div>
          <button class="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-all">VIEW LOG</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</main>
`; }
