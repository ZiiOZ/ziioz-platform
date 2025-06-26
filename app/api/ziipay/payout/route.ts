import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const { connectedAccountId, amountInCents } = await req.json();

    if (!connectedAccountId || !amountInCents) {
      return NextResponse.json({ error: 'Missing payout details' }, { status: 400 });
    }

    const payout = await stripe.payouts.create(
      {
        amount: amountInCents,
        currency: 'usd',
      },
      {
        stripeAccount: connectedAccountId,
      }
    );

    return NextResponse.json({ success: true, payout });
  } catch (error: any) {
    console.error('Payout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
