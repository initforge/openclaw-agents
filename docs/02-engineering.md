# 02. Engineering

File này mô tả technical architecture, code boundaries, runtime, data, deploy và test.

Đọc file này sau [01-spec.md](./01-spec.md) khi chuẩn bị sửa code.

## 02.1. Nguyên Tắc Code

1. Apps mỏng.
2. Business logic nằm trong packages.
3. UI không tự định nghĩa schema riêng.
4. Schema/event chung nằm trong `packages/contracts`.
5. Worker xử lý queue, model call, DB write và notification.
6. Không scaffold code nếu product, workflow, state, safety và deploy chưa rõ.

## 02.2. Repo Shape

```text
apps/
  api
  telegram-control-bot
  telegram-listener
  worker

packages/
  contracts
  db
  agent-core
  ai-router
  domain-trading
  domain-leads
  domain-content
  platform-browser
  remotion-renderer
  signal-parser
  risk-engine
```

Business mapping:

- Trading business rules: `domain-trading`, `signal-parser`, `risk-engine`.
- Lead business rules: `domain-leads`.
- Platform/content business rules: `domain-content`.
- Browser context capture: `platform-browser` hoặc module tương đương.
- Remotion video generation: `remotion-renderer` hoặc worker job tương đương.
- Shared agent orchestration: `agent-core`.
- Shared schemas: `contracts`.

## 02.3. Runtime

MVP chạy chính trên VPS:

```text
apps/api
apps/telegram-control-bot
apps/telegram-listener
apps/worker
PostgreSQL
Redis hoặc queue tương đương
```

Cloudflare dùng cho:

- DNS/Tunnel/WAF.
- AI Gateway.
- Workers AI.

Cloudflare Workers AI là AI provider/router, không phải social proxy.

## 02.4. Event Pipeline

Runtime flow:

```text
ingestion service (Telegram listener / Zalo Web listener)
  -> raw event table
  -> queue/stream
  -> parser/classifier worker (AI model)
  -> state worker
  -> strategy check worker (Trading) / approval worker (Leads, Content)
  -> execution worker (MT5 bridge) / notification worker
```

Leads và Content:
- **Autonomous Path**: Nếu Instruction/Scenario đã được cấu hình và lead/content pass risk check -> Execution worker tự động thực thi (comment/post) mà không chờ duyệt.
- **Strategic Command Path**: Người dùng cập nhật Instruction/Scenario -> AI điều chỉnh hành vi của toàn bộ Agent túc trực (Pages Manager).

Event tiêu biểu:

```text
source.message.received
source.message.edited
source.zalo.session_started
source.zalo.session_expired
parser.signal.parsed
parser.signal.rejected
trade.state.updated
trade.strategy_check.passed
trade.strategy_check.rejected
trade.execution.requested
trade.execution.result
trade.reconciliation.mismatch
lead.hunt.started
lead.hunt.matched
lead.hunt.deduplicated
lead.autonomous_comment.executed
lead.account.task_assigned
content.factory.crawling_started
content.factory.context_synced
content.studio.render_started
content.studio.viral_logic_applied
content.manager.autonomous_post_scheduled
approval.resolved
system.error
```

Technical rule:

- Raw event phải được lưu trước khi parse.
- Parser/classifier không tự ghi action nguy hiểm.
- Trading: strategy check worker là cửa kiểm soát duy nhất; nếu pass thì bắn thẳng vào MT5.
- Leads/Content: approval worker là cửa kiểm soát hành động rủi ro.

## 02.5. Data Model Chính

```text
agents
agent_configs
sources
source_channels              channel Telegram/Zalo gắn với source
zalo_web_sessions            session Zalo Web (QR auth, cookie, expiry)
rules
strategy_profiles            chiến lược đi vốn: multiplier, layering, trailing SL
prompt_templates
model_routes
raw_messages
normalized_messages
parsed_events
trade_signals
trade_positions
trade_position_layers        từng layer rải lệnh trong 1 position
paper_trades
trade_executions
trade_reconciliation_logs    đối soát DB vs MT5
lead_posts
lead_scores
reply_drafts
loyal_contacts
contact_backups
customer_value_scores
content_proofs
content_packages
content_publish_gates
platform_accounts            Hỗ trợ đa tài khoản Facebook/Zalo
platform_account_groups     Nhóm tài khoản cho Load Balancing
platform_context_items      Lưu kết quả từ Playwright/Cronjob
platform_action_logs
video_render_jobs           Remotion jobs + Studio plans
viral_research_logs         Dữ liệu nghiên cứu viral trend
ai_provider_accounts
approval_requests            Dùng cho Strategic Command / Policy change
approval_actions
model_calls
cost_ledger
system_events
audit_logs
dead_letter_jobs
```

