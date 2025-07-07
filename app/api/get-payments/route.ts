import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    const payments = await stripe.paymentIntents.list({
      limit: 30,
    });
    return NextResponse.json({ payments: payments.data });
  } catch (error: any) {
    console.error("Error fetching payments:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
