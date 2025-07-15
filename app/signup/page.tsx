"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // ✅ Send Welcome Email AFTER successful signup
      await fetch("/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      });

      router.push("/login");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm space-y-6 text-center">
        <img src="/ziioz-logo.png" alt="ZiiOZ Logo" className="mx-auto w-20" />
        <h1 className="text-3xl font-bold text-gray-900">Sign Up for ZiiOZ</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
