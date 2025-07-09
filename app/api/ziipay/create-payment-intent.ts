import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Missing amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      transfer_data: {
        destination: "acct_1Ris1w2Y0VQACAr8", // ✅ your connected account
      },
      application_fee_amount: 100, // platform fee
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    console.error("PaymentIntent error:", err);
    return res.status(500).json({ error: err.message });
  }
}
