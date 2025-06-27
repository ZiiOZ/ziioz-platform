'use client';

import { useState } from 'react';

export default function ZiiPayPage() {
  const [loading, setLoading] = useState(false);

  const handleZiiPayStart = async () => {
    setLoading(true);
    const res = await fetch('/api/create-stripe-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Add your payload here if needed
      }),
    });

    // handle response...
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleZiiPayStart} disabled={loading}>
        {loading ? 'Loading...' : 'Start ZiiPay'}
      </button>
    </div>
  );
}
