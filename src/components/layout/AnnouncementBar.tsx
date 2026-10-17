"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Bell, Phone, X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!siteConfig.announcement.isActive || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Admission Announcement"
      className="bg-[#0B1B3D] text-slate-100 border-b border-[#D4AF37]/30 text-xs sm:text-sm py-2 px-4 transition-all duration-300 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#0B1B3D] font-bold text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full shrink-0 uppercase tracking-wider">
            <Bell className="w-3 h-3 animate-bounce" aria-hidden="true" />
            {siteConfig.announcement.badge}
          </span>
          <p className="truncate text-slate-200 font-medium">
            {siteConfig.announcement.message}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.contact.primaryPhoneTel ? `tel:${siteConfig.contact.primaryPhoneTel}` : "#contact"}
            className="hidden sm:inline-flex items-center gap-1.5 text-[#F5D061] hover:text-white font-semibold underline underline-offset-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded px-1"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{siteConfig.announcement.ctaText}</span>
          </a>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement bar"
            className="text-slate-400 hover:text-white p-1 rounded transition-colors focus-visible:ring-1 focus-visible:ring-amber-400"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}
