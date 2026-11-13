import Header from "../component/header";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#fbf7ef] font-sans text-[#2b2620]">
            <Header />

            <section className="max-w-3xl mx-auto px-6 pt-16 pb-24 lg:pt-24">
                <p className="text-xl italic text-[#5c5347] mb-2">Let's talk</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0d9488] mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg text-[#5c5347] leading-relaxed max-w-xl mb-12">
                    Whether it's a research idea, a collaboration, or you just want to talk about wearables and AI for neurodiverse kids - I'd love to hear from you.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-16">
                    {/* Email */}
                    <div className="bg-white rounded-2xl border border-[#e6dcc8] p-6 shadow-sm">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5c5347] mb-2">
                            Email
                        </h2>
                        <a
                            href="mailto:rishonmuppaneni@gmail.com"
                            className="text-lg font-medium text-[#0d9488] hover:underline break-all"
                        >
                            rishonmuppaneni@gmail.com
                        </a>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-2xl border border-[#e6dcc8] p-6 shadow-sm">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5c5347] mb-2">
                            Location
                        </h2>
                        <p className="text-lg font-medium text-[#1c1917]">
                            Fremont, California, USA
                        </p>
                    </div>
                </div>

                {/* Social / Links */}
                <div className="bg-white rounded-2xl border border-[#e6dcc8] p-6 shadow-sm mb-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5c5347] mb-4">
                        Social
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/rishonmuppaneni"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] text-white text-sm font-medium px-5 py-2.5 hover:bg-[#0f766e] transition-colors"
                        >
                            GitHub
                        </a>
                        {/* Add LinkedIn later if you have one */}
                    </div>
                </div>

                {/* Simple message note */}
                <div className="rounded-2xl border border-[#e6dcc8] bg-white p-8 text-center">
                    <p className="text-[#5c5347] mb-4">
                        Prefer email? Just click the address above - I usually reply within a day or two.
                    </p>
                    <a 
                        href="mailto:rishonmuppaneni@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] text-white font-medium px-6 py-3 hover:bg-[#0f766e] transition-colors"
                    >
                        Send an Email
                    </a>
                </div>
            </section>
        </div>
    );
}