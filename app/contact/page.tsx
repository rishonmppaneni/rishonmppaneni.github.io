'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

const inputClass =
  'w-full px-4 py-2.5 border border-[#e6dcc8] rounded-xl bg-[#fffdf8] text-[#2b2620] focus:outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    const mailto = `mailto:rishonmuppaneni@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        title="Get in Touch"
        subtitle="Whether it's a research idea, a collaboration on assistive technology, or discussing wearables and AI for neurodiverse kids — I'd love to hear from you."
      />

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact info column */}
          <div className="md:col-span-2 space-y-4">
            <div className="card">
              <h3 className="heading-sm text-base mb-2" style={{ color: '#0d9488' }}>
                Email
              </h3>
              <a
                href="mailto:rishonmuppaneni@gmail.com"
                className="text-slate-700 hover:text-[#0d9488] transition break-all font-medium"
              >
                rishonmuppaneni@gmail.com
              </a>
              <p className="text-xs text-[var(--muted)] mt-2">
                I typically respond within 24 to 48 hours.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-sm text-base mb-3" style={{ color: '#0284c7' }}>
                Social & Code
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/rishonmuppaneni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-slate-700 hover:text-[#0d9488] transition font-medium"
                >
                  <span>GitHub</span>
                  <span className="text-[#0d9488]">→</span>
                </a>
                <a
                  href="https://rootingminds.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-slate-700 hover:text-[#0d9488] transition font-medium"
                >
                  <span>Rooting Minds Non-Profit</span>
                  <span className="text-[#0d9488]">↗</span>
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-sm text-base mb-2" style={{ color: '#059669' }}>
                Location
              </h3>
              <p className="text-slate-700 font-medium">Fremont, California, USA</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Irvington High School · Silicon Valley Bay Area
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-3 card">
            <h2 className="heading-md mb-2 text-[#2b2620]">Send a Message</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Fill out this quick form to start an email thread directly.
            </p>

            {submitted && (
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6 text-sm text-teal-800 font-medium">
                Opening your email client with this message pre-filled — just hit send there!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project idea, collaboration, question..."
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
