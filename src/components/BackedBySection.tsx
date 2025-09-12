"use client";

import React from "react";

const BackedBySection = () => {
  return (
    <section className="w-full bg-teal-900 text-white py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-start ml-20 mb-16">
          Backed by the Industry's Perspective.
        </h2>

        {/* Four company quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Deloitte */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Deloitte.</h3>
            <blockquote className="text-sm leading-relaxed text-white/90">
              "Conversational AI will become a key differentiator in real
              estate, enabling faster response times, personalized experiences,
              and scalable client service without increasing headcount."
            </blockquote>
            <p className="text-xs text-white/70">
              — Deloitte, Conversational AI in Real Estate Customer Services
              (2024)
            </p>
          </div>

          {/* McKinsey & Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">
              McKinsey & Company
            </h3>
            <blockquote className="text-sm leading-relaxed text-white/90">
              "In our own work with AI, real estate companies have gained over
              10% in net operating income — through efficiency, better customer
              experience, tenant retention, smarter asset selection."
            </blockquote>
            <p className="text-xs text-white/70">
              — McKinsey & Company, Real Estate Insights (2023)
            </p>
          </div>

          {/* BlackRock */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">BlackRock®</h3>
            <blockquote className="text-sm leading-relaxed text-white/90">
              "AI is transforming real estate investing by automating tasks,
              optimizing operations, and creating new investment opportunities."
            </blockquote>
            <p className="text-xs text-white/70">
              — BlackRock, Institutional Insights (2024)
            </p>
          </div>

          {/* PwC */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="relative">
                p
                <span className="absolute top-0 left-0 right-0 h-px bg-white"></span>
                wc
              </span>
            </h3>
            <blockquote className="text-sm leading-relaxed text-white/90">
              "Top performing companies are moving from chasing AI use cases to
              building AI capabilities that fulfill business strategy."
            </blockquote>
            <p className="text-xs text-white/70">
              — Dan Priest, PwC US Chief AI Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedBySection;
