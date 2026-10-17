"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Award, CheckCircle, ShieldCheck, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Welcome and Introduction"
      className="relative bg-[#0B1B3D] text-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-academic-pattern border-b border-[#D4AF37]/30"
    >
      {/* Decorative ambient gold radial highlights */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 -right-10 w-96 h-96 bg-sky-500/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Props, Call CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Admission Badge */}
            <div className="inline-flex items-center gap-2 bg-[#112656] border border-[#D4AF37]/50 rounded-full px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#F5D061] animate-ping" />
              <span className="text-xs sm:text-sm font-semibold text-[#F5D061] tracking-wide">
                Admissions Open for 2025–2026 Batches
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
              Building Bright Futures{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2A3] via-[#F5D061] to-[#D4AF37]">
                Through Quality Coaching
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.subheadline}
            </p>

            {/* Key Features Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              {siteConfig.hero.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              {/* Primary Call Button */}
              <a
                href={siteConfig.hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C158] hover:to-[#C5A059] text-[#061026] px-7 py-4 rounded-xl font-extrabold text-base shadow-xl hover:shadow-[#D4AF37]/20 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
                aria-label={`Call Kalaivani Coaching Center for Admission Enquiry at ${siteConfig.contact.primaryPhoneDisplay}`}
              >
                <div className="p-1.5 bg-[#061026]/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[#061026]" aria-hidden="true" />
                </div>
                <span>{siteConfig.hero.primaryCta.text}</span>
              </a>

              {/* Secondary Button: Meet Our Toppers */}
              <a
                href={siteConfig.hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 bg-[#112656] hover:bg-[#1A377B] text-slate-100 hover:text-white px-6 py-4 rounded-xl font-bold text-base border border-slate-700/80 transition-all hover:border-[#D4AF37]/60 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Award className="w-5 h-5 text-[#F5D061]" aria-hidden="true" />
                <span>{siteConfig.hero.secondaryCta.text}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Direct Phone Availability Strip */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Parent Hotline: </span>
              <strong className="text-slate-200">{siteConfig.contact.primaryPhoneDisplay}</strong>
              <span className="hidden sm:inline">({siteConfig.contact.openingHours})</span>
            </div>
          </div>

          {/* Right Column: Premium Academic Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              {/* Outer decorative card frame */}
              <div className="rounded-3xl p-1 bg-gradient-to-b from-[#D4AF37]/50 via-slate-700/30 to-[#0B1B3D] shadow-2xl">
                <div className="bg-[#07132C]/95 backdrop-blur-md rounded-[22px] p-6 sm:p-7 border border-[#D4AF37]/20 space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[#D4AF37]/15 rounded-xl border border-[#D4AF37]/30">
                        <Sparkles className="w-5 h-5 text-[#F5D061]" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase font-bold tracking-wider text-[#D4AF37]">
                          Academy Spotlight
                        </p>
                        <h2 className="text-base font-bold text-white">
                          Proven Coaching Structure
                        </h2>
                      </div>
                    </div>
                    <span className="text-xs bg-[#112656] text-amber-200 px-2.5 py-1 rounded-full font-medium">
                      Batch 2025–26
                    </span>
                  </div>

                  {/* Feature preview 1: Sainik School & RMS Entrance */}
                  <div className="bg-[#0B1B3D] p-4 rounded-xl border border-slate-800 hover:border-[#D4AF37]/40 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                          Primary Specialization
                        </span>
                        <h3 className="text-sm font-bold text-white mt-0.5">
                          AISSEE (Class 6 & 9) & RMS CET
                        </h3>
                        <p className="text-xs text-slate-300 mt-1">
                          Rigorous Mathematics shortcuts, reasoning tests, and 50+ timed OMR sheet mock drills.
                        </p>
                      </div>
                      <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                        <Award className="w-5 h-5 text-[#F5D061]" />
                      </div>
                    </div>
                  </div>

                  {/* Feature preview 2: Academic Excellence */}
                  <div className="bg-[#0B1B3D] p-4 rounded-xl border border-slate-800 hover:border-[#D4AF37]/40 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                          School Foundation
                        </span>
                        <h3 className="text-sm font-bold text-white mt-0.5">
                          Class 6 to 10 Maths & Science
                        </h3>
                        <p className="text-xs text-slate-300 mt-1">
                          Individual attention, clear concept mastery, and regular school exam score enhancement.
                        </p>
                      </div>
                      <div className="p-2 bg-sky-500/10 rounded-lg shrink-0">
                        <BookOpen className="w-5 h-5 text-sky-400" />
                      </div>
                    </div>
                  </div>

                  {/* Immediate Direct Call Card */}
                  <div className="bg-gradient-to-r from-[#112656] to-[#1A377B] p-4 rounded-xl border border-[#D4AF37]/40 text-center">
                    <p className="text-xs text-amber-200 font-medium">
                      Speak directly with our Academic Director
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                      className="mt-2.5 inline-flex items-center justify-center gap-2 w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#061026] py-2.5 px-4 rounded-lg font-bold text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {siteConfig.contact.primaryPhoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
