import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { GraduationCap, Users, FileCheck, PhoneCall } from "lucide-react";

export default function TrustStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    Users: <Users className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    FileCheck: <FileCheck className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    PhoneCall: <PhoneCall className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
  };

  return (
    <section
      aria-label="Core Academy Assurances"
      className="bg-white py-8 border-b border-slate-200 relative z-20 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.trustStrip.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80 hover:border-[#D4AF37]/50 transition-colors shadow-2xs group"
            >
              <div className="p-3 bg-[#FDF8E8] group-hover:bg-[#F5D061]/30 rounded-xl border border-[#D4AF37]/40 shrink-0 transition-colors">
                {iconMap[item.iconName] || <GraduationCap className="w-6 h-6 text-[#0B1B3D]" />}
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-[#0B1B3D] tracking-tight">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
