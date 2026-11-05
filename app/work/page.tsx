import Header from "../component/header";

const projects = [
    {
        title: "EEG Wearable Headset for Intent Classification",
        year: "2026 - Present",
        badge: "In Development",
        description:
            "An EEG wearable headset that collects brain signals from neurodiverse children and uses an AI model to classify their intentions, then suggests solutions. Designed to help non-verbal and neurodiverse kids communicate more effectively.",
        highlights: [
            "Collecting EEG brain-signal data from target users",
            "Building and training classification models for intent detection",
            "Designing a wearable form factor suitable for children",
            "Focusing on real-world usability for neurodiverse users",
        ],
        tech: ["EEG", "Signal Processing", "Machine Learning", "Python", "Embedded Systems"],
    },
    {
        title: "Alzheimer's Disease Stage Classification Model",
        year: "2025 - 2026",
        badge: "Deep Learning",
        description: 
            "A deep learning model that classifies different stages of Dementia which leads to Alzheimer's Disease. It is aimed at supporting earlier and more accessible screening.",
        highlights: [
            "Built and trained a CNN model to identify differences in MRI brain slices by finding differences in neural network layers such as edges and shapes",
            "Worked with medical imaging / clinical data patterns",
            "Focused on stage differentiation for practical diagnostic support",
        ],
        tech: ["Deep Learning", "Python", "Computer Vision", "Medical AI"],
    },
    {
        title: "Communication Button Device for Non-Verbal Children",
        year: "2026 - Present",
        badge: "In Development",
        description:
            "A simple button device that helps non-verbal children record speech and communicate with others through customizable, one-press messages.",
        highlights: [
            "One-press interface designed for ease of use",
            "Customizable message bank per child",
            "Durable, child-friendly hardware concept",
            "Built with input needs of neurodiverse communities",
        ],
        tech: ["Embedded Systems", "Hardware Design", "PCB and Schematic development", "User-Centered Design"],
    },
    {
        title: "Rooting Minds",
        year: "2025 - Present",
        badge: "Co-Founder & Vice President",
        description:
            "A non-profit organization that helps neurodiverse children develop problem-solving and critical-thinking skills through interactive games and activities.",
        highlights: [
            "Co-founded and currently serve as Vice President",
            "Designing activities and games for neurodiverse learners",
            "Community outreach and program development",
        ],
        tech: ["Leadership", "Education", "Community", "Neurodiversity"],
    },
];

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-[#fbf7ef] font-sans text-[#2b2620]">
            <Header />
            <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 lg:pt-20">
                <p className="text-xl italic text-[#5c5347] mb-2">What I've Built</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0d9488] mb-4">
                    Work and Projects
                </h1>
                <p className="text-lg text-[#5c5347] max-w-2xl leading-relaxed">
                    Every one of these started as a question I couldn't let go of. 
                    Here's the fuller story behind each one.
                </p>
            </section>

            {/* Project cards */}
            <section className="max-w-4xl mx-auto px-6 pb-24 space-y-10">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="bg-white rounded-2xl border border-[#e6dcc8] shadow-sm overflow-hidden"
                    >
                        {/* Teal accent bar (like Raeyaan's maroon bar) */}
                        <div className="h-1.5 bg-[#0d9488]" />

                        <div className="p-8 sm:p-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1917] mb-3">
                                {project.title}
                            </h2>

                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="text-sm font-medium text-[#5c5347]">
                                    {project.year}
                                </span>
                                <span className="inline-flex items-center rounded-full bg-[#0d9488] text-white text-xs font-medium px-3 py-1">
                                    {project.badge}
                                </span>
                            </div>

                            {/* Image placeholder - replace later with real photos */}
                            <div className="rounded-xl bg-gradient-to-br from-[#0d9488]/10 to-[#fbf7ef] border border-[#e6dcc8] aspect-[16/9] max-h-64 flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <div className="w-14 h-14 rounded-xl bg-[#0d9488] text-white flex items-center justify-center text-lg font-bold mx-auto mb-2">
                                        RM
                                    </div>
                                    <p className="text-sm text-[#5c5347]">Project image coming soon</p>
                                </div>
                            </div>

                            <p className="text-[#5c5347] leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1c1917] mb-3">
                                    Key Highlights
                                </h3>
                                <ul className="space-y-2">
                                    {project.highlights.map((item) => (
                                        <li key={item} className="flex gap-2 text-[#5c5347] leading-relaxed">
                                            <span className="text-[#0d9488] mt-1.5 shrink-0">.</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1c1917] mb-3">
                                    Technology
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="inline-flex items-center rounded-full bg-[#fbf7e7] border border-[#e6dcc8] text-sm text-[#5c5347] px-3 py-1"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}