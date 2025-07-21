// File: app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ZiiOZ",
  description: "ZiiOZ Official Landing Page",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black relative">
        {/* Settings Icon - top right */}
        <a href="/settings" className="absolute top-4 right-4 z-50">
          <img
            src="/file.svg"
            alt="Settings"
            width="24"
            height="24"
            className="w-6 h-6 opacity-70 hover:opacity-100"
            style={{ maxWidth: "24px", maxHeight: "24px" }}
          />
        </a>

        {children}
      </body>
    </html>
  );
}
