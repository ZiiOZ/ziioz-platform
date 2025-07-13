import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ZiiOZ",
  description: "Your platform to create and engage",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen font-sans">
        <header className="p-4 border-b border-gray-200">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/ziioz-logo.png" alt="ZiiOZ Logo" className="h-8 w-8" />
              <span className="font-semibold text-xl">ZiiOZ</span>
            </div>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
