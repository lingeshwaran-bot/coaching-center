"use client";

import React, { useState } from "react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/config/siteConfig";
import { Phone, MapPin, Clock, Mail, Shield, CheckCircle2 } from "lucide-react";
import PolicyModal from "@/components/modals/PolicyModal";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  const quickLinks = [
    { name: "About Academy", href: "#about" },
    { name: "Coaching Courses", href: "#courses" },
    { name: "Our Toppers", href: "#toppers" },
    { name: "Why Parents Choose Us", href: "#why-us" },
    { name: "Teaching Approach", href: "#approach" },
    { name: "Photo Gallery", href: "#gallery" },
    { name: "Parent FAQs", href: "#faqs" },
    { name: "Contact & Location", href: "#contact" },
  ];

  const courseLinks = [
    { name: "AISSEE Class VI Preparation", href: "#courses" },
    { name: "AISSEE Class IX Preparation", href: "#courses" },
    { name: "RMS (Military Schools) CET", href: "#courses" },
    { name: "RIMC Dehradun Coaching", href: "#courses" },
    { name: "Class 6-10 School Foundation", href: "#courses" },
    { name: "Vacation Intensive Crash Camp", href: "#courses" },
  ];

  return (
    <footer className="bg-[#0B1B3D] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block group focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg">
              <Logo variant="light" size="md" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed pr-2">
              Premier educational coaching academy dedicated to preparing young minds for Sainik School, RMS, RIMC entrance examinations, and foundational school excellence in Tamil Nadu.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-[#112656] text-[#F5D061] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                <Shield className="w-3.5 h-3.5" />
                <span>Ethical & Authentic Academic Mentorship</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-white font-bold text-sm tracking-wider uppercase">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5D061] transition-colors focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-white font-bold text-sm tracking-wider uppercase">
              Programs Offered
            </p>
            <ul className="space-y-2 text-sm">
              {courseLinks.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="hover:text-[#F5D061] transition-colors flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{course.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Telephone (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-white font-bold text-sm tracking-wider uppercase">
              Direct Contact
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F5D061] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-400">Primary Admission Line:</p>
                  <a
                    href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                    className="text-white font-bold text-base hover:text-[#F5D061] transition-colors"
                  >
                    {siteConfig.contact.primaryPhoneDisplay}
                  </a>
                </div>
              </div>

              {siteConfig.contact.secondaryPhoneDisplay && (
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F5D061] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-slate-400">Alternate Line:</p>
                    <a
                      href={`tel:${siteConfig.contact.secondaryPhoneTel}`}
                      className="text-slate-200 font-semibold hover:text-[#F5D061] transition-colors"
                    >
                      {siteConfig.contact.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {siteConfig.contact.address.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-slate-300 text-xs">
                  {siteConfig.contact.openingHours}
                </span>
              </div>

              {siteConfig.contact.email && (
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-300 hover:text-white text-xs truncate"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.institutionName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setModalType("privacy")}
              className="hover:text-white underline underline-offset-4 focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModalType("terms")}
              className="hover:text-white underline underline-offset-4 focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              Terms of Academy
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Policy Dialog */}
      <PolicyModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
}
