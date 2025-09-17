"use client";

import Image from "next/image";

type HighlightProps = {
  category: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  imageSrc: string;
};

const Hero = ({
  category,
  tag,
  date,
  title,
  excerpt,
  imageSrc,
}: HighlightProps) => {
  return (
    <section className="bg-white text-black pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl text-center md:text-6xl font-semibold tracking-tight">
          Perspectives
        </h1>
        <p className="text-gray-500 mt-2 text-xl italic text-center mb-20">
          on Property, AI and Growth.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <Image
              src={imageSrc}
              alt="Hero image"
              width={900}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div>
            <div className="text-sm text-gray-500 space-x-2">
              <span>Blog</span>
              <span>•</span>
              <span>{tag}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
