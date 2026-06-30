"use client"

import { useState } from "react"
import { ChevronLeft, X, ScanLine, Keyboard } from "lucide-react"

interface EcoSchoolLandingProps {
  onBack: () => void
  onStudentLinked: () => void
}

export function EcoSchoolLanding({ onBack, onStudentLinked }: EcoSchoolLandingProps) {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const [studentCode, setStudentCode] = useState("")
  const [protectCode, setProtectCode] = useState("")

  const isFormValid = studentCode.trim().length > 0 && protectCode.trim().length > 0

  return (
    <div className="h-full flex flex-col bg-[#f2f2f2] overflow-hidden">
      {/* Hero area - scrollable only when no sheet */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 pt-12 pb-4">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-[#e0e0e0] flex items-center justify-center cursor-pointer hover:bg-[#d4d4d4] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#444]" />
          </button>
          <span className="text-[#1a1a1a] text-sm font-semibold">ECO School</span>
          <div className="w-9" />
        </div>

        {/* Title */}
        <div className="px-6 pb-2 text-center">
          <p className="text-[#1a1a1a] text-xl font-black tracking-wide leading-tight">
            THẺ HỌC SINH
          </p>
          <p className="text-[#1a1a1a] text-xl font-black tracking-wide leading-tight">
            THÔNG MINH
          </p>
          <p className="text-[#888] text-[10px] font-medium mt-1 tracking-widest uppercase">
            Bước tiến mới trong chuyển đổi số giáo dục
          </p>
        </div>

        {/* Illustration placeholder */}
        <div className="mx-6 my-4 h-52 rounded-2xl bg-[#e8e8e8] border border-[#d8d8d8] flex flex-col items-center justify-center gap-2">
          {/* Mock card illustration */}
          <div className="w-32 h-20 bg-white rounded-xl border border-[#ddd] flex flex-col items-center justify-center relative shadow-sm">
            <p className="text-[#444] text-[8px] font-bold">THẺ HỌC SINH</p>
            <div className="mt-1 w-12 h-12 bg-[#f0f0f0] rounded flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="10" height="10" fill="#333" opacity="0.8"/>
                <rect x="4" y="4" width="6" height="6" fill="#e8e8e8"/>
                <rect x="20" y="2" width="10" height="10" fill="#333" opacity="0.8"/>
                <rect x="22" y="4" width="6" height="6" fill="#e8e8e8"/>
                <rect x="2" y="20" width="10" height="10" fill="#333" opacity="0.8"/>
                <rect x="4" y="22" width="6" height="6" fill="#e8e8e8"/>
                <rect x="14" y="2" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="14" y="8" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="20" y="14" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="14" y="20" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="20" y="20" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="26" y="20" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="14" y="26" width="4" height="4" fill="#333" opacity="0.6"/>
                <rect x="26" y="26" width="4" height="4" fill="#333" opacity="0.6"/>
              </svg>
            </div>
          </div>
          <p className="text-[#888] text-[9px]">Thẻ học sinh thông minh ECO</p>
        </div>

        {/* Steps card */}
        <div className="mx-4 bg-white rounded-2xl p-4 mb-2">
          <p className="text-[13px] font-bold text-[#111] mb-4">
            Quét hoặc nhập thông tin học sinh để liên kết
          </p>
          <div className="flex gap-4">
            {/* Steps */}
            <div className="flex flex-col gap-3 flex-1">
                {[
                { num: 1, text: "Nhập mã học sinh và mã bảo vệ hoặc quét mã QR trên thẻ học sinh." },
                { num: 2, text: "Kiểm tra thông tin học sinh." },
                { num: 3, text: 'Nhấn "Xác nhận" để liên kết.' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e0e0e0] border border-[#ccc] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#444] text-[9px] font-bold">{step.num}</span>
                  </div>
                  <p className="text-[11px] text-[#444] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            {/* QR card mock */}
            <div className="w-24 h-24 bg-[#e8e8e8] rounded-xl flex-shrink-0 flex items-center justify-center border border-[#ddd]">
              <div className="flex flex-col items-center gap-1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="2" y="2" width="12" height="12" fill="#1a1a1a" opacity="0.8"/>
                  <rect x="4" y="4" width="8" height="8" fill="#e8e8e8"/>
                  <rect x="6" y="6" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="26" y="2" width="12" height="12" fill="#1a1a1a" opacity="0.8"/>
                  <rect x="28" y="4" width="8" height="8" fill="#e8e8e8"/>
                  <rect x="30" y="6" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="2" y="26" width="12" height="12" fill="#1a1a1a" opacity="0.8"/>
                  <rect x="4" y="28" width="8" height="8" fill="#e8e8e8"/>
                  <rect x="6" y="30" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="16" y="2" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="22" y="2" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="16" y="8" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="16" y="16" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="22" y="16" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="28" y="16" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="34" y="16" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="16" y="22" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="28" y="22" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="16" y="28" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="22" y="28" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="28" y="28" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="34" y="28" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="16" y="34" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                  <rect x="28" y="34" width="4" height="4" fill="#1a1a1a" opacity="0.6"/>
                </svg>
                <p className="text-[7px] text-[#888]">Quét mã QR</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mx-4 flex flex-col gap-2 mb-4">
          <button
            onClick={() => {}}
            className="w-full py-4 bg-[#f0f0f0] border border-[#ddd] text-[#1a1a1a] text-[14px] font-semibold rounded-2xl cursor-pointer hover:bg-[#e8e8e8] transition-colors flex items-center justify-center gap-2"
          >
            <ScanLine className="w-4 h-4" />
            Quét mã QR
          </button>
          <button
            onClick={() => setShowBottomSheet(true)}
            className="w-full py-4 bg-white text-[#1a1a1a] text-[14px] font-semibold rounded-2xl cursor-pointer hover:bg-[#f5f5f5] transition-colors border border-[#e0e0e0] flex items-center justify-center gap-2"
          >
            <Keyboard className="w-4 h-4" />
            Nhập thông tin
          </button>
          <div className="text-center mt-1">
            <span className="text-[#888] text-[11px]">Bạn làm hỏng, mất thẻ, </span>
            <button onClick={() => {}} className="text-[#555] text-[11px] underline cursor-pointer hover:text-[#222]">Cấp lại thẻ</button>
          </div>
        </div>
      </div>

      {/* Bottom Sheet */}
      {showBottomSheet && (
        <div
          className="absolute inset-0 z-40"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowBottomSheet(false)}
        >
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="w-10 h-1 bg-[#ddd] rounded-full mx-auto mb-4" />

            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-[16px] font-bold text-[#111]">Kích hoạt liên kết học sinh</h3>
                <p className="text-[11px] text-[#666] mt-1">
                  Vui lòng liên hệ Hotline{" "}
                  <span className="font-bold text-[#111]">1900 9005</span>{" "}
                  để được hỗ trợ cung cấp mã bảo vệ
                </p>
              </div>
              <button
                onClick={() => setShowBottomSheet(false)}
                className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0] flex-shrink-0 ml-2"
              >
                <X className="w-4 h-4 text-[#555]" />
              </button>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-3 mt-4">
              <div className="border border-[#e0e0e0] rounded-2xl px-4 py-3 focus-within:border-[#888] transition-colors">
                <input
                  type="text"
                  placeholder="Mã học sinh"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                  className="w-full text-[14px] text-[#111] placeholder-[#bbb] bg-transparent outline-none"
                />
              </div>
              <div className="border border-[#e0e0e0] rounded-2xl px-4 py-3 focus-within:border-[#888] transition-colors">
                <input
                  type="text"
                  placeholder="Mã bảo vệ"
                  value={protectCode}
                  onChange={(e) => setProtectCode(e.target.value)}
                  className="w-full text-[14px] text-[#111] placeholder-[#bbb] bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Confirm button */}
            <button
              onClick={() => {
                if (isFormValid) {
                  setShowBottomSheet(false)
                  onStudentLinked()
                }
              }}
              disabled={!isFormValid}
              className={`w-full mt-5 mb-2 py-4 text-[15px] font-semibold rounded-2xl transition-all ${
                isFormValid
                  ? "bg-[#f0f0f0] border border-[#ccc] text-[#1a1a1a] cursor-pointer hover:bg-[#e8e8e8]"
                  : "bg-[#f5f5f5] border border-[#e8e8e8] text-[#bbb] cursor-not-allowed"
              }`}
            >
              Xác nhận
            </button>

            {/* Bottom safe area */}
            <div className="h-4" />
          </div>
        </div>
      )}
    </div>
  )
}


