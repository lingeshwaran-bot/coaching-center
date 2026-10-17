"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface PolicyModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function PolicyModal({ isOpen, type, onClose }: PolicyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAF9F6]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
            <h2 id="policy-modal-title" className="text-lg font-bold text-[#0B1B3D]">
              {type === "privacy" ? "Privacy Policy & Student Data Protection" : "Terms & Academy Guidelines"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === "privacy" ? (
            <>
              <p className="font-semibold text-slate-800">
                Last Updated: Academic Year 2025–2026
              </p>
              <p>
                At <strong>{siteConfig.institutionName}</strong>, we hold the privacy and safety of our students and their families with the highest seriousness. This policy outlines our transparent data handling principles.
              </p>
              <h3 className="font-bold text-slate-900 text-base">1. Direct Communication Only</h3>
              <p>
                Our website does not operate third-party lead generation trackers, automated advertising surveillance, or hidden data brokers. When you initiate a phone call or submit an enquiry, your contact number is used solely by our academic counseling staff to discuss your child&apos;s educational requirements.
              </p>
              <h3 className="font-bold text-slate-900 text-base">2. Protection of Minor Students</h3>
              <p>
                We do not collect unnecessary personal information from children online. Any student achievement profiles, examination marks, or photographs showcased on our website are published with parent or guardian understanding and for celebrating student academic milestones.
              </p>
              <h3 className="font-bold text-slate-900 text-base">3. No Sale or Sharing of Numbers</h3>
              <p>
                Your telephone number and enquiry details are strictly confidential. We never sell, rent, or share parent telephone numbers with commercial marketers, external lenders, or third-party education portals.
              </p>
              <h3 className="font-bold text-slate-900 text-base">4. Contacting the Academy</h3>
              <p>
                If you have questions regarding data privacy or wish to update any family records, please call our primary office directly at {siteConfig.contact.primaryPhoneDisplay} or visit our coaching center during business hours.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800">
                Academy Guidelines & Terms of Service
              </p>
              <p>
                Welcome to <strong>{siteConfig.institutionName}</strong>. By accessing our website and educational programs, you agree to our transparent terms designed to foster a healthy, disciplined learning culture.
              </p>
              <h3 className="font-bold text-slate-900 text-base">1. Authentic Academic Mentorship</h3>
              <p>
                {siteConfig.institutionName} is an independent educational coaching center providing syllabus training, problem-solving techniques, and mock test preparation for competitive school entrance exams (AISSEE, RMS, RIMC) and academic board exams. We do not claim official affiliation with government military agencies or exam-conducting bodies; our role is pure academic guidance.
              </p>
              <h3 className="font-bold text-slate-900 text-base">2. Admission & Batch Discipline</h3>
              <p>
                Admissions to our batches are subject to seat availability and student diagnostic assessment. Regular attendance, completion of daily practice sheets, and respectful classroom behavior are mandatory for all enrolled students.
              </p>
              <h3 className="font-bold text-slate-900 text-base">3. Transparent Fee Structure</h3>
              <p>
                Course fees, installment schedules, and study material provisions are explained clearly to parents before enrollment. There are no hidden charges.
              </p>
              <h3 className="font-bold text-slate-900 text-base">4. Direct Inquiries</h3>
              <p>
                All official announcements, batch timings, and holiday notices are communicated directly to parents via authorized academy telephone lines.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#0B1B3D] text-white text-sm font-semibold rounded-lg hover:bg-[#112656] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
