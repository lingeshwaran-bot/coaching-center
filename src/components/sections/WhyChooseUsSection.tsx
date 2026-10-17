import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  UserCheck,
  BookOpenCheck,
  FileSpreadsheet,
  HelpCircle,
  ShieldCheck,
  MessageSquareHeart,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    BookOpenCheck: <BookOpenCheck className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    HelpCircle: <HelpCircle className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
    MessageSquareHeart: <MessageSquareHeart className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />,
  };

  return (
    <section
      id="why-us"
      aria-label="Why Parents Choose Kalaivani Coaching Center"
      className="py-16 md:py-24 bg-[#FAF9F6] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Kalaivani Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Why Parents Trust Our Coaching
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A focused, caring academic atmosphere where your child is never just a roll number, but a student with unlimited potential.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Feature Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/60 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FDF8E8] group-hover:bg-[#F5D061]/30 border border-[#D4AF37]/40 flex items-center justify-center transition-colors">
                {iconComponents[feature.icon] || <ShieldCheck className="w-6 h-6 text-[#0B1B3D]" />}
              </div>

              <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#B8860B] transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
