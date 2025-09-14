"use client";

import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Image from "next/image";
import EngineSection from "@/components/EngineSection";
import SystemSection from "@/components/SystemSection";
import PerformanceSection from "@/components/PerformanceSection";
import IndustrySection from "@/components/IndustrySection";
import BackedBySection from "@/components/BackedBySection";
import FrictionSection from "@/components/FrictionSection";
import QuestionSection from "@/components/QuestionSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import SubscribeSection from "@/components/SubscribeSection";
import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect } from "react";

export default function Home() {
  const { setNavbarStyle } = useNavbar();

  // Set navbar style for home page (transparent with white text)
  useEffect(() => {
    setNavbarStyle({
      variant: "transparent",
      textColor: "white",
    });
  }, [setNavbarStyle]);

  return (
    <>
      <main className="relative min-h-screen">
        {/* Home Page Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/city-bg.png"
            alt="City background"
            fill
            className="object-cover brightness-[0.7] contrast-125"
            priority
            unoptimized
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <Sponsors />
        </div>
      </main>
      <EngineSection />
      <SystemSection />
      <PerformanceSection />
      <FrictionSection />
      <IndustrySection />
      <BackedBySection />
      <QuestionSection />
      <TrustSection />
      <CTASection />
      <SubscribeSection />
    </>
  );
}
