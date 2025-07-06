// /pages/checkout.tsx

import React from "react";

export default function CheckoutPage() {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      if (!res.ok) {
        console.error("Fetch failed:", res.status);
        alert("Error creating checkout session.");
        return;
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No URL returned from server.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Checkout Page</h1>
      <button
        onClick={handleCheckout}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Pay $5.00
      </button>
    </div>
  );
}
