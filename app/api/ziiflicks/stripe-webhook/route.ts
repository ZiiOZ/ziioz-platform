import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.text(); // Get raw body for Stripe signature
  const sig = req.headers.get('stripe-signature') || '';

  // Lazy import Stripe so it's not invoked at build time
  const { default: Stripe } = await import('stripe');

  const stripe = new Stripe(process.env.STRIPE_WEBHOOK_SECRET!, {
    apiVersion: '2023-10-16',
  });

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Connect Supabase using private service key
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  // Optional: handle event type
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('✅ Checkout session:', session);

    // Optional insert to Supabase or logging
  }

  return NextResponse.json({ received: true });
}
