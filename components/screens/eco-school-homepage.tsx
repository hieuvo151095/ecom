"use client"

import {
  ChevronLeft,
  HelpCircle,
  GraduationCap,
  Wallet,
  Clock,
  Calendar,
  BookOpen,
  Bell,
  FileText,
  Award,
  User,
  CreditCard,
} from "lucide-react"
import { useState } from "react"

interface EcoSchoolHomepageProps {
  onBack: () => void
}

const page1Icons = [
  { id: "dong-hoc-phi", label: "Đóng học phí", icon: <GraduationCap className="w-6 h-6" /> },
  { id: "nap-diem", label: "Nạp điểm vào thẻ", icon: <CreditCard className="w-6 h-6" /> },
  { id: "lich-su", label: "Lịch sử chi tiêu", icon: <Clock className="w-6 h-6" /> },
  { id: "thoi-khoa-bieu", label: "Thời khoá biểu", icon: <Calendar className="w-6 h-6" /> },
  { id: "theo-doi", label: "Theo dõi điểm danh", icon: <BookOpen className="w-6 h-6" /> },
  { id: "bao-vang", label: "Báo vắng", icon: <Bell className="w-6 h-6" /> },
  { id: "bai-tap", label: "Bài tập", icon: <FileText className="w-6 h-6" /> },
  { id: "ket-qua", label: "Kết quả học tập", icon: <Award className="w-6 h-6" /> },
]

const students = [
  {
    name: "Trần Đăng Khoa",
    phone: "9192930072",
    school: "Trường FINVIET",
    class: "Lớp 10A1",
    balance: "0",
    pendingBills: 1,
  },
  {
    name: "Phan Khánh Vy",
    phone: "9192930059",
    school: "Trường FINVIET",
    class: "Lớp 8B2",
    balance: "150,000",
    pendingBills: 0,
  },
]

export function EcoSchoolHomepage({ onBack }: EcoSchoolHomepageProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="h-full flex flex-col bg-[#f0f0f0]">
      {/* Hero Banner */}
      <div className="relative bg-[#2a2a2a] pt-12 pb-5 px-5 overflow-hidden" style={{ minHeight: 160 }}>
        {/* Decorative circles */}
        <div className="absolute top-4 right-6 w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute top-10 right-14 w-12 h-12 border border-white/10 rounded-full" />
        <div className="absolute -top-4 left-20 w-32 h-32 border border-white/5 rounded-full" />

        {/* Top bar */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center cursor-pointer hover:bg-white/25 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="text-center">
            <p className="text-white text-sm font-bold">ECO School Phụ huynh</p>
          </div>
          <button className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center cursor-pointer hover:bg-white/25 transition-colors">
            <HelpCircle className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Banner image area */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-white text-base font-black leading-tight">THẺ HỌC SINH</p>
            <p className="text-white text-base font-black leading-tight">THÔNG MINH</p>
            <p className="text-white/50 text-[9px] mt-1 uppercase tracking-wide">Bước tiến mới trong chuyển đổi số giáo dục</p>
          </div>
          {/* Mock phone illustration */}
          <div className="w-24 h-20 relative flex-shrink-0">
            <div className="absolute right-0 w-16 h-20 bg-white/10 rounded-xl border border-white/20 flex flex-col items-center justify-center gap-1">
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
              <div className="grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/15 rounded" />
                ))}
              </div>
              <p className="text-white/40 text-[6px]">ECO School</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {/* Feature icons card */}
        <div className="mx-4 -mt-3 bg-white rounded-2xl shadow-sm p-4 mb-3">
          <div className="grid grid-cols-4 gap-3">
            {page1Icons.map((item) => (
              <button
                key={item.id}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#333] transition-colors">
                  <span className="text-white">{item.icon}</span>
                </div>
                <span className="text-[9px] text-[#444] font-medium text-center leading-tight">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <div className="w-5 h-1.5 bg-[#1a1a1a] rounded-full" />
            <div className="w-5 h-1.5 bg-[#ddd] rounded-full" />
          </div>
        </div>

        {/* Danh sách học sinh */}
        <div className="mx-4 mb-3">
          <p className="text-[13px] font-bold text-[#111] mb-2 px-1">Danh sách học sinh</p>
          <div className="flex flex-col gap-3">
            {students.map((student, i) => (
              <div key={i} className="bg-[#f7f7f7] rounded-2xl overflow-hidden border border-[#e8e8e8]">
                {/* Student header */}
                <div className="flex items-center gap-3 px-4 pt-3 pb-2">
                  <div className="w-10 h-10 rounded-full bg-[#ddd] flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-[#888]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#111]">{student.name}</p>
                    <p className="text-[11px] text-[#888]">{student.phone}</p>
                  </div>
                </div>

                {/* Info card */}
                <div className="mx-3 bg-white rounded-xl p-3 mb-2">
                  <div className="flex items-center justify-between py-1 border-b border-[#f0f0f0]">
                    <span className="text-[11px] text-[#888]">Trường</span>
                    <span className="text-[11px] font-semibold text-[#111]">{student.school}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#f0f0f0]">
                    <span className="text-[11px] text-[#888]">Lớp</span>
                    <span className="text-[11px] font-semibold text-[#111]">{student.class}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[11px] text-[#888]">Số dư thẻ</span>
                    <span className="text-[11px] font-semibold text-[#111]">{student.balance} điểm</span>
                  </div>
                </div>

                {/* Pending bill notification */}
                {student.pendingBills > 0 && (
                  <div className="mx-3 mb-3 bg-white rounded-xl px-3 py-2 flex items-center justify-between border border-[#e8e8e8]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#888]" />
                      <span className="text-[11px] text-[#555]">
                        {student.pendingBills} hóa đơn chờ thanh toán
                      </span>
                    </div>
                    <button className="text-[11px] font-bold text-[#1a1a1a] cursor-pointer hover:underline">
                      Thanh toán
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom padding */}
        <div className="h-6" />
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-[#e8e8e8] flex items-center justify-around pt-2 pb-4 px-2">
        {[
          { id: "trang-chu", label: "Trang chủ", active: true },
          { id: "mua-sam", label: "Mua sắm", active: false },
          { id: "thanh-toan", label: "Thanh toán", active: false },
          { id: "don-hang", label: "Đơn hàng", active: false },
          { id: "vi-cua-toi", label: "Ví của tôi", active: false },
        ].map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70"
          >
            <div className={`w-5 h-5 rounded ${item.id === "thanh-toan" ? "w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center" : ""}`}>
              {item.id === "trang-chu" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill={item.active ? "#111" : "none"} stroke="#111" strokeWidth="1.5"/></svg>
              )}
              {item.id === "mua-sam" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="#888" strokeWidth="1.5" fill="none"/></svg>
              )}
              {item.id === "thanh-toan" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
              )}
              {item.id === "don-hang" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#888" strokeWidth="1.5"/><path d="M9 8H15M9 12H15M9 16H12" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
              )}
              {item.id === "vi-cua-toi" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="#888" strokeWidth="1.5" fill="none"/><path d="M16 14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14C8 12.9 8.9 12 10 12H14C15.1 12 16 12.9 16 14Z" stroke="#888" strokeWidth="1.5" fill="none"/></svg>
              )}
            </div>
            <span className={`text-[9px] font-medium ${item.active ? "text-[#111]" : "text-[#888]"}`}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
