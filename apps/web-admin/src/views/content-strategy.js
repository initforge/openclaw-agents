/**
 * Content Strategy — Per-platform "Marketing Brain"
 */
export function renderContentStrategy() { return `
<div class="flex flex-col gap-8">
  <div>
    <h2 class="text-3xl font-bold text-on-surface mb-2">CHIẾN LƯỢC NỀN TẢNG</h2>
    <p class="text-sm text-on-surface-variant">Cài đặt "bộ óc" cho AI trên từng nền tảng. AI chỉ tự chạy khi Strategy đầy đủ.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <!-- LinkedIn — Full Auto -->
    <div class="oc-card flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600"><span class="material-symbols-outlined">person_pin_circle</span></div>
          <div>
            <h3 class="font-bold text-on-surface text-lg">LinkedIn</h3>
            <span class="text-[10px] font-bold text-teal-600 uppercase tracking-wider">🟢 Full Auto</span>
          </div>
        </div>
        <div class="oc-status oc-status-live scale-90">READY</div>
      </div>
      <div class="bg-surface-container/30 p-4 rounded-2xl border border-outline-variant/5">
        <span class="text-[10px] font-bold text-outline uppercase block mb-1">Brand Voice</span>
        <p class="text-xs text-on-surface-variant italic leading-relaxed">"Chuyên nghiệp nhưng gần gũi. Dùng ví dụ thực tế, tránh academic. Kể chuyện cá nhân."</p>
      </div>
      <div class="grid grid-cols-3 gap-3 text-center">
        <div class="bg-surface-container/20 rounded-xl p-3"><span class="text-xl font-bold text-on-surface block">4</span><span class="text-[9px] text-outline uppercase font-bold">Pillars</span></div>
        <div class="bg-surface-container/20 rounded-xl p-3"><span class="text-xl font-bold text-on-surface block">2</span><span class="text-[9px] text-outline uppercase font-bold">Audiences</span></div>
        <div class="bg-surface-container/20 rounded-xl p-3"><span class="text-xl font-bold text-on-surface block">8</span><span class="text-[9px] text-outline uppercase font-bold">Rules</span></div>
      </div>
      <details class="oc-card-expand bg-surface-container/10 -mx-1 rounded-xl">
        <summary class="px-4 py-3 text-xs font-bold text-primary cursor-pointer flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">expand_more</span> Xem chi tiết Strategy
        </summary>
        <div class="px-4 pb-4 flex flex-col gap-3">
          <div><span class="text-[9px] font-bold text-outline uppercase">Content Pillars</span>
            <div class="flex flex-wrap gap-1.5 mt-1">
              <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">AI in Education</span>
              <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">SaaS Builder</span>
              <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">Career Tips</span>
              <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">Case Study</span>
            </div>
          </div>
          <div><span class="text-[9px] font-bold text-outline uppercase">Posting Rules</span>
            <p class="text-xs text-on-surface-variant mt-1">3 bài/tuần · T2-T4-T6 lúc 8:00 · 60% Pillar 1, 40% khác</p>
          </div>
          <div><span class="text-[9px] font-bold text-outline uppercase">Do's</span>
            <div class="flex flex-col gap-1 mt-1">
              <span class="text-xs text-teal-700">✓ Luôn có CTA cuối bài</span>
              <span class="text-xs text-teal-700">✓ Dùng số liệu cụ thể</span>
              <span class="text-xs text-teal-700">✓ Kể chuyện cá nhân</span>
            </div>
          </div>
          <div><span class="text-[9px] font-bold text-outline uppercase">Don'ts</span>
            <div class="flex flex-col gap-1 mt-1">
              <span class="text-xs text-red-600">✗ Không quá 3 emoji</span>
              <span class="text-xs text-red-600">✗ Không nhắc đối thủ</span>
              <span class="text-xs text-red-600">✗ Không quá 1500 ký tự</span>
            </div>
          </div>
        </div>
      </details>
      <div class="flex gap-2 mt-auto">
        <button class="flex-1 py-2.5 bg-primary text-white font-bold text-xs rounded-xl">Chỉnh Strategy</button>
        <button class="flex-1 py-2.5 bg-surface-container text-on-surface font-bold text-xs rounded-xl">Xem Pipeline →</button>
      </div>
    </div>

    <!-- TikTok — Semi Auto -->
    <div class="oc-card flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-black flex items-center justify-center text-white"><span class="material-symbols-outlined">videocam</span></div>
          <div>
            <h3 class="font-bold text-on-surface text-lg">TikTok</h3>
            <span class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">🟡 Semi-Auto</span>
          </div>
        </div>
        <div class="oc-status oc-status-live scale-90">READY</div>
      </div>
      <div class="bg-surface-container/30 p-4 rounded-2xl border border-outline-variant/5">
        <span class="text-[10px] font-bold text-outline uppercase block mb-1">Brand Voice</span>
        <p class="text-xs text-on-surface-variant italic leading-relaxed">"Ngắn gọn, năng lượng cao, Gen-Z friendly. Hook trong 3 giây đầu."</p>
      </div>
      <div class="grid grid-cols-3 gap-3 text-center">
        <div class="bg-surface-container/20 rounded-xl p-3"><span class="text-xl font-bold text-on-surface block">2</span><span class="text-[9px] text-outline uppercase font-bold">Pillars</span></div>
        <div class="bg-surface-container/20 rounded-xl p-3"><span class="text-xl font-bold text-on-surface block">1</span><span class="text-[9px] text-outline uppercase font-bold">Audiences</span></div>
        <div class="bg-surface-container/20 rounded-xl p-3"><span class="text-xl font-bold text-on-surface block">6</span><span class="text-[9px] text-outline uppercase font-bold">Rules</span></div>
      </div>
      <div class="flex gap-2 mt-auto">
        <button class="flex-1 py-2.5 bg-primary text-white font-bold text-xs rounded-xl">Chỉnh Strategy</button>
        <button class="flex-1 py-2.5 bg-surface-container text-on-surface font-bold text-xs rounded-xl">Xem Pipeline →</button>
      </div>
    </div>

    <!-- Facebook — Not Setup -->
    <div class="oc-card flex flex-col gap-5 opacity-70">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500"><span class="material-symbols-outlined">groups</span></div>
          <div>
            <h3 class="font-bold text-on-surface text-lg">Facebook</h3>
            <span class="text-[10px] font-bold text-red-500 uppercase tracking-wider">🔴 Manual Only</span>
          </div>
        </div>
        <div class="oc-status oc-status-warn scale-90">CHƯA SETUP</div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center py-8 text-center">
        <span class="material-symbols-outlined text-4xl text-outline/30 mb-3">add_circle</span>
        <p class="text-sm text-on-surface-variant mb-1">Chưa có Strategy</p>
        <p class="text-xs text-outline">AI không thể tự tạo content cho platform này.</p>
      </div>
      <button class="w-full py-3 bg-primary/10 text-primary font-bold text-xs rounded-xl mt-auto">Bắt Đầu Setup →</button>
    </div>

    <!-- YouTube — Not Setup -->
    <div class="oc-card flex flex-col gap-5 opacity-70">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-red-500"><span class="material-symbols-outlined">smart_display</span></div>
          <div>
            <h3 class="font-bold text-on-surface text-lg">YouTube</h3>
            <span class="text-[10px] font-bold text-red-500 uppercase tracking-wider">🔴 Manual Only</span>
          </div>
        </div>
        <div class="oc-status oc-status-warn scale-90">CHƯA SETUP</div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center py-8 text-center">
        <span class="material-symbols-outlined text-4xl text-outline/30 mb-3">add_circle</span>
        <p class="text-sm text-on-surface-variant mb-1">Chưa có Strategy</p>
        <p class="text-xs text-outline">Cần setup trước khi AI có thể hoạt động.</p>
      </div>
      <button class="w-full py-3 bg-primary/10 text-primary font-bold text-xs rounded-xl mt-auto">Bắt Đầu Setup →</button>
    </div>

    <!-- Upwork — Not Setup -->
    <div class="oc-card flex flex-col gap-5 opacity-70">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><span class="material-symbols-outlined">work</span></div>
          <div>
            <h3 class="font-bold text-on-surface text-lg">Upwork</h3>
            <span class="text-[10px] font-bold text-red-500 uppercase tracking-wider">🔴 Manual Only</span>
          </div>
        </div>
        <div class="oc-status oc-status-warn scale-90">CHƯA SETUP</div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center py-8 text-center">
        <span class="material-symbols-outlined text-4xl text-outline/30 mb-3">add_circle</span>
        <p class="text-sm text-on-surface-variant mb-1">Chưa có Strategy</p>
        <p class="text-xs text-outline">Cần setup trước khi AI có thể hoạt động.</p>
      </div>
      <button class="w-full py-3 bg-primary/10 text-primary font-bold text-xs rounded-xl mt-auto">Bắt Đầu Setup →</button>
    </div>
  </div>
</div>
`; }
