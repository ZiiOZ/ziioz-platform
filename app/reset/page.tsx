"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const supabase = createClientComponentClient();

  const handleReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      console.error("Reset error:", error.message);
      alert("Error sending reset email.");
    } else {
      alert("Reset email sent!");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
}
