'use client';

import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');

    try {
      const response = await axios.post('/api/register', { email });

      if (response.data.success) {
        setStatus('success');
        setMessage('✅ Welcome email sent! Check your inbox.');
      } else {
        setStatus('error');
        setMessage('❌ Email failed. Try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg dark:bg-zinc-900">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign Up to ZiiOZ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          className="w-full p-3 border rounded-md focus:outline-none dark:bg-zinc-800"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-md hover:bg-zinc-800 transition"
        >
          Join Now
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 text-sm text-center ${
            status === 'success' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
