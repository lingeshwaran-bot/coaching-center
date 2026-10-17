import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Shield, HeartHandshake, Sparkles, BookOpen, UserCheck } from "lucide-react";

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      aria-label="About Kalaivani Coaching Center"
      className="py-16 md:py-24 bg-[#FAF9F6] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.subtitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            {about.title}
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Academic Philosophy & Goals (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg font-medium text-[#0B1B3D]">
                {about.introduction}
              </p>
              <p>
                {about.philosophy}
              </p>
              <p>
                {about.learningEnvironment}
              </p>
            </div>

            {/* Academic Mission Quote Box */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border-l-4 border-l-[#D4AF37] border-y border-r border-slate-200 shadow-xs space-y-2">
              <p className="text-xs uppercase font-bold tracking-wider text-[#B8860B]">
                Our Academic Commitment
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#0B1B3D] italic">
                &ldquo;{about.academicGoals}&rdquo;
              </p>
            </div>

            {/* Quick Assurance Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <Shield className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0B1B3D]">Verified Curriculum</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Strictly aligned with latest NTA and State Board test syllabi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0B1B3D]">Parent Partnership</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Transparent marks sharing and continuous guidance for home study.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Support Pillars Card Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#B8860B]" />
                  <h3 className="text-base font-bold text-[#0B1B3D]">Four Pillars of Our Teaching</h3>
                </div>
                <span className="text-xs font-semibold text-[#D4AF37] bg-amber-50 px-2 py-0.5 rounded">
                  Methodology
                </span>
              </div>

              <div className="space-y-4">
                {about.supportPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-7 h-7 rounded-full bg-amber-50 text-[#B8860B] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-amber-200 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1B3D]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Classroom Environment Card Note */}
              <div className="pt-4 border-t border-slate-100">
                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-dashed border-[#D4AF37]/60 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-[#0B1B3D] shrink-0" />
                  <p className="text-xs text-slate-700 leading-snug">
                    <strong>Zero-Distraction Policy:</strong> Modern classroom facilities with disciplined peer focus, supervised homework hours, and dedicated mentors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
