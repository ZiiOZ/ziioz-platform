'use client';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email });
  };

  if (session) {
    router.push('/ziiflicks-upload');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-4">Sign in to ZiiOZ</h1>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Sign in
      </button>
    </div>
  );
}
