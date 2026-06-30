"use client"

import {
  Search,
  Bell,
  ChevronRight,
  Eye,
  EyeOff,
  User,
  Zap,
  Wifi,
  Shield,
  CreditCard,
  PhoneCall,
  Smartphone,
  Signal,
  Gift,
  Building,
  BookOpen,
  GraduationCap,
  Wallet,
  ArrowRightLeft,
  ArrowDownLeft,
  QrCode,
  Plus,
  Calendar,
} from "lucide-react"
import { useState } from "react"

interface HomepageProps {
  onIconClick: (icon: string) => void
}

const mainIcons = [
  { id: "nap-tien", label: "Nạp tiền", icon: <Plus className="w-6 h-6" /> },
  { id: "chuyen-tien", label: "Chuyển tiền", icon: <ArrowRightLeft className="w-6 h-6" /> },
  { id: "rut-tien", label: "Rút tiền", icon: <ArrowDownLeft className="w-6 h-6" /> },
  { id: "ma-thanh-toan", label: "Mã thanh toán", icon: <QrCode className="w-6 h-6" /> },
]

const featureIcons = [
  { id: "dong-hoc-phi", label: "Đóng Học Phí", icon: <GraduationCap className="w-7 h-7" /> },
  { id: "hoc-phi-tra-sau", label: "Học phí trả sau", icon: <CreditCard className="w-7 h-7" /> },
  { id: "eco-school", label: "ECO School", icon: <BookOpen className="w-7 h-7" /> },
]

const vienThongIcons = [
  { id: "nap-tien-dt", label: "Nạp tiền điện thoại", icon: <PhoneCall className="w-6 h-6" /> },
  { id: "ma-the-cao", label: "Mã thẻ cào điện thoại", icon: <Smartphone className="w-6 h-6" /> },
  { id: "nap-data", label: "Nạp data 4G/5G", icon: <Signal className="w-6 h-6" /> },
  { id: "tt-tra-sau", label: "Thanh toán trả sau", icon: <CreditCard className="w-6 h-6" /> },
]

const tienIchIcons = [
  { id: "hd-dien", label: "Hóa đơn tiền điện", icon: <Zap className="w-6 h-6" /> },
  { id: "hd-nuoc", label: "Hóa đơn tiền nước", icon: <Wifi className="w-6 h-6" /> },
  { id: "hd-internet", label: "Hóa đơn Internet", icon: <Wifi className="w-6 h-6" /> },
  { id: "tt-tin-dung", label: "Thanh toán tín dụng", icon: <CreditCard className="w-6 h-6" /> },
  { id: "exu-back", label: "EXu Back", icon: <Gift className="w-6 h-6" /> },
  { id: "mo-tk", label: "Mở TK VPBank", icon: <Building className="w-6 h-6" /> },
  { id: "tai-chinh", label: "Tài chính thu hộ", icon: <Wallet className="w-6 h-6" /> },
  { id: "xem-them", label: "Xem thêm", icon: <Plus className="w-6 h-6" /> },
]

const baoHiemIcons = [
  { id: "bh-xe-may", label: "Bảo hiểm xe máy", icon: <Shield className="w-6 h-6" /> },
  { id: "bh-o-to", label: "Bảo hiểm Ô tô", icon: <Shield className="w-6 h-6" /> },
  { id: "dv-bh", label: "Dịch vụ bảo hiểm", icon: <Shield className="w-6 h-6" /> },
]

const dealItems = [
  { label: "Vé Cổng Kỳ Quan (Công Vi...", type: "Vé", price: "120,000đ" },
  { label: 'Combo "Blue Wave - Biển Ti...', type: "Vé", price: "200,000đ" },
  { label: 'Combo "Bassic Tour - Trải ngh...', type: "Vé", price: "135,000đ" },
  { label: "(Giftpop) Vé tham quan Th...", type: "E-Voucher", price: "500,000đ" },
  { label: "(Giftpop) Phiếu quà tặng tiNi...", type: "E-Voucher", price: "500,000đ" },
  { label: "(Giftpop) Phiếu quà tặng tiNi...", type: "E-Voucher", price: "1,000,000đ" },
]

const partners = ["Suối Tiên Theme Park", "giftpop", "Vietopia"]

