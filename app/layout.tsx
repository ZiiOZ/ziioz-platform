// File: app/layout.tsx

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ZiiOZ",
  description: "ZiiOZ Official Landing Page",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black relative">
        {/* ✅ Settings Icon Safe Position */}
        <Link href="/settings" className="absolute top-4 right-4 z-50">
          <img
            src="/file.svg"
            alt="Settings"
            className="w-6 h-6 opacity-70 hover:opacity-100"
          />
        </Link>

        {children}
      </body>
    </html>
  );
}
