"use client";

import React from "react";
import { Carousel } from "primereact/carousel";

const BackedBySection = () => {
  // Company data for carousel
  const companies = [
    {
      id: 1,
      name: "Deloitte.",
      quote: "Conversational AI will become a key differentiator in real estate, enabling faster response times, personalized experiences, and scalable client service without increasing headcount.",
      source: "Deloitte, Conversational AI in Real Estate Customer Services (2024)"
    },
    {
      id: 2,
      name: "McKinsey & Company",
      quote: "In our own work with AI, real estate companies have gained over 10% in net operating income — through efficiency, better customer experience, tenant retention, smarter asset selection.",
      source: "McKinsey & Company, Real Estate Insights (2023)"
    },
    {
      id: 3,
      name: "BlackRock®",
      quote: "AI is transforming real estate investing by automating tasks, optimizing operations, and creating new investment opportunities.",
      source: "BlackRock, Institutional Insights (2024)"
    },
    {
      id: 4,
      name: "pwc",
      quote: "Top performing companies are moving from chasing AI use cases to building AI capabilities that fulfill business strategy.",
      source: "Dan Priest, PwC US Chief AI Officer"
    }
  ];

  const companyTemplate = (company: typeof companies[0]) => {
    return (
      <div className="space-y-4 p-4">
        <h3 className={`text-5xl font-bold ${company.name === "McKinsey & Company" ? "font-serif font-semibold" : ""}`}>
          {company.name === "pwc" ? (
            <span className="relative">
              p
              <span className="absolute top-0 left-0 right-0 h-px bg-white"></span>
              wc
            </span>
          ) : (
            company.name
          )}
        </h3>
        <blockquote className="text-sm leading-relaxed text-white/90">
          "{company.quote}"
        </blockquote>
        <p className="text-xs text-white/70">
          — {company.source}
        </p>
      </div>
    );
  };

  return (
    <section className="w-full bg-teal-900 text-white py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-start ml-20 mb-16">
          Backed by the Industry's Perspective.
        </h2>

        {/* Carousel */}
        <div className="max-w-[95%] mx-auto">
          <Carousel
            value={companies}
            itemTemplate={companyTemplate}
            numVisible={3}
            numScroll={1}
            circular={true}
            autoplayInterval={4000}
            showIndicators={false}
            showNavigators={false}
            className="custom-carousel"
            pt={{
              content: {
                className: "bg-transparent"
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BackedBySection;
