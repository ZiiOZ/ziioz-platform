import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// Next.js App Router: read the raw body for Stripe signature verification
export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") || "";
  const rawBody = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // Handle events
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Metadata you set in checkout session
      const productType = session.metadata?.productType;
      const userId = session.metadata?.userId;
      const postId = session.metadata?.postId;

      // TODO: call your internal logic here
      // e.g. await applyBoost({ productType, userId, postId, sessionId: session.id });

      console.log("✅ checkout.session.completed", { productType, userId, postId });
    }

    return new NextResponse("ok", { status: 200 });
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
