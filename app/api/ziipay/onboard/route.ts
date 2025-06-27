import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,       // ✅ server-side key
    process.env.SUPABASE_SERVICE_ROLE_KEY!  // ✅ not NEXT_PUBLIC_
  );

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

    // optional: save Stripe account ID to Supabase
    await supabase.from('users').update({ stripe_account_id: account.id }).eq('email', email);

    return NextResponse.json({ url: accountLink.url }, { status: 200 });
  } catch (err: any) {
    console.error('Onboard error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
