import type { Metadata } from "next";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NavbarProvider } from "@/contexts/NavbarContext";

export const metadata: Metadata = {
  title: "AltCtrl - The Future of Communications & Collaborations",
  description:
    "Designed for the Real Estate Ecosystem — from Developers to Agencies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>
          <NavbarProvider>
            <Navbar />
            {children}
            <Footer />
          </NavbarProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
