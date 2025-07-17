// app/(auth)/layout.tsx

import React from 'react';

export const metadata = {
  title: 'ZiiOZ Auth',
  description: 'Authentication pages for ZiiOZ',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        {children}
      </body>
    </html>
  );
}
