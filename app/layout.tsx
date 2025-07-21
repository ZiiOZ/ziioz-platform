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
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 opacity-70 hover:opacity-100"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11.25 3.25c0-.414.336-.75.75-.75s.75.336.75.75v1.5a7.5 7.5 0 012.598.8l1.057-1.057a.75.75 0 111.06 1.06l-1.057 1.057a7.5 7.5 0 01.8 2.598h1.5a.75.75 0 110 1.5h-1.5a7.5 7.5 0 01-.8 2.598l1.057 1.057a.75.75 0 11-1.06 1.06l-1.057-1.057a7.5 7.5 0 01-2.598.8v1.5a.75.75 0 11-1.5 0v-1.5a7.5 7.5 0 01-2.598-.8l-1.057 1.057a.75.75 0 11-1.06-1.06l1.057-1.057a7.5 7.5 0 01-.8-2.598h-1.5a.75.75 0 110-1.5h1.5a7.5 7.5 0 01.8-2.598L6.44 5.553a.75.75 0 011.06-1.06l1.057 1.057a7.5 7.5 0 012.598-.8v-1.5z"
  />
</svg>

        </a>
        {children}
      </body>
    </html>
  );
}
