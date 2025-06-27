// app/signin/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const session = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert('Error sending magic link');
    else alert('Check your email for the magic sign-in link!');
  };

  if (session) {
    router.push('/ziiflicks-admin');
    return <p>Redirecting...</p>;
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">🔐 ZiiOZ Admin Sign In</h1>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Send Magic Link
      </button>
    </div>
  );
}
