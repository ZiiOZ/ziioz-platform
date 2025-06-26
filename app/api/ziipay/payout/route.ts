import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
} as unknown as Stripe.StripeConfig);


export async function POST(req: NextRequest) {
  try {
    const { connected_account_id, amount } = await req.json();

    const transfer = await stripe.transfers.create({
      amount,
      currency: 'usd',
      destination: connected_account_id,
    });

    return NextResponse.json({ success: true, transfer });
  } catch (error) {
    console.error('[PAYOUT ERROR]', error);
    return NextResponse.json({ error: 'Payout failed' }, { status: 500 });
  }
}
