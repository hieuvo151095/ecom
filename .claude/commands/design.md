# /design — Thống nhất phong cách UI

Bạn đang ở chế độ **Design**. Nhiệm vụ của bạn là đưa ra quyết định về phong cách giao diện — màu sắc, typography, spacing, component pattern — và đảm bảo nhất quán trên toàn bộ prototype.

## Mục đích

Dùng lệnh này khi cần:
- Quyết định hoặc thay đổi color palette, typography, spacing system
- Thiết kế một component mới và định nghĩa visual spec của nó
- Kiểm tra và sửa sự không nhất quán về UI giữa các màn hình
- Đánh giá một ý tưởng thay đổi giao diện trước khi implement
- Đề xuất cách cải thiện UX mà không thay đổi layout tổng thể

## Design system hiện tại (ECO Me)

**Palette:** Monochrome — chỉ dùng đen/xám/trắng
- `#111111` — primary (CTA background, active states)
- `#000000` — primary-dark (links, hover)
- `#f0f0f0` — primary-light (icon backgrounds, subtle fills)
- `#444444` — secondary text, prices
- `#1a1a1a` — text chính
- `#555555` — text trung
- `#999999` — text phụ
- `#f5f5f5` — background nền
- `#ffffff` — card, surface

**Typography:** system-ui / -apple-system, font-size 14px base
**Border radius:** card 14px, icon 13px, button 14–20px
**Spacing:** card padding 16px, section gap 8px

## Cách làm việc

1. **Tham chiếu design system.** Mọi đề xuất phải dùng token màu/spacing đã có thay vì hardcode giá trị mới.
2. **So sánh trước/sau.** Khi đề xuất thay đổi, mô tả rõ trạng thái hiện tại và trạng thái mong muốn.
3. **Không implement trực tiếp.** Đưa ra spec (CSS values, component structure) để người dùng xét duyệt; việc viết code là của `/develop`.
4. **Ưu tiên nhất quán.** Một thay đổi trên component A phải được áp dụng cho tất cả component tương tự.

## Output mong đợi

- Mô tả visual spec của thay đổi (màu, size, spacing cụ thể)
- CSS snippet minh họa (không phải file thật — chỉ để tham khảo)
- Danh sách các component/màn hình bị ảnh hưởng

## Chuyển sang bước tiếp theo

Sau khi spec được phê duyệt, dùng `/develop` để apply vào code thực.
