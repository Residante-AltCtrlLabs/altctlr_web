"use client";

import React from "react";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10 ${className}`}
  >
    {children}
  </div>
);

const TrustSection = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-28">
        {/* Two-column layout with wider right column */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8 pt-40">
            {/* Heading + Copy */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-semibold leading-tight">
                Trust
                <br />
                <span className="font-light italic">Without Compromise.</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/80">
                Safeguarding data, workflows, and conversations with
                uncompromising care.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {/* Reliability First */}
            <Card className="p-6 md:p-7 min-h-[240px]">
              <div className="space-y-4">
                <div className="text-4xl mb-4">
                  <div className="w-8 h-8 flex flex-wrap gap-1">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Every lead, message, and schedule handled consistently,
                  without gaps.
                </p>
                <div className="h-px bg-white/20 my-4" />
                <h3 className="text-xl font-semibold">Reliability First</h3>
              </div>
            </Card>

            {/* Controlled Access */}
            <Card className="p-6 md:p-7 min-h-[240px]">
              <div className="space-y-4">
                <div className="text-4xl mb-4">
                  <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-4 h-0.5 bg-white ml-1"></div>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Teams see only what they need, with permission-based
                  visibility.
                </p>
                <div className="h-px bg-white/20 my-4" />
                <h3 className="text-xl font-semibold">Controlled Access</h3>
              </div>
            </Card>

            {/* Privacy by Default */}
            <Card className="p-6 md:p-7 min-h-[240px]">
              <div className="space-y-4">
                <div className="text-4xl mb-4">
                  <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Client conversations and data remain strictly confidential.
                </p>
                <div className="h-px bg-white/20 my-4" />
                <h3 className="text-xl font-semibold">Privacy by Default</h3>
              </div>
            </Card>

            {/* Future-Ready Governance */}
            <Card className="p-6 md:p-7 min-h-[240px]">
              <div className="space-y-4">
                <div className="text-4xl mb-4">
                  <div className="w-8 h-8 flex items-end">
                    <div className="w-2 h-6 bg-white rounded-sm"></div>
                    <div className="w-2 h-4 bg-white rounded-sm ml-1"></div>
                    <div className="w-2 h-2 bg-white rounded-sm ml-1"></div>
                    <div className="w-1 h-1 bg-white rounded-full ml-1 -mb-1"></div>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Compliance and governance are core to our roadmap from day
                  one.
                </p>
                <div className="h-px bg-white/20 my-4" />
                <h3 className="text-xl font-semibold">
                  Future-Ready Governance
                </h3>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/80">
            Security isn't an add-on. It's the foundation of Alternative
            Control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
