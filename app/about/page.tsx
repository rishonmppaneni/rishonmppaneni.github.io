import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'About | Rishon Muppaneni',
  description: 'High school engineer, researcher, and co-founder focused on assistive technology, EEG wearables, and AI for neurodiverse communities.',
};

const ACCENTS = ['#0284c7', '#0d9488', '#2563eb', '#059669', '#4f46e5', '#0284c7'];

interface SectionCardProps {
  index: number;
  title: string;
  children: React.ReactNode;
}

function SectionCard({ index, title, children }: SectionCardProps) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div className="card relative pl-8 md:pl-10 group">
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
        style={{ backgroundColor: accent }}
      ></div>
      <div className="flex items-center gap-3.5 mb-4">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs"
          style={{ backgroundColor: accent }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="heading-md text-slate-900">{title}</h2>
      </div>
      <div className="prose space-y-4 text-slate-600">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <PageHero
        eyebrow="A Bit About Me"
        title="About Rishon"
        subtitle="High school engineer, researcher, and co-founder focused on assistive technology, EEG wearables, and AI for neurodiverse communities. Here's the fuller story."
      />

      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionCard index={0} title="Who I Am">
            <p>
              I'm a student at Irvington High School (Class of 2028) in Fremont, California. I'm passionate about engineering technologies that solve urgent real-world problems — especially in assistive wearables, brain-computer interfaces, and AI-driven diagnostic tools.
            </p>
            <p>
              My journey is rooted in a simple conviction: technology should empower everyone, not just those served by standard commercial products. When conventional tools fail non-verbal children or people with sensory and cognitive challenges, that's where I choose to build.
            </p>
          </SectionCard>

          <SectionCard index={1} title="Research & Assistive Tech">
            <p>
              My research focuses on building hardware and intelligence that bridge communication and perception gaps. Currently, I am designing an EEG wearable headset that captures brain signals from neurodiverse children and applies machine learning to classify their intentions — offering non-verbal children a novel channel to communicate their needs and feelings.
            </p>
            <p>
              In healthcare AI, I built and trained a convolutional neural network (CNN) model to classify different stages of dementia leading to Alzheimer's Disease using MRI brain scans, finding structural differences across layers to aid in accessible screening. I have also engineered communication button devices and robotic assistive navigation sticks with obstacle detection sensors.
            </p>
          </SectionCard>

          <SectionCard index={2} title="Rooting Minds & Community Leadership">
            <p>
              I co-founded Rooting Minds, where I serve as Vice President. Rooting Minds is a 501(c)(3) non-profit organization dedicated to helping neurodiverse children develop critical thinking and problem-solving skills through engaging activities and games.
            </p>
            <p>
              We design specialized games, run hands-on workshops, and distribute learning decks tailored for neurodiverse learners. By coupling direct community engagement with custom assistive engineering, our goal is to build an environment where every child feels capable and included.
            </p>
          </SectionCard>

          <SectionCard index={3} title="Skills & Technical Focus">
            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="heading-sm mb-3 text-base text-sky-700">Hardware & Embedded Systems</h3>
                <ul className="text-sm space-y-2 text-slate-600">
                  <li>• Wearable EEG signal acquisition & processing</li>
                  <li>• Microcontroller programming & embedded circuits</li>
                  <li>• PCB and schematic development</li>
                  <li>• Sensor integration (EEG, ultrasonic, IMU)</li>
                  <li>• Child-friendly hardware ergonomics & prototyping</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="heading-sm mb-3 text-base text-teal-700">Software & AI Architecture</h3>
                <ul className="text-sm space-y-2 text-slate-600">
                  <li>• Deep learning & CNNs for medical imaging</li>
                  <li>• Python, PyTorch, and scikit-learn</li>
                  <li>• Signal filtering, Fourier transforms & DSP</li>
                  <li>• Computer vision & real-time edge processing</li>
                  <li>• Interactive app interfaces & data visualization</li>
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard index={4} title="Academics & Mission">
            <div className="grid grid-cols-3 gap-4 not-prose mb-4">
              {[
                { label: 'School', value: 'Irvington High' },
                { label: 'Cohort', value: 'Class of 2028' },
                { label: 'Non-Profit', value: 'Rooting Minds' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-base sm:text-lg font-bold text-slate-900">{stat.value}</p>
                  <p className="text-[0.68rem] uppercase tracking-wider text-sky-700 font-semibold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <p>
              I take rigorous coursework in mathematics, computer science, and natural sciences, applying theoretical concepts directly to hardware prototypes and machine learning pipelines.
            </p>
            <p>
              Whether debugging an analog signal conditioning circuit on my desk or testing an intent-classification model, I believe real progress happens through relentless curiosity and hands-on iteration.
            </p>
          </SectionCard>

          <SectionCard index={5} title="Beyond the Lab">
            <p>
              Beyond technical projects and Rooting Minds workshops, I enjoy collaborating with fellow students, mentoring peers in STEM, and exploring how assistive design can reshape education and accessibility worldwide.
            </p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
