import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Activities & Leadership | Rishon Muppaneni',
  description: 'Rooting Minds, neurodiversity outreach, STEM mentorship, and leadership — activities Rishon Muppaneni leads outside the lab.',
};

const ACCENTS = ['#0284c7', '#0d9488', '#2563eb', '#059669', '#4f46e5'];

interface ActivityCardProps {
  index: number;
  title: string;
  meta: string;
  description?: string;
  items?: string[];
  itemsLabel?: string;
}

function ActivityCard({ index, title, meta, description, items, itemsLabel = 'Highlights' }: ActivityCardProps) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div className="card relative overflow-hidden group">
      <div
        className="absolute top-0 left-0 bottom-0 w-1.5"
        style={{ backgroundColor: accent }}
      ></div>
      <h2 className="heading-md mb-1 text-slate-900">{title}</h2>
      <p className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: accent }}>{meta}</p>
      {description && <p className="prose mb-5 text-slate-600">{description}</p>}
      {items && (
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <h3 className="heading-sm mb-3 text-xs uppercase tracking-widest text-slate-500">{itemsLabel}</h3>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 flex gap-2.5">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: accent }}
                ></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Activities() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <PageHero
        eyebrow="Outside the Lab"
        title="Activities & Leadership"
        subtitle="Bridging technical engineering with direct community impact through non-profit leadership and inclusive STEM education."
      />

      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-7">
          <ActivityCard
            index={0}
            title="Rooting Minds"
            meta="Co-Founder & Vice President · 2025 - Present"
            description="Co-founded Rooting Minds, a non-profit initiative dedicated to empowering neurodiverse youth through interactive problem-solving games, workshops, and custom assistive technology."
            itemsLabel="Key Initiatives"
            items={[
              'Co-founded organization and currently serve as Vice President',
              'Designed educational games and activity formats specifically adapted for neurodiverse learners',
              'Facilitated hands-on workshops teaching STEM, logical reasoning, and collaborative problem-solving',
              'Translated real-time observations of student communication challenges into engineering requirements for assistive devices',
              'Built partnerships with local youth communities and families in the Fremont area',
            ]}
          />

          <ActivityCard
            index={1}
            title="Assistive Technology & Neurodiversity Advocacy"
            meta="Community Lead · 2025 - Present"
            description="Spearheading awareness initiatives around accessible design and assistive communication tools for individuals with disabilities."
            itemsLabel="Outreach Focus"
            items={[
              'Demonstrated prototypes of EEG headsets and tactile speech buttons to educators and families',
              'Gathered qualitative user feedback from neurodiverse children to inform iterative hardware revisions',
              'Promoted inclusive design practices that prioritize dignity, accessibility, and intuitive ergonomics',
            ]}
          />

          <ActivityCard
            index={2}
            title="School Leadership & STEM Mentorship"
            meta="Irvington High School · Fremont, CA"
            description="Active participant in academic activities, maker spaces, and peer mentorship at Irvington High."
            itemsLabel="Roles & Involvement"
            items={[
              'Mentoring peers in introductory programming, hardware prototyping, and science fair methodologies',
              'Participating in school STEM clubs, robotics discussions, and collaborative projects',
              'Leading informal workshops on signal processing and machine learning fundamentals',
            ]}
          />

          <ActivityCard
            index={3}
            title="Independent Maker & Hardware Exploration"
            meta="Fremont, CA · 2024 - Present"
            description="Hands-on self-directed engineering, exploring circuit layout, PCB design, 3D printing, and sensor integration."
            itemsLabel="Explorations"
            items={[
              'Prototyping low-noise amplifier circuits for biosignal acquisition',
              'Testing ultrasonic and LiDAR rangefinders for wearable navigation devices',
              'Experimenting with embedded neural network inference on microcontrollers',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
