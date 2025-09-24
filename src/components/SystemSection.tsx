"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl  border border-[#353535] bg-white p-8 md:p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] ${className}`}
  >
    {children}
  </div>
);

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-end gap-3">
    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
      {value}
    </div>
    <div className="uppercase text-xs tracking-widest mb-2 opacity-70">
      {label}
    </div>
  </div>
);

const SystemSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useWindowSize(1135);

  const systemItems = [
    {
      title: "AI Outreach",
      subtitle: "Every lead answered in under",
      metricValue: "10",
      metricLabel: "seconds",
      description:
        "No missed leads. AI engages instantly across WhatsApp, web forms, and partner feeds.",
    },
    {
      title: "Smart Scheduling",
      subtitle: "Timezones, conflicts, confirmations — handled.",
      metricValue: "0",
      metricLabel: "double-bookings",
      description:
        "Scheduling runs itself. Every slot synced, every calendar aligned.",
    },
    {
      title: "Response Engine",
      subtitle: "Every marketing ads deliver",
      metricValue: "25%",
      metricLabel: "higher roi",
      description:
        "Every campaign inquiry answered — ad spend that never goes to waste.",
    },
    {
      title: "Pipeline Clarity",
      subtitle: "From first contact to close — always",
      metricValue: "100%",
      metricLabel: "visibility",
      description:
        "Complete visibility across every step that matters. No lost context.",
    },
  ];

  const totalSlides = systemItems.length;

  const goPrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  };
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-28">
        {/* Two-column layout with wider right column */}
        <div
          className={`grid ${
            isSmallScreen
              ? "grid-cols-1 gap-8"
              : "grid-cols-[0.9fr_1.1fr] gap-12"
          } items-start`}
        >
          {/* LEFT COLUMN */}
          <div className="space-y-8" style={{ marginTop: "40px" }}>
            {/* Heading + Copy */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-light leading-tight">
                The System That Works While
                <br /> You Don’t See It.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-black/80">
                AI that answers leads, scores intent, syncs <br></br> calendars,
                and even surfaces hidden inventory — <br></br> all before your
                team notices a thing.
              </p>
            </div>

            {/* Pocket Inventory card under the text */}
            <Card className="hidden lg:block">
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold">Pocket Inventory</h3>
                <p className="text-sm text-black/70">
                  Your choice of what stays private.
                </p>
                <div className="flex items-baseline gap-4">
                  <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                    EXCLUSIVE
                  </div>
                  <div className="uppercase text-xs tracking-widest mb-1 opacity-70">
                    Listings
                  </div>
                </div>
                <div className="h-px bg-black/10 my-5" />
                <p className="text-sm text-black/70">
                  Projects revealed only when the intent is right.
                </p>
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          {isSmallScreen ? (
            <div className="flex flex-col gap-4">
              <Card className="p-6 md:p-7 min-h-[240px]">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {systemItems[activeIndex].title}
                  </h3>
                  <p className="text-sm text-black/70">
                    {systemItems[activeIndex].subtitle}
                  </p>
                  <Metric
                    value={systemItems[activeIndex].metricValue}
                    label={systemItems[activeIndex].metricLabel}
                  />
                  <div className="h-px bg-black/10 my-3" />
                  <p className="text-sm text-black/70">
                    {systemItems[activeIndex].description}
                  </p>
                </div>
              </Card>
              <div className="flex items-center justify-between">
                <div className="flex-1 h-1 bg-black/10 rounded-full mr-4">
                  <div
                    className="h-1 bg-black rounded-full transition-all"
                    style={{
                      width: `${((activeIndex + 1) / totalSlides) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={goPrev}
                    icon="pi pi-arrow-left"
                    className="bg-white border text-black py-2"
                    disabled={activeIndex === 0}
                  />
                  <Button
                    onClick={goNext}
                    icon="pi pi-arrow-right"
                    className="bg-white border text-black py-2"
                    disabled={activeIndex === totalSlides - 1}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {systemItems.map((item) => (
                <Card key={item.title} className="p-6 md:p-7 min-h-[240px]">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-black/70">{item.subtitle}</p>
                    <Metric value={item.metricValue} label={item.metricLabel} />
                    <div className="h-px bg-black/10 my-3" />
                    <p className="text-sm text-black/70">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
