import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { paymentIntentId } = await req.json();

    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
    });

    return NextResponse.json({ refund });
  } catch (error: any) {
    console.error("Error creating refund:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
