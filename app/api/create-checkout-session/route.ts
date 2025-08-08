import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); // use your LIVE secret key in Vercel env

export async function POST(req: Request) {
  try {
    const { productType, userId, postId } = await req.json();

    // Live price IDs
    const priceMap: Record<string, string> = {
      boost:   "price_1RtfeU2ZERrYOxLrxIVXeyKI",  // Boots/Boost
      ziipin:  "price_1RtgRn2ZERrYOxLrkU4oQd9G",
      ziishout:"price_1Rtgdy2ZERrYOxLrwnvBBUWh",
    };

    const priceId = priceMap[productType];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid product type" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        productType,
        userId: userId ?? "",
        postId: postId ?? "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message ?? "Server error" }, { status: 500 });
  }
}
