import { createServerSupabaseClient } from '@/lib/supabase/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: NextRequest) {
  const supabase = createServerSupabaseClient(); // ✅ build-safe

  try {
    const { accountId, amount } = await req.json();

    if (!accountId || !amount) {
      return NextResponse.json({ error: 'Missing accountId or amount' }, { status: 400 });
    }

    const payout = await stripe.payouts.create(
      {
        amount: Math.round(amount),
        currency: 'usd',
      },
      {
        stripeAccount: accountId,
      }
    );

    // optional: log to Supabase or verify account ownership
    // await supabase.from('payout_logs').insert(...);

    return NextResponse.json({ success: true, payout }, { status: 200 });
  } catch (err: any) {
    console.error('Payout error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
