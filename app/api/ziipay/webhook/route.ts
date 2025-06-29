// app/api/ziipay/webhook/route.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") as string;

  // Stripe needs the raw body
  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`❌ Webhook signature verification failed: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ✅ Example handler for payment_intent.created
  if (event.type === "payment_intent.created") {
    const paymentIntent = event.data.object;
    console.log(`✅ PaymentIntent created: ${paymentIntent.id}`);
  }

  // ✅ You can add more event types here if needed

  return NextResponse.json({ received: true });
}
