'use client';

import Link from 'next/link';
import HeroPortrait from '@/components/HeroPortrait';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf7ef]">
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-16 md:pt-20 overflow-hidden">
        {/* Soft background gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0d9488] rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-16">
            {/* Left: Content */}
            <div className="space-y-7">
              {/* Trust badges row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 bg-[#fffdf8] border border-[#e6dcc8] rounded-full px-3.5 py-1.5 shadow-sm">
                  <span className="text-xs font-bold text-[#2b2620]">Junior · Irvington High</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#fffdf8] border border-[#e6dcc8] rounded-full px-3.5 py-1.5 shadow-sm">
                  <span className="text-xs font-bold text-[#0d9488]">Rooting Minds · VP</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] hidden sm:inline">
                  Class of 2028 · Fremont, CA
                </span>
              </div>

              <div>
                <p className="calligraphy text-3xl mb-2">Hey, I'm Rishon</p>
                <h1 className="heading-display leading-tight mb-6">
                  Building Tools for the People<br className="hidden md:block" /> the World Leaves Out.
                </h1>
              </div>

              {/* Description */}
              <p className="prose text-lg">
                I design wearables and AI systems that help neurodiverse children and people with disabilities. From an EEG headset that reads intent to a robotic stick that helps the visually impaired navigate, I build what standard tools leave behind.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-2 flex-wrap">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[0.65rem] font-bold">
                    RM
                  </span>
                  Let's Connect
                </Link>
                <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                  See What I've Built <span>↓</span>
                </Link>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="relative flex items-end justify-center md:justify-end">
              <HeroPortrait />
            </div>
          </div>
        </div>

        {/* Programs & Focus ticker strip */}
        <div className="border-t border-[#e6dcc8] bg-[#f4ecda]/60 py-6">
          <div className="container-custom flex flex-col md:flex-row gap-3 md:gap-8 md:items-center md:justify-between">
            <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-semibold shrink-0">
              Programs & Focus
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-12 items-center opacity-85">
              <a href="https://rootingminds.org/" target="_blank" rel="noopener noreferrer" className="font-serif font-bold text-sm md:text-base text-[#3d362c] hover:text-[#0d9488] transition-colors">
                Rooting Minds Initiative
              </a>
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">
                EEG & Brain-Signal AI
              </span>
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">
                Assistive Wearables & Robotics
              </span>
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">
                Irvington High School
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION BANNER ============ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-[#1c2423]">
        <img
          src="/images/profile/stanford-lab.jpg"
          alt="Hands-on engineering workbench and laboratory research"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ objectPosition: '50% 40%' }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#042f2e]/80 via-[#0f766e]/40 to-transparent"></div>

        <div className="absolute inset-x-0 bottom-0 z-20 pb-10 pt-24 bg-gradient-to-t from-[#131b1a] via-[#131b1a]/60 to-transparent">
          <div className="container-custom">
            <p className="calligraphy-lg text-white/95 text-2xl sm:text-3xl md:text-4xl">
              Engineering assistive technology at the intersection of AI, hardware, and neurodiversity.
            </p>
            <p className="text-sm text-teal-200/80 mt-2">
              Building hardware that bridges communication gaps for non-verbal children
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROFILE / ABOUT SECTION ============ */}
      <section className="py-20 bg-gradient-to-b from-[#f4ecda] to-[#fbf7ef]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <p className="subtitle text-[#0d9488] mb-4">A Bit About Me</p>
              <h2 className="heading-lg mb-4">Hi, I'm Rishon</h2>
              <p className="prose text-lg max-w-2xl mx-auto">
                Student at Irvington High School in Fremont, California. I do most of my engineering hands-on: capturing and processing signals, building prototype circuits, training deep learning classifiers, and developing wearable devices for those who need them most.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0d9488]/20 via-[#14b8a6]/20 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e6dcc8]">
                  <img
                    src="/images/projects/aac-prototype.jpg"
                    alt="A hardware prototype mid-build — wires, buttons, and microcontrollers"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-md mb-4">How I Got Here</h3>
                  <p className="prose mb-4">
                    I got into engineering driven by a fundamental realization: the tools created by standard industries often leave behind neurodiverse individuals and people with physical disabilities. Whether it's a non-verbal child who cannot convey intent or a visually impaired person navigating uneven urban environments, standard tools fall short.
                  </p>
                  <p className="prose">
                    I focus on building what is missing: an EEG wearable headset that decodes intent for non-verbal kids, deep learning models for medical screening, and assistive hardware that restores independence. Through Rooting Minds, the non-profit organization I co-founded, we combine technology, tailored games, and community workshops to directly empower children.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'School', value: 'Irvington High' },
                    { label: 'Class', value: 'Class of 2028' },
                    { label: 'Focus', value: 'Wearables & AI' },
                    { label: 'Organization', value: 'Rooting Minds (VP)' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gradient-to-br from-teal-50/80 to-amber-50/60 rounded-xl border border-teal-200/60">
                      <p className="text-xs font-semibold text-[#0d9488] uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900 mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK SECTION ============ */}
      <section className="py-24 bg-gradient-to-b from-[#f4ecda] to-[#fbf7ef]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <p className="subtitle text-[#0d9488] mb-3">Portfolio Highlights</p>
              <h2 className="heading-lg mb-4">What I've Built</h2>
              <p className="prose max-w-2xl mx-auto">
                Every project begins with a real human need. Here are some of the systems I've designed and developed.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:auto-rows-fr">
            {[
              {
                image: '/images/projects/emg-device.jpg',
                title: 'EEG Wearable Headset for Intent Classification',
                org: 'In Development · Neurotech & Wearables',
                desc: 'An EEG wearable headset that collects brain signals from neurodiverse children and uses AI to classify their intentions, suggesting responsive solutions to assist non-verbal communication.',
                tags: ['EEG', 'Signal Processing', 'Machine Learning', 'Python', 'Embedded'],
                link: '/work',
                size: 'big',
              },
              {
                icon: '🧠',
                title: "Alzheimer's Stage Classification Model",
                org: 'Deep Learning · Computer Vision',
                desc: 'A CNN deep learning model that classifies different stages of dementia leading to Alzheimer\'s from MRI brain slices for early and accessible screening.',
                tags: ['Deep Learning', 'Python', 'Medical AI'],
                link: '/work',
                size: 'small',
              },
              {
                icon: '🦯',
                title: 'Assistive Navigation Stick for Visually Impaired',
                org: 'Robotics & Obstacle Sensing',
                desc: 'A smart robotic navigation stick with multi-sensor obstacle detection and real-time guidance feedback to help visually impaired users move safely.',
                tags: ['Robotics', 'Sensors', 'Assistive Tech'],
                link: '/work',
                size: 'small',
              },
              {
                image: '/images/logos/rooting-minds.png',
                title: 'Rooting Minds Initiative',
                org: 'Co-Founder & Vice President',
                desc: 'A non-profit organization helping neurodiverse children develop problem-solving and critical-thinking skills through interactive games, workshops, and custom assistive technology.',
                tags: ['Leadership', 'Education', 'Community', 'Neurodiversity'],
                link: '/activities',
                website: 'https://rootingminds.org/',
                size: 'big',
              },
            ].map((project, idx) => (
              <Reveal
                key={idx}
                delay={idx * 100}
                className={project.size === 'big' ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <div className="h-full">
                  <div className={`card group h-full flex flex-col ${project.size === 'big' ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                    <div className={project.size === 'big' ? 'md:w-1/3 flex flex-col items-start shrink-0' : ''}>
                      {project.image ? (
                        <div className={`mb-3 group-hover:scale-105 transition-transform ${project.size === 'big' ? 'w-full aspect-square' : 'w-full aspect-[3/2]'} ${project.image === '/images/logos/rooting-minds.png' ? 'rounded-full overflow-hidden' : 'rounded-xl overflow-hidden border border-[#e6dcc8]'}`}>
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <span className={`${project.size === 'big' ? 'text-6xl' : 'text-4xl'} group-hover:scale-110 transition-transform block mb-3`}>
                          {project.icon}
                        </span>
                      )}
                      <h3 className={project.size === 'big' ? 'heading-md' : 'heading-sm'}>{project.title}</h3>
                      <p className="text-sm text-[#0d9488] font-semibold mb-2">
                        {project.org}
                      </p>
                    </div>

                    <div className="flex-1">
                      <p className={`prose mb-4 ${project.size === 'big' ? '' : 'line-clamp-3'}`}>{project.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-teal-50 text-[#0d9488] border border-teal-200/80 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-4 text-[#0d9488] font-semibold">
                        <Link href={project.link} className="hover:underline flex items-center gap-1">
                          Discover More <span>→</span>
                        </Link>
                        {project.website && (
                          <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 hover:text-[#0f766e]">
                            Website ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/work" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE / TOOLKIT SECTION ============ */}
      <section className="py-24 bg-[#fbf7ef]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <p className="subtitle text-[#0d9488] mb-4">Tools I Reach For</p>
              <h2 className="heading-lg mb-4">The Toolkit Behind the Projects</h2>
              <p className="prose max-w-2xl mx-auto">
                Spanning embedded electronics, machine learning architectures, and human-centered design.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6 md:auto-rows-fr">
            {[
              {
                category: 'Embedded Systems & Wearables',
                blurb: 'Designing circuits, microcontrollers, and low-power wearable prototypes.',
                skills: ['Microcontrollers', 'Sensor Integration', 'Hardware Prototyping', 'Power Optimization'],
                icon: '⚡',
                size: 'big',
              },
              {
                category: 'Machine Learning & AI',
                blurb: 'Building neural networks that classify complex real-world data.',
                skills: ['Deep Learning', 'CNNs', 'Intent Classification', 'Python / PyTorch'],
                icon: '🧠',
                size: 'small',
              },
              {
                category: 'Signal Processing & EEG',
                blurb: 'Extracting clean, actionable patterns from noisy biological signals.',
                skills: ['EEG Analysis', 'Filtering & DSP', 'Feature Extraction', 'Data Pipelines'],
                icon: '📈',
                size: 'small',
              },
              {
                category: 'Assistive Robotics',
                blurb: 'Building real-time obstacle detection and haptic guidance.',
                skills: ['Sensor Fusion', 'Obstacle Avoidance', 'Haptic Feedback', 'Edge Inference'],
                icon: '🤖',
                size: 'small',
              },
              {
                category: 'Hardware & Prototyping',
                blurb: 'From schematics to physical breadboards and housings.',
                skills: ['PCB & Schematic Design', 'Soldering', 'CAD Modeling', 'Testing'],
                icon: '🔧',
                size: 'small',
              },
              {
                category: 'Inclusive & Non-Profit Leadership',
                blurb: 'Connecting technical innovation with community impact through Rooting Minds.',
                skills: ['Neurodiversity Advocacy', 'Game Design', 'Workshop Facilitation', 'Youth Mentorship'],
                icon: '🤝',
                size: 'big',
              },
            ].map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 80}
                className={item.size === 'big' ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <div className={`card group h-full ${item.size === 'big' ? 'text-left flex items-center gap-6' : 'text-center'}`}>
                  <div className={`${item.size === 'big' ? 'w-20 text-6xl' : 'text-4xl mx-auto'} mb-4 group-hover:scale-110 transition-transform shrink-0 flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={item.size === 'big' ? 'heading-md mb-2' : 'heading-sm mb-2'}>{item.category}</h3>
                    <p className="text-xs text-[var(--muted)] italic mb-4">{item.blurb}</p>
                    <div className={`space-y-1.5 ${item.size === 'big' ? 'flex flex-wrap gap-2 space-y-0' : ''}`}>
                      {item.skills.map((skill, i) => (
                        item.size === 'big' ? (
                          <span key={i} className="text-xs px-3 py-1 bg-teal-50 text-[#0d9488] border border-teal-200/60 rounded-full font-medium">
                            {skill}
                          </span>
                        ) : (
                          <p key={i} className="text-sm text-slate-600">
                            {skill}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-32 bg-gradient-to-br from-[#0f766e] via-[#115e59] to-[#042f2e] overflow-hidden">
        {/* Decorative ambient shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48 pointer-events-none"></div>

        <Reveal className="container-custom relative z-10 text-center text-white space-y-8">
          <h2 className="heading-lg text-white mb-4">Got an Idea? Let's Build It</h2>
          <p className="prose text-lg text-teal-100 max-w-2xl mx-auto">
            Whether it's a research collaboration, an assistive tech project, or you just want to talk about wearables and AI for neurodiverse kids — I'd love to hear from you.
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Link href="/contact" className="px-8 py-3.5 rounded-full bg-white text-[#0f766e] font-bold hover:bg-teal-50 transition-all transform hover:scale-105 inline-block shadow-lg">
              Get In Touch
            </Link>
            <a
              href="https://github.com/rishonmuppaneni"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>

          <p className="pt-6 calligraphy text-3xl text-white/90">
            — Rishon Muppaneni
          </p>
        </Reveal>
      </section>
    </div>
  );
}
