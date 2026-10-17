"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Quick Action Call Bar"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Primary Call Now Action */}
        <a
          href={`tel:${siteConfig.contact.primaryPhoneTel}`}
          className="flex items-center justify-center gap-2 bg-[#0B1B3D] active:bg-[#112656] text-white py-3 px-3 rounded-xl font-bold text-sm shadow-md transition-transform active:scale-98 min-h-[48px] border border-[#D4AF37]/40 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label={`Call Kalaivani Coaching Center at ${siteConfig.contact.primaryPhoneDisplay}`}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <Phone className="w-4 h-4 text-[#F5D061] shrink-0" aria-hidden="true" />
          <span className="truncate">Call Now</span>
        </a>

        {/* Secondary Enquiry Action */}
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 bg-amber-50 active:bg-amber-100 text-[#0B1B3D] border border-[#D4AF37] py-3 px-3 rounded-xl font-bold text-sm transition-transform active:scale-98 min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="Enquire about admissions"
        >
          <MessageSquare className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
          <span className="truncate">Enquire</span>
        </a>
      </div>
    </div>
  );
}
