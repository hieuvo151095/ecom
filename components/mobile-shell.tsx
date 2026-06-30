"use client"

import { useState } from "react"
import { Homepage } from "@/components/screens/homepage"
import { BlockedPopup } from "@/components/screens/blocked-popup"
import { EcoSchoolLanding } from "@/components/screens/eco-school-landing"
import { EcoSchoolHomepage } from "@/components/screens/eco-school-homepage"

export type Screen =
  | "home"
  | "eco-school-landing"
  | "eco-school-home"

export function MobileShell() {
  const [screen, setScreen] = useState<Screen>("home")
  const [showBlockedPopup, setShowBlockedPopup] = useState(false)
  const [studentLinked, setStudentLinked] = useState(false)

  return (
    <div
      className="relative bg-[#f2f2f2] overflow-hidden font-sans"
      style={{
        width: 390,
        height: 844,
        borderRadius: 48,
        boxShadow:
          "0 0 0 10px #1a1a1a, 0 0 0 12px #2a2a2a, 0 40px 80px rgba(0,0,0,0.55)",
      }}
    >
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 pt-3 pb-1 bg-transparent pointer-events-none">
        <span className="text-xs font-semibold text-[#111]">14:56</span>
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="7" width="3" height="5" rx="0.5" fill="#111" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="#111" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#111" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#111" opacity="0.3" />
          </svg>
          {/* WiFi */}
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
            <path d="M7.5 10.5C8.05 10.5 8.5 10.05 8.5 9.5C8.5 8.95 8.05 8.5 7.5 8.5C6.95 8.5 6.5 8.95 6.5 9.5C6.5 10.05 6.95 10.5 7.5 10.5Z" fill="#111"/>
            <path d="M5.2 7.8C5.8 7.2 6.6 6.8 7.5 6.8C8.4 6.8 9.2 7.2 9.8 7.8" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M3 5.6C4.1 4.5 5.7 3.8 7.5 3.8C9.3 3.8 10.9 4.5 12 5.6" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M0.8 3.3C2.3 1.9 4.8 1 7.5 1C10.2 1 12.7 1.9 14.2 3.3" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {/* Battery */}
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
            <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="#111" strokeOpacity="0.35"/>
            <rect x="1.5" y="1.5" width="13" height="9" rx="2" fill="#111"/>
            <path d="M19 4V8C19.8 7.6 20.5 6.9 20.5 6C20.5 5.1 19.8 4.4 19 4Z" fill="#111" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Screen Content */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 48 }}>
        {screen === "home" && (
          <Homepage
            onIconClick={(icon) => {
              if (icon === "eco-school") {
                setScreen("eco-school-landing")
              } else {
                setShowBlockedPopup(true)
              }
            }}
          />
        )}
        {screen === "eco-school-landing" && (
          <EcoSchoolLanding
            onBack={() => setScreen("home")}
            onStudentLinked={() => {
              setStudentLinked(true)
              setScreen("eco-school-home")
            }}
          />
        )}
        {screen === "eco-school-home" && (
          <EcoSchoolHomepage onBack={() => setScreen("home")} />
        )}
      </div>

      {/* Blocked popup overlay */}
      {showBlockedPopup && (
        <BlockedPopup onClose={() => setShowBlockedPopup(false)} />
      )}

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#111] rounded-full opacity-20 pointer-events-none z-50" />
    </div>
  )
}
