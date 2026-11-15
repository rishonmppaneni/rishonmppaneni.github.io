'use client';

import Link from 'next/link';
import HeroPortrait from '@/components/HeroPortrait';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-16 md:pt-24 pb-16 overflow-hidden">
        {/* Soft luminous ambient lighting */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-sky-400/10 rounded-full filter blur-[90px]"></div>
          <div className="absolute top-1/3 left-0 w-[28rem] h-[28rem] bg-blue-500/8 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center pb-16">
            {/* Left Column: Headline & Intro */}
            <div className="space-y-7">
              {/* Trust Badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="glow-pill">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-slate-700">Junior · Irvington High</span>
                </div>
                <div className="glow-pill border-teal-200 bg-teal-50/60">
                  <span className="text-xs font-semibold text-teal-700">Rooting Minds · VP</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium hidden sm:inline">
                  Class of 2028 · Fremont, CA
                </span>
              </div>

              <div>
                <p className="calligraphy text-3xl md:text-4xl mb-2 text-sky-600">Hey, I'm Rishon</p>
                <h1 className="heading-display leading-tight mb-6 text-slate-900">
                  Building Tools for the People<br className="hidden md:block" /> the World Leaves Out.
                </h1>
              </div>

              {/* Description */}
              <p className="prose text-lg text-slate-600">
                I design wearables and AI systems that help neurodiverse children and people with disabilities. From an EEG headset that reads intent to a robotic stick that helps the visually impaired navigate, I build what standard tools leave behind.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-3 flex-wrap">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[0.65rem] font-bold">
                    RM
                  </span>
                  Let's Connect
                </Link>
                <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                  See What I've Built <span className="text-sky-600">↓</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Portrait */}
            <div className="relative flex items-end justify-center md:justify-end">
              <HeroPortrait />
            </div>
          </div>
        </div>

        {/* Programs & Focus Ticker */}
        <div className="border-t border-b border-slate-200/90 bg-white/70 backdrop-blur-md py-5">
          <div className="container-custom flex flex-col md:flex-row gap-3 md:gap-8 md:items-center md:justify-between">
            <span className="text-xs uppercase tracking-widest text-sky-700 font-bold shrink-0">
              Programs & Focus
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-10 items-center text-slate-600">
              <a
                href="https://rootingminds.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm md:text-base text-slate-800 hover:text-sky-600 transition-colors flex items-center gap-1.5"
              >
                <span>Rooting Minds Initiative</span>
                <span className="text-xs text-sky-600">↗</span>
              </a>
              <span className="text-slate-300 hidden md:inline">•</span>
              <span className="font-medium text-sm md:text-base text-slate-700">
                EEG & Brain-Signal AI
              </span>
              <span className="text-slate-300 hidden md:inline">•</span>
              <span className="font-medium text-sm md:text-base text-slate-700">
                Assistive Wearables & Robotics
              </span>
              <span className="text-slate-300 hidden md:inline">•</span>
              <span className="font-medium text-sm md:text-base text-slate-500">
                Irvington High School
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION LAB BANNER ============ */}
      <section className="relative h-[48vh] md:h-[58vh] overflow-hidden bg-slate-900 border-b border-slate-200">
        <img
          src="/images/profile/lab-workbench.jpg"
          alt="Hands-on engineering workbench and laboratory research instrumentation"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ objectPosition: '50% 50%' }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 z-20 pb-12 pt-28 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
          <div className="container-custom">
            <p className="calligraphy-lg text-white text-2xl sm:text-3xl md:text-4xl drop-shadow-md">
              Engineering assistive technology at the intersection of AI, hardware, and neurodiversity.
            </p>
            <p className="text-sm text-sky-200 mt-2.5 font-medium tracking-wide">
              Bridging critical communication gaps for non-verbal children through custom sensors and intelligent hardware
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROFILE / ABOUT SECTION ============ */}
      <section className="py-24 bg-white relative border-b border-slate-200/80">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-14">
              <p className="subtitle mb-3 text-sky-600">A Bit About Me</p>
              <h2 className="heading-lg mb-4 text-slate-900">Hi, I'm Rishon</h2>
              <p className="prose text-lg max-w-2xl mx-auto text-slate-600">
                Student at Irvington High School in Fremont, California. I do most of my engineering hands-on: capturing and processing signals, building prototype circuits, training deep learning classifiers, and developing wearable devices for those who need them most.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Professional Hardware Prototyping Photo */}
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-400/15 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-50 aspect-[4/3]">
                  <img
                    src="/images/projects/breadboard-wiring.jpg"
                    alt="Circuit prototyping, wiring, and hardware engineering bench"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle caption banner */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/85 via-slate-950/60 to-transparent flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-bold tracking-wide">Circuit Prototyping & Sensor Assembly</p>
                      <p className="text-[0.7rem] text-sky-300">Hands-on hardware & firmware testing bench</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Personal Story & Stats */}
            <Reveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-md mb-4 text-slate-900">How I Got Here</h3>
                  <p className="prose mb-4 text-slate-600">
                    I got into engineering driven by a fundamental realization: standard commercial devices leave behind neurodiverse individuals and people with disabilities. Whether it's a non-verbal child who cannot convey intent or a visually impaired person navigating uneven urban paths, standard tools fall short.
                  </p>
                  <p className="prose text-slate-600">
                    I focus on building what is missing: an EEG wearable headset that decodes intent for non-verbal children, deep learning models for medical screening, and assistive hardware that restores independence. Through Rooting Minds, the non-profit organization I co-founded, we combine technology, tailored games, and community workshops to directly empower children.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'School', value: 'Irvington High', icon: '🏫' },
                    { label: 'Class', value: 'Class of 2028', icon: '🎓' },
                    { label: 'Focus', value: 'Wearables & AI', icon: '⚡' },
                    { label: 'Organization', value: 'Rooting Minds (VP)', icon: '🤝' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-sky-700 uppercase tracking-wider">{item.label}</p>
                        <span className="text-base">{item.icon}</span>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK SECTION ============ */}
      <section className="py-24 bg-[#f8fafc] relative">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <p className="subtitle mb-3 text-sky-600">Featured Work</p>
              <h2 className="heading-lg mb-4 text-slate-900">What I've Built</h2>
              <p className="prose max-w-2xl mx-auto text-slate-600">
                Every project begins with a real human need. Here are the core hardware prototypes and AI models I have engineered.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:auto-rows-fr">
            {[
              {
                image: '/images/projects/ai-neural-circuit.jpg',
                title: 'EEG Wearable Headset for Intent Classification',
                org: 'In Development · Neurotech & Wearables',
                desc: 'An EEG wearable headset that collects brain signals from neurodiverse children and uses AI to classify their intentions, suggesting responsive solutions to assist non-verbal communication.',
                tags: ['EEG', 'Signal Processing', 'Machine Learning', 'Python', 'Embedded'],
                link: '/work',
                size: 'big',
              },
              {
                image: '/images/projects/mri-scan.jpg',
                title: "Alzheimer's Stage Classification Model",
                org: 'Deep Learning · Computer Vision',
                desc: 'A CNN deep learning model that classifies different stages of dementia leading to Alzheimer\'s from MRI brain slices for early and accessible screening.',
                tags: ['Deep Learning', 'Python', 'Medical AI'],
                link: '/work',
                size: 'small',
              },
              {
                image: '/images/projects/robotics-sensor.jpg',
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
                isLogo: true,
              },
            ].map((project, idx) => (
              <Reveal
                key={idx}
                delay={idx * 100}
                className={project.size === 'big' ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <div className="h-full">
                  <div className={`card group h-full flex flex-col ${project.size === 'big' ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                    <div className={project.size === 'big' ? 'md:w-5/12 flex flex-col items-start shrink-0' : ''}>
                      <div className={`mb-4 w-full overflow-hidden rounded-xl border border-slate-200 group-hover:border-sky-300 transition-all ${project.size === 'big' ? 'aspect-[4/3]' : 'aspect-[16/10]'} ${project.isLogo ? 'bg-slate-50 p-6 flex items-center justify-center' : 'bg-slate-100'}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full ${project.isLogo ? 'object-contain' : 'object-cover group-hover:scale-105 transition-transform duration-500'}`}
                        />
                      </div>
                      <h3 className={project.size === 'big' ? 'heading-md text-slate-900' : 'heading-sm text-slate-900'}>{project.title}</h3>
                      <p className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2 mt-1">
                        {project.org}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <p className={`prose mb-4 text-slate-600 ${project.size === 'big' ? '' : 'line-clamp-3'}`}>{project.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-4 text-sky-600 font-semibold text-sm">
                        <Link href={project.link} className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
                          <span>Discover More</span>
                          <span>→</span>
                        </Link>
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-slate-800 transition-colors"
                          >
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
      <section className="py-24 bg-white relative border-t border-slate-200">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <p className="subtitle mb-3 text-sky-600">Technical Foundation</p>
              <h2 className="heading-lg mb-4 text-slate-900">The Toolkit Behind the Projects</h2>
              <p className="prose max-w-2xl mx-auto text-slate-600">
                Spanning embedded electronics, biomedical signal processing, machine learning architectures, and human-centered design.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Embedded Systems & Wearables',
                blurb: 'Designing circuit boards, microcontrollers, and low-power wearable prototypes.',
                skills: ['Microcontrollers', 'Sensor Integration', 'Hardware Prototyping', 'Power Optimization'],
                iconBg: 'bg-sky-50 text-sky-600 border-sky-200',
                iconSvg: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
              },
              {
                category: 'Machine Learning & AI',
                blurb: 'Building neural networks that classify complex multi-class medical and brain signal data.',
                skills: ['Deep Learning', 'CNNs', 'Intent Classification', 'Python / PyTorch'],
                iconBg: 'bg-teal-50 text-teal-600 border-teal-200',
                iconSvg: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                category: 'Signal Processing & EEG',
                blurb: 'Extracting clean, actionable patterns from noisy biological signals and brainwaves.',
                skills: ['EEG Signal Analysis', 'Bandpass & Notch Filtering', 'Feature Extraction', 'DSP Pipelines'],
                iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
                iconSvg: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12h4l3 8 4-16 3 8h4" />
                  </svg>
                ),
              },
              {
                category: 'Assistive Robotics & Sensors',
                blurb: 'Engineering real-time obstacle detection and haptic guidance for sensory assistance.',
                skills: ['Sensor Fusion', 'Obstacle Avoidance', 'Haptic Feedback', 'Edge Microcontroller Logic'],
                iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
                iconSvg: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                category: 'Hardware & Prototyping',
                blurb: 'From schematics to physical breadboard layouts, soldering, and custom enclosures.',
                skills: ['PCB & Schematic Design', 'SMD Soldering', 'CAD Modeling', 'Signal Debugging'],
                iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
                iconSvg: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                category: 'Inclusive & Non-Profit Leadership',
                blurb: 'Direct community engagement, game design, and workshop leadership through Rooting Minds.',
                skills: ['Neurodiversity Advocacy', 'Game Design', 'Workshop Facilitation', 'Youth Mentorship'],
                iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
                iconSvg: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div className="card h-full flex flex-col justify-between group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-105 transition-all shadow-xs ${item.iconBg}`}>
                      {item.iconSvg}
                    </div>
                    <h3 className="heading-sm mb-2 text-slate-900">{item.category}</h3>
                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">{item.blurb}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[0.72rem] px-2.5 py-1 bg-slate-50 text-slate-700 border border-slate-200 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-32 bg-[#0f172a] text-white overflow-hidden">
        {/* Subtle ambient lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <Reveal className="container-custom relative z-10 text-center text-white space-y-8">
          <h2 className="heading-lg text-white mb-4 tracking-tight">Got an Idea? Let's Build It</h2>
          <p className="prose text-lg text-slate-300 max-w-2xl mx-auto">
            Whether it's a research collaboration, an assistive tech project, or you just want to talk about wearables and AI for neurodiverse kids — I'd love to hear from you.
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Link href="/contact" className="btn-primary text-base px-9 py-3.5 shadow-lg shadow-sky-500/25">
              Get In Touch
            </Link>
            <a
              href="https://github.com/rishonmuppaneni"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-3.5 rounded-full border border-slate-600 text-white font-semibold hover:bg-slate-800 transition-all text-base"
            >
              View GitHub ↗
            </a>
          </div>

          <p className="pt-6 calligraphy text-3xl md:text-4xl text-sky-400">
            — Rishon Muppaneni
          </p>
        </Reveal>
      </section>
    </div>
  );
}
