# 03. Decisions

File này ghi quyết định đã chốt. Quyết định mới thêm vào cuối file theo số tiếp theo.

## 03.1. ADR-0001: Cấu Trúc Tài Liệu Cũ

Trạng thái: superseded

Quyết định cũ chia docs theo nhiều folder đánh số.

Đã thay thế bằng ADR-0010.

## 03.2. ADR-0002: Runtime Chính Đặt Trên VPS

Trạng thái: accepted

Hệ thống cần runtime 24/7, queue, worker và DB ổn định. VPS là runtime chính cho MVP.

Cloudflare dùng cho DNS, Tunnel/WAF, AI Gateway, Workers AI và có thể thêm Queues/Durable Objects sau.

## 03.3. ADR-0003: Human Approval Trước Hành Động Rủi Ro

Trạng thái: amended by ADR-0011

Quyết định ban đầu bắt buộc human approval trước:

- mọi real trade execution
- mọi reply/comment công khai trên Facebook
- mọi publish public từ Platform Content
- mọi thay đổi config rủi ro cao

ADR-0011 thay đổi riêng phần trading: khi bật `auto_guarded`, real trade không cần per-order approval nếu pass toàn bộ deterministic guard.

ADR-0012 thay đổi phần Facebook Lead và Platform Content: auto chỉ được bật trên surface hợp lệ/được phép; group ngoài, browser session cá nhân và nền tảng rủi ro cao dùng `draft_fast`, `assisted_comment`, `publish_assisted` hoặc handoff để giữ tốc độ nhưng không biến hệ thống thành spam automation.

## 03.4. ADR-0004: Cloudflare Là AI Router, Không Phải Social Proxy

Trạng thái: accepted

Cloudflare Workers AI/AI Gateway được dùng để giảm chi phí AI, route model và fallback.

Không mô tả hoặc dùng Cloudflare như proxy để né Facebook/Telegram.

## 03.5. ADR-0005: Giữ Boundary Để Tách Agent

Trạng thái: accepted

Business logic của agent không nằm trong Web Admin hoặc controller.

Mỗi agent phải có:

- input/output rõ
- config riêng
- event schema chung
- route namespace riêng
- domain package riêng nếu logic đủ lớn

## 03.6. ADR-0006: Initial Tech Stack Và Workspace

Trạng thái: accepted

Workspace dùng monorepo:

- `apps/*` cho entrypoint chạy thật
- `packages/*` cho contracts, db, agent-core, ai-router và domain logic

Có thể tách agent riêng sau này mà không đổi toàn bộ workspace.

## 03.7. ADR-0007: Route Admin Theo Namespace Agent

Trạng thái: accepted

Route quản trị agent dùng:

```text
/agents/<agent-slug>/*
```

Lý do:

- dễ tách từng agent thành app riêng
- dễ phân quyền
- dễ refactor
- tránh trộn trading, leads và content vào một settings chung chung

## 03.8. ADR-0008: Web Admin Có 3 Workspace Nghiệp Vụ Và System

Trạng thái: superseded by ADR-0013

Web Admin dùng 4 vùng cấp cao:

```text
System
Trading
Facebook Leads
Platform Content
```

Quyết định này giữ đúng ý "3 agent nghiệp vụ", nhưng cách đặt System ngang hàng workspace làm UI bị hiểu nhầm. ADR-0013 thay thế bằng 3 workspace agent độc lập; ops/system tools chỉ là màn phụ.

## 03.9. ADR-0009: VPS Background Jobs Và Remote Surfaces

Trạng thái: accepted

Tác vụ nặng chạy trên VPS. Remote control đi qua Web Admin, Telegram và OpenClaw/MCP.

Không để UI/browser automation trở thành runtime 24/7 chính.

## 03.10. ADR-0010: Docs Tuyến Tính Tối Giản

Trạng thái: accepted

Docs nằm trực tiếp trong `docs/`, đánh số theo thứ tự đọc:

