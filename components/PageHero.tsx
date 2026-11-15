interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-16 border-b border-slate-200/80 bg-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom">
        {eyebrow && <p className="calligraphy text-2xl md:text-3xl mb-2 text-sky-600">{eyebrow}</p>}
        <h1 className="heading-lg mb-4 text-slate-900 tracking-tight">{title}</h1>
        {subtitle && <p className="prose text-lg max-w-2xl text-slate-600">{subtitle}</p>}
      </div>
    </section>
  );
}
