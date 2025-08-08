'use client';

type ProductType = 'boost' | 'ziipin' | 'ziishout';

async function handlePurchase(type: ProductType) {
  const res = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productType: type }),
  });

  const data = await res.json();
  if (data?.error) {
    alert(data.error);
    return;
  }

  // Redirect to Stripe Checkout
  window.location.href = data.url;
}

export default function PurchaseButtons() {
  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 320 }}>
      <button onClick={() => handlePurchase('boost')}>Buy Boost ($10)</button>
      <button onClick={() => handlePurchase('ziipin')}>Buy ZiiPin ($3)</button>
      <button onClick={() => handlePurchase('ziishout')}>Buy ZiiShout ($5)</button>
    </div>
  );
}
