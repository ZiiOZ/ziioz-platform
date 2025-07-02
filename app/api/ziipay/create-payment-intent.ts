import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { amount, connectedAccountId } = req.body;

    if (!amount || !connectedAccountId) {
      return res.status(400).json({ error: "Missing amount or connectedAccountId" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // e.g. 2000 = $20.00
      currency: "usd",
      payment_method_types: ["card"],
      transfer_data: {
        destination: connectedAccountId,
      },
      // Optional: take a platform fee
      application_fee_amount: 100, // e.g. $1.00 fee
    });

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("PaymentIntent error:", err);
    return res.status(500).json({ error: err.message });
  }
}
