"use client";

import { useState } from "react";

export default function ZiiPayOnboardButton() {
  const [loading, setLoading] = useState(false);

  const handleOnboard = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ziipay/onboard", { method: "POST" });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error ${res.status}: ${text}`);
      }

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No URL returned from server.");
      }
    } catch (err: any) {
      console.error("Onboarding error:", err);
      alert("Error starting onboarding:\n" + (err.message || err));
    } finally {
      setLoading(false);
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
