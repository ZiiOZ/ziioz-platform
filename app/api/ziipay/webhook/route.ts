import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  // Handle missing signature
  if (!sig) {
    return new NextResponse("Missing Stripe signature", { status: 400 });
  }

  // Handle pings without verification
  const testEvent = req.headers.get("stripe-event");
  if (testEvent === "ping") {
    console.log("Ping event received");
    return new NextResponse("Ping acknowledged", { status: 200 });
  }

  let event: Stripe.Event;
  const rawBody = await req.arrayBuffer();
  const bodyBuffer = Buffer.from(rawBody);

  try {
    event = stripe.webhooks.constructEvent(
      bodyBuffer,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle payout.paid event
  if (event.type === "payout.paid") {
    const payout = event.data.object as Stripe.Payout;
    const { id, amount, currency, arrival_date, status } = payout;

    const { error } = await supabase.from("payouts").insert([
      {
        stripe_payout_id: id,
        amount,
        currency,
        payout_date: new Date(arrival_date * 1000).toISOString(),
        status,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return new NextResponse(`Supabase Error: ${error.message}`, { status: 500 });
    }

    console.log(`Payout ${id} recorded successfully.`);
  }

  return new NextResponse("Event received", { status: 200 });
}
