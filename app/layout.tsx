// File: app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ZiiOZ',
  description: 'ZiiOZ Official Landing Page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black relative">
        {/* Settings Icon */}
        <a href="/settings" className="absolute top-4 right-4 z-50">
          <img
            src="/settings.svg"
            alt="Settings"
            width="24"
            height="24"
            className="w-6 h-6 opacity-70 hover:opacity-100"
          />
        </a>
        {children}
      </body>
    </html>
  );
}
