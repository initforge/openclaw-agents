# 00. Overview

File này là mục lục tuyến tính của OpenClaw Ops.

Đọc từ trên xuống theo số thứ tự. Nếu đang cần xử lý nhanh, dùng bảng ở mục `00.3`.

## 00.1. OpenClaw Ops Là Gì?

OpenClaw Ops là hệ thống vận hành 3 agent tự động hóa:

1. `trading-signal-agent`: đọc tín hiệu trading và có thể tự vào/quản lý lệnh qua MT5 khi bật `auto_guarded`, nhưng phải qua rule/risk guard.
2. `facebook-lead-agent`: theo dõi group, phát hiện bài mới, tạo comment/reply theo pain point và đẩy lead nóng thật nhanh, nhưng không dùng spam automation hoặc né khóa account.
3. `platform-content-agent`: quản lý Facebook, LinkedIn, TikTok, YouTube, Upwork và các nền tảng khác; tạo bài viết/video Remotion và thu thập context hợp lệ cho AI.

Business logic chính:

- Agent gom thông tin, tự xử lý việc đã được policy cho phép, và đẩy việc cần chú ý lên Web/Telegram.
- Người vận hành chỉnh rule/config trên từng workspace.
- Hệ thống lưu state và audit log để kiểm tra lại.

Technical logic chính:

- Web Admin và Telegram gọi API.
- API/Worker xử lý event qua queue.
- Domain packages giữ logic nghiệp vụ.
- AI Router chọn model theo task, cost và fallback.

## 00.2. Thứ Tự Đọc

1. [01-spec.md](./01-spec.md): business spec, agent, workflow, approval, safety.
2. [02-engineering.md](./02-engineering.md): repo, runtime, event, data model, UI entry, deploy, test.
3. [03-decisions.md](./03-decisions.md): quyết định đã chốt và lý do.
4. [04-research.md](./04-research.md): ghi chú research nền tảng.

## 00.3. Cần Giải Quyết Nhanh Thì Mở Đâu?

| Vấn đề | Mở mục |
| --- | --- |
| Không hiểu agent nào làm gì | `01-spec.md` mục `01.2` |
| UI/Web Admin nên có gì | `01-spec.md` mục `01.3` |
| Luồng xử lý event/approval | `01-spec.md` mục `01.4` và `01.5` |
| Trading parse sai | `01-spec.md` mục `01.7`, `02-engineering.md` mục `02.6` |
| Facebook group lead cần phản hồi nhanh | `01-spec.md` mục `01.2.2` |
| Cần tạo content/video hoặc quét context nền tảng | `01-spec.md` mục `01.2.3`, `02-engineering.md` mục `02.8` |
| Cần sửa code/package | `02-engineering.md` mục `02.2` |
| Cần sửa route UI | `02-engineering.md` mục `02.10` |
| Cần deploy hoặc docker | `02-engineering.md` mục `02.3` và `02.11` |
| Cần biết vì sao chốt hướng này | `03-decisions.md` |
| Cần research nền tảng | `04-research.md` |

## 00.4. Quy Tắc Docs

1. Không tạo folder con trong `docs/`.
2. Không thêm file docs mới nếu nội dung thuộc 1 trong 5 file hiện có.
3. Thay đổi product, workflow, approval hoặc safety: cập nhật [01-spec.md](./01-spec.md).
4. Thay đổi code, runtime, data, deploy hoặc test: cập nhật [02-engineering.md](./02-engineering.md).
5. Quyết định ổn định: cập nhật [03-decisions.md](./03-decisions.md).
6. Research có nguồn hoặc cần re-check: cập nhật [04-research.md](./04-research.md).
