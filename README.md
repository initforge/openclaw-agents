# Không Gian Làm Việc OpenClaw Ops

Workspace này dùng để lên ý tưởng, chốt kiến trúc và scaffold hệ thống nhiều agent của OpenClaw Ops.

Đây không phải một con bot đơn lẻ.  
Nó là một hệ thống vận hành gồm:

- web admin theo từng workspace agent
- Telegram control
- các agent nghiệp vụ
- pipeline xử lý sự kiện
- tầng định tuyến AI
- tài liệu deploy lên VPS/Cloudflare

## 3 Workspace Nghiệp Vụ

- `trading-signal-agent`: theo dõi tín hiệu trading và tự vào/quản lý lệnh qua MT5 khi bật `auto_guarded`
- `facebook-lead-agent`: theo dõi group, phát hiện lead mới, tạo comment/Zalo follow-up tự nhiên theo pain point
- `platform-content-agent`: quản lý nền tảng, AI gen content, Remotion video và browser context hợp lệ

## Web Admin

`apps/web-admin` đã xoá hoàn toàn. Không giữ khung trống hoặc placeholder UI.

Hướng redesign đã chốt: 3 workspace độc lập, mỗi workspace có menu riêng ở dưới, chuyển qua lại bằng toggle 3 trạng thái ở đáy màn.

Không có workspace `System`/`Ops` riêng. Approval, audit, logs, config, source health, model cost và notification policy phải nằm trong menu của từng workspace liên quan.

Docs trung tâm nằm ở:

`docs/00-overview.md`

## Cấu Trúc Repo

```text
docs/
apps/
packages/
infra/
```

## Thứ Tự Đọc

Đọc nhanh:

1. `docs/00-overview.md`
2. `docs/01-spec.md`

Khi sửa code/runtime thì đọc thêm:

3. `docs/02-engineering.md`

## Trạng Thái Hiện Tại

Đã có:

- docs cho 3 workspace
- docs tuyến tính còn 5 file đánh số trong `docs/`
- scaffold monorepo
- đã xoá web-admin scaffold cũ để chờ redesign

Chưa có:

- admin production-ready
- runtime backend nghiệp vụ đầy đủ
- broker integration thật
- bộ test vận hành đầy đủ

## Quy Tắc Cứng

- Trading chỉ tự vào lệnh khi bật `auto_guarded` và pass toàn bộ risk guard.
- AI không trực tiếp execute lệnh; lệnh thật phải pass schema, rule và risk guard.
- Không làm spam automation, không né account/proxy/rate-limit.
- Auto comment/publish chỉ bật trên surface hợp lệ, có quyền rõ ràng và không né cơ chế nền tảng.
- Cloudflare Workers AI dùng làm AI router/provider, không phải social proxy.
- Secret nằm trong `.env` hoặc secret manager, không commit.
