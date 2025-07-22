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
        {/* Settings Icon - Large & Clean */}
        <a
          href="/settings"
          className="absolute top-4 right-4 z-50 w-10 h-10 opacity-80 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.4 15a1.77 1.77 0 01.33 1.94l-.24.42a2.25 2.25 0 01-2.94.94 8.99 8.99 0 01-2.15 1.25 2.25 2.25 0 01-2.26-.24l-.43-.24a1.77 1.77 0 01-1.94.33l-.42-.24a2.25 2.25 0 01-.94-2.94 8.99 8.99 0 01-1.25-2.15 2.25 2.25 0 01.24-2.26l.24-.43a1.77 1.77 0 01-.33-1.94l.24-.42a2.25 2.25 0 012.94-.94 8.99 8.99 0 012.15-1.25 2.25 2.25 0 012.26.24l.43.24a1.77 1.77 0 011.94-.33l.42.24a2.25 2.25 0 01.94 2.94 8.99 8.99 0 011.25 2.15 2.25 2.25 0 01-.24 2.26l-.24.43z"
            />
          </svg>
        </a>
        {children}
      </body>
    </html>
  );
}
