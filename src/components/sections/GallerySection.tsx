"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, GalleryItem } from "@/config/siteConfig";
import { Camera, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Teaching", "Prize Distribution", "Events"];

  const filteredItems = siteConfig.gallery.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  // Handle lightbox keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section
      id="gallery"
      aria-label="Academy Life and Event Gallery"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Academy Life & Events</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Classroom Moments & Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A glimpse into our focused learning halls, dedicated teaching sessions, and annual student celebrations.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#D4AF37] shrink-0 ${
                activeCategory === cat
                  ? "bg-[#0B1B3D] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer bg-[#FAF9F6] rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#D4AF37]/70 flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              aria-label={`View enlarged photo: ${item.title}`}
            >
              {/* Photo / Placeholder Container */}
              <div className="relative aspect-video bg-gradient-to-br from-[#0B1B3D] to-[#1A377B] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {item.imageUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="space-y-2 text-slate-300 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center border border-[#D4AF37]/40 text-[#F5D061]">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <span className="inline-block text-xs font-bold text-amber-200 uppercase tracking-wider">
                      {item.imagePlaceholderText}
                    </span>
                    <p className="text-[11px] text-slate-400">Click to preview in lightbox</p>
                  </div>
                )}

                {/* Category Badge Overlay */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                  {item.category}
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-5 bg-white border-t border-slate-100">
                <h3 className="text-base font-bold text-[#0B1B3D] group-hover:text-[#B8860B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox Preview"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                );
              }}
              className="absolute left-4 z-50 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
              }}
              className="absolute right-4 z-50 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Dialog Content */}
            <div
              className="max-w-3xl w-full bg-[#0B1B3D] rounded-2xl border border-[#D4AF37]/50 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-[#061026] to-[#0B1B3D] flex flex-col items-center justify-center p-8 text-center border-b border-slate-800">
                <ImageIcon className="w-16 h-16 text-[#D4AF37]/80 mb-3" />
                <p className="text-sm sm:text-base font-bold text-amber-200 uppercase tracking-wider">
                  {filteredItems[lightboxIndex].imagePlaceholderText}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Replace with authentic photograph in <code className="text-[#F5D061]">src/config/siteConfig.ts</code>
                </p>
              </div>

              <div className="p-6 bg-[#07132C] text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#D4AF37] tracking-wider">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-serif">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
