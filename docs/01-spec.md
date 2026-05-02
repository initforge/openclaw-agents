# 01. Spec

File này mô tả business logic và operational logic của OpenClaw Ops.

Người non-tech đọc file này phải hiểu hệ thống làm gì, khi nào cần người duyệt, và nếu có lỗi thì kiểm tra đâu trước.

## 01.1. Mục Tiêu Sản Phẩm

OpenClaw Ops không phải bot tự chạy.

OpenClaw Ops là bàn điều khiển vận hành agent:

1. Nhận dữ liệu đa nguồn: Telegram, Zalo, Facebook, và Web crawling.
2. Tự động hoá hoàn toàn (Autonomous): Quét, chấm điểm, và thực thi (vào lệnh, comment, post bài) mà không cần người duyệt nếu đã có Instruction/Policy.
3. Giải thích lý do bằng dữ liệu (Evidence-based): Tại sao AI chọn lead này? Tại sao vào lệnh kia?
4. Đẩy thông báo theo mức rủi ro (Risk-based notifications).
5. Duy trì ngữ cảnh (Memory & Context): Học từ profile, bài viết cũ và kết quả quá khứ để tinh chỉnh hành vi.

Business outcome:

- Giảm thao tác lặp lại.
- Không bỏ sót việc cần chú ý.
- Cho AI tự động hóa việc đã có guardrail rõ.
- Có bằng chứng/audit khi cần review lại.

## 01.2. Agent Scope

### 01.2.1. Trading Signal Agent

Business logic:

- Theo dõi tín hiệu trading từ Telegram, Zalo Web (qua quét QR auth) hoặc manual input.
- Phân biệt tín hiệu mới với update, chốt lời, đóng lệnh hoặc noise.
- Hoạt động tự động 100% (Full-Auto): Tự vào lệnh, rải lệnh (layering), sửa SL/TP, partial close hoặc close lệnh.
- Web Admin quản lý 5 cấu phần chính: Desk, Strategy (Chiến lược đi vốn/rải lệnh), Signal Stream (Luồng tín hiệu trực quan), Connections (Cầu nối MT5/Zalo/Tele) và History.
- Lệnh đi qua Strategy Check: nếu vi phạm quy tắc vốn/rủi ro thì Hard Reject, không có cơ chế duyệt lệnh thủ công.

Technical logic:

- Input: raw Telegram/Zalo message, message edit, manual pasted signal.
- AI Model: Đọc hiểu ngữ cảnh tin nhắn (kể cả lệnh mập mờ như "cắt nửa gồng tiếp", "dời SL hòa vốn").
- State: Lưu signal, vị thế (position) chia theo từng layer, execution, MT5 sync status.
- Execution: Đi thẳng qua MT5 bridge/EA, không có cơ chế "Pending Review" chờ duyệt.

Mode vận hành:

```text
observe       chỉ đọc và log
paper         mô phỏng để test rule/source
auto_guarded  tự vào lệnh thật nếu pass toàn bộ rule/risk guard
paused        dừng xử lý action, vẫn có thể lưu raw input
```

`paper` không phải bản chất sản phẩm cuối. Nó là mode test. Mode mục tiêu là `auto_guarded`.

Không được:

- real trade nếu thiếu stop loss
- real trade nếu source hoặc account đang bị pause
- real trade nếu vượt risk limit, daily loss cap, max exposure hoặc news blackout
- dùng broker key có quyền rút tiền
- dùng AI-only decision để vào lệnh

### 01.2.2. Autonomous Growth Agent (The Hunter)

Business logic:

- **Cơ chế Thợ Săn (Hunting)**: Theo dõi các nguồn (Groups/Pages) được chỉ định + Tự động khám phá các nguồn liên quan.
- **Phân tích Lead (Hunter Analysis)**: AI không chỉ phân loại mà còn đưa ra bằng chứng (Evidence), phân tích tại sao họ cần sản phẩm, và chân dung đối tượng (Persona).
- **Phản hồi Tự động (Autonomous Response)**: Ưu tiên tốc độ tối đa. AI tự động comment tiếp cận ngay khi phát hiện lead nóng (Hot Lead) dựa trên Instruction đã cài đặt, thay vì chờ người duyệt.
- **Đa tài khoản (Multi-Account Auth)**: Cho phép kết nối và quản lý nhiều tài khoản Facebook. Phân bổ nhiệm vụ thông minh (ví dụ: Tài khoản A chuyên Group X, Tài khoản B chuyên Group Y).
- **Chiến lược & Kịch bản**: Người dùng không duyệt comment lẻ mà thiết lập kịch bản (Scenarios) và chỉ dẫn (Instructions) để AI tự vận hành.
- **Proof-based Conversing**: Sử dụng kho Case Study (Proof) để bàn luận chuyên sâu với khách hàng ngay trong comment, đính kèm ảnh và số liệu thực tế.
- **Hành trình Khách hàng**: Lưu vết từ lúc comment dạo đến khi trở thành "Khách hàng thân thiết", popup hiển thị chi tiết lịch sử tương tác.

