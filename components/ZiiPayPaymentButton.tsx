'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ZiiPayPaymentButton({
  amount,
  connectedAccountId,
}: {
  amount: number;
  connectedAccountId: string;
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch('/api/ziipay/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, connectedAccountId }),
    });
    const { clientSecret } = await res.json();

    const stripe = await stripePromise;
    const { error } = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: { token: 'tok_visa' }, // For test mode only
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Payment succeeded!");
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
