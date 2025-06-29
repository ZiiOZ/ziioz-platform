import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle the event types you care about
  switch (event.type) {
    case 'payout.paid': {
      const payout = event.data.object as Stripe.Payout;

      const { error } = await supabase.from('payouts').insert([
        {
          stripe_payout_id: payout.id,
          amount: payout.amount / 100, // Convert cents to dollars
          currency: payout.currency,
          payout_date: new Date(payout.arrival_date * 1000).toISOString(),
          status: 'paid',
        },
      ]);

      if (error) {
        console.error('Error inserting payout:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      break;
    }

    case 'payout.failed': {
      const payout = event.data.object as Stripe.Payout;

      const { error } = await supabase
        .from('payouts')
        .update({ status: 'failed' })
        .eq('stripe_payout_id', payout.id);

      if (error) {
        console.error('Error updating payout status:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