Technical logic:

- **Input**: watched sources, suggested sources, post snapshots, multi-account browser sessions, context proof.
- **Hunter Engine**: Chống trùng lặp (Deduplication) để tránh quét/comment đè lên nhau. Phân bổ load cho các nick Facebook.
- **State**: Lead hunting evidence, persona analysis, comment history, response-time metrics (tốc độ AI phản hồi), account reputation.

Mode phản hồi:

```text
monitor_only        chỉ theo dõi và log
autonomous_hunt     AI tự quét và tự comment theo Instruction (Mặc định)
strategic_command   người dùng can thiệp sửa Instruction/Scenario
paused              dừng mọi hoạt động
```

Rule quan trọng:

- **Speed is King**: Lead nóng phải được AI xử lý trong vòng dưới 2 phút.
- **Load Balancing**: Tự động xoay tua account để tránh bị Facebook đánh dấu spam.
- **No Spamming**: Mỗi lead chỉ được tiếp cận bởi 1 nick duy nhất với nội dung độc bản (unique).

Không được:

- auto-comment hàng loạt trên group không có quyền hoặc vi phạm điều khoản nền tảng
- lặp comment y hệt
- né account/proxy
- scrape trái luật nền tảng
- gửi Zalo/DM tự động cho người chưa consent theo kiểu spam
- dùng nhiều account để né rate limit hoặc né khóa

### 01.2.3. Autonomous Media Agent (The Factory)

Business logic:

- **Quản lý Toàn diện (Total Manager)**: Một thực thể AI quản lý trọn bộ các trang mạng xã hội. AI tự đưa ra quyết định sản xuất nội dung dựa trên profile và xu hướng của từng MXH.
- **Content Plan Tự Động (Autonomous Planning)**: AI chủ động lập kế hoạch nội dung theo:
    - **Schedule trigger**: Tần suất đăng bài cố định (VD: 3x/tuần LinkedIn, 1x/ngày TikTok) — user cấu hình trước.
    - **Trend trigger**: Khi AI phát hiện trend mới liên quan đến content pillar, tự tạo content mới.
    - **Performance trigger**: Khi content cũ underperform, AI tự đề xuất content thay thế.
    - **Command trigger**: User gõ lệnh trong Command tab — AI tạo content ngay lập tức.
- **Xưởng Video (The Studio)**: Sản xuất video ngay trong workspace, hỗ trợ nhiều loại:
    - **Walkthrough**: User cung cấp URL → AI crawl nội dung → tạo video hướng dẫn bằng Remotion.
    - **Viral Clip**: AI nghiên cứu viral pattern → generate script + render video ngắn (TikTok/Reels).
    - **Product Showcase**: AI tạo video giới thiệu sản phẩm từ content package và asset.
    - **Testimonial Edit**: AI cắt ghép video testimonial từ footage có sẵn.
- **Ngữ cảnh Sâu (Deep Context)**: AI chạy Playwright Cronjob để quét toàn bộ profile, bài viết cũ, insights của từng nền tảng nhằm thấu hiểu phong cách và kiến thức nền tảng.
- **Pipeline Tự Hành**: Kanban flow hoàn toàn autonomous: AI tạo draft → tự đẩy qua review → tự schedule → tự publish nếu policy cho phép. User có thể can thiệp bất kỳ bước nào.

**Publish Mechanism Options**:

- **Official API**: Dùng OAuth của từng nền tảng (LinkedIn, YouTube) — ưu tiên khi có API chính chủ.
- **Browser-Assisted**: Dùng Playwright để đăng bài khi không có official API hoặc API không đủ chức năng.
- **Handoff Mode**: AI để content ở trạng thái "Ready" và thông báo user để user tự đăng.

Control options user cài được:

