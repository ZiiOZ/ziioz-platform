'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      // Supabase session check removed
      // You can add custom logic here if needed
    };

    checkSession();
  }, [router]);

  const handleLogin = async () => {
    // Supabase OAuth login removed
    alert('Login functionality has been disabled.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-4">🔐 ZiiOZ Admin Login</h1>
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Sign in with Google
      </button>
    </div>
  );
}
