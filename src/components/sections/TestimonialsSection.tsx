import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Star, Quote, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Parent Testimonials"
      className="py-16 md:py-24 bg-[#FAF9F6] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-[#B8860B] border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Parent Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-[#0B1B3D] tracking-tight">
            Words of Trust from Parents
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Read how personal attention, disciplined preparation, and timely feedback helped students excel.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid (2 columns on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/50 flex flex-col justify-between space-y-5 relative"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]" aria-label={`${test.rating} out of 5 stars`}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200" aria-hidden="true" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{test.testimonialText}&rdquo;
                </p>
              </div>

              {/* Author & Student Info Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B1B3D]">
                    {test.parentName}
                  </h3>
                  <p className="text-xs font-semibold text-[#B8860B] mt-0.5">
                    {test.studentRelation}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{test.location}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Parent</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
