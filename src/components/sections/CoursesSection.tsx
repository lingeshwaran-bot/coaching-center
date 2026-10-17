"use client";

import React, { useState } from "react";
import { siteConfig, CourseProgram } from "@/config/siteConfig";
import { Phone, Clock, Users, BookOpen, CheckCircle, Sparkles, AlertCircle } from "lucide-react";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "entrance" | "school">("all");

  const filteredCourses = siteConfig.courses.filter((course) => {
    if (activeTab === "all") return true;
    if (activeTab === "entrance") {
      return (
        course.id.includes("aissee") ||
        course.id.includes("rms") ||
        course.id.includes("rimc") ||
        course.id.includes("vacation")
      );
    }
    if (activeTab === "school") {
      return course.id.includes("school");
    }
    return true;
  });

  return (
    <section
      id="courses"
      aria-label="Courses and Coaching Programs"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Entrance Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Comprehensive Coaching Courses
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Structured batches designed for conceptual mastery, exam speed, and high competitive performance.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
              activeTab === "all"
                ? "bg-[#0B1B3D] text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Programs ({siteConfig.courses.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("entrance")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
              activeTab === "entrance"
                ? "bg-[#0B1B3D] text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Sainik & Military School Entrance
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("school")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
              activeTab === "school"
                ? "bg-[#0B1B3D] text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            School Board Foundation (Class 6–10)
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: CourseProgram) => (
            <div
              key={course.id}
              className="flex flex-col justify-between bg-[#FAF9F6] rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#D4AF37]/60 overflow-hidden group"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-[#0B1B3D] px-3 py-1 rounded-full border border-amber-300">
                    {course.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {course.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D] group-hover:text-[#B8860B] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {course.subtitle}
                  </p>
                </div>

                {/* Target Audience Badge */}
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                  <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">{course.targetGroup}</span>
                </div>

                {/* Key Subjects */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Subjects Covered:</span>
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {course.subjects.map((subj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Approach */}
                <div className="pt-2 text-xs text-slate-600 border-t border-slate-200">
                  <strong className="text-slate-800">Approach: </strong>
                  <span>{course.learningApproach}</span>
                </div>
              </div>

              {/* Card Bottom / Action */}
              <div className="p-6 bg-white border-t border-slate-200 space-y-3">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{course.feeNote}</span>
                </div>

                <a
                  href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1B3D] hover:bg-[#112656] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 border border-[#D4AF37]/40 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-label={`Call to enquire about ${course.title}`}
                >
                  <Phone className="w-4 h-4 text-[#F5D061]" />
                  <span>Call to Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Course Consultation Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0B1B3D] to-[#112656] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4AF37]/40 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
              Not sure which course fits your child&apos;s current class?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak with our senior counselor. We evaluate your child&apos;s birth date, current school board, and entrance eligibility over a short phone call.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#061026] px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-transform active:scale-95 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call {siteConfig.contact.primaryPhoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
