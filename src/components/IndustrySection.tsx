"use client";

import React from "react";
import Image from "next/image";

const IndustrySection = () => {
  return (
    <section className="w-full bg-black text-white relative">
      {/* Background image for mobile/tablet */}
      <div 
        className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/city-skyline2.png)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] p-24
        "
        >
          {/* Left: Image - Hidden on mobile, shown on lg+ */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/city-skyline2.png"
              alt="City skyline at night"
              fill
              className="object-cover rounded-3xl"
              priority
            />
            {/* Speech bubble overlay */}
            {/* <div className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Actual Image will be shared.
            </div> */}
          </div>

          {/* Right: Content */}
          <div className="bg-transparent lg:bg-black pt-12 lg:pt-16 flex flex-col justify-center ml-0 lg:ml-10">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-4xl font-semibold leading-tight">
                The Industry Already Sees It
              </h2>

              <p className="text-md lg:text-md text-white/80 leading-relaxed">
                McKinsey, BlackRock, and others agree: AI speed and automation
                define the next era of real estate.
              </p>

              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Explore Our Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
