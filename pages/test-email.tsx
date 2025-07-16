import { useState } from "react";

export default function TestEmailPage() {
  const [status, setStatus] = useState("");

  const handleSendEmail = async () => {
    const res = await fetch("/api/send-welcome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "assist.ziioz@gmail.com" }) // Change to your email
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div>
      <button onClick={handleSendEmail}>Send Welcome Email</button>
      {status === "success" && <p>Email sent successfully!</p>}
      {status === "error" && <p>Failed to send email.</p>}
    </div>
  );
}