Config phải versioned để rollback và audit.

## 02.6. Trading Engine Notes

Trading fast path phải dùng parser/rule trước LLM nếu format đủ rõ. AI được phép tự động parse/classify, nhưng output phải qua schema validation và rule/risk guard trước khi gửi execution.

Message classes:

```text
new_signal
amend_sl
amend_tp
partial_close
close_all
cancel_pending
hold
noise
```

Position/layer phải lưu riêng:

- lot
- entry
- SL/TP
- status
- PnL
- policy snapshot
- broker mapping nếu có

Nếu admin nói "bọc túi chừa 1 lệnh", hệ thống phải biết layer nào đang lời/lỗ và lot bao nhiêu.

## 02.7. MT5 Execution Bridge

Mục tiêu của Trading Agent là tự động hóa quy trình vào/quản lý lệnh. Vì vậy production cần bridge tới broker, hướng MVP hợp lý là MT5.

Kiến trúc đề xuất trên VPS Ubuntu:

```text
OpenClaw API / Worker
  -> trade.execution.requested
  -> MT5 bridge API hoặc queue
  -> MT5 Terminal chạy bằng Wine
  -> Expert Advisor nhận lệnh
  -> MT5 order execution
  -> execution result / position snapshot
  -> OpenClaw DB + Web Admin
```

Hai cách triển khai:

1. EA bridge trong MQL5 dùng `WebRequest()` hoặc polling endpoint nội bộ.
2. Python bridge dùng package MetaTrader5 để nói chuyện với MT5 Terminal đang chạy.

Ưu tiên MVP:

- MT5 Terminal chạy trên VPS Ubuntu qua Wine.
- EA bridge chỉ accept lệnh từ API nội bộ hoặc localhost.
- OpenClaw không lưu broker password trong Web Admin.
- Bridge phải trả về order id, fill status, reject reason, position snapshot.
- Reconciliation job phải đọc position thật từ MT5 để sửa state lệch.
- Không dùng UI automation để bấm MT5. Lệnh phải đi qua EA/API bridge có schema rõ.

## 02.8. AI Routing And Strategic Command

AI dùng cho:

- **The Hunter (W2)**: Phân tích bằng chứng (Evidence), phân loại Persona, tự động soạn thảo comment theo kịch bản.
- **The Factory (W3)**: Phân tích Profile (Deep Context), lập kế hoạch nội dung tự động, soạn kịch bản Walkthrough và Viral video.
- **Shared**: Logic phân bổ nhiệm vụ cho đa tài khoản (Account Load Balancing).

Task type:

```text
hunter_evidence_analyze
hunter_persona_profile
hunter_auto_comment
factory_deep_context_crawl
factory_page_manager_plan
studio_walkthrough_script
studio_viral_production
```

Technical rule:

- **AI-First Autonomy**: AI được phép thực thi action nếu nằm trong "Green Zone" (Instruction hợp lệ, Low Risk).
- **Strategic Override**: Mọi action AI làm phải có thể bị "ngắt" hoặc "ghi đè" từ Strategic Command trên Web Admin.
- Model call phải log cost, latency, prompt version và result status.
- Provider account hỗ trợ đa tài khoản do user chỉ định để tăng throughput.

Provider config tối thiểu:

```text
provider_id
provider_type: cloudflare_workers_ai | openai_compatible | codex_cli | local
account_label
workspace_scope
task_allowlist
daily_budget
rate_limit
auth_secret_ref
enabled
```

## 02.9. Playwright Ingestion & Automation

Mục tiêu là xây dựng hệ thống Agent túc trực 24/7 để quét lead và quản lý nội dung.

Mode:

