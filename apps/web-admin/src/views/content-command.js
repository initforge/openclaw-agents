/**
 * Content Command — Prompt zone with trigger selectors, autonomy level, content pillars
 */
export function renderContentCommand() { return `
<div class="flex flex-col gap-8">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- LEFT: Editor -->
    <div class="lg:col-span-8 flex flex-col gap-6">
      <!-- Main Editor -->
      <section class="oc-card flex flex-col gap-5">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-on-surface">SOẠN THẢO LỆNH</h2>
          <div class="flex items-center gap-2 bg-teal-50 px-3 py-1.5 rounded-full">
            <div class="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse"></div>
            <span class="text-[10px] font-bold text-teal-700 uppercase tracking-wider">Autonomous</span>
          </div>
        </div>

        <!-- Platform Chips -->
        <div class="flex flex-wrap gap-2">
          <button class="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-xs font-bold ring-2 ring-blue-300 flex items-center gap-2">LinkedIn</button>
          <button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant flex items-center gap-2">TikTok</button>
          <button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant flex items-center gap-2">Facebook</button>
          <button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant flex items-center gap-2">YouTube</button>
          <button class="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant flex items-center gap-2">Upwork</button>
        </div>

        <!-- Trigger + Autonomy Row -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <span class="text-[10px] font-bold text-outline uppercase tracking-wider">Trigger Type</span>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-teal-50 text-teal-700 rounded-lg text-xs font-bold ring-2 ring-teal-300">Schedule</button>
              <button class="flex-1 py-2 bg-surface-container text-on-surface-variant rounded-lg text-xs font-bold">Trend</button>
              <button class="flex-1 py-2 bg-surface-container text-on-surface-variant rounded-lg text-xs font-bold">Cmd</button>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-[10px] font-bold text-outline uppercase tracking-wider">Autonomy Level</span>
            <div class="relative">
              <select class="w-full h-10 bg-surface-container rounded-xl px-4 text-xs font-bold appearance-none cursor-pointer">
                <option>🟢 Fully Auto — Tạo + Đăng không cần tôi</option>
                <option selected>🟡 Auto + Review — Tạo + Đăng sau khi tôi duyệt</option>
                <option>🔴 Auto No Publish — Chỉ tạo, không tự đăng</option>
                <option>⚪ Manual Only — Tôi làm tất cả</option>
              </select>
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">▼</span>
            </div>
          </div>
        </div>

        <!-- Prompt Input -->
        <textarea class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary rounded-t-lg p-4 text-sm min-h-[120px] resize-y placeholder:text-outline" placeholder="Viết lệnh cho AI... VD: 'Bài LinkedIn về AI Agent cho CTO startup'"></textarea>

        <!-- Pillar + Context Tags -->
        <div class="flex gap-2 flex-wrap">
          <span class="text-[10px] text-outline font-bold">PILLAR:</span>
          <span class="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-[10px] font-bold">AI in Education</span>
          <span class="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold">SaaS Builder</span>
        </div>

        <div class="flex justify-end">
          <button class="bg-primary text-white font-bold text-xs rounded-xl px-6 py-3 flex items-center gap-2 shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined text-sm">magic_button</span> Tạo nội dung
          </button>
        </div>
      </section>

      <!-- Revision -->
      <section class="oc-card flex flex-col gap-4 border-l-4 border-primary/30">
        <div class="flex items-center justify-between border-b border-outline-variant/10 pb-4">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">auto_awesome</span> KẾT QUẢ
          </h3>
          <div class="flex items-center gap-3">
            <button class="text-outline hover:text-on-surface transition-colors p-1"><span class="material-symbols-outlined text-sm">arrow_back_ios</span></button>
            <span class="text-[10px] font-bold text-on-surface-variant bg-surface-variant px-2 py-1 rounded">v3</span>
            <button class="text-outline hover:text-on-surface transition-colors p-1"><span class="material-symbols-outlined text-sm">arrow_forward_ios</span></button>
          </div>
        </div>
        <div class="bg-surface-container-low p-5 rounded-xl">
          <div class="flex items-center gap-2 mb-3">
            <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase">LinkedIn</span>
            <span class="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-[9px] font-bold">🟢 Fully Auto</span>
            <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[9px] font-bold">Command</span>
          </div>
          <p class="text-sm text-on-surface leading-relaxed mb-2">Bạn đang quản lý team 10 người và mệt mỏi với việc review code thủ công mỗi ngày?</p>
          <p class="text-sm text-on-surface leading-relaxed mb-2">3 tháng trước, team mình cũng vậy. Cho đến khi thử AI code review:</p>
          <p class="text-sm text-on-surface leading-relaxed mb-2">→ Giảm 60% thời gian review<br>→ Bug rate giảm 40%</p>
          <p class="text-sm text-on-surface leading-relaxed">Comment "AI" để mình gửi chi tiết 👇</p>
          <div class="mt-3 pt-3 border-t border-outline-variant/10 text-[10px] text-outline">
            1.247 / 1.500 ký tự · Pillar: AI in Education · Autonomy: 🟢 Fully Auto
          </div>
        </div>
        <div class="flex gap-3">
          <button class="flex-1 py-2.5 bg-surface-container text-on-surface font-bold text-xs rounded-xl flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-sm">content_copy</span> Copy
          </button>
          <button class="flex-1 py-2.5 bg-primary text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-sm">arrow_forward</span> → Pipeline
          </button>
          <button class="flex-1 py-2.5 bg-secondary/10 text-secondary font-bold text-xs rounded-xl flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-sm">movie</span> → Video
          </button>
        </div>
        <div class="flex gap-2">
          <input type="text" class="flex-1 bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-xs placeholder:text-outline" placeholder="Chỉnh sửa: 'ngắn hơn, thêm số liệu...'">
          <button class="bg-surface-container-high px-4 py-2.5 rounded-xl text-xs font-bold">Chỉnh lại</button>
        </div>
      </section>
    </div>

    <!-- RIGHT: Config -->
    <div class="lg:col-span-4 flex flex-col gap-6">
      <!-- Content Pillars Config -->
      <section class="oc-card flex flex-col gap-4 border-t-4 border-teal-400">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-teal-600">dashboard</span> CONTENT PILLARS
          </h3>
          <button class="text-primary font-bold text-xs">+ Thêm</button>
        </div>
        <div class="flex flex-col gap-3">
          <!-- Active Pillar -->
          <div class="bg-teal-50/50 p-4 rounded-xl border-2 border-teal-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-teal-800">AI in Education</span>
              <span class="bg-teal-200 text-teal-800 px-2 py-0.5 rounded text-[9px] font-bold">ACTIVE</span>
            </div>
            <div class="flex flex-wrap gap-1 mb-2">
              <span class="bg-teal-100 text-teal-700 text-[9px] px-1.5 py-0.5 rounded font-bold">Case Study</span>
              <span class="bg-teal-100 text-teal-700 text-[9px] px-1.5 py-0.5 rounded font-bold">Quick Tips</span>
              <span class="bg-teal-100 text-teal-700 text-[9px] px-1.5 py-0.5 rounded font-bold">Behind Scenes</span>
            </div>
            <div class="text-[10px] text-teal-700">
              LI: 3x/week · TT: 1x/day · YT: 1x/week
            </div>
          </div>
          <!-- Inactive Pillar -->
          <div class="bg-surface-container/30 p-4 rounded-xl opacity-70">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-on-surface">SaaS Builder</span>
              <span class="text-[9px] font-bold text-outline">INACTIVE</span>
            </div>
            <div class="flex flex-wrap gap-1 mb-2">
              <span class="bg-surface-container text-on-surface-variant text-[9px] px-1.5 py-0.5 rounded font-bold">Tutorial</span>
              <span class="bg-surface-container text-on-surface-variant text-[9px] px-1.5 py-0.5 rounded font-bold">Founder Story</span>
            </div>
            <div class="text-[10px] text-outline">LI: 2x/week · FB: 3x/week</div>
          </div>
        </div>
      </section>

      <!-- Active Triggers -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-sm font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">bolt</span> TRIGGERS ĐANG BẬT
        </h3>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between p-3 rounded-xl bg-teal-50 border border-teal-100">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-teal-600 text-lg">schedule</span>
              <span class="text-xs font-bold text-teal-800">Schedule</span>
            </div>
            <span class="bg-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded-full">ON</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-teal-50 border border-teal-100">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-teal-600 text-lg">trending_up</span>
              <span class="text-xs font-bold text-teal-800">Trend</span>
            </div>
            <span class="bg-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded-full">ON</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-surface-container border border-outline-variant/10">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-outline text-lg">analytics</span>
              <span class="text-xs font-bold text-on-surface-variant">Performance</span>
            </div>
            <span class="bg-surface-container text-outline text-[9px] font-bold px-2 py-0.5 rounded-full">OFF</span>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-teal-50 border border-teal-100">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-teal-600 text-lg">terminal</span>
              <span class="text-xs font-bold text-teal-800">Command</span>
            </div>
            <span class="bg-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded-full">ON</span>
          </div>
        </div>
      </section>

      <!-- Context -->
      <section class="oc-card flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-bold text-on-surface">CONTEXT ĐANG DÙNG</h3>
          <button class="text-primary font-bold text-xs">+ Thêm</button>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
            <span class="material-symbols-outlined text-outline text-lg">description</span>
            <div class="flex-1">
              <span class="text-xs font-bold text-on-surface">creator-profile.md</span>
              <span class="text-[10px] text-outline block">LinkedIn · 2h trước</span>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
            <span class="material-symbols-outlined text-outline text-lg">description</span>
            <div class="flex-1">
              <span class="text-xs font-bold text-on-surface">platform-rules.md</span>
              <span class="text-[10px] text-outline block">Global Rules</span>
            </div>
          </div>
        </div>
      </section>

      <!-- History -->
      <section class="oc-card flex flex-col gap-4">
        <h3 class="text-sm font-bold text-on-surface">LỊCH SỬ LỆNH</h3>
        <div class="flex flex-col gap-3">
          <div class="border-l-2 border-primary pl-3 cursor-pointer hover:border-teal-400 transition-colors">
            <span class="text-[9px] text-primary font-bold uppercase">10P TRƯỚC · CMD</span>
            <p class="text-xs text-on-surface-variant line-clamp-2 mt-0.5">Bài LinkedIn về AI Agent cho CTO startup</p>
            <span class="text-[9px] text-teal-600 font-bold">🟢 Fully Auto</span>
          </div>
          <div class="border-l-2 border-outline-variant/30 pl-3 cursor-pointer hover:border-primary transition-colors">
            <span class="text-[9px] text-outline font-bold uppercase">1H TRƯỚC · SCHEDULE</span>
            <p class="text-xs text-on-surface-variant line-clamp-2 mt-0.5">Caption video EngPath walkthrough</p>
            <span class="text-[9px] text-amber-600 font-bold">🟡 Auto+Review</span>
          </div>
        </div>
        <button class="text-primary font-bold text-xs underline underline-offset-4 self-start">Xem tất cả →</button>
      </section>
    </div>
  </div>
</div>
`; }