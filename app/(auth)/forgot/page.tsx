'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');

    try {
      const res = await axios.post('/api/reset', { email });
      if (res.data.success) {
        setStatus('success');
        setMessage('✅ Reset email sent! Check your inbox.');
      } else {
        setStatus('error');
        setMessage('❌ Failed to send email.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-xl shadow dark:bg-zinc-900">
      <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password?</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          className="w-full p-3 border rounded-md dark:bg-zinc-800"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-md hover:bg-zinc-800 transition"
        >
          Send Reset Link
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            status === 'success' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
