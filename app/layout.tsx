'use client';

import './globals.css';
import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import AuthBootstrap from '@/components/AuthBootstrap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <html lang="en">
      <body>
        <SessionContextProvider supabaseClient={supabase}>
          <AuthBootstrap />
          {children}
        </SessionContextProvider>
      </body>
    </html>
  );
}
