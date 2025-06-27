import { createServerSupabaseClient } from '@/lib/supabase/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accountId = body?.accountId;
    const amount = body?.amount;

    if (!accountId || !amount) {
      return NextResponse.json(
        { error: 'Missing accountId or amount' },
        { status: 400 }
      );
    }

    // Optional: Create supabase client (if needed later)
    const supabase = createServerSupabaseClient();

    const payout = await stripe.payouts.create(
      {
        amount: Math.round(amount),
        currency: 'usd',
      },
      {
        stripeAccount: accountId,
      }
    );

    return NextResponse.json({ success: true, payout }, { status: 200 });
  } catch (err: any) {
    console.error('Payout error:', err.message || err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
