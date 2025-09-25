"use client";

import { useMemo, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import useWindowSize from "@/hooks/useWindowSize";

const EngineSection = () => {
  // --- Base items (same as your list) ---
  const base = [
    {
      icon: "pi pi-sitemap",
      title: "Workflow Automation",
      desc: "Tasks created and routed automatically — no manual chasing.",
    }, // hero (idx 0)
    {
      icon: "pi pi-calendar",
      title: "AI Auto-Scheduling",
      desc: "Every calendar synced, every slot aligned — zero conflicts.",
    },
    {
      icon: "pi pi-chart-line",
      title: "Lead Scoring Engine",
      desc: "Tasks created and routed automatically — no manual chasing.",
    },
    {
      icon: "pi pi-share-alt",
      title: "Multi-Channel Engagement",
      desc: "Conversations unified across channels — always on, always consistent.",
    },
    {
      icon: "pi pi-chart-bar",
      title: "Analytics That Prove ROI",
      desc: "Every action tracked, every result measured — impact made visible.",
    },
  ];

  // idx inject so we can style first item via idx
  const items = base.map((it, idx) => ({ ...it, idx }));
  // const isSmallScreen = useWindowSize(1795);
  const isMobileHero = useWindowSize(1024);
  // --- Fixed carousel config ---
  const numVisible = window.innerWidth <= 1795 ? 1 : 7;
  const numScroll = 1;
  const circular = false;
  const responsiveOptions = [
    {
      breakpoint: "3000px",
      numVisible: 7,
      numScroll: 1,
    },
    {
      breakpoint: "1795px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1450px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const [page, setPage] = useState(0);

  const totalPages = useMemo(() => {
    const N = items.length;
    if (N <= numVisible) return 1;
    return Math.floor(Math.max(0, N - numVisible) / numScroll) + 1;
  }, [items.length, numVisible, numScroll]);

  const goPrev = () =>
    setPage((p) =>
      circular ? (p - 1 + totalPages) % totalPages : Math.max(p - 1, 0)
    );
  const goNext = () =>
    setPage((p) =>
      circular ? (p + 1) % totalPages : Math.min(p + 1, totalPages - 1)
    );

  const itemTemplate = (it: any) => {
    const isHero = it.idx === 0;

    if (isHero || isMobileHero) {
      return (
        <div className="px-2  flex justify-center ">
          <div className="bg-white text-[#0f172a] pt-12 pb-12  h-[287px] w-[486px] rounded-3xl shadow-2xl">
            <div className="px-6 pt-6  h-full  flex flex-col justify-between ">
              <div className="text-xl mb-5">
                <i className={it.icon}></i>
              </div>
              <div className="space-y-4">
                <p className="text-sm opacity-80">{it.desc}</p>

                <h3 className="font-bold text-xl">{it.title}</h3>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="px-2 mt-20">
        <div className="bg-[#F0F0F04D] text-white h-52 w-64 flex flex-col gap-y-4 rounded-lg shadow-lg">
          <div className="px-6 pt-10">
            <div className="text-4xl mb-4 rounded-xl">
              <i className={it.icon}></i>
            </div>
            <h3 className="font-bold leading-tight">{it.title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full">
      {/* Top heading block */}
      <div className="w-full flex flex-col items-center text-center text-white pt-36 pb-20">
        <div className="mb-6">
          <span className="uppercase tracking-widest text-[10px] px-3 py-1 rounded-full border border-white/20 bg-white/5">
            Platform
          </span>
        </div>
        <div className="leading-tight">
          <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold">
            The Invisible Engine.
          </div>
          <div className="mt-2 text-[34px] sm:text-[40px] md:text-[46px] font-serif italic font-normal">
            Behind Every Deal.
          </div>
        </div>
        <p className="mt-6 text-sm sm:text-base text-white/80 max-w-2xl">
          More than features — the ecosystem powering real estate, end-to-end,
          without gaps.
        </p>
      </div>

      {/* Image/slider block */}
      <div className="relative w-[95%] rounded-lg mx-auto overflow-hidden">
        {/* Background image with reduced opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/secbg.png")', opacity: 0.35 }}
        />

        <div className="relative z-10 text-white p-16 pt-24 flex flex-col justify-center h-full">
          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight">
            Seamless by Design.
          </h1>

          {/* Description */}
          <p className="mt-4 text-xl">
            Every real estate workflow, connected and automated without gaps.
          </p>

          {/* Carousel */}
          <div className="mt-12">
            <Carousel
              value={items}
              itemTemplate={itemTemplate}
              key={isMobileHero ? "mobile" : "desktop"}
              responsiveOptions={responsiveOptions}
              numVisible={numVisible}
              numScroll={numScroll}
              circular={circular}
              page={page}
              onPageChange={(e) => setPage(e.page)}
              showNavigators={false}
              showIndicators={false}
              // autoplayInterval={window.innerWidth <= 1024 ? 3000 : 0}
            />
          </div>

          {/* External buttons (bottom-right) */}
          <div className="mt-4 flex justify-end gap-3">
            <Button
              onClick={goPrev}
              icon="pi pi-arrow-left"
              className="bg-white text-black py-2"
              // disabled={totalPages <= 1}
            />
            <Button
              onClick={goNext}
              icon="pi pi-arrow-right"
              className="bg-white text-black py-2"
              // disabled={!isSmallScreen && totalPages <= 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineSection;
