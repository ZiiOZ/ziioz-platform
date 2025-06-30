import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// IMPORTANT: Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

// Utility function to buffer the raw request body
async function buffer(readable: ReadableStream<Uint8Array>) {
  const reader = readable.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  console.log("Webhook received");

  const sig = req.headers.get("stripe-signature") as string;
  if (!sig) {
    console.error("Missing Stripe signature header");
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    // IMPORTANT: use raw body buffer
    const bodyBuffer = await buffer(req.body!);
    event = stripe.webhooks.constructEvent(
      bodyBuffer,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Process the event
  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("✅ PaymentIntent succeeded:", paymentIntent.id);
        break;

      case "charge.succeeded":
        const charge = event.data.object as Stripe.Charge;
        console.log("✅ Charge succeeded:", charge.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err: any) {
    console.error(`Webhook handler error: ${err.message}`);
    return NextResponse.json({ error: `Webhook handler error: ${err.message}` }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
