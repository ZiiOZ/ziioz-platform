// app/api/ziipay/transfer/route.ts

import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export async function POST(req: Request) {
  const { amountCents, connectedAccountId } = await req.json();

  try {
    const transfer = await stripe.transfers.create({
      amount: amountCents,
      currency: "usd",
      destination: connectedAccountId,
      description: "Test payout to connected account",
    });

    console.log("✅ Transfer created:", transfer.id);

    return NextResponse.json({ success: true, transfer });
  } catch (err: any) {
    console.error("❌ Transfer failed:", err);
    return new NextResponse(`Error: ${err.message}`, { status: 400 });
  }
}
