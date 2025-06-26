import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);


export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error('Webhook verification failed:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ✅ Handle Stripe event types
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    await supabase.from('payments').insert([
      {
        stripe_session_id: session.id,
        email: session.customer_email,
        amount_total: session.amount_total,
        created_at: new Date().toISOString(),
      },
    ]);
  }

  return new NextResponse('Webhook received', { status: 200 });
}
