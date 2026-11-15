import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Work & Projects | Rishon Muppaneni',
  description: 'EEG intent classification headsets, medical AI classification, communication button devices, and assistive technology built by Rishon Muppaneni.',
};

const ACCENTS = ['#0284c7', '#0d9488', '#2563eb', '#059669', '#4f46e5'];

export default function Work() {
  const projects = [
    {
      slug: 'eeg-headset',
      title: 'EEG Wearable Headset for Intent Classification',
      year: '2026 - Present',
      status: 'In Development',
      badge: 'Neurotech & Wearables',
      description: 'Wearable EEG hardware and machine learning pipeline for non-verbal intent classification',
      overview:
        'An EEG wearable headset that collects brain signals from neurodiverse children and uses an AI model to classify their intentions, then suggests solutions. Specifically designed to assist non-verbal and neurodiverse kids to communicate more effectively and bridge isolation.',
      image: '/images/projects/ai-neural-circuit.jpg',
      highlights: [
        'Collecting EEG brain-signal data from target users to establish clean signal baselines',
        'Building and training machine learning classification models for real-time intent detection',
        'Designing a wearable, lightweight form factor suitable and comfortable for children',
        'Focusing on real-world usability and accessibility for neurodiverse users in home and classroom settings',
        'Developing software pipelines to translate classified intent into communicative prompts',
      ],
      tech: ['EEG', 'Signal Processing', 'Machine Learning', 'Python', 'Embedded Systems'],
      github: 'https://github.com/rishonmuppaneni',
    },
    {
      slug: 'alzheimer-cnn',
      title: "Alzheimer's Disease Stage Classification Model",
      year: '2025 - 2026',
      status: 'Deep Learning',
      badge: 'Medical AI & Computer Vision',
      description: 'Convolutional neural network for MRI-based dementia and Alzheimer’s stage classification',
      overview:
        'A deep learning model that classifies different stages of dementia which leads to Alzheimer’s Disease. Aimed at supporting earlier, more accessible screening by recognizing structural imaging patterns from MRI brain scans.',
      image: '/images/projects/mri-scan.jpg',
      highlights: [
        'Built and trained a CNN model to identify differences in MRI brain slices by analyzing neural network layers such as edges and shapes',
        'Worked with medical imaging and clinical data patterns across various disease stages',
        'Focused on multi-class stage differentiation to provide practical diagnostic screening support',
        'Evaluated accuracy, precision, and recall metrics to ensure robust feature extraction',
      ],
      tech: ['Deep Learning', 'Python', 'Computer Vision', 'Medical AI', 'PyTorch / TensorFlow'],
      github: 'https://github.com/rishonmuppaneni',
    },
    {
      slug: 'communication-button',
      title: 'Communication Button Device for Non-Verbal Children',
      year: '2026 - Present',
      status: 'In Development',
      badge: 'Assistive Hardware',
      description: 'One-press recordable and tactile speech-output device',
      overview:
        'A simple button device that helps non-verbal children record speech and communicate with others through customizable, one-press messages. Designed to offer immediate tactile communication without complex touchscreens.',
      image: '/images/projects/communication-button-hardware.jpg',
      highlights: [
        'One-press tactile interface designed specifically for cognitive and motor ease of use',
        'Customizable message bank tailored per individual child and daily routine',
        'Durable, drop-resistant child-friendly hardware enclosure and button mechanism',
        'Engineered directly with input from neurodivergent communities and families',
        'Developing schematics and PCB layout for compact, rechargeable battery operation',
      ],
      tech: ['Embedded Systems', 'Hardware Design', 'PCB and Schematic development', 'User-Centered Design'],
      github: 'https://github.com/rishonmuppaneni',
    },
    {
      slug: 'navigation-stick',
      title: 'Assistive Navigation Stick for Visually Impaired',
      year: '2025 - Present',
      status: 'Active Prototype',
      badge: 'Robotics & Sensors',
      description: 'Smart robotic stick with obstacle sensing and instant user feedback',
      overview:
        'A smart robotic walking stick equipped with obstacle detection sensors and microcontroller processing to warn visually impaired users of ground-level and waist-level obstructions through gentle haptic and acoustic signals.',
      image: '/images/projects/robotics-sensor.jpg',
      highlights: [
        'Integrated multi-angle proximity sensors to eliminate blind spots in walking path',
        'Programmed low-latency edge firmware for real-time proximity calculation',
        'Designed dual haptic vibration alerts that signal distance and urgency to user',
        'Ergonomic, lightweight form factor designed for extended outdoor navigation',
      ],
      tech: ['Sensors', 'Embedded Systems', 'Obstacle Detection', 'Assistive Tech', 'C/C++'],
      github: 'https://github.com/rishonmuppaneni',
    },
    {
      slug: 'rooting-minds',
      title: 'Rooting Minds Initiative',
      year: '2025 - Present',
      status: 'Active Non-Profit',
      badge: 'Co-Founder & Vice President',
      description: 'Empowering neurodiverse children through interactive STEM games and custom assistive tools',
      overview:
        'A non-profit organization that helps neurodiverse children develop problem-solving and critical-thinking skills through interactive games, workshops, and custom assistive technology.',
      image: '/images/logos/rooting-minds.png',
      highlights: [
        'Co-founded Rooting Minds and currently serve as Vice President',
        'Designing activities and game formats specifically structured for neurodiverse learners',
        'Leading community outreach, parent engagement, and hands-on workshop programs',
        'Translating observations from direct sessions into requirements for novel assistive hardware',
      ],
      tech: ['Leadership', 'Education', 'Community', 'Neurodiversity', 'Assistive Tech'],
      website: 'https://rootingminds.org/',
      isLogo: true,
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <PageHero
        eyebrow="What I've Built"
        title="Work & Projects"
        subtitle="Every one of these started as a question I couldn't let go of. Here's the fuller story behind each project."
      />

      <div className="container-custom pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="max-w-4xl mx-auto space-y-12">
          {projects.map((project, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <div key={project.slug} className="card relative overflow-hidden group">
                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: accent }}
                ></div>

                <div className="mb-4">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="heading-md text-slate-900">{project.title}</h2>
                  </div>
                  <div className="flex gap-3 items-center text-sm text-slate-500 flex-wrap">
                    <span className="font-semibold text-slate-700">{project.year}</span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold text-white shadow-xs"
                      style={{ backgroundColor: accent }}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-medium">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {project.image && (
                  <div
                    className={`rounded-xl overflow-hidden border border-slate-200 mb-6 max-w-lg ${
                      project.isLogo ? 'p-6 bg-slate-50 aspect-auto max-w-xs flex items-center justify-center' : 'aspect-[16/9] bg-slate-100'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={project.isLogo ? 'h-28 object-contain' : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'}
                    />
                  </div>
                )}

                <p className="prose mb-6 text-slate-600">{project.overview}</p>

                <div className="mb-6">
                  <h3 className="heading-sm mb-3 text-base text-slate-900">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-sm text-slate-600 flex gap-2.5">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: accent }}
                        ></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="heading-sm mb-3 text-base text-slate-900">Technology & Domains</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
                    >
                      View on GitHub <span>→</span>
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
                    >
                      Visit Website <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {/* Research Focus Card */}
          <section className="card relative overflow-hidden bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600"></div>
            <p className="subtitle mb-2 text-sky-600">Research Focus</p>
            <h2 className="heading-md mb-4 text-slate-900">Brain-Computer Interfaces & Wearable Diagnostics</h2>
            <p className="prose mb-4 text-slate-600">
              My engineering work is centered on making biosignal acquisition accessible and child-friendly. Wearable EEG headsets and embedded signal processing allow us to decipher intent from children who cannot speak or gesture easily.
            </p>
            <p className="prose text-slate-600">
              Combined with computer vision and deep learning models for medical imaging, these tools demonstrate how applied machine learning can deliver tangible, compassionate assistance directly to individuals and families.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