```text
autonomous_agent   AI dùng Playwright tự động quét và tương tác (quản lý Pages/Groups)
deep_crawler       Playwright quét toàn bộ Profile/Website để lấy Context
assist_only        mở trang + highlight + draft, user tự thao tác
```

Technical rule:

- **Playwright Cronjobs**: Chạy ngầm trên VPS để duy trì hiện diện và cập nhật dữ liệu liên tục.
- **Multi-Account Manager**: Duy trì nhiều phiên trình duyệt (Browser Sessions) cho các tài khoản Facebook khác nhau.
- **Smart Delays**: Sử dụng cơ chế delay ngẫu nhiên và mô phỏng hành vi người dùng (human-like) để bảo vệ tài khoản.
- Không bypass CAPTCHA bằng các dịch vụ bên thứ ba nếu vi phạm chính sách nền tảng.
- Mọi context item phải lưu source, timestamp, account, purpose và retention.

## 02.10. Remotion Video Pipeline

User có thể bấm nút hoặc gõ lệnh để tạo video TikTok/Reels/Shorts.

Flow:

```text
prompt / content package
  -> script draft
  -> storyboard
  -> Remotion render job
  -> preview artifact
  -> user review
  -> publish_assisted hoặc official_publish nếu hợp lệ
```

Job data:

```text
video_render_jobs
content_package_id
template_id
script_json
assets_json
render_status
preview_url
final_url
created_by
created_at
```

Không gửi Telegram notification cho render do user vừa chủ động bấm, trừ khi render fail hoặc cần attention sau khi user rời Web Admin.

## 02.11. Web Admin Code Map

Trạng thái hiện tại:

- `apps/web-admin` đang được redesign từ đầu theo Stitch MCP design workflow.
- Stack: Vite + Vanilla JS + Web Components (Light DOM) + OKLCH CSS.
- 3 workspace, mỗi workspace có bottom menu riêng.
- Workspace toggle 3 trạng thái ở đáy màn.
- Hash deep-link routing.
- Mock data tại client, chưa nối backend.
- Design system dùng 3 theme OKLCH riêng biệt (Sovereign Vault / Warm Radar / Illuminated Studio).

UI rule:

- Mỗi agent là một workspace riêng.
- Không tạo màn nghiệp vụ dùng chung cho cả 3 agent.
- Workspace toggle nằm ở đáy màn và là toggle 3 trạng thái, giống light/dark mode toggle nhưng có 3 lựa chọn.
- Workspace toggle chỉ đổi giữa `Trading`, `Facebook Leads`, `Platform Content`.
- Mỗi workspace có thanh menu riêng ở đáy màn theo tính năng của agent đó.
- Ba thanh menu không dùng chung structure nếu workflow khác nhau.
- Không dựng sidebar/global dashboard menu như scaffold cũ.

Route/menu map (16 màn):

```text
/agents/trading/desk
/agents/trading/strategy
/agents/trading/signal-stream
/agents/trading/connections
/agents/trading/history

/agents/facebook-leads/radar
/agents/facebook-leads/respond
/agents/facebook-leads/customers
/agents/facebook-leads/sources
/agents/facebook-leads/proof
/agents/facebook-leads/audit

/agents/platform-content/command
/agents/platform-content/pipeline
/agents/platform-content/video
/agents/platform-content/context
/agents/platform-content/audit
```

Content workspace gộp Packages + Publish thành Pipeline (Kanban flow: Draft → Reviewed → Ready → Publishing → Published).

Codex CLI integration: Content Agent có thể dùng Codex CLI trên VPS Ubuntu làm execution runtime. OpenClaw Worker nhận job, spawn Codex CLI session trong thư mục contentsocial repo, Codex đọc context và generate content package. Output là draft, phải qua approval trên Web Admin.

Engineering contract:

