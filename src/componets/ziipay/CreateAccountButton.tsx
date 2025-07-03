import React from "react";

export default function CreateAccountButton() {
  const handleCreateAccount = async () => {
    try {
      const response = await fetch("https://ziioz-stripe-server.onrender.com/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned", data);
        alert("Error creating account. See console for details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating account. See console for details.");
    }
  };

  return (
    <button
      onClick={handleCreateAccount}
      className="bg-black text-white px-4 py-2 rounded"
    >
      Create Stripe Account
    </button>
  );
}
