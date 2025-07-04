import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

// IMPORTANT: No apiVersion here, it uses environment default
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"] as string;
  let event: Stripe.Event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return res
      .status(400)
      .send(`Webhook Error: ${err instanceof Error ? err.message : "Unknown error"}`);
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent succeeded:", paymentIntent.id);
      break;
    case "account.updated":
      const account = event.data.object as Stripe.Account;
      console.log("Account updated:", account.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
}
