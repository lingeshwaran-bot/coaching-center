import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://kalaivanicoachingcenter.com/#organization",
        "name": siteConfig.institutionName,
        "alternateName": siteConfig.shortName,
        "description": siteConfig.about.introduction,
        "url": "https://kalaivanicoachingcenter.com",
        "telephone": siteConfig.contact.primaryPhoneDisplay,
        "email": siteConfig.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
          "addressLocality": siteConfig.contact.address.city,
          "addressRegion": siteConfig.contact.address.district,
          "postalCode": siteConfig.contact.address.pincode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.2333",
          "longitude": "78.8041",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "08:00",
            "closes": "20:00",
          },
        ],
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Coaching Programs",
          "itemListElement": siteConfig.courses.map((course) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": course.title,
              "description": course.subtitle,
              "provider": {
                "@type": "EducationalOrganization",
                "name": siteConfig.institutionName,
              },
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
