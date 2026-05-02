/**
 * 02-leads-radar — Stitch MCP Generated View
 * Auto-injected from stitch-ref/02-leads-radar.html
 */
export function renderLeadsRadar(data) { return `
<!-- Main Content Canvas -->
<main class="flex-grow flex flex-col w-full">
<!-- Canvas Body -->
<div class="p-container-padding flex-grow flex flex-col max-w-[1400px] mx-auto w-full">
<!-- Header Section -->
<div class="flex justify-between items-end mb-section-margin">
<div>
<h2 class="font-h1 text-on-background tracking-tight">HUNTER RADAR</h2>
<p class="font-body-lg text-on-surface-variant mt-2 flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></span>
 AI đang quét 42 nguồn • 4 mục tiêu nóng mới
 </p>
</div>
<div class="flex items-center gap-3 bg-surface-container p-1.5 rounded-2xl border border-outline-variant/10">
  <button class="px-4 py-2 bg-white text-on-surface rounded-xl shadow-sm font-bold text-xs">Mục tiêu nóng</button>
  <button class="px-4 py-2 text-on-surface-variant hover:bg-white/50 rounded-xl transition-all font-bold text-xs">Gợi ý từ AI</button>
  <div class="w-px h-6 bg-outline-variant/30 mx-1"></div>
  <button class="p-2 text-on-surface-variant hover:bg-white/50 rounded-xl transition-all">
    <span class="material-symbols-outlined text-[20px]">manage_search</span>
  </button>
</div>
</div>

<!-- Hunter Grid -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-card-gap">
<!-- Hunter Card 1 (AUTONOMOUS ACTION TAKEN) -->
<article class="oc-card p-[32px] flex flex-col relative overflow-hidden group border-l-4 border-teal-500">
  <div class="absolute top-4 right-4 flex flex-col items-end">
    <div class="oc-status oc-status-live bg-teal-500 text-white border-none px-3 py-1 flex items-center gap-1.5 shadow-lg shadow-teal-500/20">
      <span class="material-symbols-outlined text-xs animate-spin-slow">smart_toy</span>
      ĐÃ PHẢN HỒI TỰ ĐỘNG
    </div>
    <span class="text-[9px] font-bold text-outline uppercase mt-2">Phản hồi sau 1m 24s</span>
  </div>

  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-inner">
      <span class="material-symbols-outlined text-2xl">target</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-lg font-bold text-on-surface">Cộng đồng SaaS Việt Nam</h3>
      <span class="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest italic">Nick sử dụng: Minh Trader (Group A)</span>
    </div>
  </div>

  <div class="bg-[#F3EEE5] rounded-2xl p-6 mb-6 border-l-4 border-teal-500/30">
    <span class="text-[10px] font-bold text-teal-600 mb-2 block uppercase tracking-tighter">BẰNG CHỨNG (EVIDENCE)</span>
    <p class="font-body-md text-on-background italic">
      "Đội ngũ đang quá tải với việc trả lời thủ công trên Zalo và Fanpage. Cần tool automation đa kênh gấp."
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="bg-surface-container/30 p-4 rounded-xl border border-outline-variant/10">
      <span class="text-[10px] font-bold text-outline uppercase block mb-2">PHÂN TÍCH NHU CẦU</span>
      <p class="text-xs font-bold text-on-surface leading-snug">Giải tỏa áp lực vận hành, tích hợp CRM tự động.</p>
    </div>
    <div class="bg-surface-container/30 p-4 rounded-xl border border-outline-variant/10">
      <span class="text-[10px] font-bold text-outline uppercase block mb-2">CHÂN DUNG (PERSONA)</span>
      <p class="text-xs font-bold text-on-surface leading-snug">Chủ doanh nghiệp nhỏ, ưu tiên tốc độ setup.</p>
    </div>
  </div>

  <div class="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/10">
    <div class="flex items-center gap-3">
      <div class="flex -space-x-2">
        <div class="w-7 h-7 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[10px] text-teal-600 font-bold">L1</div>
        <div class="w-7 h-7 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[10px] text-teal-600 font-bold">L2</div>
      </div>
      <span class="text-[10px] font-bold text-outline-variant">Match với Proof: OpenClaw V2 Case</span>
    </div>
    <button class="bg-surface-container-highest text-on-surface font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-surface-container-high transition-all flex items-center gap-2">
      XEM CHI TIẾT PHẢN HỒI
      <span class="material-symbols-outlined text-[16px]">visibility</span>
    </button>
  </div>
</article>

<!-- Hunter Card 2 (PENDING STRATEGIC REVIEW) -->
<article class="oc-card p-[32px] flex flex-col relative overflow-hidden group">
  <div class="absolute top-4 right-4 flex flex-col items-end">
    <div class="oc-status oc-status-live bg-error text-white border-none px-3 py-1 flex items-center gap-1.5 shadow-lg shadow-error/20">
      <span class="material-symbols-outlined text-xs">priority_high</span>
      CẦN LỆNH CHIẾN LƯỢC
    </div>
    <span class="text-[9px] font-bold text-outline uppercase mt-2">Điểm Lead: 94/100</span>
  </div>

  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-error shadow-inner">
      <span class="material-symbols-outlined text-2xl">radar</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-lg font-bold text-on-surface">HR Tech Vietnam</h3>
      <span class="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest italic">Nguồn mới phát hiện (AI Suggest)</span>
    </div>
  </div>

  <div class="bg-[#F3EEE5] rounded-2xl p-6 mb-6 border-l-4 border-error/30">
    <span class="text-[10px] font-bold text-error mb-2 block uppercase tracking-tighter">BẰNG CHỨNG (EVIDENCE)</span>
    <p class="font-body-md text-on-background italic">
      "Có ai biết phần mềm nào tích hợp chấm công khuôn mặt và tự động xuất bảng lương không? Hệ thống hiện tại hay bị lỗi."
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="bg-surface-container/30 p-4 rounded-xl border border-outline-variant/10">
      <span class="text-[10px] font-bold text-outline uppercase block mb-2">PHÂN TÍCH NHU CẦU</span>
      <p class="text-xs font-bold text-on-surface leading-snug">Đang tìm giải pháp thay thế, lỗi đồng bộ dữ liệu.</p>
    </div>
    <div class="bg-surface-container/30 p-4 rounded-xl border border-outline-variant/10">
      <span class="text-[10px] font-bold text-outline uppercase block mb-2">CHÂN DUNG (PERSONA)</span>
      <p class="text-xs font-bold text-on-surface leading-snug">HR Manager, quan tâm độ ổn định và chính xác.</p>
    </div>
  </div>

  <div class="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/10">
    <div class="flex items-center gap-2">
      <span class="bg-error/10 text-error px-3 py-1 rounded-full text-[10px] font-bold">Topic: Chấm công AI</span>
      <span class="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold">Chưa có kịch bản mẫu</span>
    </div>
    <button class="bg-primary text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
      THIẾT LẬP CHIẾN LƯỢC
      <span class="material-symbols-outlined text-[18px]">swords</span>
    </button>
  </div>
</article>
</div>
</div>
</main>
`; }
