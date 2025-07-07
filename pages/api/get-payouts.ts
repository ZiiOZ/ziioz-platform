import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const balance = await stripe.balance.retrieve();
    const payouts = await stripe.payouts.list({ limit: 5 });
    res.status(200).json({
      balance: {
        available: balance.available[0]?.amount || 0,
        pending: balance.pending[0]?.amount || 0,
      },
      payouts: payouts.data,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
