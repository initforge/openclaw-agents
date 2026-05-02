# 04. Research

File này giữ research nền tảng. Research không phải quyết định. Khi đã chốt cách làm, ghi vào [03-decisions.md](./03-decisions.md).

## 04.1. OpenClaw

Vai trò dự kiến của OpenClaw là agent/tool orchestration, không phải database hoặc queue runtime luôn bật.

Phù hợp cho:

- list agents
- inspect state
- pause/resume agent
- chạy thao tác operator có kiểm soát
- bridge vào API hoặc MCP

Không dùng OpenClaw làm nguồn state chính.

## 04.2. Cloudflare Workers AI

Cloudflare Workers AI và AI Gateway phù hợp cho:

- classification
- extraction đơn giản
- draft replies
- embeddings/reranking
- fallback model route
- cost control

Không mô tả Cloudflare như proxy né Facebook/Telegram.

AI Gateway có thể dùng để:

- log model calls
- set fallback
- cap cost
- route theo provider

## 04.3. Facebook Platform

Facebook agent đầu tiên nên là lead intelligence assistant tốc độ cao nhưng phải tách rõ surface hợp lệ và surface rủi ro:

- ưu tiên manual intake hoặc browser-assist hợp lệ
- không xây mass auto-commenting
- không scrape dữ liệu không được phép
- public reply/comment không có một rule chung cho mọi nơi: owned page/group, API hợp lệ hoặc surface có quyền rõ ràng có thể chạy auto theo guard; group ngoài và browser session cá nhân nên dùng `draft_fast` hoặc `assisted_comment`
- Zalo follow-up chỉ nên auto-send qua kênh official/allowed hoặc contact đã consent; trường hợp còn lại tạo draft/handoff
- có cooldown và duplicate check

Meta/Facebook platform thay đổi thường xuyên, cần re-check trước khi build automation sâu.

Nguồn:

- Meta Terms: https://www.facebook.com/terms
- Meta Automated Data Collection Terms: https://www.facebook.com/legal/automated_data_collection_terms

## 04.4. Telegram Platform

Telegram phù hợp cho:

- nhận tín hiệu trading
- control bot
- alert nhanh
- approve/reject gọn

Telegram bot không nên giữ business logic. Bot gọi API backend.

## 04.5. Platform Automation Risk

LinkedIn Help nói không cho dùng crawler, bot, browser plug-in hoặc extension để scrape, sửa giao diện hoặc automate activity trên website LinkedIn.

Upwork Help mô tả bot/automation là script/program/extension tự gửi request, thu thập dữ liệu hoặc thực hiện action nhanh/hơn người, và nêu rủi ro warning, temporary restriction hoặc permanent block nếu dùng automation không được chấp thuận.

YouTube Terms cấm access service bằng automated means như robots, botnets hoặc scrapers nếu không có prior permission hoặc exception rõ.

TikTok Developer Terms và developer guidelines yêu cầu dùng developer services đúng phạm vi. Vì vậy hệ thống phải chọn kênh hợp lệ theo từng workflow và không bypass barrier như login/rate-limit/CAPTCHA.

Nguồn:

- LinkedIn prohibited software: https://www.linkedin.com/help/linkedin/answer/a1341387
- Upwork automation help: https://support.upwork.com/hc/en-us/articles/43342677368467-Use-bots-and-other-automation-properly
- YouTube Terms: https://www.youtube.com/t/terms
- TikTok Developer Terms: https://www.tiktok.com/legal/page/global/tik-tok-developer-terms-of-service/en
- TikTok Developer Guidelines: https://developers.tiktok.com/doc/our-guidelines-developer-guidelines/

## 04.6. MetaTrader 5 / MT5

MetaQuotes có hướng dẫn chạy MetaTrader 5 trên Linux bằng Wine. Hướng dẫn này nói MT5 chạy trên Linux qua Wine và có script cài đặt cho Ubuntu/Debian/Linux Mint/Fedora.

MQL5 có `WebRequest()` để EA giao tiếp với server/API ngoài. Đây là hướng phù hợp để EA trên MT5 nhận lệnh từ OpenClaw API hoặc gửi execution result về.

MetaTrader5 Python package cũng có API kết nối tới MT5 Terminal đang chạy, ví dụ `initialize()`, `terminal_info()`, `order_send()`, `positions_get()`. Hướng này phù hợp nếu bridge chạy Python cạnh terminal.

Nguồn:

- MetaQuotes, MetaTrader 5 on Linux: https://www.mql5.com/en/articles/625
- MQL5 WebRequest reference: https://www.mql5.com/en/docs/network/webrequest
- MQL5 Python terminal_info reference: https://www.mql5.com/en/docs/python_metatrader5/mt5terminalinfo_py

## 04.7. Web Admin Layout / UX

Web Admin nên là workbench nhẹ, không phải landing page.

Gợi ý workspace:

- Trading: chính xác, bình tĩnh, risk-first.
- Facebook Leads: radar group + response desk speed-first.
- Platform Content: command center + Remotion video factory + browser context collector.
- Không còn workspace System dùng chung cho nghiệp vụ.

Không dùng dark mode mặc định. Không dùng tím làm màu chính.
