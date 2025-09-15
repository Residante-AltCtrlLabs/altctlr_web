"use client";

import { useState } from "react";
import Image from "next/image";
import { useNavbar } from "@/contexts/NavbarContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbarStyle } = useNavbar();

  // Get styling based on variant
  const getNavbarClasses = () => {
    const baseClasses = "top-0 left-0 right-0 z-50";

    switch (navbarStyle.variant) {
      case "transparent":
        return `${baseClasses} absolute`;
      case "solid":
        return `${baseClasses} relative bg-white shadow-md`;
      case "dark":
        return `${baseClasses} relative bg-black`;
      default:
        return `${baseClasses} absolute`;
    }
  };

  const getTextClasses = () => {
    switch (navbarStyle.textColor) {
      case "white":
        return "text-white hover:text-gray-300";
      case "black":
        return "text-black hover:text-gray-700";
      case "gray":
        return "text-gray-700 hover:text-gray-900";
      default:
        return "text-white hover:text-gray-300";
    }
  };

  return (
    <nav className={getNavbarClasses()}>
      <div className="max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={`${getNavbarClasses().includes("bg-white")?"/images/blacklogo.svg":"/images/logo.svg"}`}
              alt="AltCtrl Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#platform"
                className={`${getTextClasses()} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Platform
              </a>
              <a
                href="#insights"
                className={`${getTextClasses()} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Insights
              </a>
              <a
                href="/about"
                className={`${getTextClasses()} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                About
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button
              className={`flex items-center space-x-2 ${getTextClasses()} transition-colors duration-200`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm font-medium">Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${getTextClasses()} focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                navbarStyle.variant === "transparent"
                  ? "bg-black/90 backdrop-blur-sm"
                  : "bg-white shadow-lg"
              } rounded-lg mt-2`}
            >
              <a
                href="#platform"
                className={`${getTextClasses()} block px-3 py-2 text-base font-medium`}
              >
                Platform
              </a>
              <a
                href="#insights"
                className={`${getTextClasses()} block px-3 py-2 text-base font-medium`}
              >
                Insights
              </a>
              <a
                href="/about"
                className={`${getTextClasses()} block px-3 py-2 text-base font-medium`}
              >
                About
              </a>
              <div
                className={`pt-4 pb-3 border-t ${
                  navbarStyle.variant === "transparent"
                    ? "border-white/10"
                    : "border-gray-200"
                }`}
              >
                <button
                  className={`flex items-center space-x-2 ${getTextClasses()} px-3 py-2 text-base font-medium`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
