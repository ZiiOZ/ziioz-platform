import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx"); // Replace with your Stripe Publishable Key

export default function CreatePaymentIntentButton() {
  const handlePayment = async () => {
    try {
      const response = await fetch("https://ziioz-stripe-server.onrender.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js failed to load");

      const { error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: {
            // This assumes you have a CardElement mounted somewhere
            // Or you can create a PaymentElement instead
          },
        },
      });

      if (error) {
        console.error("Payment failed:", error);
        alert(`Payment failed: ${error.message}`);
      } else {
        alert("Payment succeeded!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error processing payment. See console for details.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Create Payment Intent
    </button>
  );
}