```text
Autonomy Level
  fully_auto        AI tạo, review, schedule, publish mà không cần user
  auto_with_review  AI tạo + schedule, chờ user review trước khi publish
  auto_no_publish   AI tạo + draft, không tự đăng
  manual_only       User tạo và đăng hoàn toàn

Content Triggers
  schedule          AI tạo theo tần suất cố định (user cấu hình)
  trend             AI tạo khi phát hiện trend liên quan
  performance       AI tạo khi content cũ underperform
  command           AI tạo khi user gõ lệnh

Video Production Types
  walkthrough       URL → crawl → script → render
  viral_clip        AI research → script → render
  product_showcase  content package + asset → render
  testimonial_edit  footage → AI edit → render

Publish Method
  official_api      OAuth platform API
  browser_assisted  Playwright handoff
  draft_only        Không đăng, chờ user
```

Rule bắt buộc:

- Auto publish CHỈ khi `Autonomy Level` = `fully_auto` và `Instruction` đã được cấu hình đầy đủ.
- Mỗi content card phải ghi rõ: trigger_type (schedule|trend|performance|command), platform, autonomy_level khi tạo.
- Video render job phải có output preview trước khi publish.
- Browser-assisted publish chỉ dùng cho nền tảng không có official API hoặc API không hỗ trợ đầy đủ.
- Context capture phải ghi rõ: scope, purpose, retention. Không capture ngoài scope.

Không được:

- auto publish nếu `Autonomy Level` = `auto_with_review` hoặc thấp hơn và content chưa được duyệt.
- bypass cơ chế bảo mật nền tảng (CAPTCHA, Login) một cách bất thường.
- render video hàng loạt mà không có mục tiêu marketing rõ ràng.
- dùng nhiều account để né rate limit hoặc né khóa nền tảng.

## 01.3. Product Surfaces

### 01.3.1. Web Admin

Business role:

- Là nơi làm việc chính.
- Cho người vận hành xem tình trạng hệ thống.
- Cho phép duyệt việc rủi ro.
- Cho phép sửa config mà không cần sửa code.

Mỗi agent là một workspace riêng, không dùng chung màn nghiệp vụ.

Trạng thái UI hiện tại: đã xoá toàn bộ `apps/web-admin`. Sẽ dựng lại từ đầu sau khi có ảnh tham chiếu/MCP design.

Workspace:

```text
Trading
Facebook Leads
Platform Content
```

Route dự kiến:

```text
/agents/trading/*
/agents/facebook-leads/*
/agents/platform-content/*
```

Màn ưu tiên khi redesign:

1. `Trading live desk`
2. `Trading risk and MT5 bridge`
3. `Facebook group lead radar`
4. `Facebook lead response desk`
5. `Platform content command center`
6. `Remotion video factory`
7. `Browser context collector`

UI navigation & Design Rules:

- **Triết lý Thiết Kế (The 3 Artworks)**: Web Admin không dùng giao diện dashboard cũ mà được chia thành 3 "Tác Phẩm Nghệ Thuật" riêng biệt:
  - **Trading (The Sovereign Vault)**: Theme Midnight Navy mờ ảo, tập trung vào mật độ dữ liệu và tốc độ xử lý.
  - **Facebook Leads (The Warm Radar)**: Theme Warm Light với Terracotta accents, cảm giác ấm cúng, tập trung đọc và phản hồi CRM.
  - **Platform Content (The Illuminated Studio)**: Theme Monochrome Minimalist, không gian sáng tạo tinh gọn như studio.
- **Quy tắc Không Viền (No-Line Rule)**: Tuyệt đối không dùng `border: 1px solid` để chia tách layout. Sử dụng Tonal Shifts (sự chênh lệch màu nền giữa background và surface) để tạo chiều sâu và phân lớp thông tin.
- **Bento Grid & Expandable Panels**: Xử lý mật độ dữ liệu lớn bằng cách đóng gói các form, bảng dữ liệu dài vào trong các `<details>` (Expandable Panels) hoặc thẻ Bento Grid bo góc lớn (`border-radius: 24px`), giúp UI luôn sạch sẽ và chỉ mở rộng khi cần.
- **Segmented Control**: Chuyển đổi giữa các tab nghiệp vụ thông qua Toggle Switch dạng viên thuốc (Pill-shape), mang lại cảm giác chạm vật lý mượt mà thay vì tab gạch chân thông thường.
- Ở đáy màn có workspace toggle 3 trạng thái giống light/dark toggle, nhưng chuyển giữa `Trading`, `Facebook Leads`, `Platform Content`. Toggle này chỉ dùng để đổi workspace, không chứa action hoặc menu con.

Screen/menu contract:

- Web Admin chỉ có 3 workspace chính, tương ứng 3 agent.
- Không tạo workspace `System`, `Ops`, `Admin`, `Settings` hoặc dashboard tổng hợp ngang hàng với 3 workspace. Các chức năng ops phụ như approval, audit, source health, phải được đặt trong menu của từng workspace liên quan.

