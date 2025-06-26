// components/LogoutButton.tsx
'use client';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function LogoutButton() {
  const supabase = useSupabaseClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    location.href = '/auth'; // redirect to login after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-red-600 hover:underline mt-4"
    >
      Log Out
    </button>
  );
}
