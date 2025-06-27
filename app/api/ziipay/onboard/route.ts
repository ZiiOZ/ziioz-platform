import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any, // fix version conflict
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const account = await stripe.accounts.create({
      type: 'standard',
      email,
    });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://ziioz.com/ziipay',
      return_url: 'https://ziioz.com/ziipay',
      type: 'account_onboarding',
    });

    return NextResponse.json({ url: accountLink.url }, { status: 200 });
  } catch (err: any) {
    console.error('Stripe Onboard Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