export function Homepage({ onIconClick }: HomepageProps) {
  const [balanceVisible, setBalanceVisible] = useState(false)

  return (
    <div className="h-full overflow-y-auto bg-[#f0f0f0]" style={{ scrollbarWidth: "none" }}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Hero Banner */}
      <div className="relative bg-[#ebebeb] pt-12 pb-6 px-5 overflow-hidden" style={{ minHeight: 200 }}>
        {/* Decorative circles */}
        <div className="absolute top-4 right-8 w-20 h-20 border border-[#d0d0d0] rounded-full" />
        <div className="absolute top-12 right-16 w-10 h-10 border border-[#d0d0d0] rounded-full" />
        <div className="absolute -top-4 left-24 w-28 h-28 border border-[#d8d8d8] rounded-full" />

        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#d0d0d0] flex items-center justify-center border-2 border-[#bbb] cursor-pointer hover:bg-[#c4c4c4]">
              <User className="w-5 h-5 text-[#555]" />
            </div>
            <div>
              <p className="text-[#1a1a1a] text-sm font-semibold">Xin chào, Thanh</p>
              <p className="text-[#888] text-[10px]">Chưa xác thực</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onIconClick("search")} className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center cursor-pointer hover:bg-white/90">
              <Search className="w-4 h-4 text-[#444]" />
            </button>
            <button onClick={() => onIconClick("bell")} className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center cursor-pointer hover:bg-white/90 relative">
              <Bell className="w-4 h-4 text-[#444]" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1a1a1a] text-white text-[8px] font-bold rounded-full flex items-center justify-center">29</span>
            </button>
          </div>
        </div>

        {/* Hero text */}
        <div className="mb-2">
          <p className="text-[#1a1a1a] text-lg font-black leading-tight">HỌC PHÍ ĐÚNG HẠN</p>
          <p className="text-[#333] text-base font-bold leading-tight">AN TÂM ĐẾN TRƯỜNG</p>
          <p className="text-[#888] text-xs mt-1">Hạn mức</p>
          <p className="text-[#1a1a1a] text-2xl font-black">10.000.000đ</p>
        </div>
        <button onClick={() => onIconClick("dang-ky")} className="mt-1 px-4 py-1.5 bg-[#1a1a1a] text-white text-xs font-bold rounded-full cursor-pointer hover:bg-[#333]">
          ĐĂNG KÝ NGAY
        </button>
      </div>

      {/* Quick Actions + Wallet Card */}
      <div className="mx-4 -mt-3 bg-white rounded-2xl shadow-sm p-4 mb-3">
        {/* Quick action icons */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {mainIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center group-hover:bg-[#e8e8e8] transition-colors">
                <span className="text-[#333]">{item.icon}</span>
              </div>
              <span className="text-[10px] text-[#444] font-medium text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Verification banner */}
        <div className="border border-[#ccc] rounded-xl p-3 mb-3 flex items-center gap-3 cursor-pointer hover:bg-[#f9f9f9]" onClick={() => onIconClick("dinh-danh")}>
          <div className="w-9 h-9 rounded-xl bg-[#e0e0e0] flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-[#555]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-[#111]">Định danh người dùng theo quy định.</p>
            <p className="text-[9px] text-[#666] leading-tight">Hoàn tất định danh và liên kết ví để hoàn tất thủ tục mở ví theo quy định nhà nước (Thông tư 40/TT-NHNN).</p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#999] flex-shrink-0" />
        </div>

        {/* Balance row */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onIconClick("vi-eco")}
            className="flex-1 flex flex-col gap-0.5 cursor-pointer hover:bg-[#f5f5f5] rounded-lg p-1.5 transition-colors"
          >
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-[#999]" />
              <span className="text-[10px] text-[#666]">Ví ECO</span>
            </div>
            <span className="text-[13px] font-bold text-[#1a73e8] underline">Kích hoạt &rsaquo;</span>
          </button>
          <div className="w-px h-8 bg-[#eee]" />
          <button
            onClick={() => onIconClick("eco-tra-sau")}
            className="flex-1 flex flex-col gap-0.5 cursor-pointer hover:bg-[#f5f5f5] rounded-lg p-1.5 transition-colors"
          >
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-[#999]" />
              <span className="text-[10px] text-[#666]">ECO trả sau</span>
            </div>
            <span className="text-[13px] font-bold text-[#1a73e8] underline">Đăng ký &rsaquo;</span>
          </button>
          <div className="w-px h-8 bg-[#eee]" />
          <button onClick={() => onIconClick("eco-xu")} className="w-10 h-10 rounded-full bg-[#e8e8e8] flex items-center justify-center cursor-pointer hover:bg-[#ddd] flex-shrink-0">
            <span className="text-[10px] font-bold text-[#555]">0</span>
          </button>
        </div>
      </div>

      {/* Feature icons */}
      <div className="mx-4 mb-3">
        <div className="flex items-center justify-around bg-white rounded-2xl py-4 px-2">
          {featureIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center group-hover:bg-[#e8e8e8] transition-colors">
                <span className="text-[#333]">{item.icon}</span>
              </div>
              <span className="text-[10px] text-[#444] font-medium text-center w-16 leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Viễn thông */}
      <div className="mx-4 mb-3 bg-white rounded-2xl py-4 px-3">
        <p className="text-sm font-bold text-[#111] mb-3">Viễn thông</p>
        <div className="grid grid-cols-4 gap-2">
          {vienThongIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center group-hover:bg-[#e8e8e8] transition-colors">
                <span className="text-[#444]">{item.icon}</span>
              </div>
              <span className="text-[9px] text-[#555] font-medium text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tiện ích */}
      <div className="mx-4 mb-3 bg-white rounded-2xl py-4 px-3">
        <p className="text-sm font-bold text-[#111] mb-3">Tiện ích</p>
        <div className="grid grid-cols-4 gap-2">
          {tienIchIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center group-hover:bg-[#e8e8e8] transition-colors">
                <span className="text-[#444]">{item.icon}</span>
              </div>
              <span className="text-[9px] text-[#555] font-medium text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bảo hiểm */}
      <div className="mx-4 mb-3 bg-white rounded-2xl py-4 px-3">
        <p className="text-sm font-bold text-[#111] mb-3">Bảo hiểm</p>
        <div className="flex gap-4">
          {baoHiemIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <div className="relative w-12 h-12 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center group-hover:bg-[#e8e8e8] transition-colors">
                <span className="text-[#444]">{item.icon}</span>
                {(item.id === "bh-xe-may" || item.id === "bh-o-to") && (
                  <span className="absolute -top-1 -right-1 bg-[#444] text-white text-[7px] px-1 rounded-full">
                    {item.id === "bh-xe-may" ? "-43%" : "-21%"}
                  </span>
                )}
              </div>
              <span className="text-[9px] text-[#555] font-medium text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Ưu đãi dành riêng */}
      <div className="mx-4 mb-3 bg-[#f7f7f7] rounded-2xl py-4 px-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-[#111]">Ưu đãi dành riêng bạn</p>
          <button onClick={() => onIconClick("xem-them-uu-dai")} className="text-[11px] text-[#1a73e8] font-medium cursor-pointer hover:underline">Xem thêm</button>
        </div>
        <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-[#e8e8e8]">
          <div className="w-10 h-10 rounded-xl bg-[#e0e0e0] flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-[#555]" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-[#111]">Giảm 43% khi mua bảo hiểm xe...</p>
            <p className="text-[10px] text-[#888] mt-0.5">HSD: 31/12/2026</p>
          </div>
          <button onClick={() => onIconClick("dung-ngay")} className="px-3 py-1.5 bg-[#f0f0f0] border border-[#ddd] text-[#333] text-[10px] font-bold rounded-lg cursor-pointer hover:bg-[#e8e8e8] whitespace-nowrap">Dùng ngay</button>
        </div>
      </div>

      {/* Đối tác thương hiệu */}
      <div className="mx-4 mb-3 bg-white rounded-2xl py-4 px-3">
        <p className="text-sm font-bold text-[#111] mb-3">Đối tác thương hiệu</p>
        <div className="flex items-center justify-around">
          {partners.map((p) => (
            <button key={p} onClick={() => onIconClick("partner")} className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70">
              <div className="w-16 h-16 rounded-full bg-[#e8e8e8] flex items-center justify-center">
                <Building className="w-7 h-7 text-[#666]" />
              </div>
              <span className="text-[9px] text-[#555] text-center font-medium">{p}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Siêu deal */}
      <div className="mx-4 mb-3 bg-[#f7f7f7] rounded-2xl py-4 px-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-[#111]">SIÊU DEAL CHO KHỐI MẦM NON</p>
          <button onClick={() => onIconClick("xem-them-deal")} className="text-[11px] text-[#1a73e8] font-medium cursor-pointer hover:underline">Xem thêm</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {dealItems.map((item, i) => (
            <button
              key={i}
              onClick={() => onIconClick("deal-" + i)}
              className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow text-left"
            >
              <div className="relative">
                <div className="h-20 bg-[#e0e0e0] flex items-center justify-center">
                  <Gift className="w-8 h-8 text-[#aaa]" />
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-white border border-[#ddd] rounded-full flex items-center justify-center">
                  <Plus className="w-3 h-3 text-[#444]" />
                </div>
              </div>
              <div className="p-2">
                <p className="text-[9px] text-[#333] font-medium leading-tight line-clamp-2">{item.label}</p>
                <p className="text-[8px] text-[#888] mt-0.5">{item.type}</p>
                <p className="text-[10px] font-bold text-[#111] mt-0.5">{item.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Vietopia section */}
      <div className="mx-4 mb-3 bg-[#f7f7f7] rounded-2xl py-4 px-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-[#111] uppercase">Vietopia - Khu Vui Chơi Hướng Nghiệp</p>
          <button onClick={() => onIconClick("xem-them-vietopia")} className="text-[11px] text-[#1a73e8] font-medium cursor-pointer hover:underline whitespace-nowrap">Xem thêm</button>
        </div>
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {[
            { label: "Vé vui chơi cả ngày dành ch...", price: "240,000đ", original: "280,000đ", discount: "-14%" },
            { label: "Vé vui chơi cả ngày dành ch...", price: "285,000đ", original: "325,000đ", discount: "-12%" },
          ].map((item, i) => (
            <button key={i} onClick={() => onIconClick("vietopia-" + i)} className="flex-shrink-0 w-32 bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow text-left">
              <div className="relative h-24 bg-[#e0e0e0] flex items-center justify-center">
                <Gift className="w-8 h-8 text-[#aaa]" />
                <span className="absolute top-1 left-1 bg-[#444] text-white text-[8px] px-1 rounded">{item.discount}</span>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-white border border-[#ddd] rounded-full flex items-center justify-center">
                  <Plus className="w-3 h-3 text-[#444]" />
                </div>
              </div>
              <div className="p-2">
                <p className="text-[9px] text-[#333] font-medium leading-tight">{item.label}</p>
                <p className="text-[8px] text-[#888] mt-0.5">Vé</p>
                <p className="text-[10px] font-bold text-[#333] mt-0.5">{item.price}</p>
                <p className="text-[8px] text-[#aaa] line-through">{item.original}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="sticky bottom-0 bg-white border-t border-[#e8e8e8] flex items-center justify-around pt-2 pb-4 px-2">
        {[
          { id: "trang-chu", label: "Trang chủ", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="#111" stroke="#111" strokeWidth="0.5"/></svg>, active: true },
          { id: "mua-sam", label: "Mua sắm", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6ZM16 10C16 11.66 14.66 13 13 13H11C9.34 13 8 11.66 8 10V8H10V10C10 10.55 10.45 11 11 11H13C13.55 11 14 10.55 14 10V8H16V10Z" stroke="#888" strokeWidth="1.5" fill="none"/></svg>, active: false },
          { id: "thanh-toan", label: "Thanh toán", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#111"/><path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, active: false },
          { id: "don-hang", label: "Đơn hàng", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 5H7C5.9 5 5 5.9 5 7V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V7C19 5.9 18.1 5 17 5H15M9 5C9 5.55 9.45 6 10 6H14C14.55 6 15 5.55 15 5C15 4.45 14.55 4 14 4H10C9.45 4 9 4.45 9 5ZM9 12H15M9 16H13" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>, active: false },
          { id: "vi-cua-toi", label: "Ví của tôi", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7ZM20 7L16 3H8L4 7M16 14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14C8 12.9 8.9 12 10 12H14C15.1 12 16 12.9 16 14Z" stroke="#888" strokeWidth="1.5" fill="none"/></svg>, active: false },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onIconClick("nav-" + item.id)}
            className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <span className={`text-[9px] font-medium ${item.active ? "text-[#111]" : "text-[#888]"}`}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