```text
00-overview.md
01-spec.md
02-engineering.md
03-decisions.md
04-research.md
```

Lý do:

- đọc tuyến tính, dễ lướt
- không phải mở nhiều index
- mỗi file có số thứ tự rõ
- business logic và technical logic nằm đúng nơi
- nếu không phải quyết định hoặc research thì chỉ chọn giữa spec và engineering

## 03.11. ADR-0011: Trading Agent Hướng Tới Auto Guarded Execution Qua MT5

Trạng thái: accepted

Trading Agent không chỉ là assistant đề xuất lệnh. Bản chất sản phẩm là tự động hóa quy trình trading sau khi user cấu hình rule/risk trên Web Admin.

Quyết định:

- Mode mục tiêu là `auto_guarded`.
- `paper` là mode test/evaluation, không phải đích cuối.
- Real execution không cần per-order approval nếu signal pass toàn bộ deterministic guard.
- Human approval chuyển sang cấp policy/config: bật auto, đổi lot, đổi risk cap, thêm source, đổi broker mapping.
- Per-order approval vẫn dùng cho anomaly, source trust thấp, confidence thấp hoặc vượt ngưỡng risk.
- Execution đi qua MT5 bridge/EA, không dùng UI automation.

Guard bắt buộc:

- stop loss bắt buộc
- max lot per order
- max exposure
- max trades per day
- daily loss cap
- duplicate signal guard
- spread/slippage guard
- broker reconciliation
- kill switch Web Admin/Telegram

## 03.12. ADR-0012: Lead Và Platform Automation Speed-First Nhưng Không Né Nền Tảng

Trạng thái: accepted

Lead Agent cần tốc độ cao, nhưng không được biến thành spam bot hoặc cơ chế né khóa account.

Quyết định:

- Facebook Lead Agent theo dõi group/source, tạo comment/Zalo draft theo pain point và proof context thật.
- Auto comment chỉ được bật trên surface hợp lệ: owned page/group, API hợp lệ, hoặc nơi có quyền rõ ràng.
- Với group bên ngoài hoặc browser session cá nhân, mode mặc định là `draft_fast` hoặc `assisted_comment`.
- Zalo auto-send chỉ dùng với official/allowed channel hoặc contact đã consent.
- Platform Content Agent quản lý content, video Remotion, publish state và browser context.
- Browser automation chỉ dùng để context capture/handoff trong phạm vi hợp lệ, không bypass login/CAPTCHA/rate-limit.
- AI provider/account được cấu hình qua router, có thể nhiều account do user sở hữu, nhưng không dùng để né limit hoặc vi phạm điều khoản.

## 03.13. ADR-0013: Web Admin Chỉ Có 3 Workspace Agent

Trạng thái: superseded by ADR-0014

Web Admin dùng đúng 3 workspace chính:

```text
Trading
Facebook Leads
Platform Content
```

Không còn workspace System dùng chung cho nghiệp vụ. Các màn health, logs, model routing, source inventory và approvals tổng hợp vẫn có thể tồn tại như ops tools, nhưng không được trình bày như agent thứ tư.

Quyết định UI cũ:

- root app vào thẳng Trading desk
- mỗi workspace có menu riêng theo nghiệp vụ của agent đó
- bottom switcher dùng để chuyển nhanh giữa 3 workspace
- Platform Content thay thế tên Content Ops trong UI/spec/contract
- Telegram chỉ báo việc quan trọng không do user chủ động khởi tạo, ví dụ AI tự vào lệnh, lead nóng phản hồi, worker lỗi, broker mất sync

ADR-0014 giữ đúng 3 workspace, nhưng xoá scaffold UI hiện tại và thay hướng navigation từ bottom switcher dạng chip sang workspace toggle 3 trạng thái cộng với menu riêng của từng workspace.

## 03.14. ADR-0014: Xoá UI Scaffold Cũ Và Chờ Redesign Theo MCP Design

