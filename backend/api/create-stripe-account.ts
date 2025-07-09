import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const account = await stripe.accounts.create({
      type: "express",
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://yourdomain.com/reauth",
      return_url: "https://yourdomain.com/return",
      type: "account_onboarding",
    });

    return res.status(200).json({ url: accountLink.url });
  } catch (err: any) {
    console.error("Stripe account creation error:", err);
    return res.status(500).json({ error: err.message });
  }
}
