// app/purchase/page.tsx

'use client';

import { useState } from 'react';

export default function PurchasePage() {
  const [selected, setSelected] = useState('boost');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({ type: selected }),
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <main className="p-6 max-w-xl mx-auto text-black">
      <h1 className="text-3xl font-bold mb-4">🚀 Promote Your Post</h1>
      <p className="mb-6">Choose a promotion type to supercharge your visibility.</p>

      <select
        className="border px-3 py-2 rounded w-full mb-4"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="boost">🔥 Boost ($10)</option>
        <option value="ziipin">📌 ZiiPin ($3)</option>
        <option value="ziishout">📣 ZiiShout ($5)</option>
      </select>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
      >
        {loading ? 'Redirecting...' : `Purchase ${selected.charAt(0).toUpperCase() + selected.slice(1)}`}
      </button>
    </main>
  );
}
