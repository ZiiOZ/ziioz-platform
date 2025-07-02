'use client';

import { useState } from 'react';

export default function ZiiPayOnboardButton() {
  const [loading, setLoading] = useState(false);

  const handleOnboard = async () => {
    setLoading(true);
    const res = await fetch('/api/ziipay/onboard', {
      method: 'POST',
    });
    const data = await res.json();
    setLoading(false);

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error starting onboarding.");
    }
  };

  return (
    <button
      onClick={handleOnboard}
      disabled={loading}
      className="bg-black text-white px-4 py-2 rounded"
    >
      {loading ? "Redirecting..." : "Set Up Payouts"}
    </button>
  );
}
