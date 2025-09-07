import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
