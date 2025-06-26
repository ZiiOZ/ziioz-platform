import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user_id, email } = body;

    if (!user_id || !email) {
      return NextResponse.json({ error: 'Missing user_id or email' }, { status: 400 });
    }

    // Create or retrieve Stripe account
    const account = await stripe.accounts.create({
      type: 'standard',
      email,
      metadata: { user_id },
    });

    // Create account link for onboarding
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://ziioz.com/ziipay/onboard',
      return_url: 'https://ziioz.com/ziipay/success',
      type: 'account_onboarding',
    });

    return NextResponse.json({ url: accountLink.url }, { status: 200 });

  } catch (error: any) {
    console.error('Stripe onboarding error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
