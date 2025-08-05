// app/page.tsx

'use client';

import { useState } from 'react';

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState('boost');

  return (
    <main className="p-6 max-w-xl mx-auto text-black">
      <h1 className="text-3xl font-bold mb-4">🚀 Welcome to ZiiOZ</h1>
      <p className="mb-6">Supercharge your posts instantly.</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Promotion</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option value="boost">🔥 Boost ($10)</option>
          <option value="ziipin">📌 ZiiPin ($3)</option>
          <option value="ziishout">📣 ZiiShout ($5)</option>
        </select>
      </div>

      <button
        onClick={() => alert(`Purchasing ${selectedOption}...`)}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Purchase {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
      </button>
    </main>
  );
}
