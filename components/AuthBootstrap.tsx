'use client';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';

export default function AuthBootstrap() {
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const insertUserIfNeeded = async () => {
      if (!session?.user) return;

        .from('users')
        .select('id')
        .eq('id', session.user.id)
        .single();

      if (!data && !error) {
        await supabase.from('users').insert([
          {
            id: session.user.id,
            email: session.user.email,
          },
        ]);
      }
    };

    insertUserIfNeeded();
  }, [session]);

  return null;
}
