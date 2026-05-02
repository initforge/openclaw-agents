/**
 * 11-leads-proof-v2 — Stitch MCP Generated View (v2 with spec alignment)
 * Auto-injected from stitch-ref/11-leads-proof-v2.html
 */
export function renderLeadsProof(data) { return `
<!-- Main Content Area -->
<main class="flex-1 flex flex-col w-full">
<div class="p-8 max-w-[1400px] mx-auto w-full flex-grow flex flex-col gap-10">
<!-- Header -->
<div class="flex justify-between items-end">
  <div>
    <h2 class="text-3xl font-bold text-primary mb-2">THƯ VIỆN BẰNG CHỨNG (PROOF)</h2>
    <p class="text-sm text-on-surface-variant">Vũ khí giúp AI thuyết phục khách hàng bằng kết quả thực tế.</p>
  </div>
  <button class="bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
    <span class="material-symbols-outlined">add_a_photo</span>
    THÊM BẰNG CHỨNG MỚI
  </button>
</div>

<!-- Proof Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Proof Card 1 -->
  <article class="oc-card p-8 flex flex-col group border border-outline-variant/5">
    <div class="flex justify-between items-start mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
          <span class="material-symbols-outlined">verified</span>
        </div>
        <div>
          <h3 class="font-bold text-on-surface text-lg leading-none">Case Study: Quán Trà Sữa Q7</h3>
          <span class="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Lĩnh vực: F&B • SaaS</span>
        </div>
      </div>
      <div class="flex gap-2">
        <span class="material-symbols-outlined text-teal-600">image</span>
        <span class="material-symbols-outlined text-primary">analytics</span>
      </div>
    </div>

    <div class="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-surface-container-high shadow-inner border border-outline-variant/10">
      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
        <span class="text-white text-sm font-bold italic leading-tight">"Tiết kiệm 4 giờ mỗi ngày sau khi dùng OpenClaw"</span>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-surface-container/30 p-3 rounded-xl text-center border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Dùng lần cuối</span>
        <span class="text-xs font-bold text-on-surface">24m trước</span>
      </div>
      <div class="bg-surface-container/30 p-3 rounded-xl text-center border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Tỉ lệ chốt</span>
        <span class="text-xs font-bold text-secondary">42%</span>
      </div>
      <div class="bg-surface-container/30 p-3 rounded-xl text-center border border-outline-variant/5">
        <span class="text-[9px] font-bold text-outline uppercase block mb-1">Độ tin cậy</span>
        <span class="text-xs font-bold text-teal-600">Cao</span>
      </div>
    </div>

    <div class="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/10">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-bold text-outline uppercase">Phản hồi trung bình:</span>
        <span class="text-xs font-data-mono font-bold text-primary">1m 45s</span>
      </div>
      <button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">
        <span class="material-symbols-outlined">edit_square</span>
      </button>
    </div>
  </article>

  <!-- Auto Capture Section (Embedded in Proof Grid) -->
  <article class="oc-card p-8 flex flex-col bg-primary/5 border-2 border-dashed border-primary/20">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
        <span class="material-symbols-outlined text-2xl animate-pulse">auto_videocam</span>
      </div>
      <div>
        <h3 class="text-xl font-bold text-primary">CHỤP BẰNG CHỨNG TỰ ĐỘNG</h3>
        <p class="text-xs text-on-surface-variant mt-1 italic">Playwright engine đang túc trực...</p>
      </div>
    </div>

    <div class="flex flex-col gap-4 mb-8">
      <div class="relative">
        <input type="text" class="w-full h-14 bg-white border border-outline-variant/20 rounded-2xl px-6 text-sm font-body-md focus:ring-2 focus:ring-primary shadow-sm" placeholder="Dán link bài đăng / comment thành công...">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <label class="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-outline-variant/10 cursor-pointer hover:border-primary transition-all">
          <input type="checkbox" checked class="w-4 h-4 rounded text-primary border-outline-variant">
          <span class="text-xs font-bold text-on-surface">Chụp toàn màn hình</span>
        </label>
        <label class="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-outline-variant/10 cursor-pointer hover:border-primary transition-all">
          <input type="checkbox" class="w-4 h-4 rounded text-primary border-outline-variant">
          <span class="text-xs font-bold text-on-surface">Ẩn danh tính KH</span>
        </label>
      </div>
    </div>

    <button class="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
      <span class="material-symbols-outlined text-xl">camera</span>
      BẮT ĐẦU CHỤP VÀ PHÂN TÍCH
    </button>
  </article>
</div>
</div>
</main>
`; }
