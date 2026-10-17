"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className="py-16 md:py-24 bg-[#FAF9F6] border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Parent Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers to help you understand our courses, eligibility, and admission process.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                  isOpen ? "border-[#D4AF37] ring-1 ring-[#D4AF37]/30" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-amber-50 text-[#B8860B]" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4">
          <p className="text-sm sm:text-base font-bold text-[#0B1B3D]">
            Have a question not listed here?
          </p>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our admission coordinator is happy to clarify exam dates, syllabus patterns, or student readiness over a direct phone call.
          </p>
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="inline-flex items-center gap-2 bg-[#0B1B3D] hover:bg-[#112656] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F5D061]" />
            <span>Call {siteConfig.contact.primaryPhoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
