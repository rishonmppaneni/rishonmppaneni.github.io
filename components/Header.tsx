'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const BAR_COUNT = 12;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const wavePhase = scrollY / 55;
  const magnify = 1 + 0.22 * Math.exp(-Math.pow((scrollY - 260) / 220, 2));

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Activities', href: '/activities' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-xs">
      <nav className="container-custom py-4 flex justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white text-base group-hover:scale-105 group-hover:shadow-md group-hover:shadow-sky-500/25 transition-all duration-300">
            RM
          </div>
          <span className="hidden sm:block font-bold text-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
            Rishon Muppaneni
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
          {navItems.map((item, idx) => (
            <span key={item.href} className="flex items-center gap-5">
              <Link href={item.href} className="hover:text-sky-600 transition-colors">
                {item.label}
              </Link>
              {idx < navItems.length - 1 && <span className="text-slate-300">|</span>}
            </span>
          ))}
        </div>

        {/* Right side: Waveform + GitHub + Connect */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="https://github.com/rishonmuppaneni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
          >
            GitHub
          </a>
          <div className="w-16 flex justify-center shrink-0">
            <div
              className="flex items-end gap-[3px] h-4 opacity-75 transition-transform duration-200 ease-out"
              style={{ transform: `scale(${magnify})` }}
            >
              {Array.from({ length: BAR_COUNT }).map((_, i) => {
                const h = 5 + Math.abs(Math.sin(wavePhase + i * 0.55)) * 11;
                return (
                  <span
                    key={i}
                    className="w-[2px] bg-gradient-to-t from-sky-500 to-blue-600 rounded-full transition-all duration-150 ease-out"
                    style={{ height: `${h}px` }}
                  ></span>
                );
              })}
            </div>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-xs hover:border-sky-500 hover:shadow-md hover:scale-105 transition-all"
          >
            <span className="text-sm font-semibold text-slate-800">Let's Connect</span>
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-[0.65rem] font-bold shadow-xs">
              RM
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed top-[69px] left-0 right-0 h-[calc(100vh-69px)] bg-white/98 backdrop-blur-xl lg:hidden overflow-y-auto z-50 border-t border-slate-200 p-6 flex flex-col justify-between shadow-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xl font-medium text-slate-800 hover:text-sky-600 py-3 border-b border-slate-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/rishonmuppaneni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-slate-800 hover:text-sky-600 py-3 border-b border-slate-100 transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="w-full btn-primary text-center py-3.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Connect
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
