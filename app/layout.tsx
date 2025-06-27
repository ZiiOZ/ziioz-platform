'use client';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <html lang="en">
      <body>
          {children}
        </SessionContextProvider>
      </body>
    </html>
  );
}
