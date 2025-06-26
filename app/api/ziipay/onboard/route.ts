import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const account = await stripe.accounts.create({
      type: 'standard',
      email,
    });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://ziioz.com/settings',
      return_url: 'https://ziioz.com/settings',
      type: 'account_onboarding',
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (error) {
    console.error('[STRIPE ONBOARD ERROR]', error);
    return NextResponse.json({ error: 'Failed to onboard user' }, { status: 500 });
  }
}
