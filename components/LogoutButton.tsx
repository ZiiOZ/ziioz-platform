'use client';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function LogoutButton() {
  const supabase = useSupabaseClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
}
