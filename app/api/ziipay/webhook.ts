import { buffer } from "micro";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // IMPORTANT: disables Next.js body parsing
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"] as string;

  let event;

  try {
    const buf = await buffer(req);

    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log("✅ PaymentIntent was successful:", paymentIntent.id);
      break;
    default:
      console.log(`ℹ️ Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
}
