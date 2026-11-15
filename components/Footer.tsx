import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#1b2221] to-[#26312f] text-white mt-24 py-16 border-t border-[#31413e]">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#0d9488] flex items-center justify-center font-bold text-white text-sm">
                RM
              </div>
              <h3 className="text-lg font-bold text-white">Rishon Muppaneni</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              High school engineer building wearables, medical AI, and assistive technology for neurodiverse children and people standard tools leave behind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#2dd4bf] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/work" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/activities" className="hover:text-white transition">Activities & Leadership</Link></li>
              <li><Link href="/resume" className="hover:text-white transition">Resume</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#2dd4bf] uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="mailto:rishonmuppaneni@gmail.com" className="hover:text-white transition">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/rishonmuppaneni" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <span className="text-slate-400">
                  Fremont, California, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/80 pt-8 text-center text-sm text-slate-400">
          <p>© 2026 Rishon Muppaneni. All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-500">
            Built with Next.js, Tailwind CSS, and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
