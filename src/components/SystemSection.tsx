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
    className={`rounded-2xl border border-[#353535] bg-white p-8 md:p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] ${className}`}
  >
    {children}
  </div>
);

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-end gap-3">
    <div className="text-6xl md:text-7xl font-semibold tracking-tight">
      {value}
    </div>
    <div className="uppercase text-xs tracking-widest mb-2 opacity-70">
      {label}
    </div>
  </div>
);

const SystemSection = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-28">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8" style={{ marginTop: "150px" }}>
            {/* Heading + Copy */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
                The System That Works While
                <br /> You Don’t See It.
              </h2>
              <p className="text-xl leading-relaxed text-black/80">
                AI that answers leads, scores intent, syncs <br></br> calendars,
                and even surfaces hidden inventory — <br></br> all before your
                team notices a thing.
              </p>
            </div>

            {/* Pocket Inventory card under the text */}
            <Card>
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

          {/* RIGHT COLUMN: 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* AI Outreach */}
            <Card>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold">AI Outreach</h3>
                <p className="text-sm text-black/70">
                  Every lead answered in under
                </p>
                <Metric value="10" label="seconds" />
                <div className="h-px bg-black/10 my-5" />
                <p className="text-sm text-black/70">
                  No missed leads. AI engages instantly across WhatsApp, web
                  forms, and partner feeds.
                </p>
              </div>
            </Card>

            {/* Smart Scheduling */}
            <Card>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold">Smart Scheduling</h3>
                <p className="text-sm text-black/70">
                  Timezones, conflicts, confirmations — handled.
                </p>
                <Metric value="0" label="double-bookings" />
                <div className="h-px bg-black/10 my-5" />
                <p className="text-sm text-black/70">
                  Scheduling runs itself. Every slot synced, every calendar
                  aligned.
                </p>
              </div>
            </Card>

            {/* Response Engine */}
            <Card>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold">Response Engine</h3>
                <p className="text-sm text-black/70">
                  Every marketing ads deliver
                </p>
                <Metric value="25%" label="higher roi" />
                <div className="h-px bg-black/10 my-5" />
                <p className="text-sm text-black/70">
                  Every campaign inquiry answered — ad spend that never goes to
                  waste.
                </p>
              </div>
            </Card>

            {/* Pipeline Clarity */}
            <Card>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold">Pipeline Clarity</h3>
                <p className="text-sm text-black/70">
                  From first contact to close — always
                </p>
                <Metric value="100%" label="visibility" />
                <div className="h-px bg-black/10 my-5" />
                <p className="text-sm text-black/70">
                  Complete visibility across every step that matters. No lost
                  context.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
