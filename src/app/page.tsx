import Navbar from "@/components/Navbar";
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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Global Background Image */}
        <div className=" inset-0 z-0">
          <Image
            src="/images/city-bg.png"
            alt="City background"
            fill
            className="object-cover  brightness-[0.7] contrast-125"
            priority
            unoptimized
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
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

      <Footer />
    </>
  );
}
