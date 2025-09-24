"use client";

import { useState } from "react";
import Image from "next/image";
import { useNavbar } from "@/contexts/NavbarContext";
import Link from "next/link";

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
            <Link href="/">
              <Image
                src={`${
                  getNavbarClasses().includes("bg-white")
                    ? "/images/blacklogo.svg"
                    : "/images/logo.svg"
                }`}
                alt="AltCtrl Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#platform"
                className={`${getTextClasses()} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Platform
              </Link>
              <Link
                href="/insights"
                className={`${getTextClasses()} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Insights
              </Link>
              <Link
                href="/about"
                className={`${getTextClasses()} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Link
              href="https://agent.altctrl.ai/login"
              target="_blank"
              className={`${getTextClasses()} px-4 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${getTextClasses()} inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#platform"
              className={`${getTextClasses()} block px-3 py-2 text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              href="/insights"
              className={`${getTextClasses()} block px-3 py-2 text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/about"
              className={`${getTextClasses()} block px-3 py-2 text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={`${getTextClasses()} block px-3 py-2 text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="https://agent.altctrl.ai/login"
              target="_blank"
              className={`${getTextClasses()} block px-3 py-2 text-base font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
