import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export async function POST(req: Request) {
  try {
    // Get productType (and optional IDs) from frontend
    const { productType, userId, postId } = await req.json();

    // Map product types to live Stripe Price IDs
    const priceMap: Record<string, string> = {
      boost: "price_1RtfeU2ZERrYOxLrxIVXeyKI",     // Boost - $10 USD
      ziipin: "price_1RtgRn2ZERrYOxLrkU4oQd9G",    // ZiiPin - $3 USD
      ziishout: "price_1Rtgdy2ZERrYOxLrwnvBBUWh",  // ZiiShout - $5 USD
    };

    const priceId = priceMap[productType];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid product type" }, { status: 400 });
    }

    // Create the Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,

      // Metadata will be sent to the webhook after payment completes
      metadata: {
        productType, // Required
        userId: userId || "", // Optional - pass from frontend if available
        postId: postId || "", // Optional - pass from frontend if available
      },
    });

    // Return the checkout URL to frontend
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
