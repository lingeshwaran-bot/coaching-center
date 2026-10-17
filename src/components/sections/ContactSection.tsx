"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentClass: "Class 5 (AISSEE VI Aspirant)",
    preferredCourse: "AISSEE Class VI Preparation",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      errors.parentName = "Please enter parent or guardian name";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit telephone number";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kalaivani Coaching Center,\nI would like to enquire about admissions.\nParent Name: ${formData.parentName}\nPhone: ${formData.phone}\nStudent's Class: ${formData.studentClass}\nPreferred Course: ${formData.preferredCourse}\nNotes: ${formData.message || "Please share batch timings and admission details."}`
  );

  return (
    <section
      id="contact"
      aria-label="Contact and Admissions Enquiry"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Admissions & Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Connect With Our Academy
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            For fastest assistance, call our admission coordinator directly. We are available 7 days a week.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Direct Call & Academy Information (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary High-Priority Call Card */}
            <div className="bg-gradient-to-br from-[#0B1B3D] to-[#112656] rounded-2xl p-7 sm:p-8 text-white shadow-xl border border-[#D4AF37]/50 relative overflow-hidden space-y-6">
              <div
                className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="space-y-2 relative z-10">
                <span className="text-xs uppercase font-bold tracking-wider text-[#F5D061]">
                  Direct Telephone Enquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Speak Directly with Our Admission Director
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Immediate guidance on age eligibility, upcoming batches, syllabus coverage, and counseling.
                </p>
              </div>

              {/* Huge Click-to-Call Button */}
              <div className="relative z-10 pt-2">
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C158] hover:to-[#C5A059] text-[#061026] py-4 px-6 rounded-xl font-extrabold text-lg sm:text-xl shadow-lg transition-all active:scale-98 focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Call ${siteConfig.contact.primaryPhoneDisplay} directly`}
                >
                  <Phone className="w-6 h-6 text-[#061026]" />
                  <span>Call {siteConfig.contact.primaryPhoneDisplay}</span>
                </a>
                <p className="text-center text-[11px] text-amber-200 mt-2">
                  Opens directly in your phone dialler with zero third-party routing.
                </p>
              </div>

              {/* Secondary Phone Number */}
              {siteConfig.contact.secondaryPhoneDisplay && (
                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                  <span>Alternate Telephone:</span>
                  <a
                    href={`tel:${siteConfig.contact.secondaryPhoneTel}`}
                    className="font-bold text-[#F5D061] hover:underline"
                  >
                    {siteConfig.contact.secondaryPhoneDisplay}
                  </a>
                </div>
              )}
            </div>

            {/* Academy Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="bg-[#FAF9F6] p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#0B1B3D]">
                  <MapPin className="w-5 h-5 text-[#B8860B]" />
                  <h4 className="text-sm font-bold">Campus Address</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {siteConfig.contact.address.fullAddress}
                </p>
              </div>

              {/* Working Hours Card */}
              <div className="bg-[#FAF9F6] p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#0B1B3D]">
                  <Clock className="w-5 h-5 text-[#B8860B]" />
                  <h4 className="text-sm font-bold">Visiting Hours</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {siteConfig.contact.openingHours}
                </p>
                <p className="text-[11px] text-emerald-700 font-medium">
                  • Center open on weekends for parent visits
                </p>
              </div>
            </div>

            {/* Email Card (if available) */}
            {siteConfig.contact.email && (
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                  <span>Official Email:</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-semibold text-[#0B1B3D] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Transparent Quick Enquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-[#B8860B]">
                  Admission Form
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0B1B3D]">
                  Request an Admission Callback
                </h3>
                <p className="text-xs text-slate-600">
                  Fill in your details below to instantly connect with our coordinator via direct call or WhatsApp.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-emerald-900">
                      Thank You, {formData.parentName}!
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Your enquiry details have been generated. Click below to initiate an immediate call or message with our admission desk:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#0B1B3D] text-white py-3 px-5 rounded-xl font-bold text-sm shadow hover:bg-[#112656]"
                    >
                      <Phone className="w-4 h-4 text-[#F5D061]" />
                      <span>Call Now ({siteConfig.contact.primaryPhoneDisplay})</span>
                    </a>

                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-5 rounded-xl font-bold text-sm shadow hover:bg-emerald-700"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1"
                    >
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      placeholder="e.g. S. Murugan"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                        formErrors.parentName
                          ? "border-red-400 bg-red-50/50"
                          : "border-slate-300"
                      }`}
                    />
                    {formErrors.parentName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Telephone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1"
                    >
                      Contact Telephone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 94431 23456"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                        formErrors.phone
                          ? "border-red-400 bg-red-50/50"
                          : "border-slate-300"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Student Class */}
                  <div>
                    <label
                      htmlFor="studentClass"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1"
                    >
                      Student&apos;s Current Class
                    </label>
                    <select
                      id="studentClass"
                      value={formData.studentClass}
                      onChange={(e) =>
                        setFormData({ ...formData, studentClass: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <option>Class 4 (Early Entrance Foundation)</option>
                      <option>Class 5 (AISSEE Class VI Aspirant)</option>
                      <option>Class 6 (Middle School Foundation)</option>
                      <option>Class 7 (Pre-AISSEE IX)</option>
                      <option>Class 8 (AISSEE Class IX Aspirant)</option>
                      <option>Class 9 (School Board Foundation)</option>
                      <option>Class 10 (SSLC / CBSE Board)</option>
                    </select>
                  </div>

                  {/* Preferred Course */}
                  <div>
                    <label
                      htmlFor="preferredCourse"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1"
                    >
                      Interested Coaching Program
                    </label>
                    <select
                      id="preferredCourse"
                      value={formData.preferredCourse}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredCourse: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      {siteConfig.courses.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1"
                    >
                      Questions / Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      placeholder="e.g. Inquiring about weekend batch or hostel facilities..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Zero spam policy. Your details are used strictly to provide direct academic guidance.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#0B1B3D] hover:bg-[#112656] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98 border border-[#D4AF37]/50"
                  >
                    Proceed with Admission Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
