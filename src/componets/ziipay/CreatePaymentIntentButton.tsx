"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CreatePaymentIntentButton() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const createPaymentIntent = async () => {
    setLoading(true);
    const res = await fetch("/api/create-payment-intent", { method: "POST" });
    const data = await res.json();
    setClientSecret(data.clientSecret);
    setLoading(false);
  };

  const handlePayment = async () => {
    if (!stripe || !elements || !clientSecret) return;
    setLoading(true);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });
    if (result.error) {
      setMessage(result.error.message || "Payment failed");
    } else {
      setMessage("✅ Payment succeeded!");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded shadow max-w-md mx-auto mt-4">
      {!clientSecret ? (
        <button
          onClick={createPaymentIntent}
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Payment Intent"}
        </button>
      ) : (
        <>
          <CardElement className="border p-2 my-4" />
          <button
            onClick={handlePayment}
            className="px-4 py-2 bg-green-600 text-white rounded"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </>
      )}
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
