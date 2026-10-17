import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0B1B3D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kalaivanicoachingcenter.com"),
  title: {
    default: `${siteConfig.institutionName} | Premier Sainik School, RMS & Academic Coaching`,
    template: `%s | ${siteConfig.institutionName}`,
  },
  description:
    "Kalaivani Coaching Center provides focused, high-standard coaching for AISSEE (Sainik School Class 6 & 9), RMS CET, RIMC, and School Academic Foundation (Class 6-10) in Tamil Nadu. Call for admissions.",
  keywords: [
    "Kalaivani Coaching Center",
    "Sainik school coaching Tamil Nadu",
    "AISSEE Class 6 coaching",
    "AISSEE Class 9 coaching",
    "RMS coaching center",
    "Rashtriya Military School entrance",
    "RIMC entrance coaching",
    "Tamil Nadu coaching academy",
    "Class 10 maths tuition Tamil Nadu",
    "School foundation coaching",
  ],
  authors: [{ name: siteConfig.institutionName }],
  creator: siteConfig.institutionName,
  publisher: siteConfig.institutionName,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kalaivanicoachingcenter.com",
    title: `${siteConfig.institutionName} | Building Bright Futures Through Quality Coaching`,
    description:
      "Premier educational coaching academy in Tamil Nadu for Sainik School, RMS, RIMC entrance, and School Academic Excellence.",
    siteName: siteConfig.institutionName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.institutionName,
    description:
      "Premier educational coaching academy in Tamil Nadu for Sainik School, RMS, RIMC entrance, and School Academic Excellence.",
  },
  alternates: {
    canonical: "https://kalaivanicoachingcenter.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#0B1B3D] selection:bg-[#D4AF37] selection:text-[#061026]">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B1B3D] focus:text-[#F5D061] focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-hidden"
        >
          Skip to main content
        </a>

        {/* Structured Data */}
        <JsonLd />

        {/* Top Dismissible Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Accessible Navigation Bar */}
        <Navbar />

        {/* Main Page Body */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Sticky Quick Call Bar */}
        <MobileCallBar />
      </body>
    </html>
  );
}