Menu dự kiến (Tổng 16 màn hình):

```text
Trading (Sovereign Vault) — 5 tabs
  Desk            live signal/position desk, live MT5 sync, layer views, kill switch
  Strategy        cấu hình hệ số nhân (multiplier), rải lệnh (layering), gồng lời/SL, max lot, daily loss cap
  Signal Stream   timeline trực quan: tin nhắn gốc -> AI hiểu -> action đã chạy, nhóm theo thời gian/source/symbol
  Connections     quét QR Zalo, Telegram auth, MT5 bridge, quản lý channel
  History         lịch sử thực thi tự động (execution logs), đối soát DB vs MT5, lý do hard reject

Facebook Leads (Autonomous Growth) — 6 tabs
  Radar           "Thợ săn" lead: feed từ các group chỉ định + gợi ý, evidence-based cards, persona analysis.
  Respond         Trung tâm chiến lược: cài đặt Instruction/Scenario cho từng nick, bàn luận chiến thuật AI.
  Customers       CRM: popup/card chi tiết, lịch sử chốt đơn, customer value score.
  Sources         Quản lý nguồn: list link rút gọn, AI tự chia đối tượng, thống kê hiệu suất theo nguồn.
  Proof           Thư viện Case Study: đính kèm ảnh, video, thống kê tốc độ AI phản hồi cho từng case.
  Audit           Nhật ký hành động: bộ lọc như Trading, tra cứu lịch sử AI tự động comment/inbox.

Platform Content (Autonomous Factory) — 5 tabs
  Command         Prompt zone: gõ lệnh cho AI, chọn trigger, set autonomy level, quản lý content pillars.
  Pipeline        Kanban autonomous: AI tạo draft → auto/semi-auto review → schedule → publish. Hiển thị trigger_type và autonomy_level trên mỗi card.
  Video           Studio: chọn production type (walkthrough/viral_clip/product_showcase/testimonial_edit), trigger render, xem preview, chọn publish method.
  Context         Knowledge Hub: card-based context items từ Playwright crawl, scope/purpose/retention được enforce, dùng cho AI generate.
  Audit           Nhật ký hệ thống: content creation log, render log, publish log, trigger reasons, autonomy decisions.
```

Ghi chú thay đổi so với bản 17 màn:
- Packages và Publish gộp thành Pipeline vì là 2 giai đoạn liên tiếp của cùng 1 luồng.
- Content Command bổ sung context/skill loader và iterative AI editing.
- Proof bổ sung Playwright screenshot capture.
- Signal Stream bổ sung cơ chế nhóm dữ liệu (group by time/source/symbol).
- Content Agent có thể dùng Codex CLI trên VPS làm execution runtime thay vì setup API phức tạp.

### 01.3.2. Telegram Control

Business role:

- Remote control.
- Nhận thông báo quan trọng mà user không chủ động tạo ra.
- Pause/resume agent.
- Xem status gọn.

Technical rule:

- Bot không giữ business logic.
- Bot chỉ gọi API backend.
- Không gửi notification cho action user vừa chủ động bấm trên Web, ví dụ bấm tạo video Remotion.
- Có gửi notification cho action agent tự làm hoặc phát hiện ngoài ý định trực tiếp, ví dụ auto execute lệnh, source lỗi, account risk, lead nóng mới.
- Nếu thiếu context, message Telegram phải link về Web Admin.

Command tối thiểu:

```text
/status
/agents
/pause all
/pause trading
/pause facebook
/pause content
/resume trading
/resume facebook
/resume content
/risk
/today
/leads
/content
/video
/pending
/shutdown
```

## 01.4. Workflow Chung

Mọi workflow đi qua cùng một khung:

```text
input
  -> raw event
  -> parse/classify
  -> state update
  -> risk check
  -> approval nếu cần hoặc action nếu policy cho phép
  -> action hoặc draft
  -> audit log
```

Business rule:

- Không hành động nếu chưa được policy cho phép.
- Không để một lỗi parse biến thành hành động thật.
- Khi người dùng hỏi "vì sao hệ thống làm vậy", phải truy được audit.

Technical rule:

- Lưu raw input trước khi xử lý.
- Không dùng trí nhớ chat của AI làm source of truth.
- Event/state nằm trong DB/queue.
- Output AI phải validate được.

## 01.5. Approval

Approval chia làm 2 loại.

### 01.5.1. Policy Approval

