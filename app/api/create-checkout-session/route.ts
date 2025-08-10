// app/api/create-checkout-session/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Stripe needs Node runtime

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_IDS: Record<string, string | undefined> = {
  boost:    process.env.STRIPE_PRICE_BOOST,
  ziipin:   process.env.STRIPE_PRICE_ZIIPIN,
  ziishout: process.env.STRIPE_PRICE_ZIISHOUT,
};

export async function POST(req: Request) {
  try {
    const { productType, userId, postId } = await req.json();
    const priceId = PRICE_IDS[productType];

    if (!priceId) {
      return NextResponse.json(
        { error: `Unknown productType or missing env var for ${productType}` },
        { status: 400 }
      );
    }

    // ✅ Sanity check here (now priceId exists)
    await stripe.prices.retrieve(priceId);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: { productType, userId: userId ?? "", postId: postId ?? "" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
