import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get current balance
    const balance = await stripe.balance.retrieve();

    // Get payout history (last 30)
    const payouts = await stripe.payouts.list({
      limit: 30,
    });

    res.status(200).json({
      balance,
      payouts: payouts.data,
    });
  } catch (error: any) {
    console.error("Stripe Payout Fetch Error:", error);
    res.status(500).json({ error: error.message });
  }
}
