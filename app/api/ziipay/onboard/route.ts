import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // ✅ Supabase is NOT required here — remove it entirely

    const account = await stripe.accounts.create({
      type: 'standard',
      email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });

    return NextResponse.json({ success: true, accountId: account.id }, { status: 200 });
  } catch (err: any) {
    console.error('ZiiPay Onboard Error:', err.message || err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
