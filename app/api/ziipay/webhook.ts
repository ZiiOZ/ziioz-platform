import { NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro"; // 👈 Required for raw body

export const config = {
  api: {
    bodyParser: false, // 👈 Must disable body parsing
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing Stripe signature header" }, { status: 400 });
  }

  const rawBody = await buffer(req); // 👈 Use raw-body
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  console.log("✅ Event received:", event.type);
  return NextResponse.json({ received: true });
}
