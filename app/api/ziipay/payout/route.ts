import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // force override TS type mismatch
  apiVersion: '2023-10-16' as unknown as Stripe.StripeConfig['apiVersion'],
});



export async function POST(req: NextRequest) {
  try {
    const { accountId, amount } = await req.json();

    if (!accountId || !amount) {
      return NextResponse.json({ error: 'Missing accountId or amount' }, { status: 400 });
    }

    // Optional: validate amount boundaries
    const payout = await stripe.payouts.create(
      {
        amount: Math.round(amount), // in cents
        currency: 'usd',
      },
      {
        stripeAccount: accountId,
      }
    );

    return NextResponse.json({ success: true, payout }, { status: 200 });
  } catch (err: any) {
    console.error('Payout error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
