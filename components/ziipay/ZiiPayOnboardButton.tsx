"use client";

import { useState } from "react";

export default function ZiiPayOnboardButton() {
  const [loading, setLoading] = useState(false);

  const handleOnboard = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ziipay/onboard", { method: "POST" });

      // Safely try to parse JSON
      let data: any = null;
      try {
        data = await res.json();
      } catch {
        throw new Error(`Server error ${res.status}: invalid JSON response`);
      }

      if (!res.ok) {
        throw new Error(data?.error || `Server error ${res.status}`);
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No URL returned from server.");
      }
    } catch (err: any) {
      console.error("Onboarding error:", err);
      alert("Error starting onboarding:\n" + (err?.message || "Unknown error"));
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
      {loading ? "Processing..." : "Set Up Payouts"}
    </button>
  );
}
