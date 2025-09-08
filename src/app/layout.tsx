import type { Metadata } from "next";
import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css'; // Choose your desired theme
import 'primereact/resources/primereact.min.css'; // Core PrimeReact styles
import 'primeicons/primeicons.css'; // PrimeIcons
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
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );

}
