// File: app/layout.tsx

import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ZiiOZ',
  description: 'Welcome to ZiiOZ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Settings Button Top Left */}
        <div className="absolute top-4 left-4 z-50">
          <Link
            href="/settings"
            className="text-black text-4xl hover:text-gray-700 transition-all"
            aria-label="Settings"
          >
            ⚙️
          </Link>
        </div>

        {children}
      </body>
    </html>
  );
}
