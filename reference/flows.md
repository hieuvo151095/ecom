# Flows — ECO Me Navigation

Sơ đồ luồng điều hướng giữa các màn hình, dựa trên ảnh chụp thực tế.

---

## Tổng quan luồng ứng dụng

```mermaid
flowchart TD
    LAUNCH([App Launch]) --> AUTH{Trạng thái\neKYC?}

    AUTH -->|Chưa định danh| HOME_U[Home — Unverified]
    AUTH -->|Đã định danh| HOME_V[Home — Verified]

    %% ── Unverified Home ──────────────────────────
    HOME_U --> KYC_BANNER["⚠ KYC Banner\n(dải cảnh báo)"]
    HOME_U --> WALLET_U["Ví ECO: Kích hoạt ›\nECO trả sau: Đăng ký ›"]
    HOME_U --> QUICK_U[Tap Nạp/Chuyển/Rút/Mã TT]
    HOME_U --> EDU_U["EDU: 3 icon\n(Đóng HP · HP trả sau · ECO School)"]

    KYC_BANNER -->|Tap| EKYC[Luồng eKYC\n— ngoài phạm vi ảnh]
    WALLET_U -->|Tap Kích hoạt| EKYC
    QUICK_U --> MODAL_LOCK[Modal: Ví Tạm Khóa]
    MODAL_LOCK -->|Thực hiện định danh| EKYC

    %% ── Verified Home ─────────────────────────────
    HOME_V --> WALLET_V["Ví ECO: 344,523đ\nECO trả sau: Đăng ký ›"]
    HOME_V --> EDU_V["EDU: 4 icon\n(thêm ECO Giáo viên)"]
    HOME_V --> STUDENT_CARDS["Danh sách học sinh\n(nếu đã liên kết)"]

    STUDENT_CARDS -->|Tap Thanh toán\ntrên alert hóa đơn| PAY_INVOICE[Thanh toán hóa đơn\n— ngoài phạm vi ảnh]

    %% ── ECO School flow ───────────────────────────
    EDU_U -->|Tap ECO School| ECO_ENTRY[ECO School\nEntry Screen]
    EDU_V -->|Tap ECO School| ECO_ENTRY

    ECO_ENTRY -->|Quét mã QR| QR_SCAN[QR Scanner\n— ngoài phạm vi ảnh]
    ECO_ENTRY -->|Nhập thông tin| MODAL_LINK[Modal: Kích hoạt\nliên kết học sinh]
    ECO_ENTRY -->|Tap Cấp lại thẻ| REISSUE[Luồng cấp lại thẻ\n— ngoài phạm vi ảnh]

    QR_SCAN -->|Quét thành công| ECO_DASH[ECO School Dashboard]
    MODAL_LINK -->|Nhập mã HS + mã bảo vệ\n→ Xác nhận| ECO_DASH

    %% ── ECO School Dashboard ──────────────────────
    ECO_DASH --> F1[Đóng học phí]
    ECO_DASH --> F2[Nạp điểm vào thẻ]
    ECO_DASH --> F3[Lịch sử chi tiêu]
    ECO_DASH --> F4[Thời khoá biểu]
    ECO_DASH --> F5[Theo dõi điểm danh]
    ECO_DASH --> F6[Báo vắng]
    ECO_DASH --> F7[Bài tập]
    ECO_DASH --> F8[Kết quả học tập]
    ECO_DASH -->|Alert hóa đơn| PAY_INVOICE
```

---

## Luồng Bottom Navigation

```mermaid
flowchart LR
    NAV["Bottom Nav\n(luôn hiển thị)"]

    NAV --> T1[Trang chủ]
    NAV --> T2[Mua sắm]
    NAV --> T3["Thanh toán\n⭕ icon vàng nổi bật"]
    NAV --> T4[Đơn hàng]
    NAV --> T5[Ví của tôi]

    T1 --> HOME_U & HOME_V
    T2 -.->|chưa có ảnh| T2_X[ ]
    T3 -.->|chưa có ảnh| T3_X[ ]
    T4 -.->|chưa có ảnh| T4_X[ ]
    T5 -.->|chưa có ảnh| T5_X[ ]
```

---

## Luồng liên kết học sinh (chi tiết)

```mermaid
flowchart TD
    ENTRY[ECO School Entry\nThẻ học sinh thông minh]

    ENTRY -->|CTA: Quét mã QR| QR[QR Scanner]
    ENTRY -->|CTA: Nhập thông tin| SHEET[Bottom Sheet:\nKích hoạt liên kết học sinh]
    ENTRY -->|Link: Cấp lại thẻ| REISSUE[Luồng cấp lại thẻ]

    SHEET --> INPUT{Đã nhập\nMã HS + Mã bảo vệ?}
    INPUT -->|Chưa đủ| BTN_DIS[Nút Xác nhận — disabled]
    INPUT -->|Đủ cả hai| BTN_EN[Nút Xác nhận — enabled]
    BTN_EN -->|Tap Xác nhận| SUCCESS[Liên kết thành công]
    BTN_DIS -->|Tiếp tục nhập| INPUT
    QR -->|Quét thành công| SUCCESS

    SUCCESS --> DASH[ECO School Dashboard]
    DASH -->|Cuộn xuống| MORE_STUDENTS[Xem thêm học sinh\nđã liên kết]
```

---

## Ghi chú

- **Nét liền (→):** luồng có trong ảnh chụp
- **Nét đứt (-.->):** tab/màn hình tồn tại trong nav nhưng chưa có ảnh
- ECO School truy cập được ở cả hai trạng thái Verified và Unverified (không bị chặn bởi eKYC)
- Ví tạm khóa chỉ chặn các giao dịch tài chính (Nạp/Chuyển/Rút/Mã TT), không chặn ECO School
