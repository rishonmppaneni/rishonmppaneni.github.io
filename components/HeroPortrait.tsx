'use client';

import { useState } from 'react';

export default function HeroPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
      {/* Soft ambient glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-br from-sky-400/20 via-blue-500/15 to-indigo-500/10 rounded-[2.5rem] blur-2xl pointer-events-none"></div>

      {/* Portrait frame */}
      <div className="relative rounded-t-[2.5rem] rounded-b-2xl overflow-hidden border border-slate-200/90 shadow-xl aspect-[4/5] bg-gradient-to-b from-white via-slate-50 to-slate-100/80 flex flex-col items-center justify-center p-8 text-center group">
        
        {!imgError ? (
          <img
            src="/images/profile/rishon.jpg"
            alt="Rishon Muppaneni"
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : null}

        {/* Clean tech engineering card */}
        {imgError && (
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-6">
            {/* Ambient circuit background pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg width="280" height="280" viewBox="0 0 200 200" fill="none" stroke="#0284c7">
                <circle cx="100" cy="100" r="85" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="100" cy="100" r="55" strokeWidth="1" />
                <path d="M100 15 V55 M100 145 V185 M15 100 H55 M145 100 H185" strokeWidth="1.5" />
                <circle cx="100" cy="15" r="3.5" fill="#0284c7" />
                <circle cx="100" cy="185" r="3.5" fill="#0284c7" />
                <circle cx="15" cy="100" r="3.5" fill="#0284c7" />
                <circle cx="185" cy="100" r="3.5" fill="#0284c7" />
              </svg>
            </div>

            {/* Glowing Monogram Emblem */}
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white flex items-center justify-center text-4xl font-extrabold shadow-lg shadow-sky-500/25 border-2 border-white transform group-hover:scale-105 transition-transform duration-300">
              RM
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Rishon Muppaneni
              </h3>
              <p className="text-xs font-semibold text-sky-600 mt-1 uppercase tracking-wider">
                Wearable Hardware · AI & Neurodiversity
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-xs text-xs text-slate-600 max-w-xs">
              <span className="font-semibold text-slate-900">Irvington High School</span> · Fremont, CA
              <div className="text-[0.7rem] text-slate-500 mt-0.5">
                Co-Founder & VP, Rooting Minds
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                Building assistive tools
              </span>
            </div>
          </div>
        )}

        {/* Bottom subtle fade */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-100/90 to-transparent pointer-events-none"></div>
      </div>

      {/* Floating credibility chip on the top right */}
      <div className="hidden md:flex absolute right-3 -top-5 items-center gap-2 bg-white border border-slate-200/90 rounded-full pl-2 pr-4 py-2 shadow-lg z-20">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-xs">
          RM
        </div>
        <span className="text-xs font-semibold text-slate-800">Class of 2028</span>
      </div>
    </div>
  );
}