- Không có route `/system`, `/ops`, `/admin`, `/settings` hoặc `/dashboard` làm workspace cấp cao.
- Các route audit/approval/log/cost phải nhận workspace scope từ URL và query mặc định theo workspace đó.
- Shared UI component được phép dùng lại, nhưng data loader/action handler phải nằm theo namespace workspace.
- Shared data như `approval_requests`, `audit_logs`, `model_calls`, `cost_ledger`, `system_events` phải có `agent_slug` hoặc `workspace_scope` để filter an toàn.
- Nếu event thật là system-level, nó vẫn cần mapping tới workspace bị ảnh hưởng khi hiển thị trong Web Admin. Chỉ khi không map được mới hiện trong audit của workspace đang xem dưới nhãn `system`.
- Telegram link phải trỏ về route workspace cụ thể, ví dụ lead nóng vào `/agents/facebook-leads/respond?...`, không trỏ về dashboard chung.
- Deep link từ notification phải mở đúng tab, đúng record, và có fallback nếu record đã resolve.

Feasibility check before building Web Admin:

```text
navigation_contract_defined = true
route_namespace_per_workspace = true
no_global_ops_workspace = true
workspace_scoped_approvals = true
workspace_scoped_audit_logs = true
workspace_scoped_model_cost = true
workspace_scoped_notifications = true
workspace_scoped_feature_flags = true
backend_read_api_for_each_tab = planned
backend_write_api_for_high_risk_actions = gated_by_approval
empty_loading_error_states_defined = true
mobile_bottom_nav_capacity_checked = true
```

Backend/API tối thiểu để UI không bị bể khi production:

- `GET /agents/:slug/summary`
- `PATCH /agents/:slug/mode`
- `GET /agents/:slug/sources`
- `PATCH /agents/:slug/sources/:id`
- `GET /agents/:slug/approvals`
- `POST /agents/:slug/approvals/:id/resolve`
- `GET /agents/:slug/audit`
- `GET /agents/:slug/jobs`
- `GET /agents/:slug/model-calls`
- `GET /agents/:slug/notifications`

Workspace-specific API cần thêm:

```text
Trading
  GET /agents/trading/positions            vị thế đang mở kèm layer breakdown
  GET /agents/trading/signal-stream        timeline tín hiệu: raw -> parsed -> action
  GET /agents/trading/executions           lịch sử thực thi
  GET /agents/trading/strategy             chiến lược đi vốn hiện tại
  PUT /agents/trading/strategy             cập nhật chiến lược (multiplier, layering, SL rules)
  GET /agents/trading/connections          trạng thái MT5/Telegram/Zalo
  POST /agents/trading/connections/zalo-qr khởi tạo QR code để quét Zalo Web
  POST /agents/trading/bridge/reconcile    chạy đối soát DB vs MT5
  GET /agents/trading/history              execution logs + hard reject logs + reconciliation

Facebook Leads
  GET /agents/facebook-leads/posts
  GET /agents/facebook-leads/reply-drafts
  POST /agents/facebook-leads/reply-drafts/:id/rewrite
  PATCH /agents/facebook-leads/response-status/:id
  GET /agents/facebook-leads/proofs
  PATCH /agents/facebook-leads/surface-policy
  GET /agents/facebook-leads/customers
  POST /agents/facebook-leads/customers
  PATCH /agents/facebook-leads/customers/:id
  GET /agents/facebook-leads/customers/:id/value-scores
  POST /agents/facebook-leads/customers/:id/contact-backups

Platform Content
  GET /agents/platform-content/packages
  POST /agents/platform-content/packages
  GET /agents/platform-content/video-jobs
  POST /agents/platform-content/video-jobs
  GET /agents/platform-content/context-items
  POST /agents/platform-content/context-capture
  GET /agents/platform-content/publish-gates
  POST /agents/platform-content/publish-gates/:id/resolve
```

Production readiness gates for Web Admin:

1. Every tab has real API contract or an explicit `not_configured` state, not fake success.
2. Every high-risk write path goes through approval/risk guard on the backend, not only disabled buttons in UI.
3. Every workspace has an audit tab that can answer "who/what/why/when/result".
4. Every notification/deep link opens a workspace-scoped route.
5. Every config mutation writes a versioned config snapshot.
6. Trading cannot expose `auto_guarded` unless kill switch, max daily loss, broker mapping and reconciliation status are visible.
7. Facebook Leads cannot expose `allowed_auto` unless surface policy, cooldown and duplicate guard are configured.
8. Platform Content cannot expose official publish/context capture rộng unless account policy, scope, retention and publish gate are configured.
9. Mobile layout must keep workspace toggle and current workspace menu usable without horizontal text overflow.
10. Deploy can ship incomplete tabs only behind feature flags with clear disabled/coming-soon state and no broken route.

