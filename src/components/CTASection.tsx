"use client";

import React from "react";

const CTASection = () => {
  console.log("Pushing");
  return (
    <section className="w-full bg-white !py-44 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-12 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight mb-6">
          Smarter Systems.
        </h1>

        {/* Sub-heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-black mb-8">
          Seamless Results.
        </h2>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-black/70 mb-12 max-w-2xl mx-auto">
          Real estate's system of record. And system of action.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center px-8 py-4 border border-gray-300 bg-white text-black font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-sm">
          <span className="mr-3">Explore The OS</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
