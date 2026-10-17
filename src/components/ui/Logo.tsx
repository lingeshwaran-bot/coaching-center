import React from "react";

interface LogoProps {
  variant?: "dark" | "light" | "emblem";
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function EmblemSvg({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Navy gradient for shield background */}
        <linearGradient id="shieldGrad" x1="50" y1="0" x2="50" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1B3D" />
          <stop offset="100%" stopColor="#061026" />
        </linearGradient>

        {/* Gold gradient for shield border and stars */}
        <linearGradient id="goldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA820A" />
        </linearGradient>

        {/* Bright gold for star */}
        <linearGradient id="starGrad" x1="50" y1="18" x2="50" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="100%" stopColor="#E5A91A" />
        </linearGradient>

        {/* Subtle drop shadow for depth */}
        <filter id="emblemGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#D4AF37" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Outer Shield Outline */}
      <path
        d="M50 4 
           C75 4 88 12 90 28 
           C92 56 74 88 50 106 
           C26 88 8 56 10 28 
           C12 12 25 4 50 4 Z"
        fill="url(#shieldGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Shield Inset */}
      <path
        d="M50 10 
           C70 10 81 16 83 30 
           C85 54 70 82 50 98 
           C30 82 15 54 17 30 
           C19 16 30 10 50 10 Z"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeDasharray="2 2"
      />

      {/* Radiating Light Beams behind star */}
      <path d="M50 14 L50 22" stroke="url(#starGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <path d="M38 22 L43 27" stroke="url(#starGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M62 22 L57 27" stroke="url(#starGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M32 32 L39 33" stroke="url(#starGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M68 32 L61 33" stroke="url(#starGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* Academic Rising Star / Torch of Knowledge */}
      <path
        d="M50 20 
           L53 29 
           L62 30 
           L55 36 
           L57 45 
           L50 40 
           L43 45 
           L45 36 
           L38 30 
           L47 29 Z"
        fill="url(#starGrad)"
        filter="url(#emblemGlow)"
        stroke="#8C6603"
        strokeWidth="0.5"
      />

      {/* Open Book of Knowledge at Base */}
      {/* Left Page */}
      <path
        d="M50 68 
           C42 62 30 62 24 64 
           L24 78 
           C31 76 41 76 50 82 Z"
        fill="#FFFFFF"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Right Page */}
      <path
        d="M50 68 
           C58 62 70 62 76 64 
           L76 78 
           C69 76 59 76 50 82 Z"
        fill="#FFFFFF"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Book Center Spine */}
      <path d="M50 68 L50 83" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />

      {/* Book Lines (text representation) */}
      <path d="M29 69 C35 68 42 69 46 72" stroke="#0B1B3D" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <path d="M29 73 C35 72 42 73 46 76" stroke="#0B1B3D" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <path d="M54 72 C58 69 65 68 71 69" stroke="#0B1B3D" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <path d="M54 76 C58 73 65 72 71 73" stroke="#0B1B3D" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />

      {/* Laurel Wreath / Victory Branches on Flanks */}
      <path
        d="M22 46 C21 54 23 60 27 65"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="21" cy="48" r="1.5" fill="#F5D061" />
      <circle cx="23" cy="55" r="1.5" fill="#F5D061" />
      <circle cx="26" cy="62" r="1.5" fill="#F5D061" />

      <path
        d="M78 46 C79 54 77 60 73 65"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="79" cy="48" r="1.5" fill="#F5D061" />
      <circle cx="77" cy="55" r="1.5" fill="#F5D061" />
      <circle cx="74" cy="62" r="1.5" fill="#F5D061" />

      {/* Center Initial "K" subtle watermark */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill="#F5D061"
        fontSize="12"
        fontWeight="800"
        fontFamily="sans-serif"
        letterSpacing="1"
        opacity="0.9"
      >
        KCC
      </text>
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  className = "",
  size = "md",
  showText = true,
}: LogoProps) {
  const sizeMap = {
    sm: { emblem: "w-8 h-8", title: "text-base tracking-[0.14em]", sub: "text-[9px] tracking-[0.2em]" },
    md: { emblem: "w-10 h-10 sm:w-11 sm:h-11", title: "text-lg sm:text-xl tracking-[0.16em]", sub: "text-[10px] sm:text-[11px] tracking-[0.22em]" },
    lg: { emblem: "w-14 h-14 sm:w-16 sm:h-16", title: "text-2xl sm:text-3xl tracking-[0.18em]", sub: "text-xs sm:text-sm tracking-[0.26em]" },
  };

  const currentSize = sizeMap[size];

  // Variant text colors
  // "dark" variant: for white/light background (Navy text + Gold subtext)
  // "light" variant: for dark navy background (White text + Gold subtext)
  const isLight = variant === "light";

  if (variant === "emblem" || !showText) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <EmblemSvg className={currentSize.emblem} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <EmblemSvg className={currentSize.emblem} />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className={`font-black font-serif leading-tight uppercase ${currentSize.title} ${
            isLight ? "text-white" : "text-[#0B1B3D]"
          }`}
          style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
        >
          Kalaivani
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1px] w-2.5 bg-[#D4AF37]" />
          <span
            className={`font-semibold uppercase ${currentSize.sub} ${
              isLight ? "text-[#E5C158]" : "text-[#9A7311]"
            }`}
          >
            Coaching Center
          </span>
          <span className="h-[1px] w-2.5 bg-[#D4AF37]" />
        </div>
      </div>
    </div>
  );
}
