// app/api/create-checkout-session/route.ts

import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

const priceMap: Record<string, string> = {
  boost: 'price_XXXXX',      // Replace with your actual Boost price ID
  ziipin: 'price_YYYYY',     // Replace with your ZiiPin price ID
  ziishout: 'price_ZZZZZ',   // Replace with your ZiiShout price ID
};

export async function POST(req: Request) {
  const { type } = await req.json();

  const price = priceMap[type];
  if (!price) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
    success_url: 'https://ziioz-platform.vercel.app/purchase?success=true',
    cancel_url: 'https://ziioz-platform.vercel.app/purchase?canceled=true',
  });

  return NextResponse.json({ url: session.url });
}
