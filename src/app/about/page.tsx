"use client";

import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function About() {
  const { setNavbarStyle } = useNavbar();

  // Set navbar style for about page (solid white background with dark text)
  useEffect(() => {
    setNavbarStyle({
      variant: "solid",
      textColor: "black",
    });
  }, [setNavbarStyle]);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-[75%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
            Redefining
          </h1>
          <h2 className="text-4xl md:text-5xl font-light italic text-gray-700">
            How Real Estate Works
          </h2>
        </div>

        {/* Introductory Paragraph */}
        <div className="max-w-full mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            In today's real estate market, speed isn't just an advantage — it's
            the difference between closing a deal and losing one. Research shows
            that inquiries left unanswered for even a few minutes see conversion
            rates drop sharply. For developers and agencies investing heavily in
            marketing, every second counts. This article explores why real-time
            engagement is reshaping buyer expectations, how AI is driving
            instant responses across channels, and what it means for growth
            teams competing in crowded property markets.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {/* Section 1: Our Mission */}
          <Card className=" border-2 border-black shadow-none">
            <div className="p-6">
              <h3 className="text-5xl font-light italic text-gray-800 mb-6">
                <span className="font-bold"> Our </span> Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To give developers, agencies, and growth teams complete control
                over their workflows, so every lead is answered, every slot is
                scheduled, and every property gets the visibility it deserves.
              </p>
            </div>
          </Card>

          {/* Section 2: From Pain Points to Platform */}
          <Card className=" border-2 border-black shadow-none">
            <div className="p-6">
              <h3 className="text-5xl font-light italic text-gray-800 mb-2">
                <span className="font-bold"> From Pain Points </span> to
                Platform
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Altctrl was born from the frustrations we saw in real estate:
                missed leads, double-bookings, wasted ad spend, and scattered
                tools that don't talk to each other. Instead of another
                patchwork solution, we built a system of record — and system of
                action — designed for scale.
              </p>
            </div>
          </Card>

          {/* Section 3: Beyond a Single Product */}
          <Card className=" border-2 border-black shadow-none">
            <div className="p-6">
              <h3 className="text-5xl font-light italic text-gray-800 mb-2">
                <span className="font-bold"> Beyond a </span> Single Product.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Alternative Control Labs is more than Altctrl. With Residenté —
                our global luxury marketplace — and Melkeyat — our Middle
                East-focused platform — we're building an integrated ecosystem
                where every property, every market, and every workflow connects
                seamlessly.
              </p>
            </div>
          </Card>

          {/* Section 4: Who We Are */}
          <Card className=" border-2 border-black shadow-none">
            <div className="p-6">
              <h3 className="text-5xl font-light italic text-gray-800 mb-2">
                <span className="font-bold"> Who </span> We Are.
              </h3>

              <p className="text-gray-700 leading-relaxed">
                A collective of product builders, real estate experts, and
                technologists across MENA and beyond — united by one goal: to
                transform how deals get done.
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="text-center pb-16">
          <div className="mb-8">
            <h3 className="text-5xl font-light italic text-gray-800 mb-2">
              <span className="font-bold"> Experience </span> Power
            </h3>
          </div>

          <Button
            label="Take Control"
            icon="pi pi-arrow-up-right"
            iconPos='right'
            className="p-button-outlined font-medium px-[64px] py-[15px] text-[16px] rounded-full bg-white text-gray-500 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
