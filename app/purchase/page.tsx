'use client'

import { useState } from 'react'

export default function PurchasePage() {
  const [type, setType] = useState('boost')

  const handlePurchase = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    })

    const data = await res.json()
    if (data?.url) {
      window.location.href = data.url
    } else {
      alert('Something went wrong creating checkout session.')
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 ZiiOZ Promotions</h1>
      <p>Promote your post with one of our premium tools.</p>

      <label style={{ display: 'block', marginTop: 20 }}>Choose Promotion Type:</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      >
        <option value="boost">🔥 Boost ($10)</option>
        <option value="ziipin">📌 ZiiPin ($3)</option>
        <option value="ziishout">📣 ZiiShout ($5)</option>
      </select>

      <br /><br />
      <button onClick={handlePurchase} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Purchase {type === 'boost'
          ? 'Boost'
          : type === 'ziipin'
          ? 'ZiiPin'
          : 'ZiiShout'}
      </button>
    </main>
  )
}
