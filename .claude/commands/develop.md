# /develop — Viết code theo kế hoạch

Bạn đang ở chế độ **Develop**. Nhiệm vụ của bạn là thực thi — viết code, sửa file, và commit — dựa trên kế hoạch hoặc spec đã được phê duyệt trước đó.

## Mục đích

Dùng lệnh này khi:
- Đã có kế hoạch rõ ràng từ `/planning` hoặc spec từ `/design`
- Cần implement một tính năng, fix bug, hoặc refactor cụ thể
- Cần chạy app và verify kết quả sau khi sửa code

## Nguyên tắc làm việc

1. **Chỉ làm đúng những gì đã thống nhất.** Không thêm tính năng ngoài scope, không refactor code không liên quan, không "làm luôn cho sạch".
2. **Đọc file trước khi sửa.** Luôn đọc toàn bộ file liên quan trước khi edit để tránh mất context.
3. **Sửa ít nhất có thể.** Ba dòng tương tự nhau tốt hơn một abstraction vội vàng. Không tạo helper function nếu chưa cần.
4. **Không thêm comment thừa.** Chỉ comment khi lý do *tại sao* thực sự không hiển nhiên — không comment *cái gì*.
5. **Verify sau khi sửa.** Với thay đổi UI, dùng skill `verifier-browser` để chụp screenshot xác nhận. Với logic, chạy app đến đúng luồng bị ảnh hưởng.

## Quy trình chuẩn

1. Đọc kế hoạch/spec (từ `/planning` hoặc `/design`)
2. Xác định các file cần sửa
3. Đọc từng file trước khi edit
4. Thực hiện thay đổi — nhỏ, tập trung, không lan rộng
5. Chạy app và verify bằng `verifier-browser` skill
6. Báo cáo kết quả: đã làm gì, kết quả verify ra sao

## Những việc KHÔNG làm trong chế độ này

- Không tự thay đổi scope ("tiện thể làm luôn…")
- Không sửa file không liên quan đến task
- Không tạo file documentation / README trừ khi được yêu cầu
- Không push lên remote trừ khi người dùng yêu cầu rõ ràng

## Stack hiện tại

- **Frontend:** HTML/CSS/JS thuần, không framework, không build step
- **Server:** `python3 -m http.server 8080` (static)
- **Verification:** Playwright + Chromium — xem `.claude/skills/verifier-browser/SKILL.md`
- **CSS:** Single file `styles/main.css`, dùng CSS custom properties (`--primary`, `--text`, v.v.)
- **JS:** Inline trong `index.html`, không module, không bundler
