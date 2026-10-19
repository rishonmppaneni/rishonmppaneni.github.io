// components/Header.tsx

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf8f5]/90 border-b border-[#e8e2d9]">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">


                <a href="/" className="flex items-center gap-3 group shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-[#0d9488] flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-200">
                    RM
                  </div>
                  <span className="hidden sm:block font-bold text-lg text-[#1c1917]">
                    Rishon Muppaneni
                  </span>
                </a>


                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#57534e]">
                    <a href="#home" className="hover:text-[#0d9488] transition-colors">
                        Home
                    </a>
                    <span className="text-[#d6d3d1]">|</span>


                    <a
                      href="#about"
                      className="text-[#0d9488] font-semibold hover:text-[#0f766e] transition-colors"
                    >
                      Me
                    </a>

                    <span className="text-[#d6d3d1]">|</span>
                    <a href="#projects" className="hover:text-[#od9488] transition-colors">
                        Projects
                    </a>
                    <span className="text-[#d6d3d1]">|</span>
                    <a href="#contact" className="hover:text-[#0d9488] transition-colors">
                        Contact
                    </a>
                </div>


                <div className="flex items-center gap-3 shrink-0">
                    <a
                        href="https://github.com/rishonmuppaneni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block text-sm font-medium text-[#57534e] hover:text-[#od9488] transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] text-white text-sm font-medium px-4 py-2 hover:bg-[#0f766e] transition-colors"
                    >
                        Let's Connect
                    </a>
                </div>
            </nav>
        </header>
    );
}