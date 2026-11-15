import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white mt-24 py-16 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-sm">
                RM
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Rishon Muppaneni</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              High school engineer building wearables, medical AI, and assistive technology for neurodiverse children and people standard systems leave behind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold mb-4 text-sky-400 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Projects & Research</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">Activities & Leadership</Link></li>
              <li><Link href="/resume" className="hover:text-white transition-colors">Resume</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Connect */}
          <div>
            <h4 className="text-xs font-bold mb-4 text-sky-400 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="mailto:rishonmuppaneni@gmail.com" className="hover:text-white transition-colors">
                  rishonmuppaneni@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/rishonmuppaneni" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub Profile ↗
                </a>
              </li>
              <li>
                <a href="https://rootingminds.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Rooting Minds Non-Profit ↗
                </a>
              </li>
              <li>
                <span className="text-slate-500 text-xs">
                  Fremont, California · Silicon Valley
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Rishon Muppaneni. All rights reserved.</p>
          <p>
            Designed & built with Next.js, React, Tailwind CSS. Hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
