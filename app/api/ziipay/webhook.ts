// app/api/ziipay/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import getRawBody from "raw-body";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export const config = {
  api: {
    bodyParser: false, // disable automatic body parsing
  },
};

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    console.error("❌ Missing Stripe signature header");
    return NextResponse.json({ error: "Missing Stripe signature header" }, { status: 400 });
  }

  // Get raw body
  const rawBody = await getRawBody(req.body as any);

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Log for confirmation
  console.log("✅ Webhook received:", event.id, event.type);

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("✅ PaymentIntent succeeded:", paymentIntent.id);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
