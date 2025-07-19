'use client';

import { useState } from 'react';

const tabs = ['Trending', 'Fresh', 'Underground'];

export default function VibeTabs() {
  const [active, setActive] = useState('Trending');

  return (
    <div className="flex justify-center space-x-4 py-3 border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`text-sm px-4 py-1 rounded-full font-medium transition ${
            active === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
