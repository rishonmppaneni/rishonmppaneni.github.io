import Header from "./component/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center rounded-full bg-white border border-[#e6dcc8] px-3.5 py-1.5 font-medium text-[#5c5347] shadow-sm">
                Junior . Irvington High
              </span>
              <span className="inline-flex items-center rounded-full bg-[#0d9488]/10 text-[#0d9488] border border-[#0d9488]/20 px-3.5 py-1.5 font-medium">
                Rooting Minds
              </span>
              <span className="text-[#5c5347] font-medium tracking-wide uppercase text-xs">
                Class of 2028 . Fremont, CA
              </span>
            </div>

            <div>
              <p className="text-xl italic text-[#5c5347] mb-3">
                Hey, I&apos;m Rishon
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-[#0d9488]">
                Building tools for the people the world leaves out.
              </h1>
            </div>

            <p className="text-lg leading-relaxed text-[#5c5347] max-w-xl">
              I design wearables and AI systems that help neurodiverse children and people with disabilities. From an EEG headset that reads intent to a robotic stick that helps the visually impaired navigate, I build what standard tools leave behind.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] text-white font-medium px-6 py-3.5 hover:bg-[#0f766e] transition-colors shadow-md"
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  RM
                </span>
                Let's Connect
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0d9488]/30 text-[#0d9488] font-medium px-6 py-3.5 hover:bg-[#0d9488]/5 transition-colors"
              >
                See What I've Built 
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e6dcc8] px-3.5 py-1.5 text-sm font-medium shadow-sm">
              <span className="w-6 h-6 rounded-full bg-[#0d9488] text-white flex items-center justify-center text-xs font-bold">
                RM
              </span>
              Class of 2028
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e6dcc8] bg-gradient-to-br from-[#0d9488]/10 to-[#fbf7ef] aspect-[4/5] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-2xl bg-[#0d9488] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                RM
              </div>
              <p className="text-[#5c5347] font-medium">
                Photo coming soon
              </p>
              <p className="text0sm text-[#5c4347]/70 mt-1">
                Replace this card with your photo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
