"use client";
import { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Sponsor logos data with actual SVG images
  const sponsors = [
    { name: "OpenAI", logo: "/images/openai.svg" },
    { name: "AWS", logo: "/images/aws.svg" },
    { name: "Claude", logo: "/images/claude.svg" },
    { name: "Stripe", logo: "/images/stripe.svg" },
    { name: "DeepSeek", logo: "/images/deepseek.svg" },
    { name: "Misterial", logo: "/images/misterial.svg" },
    { name: "Meta", logo: "/images/meta-line.svg" },
  ];

  // Duplicate the array for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  // Define the sponsor item template for the carousel
  const itemTemplate = (sponsor: any) => {
    return (
      <div className="flex-shrink-0 mx-8 flex items-center justify-center">
        <div className="text-white/60 hover:text-white transition-colors duration-300 group">
          <div className="h-12 w-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-8 w-auto filter brightness-0 invert opacity-1 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {sponsor.name}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-white/70 text-sm font-light tracking-wider uppercase">
            Powered by World-Class Infrastructure
          </p>
        </div>

        {/* PrimeReact Carousel */}
        <div className="relative">
          <Carousel
            value={duplicatedSponsors}
            itemTemplate={itemTemplate}
            numVisible={6}
            numScroll={1}
            circular={true}
            autoplayInterval={3500}
            showNavigators={false}
            responsiveOptions={[
              { breakpoint: "1279px", numVisible: 4, numScroll: 1 }, // <1280px (lg): 4
              { breakpoint: "1023px", numVisible: 2, numScroll: 1 }, // <1024px (md): 2
              { breakpoint: "767px", numVisible: 1, numScroll: 1 }, // <768px (sm): 1
            ]}
          />
        </div>

        {/* Fade edges for smooth effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default Sponsors;
