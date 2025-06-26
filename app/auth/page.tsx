'use client';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.push('/ziiflicks-upload'); // ✅ go to admin area if already logged in
      }
    };

    checkSession();
  }, [supabase, router]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth`, // returns here
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-4">🔐 Welcome to ZiiOZ Admin Login</h1>
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Sign in with Google
      </button>
    </div>
  );
}