Trạng thái: accepted

Web Admin scaffold cũ bị xoá vì chưa đúng ý product:

- quá giống dashboard/global admin
- còn cảm giác có menu chung
- chưa thể hiện 3 màn hình độc lập
- bottom switcher chưa đúng dạng toggle 3 trạng thái như yêu cầu

Quyết định:

- xoá toàn bộ `apps/web-admin`, không giữ blank route hoặc placeholder UI
- redesign sau dựa trên ảnh tham chiếu và MCP design
- thiết kế mới phải có 3 màn hình rõ rệt: Trading, Facebook Leads, Platform Content
- mỗi màn có thanh menu riêng ở dưới
- chỉ chuyển giữa 3 màn bằng workspace toggle 3 trạng thái ở dưới, kiểu light/dark toggle nhưng có 3 option
- không dùng sidebar/global menu chung

## 03.15. ADR-0015: Ops Tools Nằm Trong Menu Từng Workspace

Trạng thái: accepted

Web Admin vẫn chỉ có 3 workspace chính:

```text
Trading
Facebook Leads
Platform Content
```

Quyết định:

- Không tạo workspace `System`, `Ops`, `Admin`, `Settings` hoặc dashboard tổng hợp ngang hàng với 3 workspace.
- Approval, audit, logs, model cost, source health, notification policy và config phải nằm trong menu của từng workspace liên quan.
- Mỗi workspace có bottom menu riêng, route riêng và scope dữ liệu riêng.
- Shared component và shared table được phép dùng lại trong code, nhưng không được biến thành màn nghiệp vụ dùng chung ở UI.
- Notification và Telegram deep link phải trỏ về workspace cụ thể.

Lý do:

- Người vận hành đang làm việc theo agent, không theo khái niệm hệ thống chung.
- Trading, Facebook Leads và Platform Content có risk model khác nhau, không nên dùng một màn ops chung làm mất ngữ cảnh.
- Production safety phụ thuộc vào việc approval/audit/config luôn nhìn thấy trong đúng workspace trước khi bật action rủi ro.

Hệ quả:

- Số màn MVP tăng lên khoảng 16 tab/màn trong 3 workspace, nhưng giảm rủi ro deploy vì mỗi tab có contract rõ.
- Cần workspace-scoped API, audit, approval, notification, model cost và feature flag.
- Nếu có event system-level không map được workspace, UI chỉ hiển thị trong audit của workspace đang xem với nhãn `system`, không tạo workspace thứ tư.

## 03.16. ADR-0016: Platform Content Hoàn Toàn Autonomous Với Control Options

Trạng thái: accepted

Platform Content Agent cần autonomous hoàn toàn nhưng vẫn có control options rõ ràng.

Quyết định:

- **4 Content Triggers**: schedule, trend, performance, command.
- **4 Autonomy Levels**: fully_auto, auto_with_review, auto_no_publish, manual_only.
- **4 Video Production Types**: walkthrough, viral_clip, product_showcase, testimonial_edit.
- **3 Publish Methods**: official_api, browser_assisted, handoff.
- Mỗi content card ghi rõ trigger_type và autonomy_level để audit và control.

Lý do:

- User muốn autonomous-first nhưng vẫn kiểm soát được mức độ tự động.
- schedule trigger đảm bảo tần suất đăng bài ổn định mà không cần user chủ động.
- autonomy_level cho phép user chọn "AI tạo nhưng tôi duyệt trước khi đăng" hoặc "AI tạo và đăng không cần tôi".
- browser_assisted cover cho nền tảng không có official API đầy đủ (VD: TikTok).

Hệ quả:

- Content Factory cần background jobs cho schedule, trend detection, performance analysis.
- Pipeline Kanban UI cần hiển thị trigger_type và autonomy_level trên mỗi card.
- Video tab cần production_type selector và publish_method selector.
- Context tab cần enforce scope/purpose/retention, không chỉ là label.
