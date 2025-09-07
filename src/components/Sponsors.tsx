"use client";

import { useEffect, useState } from "react";

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Sponsor logos data - you can replace these with actual logos
  const sponsors = [
    { name: "OpenAI", logo: "🤖" },
    { name: "AWS", logo: "☁️" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Stripe", logo: "💳" },
    { name: "Snowflake", logo: "❄️" },
    { name: "Alpha", logo: "α" },
  ];

  // Duplicate the array for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-white/70 text-sm font-light tracking-wider uppercase">
            Powered by World-Class Infrastructure
          </p>
        </div>

        {/* Sliding Logos Container */}
        <div className="relative">
          <div className="flex animate-slide">
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="text-white/60 hover:text-white transition-colors duration-300 group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {sponsor.logo}
                  </div>
                  <div className="text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sponsor.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges for smooth effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default Sponsors;
