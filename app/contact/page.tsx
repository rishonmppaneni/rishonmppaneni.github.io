'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

const inputClass =
  'w-full px-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition text-sm';

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
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <PageHero
        title="Get in Touch"
        subtitle="Whether it's a research idea, a collaboration on assistive technology, or discussing wearables and AI for neurodiverse kids — I'd love to hear from you."
      />

      <div className="container-custom py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info Column */}
          <div className="md:col-span-2 space-y-5">
            <div className="card">
              <h3 className="heading-sm text-base mb-2 text-sky-700">
                Direct Email
              </h3>
              <a
                href="mailto:rishonmuppaneni@gmail.com"
                className="text-slate-800 hover:text-sky-600 transition break-all font-medium text-sm"
              >
                rishonmuppaneni@gmail.com
              </a>
              <p className="text-xs text-slate-500 mt-2">
                I typically respond within 24 to 48 hours.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-sm text-base mb-3 text-teal-700">
                Social & Code
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/rishonmuppaneni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-slate-700 hover:text-sky-600 transition font-medium text-sm"
                >
                  <span>GitHub Repository</span>
                  <span className="text-sky-600">→</span>
                </a>
                <a
                  href="https://rootingminds.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-slate-700 hover:text-sky-600 transition font-medium text-sm"
                >
                  <span>Rooting Minds Non-Profit</span>
                  <span className="text-sky-600">↗</span>
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-sm text-base mb-2 text-blue-700">
                Location
              </h3>
              <p className="text-slate-800 font-medium text-sm">Fremont, California, USA</p>
              <p className="text-xs text-slate-500 mt-1">
                Irvington High School · Silicon Valley Bay Area
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3 card">
            <h2 className="heading-md mb-2 text-slate-900">Send a Message</h2>
            <p className="text-sm text-slate-500 mb-6">
              Fill out this quick form to start an email thread directly.
            </p>

            {submitted && (
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6 text-sm text-sky-800 font-medium">
                Opening your email client with this message pre-filled — just hit send there!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-slate-700">
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
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-slate-700">
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
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-slate-700">
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
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-slate-700">
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
