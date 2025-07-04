import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error creating checkout session.");
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Checkout Page</h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {loading ? "Redirecting..." : "Pay $5.00"}
      </button>
    </div>
  );
}
