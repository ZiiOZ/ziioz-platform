// Example component for testing email sending

"use client";
import { useState } from "react";

export default function TestEmail() {
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch(
        "https://automatic-engine-7vw6p7457pg43xxrj-3000.app.github.dev/api/send-welcome",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "wesbuhagiar@gmail.com", // ✅ Use your real email here
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send Welcome Email
      </button>
      <p>{status}</p>
    </div>
  );
}
