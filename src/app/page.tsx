import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/city-bg.png"
          alt="City background"
          fill
          className="object-cover brightness-[0.7] contrast-125"
          priority
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
  );
}
