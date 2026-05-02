/**
 * 13-content-command-v2 — Stitch MCP Generated View (v2 with spec alignment)
 * Auto-injected from stitch-ref/13-content-command-v2.html
 */
export function renderContentCommand(data) { return `
<!-- Main Content Canvas -->
<main class="flex-1 p-0 ">
<!-- Bento Grid Layout -->
<div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- LEFT COLUMN (60%) -->
<div class="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
<!-- Main Editor Bento Box -->
<section class="oc-card flex flex-col gap-6 relative">
<div class="flex items-center justify-between">
<h2 class="font-h2 text-h2 text-on-surface m-0">SOẠN THẢO</h2>
<div class="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
<div class="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse"></div>
<span class="font-label-caps text-label-caps text-on-surface-variant">generate_only</span>
</div>
</div>
<!-- Platform Chips -->
<div class="flex flex-wrap gap-2">
<button class="font-label-caps text-label-caps bg-surface-container px-3 py-1.5 rounded-[4px] text-on-surface-variant hover:border-[#B9583F] hover:text-[#B9583F] transition-colors">LinkedIn</button>
<button class="font-label-caps text-label-caps bg-[#B9583F]/10 px-3 py-1.5 rounded-[4px] text-[#B9583F] transition-colors">TikTok</button>
<button class="font-label-caps text-label-caps bg-surface-container px-3 py-1.5 rounded-[4px] text-on-surface-variant hover:border-[#B9583F] hover:text-[#B9583F] transition-colors">Facebook</button>
<button class="font-label-caps text-label-caps bg-surface-container px-3 py-1.5 rounded-[4px] text-on-surface-variant hover:border-[#B9583F] hover:text-[#B9583F] transition-colors">YouTube</button>
<button class="font-label-caps text-label-caps bg-surface-container px-3 py-1.5 rounded-[4px] text-on-surface-variant hover:border-[#B9583F] hover:text-[#B9583F] transition-colors">Upwork</button>
</div>
<!-- Input Area -->
<div class="flex flex-col gap-2">
<textarea class="w-full bg-[#F7F3ED] border-0 border-b-2 border-[#EAE3D8] focus:border-[#B9583F] focus:ring-0 rounded-t-lg p-4 font-code-snippet text-code-snippet text-on-surface min-h-[200px] resize-y placeholder:text-outline" placeholder="Nhập lệnh cho AI..."></textarea>
</div>
<div class="flex justify-end mt-2">
<button class="bg-[#B9583F] text-on-tertiary font-body-sm text-body-sm font-medium rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-secondary transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="magic_button">magic_button</span>
 Tạo nội dung
 </button>
</div>
</section>
<!-- Revision Bento Box -->
<section class="oc-card flex flex-col gap-4">
<div class="flex items-center justify-between border-b border-[#EAE3D8] pb-4">
<h3 class="font-h2 text-lg font-medium text-on-surface">CHỈNH SỬA LẠI</h3>
<div class="flex items-center gap-3">
<button class="text-outline hover:text-on-surface transition-colors p-1"><span class="material-symbols-outlined text-sm" data-icon="arrow_back_ios">arrow_back_ios</span></button>
<span class="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-1 rounded">v2</span>
<button class="text-outline hover:text-on-surface transition-colors p-1"><span class="material-symbols-outlined text-sm" data-icon="arrow_forward_ios">arrow_forward_ios</span></button>
</div>
</div>
<div class="bg-surface-container-low p-4 rounded-lg flex gap-3 items-start">
<span class="material-symbols-outlined text-[#B9583F] mt-0.5 text-[20px]" data-icon="info">info</span>
<p class="font-body-sm text-body-sm text-on-surface-variant m-0">AI có thể sai. Gõ prompt chỉnh sửa để sửa lại kết quả.</p>
</div>
<textarea class="w-full bg-[#F7F3ED] border-0 border-b-2 border-[#EAE3D8] focus:border-[#B9583F] focus:ring-0 rounded-t-lg p-4 font-code-snippet text-code-snippet text-on-surface min-h-[100px] resize-y placeholder:text-outline" placeholder="Ví dụ: Viết ngắn hơn, đổi giọng chuyên nghiệp hơn..."></textarea>
<div class="flex justify-end">
<button class="border border-[#B9583F] text-[#B9583F] bg-transparent font-body-sm text-body-sm font-medium rounded-lg px-6 py-2.5 flex items-center gap-2 hover:bg-[#B9583F]/5 transition-colors">
 Áp dụng chỉnh sửa
 </button>
</div>
</section>
</div>
<!-- RIGHT SIDEBAR (40%) -->
<div class="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
<!-- Skills Section -->
<section class="oc-card flex flex-col gap-4">
<h3 class="font-h2 text-lg font-medium text-on-surface">KỸ NĂNG</h3>
<div class="flex flex-wrap gap-2">
<div class="font-label-caps text-label-caps bg-surface-variant px-2.5 py-1 rounded-[4px] text-on-surface-variant flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]" data-icon="bolt">bolt</span>
 content-creator
 </div>
<div class="font-label-caps text-label-caps bg-surface-variant px-2.5 py-1 rounded-[4px] text-on-surface-variant flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]" data-icon="bolt">bolt</span>
 social-content
 </div>
<div class="font-label-caps text-label-caps bg-surface-variant px-2.5 py-1 rounded-[4px] text-on-surface-variant flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]" data-icon="shield">shield</span>
 avoid-ai-writing
 </div>
</div>
</section>
<!-- Context Section -->
<section class="oc-card flex flex-col gap-4">
<div class="flex items-center justify-between">
<h3 class="font-h2 text-lg font-medium text-on-surface">NGỮ CẢNH</h3>
<button class="text-[#B9583F] hover:bg-[#B9583F]/10 p-1.5 rounded-full transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
</button>
</div>
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:border-[#B9583F] transition-colors cursor-pointer group">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-outline group-hover:text-[#B9583F] transition-colors" data-icon="description">description</span>
<span class="font-code-snippet text-code-snippet text-on-surface">creator-profile.md</span>
</div>
<span class="material-symbols-outlined text-outline text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="open_in_new">open_in_new</span>
</div>
<div class="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:border-[#B9583F] transition-colors cursor-pointer group">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-outline group-hover:text-[#B9583F] transition-colors" data-icon="description">description</span>
<span class="font-code-snippet text-code-snippet text-on-surface">platform-rules.md</span>
</div>
<span class="material-symbols-outlined text-outline text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="open_in_new">open_in_new</span>
</div>
</div>
</section>
<!-- History Section -->
<section class="oc-card flex flex-col gap-4">
<h3 class="font-h2 text-lg font-medium text-on-surface">LỊCH SỬ</h3>
<div class="flex flex-col gap-4">
<div class="flex flex-col gap-1.5 border-l-2 border-[#EAE3D8] pl-3 hover:border-[#B9583F] transition-colors cursor-pointer">
<span class="font-label-caps text-[10px] text-outline">10 PHÚT TRƯỚC</span>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Viết một bài đăng ngắn gọn giới thiệu tính năng mới của OpenClaw Ops cho nhóm đối tượng kỹ thuật viên...</p>
</div>
<div class="flex flex-col gap-1.5 border-l-2 border-[#EAE3D8] pl-3 hover:border-[#B9583F] transition-colors cursor-pointer">
<span class="font-label-caps text-[10px] text-outline">1 GIỜ TRƯỚC</span>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Chỉnh sửa lại kịch bản video TikTok về quản lý thời gian, làm cho nhịp độ nhanh hơn và thêm call-to-action mạnh mẽ...</p>
</div>
</div>
<button class="font-label-caps text-label-caps text-[#B9583F] underline underline-offset-4 mt-2 self-start hover:text-secondary transition-colors">XEM TẤT CẢ</button>
</section>
</div>
</div>
</main>
<!-- Bottom Nav Bar (Mobile Only) -->

`; }