Người vận hành duyệt trước các policy lớn:

1. Bật `auto_guarded`.
2. Đổi lot/risk cap.
3. Thêm source mới.
4. Đổi broker/account mapping.
5. Bật/tắt rule nguy hiểm.
6. Bật action type mới như partial close tự động.

### 01.5.2. Per-Order Approval

**Trading Agent không có Per-Order Approval.** 
Hệ thống Trading vận hành 100% Auto. Bất kỳ tín hiệu nào cũng đi qua luồng Strategy Check:
- Nếu hợp lệ: Bắn lệnh thẳng vào MT5.
- Nếu vi phạm (lot quá lớn, sai cấu trúc, nguồn không tin cậy): Hard Reject ngay lập tức và ghi vào History, không bắt người dùng duyệt tay.

Với Facebook Leads và Platform Content, public action mặc định dùng `draft_fast`/`publish_assisted`, chỉ auto khi surface hợp lệ và policy cho phép. Do đặc thù không phải real-time execution như Trading, các agent này vẫn giữ cơ chế Approval/Draft.

Approval phải hiện:

- input gốc
- hệ thống hiểu input ra sao
- confidence
- lý do đề xuất
- mức rủi ro
- hậu quả nếu approve
- lịch sử audit

Risk level:

```text
low       lưu, tag, summarize
medium    tạo draft, notify, pause source
high      execute trade, comment công khai, publish public, đổi config
critical  tắt kill switch, bật auto mode
```

## 01.6. Safety Và Evaluation

### 01.6.1. Trading

Trước khi bật `auto_guarded`:

```text
false_trade_signal_rate = 0
missing_hard_reject_rate = 0
event_class_accuracy >= 95%
paper_replay_days >= 14
max_daily_loss_configured = true
kill_switch_tested = true
```

Hard reject real execution:

- thiếu stop loss
- thiếu symbol/direction/entry
- symbol không map được
- source đang pause
- confidence thấp
- news blackout nếu policy cấm

Live auto guard bắt buộc:

- stop loss bắt buộc
- max lot per order
- max total exposure
- max trades per day
- daily loss cap
- source trust score
- duplicate signal guard
- spread/slippage guard
- broker reconciliation
- kill switch trên Web Admin và Telegram

### 01.6.2. Facebook

Trước khi bật bất kỳ auto/official reply:

```text
false_comment_candidate_rate <= 2%
duplicate_reply_rate <= 5%
platform_risk_policy_configured = true
account_cooldown_configured = true
```

Guard bắt buộc:

- không comment trùng ý/câu chữ
- cooldown theo source/account
- source risk score
- blacklist topic/user/group
- proof match nếu dùng claim "từng làm qua"
- không auto trên group/surface không có quyền rõ ràng

### 01.6.3. Platform Content

Trước official publish hoặc browser context capture rộng:

```text
false_publish_ready_rate = 0
missing_asset_detection_rate >= 95%
platform_policy_reviewed = true
browser_context_scope_configured = true
```

Guard bắt buộc:

- chọn kênh tích hợp tối ưu trong phạm vi hợp lệ; không mặc định official API nếu browser-assisted hợp lệ và hiệu quả hơn
- không bypass login/CAPTCHA/rate-limit
- context capture có scope, purpose và retention
- render job có output preview trước khi publish
- account risk alert nếu nền tảng cảnh báo automated behavior

## 01.7. Debug Nhanh Theo Triệu Chứng

| Vấn đề | Business check | Technical check |
| --- | --- | --- |
| Agent làm sai hành vi | mode có đúng không, policy có đổi không | `agent_configs`, config version, prompt/context pack |
| Trading parse sai | source có đổi format không | raw message, normalized message, parsed event, rulebook |
| Lệnh thật bị execute sai | có SL chưa, auto policy có đúng không | risk policy, execution guard, broker mapping, MT5 bridge log |
| Lead spam/sai đối tượng | pain point, lead score và blacklist đúng không | classifier result, duplicate check, source risk, template usage |
| Facebook account có nguy cơ khóa | có auto quá nhanh/trùng không | cooldown, source risk, action log, platform warning |
| Content publish nhầm | proof đã duyệt chưa, đúng platform chưa | proof status, platform account, publish gate, render/publish log |
| Browser context sai luật | source có cho phép không | browser context scope, robots/API availability, account session risk |
| AI cost tăng | task nào gọi model nhiều | `model_calls`, `cost_ledger`, `model_routes`, daily cap |
| Không audit được | approval có ghi đủ không | `approval_requests`, `approval_actions`, `audit_logs` |
