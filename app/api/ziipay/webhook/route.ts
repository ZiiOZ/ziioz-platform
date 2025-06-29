import { NextRequest } from "next/server";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

// ✅ Initialize Stripe with the correct API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature") as string;

  // Read the raw request body
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(rawBody),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Webhook signature error:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log("✅ Stripe Event received:", event.type);

  // Handle payment_intent.succeeded event
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    console.log(`💰 PaymentIntent succeeded: ${paymentIntent.id}`);
  }

  return new Response("Webhook received", { status: 200 });
}
