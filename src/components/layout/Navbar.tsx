"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Menu, X, ArrowRight, MapPin, Clock } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Our Toppers", href: "#toppers", highlight: true },
    { name: "Why Us", href: "#why-us" },
    { name: "Approach", href: "#approach" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
          : "bg-white py-3 sm:py-4 border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Link */}
        <a
          href="#hero"
          className="group flex items-center focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-1 -m-1"
          aria-label={`${siteConfig.institutionName} - Home`}
        >
          <Logo variant="dark" size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-medium text-slate-700"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#0B1B3D] hover:bg-slate-100/80 focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                link.highlight
                  ? "text-[#B8860B] font-semibold bg-amber-50 hover:bg-amber-100/70 border border-amber-200/60"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call to Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="group relative inline-flex items-center gap-2.5 bg-[#0B1B3D] hover:bg-[#112656] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 border border-[#D4AF37]/50 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label={`Call Kalaivani Coaching Center at ${siteConfig.contact.primaryPhoneDisplay}`}
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <Phone className="w-4 h-4 text-[#F5D061]" aria-hidden="true" />
            <span>Call Now</span>
            <span className="text-xs text-amber-200 hidden xl:inline">
              ({siteConfig.contact.primaryPhoneDisplay})
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="p-2.5 bg-amber-50 text-[#0B1B3D] border border-amber-300 rounded-full font-bold focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label={`Call ${siteConfig.contact.primaryPhoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-[#B8860B]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-800 hover:text-[#0B1B3D] hover:bg-slate-100 rounded-lg focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[60px] z-50 bg-black/50 backdrop-blur-xs flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-2xl p-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                Menu Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    link.highlight
                      ? "bg-amber-50 text-[#B8860B] font-semibold border border-amber-200"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            {/* Mobile Contact Quick Card */}
            <div className="mt-6 pt-5 border-t border-slate-100 bg-[#FAF9F6] p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Direct Admission Enquiries
              </p>
              <a
                href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                className="w-full flex items-center justify-center gap-2.5 bg-[#0B1B3D] text-white py-3.5 px-4 rounded-xl font-bold text-base shadow-md active:scale-98"
              >
                <Phone className="w-5 h-5 text-[#F5D061]" />
                <span>Call {siteConfig.contact.primaryPhoneDisplay}</span>
              </a>

              <div className="mt-3.5 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{siteConfig.contact.openingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
