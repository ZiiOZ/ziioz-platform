'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/'); // or redirect to /dashboard etc.
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Login to ZiiOZ</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-zinc-800 rounded border border-zinc-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-zinc-800 rounded border border-zinc-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Login
        </button>

        <p className="text-center text-sm">
          Forgot your password?{' '}
          <a href="/forgot" className="text-blue-400 hover:underline">
            Reset it
          </a>
        </p>
      </form>
    </div>
  );
}
