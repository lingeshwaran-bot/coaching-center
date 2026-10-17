import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Sparkles, ArrowRight } from "lucide-react";

export default function TeachingApproachSection() {
  return (
    <section
      id="approach"
      aria-label="Our Four-Step Teaching Approach"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Learning Pathway</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Our 4-Step Teaching Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A systematic roadmap from diagnostic evaluation to consistent high performance and exam confidence.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* 4-Step Connected Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
          {siteConfig.teachingApproach.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/60 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-serif text-[#D4AF37] group-hover:scale-105 transition-transform">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-white text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                    {step.tag}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator arrow (on desktop) */}
              {idx < siteConfig.teachingApproach.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#0B1B3D] text-[#D4AF37] items-center justify-center shadow-md"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
