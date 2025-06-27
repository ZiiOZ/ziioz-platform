import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';



export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') || '';

  const { default: Stripe } = await import('stripe') as any;

  const stripe = new Stripe(process.env.STRIPE_WEBHOOK_SECRET!, {
    apiVersion: '2023-10-16' as any,
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

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  // Optional session logic
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('✅ Checkout session:', session);
  }

  return NextResponse.json({ received: true });
}
