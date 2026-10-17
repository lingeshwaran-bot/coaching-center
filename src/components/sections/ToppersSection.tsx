"use client";

import React, { useState } from "react";
import { siteConfig, StudentTopper } from "@/config/siteConfig";
import { Award, Trophy, Star, Phone, User, CheckCircle2, Info } from "lucide-react";

export default function ToppersSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredToppers = siteConfig.toppers.filter((topper) => {
    if (filter === "all") return true;
    return topper.category === filter;
  });

  return (
    <section
      id="toppers"
      aria-label="Student Achievements and Toppers"
      className="py-16 md:py-24 bg-[#0B1B3D] text-white relative overflow-hidden bg-academic-pattern border-b border-[#D4AF37]/30"
    >
      {/* Decorative ambient gold glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#112656] text-[#F5D061] border border-[#D4AF37]/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#F5D061]" />
            <span>Academic Excellence & Results</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-white tracking-tight">
            Celebrating Our Student Toppers
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Showcasing hard work, consistent discipline, and outstanding marks achieved by our students in entrance and board examinations.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Owner Guidance Notice Strip (Transparent & Professional) */}
        <div className="max-w-3xl mx-auto mb-10 bg-[#112656]/90 border border-[#D4AF37]/40 rounded-xl p-3.5 sm:p-4 text-xs text-amber-100 flex items-start gap-3 shadow-md">
          <Info className="w-4 h-4 text-[#F5D061] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-semibold text-white">
              Notice for Academy Administrator:
            </p>
            <p className="text-slate-300">
              The cards below illustrate our structured topper showcase. You can effortlessly update student photos, names, marks, and ranks in a single file: <code className="bg-[#0B1B3D] px-1.5 py-0.5 rounded text-[#F5D061]">src/config/siteConfig.ts</code> without altering code!
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Achievements" },
            { id: "sainik_6", label: "Sainik School Class 6" },
            { id: "sainik_9", label: "Sainik School Class 9" },
            { id: "rms", label: "RMS Military School" },
            { id: "academic", label: "Board Exam Excellence" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] shrink-0 ${
                filter === cat.id
                  ? "bg-[#D4AF37] text-[#061026] shadow-lg"
                  : "bg-[#112656] text-slate-300 hover:text-white hover:bg-[#1A377B]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Topper Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredToppers.map((topper: StudentTopper) => {
            const percentageVal = Math.round((topper.marksObtained / topper.maxMarks) * 100);

            return (
              <div
                key={topper.id}
                className="bg-[#07132C]/95 rounded-2xl border border-slate-700/80 hover:border-[#D4AF37] transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Card Top: Avatar & Achievement Badges */}
                <div className="p-6 space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    {/* Student Photo Container */}
                    <div className="relative">
                      {topper.photoUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={topper.photoUrl}
                          alt={`Photograph of student topper ${topper.name}`}
                          className="w-20 h-20 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-md"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-2xl bg-[#0B1B3D] border-2 border-[#D4AF37]/60 flex flex-col items-center justify-center text-center p-1 shadow-inner relative group-hover:border-[#D4AF37] transition-colors">
                          <User className="w-8 h-8 text-[#D4AF37]/80" aria-hidden="true" />
                          <span className="text-[9px] text-amber-200 font-semibold tracking-tighter uppercase leading-tight mt-0.5">
                            Photo Slot
                          </span>
                        </div>
                      )}

                      {/* Gold Badge Emblem Overlay */}
                      <div
                        className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-[#B8860B] to-[#F5D061] text-[#061026] p-1.5 rounded-full shadow-md"
                        title="Academic Achievement"
                      >
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Examination Year & Category Badge */}
                    <div className="text-right space-y-1">
                      <span className="inline-block bg-[#112656] text-[#F5D061] border border-[#D4AF37]/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                        Exam Year {topper.year}
                      </span>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {topper.categoryLabel}
                      </p>
                    </div>
                  </div>

                  {/* Student Name & Examination Title */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-white group-hover:text-[#F5D061] transition-colors">
                      {topper.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
                      {topper.examination}
                    </p>
                  </div>

                  {/* Marks Showcase Card with High-Contrast Progress */}
                  <div className="bg-[#0B1B3D] p-3.5 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Marks Secured
                      </span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-black text-white">
                          {topper.marksObtained}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {" "}/ {topper.maxMarks}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={topper.marksObtained}
                      aria-valuemin={0}
                      aria-valuemax={topper.maxMarks}
                      aria-label={`${topper.name} scored ${topper.marksObtained} out of ${topper.maxMarks}`}
                    >
                      <div
                        className="bg-gradient-to-r from-[#D4AF37] to-[#F5D061] h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentageVal}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span className="text-slate-400 font-medium">Percentage:</span>
                      <span className="font-bold text-[#F5D061]">{topper.percentage}</span>
                    </div>
                  </div>

                  {/* Rank / Honor Strip */}
                  {topper.rankOrHonor && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#F5D061] bg-[#112656]/60 p-2 rounded-lg border border-[#D4AF37]/20">
                      <Star className="w-3.5 h-3.5 shrink-0 fill-current" />
                      <span>{topper.rankOrHonor}</span>
                    </div>
                  )}

                  {/* Notes / Highlights */}
                  {topper.notes && (
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      &ldquo;{topper.notes}&rdquo;
                    </p>
                  )}
                </div>

                {/* Card Bottom Action */}
                <div className="px-6 py-4 bg-[#050E20] border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Verified Performance
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                    className="text-xs font-bold text-[#F5D061] hover:text-white flex items-center gap-1 transition-colors"
                    aria-label={`Enquire about preparation like ${topper.name}`}
                  >
                    <span>Enquire Batch</span>
                    <Phone className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-sm text-slate-300">
            Want your child to build strong exam confidence and achieve high marks?
          </p>
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C158] hover:to-[#C5A059] text-[#061026] px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-xl transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#061026]" />
            <span>Call Our Admission Coordinator for Enrollment</span>
          </a>
        </div>
      </div>
    </section>
  );
}
