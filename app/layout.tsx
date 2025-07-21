// File: app/layout.tsx

import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZiiOZ",
  description: "ZiiOZ Official Landing Page",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
