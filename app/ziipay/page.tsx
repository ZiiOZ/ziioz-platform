'use client';

import { useEffect, useState } from 'react';

export default function ZiiPayPage() {
  const [status, setStatus] = useState<any>(null);
  const [payouts, setPayouts] = useState<any[]>([]);

  const user_id = 'CURRENT_USER_ID'; // Replace or dynamically load

  useEffect(() => {
    const fetchData = async () => {
      const resStatus = await fetch(`/api/ziipay/status?user_id=${user_id}`);
      const jsonStatus = await resStatus.json();
      setStatus(jsonStatus);

      const resPayouts = await fetch(`/api/ziipay/payouts?user_id=${user_id}`);
      const jsonPayouts = await resPayouts.json();
      setPayouts(jsonPayouts);
    };

    fetchData();
  }, []);

  const handleOnboard = async () => {
    const res = await fetch('/api/ziipay/onboard', {
      method: 'POST',
      body: JSON.stringify({ user_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">💸 ZiiPay Dashboard</h1>
      <div className="mb-4">
        {status?.stripe_payouts_enabled ? (
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            disabled
          >
            ✅ Connected
          </button>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleOnboard}
          >
            Connect Stripe Account
          </button>
        )}
      </div>
      <h2 className="text-xl font-semibold mb-2">Recent Payouts</h2>
      {payouts.length === 0 ? (
        <p>No payouts yet.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2 text-left">Date</th>
              <th className="border p-2 text-left">Amount</th>
              <th className="border p-2 text-left">Currency</th>
              <th className="border p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((p) => (
              <tr key={p.id}>
                <td className="border p-2">
                  {new Date(p.payout_date).toLocaleDateString()}
                </td>
                <td className="border p-2">${p.amount}</td>
                <td className="border p-2">{p.currency}</td>
                <td className="border p-2">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
