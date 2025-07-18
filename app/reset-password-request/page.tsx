"use client";

import { useState } from "react";

export default function ResetPasswordRequest() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setMessage("✅ Password reset email sent! Check your inbox.");
    } else {
      setStatus("error");
      setMessage(`❌ ${data.error || "Something went wrong."}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-bold">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-300 transition"
          >
            {status === "loading" ? "Sending..." : "Send Reset Link"}
          </button>
          {status !== "idle" && (
            <p className={`text-center text-sm mt-2 ${status === "error" ? "text-red-400" : "text-green-400"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
