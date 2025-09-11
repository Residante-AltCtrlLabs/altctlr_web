"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({
  to,
  durationMs = 1500,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) => {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // Start only when visible
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRunning(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeOutCubic(t);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running, durationMs, to]);

  const formatted = useMemo(() => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(value * factor) / factor;
    return `${prefix}${rounded.toFixed(decimals)}${suffix}`;
  }, [value, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
};

const PerformanceSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
          Proof in Performance — Measurable Gains Across Every Workflow.
        </h3>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-end">
          <div className="text-center lg:text-left">
            <CountUp
              to={40}
              suffix="%"
              className="block text-6xl md:text-7xl font-semibold"
            />
            <p className="mt-6 text-sm text-white/80">
              Faster Lead-To-Appointment Speed
            </p>
          </div>
          <div className="text-center lg:text-left">
            <CountUp
              to={3}
              suffix="x"
              className="block text-6xl md:text-7xl font-semibold"
            />
            <p className="mt-6 text-sm text-white/80">
              Higher Lead Engagement Rate
            </p>
          </div>
          <div className="text-center lg:text-left">
            <CountUp
              to={35}
              suffix="%"
              className="block text-6xl md:text-7xl font-semibold"
            />
            <p className="mt-6 text-sm text-white/80">
              Reduction In Operational Costs
            </p>
          </div>
          <div className="text-center lg:text-left">
            <CountUp
              to={99.9}
              decimals={1}
              suffix="%"
              className="block text-6xl md:text-7xl font-semibold"
            />
            <p className="mt-6 text-sm text-white/80">System Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
