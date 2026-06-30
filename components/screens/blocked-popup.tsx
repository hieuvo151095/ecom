"use client"

interface BlockedPopupProps {
  onClose: () => void
}

export function BlockedPopup({ onClose }: BlockedPopupProps) {
  return (
    <div
      className="absolute inset-0 z-40 flex items-center justify-center px-8"
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-7 w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[18px] font-bold text-[#111] text-center mb-3 leading-tight">
          Ví của bạn đang tạm khóa
        </h2>
        <p className="text-[13px] text-[#444] text-center leading-relaxed mb-6">
          Bạn chưa thực hiện định danh và liên kết ngân hàng. Để sử dụng các giao dịch từ Ví, bạn cần định danh và liên kết ngân hàng ngay
        </p>
        <button
          onClick={onClose}
          className="w-full py-4 bg-[#1a1a1a] text-white text-[15px] font-semibold rounded-2xl cursor-pointer hover:bg-[#333] transition-colors"
        >
          Thực hiện định danh
        </button>
      </div>
    </div>
  )
}
