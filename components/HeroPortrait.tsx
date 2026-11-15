'use client';

import { useState } from 'react';

export default function HeroPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
      {/* Soft glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#0d9488]/25 via-[#14b8a6]/20 to-amber-500/10 rounded-[2.5rem] blur-3xl pointer-events-none"></div>

      {/* Portrait frame */}
      <div className="relative rounded-t-[2.5rem] rounded-b-xl overflow-hidden border-2 border-[#e6dcc8] shadow-2xl aspect-[4/5] bg-gradient-to-b from-[#f4ecda] to-[#ede3cf] flex flex-col items-center justify-center p-8 text-center group">
        
        {!imgError ? (
          <img
            src="/images/profile/rishon.jpg"
            alt="Rishon Muppaneni"
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : null}

        {/* Fallback elegant card if rishon.jpg is not present */}
        {imgError && (
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-5">
            {/* Ambient circuit background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <svg width="280" height="280" viewBox="0 0 200 200" fill="none" stroke="#0d9488">
                <circle cx="100" cy="100" r="80" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="100" cy="100" r="50" strokeWidth="1.5" />
                <path d="M100 20 V60 M100 140 V180 M20 100 H60 M140 100 H180" strokeWidth="2" />
                <circle cx="100" cy="20" r="4" fill="#0d9488" />
                <circle cx="100" cy="180" r="4" fill="#0d9488" />
                <circle cx="20" cy="100" r="4" fill="#0d9488" />
                <circle cx="180" cy="100" r="4" fill="#0d9488" />
              </svg>
            </div>

            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white flex items-center justify-center text-4xl font-bold shadow-xl border-2 border-white/40 transform group-hover:scale-105 transition-transform duration-300">
              RM
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2b2620] tracking-tight">
                Rishon Muppaneni
              </h3>
              <p className="text-sm font-semibold text-[#0d9488] mt-1">
                Wearable Hardware · AI & Neurodiversity
              </p>
            </div>

            <div className="bg-[#fffdf8]/90 backdrop-blur-sm border border-[#e6dcc8] rounded-xl px-4 py-2.5 shadow-sm text-xs text-[#5c5347] max-w-xs">
              <span className="font-semibold text-[#2b2620]">Irvington High School</span> · Fremont, CA
              <div className="text-[0.7rem] text-[#736a5c] mt-0.5">
                Co-Founder & VP, Rooting Minds
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d9488]/10 text-[#0d9488] border border-[#0d9488]/20 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse"></span>
                Building assistive tools
              </span>
            </div>
          </div>
        )}

        {/* Bottom fade for a photographic feel */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"></div>
      </div>

      {/* Floating credibility chip aligned to the upper-right edge */}
      <div className="hidden md:flex absolute right-3 -top-5 items-center gap-2 bg-[#fffdf8] border border-[#e6dcc8] rounded-full pl-2 pr-4 py-2 shadow-lg z-20">
        <div className="w-8 h-8 rounded-full bg-[#0d9488] flex items-center justify-center text-white text-xs font-bold">
          RM
        </div>
        <span className="text-xs font-semibold text-[#2b2620]">Class of 2028</span>
      </div>
    </div>
  );
}
