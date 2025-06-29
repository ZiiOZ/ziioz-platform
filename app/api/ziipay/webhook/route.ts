import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") as string;

  // Get raw body as Buffer
  const rawBody = await req.arrayBuffer();
  const bodyBuffer = Buffer.from(rawBody);

  let event: Stripe.Event;

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

  // ✅ Example: Handle a payout.paid event
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
  }

  return new NextResponse("Received", { status: 200 });
}
