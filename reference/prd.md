# PRD — ECO Me Super-App (B2B2C)

Tài liệu mô tả mục tiêu và hành vi người dùng cho từng màn hình/Tab dựa trên ảnh chụp thực tế.

---

## Trạng thái người dùng

App có hai trạng thái, ảnh hưởng trực tiếp đến nội dung hiển thị:

| Yếu tố | Unverified (chưa eKYC) | Verified (đã eKYC) |
|---|---|---|
| Header | Avatar + tên + [🔍][🔔] | Avatar + tên + [⚙️][🔍][🔔] |
| Ví ECO | "Kích hoạt ›" | Số dư thực (vd: 344,523đ) |
| KYC banner | Hiển thị (dải cảnh báo) | Ẩn |
| Tap Nạp/Chuyển/Rút/Mã TT | → Modal "Ví tạm khóa" | → Luồng giao dịch |
| EDU shortcuts | 3 icon | 4 icon (thêm ECO Giáo viên) |
| Thẻ học sinh trên Home | Không hiển thị | Hiển thị nếu đã liên kết |

---

## Tab 1 — Trang chủ

**Mục tiêu:** Điểm truy cập trung tâm — cá nhân hóa theo trạng thái user, tích hợp tất cả dịch vụ từ ví đến mua sắm đến giáo dục.

### Hero Banner (full-width, cuộn được)
Vùng quảng cáo nổi bật, nội dung thay đổi theo chiến dịch. Có CTA button màu vàng.
- **Unverified:** Quảng bá "Học phí trả sau — Hạn mức 10.000.000đ" + badge "DỊCH VỤ MỚI"
- **Verified:** Quảng bá khuyến mãi học tập (vd: "1 tháng tiếng Anh miễn phí")

### Tác vụ nhanh (Quick Actions)
4 icon ngang cố định: **Nạp tiền · Chuyển tiền · Rút tiền · Mã thanh toán**
- Unverified: tap bất kỳ → modal "Ví tạm khóa"
- Verified: tap → luồng giao dịch tương ứng

### KYC Banner *(chỉ Unverified)*
Dải cảnh báo: *"Định danh người dùng theo quy định. Hoàn tất định danh và liên kết ví..."* + mũi tên tap-to-proceed → luồng eKYC.

### Thông tin Ví
Hai ô hiển thị ngang + icon EXu:
- **Ví ECO:** số dư thực (Verified) hoặc "Kích hoạt ›" (Unverified)
- **ECO trả sau:** số dư thực hoặc "Đăng ký ›"
- **EXu:** số xu tích lũy (hiển thị 0 trong ảnh hiện tại)

### EDU Shortcuts
- **Unverified:** 3 icon — Đóng Học Phí · Học phí trả sau · ECO School
- **Verified:** 4 icon — Đóng Học Phí · Học phí trả sau · ECO School · ECO Giáo viên

### Danh sách học sinh *(chỉ Verified, sau khi đã liên kết)*
Mỗi thẻ hiển thị: tên học sinh, mã HS, tên trường, lớp, số dư thẻ (điểm). Nếu có hóa đơn chưa thanh toán → alert màu cam + nút "Thanh toán" dẫn thẳng vào luồng thanh toán.

### Viễn Thông
4 icon: Nạp tiền điện thoại · Mã thẻ cào điện thoại · Nạp data 4G/5G · Thanh toán trả sau

### Tiện ích
2 hàng × 4 icon (8 tổng, icon thứ 8 là "Xem thêm"):
Hóa đơn tiền điện · Hóa đơn tiền nước · Hóa đơn Internet · Thanh toán tín dụng · EXu Back · Mở TK VPBank · Tài chính thu hộ · Xem thêm

### Bảo hiểm
3 item dạng card nhỏ với badge % giảm: Bảo hiểm xe máy (−43%) · Bảo hiểm Ô tô (−21%) · Dịch vụ bảo hiểm

### Ưu đãi dành riêng bạn
Voucher carousel cá nhân hóa. Mỗi card: tên ưu đãi, HSD, nút "Dùng ngay". Header có link "Xem thêm".

### Đối tác thương hiệu
Logo hàng ngang: STP · giftpop · Vietopia

### Deal theo nhóm đối tượng
Mỗi section là một đối tác/chủ đề với lưới sản phẩm 3 cột (ảnh + tên rút gọn + giá + badge % giảm + nút [+]). Header section có link "Xem thêm":
- **SIÊU DEAL CHO KHỐI MẦM NON:** Vé, Combo vui chơi (Cổng Ký Quan, Blue Wave, v.v.)
- **VIETOPIA — Khu vui chơi hướng nghiệp:** Vé vui chơi cả ngày cho trẻ em
- **WINSMILE — Dịch vụ nha khoa:** Combo nhổ răng, hàn sâu cho trẻ
- **KYNA ENGLISH:** Khóa học tiếng Anh (−50%)

