// File: app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'ZiiOZ',
  description: 'ZiiOZ Official Landing Page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black relative">
        {/* Settings Button - top right corner */}
        <Link
          href="/settings"
          className="fixed top-4 right-4 z-50 hover:opacity-90 transition"
        >
          <FiSettings size={36} className="text-gray-800 drop-shadow-md" />
        </Link>
        {children}
      </body>
    </html>
  );
}
