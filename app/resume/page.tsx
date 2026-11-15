export const metadata = {
  title: 'Resume | Rishon Muppaneni',
  description: 'Education, research, projects, leadership, and technical skills — Rishon Muppaneni’s resume.',
};

const sections = [
  {
    title: 'EDUCATION',
    entries: [
      {
        title: 'Irvington High School, Fremont, California',
        meta: 'Class of 2028 (Junior) · Expected Graduation: 2028',
      },
      {
        title: 'Academic Profile & Coursework',
        bullets: [
          'Strong academic standing with focused coursework in Advanced Mathematics, Physics, Chemistry, and Computer Science',
          'Coursework: AP Computer Science, AP Physics, Calculus, Data Structures & Algorithms, Principles of Engineering',
          'Self-directed research in biomedical signal processing, machine learning architectures, and embedded electronics',
        ],
      },
    ],
  },
  {
    title: 'RESEARCH & ENGINEERING PROJECTS',
    entries: [
      {
        title: 'EEG Wearable Headset for Intent Classification — Lead Engineer & Researcher',
        meta: '2026 - Present',
        bullets: [
          'Developing a wearable EEG headset that captures brainwave activity from neurodiverse children to identify intentional communication signals',
          'Architecting signal acquisition and digital filtering pipelines in Python to remove noise and artifact interference',
          'Training classification models to recognize communicative intentions and suggest real-time responsive choices',
          'Designing an ergonomic, non-intrusive headpiece and electrode configuration comfortable for sensory-sensitive children',
        ],
      },
      {
        title: "Alzheimer's Disease Stage Classification Model — Deep Learning Researcher",
        meta: '2025 - 2026',
        bullets: [
          'Engineered a convolutional neural network (CNN) model to classify progressive stages of dementia and Alzheimer’s Disease from MRI brain scans',
          'Extracted structural biomarker features across convolutional layers to distinguish early-stage cognitive impairment from healthy tissue',
          'Trained and evaluated models with cross-validation to support accessible, pre-diagnostic clinical screening tools',
        ],
      },
      {
        title: 'Communication Button Device for Non-Verbal Children — Hardware Designer',
        meta: '2026 - Present',
        bullets: [
          'Designing a dedicated tactile button device enabling non-verbal children to record and vocalize pre-set and custom messages with one touch',
          'Developing schematics and PCB layout with microcontroller, audio record/playback modules, and rechargeable battery power circuit',
          'Formulating enclosure ergonomics and button resistance tailored to motor abilities of young learners',
        ],
      },
      {
        title: 'Assistive Navigation Stick for Visually Impaired — Prototyper & Builder',
        meta: '2025 - Present',
        bullets: [
          'Created a smart walking stick utilizing ultrasonic and proximity sensors to detect low-lying and mid-level obstacles',
          'Programmed microcontroller logic to trigger intuitive haptic vibration pulses and auditory indicators based on distance',
          'Tested and iterated sensor placements to maximize scanning field and eliminate navigational dead zones',
        ],
      },
    ],
  },
  {
    title: 'LEADERSHIP, NON-PROFIT, AND ACTIVITIES',
    entries: [
      {
        title: 'Rooting Minds (501(c)(3) Non-Profit Organization) — Co-Founder & Vice President',
        meta: '2025 - Present',
        bullets: [
          'Co-founded a community non-profit focused on fostering critical thinking, cognitive agility, and STEM interest among neurodiverse youth',
          'Designed hands-on game decks and interactive activities specifically adapted for neurodivergent cognitive styles',
          'Organized and led community workshops, partnering with families and local groups in Fremont and the greater Bay Area',
          'Directly gathered feedback from students to guide development of new assistive devices and educational tools',
        ],
      },
      {
        title: 'STEM Mentorship & Academic Clubs — Active Member & Peer Tutor',
        meta: 'Irvington High School · 2024 - Present',
        bullets: [
          'Assisting fellow students with coding assignments, physics problem-solving, and science fair preparation',
          'Participating in school technology showcases, robotics clubs, and maker community events',
        ],
      },
    ],
  },
  {
    title: 'TECHNICAL SKILLS & DOMAINS',
    entries: [
      {
        title: 'Technical Summary',
        bullets: [
          'Hardware & Embedded: Microcontrollers, EEG & Biosignal Sensors, PCB & Schematic Development, Breadboard Prototyping, Soldering, Hardware Debugging',
          'AI & Machine Learning: Python, Deep Learning (CNNs), PyTorch, Scikit-Learn, Medical Image Classification, Signal Processing (DSP, FFT, Filtering)',
          'Programming Languages: Python, C/C++, TypeScript, JavaScript, HTML5/CSS3',
          'Tools & Frameworks: Next.js, React, Tailwind CSS, Git/GitHub, Linux/CLI, CAD Prototyping',
          'Domain Areas: Assistive Technology, Neurodiversity Inclusion, Biomedical Instrumentation, Wearables',
        ],
      },
    ],
  },
];

const ACCENTS = ['#0d9488', '#0284c7', '#d97706', '#059669'];

export default function Resume() {
  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-16 border-b border-[#e6dcc8]">
        <div className="container-custom flex flex-wrap justify-between items-end gap-6">
          <div>
            <h1 className="heading-lg mb-3 text-[#0d9488]">Resume</h1>
            <p className="text-[var(--muted)]">
              rishonmuppaneni@gmail.com · Fremont, California · Irvington High School
            </p>
          </div>
          <a
            href="mailto:rishonmuppaneni@gmail.com?subject=Resume%20Request"
            className="btn-primary inline-flex items-center gap-2 shrink-0"
          >
            Request Official PDF <span>↓</span>
          </a>
        </div>
      </section>

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, sectionIndex) => (
            <section key={section.title} className="card relative overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 w-1.5"
                style={{ backgroundColor: ACCENTS[sectionIndex % ACCENTS.length] }}
              />
              <h2
                className="heading-sm text-lg mb-5 uppercase tracking-wide"
                style={{ color: ACCENTS[sectionIndex % ACCENTS.length] }}
              >
                {section.title}
              </h2>
              {section.entries.map((entry, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h3 className="font-bold text-slate-900 mb-0.5">{entry.title}</h3>
                  {entry.meta && <p className="text-sm text-[var(--muted)] mb-2 font-medium">{entry.meta}</p>}
                  {entry.bullets && (
                    <ul className="text-sm space-y-2 text-slate-600 mt-2">
                      {entry.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2 leading-relaxed">
                          <span
                            className="shrink-0 mt-0.5 font-bold"
                            style={{ color: ACCENTS[sectionIndex % ACCENTS.length] }}
                          >
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
