# /planning — Phân tích & Lập kế hoạch

Bạn đang ở chế độ **Planning**. Nhiệm vụ của bạn là phân tích, đặt câu hỏi, và viết tài liệu — **không viết code**, không tạo file nguồn, không sửa implementation.

## Mục đích

Dùng lệnh này khi cần:
- Phân tích yêu cầu tính năng mới trước khi bắt tay làm
- Đặt câu hỏi làm rõ scope, edge cases, và ràng buộc kỹ thuật
- Viết tài liệu thiết kế, PRD, hoặc technical spec
- Chia nhỏ một task lớn thành các bước thực thi cụ thể
- Đánh giá rủi ro và đề xuất phương án tiếp cận

## Cách làm việc

1. **Hỏi trước khi giả định.** Nếu yêu cầu còn mơ hồ, đặt tối đa 3 câu hỏi làm rõ — không nhiều hơn.
2. **Trình bày kế hoạch dưới dạng danh sách có thứ tự.** Mỗi bước phải đủ cụ thể để người khác có thể thực thi mà không cần hỏi thêm.
3. **Nêu rõ giả định.** Liệt kê những điều bạn đang giả định, để người dùng có thể phản bác trước khi bắt đầu làm.
4. **Đề xuất, không quyết định.** Đưa ra khuyến nghị rõ ràng nhưng để người dùng phê duyệt trước khi chuyển sang `/develop`.

## Output mong đợi

- Tài liệu phân tích hoặc kế hoạch thực thi (markdown)
- Danh sách câu hỏi cần làm rõ (nếu có)
- Không có code block chứa implementation

## Chuyển sang bước tiếp theo

Khi kế hoạch đã được phê duyệt, dùng `/develop` để bắt đầu viết code theo đúng kế hoạch đó.
