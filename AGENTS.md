# Huong Dan Cho Agent

## Boi Canh Du An

Workspace nay dinh nghia he thong OpenClaw Ops cho nhieu agent tu dong hoa. Hien tai uu tien tai lieu truoc, code sau. Chi scaffold code khi tai lieu san pham, workflow, event, state machine va deployment du ro de dan duong.

## Bat Buoc Doc Truoc Khi Lam

Doc theo thu tu:

1. `docs/00-overview.md`
2. `docs/01-spec.md`
3. Neu task lien quan code/runtime/deploy/test: `docs/02-engineering.md`
4. Neu can xem quyet dinh da chot: `docs/03-decisions.md`
5. Neu can xem research nen tang: `docs/04-research.md`

## Quy Tac Viet Tai Lieu

- Y tuong tho va cau hoi chua chot de trong `docs/01-spec.md` neu anh huong product/workflow/safety, hoac `docs/02-engineering.md` neu anh huong runtime/code.
- Quyet dinh on dinh ghi vao `docs/03-decisions.md`.
- Research co nguon de trong `docs/04-research.md`.
- Khong tron brainstorm, quyet dinh, implementation va deployment vao cung mot file.
- Khong tao folder con trong `docs/`.
- Khong tao file docs moi neu noi dung thuoc `00-overview.md`, `01-spec.md`, `02-engineering.md`, `03-decisions.md` hoac `04-research.md`.
- Khi them tinh nang moi, phai cap nhat `docs/01-spec.md` va neu co code/runtime thi cap nhat `docs/02-engineering.md`.

## Quy Tac An Toan

- Trading co the chay `auto_guarded` khi policy/risk da duoc bat ro tren Web Admin.
- Phai co stop loss va pass risk guard truoc khi execute lenh that.
- Human approval bat buoc cho thay doi policy/risk lon; per-order approval chi bat buoc cho anomaly hoac vuot nguong risk.
- Khong dung broker key co quyen rut tien.
- Khong dung UI automation cho broker khi lien quan tien that.
- Khong xay co che ne account/proxy/rate-limit/CAPTCHA.
- Khong xay spam bot auto-comment hang loat tren Facebook/LinkedIn/Upwork/TikTok/YouTube.
- Auto comment/publish chi duoc mo tren surface hop le, co quyen ro rang va khong ne co che nen tang.
- Cloudflare Workers AI duoc dung lam AI router/provider, khong mo ta no nhu proxy ne Facebook/Telegram.

## Cau Truc Code Du Kien

- `apps/api`: backend API.
- `apps/telegram-control-bot`: dieu khien nhanh va approval qua Telegram.
- `apps/telegram-listener`: ingestion Telegram.
- `apps/worker`: background jobs.
- `packages/agent-core`: orchestration dung chung cho agent.
- `packages/ai-router`: dinh tuyen model/provider.
- `packages/signal-parser`: parser tin hieu trading.
- `packages/risk-engine`: luat quan tri rui ro.
- `packages/db`: schema va data access.
- `packages/domain-content`: logic cho Platform Content.
