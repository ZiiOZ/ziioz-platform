"use client";
import { useEffect, useState } from "react";

export default function ZiiPayRefundDashboard() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/get-payments");
        const data = await res.json();
        if (res.ok) {
          setPayments(data.payments);
        } else {
          setError(data.error || "Failed to load payments.");
        }
      } catch (err) {
        setError("Network error.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handleRefund = async (paymentIntentId: string) => {
    if (!confirm("Are you sure you want to refund this payment?")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/refund-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Refund successful.");
        location.reload();
      } else {
        alert("Refund failed: " + data.error);
      }
    } catch (err) {
      alert("Network error during refund.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">💳 ZiiPay Refund Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {payments.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <p><strong>ID:</strong> {p.id}</p>
            <p><strong>Amount:</strong> ${(p.amount_received / 100).toFixed(2)}</p>
            <p><strong>Status:</strong> {p.status}</p>
            <button
              onClick={() => handleRefund(p.id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
            >
              Refund
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
