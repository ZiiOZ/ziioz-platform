'use client';

import { useUser } from '@supabase/auth-helpers-react';
import { useState } from 'react';

export default function ZiiPayPage() {
  const user = useUser();
  const [loading, setLoading] = useState(false);

  const startOnboarding = async () => {
    setLoading(true);
    const res = await fetch('/api/create-stripe-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user?.id, email: user?.email }),
    });

    const data = await res.json();
    setLoading(false);
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('ZiiPay onboarding failed.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔐 ZiiPay Setup</h1>
      <p className="mb-4">Connect your account to receive earnings & payouts.</p>
      <button
        onClick={startOnboarding}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
      >
        {loading ? 'Redirecting...' : 'Start ZiiPay Onboarding'}
      </button>
    </div>
  );
}
