import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ToppersSection from "@/components/sections/ToppersSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TeachingApproachSection from "@/components/sections/TeachingApproachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust and Achievement Strip */}
      <TrustStrip />

      {/* 3. About Kalaivani Coaching Center */}
      <AboutSection />

      {/* 4. Courses and Coaching Programs */}
      <CoursesSection />

      {/* 5. Our Toppers — High Priority Student Showcase */}
      <ToppersSection />

      {/* 6. Why Parents Choose Us */}
      <WhyChooseUsSection />

      {/* 7. Four-Step Teaching Approach */}
      <TeachingApproachSection />

      {/* 8. Parent Testimonials */}
      <TestimonialsSection />

      {/* 9. Photo & Campus Gallery with Lightbox */}
      <GallerySection />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 11. Contact and Direct Admissions Helpline */}
      <ContactSection />
    </>
  );
}
