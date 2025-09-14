"use client";

import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect } from "react";

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
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Welcome to AltCtrl - The Future of Communications & Collaborations.
            We are designed for the Real Estate Ecosystem, serving developers to
            agencies.
          </p>
          <p className="text-gray-600 mb-6">
            Our platform revolutionizes how real estate professionals
            communicate and collaborate, providing innovative solutions that
            streamline workflows and enhance productivity.
          </p>
          <p className="text-gray-600">
            With cutting-edge technology and a deep understanding of the real
            estate industry, we're building the tools that will shape the future
            of property development and management.
          </p>
        </div>
      </div>
    </div>
  );
}
