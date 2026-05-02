/**
 * 08-leads-respond — Stitch MCP Generated View
 * Auto-injected from stitch-ref/08-leads-respond.html
 */
export function renderLeadsRespond(data) { return `
<!-- Main Content Area -->
<main class="flex-1 flex flex-col min-w-0">
<div class="p-8 max-w-[1400px] mx-auto w-full flex-grow flex flex-col gap-10">
<!-- Header & Global Mode -->
<div class="flex justify-between items-center">
  <div>
    <h2 class="text-3xl font-bold text-primary mb-2">CHIẾN LƯỢC PHẢN HỒI</h2>
    <p class="text-sm text-on-surface-variant">Thiết lập kịch bản và điều phối đội ngũ Nick thợ săn.</p>
  </div>
  <div class="flex items-center gap-3 bg-surface-container p-2 rounded-2xl border border-outline-variant/10 shadow-inner">
    <span class="text-[10px] font-bold text-outline uppercase px-3">Chế độ vận hành:</span>
    <button class="px-5 py-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 font-bold text-xs flex items-center gap-2">
      <span class="material-symbols-outlined text-xs animate-spin-slow">auto_mode</span>
      AUTONOMOUS (Tự động)
    </button>
    <button class="px-5 py-2.5 text-on-surface-variant hover:bg-white/50 rounded-xl transition-all font-bold text-xs">
      STRATEGIC (Người duyệt)
    </button>
  </div>
</div>

<!-- Grid Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
  <!-- Left: Multi-Account Fleet -->
  <div class="lg:col-span-5 flex flex-col gap-8">
    <div class="oc-card flex flex-col p-8">
      <div class="flex justify-between items-center mb-8">
        <h3 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">diversity_3</span>
          ĐỘI NGŨ NICK (FLEET)
        </h3>
        <button class="text-primary font-bold text-xs hover:underline">+ Thêm Nick</button>
      </div>
      
      <div class="flex flex-col gap-4">
        <!-- Nick 1 -->
        <div class="bg-surface-container/30 p-5 rounded-2xl border border-outline-variant/10 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white border-2 border-teal-500 p-0.5 shadow-sm">
              <img src="https://ui-avatars.com/api/?name=Minh+Trader&background=random" class="w-full h-full rounded-full">
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-on-surface">Minh Trader</span>
              <span class="text-[10px] text-teal-600 font-bold uppercase">Sẵn sàng • Group A</span>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-[9px] text-outline font-bold uppercase">Task Load</span>
            <div class="w-20 h-1.5 bg-surface-container-highest rounded-full mt-1 overflow-hidden">
              <div class="w-[30%] h-full bg-teal-500"></div>
            </div>
          </div>
        </div>
        
        <!-- Nick 2 -->
        <div class="bg-surface-container/30 p-5 rounded-2xl border border-outline-variant/10 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white border-2 border-primary-container p-0.5 shadow-sm opacity-50">
              <img src="https://ui-avatars.com/api/?name=Hoang+Expert&background=random" class="w-full h-full rounded-full grayscale">
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-on-surface opacity-50">Hoàng Expert</span>
              <span class="text-[10px] text-outline font-bold uppercase">Đang nghỉ • Group B</span>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-[9px] text-outline font-bold uppercase">Cooldown</span>
            <span class="text-xs font-data-mono font-bold">14:22</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Instructions (Strategic Core) -->
    <div class="oc-card flex flex-col p-8 bg-primary/5">
      <h3 class="text-xl font-bold text-primary mb-6 flex items-center gap-3">
        <span class="material-symbols-outlined">psychology</span>
        CHỈ DẪN AI (INSTRUCTIONS)
      </h3>
      <textarea class="w-full h-48 bg-white border-none rounded-2xl p-6 font-body-md text-on-surface resize-none focus:ring-2 focus:ring-primary shadow-inner mb-6" placeholder="Nhập chỉ dẫn chiến lược cho AI...">Ưu tiên các lead đang gặp vấn đề về 'tốc độ phản hồi' hoặc 'quá tải vận hành'. 
Sử dụng giọng văn chuyên gia nhưng gần gũi. 
Luôn dẫn dắt khách hàng về Case Study 'OpenClaw V2' nếu phù hợp.
Nếu khách hỏi giá, báo mức khởi điểm 99k và đề xuất tặng bản demo.</textarea>
      <button class="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
        CẬP NHẬT CHIẾN LƯỢC TOÀN ĐỘI
      </button>
    </div>
  </div>

  <!-- Right: Strategy & Scenarios -->
  <div class="lg:col-span-7 flex flex-col gap-8">
    <div class="oc-card flex flex-col p-8 flex-grow">
      <div class="flex justify-between items-center mb-8">
        <h3 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="material-symbols-outlined text-secondary">theater_comedy</span>
          KỊCH BẢN TƯƠNG TÁC (SCENARIOS)
        </h3>
        <button class="bg-surface-container-high px-4 py-2 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-all">+ Tạo Kịch Bản</button>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- Scenario 1 -->
        <div class="p-6 bg-surface-container/20 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <span class="material-symbols-outlined">campaign</span>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-on-surface">Tiếp cận khách hàng "Quá tải"</span>
                <span class="text-[10px] text-on-surface-variant font-bold">Dùng cho Group SaaS, Tech</span>
              </div>
            </div>
            <div class="oc-status oc-status-live bg-secondary/10 text-secondary border-none scale-90">Sử dụng nhiều nhất</div>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed mb-4">
            "Chào [Name], mình thấy bạn đang gặp vấn đề về [Pain Point]. Bên mình đã xử lý case tương tự cho [Client] giúp giảm 50% thời gian. Bạn xem qua link này nhé..."
          </p>
          <div class="flex items-center gap-4 pt-4 border-t border-outline-variant/5 text-[10px] font-bold text-outline uppercase">
            <span>Tỷ lệ phản hồi: 42%</span>
            <span>•</span>
            <span>Số lần dùng: 1,240</span>
          </div>
        </div>

        <!-- Scenario 2 -->
        <div class="p-6 bg-surface-container/20 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <span class="material-symbols-outlined">help_center</span>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-on-surface">Giải đáp thắc mắc chuyên sâu</span>
                <span class="text-[10px] text-on-surface-variant font-bold">Dùng cho Group cộng đồng</span>
              </div>
            </div>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            "Về vấn đề [Pain Point] của bạn, kinh nghiệm của mình là nên tập trung vào [Solution]. Bạn có thể tham khảo thêm tại..."
          </p>
        </div>
      </div>
    </div>
    
    <!-- Action History (Brief) -->
    <div class="oc-card p-6 flex items-center justify-between bg-surface-container-highest/20">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-outline">history</span>
        <span class="text-sm font-bold text-on-surface-variant">Lịch sử tương tác tự động hôm nay: <span class="text-primary">156 lượt</span></span>
      </div>
      <button class="text-primary font-bold text-xs uppercase tracking-widest">Xem Audit Log</button>
    </div>
  </div>
</div>
</div>
</main>
`; }