Current feasibility status:

```text
UI information architecture      feasible, documented, shell prototype exists
Route structure                  feasible, hash deep-link prototype exists
Shared component strategy        partially implemented in `apps/web-admin`
Backend read APIs                not implemented yet
Backend high-risk write APIs     not implemented yet
Workspace-scoped DB schema       not implemented yet
Approval/audit persistence       not implemented yet
MT5 bridge production path       researched/planned, not implemented yet
Facebook/platform automation     policy constrained, must stay assisted/allowed only
Production deploy readiness      not ready until gates above pass
```

Build order to reduce production risk:

1. Create Web Admin shell with only 3 workspace routes, workspace toggle and per-workspace bottom menu.
2. Add read-only summary/empty states for all tabs so navigation contract can be tested early.
3. Implement workspace-scoped DB fields and API filters before adding dangerous actions.
4. Build Trading Connections tab first: Telegram auth, Zalo QR, MT5 bridge login. Without connections, nothing else works.
5. Build Trading Signal Stream (read-only timeline) so AI parsing can be validated visually.
6. Build Trading Strategy tab: multiplier, layering config, guard rules. This replaces the old "risk policy" + approval gates.
7. Build Trading Desk with live position/layer view and kill switch.
8. Build Trading History with execution logs, hard reject reasons and reconciliation status.
9. Build Facebook Leads radar/respond in `draft_fast`/`assisted_comment` first; defer `allowed_auto` until surface policy and cooldown are real.
10. Build Platform Content command/package/video preview first; defer official publish and broad context capture until account policy, scope and retention are real.
11. Add Telegram deep links only after target Web routes exist.
12. Only then run production deploy checklist and enable workspace features incrementally by flag.

## 02.12. Telegram Notification Policy

Gửi Telegram khi:

- AI tự execute trade hoặc trade bị reject.
- Kill switch/risk cap/account warning.
- Lead nóng mới từ group/source.
- Facebook/Zalo/platform có dấu hiệu account risk.
- Worker/bridge/render job lỗi khi user không còn ở flow chủ động.

Không gửi Telegram khi:

- User vừa bấm tạo video và đang thấy progress trên Web.
- User chủ động chạy AI gen content trên Web.
- Các action nhỏ đã hiển thị trực tiếp trong workspace.

## 02.13. Deploy

Infra files:

```text
infra/docker-compose.dev.yml
infra/docker-compose.prod.yml
infra/Dockerfile.api
infra/Dockerfile.worker
infra/Dockerfile.telegram-control-bot
infra/Dockerfile.telegram-listener
infra/deploy-vps.sh
infra/health-check.sh
```

Rollout order:

1. Deploy API health check.
2. Deploy DB migration.
3. Deploy worker in observe mode, then run trading replay in `paper` before enabling `auto_guarded`.
4. Install MT5 Terminal on VPS Ubuntu via Wine.
5. Install and test MT5 bridge/EA on demo account.
6. Rebuild Web Admin later from MCP design references.
7. Enable Telegram control and kill switch.
8. Run paper/demo replay.
9. Enable `auto_guarded` only after risk caps, reconciliation and kill switch pass.
10. Enable platform browser context only after platform risk policy is configured.
11. Enable official publish/comment integrations per platform, not globally.

## 02.14. Test Và Release Gate

Unit tests:

- helpers
- parser/rule
- job factory
- notification contracts

Replay tests:

- Telegram trading fixture, khi có replay dataset thật
- Facebook lead fixture, khi có replay dataset thật
- Content package fixture, khi có replay dataset thật

Integration tests:

- API + mock data
- worker + job contracts
- notification flow
- approval flow

High-risk changes require replay/integration/risk review:

- trading state machine
- execution settings
- lead anti-spam rules
- platform browser context capture
- Zalo/DM follow-up rules
- Remotion render pipeline
- publish pipeline thật

## 02.15. Docs Rule

Docs chỉ còn:

```text
docs/00-overview.md
docs/01-spec.md
docs/02-engineering.md
docs/03-decisions.md
docs/04-research.md
```

Không tạo folder con. Không thêm file docs mới nếu có thể cập nhật 1 trong 5 file này.
