"use client";

import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email submitted:", email);
  };

  return (
    <section className="w-full relative py-44">
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/subscribe-bg.png")',
          opacity: 0.4,
        }}
      />

      {/* Content with full opacity */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
          Stay Ahead of the Curve
        </h2>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Get the latest insights, updates, and industry trends delivered to
          your inbox.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-5 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg"
              required
            />
            <button
              type="submit"
              className="px-8 py-5 bg-[#F0F0F070] text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Join
            </button>
          </div>
        </form>

        {/* Privacy Note */}
        <p className="text-sm text-white/70 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default SubscribeSection;
