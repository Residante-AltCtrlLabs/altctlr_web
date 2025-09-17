"use client";

import { useState } from "react";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder submit
    setTimeout(() => setSubmitting(false), 800);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black";

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-semibold">
          Write to <span className="italic">Us.</span>
        </h3>
        <p className="text-gray-600 mt-4">
          Whether it's a question, an idea, or an opportunity — we'd love to
          hear from you.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className={inputClass} placeholder="First Name *" required />
            <input className={inputClass} placeholder="Last Name *" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className={inputClass}
              type="email"
              placeholder="Email *"
              required
            />
            <input
              className={inputClass}
              placeholder="Company Name *"
              required
            />
          </div>
          <textarea
            className={`${inputClass} h-36 resize-none`}
            placeholder="Message *"
            required
          />
          <div className="text-left">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 bg-black text-white rounded-md text-sm disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          <p className="text-[11px] text-gray-400">
            Your information stays private. By submitting, you agree to receive
            occasional updates from Altctrl.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
