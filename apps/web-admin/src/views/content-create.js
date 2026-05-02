/**
 * Content Create — Fixed Command with output panel + strategy ref
 */
export function renderContentCreate() { return `
<div class="flex flex-col gap-8">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <div class="lg:col-span-8 flex flex-col gap-6">
      <section class="oc-card flex flex-col gap-5">
        <h2 class="text-2xl font-bold text-on-surface">SOẠN NỘI DUNG</h2>
        <div class="flex flex-wrap gap-2">
          <button class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold ring-2 ring-blue-300 flex items-center gap-2"><span class="material-symbols-outlined text-sm">person_pin_circle</span> LinkedIn</button>
          <button class="bg-surface-container px-4 py-2 rounded-lg text-xs font-bold text-on-surface-variant flex items-center gap-2"><span class="material-symbols-outlined text-sm">videocam</span> TikTok</button>
          <button class="bg-surface-container px-4 py-2 rounded-lg text-xs font-bold text-on-surface-variant flex items-center gap-2"><span class="material-symbols-outlined text-sm">groups</span> Facebook</button>
        </div>
        <textarea class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary rounded-t-lg p-4 text-sm min-h-[120px] resize-y placeholder:text-outline" placeholder="Viết brief cho AI... VD: 'Bài LinkedIn về AI Agent cho CTO startup'"></textarea>
        <div class="flex justify-end"><button class="bg-primary text-white font-bold text-xs rounded-xl px-6 py-3 flex items-center gap-2"><span class="material-symbols-outlined text-sm">magic_button</span> Tạo nội dung</button></div>
      </section>
      <section class="oc-card flex flex-col gap-4 border-l-4 border-primary/30">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined text-primary">auto_awesome</span> KẾT QUẢ</h3>
          <span class="text-[10px] font-bold text-on-surface-variant bg-surface-variant px-2 py-1 rounded">v2</span>
        </div>
        <div class="bg-surface-container-low p-5 rounded-xl">
          <div class="flex items-center gap-2 mb-3">
            <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase">LinkedIn</span>
            <span class="bg-primary/10 text-primary px-2 py-0.5 rounded text-[9px] font-bold">Pillar: AI in Education</span>
          </div>
          <p class="text-sm text-on-surface leading-relaxed mb-2">Bạn đang quản lý team 10 người và mệt mỏi với việc review code thủ công mỗi ngày?</p>
          <p class="text-sm text-on-surface leading-relaxed mb-2">3 tháng trước, team mình cũng vậy. Cho đến khi thử AI code review:</p>
          <p class="text-sm text-on-surface leading-relaxed mb-2">→ Giảm 60% thời gian review<br>→ Bug rate giảm 40%</p>
          <p class="text-sm text-on-surface leading-relaxed">Comment "AI" để mình gửi chi tiết 👇</p>
          <div class="mt-3 pt-3 border-t border-outline-variant/10 text-[10px] text-outline">1.247 / 1.500 ký tự · Strategy: LinkedIn v3 · Context: creator-profile.md</div>
        </div>
        <div class="flex gap-3">
          <button class="flex-1 py-2.5 bg-surface-container text-on-surface font-bold text-xs rounded-xl flex items-center justify-center gap-2"><span class="material-symbols-outlined text-sm">content_copy</span> Copy</button>
          <button class="flex-1 py-2.5 bg-primary text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"><span class="material-symbols-outlined text-sm">arrow_forward</span> → Pipeline</button>
          <button class="flex-1 py-2.5 bg-secondary/10 text-secondary font-bold text-xs rounded-xl flex items-center justify-center gap-2"><span class="material-symbols-outlined text-sm">movie</span> → Studio</button>
        </div>
        <div class="flex gap-2"><input type="text" class="flex-1 bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-xs placeholder:text-outline" placeholder="Chỉnh sửa: 'ngắn hơn, thêm số liệu...'"><button class="bg-surface-container-high px-4 py-2.5 rounded-xl text-xs font-bold">Chỉnh lại</button></div>
      </section>
    </div>
    <div class="lg:col-span-4 flex flex-col gap-6">
      <section class="oc-card flex flex-col gap-3 border-t-4 border-blue-400">
        <div class="flex items-center justify-between"><h3 class="text-sm font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined text-blue-600">psychology</span> STRATEGY ĐANG DÙNG</h3><a class="text-[10px] text-primary font-bold">Sửa →</a></div>
        <div class="bg-blue-50/50 p-3 rounded-xl"><span class="text-[9px] font-bold text-blue-600 uppercase">LinkedIn · 🟢 Full Auto</span><p class="text-xs text-on-surface-variant italic mt-1">"Chuyên nghiệp nhưng gần gũi. Dùng ví dụ thực tế."</p></div>
        <div class="flex flex-wrap gap-1.5"><span class="bg-primary/8 text-primary text-[9px] font-bold px-2 py-0.5 rounded">AI in Education</span><span class="bg-primary/8 text-primary text-[9px] font-bold px-2 py-0.5 rounded">SaaS Builder</span></div>
        <div class="text-[10px] text-outline">Target: CTO startup 25-35 · Max 1500 ký tự</div>
      </section>
      <section class="oc-card flex flex-col gap-3">
        <h3 class="text-sm font-bold text-on-surface">CONTEXT ĐANG DÙNG</h3>
        <div class="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low"><span class="material-symbols-outlined text-outline text-lg">description</span><div class="flex-1"><span class="text-xs font-bold text-on-surface">creator-profile.md</span><span class="text-[10px] text-outline block">LinkedIn · 2h trước</span></div></div>
        <div class="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low"><span class="material-symbols-outlined text-outline text-lg">description</span><div class="flex-1"><span class="text-xs font-bold text-on-surface">platform-rules.md</span><span class="text-[10px] text-outline block">Global Rules</span></div></div>
      </section>
      <section class="oc-card flex flex-col gap-3">
        <h3 class="text-sm font-bold text-on-surface">LỊCH SỬ LỆNH</h3>
        <div class="border-l-2 border-outline-variant/20 pl-3 cursor-pointer"><span class="text-[9px] text-outline font-bold">10P TRƯỚC · LINKEDIN</span><p class="text-xs text-on-surface-variant line-clamp-2">Viết bài về AI Agent cho CTO startup...</p></div>
        <div class="border-l-2 border-outline-variant/20 pl-3 cursor-pointer"><span class="text-[9px] text-outline font-bold">1H TRƯỚC · TIKTOK</span><p class="text-xs text-on-surface-variant line-clamp-2">Caption video EngPath walkthrough...</p></div>
      </section>
    </div>
  </div>
</div>
`; }