---

## Tab 2 — Mua sắm

Nội dung chưa được ghi nhận trong ảnh hiện có.

---

## Tab 3 — Thanh toán

Icon trung tâm màu vàng, nổi bật hơn các tab khác (floating style).
Nội dung màn hình chưa được ghi nhận trong ảnh hiện có.

---

## Tab 4 — Đơn hàng

Nội dung chưa được ghi nhận trong ảnh hiện có.

---

## Tab 5 — Ví của tôi

Nội dung chưa được ghi nhận trong ảnh hiện có.

---

## Modal — Ví Tạm Khóa

**Trigger:** User Unverified tap vào Nạp tiền, Chuyển tiền, Rút tiền, hoặc Mã thanh toán.

**Hành vi:** Overlay tối toàn màn hình, modal trắng giữa màn hình, không có nút đóng (buộc người dùng hành động hoặc dùng gesture back).

**Nội dung:**
- Tiêu đề: *"Ví của bạn đang tạm khóa"*
- Mô tả: *"Bạn chưa thực hiện định danh và liên kết ngân hàng. Để sử dụng các giao dịch từ Ví, bạn cần định danh và liên kết ngân hàng ngay"*
- CTA duy nhất: **"Thực hiện định danh"** (màu vàng) → dẫn vào luồng eKYC

---

## Screen — ECO School Entry (Thẻ học sinh thông minh)

**Trigger:** Tap "ECO School" từ EDU shortcuts trên Home. Truy cập được ở cả hai trạng thái Verified và Unverified.

**Mục tiêu:** Phụ huynh liên kết thẻ học sinh vật lý với tài khoản ECO Me bằng mã HS + mã bảo vệ, hoặc quét QR trên thẻ.

**Bố cục:**
- Nút back (←) góc trái trên
- Header thương hiệu vàng: "Thẻ học sinh thông minh — Bước tiến mới trong chuyển đổi số giáo dục"
- Hình ảnh minh họa sản phẩm (thẻ HS, QR, mockup app)
- Hướng dẫn 3 bước rõ ràng:
  1. Nhập mã học sinh + mã bảo vệ, hoặc quét mã QR trên thẻ
  2. Kiểm tra thông tin học sinh
  3. Nhấn "Xác nhận"
- CTA chính: **Quét mã QR** (nền vàng)
- CTA phụ: **Nhập thông tin** (nền trắng, border)
- Link nhỏ cuối: *"Bạn làm hỏng, mất thẻ, [Cấp lại thẻ]"*

---

## Modal — Kích hoạt liên kết học sinh (Bottom Sheet)

**Trigger:** Tap "Nhập thông tin" từ ECO School Entry.

**Hành vi:** Bottom sheet trượt lên, đè lên màn hình Entry bên dưới (background mờ tối).

**Nội dung:**
- Nút đóng [×] góc phải trên
- Tiêu đề: *"Kích hoạt liên kết học sinh"*
- Hỗ trợ: *"Vui lòng liên hệ Hotline 1900 9005 để được hỗ trợ cung cấp mã bảo vệ"*
- Input 1: Mã học sinh (placeholder text)
- Input 2: Mã bảo vệ (placeholder text)
- CTA: **Xác nhận** — disabled (xám) khi chưa nhập đủ, enabled (vàng) khi đủ cả hai trường

---

## Screen — ECO School Dashboard (Phụ huynh)

**Trigger:** Sau khi xác nhận liên kết học sinh thành công.

**Mục tiêu:** Trung tâm quản lý học sinh — thanh toán học phí, theo dõi điểm danh, bài tập, lịch học.

**Header:** Tiêu đề đôi — "ECO School Phụ huynh" + branding "Thẻ học sinh thông minh" (nền vàng/cam)

**Lưới chức năng (2 hàng × 4 icon):**
- Hàng 1: Đóng học phí · Nạp điểm vào thẻ · Lịch sử chi tiêu · Thời khoá biểu
- Hàng 2: Theo dõi điểm danh · Báo vắng · Bài tập · Kết quả học tập

**Danh sách học sinh đã liên kết:**
Mỗi thẻ hiển thị: tên HS, mã HS, tên trường, lớp, số dư thẻ (điểm). Nếu có hóa đơn chờ thanh toán → alert cam *"N hóa đơn chờ thanh toán"* + link inline "Thanh toán".

---

## Bottom Navigation

5 tab cố định ở đáy màn hình:

| Vị trí | Label | Ghi chú |
|---|---|---|
| 1 | Trang chủ | Icon nhà |
| 2 | Mua sắm | Icon túi |
| 3 | Thanh toán | Icon ECO vàng, kích thước lớn hơn, nổi bật |
| 4 | Đơn hàng | Icon danh sách |
| 5 | Ví của tôi | Icon ví |
